const http = require('http');
const fs = require('fs');

// Создаём сервер
const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/plain');

    try {
        // Искусственная ошибка для тестирования
        throw new Error('Test server error');
    } catch (error) {
        // Формируем сообщение для лога с текущей датой и временем
        const errorMessage = `${new Date().toISOString()} - ${error.message}\n`;

        // Записываем ошибку в файл errors.log
        fs.appendFile('errors.log', errorMessage, (fsErr) => {
            if (fsErr) console.error('Error writing to file:', fsErr);
        });

        // Отправляем клиенту ответ с ошибкой
        res.statusCode = 500;
        res.end('Internal Server Error');
    }
});

// Настройка порта
server.listen(3000, () => {
    console.log('Server 2 is running on port 3000');

    // Создаём пустой файл logs сразу при старте (чтобы точно появился)
    fs.appendFile('errors.log', `${new Date().toISOString()} - Server started\n`, () => {});
});
