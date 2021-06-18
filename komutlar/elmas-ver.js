const Discord = require('discord.js');
const db = require('quick.db')
var ayarlar = require('../ayarlar.json');
exports.run = async(client, message, args) => { 
  
  
  
  
  if(message.author.id !== ayarlar.sahip) return message.reply('Bu komutu kullanabilmek için yeterli yetkiye sahip değilsin.!').then(x => x.delete(10000))
  
  
  
  let user = message.mentions.users.first() || client.users.get(args[0])
  let eklenecek = args[1]
  
  let embeds = new Discord.RichEmbed()
  .setTitle(':warning: Hata!')
  .setFooter(client.user.username, client.user.avatarURL)
  .setColor('RED')
  
  
  // ❌
  
  // ✅
  
 if(!user) {
   

   message.react('❌')
   
   embeds.setDescription('**Elmas** eklemek için bir kullanıcı veya İD gir.')
   
   message.channel.send(embeds).then(codeming => codeming.delete(12000))
   return
 }
  
 if(user.bot) {
   

   message.react('❌')
   
   embeds.setDescription('Botlara Elmas ekliyemezsin.')
   
   message.channel.send(embeds).then(codeming => codeming.delete(12000))
   return
 }  
   if(!eklenecek)  {
   

   message.react('❌')
   
   embeds.setDescription('**Elmas** eklemem için bir **miktar** belirtmen gerekiyor.')
   
   message.channel.send(embeds).then(codeming => codeming.delete(12000))
   return
 } 
  
  
  
 if(isNaN(eklenecek))  {
   

   message.react('❌')
   
   embeds.setDescription('**Elmas** eklemem için bir **sayı** belirtmen gerekiyor.')
   
   message.channel.send(embeds).then(codeming => codeming.delete(12000))
   return
 } 
  
  
 
  
  let elmass = await db.fetch(`elmass_${user.id}`)


  
let sonuc = elmass + eklenecek
  


  
    
  let basarılı = new Discord.RichEmbed()
  //.setTitle('✅ İşlem Tamam!')
  .setDescription(`<@!${user.id}> Adlı kullanıcıya **${eklenecek}** Elmas eklendi! `)
  //.setFooter(client.user.username, client.user.avatarURL)
  .setColor('BLUE')
  message.channel.send(basarılı)
  
  
  message.react('✅')
  
  if(!elmass) db.set(`elmass_${user.id}`, eklenecek)
  else db.add(`elmass_${user.id}`, eklenecek)
  
  user.send('Kurucum tarafından hesabınıza **'+eklenecek+'** Elmas eklendi! :tada:')
  
  
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ['elmass-ekle'], 
  permLevel: 0
};

exports.help = {
  name: 'ever',
  description: 'taslak', 
  usage: 'ever'
};
