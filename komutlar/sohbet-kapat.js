const Discord = require("discord.js");
exports.run = (client, message, args) => {
  let every = message.guild.roles.find(r => r.name === "everyone yazın!");
  message.channel.overwritePermissions(every, {
    SEND_MESSAGES: false
  });

  message.channel.send("Sohbet kanalı ``Yazılamaz`` durumuna getirildi.");
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["k", "skapat", "kapat"],
  kategori: "sohbet",
  permLevel: 3
};
///OGÜN SERT DESTEK EKİBİ VENQTM
exports.help = {
  name: "sohbet-kapat",
  description: "Sohbetinizi kapatmaya yarar.",
  usage: "kapat"
};