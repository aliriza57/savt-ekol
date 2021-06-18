const Discord = require('discord.js');
const ms = require('parse-ms');

exports.run = async(client, message, args) => {
  let yilbasi = new Date('2022-01-01:00:00')
    let zaman = ms(yilbasi - Date.now())
    message.channel.send(`Yılbaşına Girmemize **${zaman.days}** Gün **${zaman.hours}** Saat **${zaman.minutes}** Dakika Kaldı.`)
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yilbasi', 'yilbaşi', 'yılbası', 'yılbasi', 'yilbası'],
  permLevel: 0
};

exports.help = {
  name: 'yılbaşı',
  description: '',
usage: ""
};