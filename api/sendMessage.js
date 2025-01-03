export default async (req, res) => {
  const { name, email, phone, service, customService, carDetails, color, message } = req.body;

  const telegramMessage = `
    New Quote Request:
    - Name: ${name || 'Not provided'}
    - Email: ${email || 'Not provided'}
    - Phone: ${phone || 'Not provided'}
    - Service: ${service || 'Not provided'}
    - Custom Service: ${customService || 'Not provided'}
    - Car Details: ${carDetails || 'Not provided'}
    - Car Color: ${color || 'Not provided'}
    - Message: ${message || 'Not provided'}
  `.trim();

  try {
    const response = await fetch(
      `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: process.env.TELEGRAM_CHAT_ID,
          text: telegramMessage,
        }),
      }
    );

    if (response.ok) {
      res.status(200).json({ success: true, message: 'Message sent successfully!' });
    } else {
      const errorData = await response.json();
      res.status(500).json({ success: false, error: errorData });
    }
  } catch (error) {
    res.status(500).json({ success: false, error: 'Failed to send message.' });
  }
};
