const Discord = require('discord.js');

exports.run = function(client, message) {
const embed = new Discord.MessageEmbed()
.setColor('RANDOM')
.setTitle('Abone Rolü Nasıl Alınır')
.setTimestamp()
.setDescription(`
Abone Rolü Almak İçin Aşağıdaki Kanallara Abone Olmanız Gereklidir.
[Mustafa Mert Kanalına Gitmek İçin Tıkla](https://youtube.com/channel/UCHinX8fYUWm_MAfX4qXLbwA)
[Krom Kanalına Gitmek İçin Tıkla](https://www.youtube.com/channel/UCT9qTJQ_bSmZaVliDzxQuAQ)

Bu Kanallara Abone Olduktan Sonra <#780800445073063966> Kanalına **Tarih ve Saat Gözükecek Şekilde Tam Ekran Olarak** Screenshot Atmanız Gereklidir.

Screenshot'u Attıktan Sonra <@&760590308869406757> Rolüne Sahip 1 Kişiyi Etiketlemeniz Gereklidir.

Eğer 3 Dakika İçinde Rolünüz Verilmezse **Saygınızı ve Terbiyrnizi Korumak** Şartı ile Herhangi bir Yetkiliyi <#794313049040486420> Kanalında Etiketleyip Rolünüzü İsteyebilirsiniz.

`)
.setFooter('Cowboy', client.user.avatarURL())
.setTimestamp()
.setThumbnail(client.user.avatarURL())
message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: [], 
  permLevel: 4
};

exports.help = {
  name: 'ncaral',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım'
};