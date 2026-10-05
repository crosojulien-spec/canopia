// Separate local rehearsal: never uses a key, transport, or remote database.
export {};
process.env.CANOPIA_AI_MODE = 'simulation';
process.env.CANOPIA_ALLOW_AI_CALLS = 'false';
process.env.CANOPIA_ALLOW_EMAIL = 'false';
process.env.CANOPIA_ALLOW_REAL_STAYS = 'false';
process.env.DATABASE_URL = '';
process.env.CANOPIA_DATA_DIR = '.local/rehearsal';
await import('../server/index.ts');
