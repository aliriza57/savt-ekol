const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const db = require('quick.db');

var prefix = ayarlar.prefix;
exports.run = async (client, message, args) => {
let elma = await db.fetch(`elmaalma_${message.author.id}`)
let miran = args[0]
if(!miran) return message.channel.send("Hangi ürüne bakacaksın. Örnek: 1çantam elma")
  if(miran === 'elma'){
    if(!elma) return message.channel.send("Hiç elma almamışsın.")
    message.channel.send("Toplamda **"+elma+"** elma satın almışsın.")
    

  }
    
};
    
var prefix = ayarlar.prefix;
exports.run = async (client, message, args) => {
let kasa = await db.fetch(`kasa_${message.author.id}`)
let miran = args[0]
if(!miran) return message.channel.send("Hangi ürüne bakacaksın. Örnek: 1çantam Kasa")
  if(miran === 'kasa'){
    if(!kasa) return message.channel.send("Hiç Kasa almamışsın.")
    message.channel.send("Toplamda **"+kasa+"** Kasa satın almışsın.")
    
  
  }

};


exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["pong","gecikme","servis"],
    permLevel: 0
};

exports.help = {
    name: 'çantam',
};