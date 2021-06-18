const Discord = require('discord.js');
const db = require('quick.db')
exports.run = async(client, message, args) => {
    let parası = await db.fetch(`puan_${message.author.id}`)
    if(parası < 210) return message.channel.send("Kasa açmak için yeterli paran yok.")
    let csgopng = "https://cdn.glitch.com/5472d45d-0c19-452e-a865-f4cca69c9a55%2F82848579-cc80-4185-93d4-0e5776f1d973.image.png?v=1600009978118"
    var kasadancikanlar = [
        "**Acura Integra 1993** \n:euro: __*FİYAT*__: 383 **SP**",
        "**Fiat 500 2007** \n:euro: __*FİYAT*__: 283 **SP**",
        "**Datsun 240Z 1970** \n:euro: __*FİYAT*__: 233 **SP**",
        "**Honda_CR-Z_2011** \n:euro: __*FİYAT*__: 367 **SP**",
        "**Honda Civic Hatchback 1999** \n:euro: __*FİYAT*__: 217 **SP**",
        "**Honda Civic 2006** \n:euro: __*FİYAT*__: 283 **SP**",
        "**Nissan Versa 2008** \n:euro: __*FİYAT*__: 250 **SP**",
        "**Toyota Corolla XRS 2009** \n:euro: __*FİYAT*__: 250 **SP**",
        "**Hyundai Veloster 2013** \n:euro: __*FİYAT*__: 516 **SP**",
        "**Scion xB 2008** \n:euro: __*FİYAT*__: 283 **SP**",

    ]
    var kasadancikanlar = kasadancikanlar[Math.floor(Math.random(1) * kasadancikanlar.length)]
      await db.add(`puan_${message.author.id}`, -210)   
    const embed  = new Discord.RichEmbed()
    .setImage("")
    .setAuthor('KAZANDIN', csgopng)
    .setDescription(`${kasadancikanlar}`)
    .setFooter(`Kasayı açan (${message.author.username}) `)
    .setColor("RANDOM")
    return message.channel.sendEmbed(embed);
  let fiyat = '210';

};
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ['csgokasa'], 
  permLevel: 0
};

exports.help = {
  name: 'dsekment',
  description: 'taslak', 
  usage: 'dsekment'
};
  