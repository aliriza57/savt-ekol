const Discord = require('discord.js');
const db = require('quick.db')
const ms = require('parse-ms')
exports.run = async(client, message, args) => { 
  
  
  
  let süre = await db.fetch(`günlük-kullanım_${message.author.id}`)
  
  let gün = 70500000
  
  if (süre !== null && gün - (Date.now() - süre) > 0) {
        let time = ms(gün - (Date.now() - süre));

    message.delete();
  
    let embed = new Discord.RichEmbed()
    .setTitle(':x: Hata!')
    .setDescription('Günlük ödülünü alabilmen için;\n **'+time.hours+'** Saat,**'+time.minutes+'** Dakika,**'+time.seconds+'** Saniye Kaldı!') 
    .setColor('RED')
    .setAuthor(message.member.user.username, message.author.avatarURL)
    .setFooter(client.user.username, client.user.avatarURL)
    message.channel.send(embed).then(CodEming => CodEming.delete(10000))
    
    return
  }
  
  
  
  let random_para = Math.floor(Math.random() * 20);
    
  

  
  
  message.reply('\n :tada: **GÜNLÜK PARA** :tada: \n**KAZANILAN** : '+random_para+' :yen: **SP**')
  
  
 db.set(`günlük-kullanım_${message.author.id}`, Date.now()) 
  
  let puan = await db.fetch(`puan_${message.author.id}`)
  
  if(!puan) db.set(`puan_${message.author.id}`, random_para)
  else db.add(`puan_${message.author.id}`, random_para)
  


};
          
              
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ['daily'], 
  permLevel: 0
};

exports.help = {
  name: 'sp',
  description: 'taslak', 
  usage: 'sp'
};