const Discord = require('discord.js');
const ms = require('parse-ms');

exports.run = async(client, message, args) => {
  let okul = new Date('2020-09-21:00:00')
    let zaman = ms(okul - Date.now())
    message.channel.send(`Okulların Açılmasına **${zaman.days}** Gün **${zaman.hours}** Saat **${zaman.minutes}** Dakika Kaldı.`)
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['okul', 'okul', 'okul', 'okul', 'okul'],
  permLevel: 0
};

exports.help = {
  name: 'okulll',
  description: '',
usage: "okulll"
};