const Discord = require('discord.js');
const db = require('croxydb');

exports.run = function(client, message) {
const embed = new Discord.MessageEmbed()
.setColor('RANDOM')
.setTitle('<a:maviyildiz:793539752858877952> Abone Yardım Komutları')
.setTimestamp()
.addField('<a:maviyildiz:793539752858877952> .abonerol ', 'Abone Rolü Ayarlarsınız')
.addField('<a:maviyildiz:793539752858877952> .aboneyrol ', 'Yetkili Rolü Ayarlarsınız')
.addField('<a:maviyildiz:793539752858877952> .abone', 'Rol verirsiniz')
.addField('<a:maviyildiz:793539752858877952> .abonestats', 'Etiketlediğiniz kişinin veya kendinizin istatistiklerine bakarsınız.')
.addField('<a:maviyildiz:793539752858877952> .asayısıfırla', 'Stats Sayısı Sıfırlarsınız.')
.setImage('https://media.discordapp.net/attachments/769281758977458176/783299061012234260/standard_21.gif')
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
  name: 'aboneyardım',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım'
};