let handler = async (m, { conn, text }) => {
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text
else who = m.chat
if (!who) throw `*[❗ИНФО❗] 𝙸𝙽𝙶𝚁𝙴𝚂𝙰 𝙴𝙻 @𝚝𝚊𝚐 𝙳𝙴 𝙻𝙰 𝙿𝙴𝚁𝚂𝙾𝙽𝙰 𝚀𝚄𝙴 𝙳𝙴𝚂𝙴𝙴 𝙴𝙻𝙸𝙼𝙸𝙽𝙰𝚁 𝙳𝙴 𝙻𝙾𝚂 𝚄𝚂𝚄𝙰𝚁𝙸𝙾𝚂 𝙿𝚁𝙴𝙼𝙸𝚄𝙼*`
if (global.db.data.users[who].premium = 'false') throw '*[❗ИНФО❗] 𝙴𝙻 𝚄𝚂𝚄𝙰𝚁𝙸𝙾 𝙸𝙽𝙶𝚁𝙴𝚂𝙰𝙳𝙾 𝙽𝙾 𝙴𝚂 𝚄𝚂𝚄𝙰𝚁𝙸𝙾 𝙿𝚁𝙴𝙼𝙸𝚄𝙼*'
let user = global.db.data.users[who]
user.premium = false
let textdelprem = `*[❗ИНФО❗] @${who.split`@`[0]} 𝙰𝙷𝙾𝚁𝙰 𝚈𝙰 𝙽𝙾 𝙵𝙾𝚁𝙼𝙰 𝙿𝙰𝚁𝚃𝙴 𝙳𝙴 𝙻𝙾𝚂 𝚄𝚂𝚄𝙰𝚁𝙸𝙾𝚂 𝙿𝚁𝙴𝙼𝙸𝚄𝙼*`
m.reply(textdelprem, null, { mentions: conn.parseMention(textdelprem) })
}
handler.help = ['delprem <@user>']
handler.tags = ['owner']
handler.command = /^(удалитьпрем)$/i
handler.group = true
handler.rowner = true
export default handler
