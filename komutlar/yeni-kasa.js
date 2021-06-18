const Discord = require('discord.js');
const db = require('quick.db')
exports.run = async(client, message, args) => {
    let parası = await db.fetch(`benzin_${message.author.id}`)
    if(parası < 3) return message.channel.send("Kasa açmak için yeterli **BENZİN** yok.")
    let csgopng = ""
    var kasadancikanlar = [
        "**Acura Integra 1993** \n:euro: __*FİYAT*__: 383 **SP**",
        "**Fiat 500 2007** \n:euro: __*FİYAT*__: 283 **SP**",
        "**Datsun 240Z 1970** \n:euro: __*FİYAT*__: 233 **SP**",
        "**Honda_CR-Z_2011** \n:euro: __*FİYAT*__: 367 **SP**",
        "**Honda Civic Hatchback 1999** \n:euro: __*FİYAT*__: 217 **SP**",
        "**Honda Civic 2006** \n:euro: __*FİYAT*__: 283 **SP**",
        "**Nissan Versa 2008** \n:euro: __*FİYAT*__: 250 **SP**",
        "**Toyota Corolla XRS 2009** \n:euro: __*FİYAT*__: 250 **SP**",
        "**Toyota Yaris 2008** \n:euro: __*FİYAT*__: 100 **SP**",
        "**Ford Pinto 1973** \n:euro: __*FİYAT*__: 166 **SP**",
        "**Hyundai Veloster 2013** \n:euro: __*FİYAT*__: 516 **SP**",
        "**Scion xB 2008** \n:euro: __*FİYAT*__: 283 **SP**",

    ]
    var kasadancikanlar = kasadancikanlar[Math.floor(Math.random(1) * kasadancikanlar.length)]
      await db.add(`benzin_${message.author.id}`, -3)   
    const embed  = new Discord.RichEmbed()
    .setImage("https://i1.wp.com/www.nkfu.com/wp-content/uploads/2014/01/Simli-Araba-Gifleri-Resimleri-10.gif?fit=427%2C230&ssl=1")
    .setAuthor('ARAÇ ROL OLARAK EKLENDİ', csgopng)
    .setDescription(`${kasadancikanlar}`)
    .setFooter(`Kasayı açan (${message.author.username}) `)
    .setColor("RANDOM")
    return message.channel.sendEmbed(embed);
  let fiyat = '3';

};
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ['csgokasa'], 
  permLevel: 0
};

exports.help = {
  name: 'd',
  description: 'taslak', 
  usage: 'd'
};
  