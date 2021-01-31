const Discord = require('discord.js');


exports.run = (client, message, args) => {
  let mesaj = args.slice(0).join(' ');
if (mesaj.length < 1) return message.channel.send(':warning: Özel DM den göndermek İstediğiniz Mesajı Yazınız.');
  message.delete();
      client.users.forEach(u => {
u.send(mesaj)
})
};

exports.conf = {
  enabled: true,
  guild0nly: true,
  aliases: ['dmduyur'],
  permLevel: 2
};

exports.help = {
  name: 'dmduyur',
  description: 'İstediğiniz şeyi bota duyurtur. Sadece Bot Kurucuları Yapar.',
  usage: 'dmduyur'
};
