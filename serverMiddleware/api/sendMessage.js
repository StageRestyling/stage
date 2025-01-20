import bodyParser from 'body-parser';

export default (req, res, next) => {
  // Используем body-parser для обработки JSON
  bodyParser.json()(req, res, (err) => {
    if (err) {
      res.writeHead(400, { 'Content-Type': 'application/json' });
      return res.end(JSON.stringify({ error: 'Invalid JSON format' }));
    }

    // Проверяем метод запроса
    if (req.method !== 'POST') {
      res.writeHead(405, { 'Content-Type': 'application/json' });
      return res.end(JSON.stringify({ error: 'Method not allowed' }));
    }

    // Деструктурируем данные из тела запроса
    const {
      name,
      email,
      phone,
      service,
      customService,
      carDetails,
      color,
      message,
    } = req.body;

    // Проверяем, что все обязательные поля заполнены
    if (!name || !email || !service || !carDetails) {
      res.writeHead(400, { 'Content-Type': 'application/json' });
      return res.end(JSON.stringify({ error: 'Missing required fields' }));
    }

    // Получаем токен и ID чата из переменных окружения
    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    // Проверяем, что переменные окружения установлены
    if (!botToken || !chatId) {
      res.writeHead(500, { 'Content-Type': 'application/json' });
      return res.end(JSON.stringify({ error: 'Missing environment variables' }));
    }

    // Формируем сообщение для Telegram
    const telegramMessage = `
🚘 New Quote Request from Website:
👤 Name: ${name || 'N/A'}
📧 Email: ${email || 'N/A'}
📞 Phone: ${phone || 'N/A'}
🛠️ Service: ${service === 'Other' ? customService || 'N/A' : service || 'N/A'}
🚗 Car Details: ${carDetails || 'N/A'}
🎨 Car Color: ${color || 'N/A'}
✉️ Message: ${message || 'N/A'}
    `;

    // Отправляем сообщение в Telegram
    fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: chatId, text: telegramMessage }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to send message to Telegram');
        }
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: true, message: 'Message sent successfully' }));
      })
      .catch((error) => {
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Failed to send message' }));
      });
  });
};
