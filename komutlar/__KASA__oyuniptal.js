const Discord = require('discord.js');
const db = require('quick.db')
exports.run = async(client, message, args) => {
    let parası = await db.fetch(`puan_${message.author.id}`)
    if(parası < 10000) return message.channel.send("Kasa açmak için yeterli paran yok.")
    let csgopng = "https://cdn.discordapp.com/attachments/706633264697180232/706637546008084550/diamond_award.png"
    var kasadancikanlar = [
        "**FİFA 19 Origin Hesabı** KAZANDIN (**5 TL Kaar**) \n**FİYAT**: 44,90 ****TL",
        "**RUST** KAZANDIN (**5 TL Kaar**) \n**FİYAT**: 44,90 **TL**",
        "**RAİNBOW SİX** KAZANDIN (**0 TL kaar ama güzel!**) \n**FİYAT**: 49,90 **TL**",
        "**PES 2020** KAZANDIN (**25 TL kaar**) \n**FİYAT**: 74,90 **TL**",
        "**PUBG** KAZANDIN (**10 TL kaar**) \n**FİYAT**: 59,90 **TL**",
        "**+50 KOSTÜM FORTNİTE** KAZANDIN (**35 TL Kaar**) \n**FİYAT**: 84,90 **TL**",
        "**CSGO** KAZANDIN (**0 TL Kaar ama güzel!**) \n**FİYAT**: 49,90 **TL**",

    ]
    var kasadancikanlar = kasadancikanlar[Math.floor(Math.random(1) * kasadancikanlar.length)]
      await db.add(`puan_${message.author.id}`, -10000)   
    const embed  = new Discord.RichEmbed()
    .setImage("https://cdn.wallpapersafari.com/40/16/8rTMh6.jpg")
    .setAuthor('LOGO KASASI', csgopng)
    .setDescription(`${kasadancikanlar}`)
    .setFooter(`Kasayı açan (${message.author.username}) `)
    .setColor("RANDOM")
    return message.channel.sendEmbed(embed);
  let fiyat = '10000';

};
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ['csgokasa'], 
  permLevel: 0
};

exports.help = {
  name: 'oyunkasa',
  description: 'taslak', 
  usage: 'oyunkasa'
};
  