import fetch from 'node-fetch'
let handler = async (m, { conn, command, usedPrefix }) => {
let pp = await conn.profilePictureUrl(m.chat).catch(_ => null)
let pepe = pp ? await (await fetch(pp)).buffer() : Buffer.alloc(0)
let str = ` ${conn.getName(m.sender)} Want Support Bot?
*PAYMENT*
_*Pulsa/pulse(Telkomsel):*_ 082148864989
_*Gopay/Dana:*_ 082148864989
Setelah melakukan donasi kirim bukti pembayaran ke owner
`
conn.sendHydrated(m.chat, str, wm, pepe, 'https://chat.whatsapp.com/JMv6TBnYGCe7NngMhLdGmb', 'ɢᴄ ʙᴏᴛ', null, null, [
['ᴍᴇɴᴜ', '/menu']
], m)

}
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

export default handler
