const config = require('../config');
const { cmd } = require('../command');
const { ytsearch, ytmp3, ytmp4 } = require('@dark-yasiya/yt-dl.js'); // request package.json "@dark-yasiya/yt-dl.js": "latest"


cmd({
    pattern: "song",
    alias: ["ytmp3","ytsong"],
    react: "🎶",
    desc: "Download Youtube song",
    category: "download",
    use: '.song < Yt url or Name >',
    filename: __filename
},
async(conn, mek, m,{ from, prefix, quoted, q, reply }) => {
try{

if(!q) return await reply("Please give me Yt url or Name")
	
const yt = await ytsearch(q);
if(yt.results.length < 1) return reply("Results is not found !")

let yts = yt.results[0]  
const ytdl = await ytmp3(yts.url)
		
let ytmsg = `
*🎶 QUEEN RASHMI MD WA-BOT SONG DOWNLOADER 🎶*

┌───────────────────
├ ℹ️ Title: ${yts.title}
├ 📚 channel: ${yts.author.name}
├ 👁️‍🗨️ Views: ${yts.views}
├ 🕘 Duration: ${yts.timestamp}
├ 📆 Published: ${yts.ago}
├ 📥 Size: ${yts.size}
├ 🔗 Url: ${yts.url}
└───────────────────

> *© ᴘᴏᴡᴇʀᴇᴅ ʙʏ ɴᴇᴛʜᴍɪɴᴀ ᴏꜰᴄ ||*
`
// SEND DETAILS
await conn.sendMessage(from, { image: { url: yts.thumbnail || yts.image || '' }, caption: `${ytmsg}`}, { quoted: mek });

// SEND AUDIO TYPE
await conn.sendMessage(from, { audio: { url: ytdl.download.url }, mimetype: "audio/mpeg" }, { quoted: mek })

// SEND DOC TYPE
await conn.sendMessage(from, { document: { url: ytdl.download.url }, mimetype: "audio/mpeg", fileName: ytdl.result.title + '.mp3', caption: `${ytdl.result.title}` }, { quoted: mek })


} catch (e) {
console.log(e)
reply(e)
}}
)
cmd({
    pattern: "video",
    alias: ["ytmp4","ytvideo"],
    react: "🎥",
    desc: "Download Youtube video",
    category: "download",
    use: '.video < Yt url or Name >',
    filename: __filename
},
async(conn, mek, m,{ from, prefix, quoted, q, reply }) => {
try{

if(!q) return await reply("*Please give me Yt url or Name*")
	
const yt = await ytsearch(q);
if(yt.results.length < 1) return reply("Results is not found !")

let yts = yt.results[0]  
const ytdl = await ytmp4(yts.url)
		
let ytmsg = `*🎶 QUEEN RASHMI MD WA-BOT VIDEO DOWNLOADER 🎶*

┌───────────────────
├ ℹ️ Title: ${yts.title}
├ 📚 channel: ${yts.author.name}
├ 👁️‍🗨️ Views: ${yts.views}
├ 🕘 Duration: ${yts.timestamp}
├ 📆 Published: ${yts.ago}
├ 📥 Size: ${yts.size}
├ 🔗 Url: ${yts.url}
└───────────────────

> *© ᴘᴏᴡᴇʀᴇᴅ ʙʏ ɴᴇᴛʜᴍɪɴᴀ ᴏꜰᴄ ||*
`
// SEND DETAILS
await conn.sendMessage(from, { image: { url: yts.thumbnail || yts.image || '' }, caption: `${ytmsg}`}, { quoted: mek });

// SEND AUDIO TYPE
await conn.sendMessage(from, { video: { url: ytdl.download.url }, mimetype: "video/mp4" }, { quoted: mek })

// SEND DOC TYPE
await conn.sendMessage(from, { document: { url: ytdl.download.url }, mimetype: "video/mp4", fileName: ytdl.result.title + '.mp4', caption: `${ytdl.result.title}` }, { quoted: mek })


} catch (e) {
console.log(e)
reply(e)
}}
)
