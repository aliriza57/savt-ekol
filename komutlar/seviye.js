const Discord = require('discord.js');
const db = require('quick.db')
exports.run = async(client, message, args) => { 
  
   let hm = await db.fetch(`seviyeacik_${message.guild.id}`)
  let kanal = await db.fetch(`svlog_${message.guild.id}`)
  let xp = await db.fetch(`verilecekxp_${message.guild.id}`)
  let seviyerol = await db.fetch(`svrol_${message.guild.id}`)
  let rollvl = await db.fetch(`rollevel_${message.guild.id}`)
  let kxp = await db.fetch(`xp_${message.author.id}_${message.guild.id}`)
  let klvl = await db.fetch(`lvl_${message.author.id}_${message.guild.id}`)
  if(!hm) return message.channel.send('Seviye komutları aktif değil! \n `!seviye-aç !seviye-rol !seviye-log !seviye-xp !seviye-ayarlar !seviye-kapat`')
  var user = message.mentions.users.first() || message.author;
  
  let kontrol;
  if(klvl == null) kontrol = '0'
  else kontrol = kxp
  
  let kontrol2;
  if(klvl == null) kontrol2 = '0'
  else kontrol2 = klvl
  
  message.delete();
  
  let seviye = new Discord.RichEmbed()
  .setTitle('Seviye Sistemi:  ||1lvl||')
  .addField('Kullanıcı:', user, true)
  .addField('XP:', '**'+kontrol+'**', true)
  .addField('Level:', '**'+kontrol2+'**', true)
  .setFooter('')
  .setColor('RANDOM')
  .setThumbnail(user.avatarURL)
  message.channel.send(seviye)
 

 };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: [], 
  permLevel: 0
};

exports.help = {
  name: 'lvl',
  description: 'taslak', 
  usage: 'lvl'
};