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

   var l_dsc = ''
    var alr_on = ''
    var alr_off = ''
    var TLINK_on = ''
    var TLINK_off = ''
   
    if (config.LANG == 'EN') {
        l_dsc = 'remove for all link'
        alr_on = 'Already on'
        alr_off = 'Already Off'
        LINKT_on = '*M_LINK TURNED ON*'
        LINKT_off = '*M_LINK TURNED OFF*'
    }
    if (config.LANG == 'SI') {
        l_dsc = 'සියලුම Link පළකරන්නන් සමූහයෙන් ඉවත් කරයි'
        alr_on = 'කලින්ම ක්‍රියාත්මකයි'
        alr_off = 'කලින්ම අක්‍රියයි'
        LINKT_on = 'M_LINK TURNED ON'
        LINKT_off = 'M_LINK TURNED Off'
    }
   
    Asena.addCommand({pattern: 'allink ?(.*)', fromMe: true, desc: l_dsc, usage: '.allink on / of' }, (async (message, match) => {
        if (match[1] == 'off') {
                await heroku.patch(baseURI + '/config-vars', { 
                    body: { 
                        ['ALL_LINK_BAN']: 'false'
                    } 
                });
                await message.sendMessage(LINKT_off)
        } else if (match[1] == 'on') {
                await heroku.patch(baseURI + '/config-vars', { 
                    body: { 
                        ['ALL_LINK_BAN']: 'true'
                    } 
                });
                await message.sendMessage(LINKT_on)
        }
    }));
