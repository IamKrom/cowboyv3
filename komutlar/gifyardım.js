const Discord = require('discord.js');//krom code Krom#0516
//krom code Krom#0516
exports.run = function(client, message) {
const embed = new Discord.MessageEmbed()
.setColor('RANDOM')
.setTitle('<a:maviyildiz:793539752858877952> Gif Komutları')
.setTimestamp()
.addField('<a:maviyildiz:793539752858877952> .gif-ara','Gif Ararsınız')
.addField('<a:maviyildiz:793539752858877952> .mangif','Erkek gifi')
.addField('<a:maviyildiz:793539752858877952> .womangif','Kadın gifi')
.addField('<a:maviyildiz:793539752858877952> .animegif','Anime gif')
.addField('<a:maviyildiz:793539752858877952> .babygif','Bebek gif')
.addField('<a:maviyildiz:793539752858877952> .hayvangif','Hayvan gifi')
.setFooter('Cowboy', client.user.avatarURL())//krom code Krom#0516
.setTimestamp()
.setThumbnail(client.user.avatarURL())//krom code Krom#0516
message.channel.send(embed)//krom code Krom#0516
};
//krom code Krom#0516
exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: [], //krom code Krom#0516
  permLevel: 0 
};

exports.help = {
  name: 'gifyardım',
  description: 'Tüm komutları gösterir.',//krom code Krom#0516
  usage: 'yardım'//krom code Krom#0516
};//krom code Krom#0516