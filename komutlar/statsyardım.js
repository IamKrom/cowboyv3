const Discord = require('discord.js');

exports.run = function(client, message) {
const embed = new Discord.MessageEmbed()
.setTitle('<a:maviyildiz:793539752858877952> Stats Komutları')
.setTimestamp()
.addField('<a:maviyildiz:793539752858877952> .me', 'Kendi istatistiklerinizi görürsünüz')
.addField('<a:maviyildiz:793539752858877952> .top', ' Sıralamayı görürsünüz')
.addField('<a:maviyildiz:793539752858877952> .reset', 'İstatistikleri Sıfırlarsınız (Bütün sunucudakileri sıfırlar)')
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
  name: 'statsyardım',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım'
};