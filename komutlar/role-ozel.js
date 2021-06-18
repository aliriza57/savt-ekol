const Discord = require("discord.js");
const db = require("quick.db")
const bot = new Discord.Client();
const ayarlar = require("../ayarlar.json");

module.exports.run = async (bot, message, args) => {


 if (!message.member.roles.has("s")) return message.reply("belirlenen rol olman lazım")

//komutun
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