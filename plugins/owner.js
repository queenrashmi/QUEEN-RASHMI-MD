const config = require('../config')
const {cmd , commands} = require('../command')
const {sleep} = require('../lib/functions')

cmd({
    pattern: "restart",
    react: "♻",
    desc: "restart the bot",
    category: "owner",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if (!isOwner) return;
const {exec} = require("child_process")
reply("restarting..♻")
await sleep(1500)
exec("pm2 restart all")
}catch(e){
console.log(e)
reply(`${e}`)
}
})

//========owner======

cmd({
    pattern: "owner",
    desc: "owner the bot",
    category: "main",
    react: "🖤",
    filename: __filename
},

async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let dec = `*👋 Hello ${pushname}*

*𝙸'𝚖 𝚀𝚄𝙴𝙴𝙽 𝚁𝙰𝚂𝙷𝙼𝙸-𝙼𝙳*

*👋 Hello tharuwamd*

*𝙸'𝚖 𝚀𝚄𝙴𝙴𝙽 𝚁𝙰𝚂𝙷𝙼𝙸-𝙼𝙳*

*┌───────────◉▸▷*
*├ʙᴏᴛ :- Queen rashmi-ᴍᴅ*
*├ᴏᴡɴᴇʀ :- tharuwamd*
*├ꜰʀᴏᴍ :- RThnaphure*
*├ᴀɢᴇ :- 999*
*└──────────◉▸▷*

*ᴍᴏʀᴇ ᴅɪᴛᴇʟꜱ -* https://wa.me/+94726268471?text=_Queen-rashmi-md_👨🏻‍💻👑📍`



await conn.sendMessage(from,{image:{url: `https://i.ibb.co/JnXhmNt/b396cf85d267ec08.jpg`},caption:dec},{quoted:mek});
}catch(e){
console.log(e)
reply(`${e}`)
}
})
