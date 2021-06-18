const Discord = require('discord.js');
const db = require('quick.db')
const ms = require('parse-ms')
exports.run = async(client, message, args) => { 
  
  
  
    let süre = await db.fetch(`soygun_sure_${message.author.id}`)
  
  let gün = 10800000 
  
  if (süre !== null && gün - (Date.now() - süre) > 0) {
        let time = ms(gün - (Date.now() - süre));

  
    let embed = new Discord.RichEmbed()
    .setTitle(':x: Hata!')
    .setDescription('Başka birini soyabilmen için;\n **'+time.hours+'** Saat,**'+time.minutes+'** Dakika,**'+time.seconds+'** Saniye daha beklemelisin.') 
    .setColor('RED')
    .setFooter(client.user.username, client.user.avatarURL)
    message.channel.send(embed).then(CodEming => CodEming.delete(10000))
    
    return
  }
  
  
  let user = message.mentions.users.first()
  
  
  if(!user) return message.reply('Kimi soymak istediğini belirtmelisin.!')
  
  
  if(user.id === message.author.id) return message.reply('Çok zekisin :)! \n Ama kendini soyamazsın üzgünüm.')
  
  if(user.bot) return message.reply('bir botu soyamazsın!')
  
  
  
  
  let puan = await db.fetch(`puan_${user.id}`)
  
  
  if(!puan) {
    
     let embed = new Discord.RichEmbed()
    .setTitle('Görev Başarısız!')
    .setDescription('Hiç parası olmayan birini soymaya çalıştın.Ceza olarak soymaya çalıştığın; <@!'+user.id+'> parasına **200** eklendi ve senin paran **200** indirildi.') 
    .setColor('RED')
    .setThumbnail(message.author.avatarURL) 
    .setFooter(client.user.username, client.user.avatarURL)
    message.channel.send(embed)
    
 db.set(`puan_${user.id}`, 200)   
  
  let kontrol = await db.fetch(`puan_${message.author.id}`)
    
  if(kontrol < 200) return message.reply('Sendende **200** para indirmeye çalıştım ancak o kadar paran yok :D!')
  
  db.add(`puan_${message.author.id}`, -200)
    
  return  
    
  }
  
  
  
  
  if(puan < 200) return message.reply('Soymaya çalıştığın kişi çok fakir.')
  
  
  let şanslar = ['başarılı', 'başarısız']
  
  let random = şanslar[Math.floor(Math.random() * şanslar.length)];
  
  
  
  
  
  if(random === "başarısız") {
    
     let kontrol = await db.fetch(`puan_${message.author.id}`)
    let kesilecek = kontrol / 2
         let embed = new Discord.RichEmbed()
    .setTitle('Görev Başarısız!')
    .setDescription(user +"'i saoymaya çalışırken,Yerde taşa takıldın ve halkdan dayak yedikten sonra polise yakalandın.Mahkeme Paranın yarısına, **"+kesilecek+"** el koymaya karar verdi.") 
    .setColor('RED')
    .setThumbnail(message.author.avatarURL) 
    .setFooter(client.user.username, client.user.avatarURL)
    message.channel.send(embed)
    
    
    db.add(`puan_${message.author.id}`, -kesilecek)
    return
  }
  
  if(random === "başarılı") {
      let random_para = Math.floor(Math.random() * 200);
    let embed = new Discord.RichEmbed()
    .setTitle('Görev Başarılı!')
    .setDescription("Soygun başarılı **"+random_para+"** Miktarında parayı çaldın!") 
    .setColor('GREEN')
    .setThumbnail(message.author.avatarURL) 
    .setFooter(client.user.username, client.user.avatarURL)
    message.channel.send(embed)
    
    
    db.add(`puan_${user.id}`, -random_para)
    db.add(`puan_${message.author.id}`, random_para)
    
    
  }
  
  db.set(`soygun_sure_${message.author.id}`, Date.now())
  // CODEMİNG KANIT VİDEOSU ÇALANLARA SELAM :))
  
  
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: [], 
  permLevel: 0
};

exports.help = {
  name: 'çaal',
  description: 'taslak', 
  usage: 'çaal'
};
