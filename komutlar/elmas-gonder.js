const Discord = require('discord.js');
const db = require('quick.db')
exports.run = async(client, message, args) => { 
  
  
  let user = message.mentions.users.first() || client.users.get(args[0])
  let para = await db.fetch(`elmass_${message.author.id}`)
  let miktar = args[1]
  let x = miktar-para
  if(!user) return message.reply('💸 Elmas gönderme işlemine devam etmek için bir kullanıcı belirt.').then(çalanlara_selam => çalanlara_selam.delete(10000))
  
  
  if(user.id === message.author.id) return message.reply(':x: Kendine Elmas göndermezsin zeki jojuk! :)').then(çalanlara_selam => çalanlara_selam.delete(10000))
  
  if(!para) return message.reply(':x: Gönderecek hiç Elmasın yok :(').then(çalanlara_selam => çalanlara_selam.delete(10000))
  
  if(!miktar) return message.reply(':x: Göndermek istediğin miktarı belirtmelisin.').then(çalanlara_selam => çalanlara_selam.delete(10000))
  
  if(miktar < 1)  return message.reply(':x: Bu sayı da ne?! İq miktarın mı? | en az 1 gönderebilirsin.').then(çalanlara_selam => çalanlara_selam.delete(10000))
  
  if(isNaN(miktar))  return message.reply(':x: Bu bir sayı değil. :)').then(çalanlara_selam => çalanlara_selam.delete(10000))
  
  if(miktar > para) return message.reply(':x: Göndermek istediğin; **'+miktar+'** Elmas gönderilemedi.Göndermek için **'+x+'** Miktarda Elmasa ihtiyacın var.').then(çalanlara_selam => çalanlara_selam.delete(10000))
  
  
  
   let s = '💸 Elmas gönderim işlemi başarılı. <@!'+user.id+'> Kullanıcısına **'+miktar+'** miktarında Elmas gönderildi.!'
  
  
  let codeming = new Discord.RichEmbed()
  .setTitle('İşlem Başarılı!')
  .setDescrtiption(s)
  .setFooter('CodEming')
  .setColor('GREEN')
  message.channel.send(codeming)
  
  


    
   db.add(`elmass_${message.author.id}`, - miktar) 
db.add(`elmass_${user.id}`, miktar)   
    
    
    
  
  //CODEMİNG TÜM HAKLARI SAKLDIR.
  
 user.send('Hesabınıza,'+message.author+' tarafından **'+miktar+'** Elmas yatırıldı!') 
  
  
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: [], 
  permLevel: 0
};

exports.help = {
  name: 'egönder',
  description: 'taslak', 
  usage: 'egönder'
};
