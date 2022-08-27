/*
Olá usuário do bot, eu sou o LC, e apresento essa versão da Karen Bot com comandos simples. Sei que nem todos tem condições de comprar ou alugar um Bot, por isso foi criada essa versão.

Sinta-se livre pra editar o nome e as coisas no Bot, porém deixem pelo menos meus créditos por favor.

Se tiver algum problema fale comigo ou com o Meliodas, que tbm me deu uma ajudinha com o Bot, deixarei o link de nossos ctts abaixo:

Şr. ŁĆ 💛⃝⃒⃤⁩ ⸝͟๏︠🍃
wa.me/5511954738489

Meliodas-rai
wa.me/558981029418
*/
const { default: makeWASocket, downloadContentFromMessage, emitGroupParticipantsUpdate, emitGroupUpdate, generateWAMessageContent, generateWAMessage, makeInMemoryStore, prepareWAMessageMedia, MediaType, areJidsSameUser, WAMessageStatus, AuthenticationState, GroupMetadata, initInMemoryKeyStore,getContentType, MiscMessageGenerationOptions, useSingleFileAuthState, BufferJSON, WAMessageProto, MessageOptions, WAFlag, WANode,	WAMetric,	ChatModification, MessageTypeProto, WALocationMessage, ReconnectMode, WAContextInfo, proto,	WAGroupMetadata, ProxyAgent,	waChatKey, MimetypeMap, MediaPathMap, WAContactMessage, WAContactsArrayMessage, WAGroupInviteMessage, WATextMessage, WAMessageContent, WAMessage, BaileysError, WA_MESSAGE_STATUS_TYPE, MediaConnInfo, URL_REGEX, WAUrlInfo, WA_DEFAULT_EPHEMERAL, WAMediaUpload, mentionedJid, processTime, Browser, MessageType, Presence, WA_MESSAGE_STUB_TYPES, Mimetype, relayWAMessage,	Browsers, GroupSettingChange, delay, DisconnectReason, WASocket, getStream, WAProto, isBaileys, AnyMessageContent, fetchLatestBaileysVersion } = require('@adiwajshing/baileys');

//**************[ MÓDULOS ]****************//
const { getBuffer, fetchJson, getGroupAdmins, getRandom, getExtension, banner } = require('./lib/funções.js'); const P = require('pino'); const fs = require('fs'); const os = require('os');const hx = require('hxz-api'); const crypto = require('crypto'); const util = require('util'); const { Boom }  = require('@hapi/boom'); const axios = require('axios'); const qrterminal = require('qrcode-terminal'); const encodeUrl = require('encodeurl'); const linkfy = require('linkifyjs'); const request = require('request'); const cheerio = require('cheerio'); const ms = require('ms'); const chalk = require('chalk'); const moment = require('moment-timezone'); const ffmpeg = require('fluent-ffmpeg'); const { exec } = require('child_process'); const color = (text, color) => { return !color ? chalk.green(text) : chalk.keyword(color)(text) }; const yts = require('yt-search'); const imgbb = require('imgbb-uploader'); const googleImage = require('g-i-s'); const googleIt = require('google-it'); const fetch = require('node-fetch'); const imageToBase64 = require('image-to-base64'); const thiccysapi = require('textmaker-thiccy'); 
//*******************************************//

//*************[ CONSTS JSON ]************//
const espere = JSON.parse(fs.readFileSync('./database/grupos/espere.json')); const roleta = JSON.parse(fs.readFileSync('./database/grupos/cassino.json')); const porcentagem = JSON.parse(fs.readFileSync('./database/grupos/porcentagem.json')); const linkKaren = JSON.parse(fs.readFileSync('./menu/logos.json')); const infoBot = JSON.parse(fs.readFileSync('./info/infobot.json')); const donos = JSON.parse(fs.readFileSync('./database/dono/donos.json')); const premium = JSON.parse(fs.readFileSync('./database/premium/premiuns.json'));
//*******************************************//

//****************[ MENU ]******************//
const { menu } = require('./menu/menu.js');
//*******************************************//

//********[ DEFINIÇÕES DO MENU ]*********//
prefix = '/'
status = 'Online'
base = 'Gratuita'
baileys = 'Multi Device (MD)'
emoji = '⚡'
emoji2 = '🔥'
dev = infoBot.nomeDono
botName = infoBot.nomeBot
numberBot = infoBot.numeroBot
numberDono = infoBot.numeroDono
logo = linkKaren.logo
//*******************************************//
function kyun(seconds){
function pad(s){ return (s < 10 ? '0' : '') + s;}
var hours = Math.floor(seconds / (60*60));
var minutes = Math.floor(seconds % (60*60) / 60);
var seconds = Math.floor(seconds % 60);return `${pad(hours)} Horas ${pad(minutes)} Minutos ${pad(seconds)} Segundos` }
const convertBytes = function(bytes) {
const sizes = ["Bytes", "KB", "MB", "GB", "TB"]
if (bytes == 0) {
return "n/a"
}
const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)))
if (i == 0) {
return bytes + " " + sizes[i]
}
return (bytes / Math.pow(1024, i)).toFixed(1) + " " + sizes[i]
}
//***********[ CONEXÃO DO BOT ]**********//
const store = makeInMemoryStore({ logger: P().child({ level: 'debug', stream: 'store' }) })
store.readFromFile('./karen_store.json')
//salvar dps de 10s
setInterval(() => { store.writeToFile('./karen_store.json') }, 10000)
//início c
const { state, saveState } = useSingleFileAuthState('./karen_info.json')
async function Commencer() {
const { version, isLatest } = await fetchLatestBaileysVersion()
console.log(`usando WA v${version.join('.')}, é mais recente: ${isLatest}`)
console.log(banner.string)
console.log(color("Karen Bot conectada Chefe!!!"))
const conn = makeWASocket({ version,  logger: P({ level: 'silent' }),
printQRInTerminal: true,
browser: ['KAREN-BOT', 'Sr.LC', '1.0.0'], auth: state })
store.bind(conn.ev)
conn.ev.on('chats.set', () => {
console.log(store.chats.all())})
conn.ev.on('contacts.set', () => {
console.log(Object.values(store.contacts))})
conn.ev.on('creds.update', saveState);
conn.ev.on('messages.upsert', async (msg) => {
  try {
//*******************************************//

//***************[ FUNÇÕES ]***************//
const info = msg.messages[0]
  if (!info.message) return 
  if (info.key && info.key.remoteJid == 'status@broadcast') return
const type = Object.keys(info.message)[0] == 'senderKeyDistributionMessage' ? Object.keys(info.message)[2] : (Object.keys(info.message)[0] == 'messageContextInfo') ? Object.keys(info.message)[1] : Object.keys(info.message)[0]
const content = JSON.stringify(info.message);
const altpdf = Object.keys(info.message)
global.prefix
const from = info.key.remoteJid
var body = (type === 'conversation') ? info.message.conversation : (type == 'imageMessage') ? info.message.imageMessage.caption : (type == 'videoMessage') ? info.message.videoMessage.caption : (type == 'extendedTextMessage') ? info.message.extendedTextMessage.text : (type == 'buttonsResponseMessage') ? info.message.buttonsResponseMessage.selectedButtonId : (type == 'listResponseMessage') ? info.message.listResponseMessage.singleSelectReply.selectedRowId : (type == 'templateButtonReplyMessage') ? info.message.templateButtonReplyMessage.selectedId : ''
const budy = (type === 'conversation') ? info.message.conversation : (type === 'extendedTextMessage') ? info.message.extendedTextMessage.text : ''
var pes = (type === 'conversation' && info.message.conversation) ? info.message.conversation : (type == 'imageMessage') && info.message.imageMessage.caption ? info.message.imageMessage.caption : (type == 'videoMessage') && info.message.videoMessage.caption ? info.message.videoMessage.caption : (type == 'extendedTextMessage') && info.message.extendedTextMessage.text ? info.message.extendedTextMessage.text : ''
const isGroup = info.key.remoteJid.endsWith('@g.us')
const sender = isGroup ? info.key.participant : info.key.remoteJid
const groupMetadata = isGroup ? await conn.groupMetadata(from) : ''
const groupName = isGroup ? groupMetadata.subject : ''
const groupDesc = isGroup ? groupMetadata.desc : ''
const groupMembers = isGroup ? groupMetadata.participants : ''
const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
const pushname = info.pushName ? info.pushName : ''
//multi prefixo
const prefix = /^[/.!#=*?+~]/gi.test(body) ? body.match(/^[/.!#=*?+~]/gi)[0] : '-'
const messagesC = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
const botNumber = conn.user.id.split(':')[0]+'@s.whatsapp.net'
const args = body.trim().split(/ +/).slice(1);
const isCmd = body.startsWith(prefix);
const command = isCmd ? body.slice(1).trim().split(/ +/).shift().toLocaleLowerCase() : null 
const reply = (text) => {
  conn.sendMessage(from, {text: text}, {quoted: info})
}
const mentions = (teks, memberr, id) => {
(id == null || id == undefined || id == false) ? conn.sendMessage(from, {text: teks.trim(), mentions: memberr}) : conn.sendMessage(from, {text: teks.trim(), mentions: memberr})}
if(!isGroup && isCmd) {console.log(chalk.hex("#1cfcff").bold("[ COMANDO ]", chalk.hex("#ff1c5a").bold(`${command}`), chalk.hex("#1cfcff").bold(" DE "), chalk.hex("#ff1c5a").bold(`${sender.split("@")[0]}`)))}
  if(!isGroup && !isCmd && !info.key.fromMe){
    if (info.message.conversation.length <= 10) {
    console.log(chalk.hex("#1cfcff").bold("[ MENSAGEM ]", chalk.hex("#ff1c5a").bold(`${info.message.conversation}`), chalk.hex("#1cfcff").bold(" DE "), chalk.hex("#ff1c5a").bold(`${sender.split("@")[0]}`)))}
    else {console.log(chalk.hex("#1cfcff").bold("[ MENSAGEM ]", chalk.hex("#1cfcff").bold(` DE `), chalk.hex("#ff1c5a").bold(`${sender.split("@")[0]}`)))}}
const q = args.join(' ')
const sleep = async (ms) => {return new Promise(resolve => setTimeout(resolve, ms))}
  // GRUPO
if(isGroup && !isCmd && !info.key.fromMe){
    if (info.message.conversation.length <= 10) {console.log(chalk.hex("#1cfcff").bold("[ MENSAGEM ]", chalk.hex("#ff1c5a").bold(`${info.message.conversation}`), chalk.hex("#1cfcff").bold(" DE "), chalk.hex("#ff1c5a").bold(`${sender.split("@")[0]}`, chalk.hex("#1cfcff").bold("NO GRUPO"), chalk.hex("#ff1c5a").bold(groupName))))}
    else {console.log(chalk.hex("#1cfcff").bold("[ MENSAGEM ]", chalk.hex("#1cfcff").bold(` DE `), chalk.hex("#ff1c5a").bold(`${sender.split("@")[0]}`), chalk.hex("#1cfcff").bold("NO GRUPO "), chalk.hex("#ff1c5a").bold(groupName)))}}
  if(isCmd && isGroup){console.log(chalk.hex("#1cfcff").bold("[ COMANDO ]"), chalk.hex("#ff1c5a").bold(command), chalk.hex("#1cfcff").bold(" DE "), chalk.hex("#ff1c5a").bold(`${sender.split("@")[0]}`, chalk.hex("#1cfcff").bold("NO GRUPO ", chalk.hex("#ff1c5a").bold(`${groupName}`))))}
  //isQuoted 
const isImage = type == 'imageMessage'
const isVideo = type == 'videoMessage'
const isAudio = type == 'audioMessage'
const isSticker = type == 'stickerMessage'
const isContact = type == 'contactMessage'
const isLocation = type == 'locationMessage'
const isProduct = type == 'productMessage'
const isMedia = (type === 'imageMessage' || type === 'videoMessage' || type === 'audioMessage')
typeMessage = body.substr(0, 50).replace(/\n/g, '')
if (isImage) typeMessage = "Image"
else if (isVideo) typeMessage = "Video"
else if (isAudio) typeMessage = "Audio"
else if (isSticker) typeMessage = "Sticker"
else if (isContact) typeMessage = "Contact"
else if (isLocation) typeMessage = "Location"
else if (isProduct) typeMessage = "Product"
const isQuotedMsg = type === 'extendedTextMessage' && content.includes('textMessage')
const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')
const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
const isQuotedContact = type === 'extendedTextMessage' && content.includes('contactMessage')
const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage')
const isQuotedProduct = type === 'extendedTextMessage' && content.includes('productMessage')
const getFileBuffer = async (mediakey, MediaType) => {
const stream = await downloadContentFromMessage(mediakey, MediaType)
let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk]) }
return buffer}
//*******************************************//

//***************[ BOTÕES ]****************//
//botão
const sendBtext = async (id, text1, desc1, but = [], vr) => {
buttonMessage = { text: text1, footer: desc1, buttons: but, headerType: 1 }
conn.sendMessage(id, buttonMessage, {quoted: vr}) }
//botão com imagem 
const sendBimg = async (id, img1, text1, desc1, but = [], vr) => {
buttonMessage = { image: {url: img1}, caption: text1, footerText: desc1, buttons: but, headerType: 4 }
conn.sendMessage(id, buttonMessage, {quoted: vr}) }
//botão de template 
const sendBimgT = async (id, img1, text1, desc1, but = [], vr) => { templateMessage = { image: {url: img1}, caption: text1, footer: desc1, templateButtons: but, }
conn.sendMessage(id, templateMessage, {quoted: vr}) }
//menu com gif
const sendGifButao = async (id, gif1, text1, desc1, but = [], vr) => { buttonMessage = { video: {url: gif1}, caption: text1, gifPlayback: true, footerText: desc1, buttons: but, headerType: 4 }
conn.sendMessage(id, buttonMessage, {quoted: vr}) }
//*******************************************//

//******[ DEFINIÇÃO DE MENSAGENS ]*****//
var esperee = espere[Math.floor(Math.random() * espere.length)] 
enviar = {
espere: `${esperee}`,
successo: '️*❬ ✔ ❭ Sucesso*',
error: '*Falhou, tente novamente ^_^*',
msg: {
dono: '*『❗』Esse comando só pode ser utilizado pelo meu Dono!*',
adm: '*『❗』Esse comando só pode ser utilizado pelos Adms do Grupo!*',
Badmin: '*『❗』Esse comando só pode ser utilizado quando o bot se torna Adm!*',
grupo: '*『❗』Esse comando só pode ser utilizado em Grupos!*',
premium: '*『❗』Esse comando só pode ser utilizado por usuários PREMIUNS!*',
banido: '*『❗』Vc é um usuário banido!*'}}
//*******************************************//

//************[ DONO OFICIAL ]**************//
const donoOficial = [`@s.whatsapp.net`] 
//*******************************************//

//***[ CONSTS DONO, PREMIUM, ADM...]***//
const SoDono = donoOficial.includes || donos.includes(sender)
const isPremium = premium.includes(sender)
const isGroupAdmins = groupAdmins.includes(sender) || false 
const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
//*******************************************//

//*************[ VERIFICADO ]**************//
const selo = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ... {}}, message: { "contactMessage": { "displayName": `${pushname}`, "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}}
//*******************************************//
switch(command){
//****[ INÍCIO COMANDOS DE PREFIXO ]***//
case 'menu':
sendBimg(from, `${logo}`, menu(prefix, botName, emoji, emoji2, status, dev, pushname, base, baileys, sender), "Şr. ŁĆ 💛⃝⃒⃤⁩ ⸝͟๏︠🍃", [
{buttonId: `${prefix}creditos`, buttonText: {displayText: `🔥𝘾𝙧𝙚𝙙𝙞𝙩𝙤𝙨🔥`}, type: 1}, {buttonId: `${prefix}ping`, buttonText: {displayText: `⛬ 𝙋𝙞𝙣𝙜!`}, type: 1}, {buttonId: `${prefix}dono`, buttonText: {displayText: `⛬ 𝘿𝙤𝙣𝙤!`}, type: 1}], selo)
break

case 'créditos': case 'creditos': case 'criador':
try {
ppimg = await conn.profilePictureUrl(`https://telegra.ph/file/8c4dbffe57643a6e48e9c.jpg`, 'image')
} catch {
ppimg = 'https://telegra.ph/file/8c4dbffe57643a6e48e9c.jpg'
}
const creditoos = `
      *《 CRIADOR DO BOT 》*
┎┳━┅┅┄┈┄✧┈┈✦❖✦
┋┃ 𝙙𝙚𝙫𝙚𝙡𝙤𝙥𝙚𝙙 𝙗𝙮:
┋┃ *Şr. ŁĆ 💛⃝⃒⃤⁩ ⸝͟๏︠🍃*
┋┃ wa.me/5511954738489
┖┻━┅┅┄┈┄✧┈┈✦❖✦`
daftarimg = await getBuffer(ppimg)
conn.sendMessage(from, {image: daftarimg, caption: creditoos}, {quoted: selo})
break

case 'dono':
const lczin = `*╭────  〘INFO〙 ───*
*│╭───────────*
*││▷ _Dono:_*
*││* ⊷️ ${dev}
*││▷ _Número do Dono:_*
*││* ⊷️ wa.me/${numberDono}
*││▷ _Nome do Bot:_*
*││* ⊷️ ${botName}
*││▷ _Número do Bot:_*
*││* ⊷️ wa.me/${numberBot}
*│╰───────────*
*╰────────────*`
conn.sendMessage(from, {text: lczin}, {quoted: selo})
break

case 'ping':
r = (Date.now() / 1000) - info.messageTimestamp
uptime = process.uptime()
hora1 = moment.tz('America/Sao_Paulo').format('HH:mm:ss');
bla = `
*╭────〘 SPEED 〙 ──*
*│╭───────────*
*││▷ Horário:* ${hora1} 
*││▷ Velocidade:* ${String(r.toFixed(3))}
*││▷ Tempo Ativo:* ${kyun(uptime)}
*│╰───────────*
*╰────────────*
*𝐵𝑦: ${dev}*`
await conn.sendMessage(from, {text: bla}, {quoted: selo})
break

case 'marcar':
try {
if (!isGroup) return reply(enviar.msg.grupo)
if (!isGroupAdmins) return reply(enviar.msg.adm) 
members_id = []
teks = (args.length > 1) ? args.join(' ').trim() : ''
teks += '\n\n'
for (let mem of groupMembers) {
teks += `• @${mem.id.split('@')[0]}\n`
members_id.push(mem.id)
}
mentions(teks, members_id, true)
} catch {
reply('ERROR!!')
}
break

case 'promover': 
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if (info.message.extendedTextMessage == undefined || info.message.extendedTextMessage == null) return reply(`Marque a mensagem!`)
mentioned = info.message.extendedTextMessage.contextInfo.participant
if (mentioned.length >= 1) {
conn.sendMessage(from, {text: `@${mentioned.split("@")[0]} foi promovido(a) para Adm com sucesso ✅`, mentions: [mentioned]})
conn.groupParticipantsUpdate(from, [mentioned], "promote")  
} else {
if(q.length > 15) return reply('Só pode promover uma pessoa por vez!')
mentioned2 = args.join(" ").replace("@", "") + "@s.whatsapp.net"
conn.sendMessage(from, {text: `@${mentioned2.split("@")[0]} foi promovido(a) a Adm com sucesso ✅`, mentions: [mentioned2]})
conn.groupParticipantsUpdate(from, [mentioned2], "promote")
}
break

case 'rebaixar': 
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if (info.message.extendedTextMessage == undefined || info.message.extendedTextMessage == null) return reply(`Marque a mensagem!`)
mentioned = info.message.extendedTextMessage.contextInfo.participant
if (mentioned.length >= 1) {
conn.sendMessage(from, {text: `@${mentioned.split("@")[0]} foi rebaixado(a) para Membro Comum com sucesso ✅`, mentions: [mentioned]})
conn.groupParticipantsUpdate(from, [mentioned], "demote")  
} else {
if(q.length > 15) return reply('Só pode rebaixar uma pessoa por vez..')
mentioned2 = args.join(" ").replace("@", "") + "@s.whatsapp.net"
conn.sendMessage(from, {text: `@${mentioned2.split("@")[0]} foi rebaixado(a) para Membro Comum com sucesso ✅`, mentions: [mentioned2]})
conn.groupParticipantsUpdate(from, [mentioned2], "demote")
}
break

case 'add':
if (!isGroup) return reply(enviar.grupo)
if(!isGroupAdmins) return reply(enviar.adm)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin) 
if(q.length < 1) return reply('Qual o número?')  
try {
tdt = args[0]
if(tdt.length < 1) return reply(`Digita o número que deseja add, exemplo: ${prefix}add 5511954738489`)
if (info.message.extendedTextMessage === null || info.message.extendedTextMessage === undefined) {
reply('Estou adicionando...')  
adduser = q.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net`
await delay(5000)
response = await conn.groupParticipantsUpdate(from, [adduser], "add")
o = response.participants[0]
let inv = (Object.values(o))
if(inv[0].code == 409) return reply('Já está adicionado')
if(inv[0].code == 403) return reply('Conta privada :(')
if(inv[0].code == 408) return reply('Ele saiu agora não consigo adicionar')
if(inv[0].code == 401) return reply('Esse ctt me bloqueou')
if(tdt.includes(groupMembers.id.split('@')[0])) return reply('já tá mano')
} else {
reply('Estou adicionando...')  
await delay(5000)
adduser = info.message.extendedTextMessage.contextInfo.participant
response =  await conn.groupParticipantsUpdate(from,[adduser], "add")
o = response.participants[0]
let inv = (Object.values(o))
if(inv[0].code == 409) return
if(inv[0].code == 403) return
if(inv[0].code == 408) return
if(inv[0].code == 401) return
}
} catch {
reply('Membro adicionado ✔')
}
break

case 'banir':
if (!isGroup) return reply(enviar.msg.grupo)
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if (info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null) return reply('Marque a pessoa')
mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = 'pedido recebido: \n'
for (let _ of mentioned) {
teks += `@${_.split('@')[0]}\n`
}
mentions(teks, mentioned, true)
conn.groupParticipantsUpdate(from, mentioned, 'remove')
} else {
mentions(`@${mentioned[0].split('@')[0]} removido(a) com sucesso!`, mentioned, true)
conn.groupParticipantsUpdate(from, mentioned, 'remove')
}
break

case 'sticker': case 's': case 'f': case 'fig': case 'figurinhas':
try {
if ((isMedia && !info.message.videoMessage || isQuotedImage) && args.length == 0) {
const encmedia = isQuotedImage ? info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage : info.message.imageMessage
rane = getRandom('.'+await getExtension(encmedia.mimetype))
buffimg = await getFileBuffer(encmedia, 'image')
fs.writeFileSync(rane, buffimg)
const media = rane
rano = getRandom('.webp')
reply(enviar.espere)
await ffmpeg(`./${media}`)
.input(media)
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
exec(`webpmux -set exif ${addMetadata('Karen-Bot','Sr.LC')} ${rano} -o ${rano}`, async (error) => {
fs.unlinkSync(media)
reply(enviar.espere)
})
})
exec(`ffmpeg -i ${media} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 800:800 ${rano}`, (err) => {
fs.unlinkSync(media)
buffer = fs.readFileSync(rano)
conn.sendMessage(from, {sticker: buffer}, {quoted: info})
fs.unlinkSync(rano)
})
} else if ((isMedia && info.message.videoMessage.seconds < 11 || isQuotedVideo && info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
const encmedia = isQuotedVideo ? info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage : info.message.videoMessage
rane = getRandom('.'+await getExtension(encmedia.mimetype))
buffimg = await getFileBuffer(encmedia, 'video')
fs.writeFileSync(rane, buffimg)
const media = rane
rano = getRandom('.webp')
await ffmpeg(`./${media}`)
.inputFormat(media.split('.')[1])
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
exec(`webpmux -set exif ${addMetadata('Karen-Bot', 'Sr.LC')} ${rano} -o ${rano}`, async (error) => {
fs.unlinkSync(media)
tipe = media.endsWith('.mp4') ? 'video' : 'gif'
reply(`Falha na conversão de ${tipe} para sticker`)
})
})
exec(`ffmpeg -i ${media} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 200:200 ${rano}`, (err) => {
fs.unlinkSync(media)
buffer = fs.readFileSync(rano)
conn.sendMessage(from, {sticker: buffer}, {quoted: info})
fs.unlinkSync(rano)
})
} else {
reply(`Você precisa enviar ou marcar uma imagem ou vídeo com no máximo 10 segundos`)
}
} catch (e) {
reply('Ocorreu um erro')
console.log(e)
}
break

case 'dado':
const dadus = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"]
dadu = dadus[Math.floor(Math.random() * dadus.length)]
dador = fs.readFileSync('./database/dado/' + dadu + '.webp')
conn.sendMessage(from, {sticker: dador}, {quoted: info})
break

case 'cassino': case 'roleta':
//Cassino By: Şr. ŁĆ 💛⃝⃒⃤⁩ ⸝͟๏︠🍃		
const cassino = roleta.cassino.roleta[Math.floor(Math.random() * roleta.cassino.roleta.length)]
const vitoriass = roleta.vitoria.ganhou[Math.floor(Math.random() * roleta.vitoria.ganhou.length)]
const percass = roleta.vitoria.perdeu[Math.floor(Math.random() * roleta.vitoria.perdeu.length)]
if ((cassino == '⟮ ♥ ⟯⟮ ♥ ⟯⟮ ♥ ⟯') ||(cassino == '⟮ ♦ ⟯⟮ ♦ ⟯⟮ ♦ ⟯') ||(cassino == '⟮ ♣ ⟯⟮ ♣ ⟯⟮ ♣ ⟯') ||(cassino == '⟮ ♠ ⟯⟮ ♠ ⟯⟮ ♠ ⟯')) {
var Vitória = `${vitoriass}`
} else {
var Vitória = `${percass}`
}
const cassino2 = `
╭━━━━❪  🎰  ❫━━━━
┃     💰  𝘾𝘼𝙎𝙎𝙄𝙉𝙊 💰
┣━━━━━━━━━━━
┃=➤ *${cassino}*
┣━━━━━━━━━━━
┃ *${Vitória}*
┗━━━━❪  💰  ❫━━━━`
conn.sendMessage(from, {text: cassino2}, {quoted: info})
break

case 'rankgay':
if(!isGroup) return reply(enviar.msg.grupo)
membr = []
const gay1 = groupMembers
const gay2 = groupMembers
const gay3 = groupMembers
const gay4 = groupMembers
const gay5 = groupMembers
var porcent = porcentagem[Math.floor(Math.random() * porcentagem.length)] 
var porcent2 = porcentagem[Math.floor(Math.random() * porcentagem.length)]
var porcent3 = porcentagem[Math.floor(Math.random() * porcentagem.length)]
var porcent4 = porcentagem[Math.floor(Math.random() * porcentagem.length)]
var porcent5 = porcentagem[Math.floor(Math.random() * porcentagem.length)] 
const gays1 = gay1[Math.floor(Math.random() * gay1.length)]
const gays2 = gay2[Math.floor(Math.random() * gay2.length)]
const gays3 = gay3[Math.floor(Math.random() * gay3.length)]
const gays4 = gay4[Math.floor(Math.random() * gay4.length)]
const gays5 = gay5[Math.floor(Math.random() * gay5.length)]
rankzingay = `
*Esses são os Gays🏳️‍🌈 do grupo:*\n${groupName}\n
*╭────────────*
*│* 🏳️‍🌈 @${gays1.id.split('@')[0]}
*│➥ ${porcent} Gay Padrão*
*│* 🏳️‍🌈 @${gays2.id.split('@')[0]}
*│➥${porcent2}Gay Incubado*
*│* 🏳️‍🌈 @${gays3.id.split('@')[0]}
*│➥ ${porcent3} Gay Barbie*
*│* 🏳️‍🌈 @${gays4.id.split('@')[0]}
*│➥ ${porcent4} Gay Ativo*
*│* 🏳️‍🌈 @${gays5.id.split('@')[0]}
*│➥ ${porcent5} Gay Passivo*
*╰────────────*
\n*🔥${botName}🔥*`
membr.push(gays1.id)
membr.push(gays2.id)
membr.push(gays3.id)
membr.push(gays4.id)
membr.push(gays5.id)
conn.sendMessage(from, {text: rankzingay, mentions: membr}, {quoted: info})
break

case 'rankcorno':
if(!isGroup) return reply(enviar.msg.grupo)
membr = []
const corno1 = groupMembers
const corno2 = groupMembers
const corno3 = groupMembers
const corno4 = groupMembers
const corno5 = groupMembers
var porcent = porcentagem[Math.floor(Math.random() * porcentagem.length)] 
var porcent2 = porcentagem[Math.floor(Math.random() * porcentagem.length)]
var porcent3 = porcentagem[Math.floor(Math.random() * porcentagem.length)]
var porcent4 = porcentagem[Math.floor(Math.random() * porcentagem.length)]
var porcent5 = porcentagem[Math.floor(Math.random() * porcentagem.length)] 
const cornos1 = corno1[Math.floor(Math.random() * corno1.length)]
const cornos2 = corno2[Math.floor(Math.random() * corno2.length)]
const cornos3 = corno3[Math.floor(Math.random() * corno3.length)]
const cornos4 = corno4[Math.floor(Math.random() * corno4.length)]
const cornos5 = corno5[Math.floor(Math.random() * corno5.length)]
rankzincorno = `
*Esses são os Cornos🐂 do grupo:*\n${groupName}\n
*╭────────────*
*│* 🐂 @${cornos1.id.split('@')[0]}
*│➥ ${porcent} Corno Comum*
*│* 🐂 @${cornos2.id.split('@')[0]}
*│➥ ${porcent2} Corno Manso*
*│* 🐂 @${cornos3.id.split('@')[0]}
*│➥ ${porcent3} Corno Conformado*
*│* 🐂 @${cornos4.id.split('@')[0]}
*│➥ ${porcent4} Corno Hiper-Chifrudo*
*│* 🐂 @${cornos5.id.split('@')[0]}
*│➥ ${porcent5} Mestre Do Free Fire*
*╰────────────*
\n*🔥${botName}🔥*`
membr.push(cornos1.id)
membr.push(cornos2.id)
membr.push(cornos3.id)
membr.push(cornos4.id)
membr.push(cornos5.id)
conn.sendMessage(from, {text: rankzincorno, mentions: membr}, {quoted: info})
break

case 'rankhetero':
if(!isGroup) return reply(enviar.msg.grupo)
membr = []
const hetero1 = groupMembers
const hetero2 = groupMembers
const hetero3 = groupMembers
const hetero4 = groupMembers
const hetero5 = groupMembers
var porcent = porcentagem[Math.floor(Math.random() * porcentagem.length)] 
var porcent2 = porcentagem[Math.floor(Math.random() * porcentagem.length)]
var porcent3 = porcentagem[Math.floor(Math.random() * porcentagem.length)]
var porcent4 = porcentagem[Math.floor(Math.random() * porcentagem.length)]
var porcent5 = porcentagem[Math.floor(Math.random() * porcentagem.length)] 
const heteros1 = hetero1[Math.floor(Math.random() * hetero1.length)]
const heteros2 = hetero2[Math.floor(Math.random() * hetero2.length)]
const heteros3 = hetero3[Math.floor(Math.random() * hetero3.length)]
const heteros4 = hetero4[Math.floor(Math.random() * hetero4.length)]
const heteros5 = hetero5[Math.floor(Math.random() * hetero5.length)]
rankzinhetero = `
*Esses são os Héteros💥 do grupo:*\n${groupName}\n
*╭────────────*
*│* 💥 @${heteros1.id.split('@')[0]}
*│➥ ${porcent} Hétero Comum*
*│* 💥 @${heteros2.id.split('@')[0]}
*│➥ ${porcent2} Hétero Mandrake*
*│* 💥 @${heteros3.id.split('@')[0]}
*│➥ ${porcent3} Hétero Curioso*
*│* 💥 @${heteros4.id.split('@')[0]}
*│➥ ${porcent4} Hétero Top*
*│* 💥 @${heteros5.id.split('@')[0]}
*│➥ ${porcent5} Hétero Cis*
*╰────────────*
\n*🔥${botName}🔥*`
membr.push(heteros1.id)
membr.push(heteros2.id)
membr.push(heteros3.id)
membr.push(heteros4.id)
membr.push(heteros5.id)
conn.sendMessage(from, {text: rankzinhetero, mentions: membr}, {quoted: info})
break

case 'execut':
if(!SoDono) return reply(enviar.msg.dono)
try{
return eval(`(async() => { ${args.join(' ')}})()`)
}catch (e) {
reply(`${e}`)
}
break

case 'adddono':
if (!isGroup) return reply(enviar.msg.grupo)
if (!SoDono  && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply(enviar.msg.dono)
if (info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null) return 
mentioned = info.message.extendedTextMessage.contextInfo.participant 
if (mentioned.length >= 1) {
blai = donos.includes(mentioned)
if(blai) return reply("*_Este número já está incluso!_*")  
donos.push(`${mentioned}`)
fs.writeFileSync('./database/dono/donos.json', JSON.stringify(donos))
conn.sendMessage(from, {text: `*_@${mentioned.split("@")[0]} foi adicionado como dono!_*`, mentions: [mentioned]}, {quoted: info})  
} else { 
mentioned = args.join(" ").replace("@", "") + "@s.whatsapp.net"
blai = donos.includes(mentioned)
if(blai) return reply("*_Este número já está incluso!_*")  
donos.push(`${mentioned}`)
fs.writeFileSync('./database/dono/donos.json', JSON.stringify(donos))
conn.sendMessage(from, {text: `*_@${mentioned.split("@")[0]} foi adicionado como dono ✔_*`, mentions: [mentioned]}, {quoted: info})
}
break 

case 'deldono':
if (!isGroup) return reply(enviar.msg.grupo)
if (!SoDono  && !isnit && !issupre && !ischyt && !info.key.fromMe) return  reply(enviar.msg.dono)
if (info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null) return 
num = info.message.extendedTextMessage.contextInfo.participant 
if (num.length >= 1) {
blai = dono.includes(num)
if(!blai) return reply("*_Este número não está como dono!_*")  
pesquisar = num
processo = donos.indexOf(pesquisar)
while(processo >= 0){
donos.splice(processo, 1)
processo = donos.indexOf(pesquisar)
}
fs.writeFileSync('./database/dono/donos.json', JSON.stringify(donos))
conn.sendMessage(from, {text: `*_${mentioned.split("@")[0]} foi retirado coml dono!_*`}, {quoted: info})
} else {
mentioned = args.join(" ").replace("@", "") + "@s.whatsapp.net"
blai = donos.includes(mentioned)
if(!blai) return reply("*_Este número não está incluso na lista de donos!_*")  
pesquisar = mentioned
processo = donos.indexOf(pesquisar)
while(processo >= 0){
donos.splice(processo, 1)
processo = donos.indexOf(pesquisar)
}
fs.writeFileSync('./database/dono/donos.json', JSON.stringify(donos))
conn.sendMessage(from, {text: `*_@${mentioned.split("@")[0]} foi retirado como dono ✔_*`, mentions: [mentioned]}, {quoted: info})
}
break

case 'donolist':
if(!SoDono) return reply(enviar.msg.dono)   
tkks = '╭────「 𝘿𝙤𝙣𝙤𝙨 」\n│𝘿𝙤𝙣𝙤 𝙊𝙛𝙞𝙘𝙞𝙖𝙡\n'
for (let V of donoOficial) {
tkks += `│@${V.split('@')[0]}\n`
}
tkks += `│𝙏𝙤𝙩𝙖𝙡: ${donoOficial.length}\n│\n│𝙊𝙪𝙩𝙧𝙤𝙨 𝘿𝙤𝙣𝙤𝙨\n`
for (let V of donos) {
tkks += `│@${V.split('@')[0]}\n`
}
tkks += `│𝙏𝙤𝙩𝙖𝙡: ${donos.length}\n╰────「 𝙆𝙖𝙧𝙚𝙣 𝘽𝙤𝙩 」`
reply(tkks.trim())
break

case 'addpremium':
if (!isGroup) return reply(enviar.msg.grupo)
if (!SoDono  && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply(enviar.msg.dono)
if (info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null) return 
mentioned = info.message.extendedTextMessage.contextInfo.participant 
if (mentioned.length >= 1) {
blai = premium.includes(mentioned)
if(blai) return reply("*_Este número já está incluso!_*")  
premium.push(`${mentioned}`)
fs.writeFileSync('./database/premium/premiuns.json', JSON.stringify(premium))
conn.sendMessage(from, {text: `*_@${mentioned.split("@")[0]} foi adicionado à lista de usuários premium com sucesso!_*`, mentions: [mentioned]}, {quoted: info})  
} else { 
mentioned = args.join(" ").replace("@", "") + "@s.whatsapp.net"
blai = premium.includes(mentioned)
if(blai) return reply("*_Este número já está incluso!_*")  
premium.push(`${mentioned}`)
fs.writeFileSync('./database/premium/premiuns.json', JSON.stringify(premium))
conn.sendMessage(from, {text: `*_@${mentioned.split("@")[0]} foi adicionado à lista de usuários premium com sucesso ✔_*`, mentions: [mentioned]}, {quoted: info})
}
break 

case 'delpremium':
if (!isGroup) return reply(enviar.msg.grupo)
if (!SoDono  && !isnit && !issupre && !ischyt && !info.key.fromMe) return  reply(enviar.msg.dono)
if (info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null) return 
num = info.message.extendedTextMessage.contextInfo.participant 
if (num.length >= 1) {
blai = premium.includes(num)
if(!blai) return reply("*_Este número não está incluso na lista premium!_*")  
pesquisar = num
processo = premium.indexOf(pesquisar)
while(processo >= 0){
premium.splice(processo, 1)
processo = premium.indexOf(pesquisar)
}
fs.writeFileSync('./database/premium/premiuns.json', JSON.stringify(premium))
conn.sendMessage(from, {text: ` ${mentioned.split("@")[0]} foi tirado da lista premium com sucesso..`}, {quoted: info})
} else {
mentioned = args.join(" ").replace("@", "") + "@s.whatsapp.net"
blai = premium.includes(mentioned)
if(!blai) return reply("*_Este número não está incluso na lista premium!_*")  
pesquisar = mentioned
processo = premium.indexOf(pesquisar)
while(processo >= 0){
premium.splice(processo, 1)
processo = premium.indexOf(pesquisar)
}
fs.writeFileSync('./database/premium/premiuns.json', JSON.stringify(premium))
conn.sendMessage(from, {text: `*_@${mentioned.split("@")[0]} foi tirado da lista premium com sucesso ✔_*`, mentions: [mentioned]}, {quoted: info})
}
break

case 'premiumlist':
if(!isPremium) return reply(enviar.msg.premium)   
tkks = '╭────「 𝙐𝙨𝙪𝙖𝙧𝙞𝙤𝙨 𝙋𝙧𝙚𝙢𝙞𝙪𝙢 」\n'
for (let V of premium) {
tkks += `│+  @${V.split('@')[0]}\n`
}
tkks += `│+ Total : ${premium.length}\n╰────「 𝙆𝙖𝙧𝙚𝙣 𝘽𝙤𝙩 」`
reply(tkks.trim())
break

case 'tagme':
const tagme = `@${sender.split("@")[0]}`
await mentions(tagme, [sender], true)
break

case 'reiniciar':
if(!SoDono) return reply("enviar.msg.dono")
reply(`Reiniciando...`)
await sleep(2000)
process.exit()
break
//*****[ FINAL COMANDOS DE PREFIXO]*****//

default:


//************[ CONEXÃO FINAL ]************//
}
} catch (e) {console.log(e)}})

conn.ev.on('connection.update', (update) => {
const { connection, lastDisconnect } = update
 
fs.watchFile('./index.js', (curr, prev) => {
if (curr.mtime.getTime() !== prev.mtime.getTime()) {
console.log(color("[❗] A index.js ACABOU DE SER EDITADA, REINICIANDO...", "yellow"));
process.exit()
}
})

fs.watchFile('./menu/menu.js', (curr, prev) => {
if (curr.mtime.getTime() !== prev.mtime.getTime()) {
console.log(color("[❗] O menu.js ACABOU DE SER EDITADO, REINICIANDO...", "yellow"));
process.exit()
}
})

if(fs.existsSync("karen_store.json")) {
statsObj = fs.statSync('./karen_store.json')  

if(convertBytes(statsObj.size) >= "10 MB") {
exec("rm karen_store.json")
}
}

if(connection === 'close') {
var shouldReconnect = ((lastDisconnect.error)?.output?.statusCode !== DisconnectReason.loggedOut)
if(String(lastDisconnect.error).includes("Stream Errored")) {
console.log(color("Stream Errored, CASO ESTA MENSAGEM CONTINUE SE REPETINDO, FORCE A PARADA NO TERMUX, ABRA NOVAMENTE E LIGUE, CASO CONTRÁRIO APENAS IGNORE...", "yellow"))
} else if(String(lastDisconnect.error).includes("Connection Failure")) {
exec("rm karen_info.json")  
exec("rm karen_store.json")
console.log(color("VOCÊ NÃO ESCANEOU CORRETAMENTE O QRCODE, OU ELE DESCONECTOU DO WHATSAPP, IREI APAGAR ELE E GERAR UM NOVO QRCODE...", "yellow"))
process.exit()
} else if(String(lastDisconnect.error).includes("Restart Required")) {
console.log(color("SE FOR NECESSÁRIO REINICIE, ESCANEIE O QRCODE EM UM AMBIENTE MAIS ESCURO PARA QUE O FOCO DA CÂMERA FUNCIONE MELHOR, CASO NÃO CONECTAR O QRCODE, SÓ SEGUIR ESSE PROCEDIMENTO BÁSICO...", "yellow"))
} else if(String(lastDisconnect.error).includes("Connection was lost")){
console.log(color("SUA CONEXÃO ESTÁ FRACA, NÃO SE PREOCUPE, EM BREVE VOLTA AO NORMAL...", "yellow"))
} else if(String(lastDisconnect.error).includes("Connection Terminated")){
console.log(color("CONEXÃO ESTÁ QUERENDO CAIR, MAS RELAXE, EM BREVE RECONECTA AUTOMATICAMENTE...", "yellow"))
} else {
console.log('Conexão fechada devido a ', lastDisconnect.error, ', Reconectar ', shouldReconnect)
}
if(lastDisconnect?.error) {
Commencer()
}}
if(update.isNewLogin) {
 Commencer()
}
})
}
Commencer()