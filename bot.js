const mineflayer = require('mineflayer');

const bot = mineflayer.createBot({
  host: 'lifesealGAME.aternos.me', // IP السيرفر
  port: 44925,                           // البورت
  username: 'AFK_Bot',                   // اسم البوت، غيره لو تحب
  version: '1.20.1'                           // 
});

bot.on('spawn', () => {
  console.log('🤖 البوت دخل السيرفر');

  // حركة خفيفة كل 30 ثانية لمنع الطرد AFK
  setInterval(() => {
    bot.setControlState('jump', true);
    setTimeout(() => bot.setControlState('jump', false), 500);
  }, 30000);
});

bot.on('chat', (username, message) => {
  if (message === 'afk') {
    bot.chat('أنا شغال 😎');
  }
});

bot.on('end', () => {
  console.log('❌ البوت خرج من السيرفر');
});

bot.on('error', err => console.log('Error:', err));
