import { readFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import type { Database } from './db.ts';
import type { Hotel } from '../shared/types.ts';
export async function seedHotels(db: Database) {
  const selection = JSON.parse(await readFile(resolve('data/hotel_selection.json'), 'utf8'));
  const files: Record<string, string> = {
    kings_court_prague: 'data/dna/Kings Court.md',
    golden_well_prague: 'data/dna/Golden Well.md',
    pavillon_reine_paris: 'data/dna/Pavillon de la Reine.md',
    hotel_amour_nice: 'data/dna/Hotel Amour Nice.md',
  };
  for (const item of selection.hotels) {
    const existing = await db.query('SELECT id FROM hotels WHERE id=$1', [item.id]);
    if (existing.rows.length) continue;
    const dna = await readFile(resolve(files[item.id] || item.knowledge_file), 'utf8');
    const checked: Record<string, string[]> = {
      kings_court_prague: [
        'https://www.hotelkingscourt.cz/',
        'https://www.hotelkingscourt.cz/spa-in-prague',
        'https://www.hotelkingscourt.cz/meetings-in-prague',
      ],
      golden_well_prague: [
        'https://www.goldenwell.cz/',
        'https://www.goldenwell.cz/packages/discover-your-prague',
      ],
      pavillon_reine_paris: [
        'https://www.pavillon-de-la-reine.com/',
        'https://www.pavillon-de-la-reine.com/spa',
      ],
      hotel_amour_nice: [
        'https://hotelamourparis.fr/hotel-amour-nice/',
        'https://hotelamourparis.fr/hotel-amour-plage/',
      ],
    };
    const urls = checked[item.id] || ([item.official_url].filter(Boolean) as string[]);
    const historical = Boolean(item.knowledge_file);
    const hotel: Hotel = {
      id: item.id,
      name: item.name,
      city: item.city,
      country: item.country,
      dna,
      version: 1,
      conciergeStatus:
        item.id === 'pavillon_reine_paris' || item.id === 'sukhothai_bangkok' ? 'present' : 'unknown',
      reviewed: false,
      operationallyConfirmed: false,
      documents: [],
      sources: urls.map((url: string) => ({
        title: historical ? 'Historical profile reference — refresh needed' : 'Official preparation source',
        url,
        checkedAt: historical ? 'Historical; current validity unverified' : '2026-10-05',
        status: historical ? 'historical' : 'public',
      })),
    };
    await db.transaction(async (tx) => {
      await tx.query('INSERT INTO hotels(id,data) VALUES($1,$2)', [hotel.id, JSON.stringify(hotel)]);
      await tx.query('INSERT INTO dna_versions(hotel_id,version,data) VALUES($1,1,$2)', [
        hotel.id,
        JSON.stringify(hotel),
      ]);
    });
  }
}
