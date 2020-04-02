import app from './app';

async function main() {
  try {
    await app.setUp();
    app.startListening(Number(process.env.LISTENING_PORT) || 3000)
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

main();
