const Discord = require('discord.js');
const db = require('quick.db')
const ms = require('parse-ms')
exports.run = async(client, message, args) => { 
  
  
  
  
  const aelmas = client.emojis.get('744885738751000616');
  
  let süre = await db.fetch(`ünlük-kullanım_${message.author.id}`)
  
  let gün = 70500050 
  
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
  
  
  
  let random_para = Math.floor(Math.random() * 2);
    
  
  message.delete();
  

  message.reply('\n :tada: **GÜNLÜK ELMAS** :tada: \n**KAZANILAN** : '+random_para+' :gem: **ELMAS**')
  
  
 db.set(`ünlük-kullanım_${message.author.id}`, Date.now()) 
  
  let elmass = await db.fetch(`elmass_${message.author.id}`)
  
  if(!elmass) db.set(`elmass_${message.author.id}`, random_para)
  else db.add(`elmass_${message.author.id}`, random_para)
  
  
    var Jimp = require("jimp");
    let img    = Jimp.read(message.mentions.users.first() ? message.mentions.users.first().avatarURL : message.author.avatarURL),
    moldura = Jimp.read("");
    Promise.all([img, moldura]).then(imgs => {
    let moldura = imgs[1],
        img    = imgs[0];
    moldura.resize(720, 720);   
    img.resize(720, 720)   
    img.composite(moldura, 0, 0).getBuffer(Jimp.MIME_PNG, (err, buffer) => {
        if (!err) 
        message.channel.send(new Discord.Attachment(buffer));   
    });
});
}

  
  
  
  

exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ['daily'], 
  permLevel: 0
};

exports.help = {
  name: 'elmas',
  description: 'taslak', 
  usage: 'elmas'
};
