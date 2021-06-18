const Discord = require('discord.js');
const db = require('quick.db')
exports.run = async(client, message, args) => {
    let parası = await db.fetch(`puan_${message.author.id}`)
    if(parası < 130) return message.channel.send("Kasa açmak için yeterli paran yok.")
    let csgopng = "https://cdn.discordapp.com/attachments/706633264697180232/706637546008084550/diamond_award.png"
    var kasadancikanlar = [
        "**1**.LOGOYU KAZANDIN \n**FİYAT**: 170 **SP**",
        "**2**.LOGOYU KAZANDIN \n**FİYAT**: 150 **SP**",
        "**3**.LOGOYU KAZANDIN \n**FİYAT**: 160 **SP**",
        "**4**.LOGOYU KAZANDIN \n**FİYAT**: 130 **SP**",
        "**5**.LOGOYU KAZANDIN \n**FİYAT**: 170 **SP**",
        "**6**.LOGOYU KAZANDIN \n**FİYAT**: 170 **SP**",
        "**7**.LOGOYU KAZANDIN \n**FİYAT**: 170 **SP**",
        "**8**.LOGOYU KAZANDIN \n**FİYAT**: 190 **SP**",
        "**9**.LOGOYU KAZANDIN \n**FİYAT**: 220 **SP**",
        "**10**.LOGOYU KAZANDIN \n**FİYAT**: 130 **SP**",
        "**11**.LOGOYU KAZANDIN \n**FİYAT**: 190 **SP**",
        "**12**.LOGOYU KAZANDIN \n**FİYAT**: 170 **SP**",
        "**13*.LOGOYU KAZANDIN \n**FİYAT**: 150 **SP**",
        "**14**.LOGOYU KAZANDIN \n**FİYAT**: 150 **SP**",
        "**15**.LOGOYU KAZANDIN \n**FİYAT**: 190 **SP**",
        "**16**.LOGOYU KAZANDIN \n**FİYAT**: 130 **SP**",
        "**17**.LOGOYU KAZANDIN \n**FİYAT**: 190 **SP**",
        "**18**.LOGOYU KAZANDIN \n**FİYAT**: 230 **SP**",
        "**19**.LOGOYU KAZANDIN \nFİYAT**: 150 **SP**",
        "**20**.LOGOYU KAZANDIN \nFİYAT**: 150 **SP**",
        "**21**.LOGOYU KAZANDIN \nFİYAT**: 130 **SP**",
        "**22**.LOGOYU KAZANDIN \nFİYAT**: 160 **SP**",
        "**23**.LOGOYU KAZANDIN \nFİYAT**: 170 **SP**",
        "**25**.LOGOYU KAZANDIN \nFİYAT**: 170 **SP**",
        "**26**.LOGOYU KAZANDIN \nFİYAT**: 140 **SP**",
        "**27**.LOGOYU KAZANDIN \nFİYAT**: 170 **SP**",
        "**28**.LOGOYU KAZANDIN \nFİYAT**: 200 **SP**",
        "**29**.LOGOYU KAZANDIN \nFİYAT**: 140 **SP**",
        "**30**.LOGOYU KAZANDIN \nFİYAT**: 155 **SP**",
        "**31**.LOGOYU KAZANDIN \nFİYAT**: 160 **SP**",
        "**32**.LOGOYU KAZANDIN \nFİYAT**: 200 **SP**",
        "**33**.LOGOYU KAZANDIN \nFİYAT**: 150 **SP**",
        "**34**.LOGOYU KAZANDIN \nFİYAT**: 150 **SP**",
        "**35**.LOGOYU KAZANDIN \nFİYAT**: 300 **SP**",

    ]
    var kasadancikanlar = kasadancikanlar[Math.floor(Math.random(1) * kasadancikanlar.length)]
      await db.add(`puan_${message.author.id}`, -130)   
    const embed  = new Discord.RichEmbed()
    .setImage("https://cdn.discordapp.com/attachments/706633264697180232/706637546008084550/diamond_award.png")
    .setAuthor('LOGO KASASI', csgopng)
    .setDescription(`${kasadancikanlar}`)
    .setFooter(`Kasayı açan (${message.author.username}) `)
    .setColor("RANDOM")
    return message.channel.sendEmbed(embed);
  let fiyat = '130';

};
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ['csgokasa'], 
  permLevel: 0
};

exports.help = {
  name: 'logokasa',
  description: 'taslak', 
  usage: 'logokasa'
};
  