const Discord = require('discord.js');
const db = require('quick.db')
exports.run = async(client, message, args) => {
    let parası = await db.fetch(`puan_${message.author.id}`)
    if(parası < 200) return message.channel.send("Kasa açmak için yeterli paran yok.")
    let csgopng = "https://cdn.discordapp.com/attachments/447829045376319500/516564269584744448/csgo.png"
    var kasadancikanlar = [
        "Çift Baretta 'PARÇA' (**Az aşınmış**) \nPrice:**298.88$**",
        "Five-Seven 'PORTAKAL' (**Az aşınmış**) \nPrice:**216.11$**",
        "PP-Bizon 'TESİS PLANI' (**Az aşınmış**) \nPrice:**622.62$**",
        "Aug 'FIRTINA' (**Az aşınmış**) \nPrice:**1713.9$**",
        "Tec-9 'DDPAT' (**Az aşınmış**) \nPrice:**272.69$**",

    ]
    var kasadancikanlar = kasadancikanlar[Math.floor(Math.random(1) * kasadancikanlar.length)]
      await db.add(`puan_${message.author.id}`, -200)   
    const embed  = new Discord.RichEmbed()
    .setImage("https://cdn.wallpapersafari.com/40/16/8rTMh6.jpg")
    .setAuthor('CS:GO', csgopng)
    .setDescription(`${kasadancikanlar}`)
    .setFooter(`Kasayı açan (${message.author.username}) `)
    .setColor("RANDOM")
    return message.channel.sendEmbed(embed);
  let fiyat = '200';

};
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ['csgokasa'], 
  permLevel: 0
};

exports.help = {
  name: 'bronz',
  description: 'taslak', 
  usage: 'bronz'
};
  