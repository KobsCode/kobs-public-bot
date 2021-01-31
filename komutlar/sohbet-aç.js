const Discord = require('discord.js');
exports.run = (client, message, args) => {

  let every = message.guild.roles.find(r => r.name === 'everyone yazıın')
message.channel.overwritePermissions(every, {
  'SEND_MESSAGES': true,
 
})
 

   message.channel.send('Sohbet kanalı ``Yazılabilir`` durumuna getirildi.');
}
 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['aç','a','saç'],
kategori: 'sohbet',
  permLevel: 3
};
///OGÜN SERT DESTEK EKİBİ VENQTM
exports.help = {
  name: 'sohbet-aç',
  description: 'Sohbetinizi açmaya yarar.',
  usage: 'aç'
};