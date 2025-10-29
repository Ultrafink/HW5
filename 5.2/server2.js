import http from 'http';
import fs from 'fs/promises';

const logFile = 'errors.log';

const server = http.createServer(async (req, res) => {
  res.setHeader('Content-Type', 'text/plain');

  try {
    // Искусственнпя ошибка
    throw new Error('Test server error');
  } catch (error) {
    const errorMessage = `${new Date().toISOString()} - ${error.message}\n`;

    try {
      await fs.appendFile(logFile, errorMessage);
    } catch (fsErr) {
      console.error('Error writing to log file:', fsErr);
    }

    res.statusCode = 500;
    res.end('Internal Server Error');
  }
});

server.listen(3000, async () => {
  console.log('Server 2 is running on port 3000');

  try {
    await fs.appendFile(logFile, `${new Date().toISOString()} - Server started\n`);
  } catch (err) {
    console.error('Error initializing log file:', err);
  }
});
