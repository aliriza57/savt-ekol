const Discord = require("discord.js");
const db = require("quick.db")
const bot = new Discord.Client();
const ayarlar = require("../ayarlar.json");

module.exports.run = async (bot, message, args) => {


let veri = db.feth(`preveri`)

if (!veri) return message.reply("bu kişi pre değil")

/komut 
};
module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

module.exports.help = {
  name: "benzindsds",
  description: "",
  usage: "taslak"
}; 