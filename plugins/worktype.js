/* Copyright (C) 2021 TENUX-Neotro.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
NEOTROX - TEENUHX
*/
const Asena = require('../events');
const config = require('../config');
const Heroku = require('heroku-client');
const heroku = new Heroku({
    token: config.HEROKU.API_KEY
});
let baseURI = '/apps/' + config.HEROKU.APP_NAME;


 var W_PUB = ''
 var W_PRI = ''
 var W_ADM = ''
  if (config.LANG == 'EN') {

    W_ADM = 'ᴡᴏʀᴋ ᴛʏᴘᴇ ɪꜱ ᴘʀɪᴠᴀᴛᴇ ɴᴏᴡ' 
    W_PUB = 'ᴡᴏʀᴋ_ᴛʏᴘᴇ ɪꜱ ɴᴏᴡ ᴘᴜʙʟɪᴄ'
    W_PRI = 'ᴡᴏʀᴋ_ᴛʏᴘᴇ ɪꜱ ɴᴏᴡ ᴘʀɪᴠᴀᴛᴇ'
    }

    if (config.LANG == 'SI') {

      W_ADM = 'ඔබේ ʙᴏᴛ පෞද්ගලික අකාරයට ක්‍රියාත්මක විය.'
      W_PUB = 'ඔබෙ ʙᴏᴛ පෞද්ගලික අකාරයට ක්‍රියාත්මක විය'
      W_PRI = 'ඔබේ ʙᴏᴛ පෞද්ගලික අකාරයට ක්‍රියාත්මක විය.'
    }

 Asena.addCommand({pattern: 'work ?(.*)', fromMe: true,dontAddCommandList: true,desc: 'change bot work type. example - .work public/private' }, (async (message, match) => {
        if (match[1] == 'public') {
                await heroku.patch(baseURI + '/config-vars', { 
                    body: { 
                        ['WORK_TYPE']: 'public'
                    } 
                });
                await message.sendMessage(W_PUB)
        } else if (match[1] == 'private') {
                await heroku.patch(baseURI + '/config-vars', { 
                    body: { 
                        ['WORK_TYPE']: 'private'
                    } 
                });
                await message.sendMessage(W_PRI)
         } else if (match[1] == 'private') {
                await heroku.patch(baseURI + '/config-vars', { 
                    body: { 
                        ['WORK_TYPE']: 'private'
                    } 
                });
                await message.sendMessage(W_ADM)
        }
    }));
