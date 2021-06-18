const Discord = require('discord.js');
const db = require('quick.db')
var ayarlar = require('../ayarlar.json');
exports.run = (client, message, args) => { 
  
  let yardım = new Discord.RichEmbed()
  .setAuthor('Yardım Menüsü', client.user.avatarURL)
  .setDescription('**DM** kutunu kontrol et!')
  .setColor('GREEN')
  message.channel.send(yardım)
  
  
  let prefix = ayarlar.prefix
  
  
  let SAVT = new Discord.RichEmbed()
  .setTitle(client.user.username +' Yardım Menüsü')
  .addField(':crown: ', `${prefix}yardım | Yardım menüsünü atar.\n :book: \n${prefix}cüzdan | belirtilen kişinin Para (SP) miktarını atar.\n:school_satchel: \n${prefix}sp | Günlük (0-20) SP arası para alırsınız. \n :euro: \n${prefix}elmas | Günlük (0-1) arası Elmas alırsınız \n :gem:`)
  .setFooter('SAVT')
  .setColor('RANDOM')
  message.author.send(SAVT)
  
  
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: [], 
  permLevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'taslak', 
  usage: 'yardım'
};
