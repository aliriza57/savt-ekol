const Discord = require('discord.js')

exports.run = (client, message, args) => {    
  if ( message.react(':flag_tr:')) {
      var gif = [
      'https://r.resimlink.com/EPA0ps.gif', 'https://r.resimlink.com/QPOdlsX.gif'];

      var gifler = gif[Math.floor(Math.random() * gif.length)];
  }
    
    if (message.react(':flag_tr:')) {
    const op = new Discord.RichEmbed()
    .setDescription(`**CS-GO SPREY VE HASAR BİLGİ**`)
    .setColor('RANDOM')
    .setImage(gifler)
    return message.channel.send(op)
    }
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['sprey','siprey','csgo-sprey','aim'],
  permLevel: 0
};

exports.help = {
  name: 'cs-sprey',
  description: 'Türk bayrağı gönderir.',
  usage: 'cs-sprey'
};