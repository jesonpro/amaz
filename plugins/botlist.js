const Neotro = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');
const Language = require('../language');
const Lang = Language.getString('amazone');

Neotro.addCommand({pattern: 'botlist', fromMe: false, desc: Lang.BOTLIST}, (async (message, match) => {

    var r_text = new Array ();
    
    
   
  r_text[0] = "https://i.imgur.com/qs6CScf.png";
    
    
    var i = Math.floor(1*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `\n\n *ʙᴏᴛ ʟɪꜱᴛꜱ* \n\n
\n      *🚀WhiteDevil*    \n *https://github.com/terror-boy/WhiteDevil/* -𝐨𝐰𝐧𝐞𝐝 𝐛𝐲 ᴋᴀʀᴛʜɪᴋ \n
\n      *🚀FILO*    \n *https://github.com/nexusNw/filo/* -𝐨𝐰𝐧𝐞𝐝 𝐛𝐲 ɴᴇᴏᴛʀᴏx \n
\n      *🚀AMALSEE*    \n *https://github.com/cyberchekuthan/Amalser_v1/* -𝐨𝐰𝐧𝐞𝐝 𝐛𝐲 ᴀᴍᴀʟꜱᴇʀ \n
\n      *🚀JULIEMOWL*    \n *https://github.com/farhan-dqz/JulieMwol/* -𝐨𝐰𝐧𝐞𝐝 𝐛𝐲 ꜰᴀʀʜᴀɴ \n
\n      *🚀JULIEMOWLV2*    \n *https://github.com/farhan-dqz/Julie-Mwol/* -𝐨𝐰𝐧𝐞𝐝 𝐛𝐲 ꜰᴀʀʜᴀɴ \n
\n      *🚀LIAMOWL*    \n *https://github.com/saidalisaid2/Liyamol/* -𝐨𝐰𝐧𝐞𝐝 𝐛𝐲 ꜱᴀɪᴅᴀʟɪ \n
\n      *🚀ELSAMOWL*    \n *https://github.com/J-I-H-A-D/ElsaMwol/* -𝐨𝐰𝐧𝐞𝐝 𝐛𝐲 ᴊɪʜᴀᴅ \n
\n      *🚀LASTPINK*    \n *https://github.com/afnanplk/lastpink* -𝐨𝐰𝐧𝐞𝐝 𝐛𝐲 ᴀꜰɴᴀɴ \n
\n      *🚀DEASPOOL*    \n *https://github.com/shazz-shahid/Deadpool* -𝐨𝐰𝐧𝐞𝐝 𝐛𝐲 ꜱʜᴀᴢᴢ \n
\n      *🚀JOKER*    \n *https://github.com/J0kerser/Jokerbot* -𝐨𝐰𝐧𝐞𝐝 𝐛𝐲 ᴊᴏᴋᴇʀᴢ \n
\n      *🚀NEOTROX*    \n *https://github.com/xneon2/Hashzi-X* -𝐨𝐰𝐧𝐞𝐝 𝐛𝐲 𝐚𝐦𝐞𝐞𝐫 ᴛᴇᴇɴᴜʜx \n
\n      *🚀AMAZONE*    \n *https://github.com/xneon2/Amazone v7* -𝐨𝐰𝐧𝐞𝐝 𝐛𝐲 𝐚𝐦𝐞𝐞𝐫 ᴛᴇᴇɴʏʜx \n
\n      *🚀QUEEN ALEXA*    \n *https://github.com/cuizer/queenAlexa* -𝐨𝐰𝐧𝐞𝐝 𝐛𝐲 𝐚𝐦𝐞𝐞𝐫 ᴄᴜɪᴢᴇʀ \n
\n      *🚀AMAZONE ALEXA*    \n *https://github.com/xneon/Amazone Alexa* -𝐨𝐰𝐧𝐞𝐝 𝐛𝐲 ᴛᴇᴇɴᴜʜx \n\n\n\n\n
      ~*its just a small lists. More gits will available soon....... 🙂*~
`}) 

}));
