const Discord = require('discord.js');
const db = require('croxydb');
exports.run = async (client, message, args) => {

  
 if(!message.member.roles.cache.has(db.fetch(`aboneyetkilisi_${message.guild.id}`))) {
    return message.channel.send("Bu Komutu Kullanabilmek İçin Gerekli Yetkiye Sahip Değilsin!");
 }
  let user = message.mentions.members.first()
   if (!user) return message.channel.send('Kime Rol Verceğimi Yazmadın!').catch(console.error);
   if (user.roles.cache.has(db.fetch(`abonerolü_${message.guild.id}`))) return message.channel.send("Bu Kullanıcıda Zaten Abone Rolü Var!")
  user.roles.add(db.fetch(`abonerolü_${message.guild.id}`))
  const embed = new Discord.MessageEmbed()
  .setColor('#ff0000')
  .setTimestamp()
  .setFooter('Cowboy Abone Sistemi')
  .setDescription('**Abone Rolü Verildi!**')
  .addField(`Abone Rolü Alan Kullanıcı;`, `${user}`,true)
  .addField(`Abone Rolü Veren Yetkili;`,`${message.author}`,true)
  .setImage("https://media.discordapp.net/attachments/769281758977458176/783299061012234260/standard_21.gif")
  message.channel.send(embed)
  db.add(`aboneistatistik${message.author.id}.${message.guild.id}`, 1)
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['abone','onay','onayla','a']
};

exports.help = {
  name: "abonever",
  description: "31!",
  usage: "abone"
};