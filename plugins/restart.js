const config = require('../config')
const {cmd , commands} = require('../command')
const {sleep} = require('../lib/functions')

cmd({
    pattern: "restart",
    desc: "restart the Mihiranga-MD Bot",
    category: "owner",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
const {exec} = require("child_process")
reply("Mihiranga-MD restarting...♻️")
await sleep(1500)
exec("pm2 restart all")
}catch(e){
console.log(e)
reply(`${e}`)
}
})
