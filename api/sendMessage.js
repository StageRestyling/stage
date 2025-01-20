export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, phone, service, customService, carDetails, color, message } = req.body;

  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!botToken || !chatId) {
    return res.status(500).json({ error: 'Missing environment variables' });
  }

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

  try {
    const telegramResponse = await fetch(
      `https://api.telegram.org/bot${botToken}/sendMessage`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ chat_id: chatId, text: telegramMessage }),
      }
    );

    if (!telegramResponse.ok) {
      const errorData = await telegramResponse.json();
      throw new Error(`Telegram API Error: ${errorData.description}`);
    }

    res.status(200).json({ success: true, message: 'Message sent successfully' });
  } catch (error) {
    console.error('Error sending message:', error.message);
    res.status(500).json({ error: 'Failed to send message' });
  }
}
