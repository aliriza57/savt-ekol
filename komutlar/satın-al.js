const Discord = require('discord.js');
const db = require('quick.db')
exports.run = async(client, message, args) => { 
  
  let barkod = args[0]
  
  if(!barkod) return message.reply('Bir ürün kodu girmelisin.')
  
  
  let ürün;
  let fiyat;
  let stok;
  let parası = await db.fetch(`puan_${message.author.id}`)
  
  ///////////////////////////////// ÖRNEK \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
  
  

  
  if(barkod === "elma") {
    
    
ürün = "Taze Elma"    
fiyat = "20"    
stok = "5"
    
    
let elmastok = db.fetch(`elma_stok`)


let s;
if(!elmastok) s =  stok - 1  
else s = stok - elmastok   
    
    

    if(parası < fiyat) return message.reply('Almak istediğin **'+ürün+'** adlı ürün; **'+fiyat+'** fiyatına satılıyor.Satın alabilmen için **'+fiyat - parası+'** Miktarda SP ye ihtiyacın var.')
 if(s = 0) return message.reply('Maalesef bu üründen **0** adet kalmış :(!')  
   
    let cüzdan = new Discord.RichEmbed()
.setDescription(':apple: '+ürün+' Bİr adet **'+ürün+'** Aldın! Karşılığında **'+fiyat+'** Miktarında para ödedin. \n\n **'+ürün+'** üründen artık sadece **'+s+'** stok kaldı.')   
.setFooter('cüzdan')
.setColor('RANDOM')
message.channel.send(cüzdan)
    
if(!elmastok) db.set(`elma_stok`, stok - 1)  
else db.add(`elma_stok`, -1)
db.add(`elmaalma_${message.author.id}`, 1) 
db.add(`puan_${message.author.id}`, -fiyat)    
    
    
    
  }
  

    ///////////////////////////////// ÖRNEK \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
  
  if(!ürün) return message.reply('')
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: [], 
  permLevel: 0
};

exports.help = {
  name: '',
  description: 'taslak', 
  usage: ''
};
  