const config = require('../config')
const {cmd , commands} = require('../command')
cmd({
    pattern: "mute",	
    alias: ["lock"],
    react: "🔈",
    desc: "mute group.",
    category: "group",
    filename: __filename,
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants,  isItzcp, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
    
if (!isOwner || !isAdmins) return;


if (!m.isGroup) return reply(mg.onlygroup);
if (!isBotAdmins) return reply(mg.needbotadmins);     
            await conn.groupSettingUpdate(m.chat, "announcement")
           const mass = await conn.sendMessage(m.chat, { text: '*Group chat muted 🔒*' }, { quoted: mek });
            return await conn.sendMessage(m.chat, { react: { text: '🔒', key: mass.key } });
} catch(e) {
console.log(e);
reply('*𝙿𝙻𝙴𝙰𝚂𝙴 𝙶𝙸𝚅𝙴 𝙼𝙴 𝙰 𝙰𝙳𝙼𝙸𝙽 𝚁𝙾𝙻𝙴❗👻*')    
} 
})

// ==unmute=========
cmd({
    pattern: "unmute",	
    alias: ["unlock"],
    react: "🔊",
    desc: "unmute group.",
    category: "group",
    filename: __filename,
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants,  isItzcp, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
    
if (!isOwner || !isAdmins) return;


if (!m.isGroup) return reply(mg.onlygroup);
if (!isBotAdmins) return reply(mg.needbotadmins);     
            await conn.groupSettingUpdate(m.chat, "not_announcement")
           const mass = await conn.sendMessage(m.chat, { text: '*Group chat unmuted 🔊*' }, { quoted: mek });
            return await conn.sendMessage(m.chat, { react: { text: '🔒', key: mass.key } });
} catch(e) {
console.log(e);
reply('*_𝙿𝙻𝙴𝙰𝚂𝙴 𝙶𝙸𝚅𝙴 𝙼𝙴 𝙰 𝙰𝙳𝙼𝙸𝙽 𝚁𝙾𝙻𝙴❗👻_*')    
} 
})
