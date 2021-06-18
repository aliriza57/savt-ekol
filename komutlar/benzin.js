const Discord = require('discord.js');
const db = require('quick.db')
const ms = require('parse-ms')
exports.run = async(client, message, args) => { 
  
  
     if (!message.member.roles.has("694544984422088716")) return message.reply("Bir Klananda Olman Lazım")
  
  const benzinn = client.emojis.get('753166111616532613');
  
  
  let süre = await db.fetch(`nlük-kullanım_${message.author.id}`)
  
  let gün = 155000050
  
  if (süre !== null && gün - (Date.now() - süre) > 0) {
        let time = ms(gün - (Date.now() - süre));

    message.delete();
  
    let embed = new Discord.RichEmbed()
    .setTitle(':x: Hata!')
    .setDescription('Günlük benzin alabilmen için;\n **'+time.days+'** Gün,**'+time.hours+'** Saat,**'+time.minutes+'** Dakika,**'+time.seconds+'** Saniye Kaldı!') 
    .setColor('RED')
    .setAuthor(message.member.user.username, message.author.avatarURL)
    .setFooter(client.user.username, client.user.avatarURL)
    message.channel.send(embed).then(CodEming => CodEming.delete(15000))
    
    return
  }
  
  
  
  let random_para = Math.floor(Math.random() * 2);
    
  
  message.delete();
  
  
  message.reply('\n:tada: **GÜNLÜK** : '+random_para+':oil:**BENZİN KAZANDIN** :tada:')

  
  
 db.set(`nlük-kullanım_${message.author.id}`, Date.now()) 
  
  let benzin = await db.fetch(`benzin_${message.author.id}`)
  
  if(!benzin) db.set(`benzin_${message.author.id}`, random_para)
  else db.add(`benzin_${message.author.id}`, random_para)
  
  
  
  
  
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ['daily'], 
  permLevel: 0
};

exports.help = {
  name: 'benzin',
  description: 'taslak', 
  usage: 'benzin'
};
