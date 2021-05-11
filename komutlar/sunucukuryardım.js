const Discord = require('discord.js');

exports.run = function(client, message) {
const embed = new Discord.MessageEmbed()
.setColor('RANDOM')
.setTitle('<a:maviyildiz:793539752858877952> Sunucu Kur Komutları')
.setTimestamp()
.addField('<a:maviyildiz:793539752858877952> .şablongönder', 'Botun sahibine şablon gönderirsiniz.')
.addField('<a:maviyildiz:793539752858877952> .normalsunucukur', 'Normal sunucu kurar')
.addField('<a:maviyildiz:793539752858877952> .nitrosunucukur', 'Nitro sunucusu kurar')
.setFooter('Cowboy', client.user.avatarURL())
.setTimestamp()
.setThumbnail(client.user.avatarURL())
message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: [], 
  permLevel: 0 
};

exports.help = {
  name: 'sunucukur',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım'
};