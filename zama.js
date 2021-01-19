require('dotenv').config()
const { decryptMedia } = require('@open-wa/wa-decrypt')
const fs = require('fs-extra')
const ffmpeg = require('fluent-ffmpeg')
const axios = require('axios')
const moment = require('moment-timezone')
const getYouTubeID = require('get-youtube-id')
const os = require('os')
const path = require('path')
const get = require('got')
const speed = require('performance-now')
const color = require('./lib/color')
const fetch = require('node-fetch')
const canvas = require('canvacord')
const { spawn, exec } = require('child_process')
const urlShortener = require('./lib/shortener')
const nhentai = require('nhentai-js')
const { API } = require('nhentai-api')
const google = require('google-it')
const translatte = require('translatte')
const { stdout } = require('process')
const quotedd = require('./lib/quote')
const translate = require('translatte')
const { getStickerMaker } = require('./lib/ttp')
const Math_js = require('mathjs');
const imageToBase64 = require('image-to-base64')
const bent = require('bent')
const request = require('request')
const { addFilter, isFiltered } = require('./lib/msgFilter')

/*
SC utama BY:Tobz
REEDIT SELF BY:Zam :v

Thanks SELURUH CREATOR BOT YANG ADA DI GRUP BOT WE A
  SPECIAL THANKS TO :
                    -ALLAH SWT
                    -TOBZ
                    -VEZA
                    -HURTZ
                    -MHANKBARBAR
                    -Vinz
                    -./NotF0und
                    -MRG3P5
                    -NAFIZ
                    -Nabil
                    -Rahmat
                    -DAN SELURUH PENYEDIA WEB API

   Nb:Premium Command tau lah harus kemana

*/

const {
    downloader,
    liriklagu,
    quotemaker,
    sarahfs,
    randomNimek,
    sleep,
    movie,
    jadwalTv,
    processTime,
    instagram,
    nulis
    } = require('./lib/functions')

const {
    help,
    helpp,
    menu,
    admincmd,
    ownercmd,
    nsfwcmd,
    kerangcmd,
    mediacmd,
    animecmd,
    othercmd,
    adminbancmd,
    premiumcmd,
    downloadcmd,
    praycmd,
    groupcmd,
    bahasalist,
    sewa,
    snk,
    info,
    sumbang,
    readme,
    listChannel,
    commandArray
    } = require('./lib/help')

const {
    uploadImages,
    custom,
    stickerburn,
    stickerlight
    } = require('./lib/fetcher')
// LOAD FILE
let banned = JSON.parse(fs.readFileSync('./lib/database/banned.json'))
let nsfw_ = JSON.parse(fs.readFileSync('./lib/database/nsfwz.json'))
let simi_ = JSON.parse(fs.readFileSync('./lib/database/Simsimi.json'))
let limit = JSON.parse(fs.readFileSync('./lib/database/limit.json'))
let welkom = JSON.parse(fs.readFileSync('./lib/database/welcome.json'))
let left = JSON.parse(fs.readFileSync('./lib/database/left.json'))
let muted = JSON.parse(fs.readFileSync('./lib/database/muted.json'))
let setting = JSON.parse(fs.readFileSync('./lib/database/setting.json'))
let msgLimit = JSON.parse(fs.readFileSync('./lib/database/msgLimit.json'))
let adminNumber = JSON.parse(fs.readFileSync('./lib/database/admin.json'))
let regisNumber = JSON.parse(fs.readFileSync('./lib/database/daftar.json'))
let premiumuser = JSON.parse(fs.readFileSync('./lib/database/premium.json'))
let adminbanNumber = JSON.parse(fs.readFileSync('./lib/database/adminban.json'))
let antilink = JSON.parse(fs.readFileSync('./lib/database/antilink.json'))
let respon = JSON.parse(fs.readFileSync('./lib/database/respon.json'))
let antisara = JSON.parse(fs.readFileSync('./lib/database/antisara.json'))
let autostick = JSON.parse(fs.readFileSync('./lib/database/autostick.json'))
let antibadword = JSON.parse(fs.readFileSync('./lib/database/antibadword.json'))
let say = JSON.parse(fs.readFileSync('./lib/database/say.json'))
let daftar = JSON.parse(fs.readFileSync('./lib/database/daftar.json'))
let truth = JSON.parse(fs.readFileSync('./lib/database/truth.json'))
let dare = JSON.parse(fs.readFileSync('./lib/database/dare.json'))
let _afk = JSON.parse(fs.readFileSync('./lib/database/afk.json'))
const _leveling = JSON.parse(fs.readFileSync('./lib/database/leveling.json'))
const _level = JSON.parse(fs.readFileSync('./lib/database/level.json'))
let vnlist = JSON.parse(fs.readFileSync('./lib/database/vn.json'))

let {
    limitCount,
    memberLimit,
    groupLimit,
    banChats,
    barbarkey,
    melodickey,
    vhtearkey,
    tobzkey,
    restartState: isRestart,
    mtc: mtcState
    } = setting

let state = {
    status: () => {
        if(banChats){
            return 'Nonaktif'
        }else if(mtcState){
            return 'Nonaktif'
        }else if(!mtcState){
            return 'Aktif'
        }else{
            return 'Aktif'
        }
    }
}

const addAfk = (userId, time, reason) => {
            let obj = {id: `${userId}`, time: `${time}`, reason: `${reason}`}
            _afk.push(obj)
            fs.writeFileSync('./lib/database/afk.json', JSON.stringify(_afk))
        }

const getAfk = (userId) => {
            let isAfk = false
            Object.keys(_afk).forEach((i) => {
                if (_afk[i].id === userId) {
                    isAfk = true
                }
            })
            return isAfk
        }

        const getAfkReason = (userId) => {
            let position = false
            Object.keys(_afk).forEach((i) => {
                if (_afk[i].id === userId) {
                    position = i
                }
            })
            if (position !== false) {
                return _afk[position].reason
            }
        }

        const getAfkTime = (userId) => {
            let position = false
            Object.keys(_afk).forEach((i) => {
                if (_afk[i].id === userId) {
                    position = i
                }
            })
            if (position !== false) {
                return _afk[position].time
            }
        }

        const getAfkId = (userId) => {
            let position = false
            Object.keys(_afk).forEach((i) => {
                if (_afk[i].id === userId) {
                    position = i
                }
            })
            if (position !== false) {
                return _afk[position].id
            }
        }
moment.tz.setDefault('Asia/Jakarta').locale('id')
module.exports = zama = async (zama, message) => {
    try {
        const {
            type,
            id,
            from,
            t,
            to,
            sender,
            isGroupMsg,
            chat,
            chatId,
            caption,
            isMedia,
            mimetype,
            quotedMsg,
            quotedMsgObj,
            author,
            mentionedJidList
            } = message
        const self = sender && sender.isMe ? to : from
        let { body } = message
        let { prefix } = setting
        const { name, formattedTitle } = chat
        let { pushname, verifiedName } = sender
        pushname = pushname || verifiedName
        const commands = caption || body || ''
        const chats = (type === 'chat') ? body : (type === 'image' || type === 'video') ? caption : ''
        const command = commands.toLowerCase().split(' ')[0] || ''
        const args =  commands.split(' ')
        const argx = commands.toLowerCase()
        const ar = args.map((v) => v.toLowerCase())
        const isCmd = command.startsWith(`${prefix}`)

        const isQuotedImage = quotedMsg && quotedMsg.type === 'image'
        const isQuotedVideo = quotedMsg && quotedMsg.type === 'video'
        const isQuotedAudio = quotedMsg && (quotedMsg.type === 'audio' || quotedMsg.type === 'ptt' || quotedMsg.type === 'ppt')
        const isQuotedFile = quotedMsg && quotedMsg.type === 'document'
        const isImage = type === 'image'
        const issticker = type === 'sticker'
        body = (type === 'chat' && body.startsWith(`${prefix}`)) ? body : (((type === 'image' || type === 'video') && caption) && caption.startsWith(`${prefix}`)) ? caption : ''

        function restartAwal(zama){
            setting.restartState = false
            isRestart = false
            zama.sendText(setting.restartId, 'Restart Succesfull!')
            setting.restartId = 'undefined'
            fs.writeFileSync('./lib/setting.json', JSON.stringify(setting, null,2));
        }

        const isMuted = (chatId) => {
          if(muted.includes(chatId)){
            return false
        }else{
            return true
            }
        }

        function banChat () {
            if(banChats == true) {
            return false
        }else{
            return true
            }
        }

        const getInfoXp = (userId) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === userId) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].xp
            }
        }

        const getInfoLevel = (userId) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === userId) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].level
            }
        }

        const getInfoId = (userId) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === userId) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].id
            }
        }

        const addUserXp = (userId, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === userId) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].xp += amount
                fs.writeFileSync('./lib/database/level.json', JSON.stringify(_level))
            }
        }

        const addUserLevel = (userId, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === userId) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].level += amount
                fs.writeFileSync('./lib/database/level.json', JSON.stringify(_level))
            }
        }

        const addUserId = (userId) => {
            let obj = {id: `${userId}`, xp: 1, level: 1}
            _level.push(obj)
            fs.writeFileSync('./lib/database/level.json', JSON.stringify(_level))
        }

        if (typeof Array.prototype.splice === 'undefined') {
            Array.prototype.splice = function (index, howmany, elemes) {
                howmany = typeof howmany === 'undefined' || this.length;
                var elems = Array.prototype.slice.call(arguments, 2), newArr = this.slice(0, index), last = this.slice(index + howmany);
                newArr = newArr.concat.apply(newArr, elems);
                newArr = newArr.concat.apply(newArr, last);
                return newArr;
            }
        }

        const apakah = [
            'Ya',
            'Tidak',
            'Coba Ulangi'
            ]
        const urutan = [
            '1',
            '2',
            '3',
            '4',
            '5',
            '6',
            '7',
            '8',
            '9',
            '10'
        ]
        const tod = [
            'Truth',
            'Dare'
            ]
        const bisakah = [
            'Bisa',
            'Tidak Bisa',
            'Coba Ulangi'
            ]

        const kapankah = [
            '1 Minggu lagi',
            '1 Bulan lagi',
            '1 Tahun lagi'
            ]

        const rate = [
            '100%',
            '95%',
            '90%',
            '85%',
            '80%',
            '75%',
            '70%',
            '65%',
            '60%',
            '55%',
            '50%',
            '45%',
            '40%',
            '35%',
            '30%',
            '25%',
            '20%',
            '15%',
            '10%',
            '5%'
            ]
        const kelebihan = [
            'Soleh dan Soleha',
            'Pintar',
            'Rajin',
            'Teladan'
            ]
      const tipe = [
            'cool',
            'idaman',
            'Alami',
            'Keren',
            'Ideal',
            'Dia Bamget',
            'normal',
            'elite',
            'epic',
            'Legend'
            ]
      const sifat = [
            'Penolong',
            'Suka Membantu',
            'Saling Menolong',
            'Perhatian',
            'Ngak Cuek',
            'Romantis',
            'Dermawan',
            'Cool',
            'Peduli Kepada Sesama',
            'Suka Berkata Kasar'
            ]
      const hobby = [
            'Memasak',
            'Membantu Atok',
            'Mabar',
            'Nobar',
            'Sosmedtan',
            'Membantu Orang lain',
            'Nonton Anime',
            'Nonton Drakor',
            'Naik Motor',
            'Nyanyi',
            'Menari',
            'Bertumbuk',
            'Menggambar',
            'Foto fotoan Ga jelas',
            'Maen Game',
            'Berbicara Sendiri'
            ]
      const watak = [
            'top deh pokoknya',
            'penyayang',
            'pemurah',
            'Pemarah',
            'Pemaaf',
            'Penurut',
            'Baik',
            'baperan',
            'Baik-Hati',
            'penyabar',
            'UwU',
            'Suka Membantu'
            ]

        const mess = {
            wait: '[ WAIT ] Sedang di proses⏳ silahkan tunggu sebentar',
            error: {
                St: `[❗] Kirim gambar dengan caption *${prefix}sticker* atau tag gambar yang sudah dikirim`,
                Ti: `[❗] Replay sticker dengan caption *${prefix}stickertoimg* atau tag sticker yang sudah dikirim`,
                Qm: `[❗] Terjadi kesalahan, mungkin themenya tidak tersedia!`,
                Yt3: `[❗] Terjadi kesalahan, tidak dapat meng konversi ke mp3!`,
                Yt4: `[❗] Terjadi kesalahan, mungkin error di sebabkan oleh sistem.`,
                Ig: '[❗] Terjadi kesalahan, mungkin karena akunnya private',
                Ki: '[❗] Bot tidak bisa mengeluarkan Admin group!',
                Sp: '[❗] Bot tidak bisa mengeluarkan Admin',
                Ow: '[❗] Bot tidak bisa mengeluarkan Owner',
                Bk: '[❗] Bot tidak bisa memblockir Owner',
                Ad: '[❗] Tidak dapat menambahkan target, mungkin karena di private',
                Iv: '[❗] Link yang anda kirim tidak valid!'
            }
        }
        const pengirim = sender.id.replace("@c.us","")
        var timeStart = Date.now() / 1000
        const pendaftar = regisNumber.length
        const time = moment(t * 1000).format('DD/MM HH:mm:ss')
        const botNumber = await zama.getHostNumber()
        const { ind } = require('./text/lang/')
        const blockNumber = await zama.getBlockedIds()
        const groupId = isGroupMsg ? chat.groupMetadata.id : ''
        const groupAdmins = isGroupMsg ? await zama.getGroupAdmins(groupId) : ''
        const isGroupAdmins = isGroupMsg ? groupAdmins.includes(sender.id) : false
        const isLevelingOn = isGroupMsg ? _leveling.includes(chat.id) : false
        const isBotGroupAdmins = isGroupMsg ? groupAdmins.includes(botNumber + '@c.us') : false
        const serial = sender.id

        const isAdmin = adminNumber.includes(sender.id)
        const isregis = regisNumber.includes(sender.id)
        const isprem = premiumuser.includes(sender.id)
        const isregistered = regisNumber.includes(sender.id)
        const ownerNumber = '6281295037142@c.us' //GANTI NOMOR LU
        const isOwner = ownerNumber.includes(sender.id)
        const isAdminban = adminbanNumber.includes(sender.id)
        const nma = pushname
        const userLevel = getInfoLevel(sender.id)
        const userXp = getInfoXp(sender.id)
        const isWhite = (chatId) => adminNumber.includes(chatId) ? true : false
        const isWhiteList = (chatId) => {
            if(adminNumber.includes(sender.id)){
                if(muted.includes(chatId)) return false
                return true
            }else{
                return false
            }
        }
        // PROTECT
        const timestamp = speed();
        const latensi = speed() - timestamp
        const tms = (Date.now() / 1000) - (timeStart);

        const isDetectorLink = antilink.includes(chatId)
        const isresp = respon.includes(chatId)
        const isDetectorBadword = antibadword.includes(chatId)
        const isautosticker = autostick.includes(chatId)
        const issara = antisara.includes(chatId)
        const isBanned = banned.includes(sender.id)
        const isBlocked = blockNumber.includes(sender.id)
        const isAfkon = getAfk(sender.id)
        const isNsfw = isGroupMsg ? nsfw_.includes(chat.id) : false
        const isSimi = isGroupMsg ? simi_.includes(chat.id) : false
        const uaOverride = 'WhatsApp/2.2029.4 Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 Safari/537.36'
        const isUrl = new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/gi)
        const url = args.length !== 0 ? args[0] : ''
        const errorImg = 'https://i.imgur.com/UxvMPUz.png'
        const tutor = 'https://i.ibb.co/Hp1XGbL/a4dec92b8922.jpg'
        const errorurl = 'https://steamuserimages-a.akamaihd.net/ugc/954087817129084207/5B7E46EE484181A676C02DFCAD48ECB1C74BC423/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false'
        const errorurl2 = 'https://steamuserimages-a.akamaihd.net/ugc/954087817129084207/5B7E46EE484181A676C02DFCAD48ECB1C74BC423/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false'
        // FUNCTION

        function waktu(seconds) { // TOBZ
            seconds = Number(seconds);
            var d = Math.floor(seconds / (3600 * 24));
            var h = Math.floor(seconds % (3600 * 24) / 3600);
            var m = Math.floor(seconds % 3600 / 60);
            var s = Math.floor(seconds % 60);
            var dDisplay = d > 0 ? d + (d == 1 ? " Hari,":" Hari,") : "";
            var hDisplay = h > 0 ? h + (h == 1 ? " Jam,":" Jam,") : "";
            var mDisplay = m > 0 ? m + (m == 1 ? " Menit,":" Menit,") : "";
            var sDisplay = s > 0 ? s + (s == 1 ? " Detik,":" Detik") : "";
            return dDisplay + hDisplay + mDisplay + sDisplay;
        }
        const cts = waktu(tms)
                function isMsgLimit(id){
                    if (isAdmin) {return false;}
                    let found = false;
                    for (let i of msgLimit){
                        if(i.id === id){
                            if (i.msg >= 12) {
                                found === true
                                zama.reply(self, `*[ANTI-SPAM]*\nMaaf, akun anda kami blok karena SPAM, dan tidak bisa di UNBLOK!`, id)
                                zama.contactBlock(id)
                                banned.push(id)
                                fs.writeFileSync('./lib/database/banned.json', JSON.stringify(banned))
                                return true;
                            }else if(i.msg >= 7){
                                found === true
                                zama.reply(self, `*[ANTI-SPAM]*\nNomor anda terdeteksi spam!\nMohon tidak spam 5 pesan lagi atau nomor anda AUTO BLOK!`, id)
                                return true
                            }else{
                                found === true
                                return false;
                            }
                        }
                    }
                    if (found === false){
                        let obj = {id: `${id}`, msg:1};
                        msgLimit.push(obj);
                        fs.writeFileSync('./lib/database/msgLimit.json',JSON.stringify(msgLimit));
                        return false;
                    }
                }
                function addMsgLimit(id){
                    if (isAdmin) {return;}
                    var found = false
                    Object.keys(msgLimit).forEach((i) => {
                        if(msgLimit[i].id == id){
                            found = i
                        }
                    })
                    if (found !== false) {
                        msgLimit[found].msg += 1;
                        fs.writeFileSync('./lib/database/msgLimit.json',JSON.stringify(msgLimit));
                    }
                }
                function isLimit(id){
                    if (isAdmin) {return false;}
                    let found = false;
                    for (let i of limit){
                        if(i.id === id){
                            let limits = i.limit;
                            if (limits >= limitCount) {
                                found = true;
                                zama.reply(self, `Perintah BOT anda sudah mencapai batas, coba esok hari :)`, id)
                                return true;
                            }else{
                                limit
                                found = true;
                                return false;
                            }
                        }
                    }
                    if (found === false){
                        let obj = {id: `${id}`, limit:1};
                        limit.push(obj);
                        fs.writeFileSync('./lib/database/limit.json',JSON.stringify(limit));
                        return false;
                    }
                }
                function limitAdd (id) {
                    if (isAdmin) {return;}
                    var found = false;
                    Object.keys(limit).forEach((i) => {
                        if(limit[i].id == id){
                            found = i
                        }
                    })
                    if (found !== false) {
                        limit[found].limit += 1;
                        fs.writeFileSync('./lib/database/limit.json',JSON.stringify(limit));
                    }
                }

                function monospace(string) {
                    return '```' + string + '```'
                }
        //autosticker
        if (isGroupMsg && isautosticker && isMedia && isImage && !isCmd) {
            const mediaData = await decryptMedia(message, uaOverride)
            const imageBase64 = `data:${mimetype};base64,${mediaData.toString('base64')}`
            await zama.sendImageAsSticker(self, imageBase64)
                .then(() => {
                    console.log(`Sticker processed for ${processTime(t, moment())} seconds`)
                })
                .catch(async (err) => {
                    console.error(err)
                    await zama.reply(self, `Error!`, id)
                })
        }

                // AFK
        if (isGroupMsg) {
            const checking = getAfk(sender.id)
            for (let ment of mentionedJidList) {
                if (getAfk(ment)) {
                    const getId = getAfkId(ment)
                    const getReason = getAfkReason(getId)
                    const getTime = getAfkTime(getId)
                    await zama.reply(self, `*「 AFK MODE 」*\n\nSssttt! Orangnya lagi AFK, jangan diganggu!\n➸ *Alasan*: ${getReason}\n➸ *Sejak*: ${getTime}`, id)
                }
            }
            if (checking && !isCmd) {
                _afk.splice(sender.id, 1)
                fs.writeFileSync('./lib/database/afk.json', JSON.stringify(_afk))
                await zama.sendText(self, `*${pushname}* telah kembali dari AFK! Selamat datang kembali~`,id)
            }
        }

       // Leveling [ALPHA]
        if (isGroupMsg && isregistered && isLevelingOn && !isCmd) {
            const currentLevel = getInfoLevel(sender.id)
            const checkId = getInfoId(sender.id)
            try {
                if (currentLevel === undefined && checkId === undefined) {
                    addUserId(sender.id)
                } else {
                    const amountXp = Math.floor(Math.random() * 10) + 500
                    const requiredXp = 8000 * (Math.pow(2, currentLevel) - 1)
                    const getXp = getInfoXp(sender.id)
                    addUserXp(sender.id, amountXp)
                    if (requiredXp <= getXp) {
                        addUserLevel(sender.id, 1)
                        const getLevel = getInfoLevel(sender.id)
                        await zama.sendText(self, `Selamat ${pushname}! Kamu naik ke level ${getLevel}!`)
                    }
                }
            } catch (err) {
                console.error(err)
            }
        }

                // END HELPER FUNCTION
                if (isGroupMsg && isDetectorLink && !isGroupAdmins && !isAdmin && !isOwner){
                    if (chats.match(/(https:\/\/chat.whatsapp.com)/gi)) {
                        const check = await zama.inviteInfo(chats);
                        if (!check) {
                            return
                        } else {
                            zama.reply(self, `*「 GROUP LINK DETECTOR 」*\nKamu mengirimkan link grup chat, maaf kamu di kick dari grup :(`, id).then(() => {
                                zama.removeParticipant(groupId, sender.id)
                            })
                        }
                    }
                }
                // MRHRTZ
                if (isGroupMsg && isDetectorBadword && !isGroupAdmins && !isAdmin && !isOwner){
                    if (chats.match("anjing") || chats.match("gblk") || chats.match("tolol") || chats.match("kntl")) {
                        if (!isGroupAdmins) {
                            return zama.reply(self, "JAGA UCAPAN DONG!! 😠", id)
                            .then(() => zama.removeParticipant(groupId, sender.id))
                            .then(() => {
                                zama.sendText(self, `*「 ANTI BADWORD 」*\nKamu mengirimkan link grup chat, maaf kamu di kick dari grup 🙁`)
                            }).catch(() => zama.sendText(self, `Untung Sukan Admin, Kalo Jadi Admin Udah Aku Kick Tuh! 😑`))
                        } else {
                            return zama.reply(self, "Tolong Jaga Ucapan Min 😇", id)
                        }
                    }
                }
                if (isGroupMsg && issara && !isGroupAdmins && !isAdmin && !isOwner){
                    if (chats.match("kris10") || chats.match("atheis") || chats.match("krislam") || chats.match("jasjus kristus")) {
                        if (!isGroupAdmins) {
                            return zama.reply(self, "JAGA UCAPAN DONG!! 😠\nJangan Sara", id)
                            .then(() => zama.removeParticipant(groupId, sender.id))
                            .then(() => {
                                zama.sendText(self, `*「 ANTI SARA 」*\nKamu SARA di dalam group, maaf kamu di kick dari grup 🙁`)
                            }).catch(() => zama.sendText(self, `Untung Z Bukan Admin, Kalo Jadi Admin Udah Aku Kick Tuh! 😑`))
                        } else {
                            return zama.reply(self, "Tolong Jaga Ucapan Min 😇\nJangan Sara", id)
                        }
                    }
                }
                if(body === '+mute' && isMuted(chatId) == true){
                    if(isGroupMsg) {
                        if (!isAdmin) return zama.reply(self, `Maaf, perintah ini hanya dapat dilakukan oleh admin Zam!`, id)
                        if(isMsgLimit(serial)){
                            return
                        }else{
                            addMsgLimit(serial)
                        }
                        muted.push(chatId)
                        fs.writeFileSync('./lib/database/muted.json', JSON.stringify(muted, null, 2))
                        zama.reply(self, `Bot telah di mute pada chat ini! #unmute untuk unmute!`, id)
                    }else{
                        if(isMsgLimit(serial)){
                            return
                        }else{
                            addMsgLimit(serial)
                        }
                        muted.push(chatId)
                        fs.writeFileSync('./lib/database/muted.json', JSON.stringify(muted, null, 2))
                        reply(self, `Bot telah di mute pada chat ini! #unmute untuk unmute!`, id)
                    }
                }
                if(body === '+unmute' && isMuted(chatId) == false){
                    if(isGroupMsg) {
                        if (!isAdmin) return zama.reply(self, `Maaf, perintah ini hanya dapat dilakukan oleh admin Zam!`, id)
                        if(isMsgLimit(serial)){
                            return
                        }else{
                            addMsgLimit(serial)
                        }
                        let index = muted.indexOf(chatId);
                        muted.splice(index,1)
                        fs.writeFileSync('./lib/database/muted.json', JSON.stringify(muted, null, 2))
                        zama.reply(self, `Bot telah di unmute!`, id)
                    }else{
                        if(isMsgLimit(serial)){
                            return
                        }else{
                            addMsgLimit(serial)
                        }
                        let index = muted.indexOf(chatId);
                        muted.splice(index,1)
                        fs.writeFileSync('./lib/database/muted.json', JSON.stringify(muted, null, 2))
                        zama.reply(self, `Bot telah di unmute!`, id)
                    }
                }
                if (body === `${prefix}public`) {
                    if (!isOwner) return zama.reply(self, 'Maaf, perintah ini hanya dapat dilakukan oleh Owner ZAM!', id)
                    if(setting.banChats === false) return
                    setting.banChats = false
                    banChats = false
                    fs.writeFileSync('./lib/database/setting.json', JSON.stringify(setting, null, 2))
                    zama.reply(self, ' _*MODE PUBLIC!*_ ', id)
                }
                /*if (body === `${prefix}publicc`) {
                    if (!isOwner) return zama.reply(self, `Maaf, perintah ini hanya dapat dilakukan oleh Owner Zam!`, id)
                    if(setting.banChats === false) return
                    setting.banChats = false
                    banChats = false
                    fs.writeFileSync('./lib/database/setting.json', JSON.stringify(setting, null, 2))
                    zama.reply('Global chat has been disable!')
                }*/

        // [BETA] Avoid Spam Message
       // if (isCmd && isFiltered(from) && !isGroupMsg) { return console.log(color('[SPAM]', 'red'), color(moment(t * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname)) }
       // if (isCmd && isFiltered(from) && isGroupMsg) { return console.log(color('[SPAM]', 'red'), color(moment(t * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname), 'in', color(name || formattedTitle)) }
        //
        if (isCmd && !isGroupMsg) {console.log(color('[EXEC]'), color(moment(t * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname))}
        if (isCmd && isGroupMsg) {console.log(color('[EXEC]'), color(moment(t * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname), 'in', color(name || formattedTitle))}

        // [BETA] Avoid Spam Message
        addFilter(from)
        if (isMuted(chatId) && banChat() && !isBlocked && !isBanned || isOwner ) {
        switch(command) {

        case `${prefix}self`:
          if (setting.banChats === true) return
          if (!isOwner) return zama.reply(self, 'Perintah ini hanya bisa di gunakan oleh Owner ZAM!', id)
          setting.banChats = true
          banChats = true
          fs.writeFileSync('./lib/database/setting.json', JSON.stringify(setting, null, 2))
          zama.reply(self, '  _*MODE SELF!*_ ', id)
          break

        case `${prefix}unmute`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
            console.log(`Unmuted ${name}!`)
            await zama.sendSeen(from)
            break
        case `${prefix}public`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
            console.log(`Banchat ${name}!`)
            await zama.sendSeen(from)
            zama.reply(self, `beralih ke mode publik`, id)
            break
        case `${prefix}sticker`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
        case `${prefix}stiker`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
            if (isMedia && type === 'image') {
                const mediaData = await decryptMedia(message, uaOverride)
                const imageBase64 = `data:${mimetype};base64,${mediaData.toString('base64')}`
                await zama.sendImageAsSticker(self, imageBase64)
            } else if (quotedMsg && quotedMsg.type == 'image') {
                const mediaData = await decryptMedia(quotedMsg, uaOverride)
                const imageBase64 = `data:${quotedMsg.mimetype};base64,${mediaData.toString('base64')}`
                await zama.sendImageAsSticker(self, imageBase64)
            } else if (args.length === 2) {
                const url = args[1]
                if (url.match(isUrl)) {
                    await zama.sendStickerfromUrl(self, url, { method: 'get' })
                        .catch(err => console.log('Caught exception: ', err))
                } else {
                    zama.reply(self, mess.error.Iv, id)
                }
            } else {
                    zama.reply(self, mess.error.St, id)
            }
            break
        case `${prefix}ttp`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
                if (!isGroupMsg) return zama.reply(self, `Perintah ini hanya bisa di gunakan dalam group!`, message.id)
                try
                {
                    const string = body.toLowerCase().includes('#ttp') ? body.slice(5) : body.slice(5)
                    if(args)
                    {
                        if(quotedMsgObj == null)
                        {
                            const gasMake = await getStickerMaker(string)
                            if(gasMake.status == true)
                            {
                                try{
                                    await zama.sendImageAsSticker(self, gasMake.base64)
                                }catch(err) {
                                    await zama.reply(self, `Gagal membuat.`, id)
                                }
                            }else{
                                await zama.reply(self, gasMake.reason, id)
                            }
                        }else if(quotedMsgObj != null){
                            const gasMake = await getStickerMaker(quotedMsgObj.body)
                            if(gasMake.status == true)
                            {
                                try{
                                    await zama.sendImageAsSticker(self, gasMake.base64)
                                }catch(err) {
                                    await zama.reply(self, `Gagal membuat.`, id)
                                }
                            }else{
                                await zama.reply(self, gasMake.reason, id)
                            }
                        }

                    }else{
                        await zama.reply(self, `Tidak boleh kosong.`, id)
                    }
                }catch(error)
                {
                    console.log(error)
                }
            break;
        case `${prefix}ttg`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
            if (!isGroupMsg) return zama.reply(self, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            if (isLimit(serial)) return zama.reply(self, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik #limit Untuk Mengecek Kuota Limit Kamu`, id)
            try {
                if (quotedMsgObj == null) {
                    if (args.length === 1) return zama.reply(self, `Kirim perintah *#ttg [ Teks ]*, contoh *#ttg aku bukan boneka*`, id)
                        await zama.sendStickerfromUrl(self, `https://api.vhtear.com/textxgif?text=${body.slice(5)}&apikey=${vhtearkey}`)
                        limitAdd(serial)
                } else {
                    await zama.sendStickerfromUrl(self, `https://api.vhtear.com/textxgif?text=${quotedMsgObj}&apikey=${vhtearkey}`)
                    limitAdd(serial)
                }
            } catch(e) {
                console.log(e)
                zama.reply(self, `Maaf, Server sedang Error`)
            }
            break
        case `${prefix}toimg`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikas`, id)
            if (quotedMsg && quotedMsg.type == 'sticker') {
                const mediaData = await decryptMedia(quotedMsg)
                zama.reply(self, `[WAIT] Sedang di proses⏳ silahkan tunggu!`, id)
                const imageBase64 = `data:${quotedMsg.mimetype};base64,${mediaData.toString('base64')}`
                await zama.sendFile(self, imageBase64, 'imagesticker.jpg', 'Success Convert Sticker to Image!', id)
            } else if (!quotedMsg) return zama.reply(self, `Mohon tag sticker yang ingin dijadikan gambar!`, id)
            break
        case `${prefix}stickergif`:
        case `${prefix}stikergif`:
        case `${prefix}sgif`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id) // MRHRTZ
            zama.reply(self, `[WAIT] Sedang di proses⏳ silahkan tunggu ± 1 min!`, id)
            if (isMedia && type === 'video' || mimetype === 'image/gif') {
                try {
                    const mediaData = await decryptMedia(message, uaOverride)
                    await zama.sendMp4AsSticker(self, mediaData, {fps: 10, startTime: `00:00:00.0`, endTime : `00:00:05.0`,loop: 0})
                } catch (e) {
                    zama.reply(self, `Size media terlalu besar! mohon kurangi durasi video.`)
                }
            } else if (quotedMsg && quotedMsg.type == 'video' || quotedMsg && quotedMsg.mimetype == 'image/gif') {
                const mediaData = await decryptMedia(quotedMsg, uaOverride)
                await zama.sendMp4AsSticker(self, mediaData, {fps: 10, startTime: `00:00:00.0`, endTime : `00:00:05.0`,loop: 0})
            } else {
                zama.reply(self, `Kesalahan ⚠️ Hanya bisa video/gif apabila file media berbentuk gambar ketik #stickergif`, id)
            }
            break
        case `${prefix}stickerlightning`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
        case `${prefix}slightning`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
             zama.reply(self, `[WAIT] Sedang di proses⏳ silahkan tunggu ± 1 min!`, id)
            if (isMedia && type === 'image') {
                const mediaData = await decryptMedia(message, uaOverride)
                const getUrle = await uploadImages(mediaData, false)
                const imgnye = await stickerlight(getUrle)
                const Slight = imgnye.result.imgUrl
                await zama.sendStickerfromUrl(self, Slight)
            } else if (quotedMsg && quotedMsg.type == 'image') {
                const mediaData = await decryptMedia(quotedMsg, uaOverride)
                const getUrle = await uploadImages(mediaData, false)
                const imgnye = await stickerlight(getUrle)
                const Slight = imgnye.result.imgUrl
                await zama.sendStickerfromUrl(self, Slight)
            } else {
                await zama.reply(self, `Wrong Format!\n⚠️ Harap Kirim Gambar Dengan #stickerlightning`, id)
            }
            break
        case `${prefix}stickerfire`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
        case `${prefix}sfire`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
            zama.reply(self, `[WAIT] Sedang di proses⏳ silahkan tunggu ± 1 min!`, id)
            if (isMedia && type === 'image') {
                const mediaData = await decryptMedia(message, uaOverride)
                const getUrli = await uploadImages(mediaData, false)
                const imgnya = await stickerburn(getUrli)
                const Sfire = imgnya.result.imgUrl
                await zama.sendStickerfromUrl(self, Sfire)
            } else if (quotedMsg && quotedMsg.type == 'image') {
                const mediaData = await decryptMedia(quotedMsg, uaOverride)
                const getUrli = await uploadImages(mediaData, false)
                const imgnya = await stickerburn(getUrli)
                const Sfire = imgnya.result.imgUrl
                await zama.sendStickerfromUrl(self, Sfire)
            } else {
                await zama.reply(self, `Wrong Format!\n⚠️ Harap Kirim Gambar Dengan #stickerfire`, id)
            }
            break
        case `${prefix}groupinfo`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
            if (!isGroupMsg) return zama.reply(self, `Perintah ini hanya bisa di gunakan dalam group!`, message.id)
            isMuted(chatId) == false
            var totalMem = chat.groupMetadata.participants.length
            var desc = chat.groupMetadata.desc
            var groupname = name
            var welgrp = welkom.includes(chat.id)
            var leftgrp = left.includes(chat.id)
            var ngrp = nsfw_.includes(chat.id)
            var antlink = antilink.includes(chat.id)
            var antsara = antisara.includes(chat.id)
            var responn = respon.includes(chat.id)
            var down = download.includes(chat.id)
            var stick = autostick.includes(chat.id)
            var simu = simi_.includes(chat.id)
            var antbad = antibadword.includes(chat.id)
            var grouppic = await zama.getProfilePicFromServer(chat.id)
            if (grouppic == undefined) {
                 var pfp = errorurl
            } else {
                 var pfp = grouppic
            }
            await zama.sendFileFromUrl(self, pfp, 'group.png', `*「 GROUP INFO 」*
*➸ *Name : ${groupname}*
*➸ Members : ${totalMem}*
*➸ Welcome : ${welgrp ? 'Aktif' : 'Tidak Aktif'}*
*➸ Left : ${leftgrp ? 'Aktif' : 'Tidak Aktif'}*
*➸ NSFW : ${ngrp ? 'Aktif' : 'Tidak Aktif'}*
*➸ Simsimi : ${simu ? 'Aktif' : 'Tidak Aktif'}*
*➸ Anti Link : ${antlink ? 'Aktif' : 'Tidak Aktif'}*
*➸ Anti Badword : ${antbad ? 'Aktif' : 'Tidak Aktif'}*
*➸ Group Description*
${desc}`)
            break
        case `${prefix}quoterandom`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
        case `${prefix}quote`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
            if (!isGroupMsg) return zama.reply(self, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            if (isLimit(serial)) return zama.reply(self, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik #limit Untuk Mengecek Kuota Limit Kamu`, id)

            await limitAdd(serial)
            zama.sendText(self, quotedd())
            break
        case `${prefix}tts`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
            if (!isGroupMsg) return zama.reply(self, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            if (isLimit(serial)) return zama.reply(self, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik #limit Untuk Mengecek Kuota Limit Kamu`, id)

            await limitAdd(serial)
            try {
                if (args.length === 1) return zama.reply(self, `Kirim perintah *#tts [ Bahasa ] [ Teks ]*, contoh *#tts id halo semua*`)
                var dataBhs = args[1]
                const ttsHZ = require('node-gtts')(dataBhs)
                var dataText = body.slice(8)
                if (dataText === '') return zama.reply(self, `Masukkan teksnya`, id)
                if (dataText.length > 500) return zama.reply(self, `Teks terlalu panjang!`, id)
                var dataBhs = body.slice(5, 7)
                ttsHZ.save('./media/tts.mp3', dataText, function () {
                zama.sendPtt(self, `./media/tts.mp3`, id)
                })
            } catch (err){
                console.log(err)
                zama.reply(self, bahasa_list, id)
            }
            break
        case `${prefix}koin`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
            if (!isGroupMsg) return zama.reply(self, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            const side = Math.floor(Math.random() * 2) + 1
            if (side == 1) {
              zama.sendStickerfromUrl(self, `https://i.ibb.co/YTWZrZV/2003-indonesia-500-rupiah-copy.png`, { method: 'get' })
            } else {
              zama.sendStickerfromUrl(self, `https://i.ibb.co/bLsRM2P/2003-indonesia-500-rupiah-copy-1.png`, { method: 'get' })
            }
            break
        case `${prefix}dadu`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
            if (!isGroupMsg) return zama.reply(self, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            const dice = Math.floor(Math.random() * 6) + 1
            await zama.sendStickerfromUrl(self, 'https://www.random.org/dice/dice' + dice + '.png', { method: 'get' })
            break
        case `${prefix}kapankah`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
            if (!isGroupMsg) return zama.reply(self, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            const when = body.slice(10)
            const ans = kapankah[Math.floor(Math.random() * (kapankah.length))]
            if (!when) zama.reply(self, `⚠️ Format salah! Ketik *#menu* untuk penggunaan.`)
            await zama.sendText(self, `Pertanyaan: *Kapankah ${when}* \n\nJawaban: ${ans}`)
            break
        case `${prefix}nilai`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
        case `${prefix}rate`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
            if (!isGroupMsg) return zama.reply(self, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            const rating = body.slice(6)
            const awr = rate[Math.floor(Math.random() * (rate.length))]
            if (!rating) zama.reply(self, `⚠️ Format salah! Ketik *#menu* untuk penggunaan.`)
            await zama.sendText(self, `Pertanyaan: *Rate ${rating}* \n\nJawaban: ${awr}`)
            break
        case `${prefix}apakah`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
            if (!isGroupMsg) return zama.reply(self, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            const nanya = body.slice(8)
            const jawab = apakah[Math.floor(Math.random() * (apakah.length))]
            if (!nanya) zama.reply(self, `⚠️ Format salah! Ketik *#menu* untuk penggunaan.`)
            await zama.sendText(self, `Pertanyaan: *Apakah ${nanya}* \n\nJawaban: ${jawab}`)
            break
         case `${prefix}bisakah`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
            if (!isGroupMsg) return zama.reply(self, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            const bsk = body.slice(9)
            const jbsk = bisakah[Math.floor(Math.random() * (bisakah.length))]
            if (!bsk) zama.reply(self, `⚠️ Format salah! Ketik *#menu* untuk penggunaan.`)
            await zama.sendText(self, `Pertanyaan: *Bisakah ${bsk}* \n\nJawaban: ${jbsk}`)
            break
        case `${prefix}owner`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
        case `${prefix}creator`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
            zama.sendContact(chatId, `6281295037142@c.us`,id)
            zama.sendTextWithMentions(self, `mau ngapain minta nomer ownerku @${sender.id.replace('@c.us','')}\nItu nomor Ownerku `, id)
            break
        // ON OFF
        case `${prefix}antitoxic`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
            if (!isGroupMsg) return zama.reply(self, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            if (!isGroupAdmins) return zama.reply(self, `Perintah ini hanya bisa di gunakan oleh Admin group!`, id)
            if (!isBotGroupAdmins) return zama.reply(self, `Perintah ini hanya bisa di gunakan jika Bot menjadi Admin!`, id)
            if (args[1] == 'enable') {
                var cek = antibadword.includes(chatId);
                if(cek){
                    return zama.reply(self, `*「 ANTI BADWORD 」*\nPerhatian Untuk Member Grup ${name} Tercinta\nHarap Jangan Toxic Di Sini Atau Z Akan Kick!`, id)
                } else {
                    antibadword.push(chatId)
                    fs.writeFileSync('./lib/database/antibadword.json', JSON.stringify(antibadword))
                    zama.reply(self, `*「 ANTI BADWORD 」*\nPerhatian Untuk Member Grup ${name} Tercinta\nHarap Jangan Toxic Di Sini Atau Z Akan Kick!`, id)
                }
            } else if (args[1] == 'disable') {
                var cek = antibadword.includes(chatId);
                if(!cek){
                    return zama.reply(self, `*「 ANTI BADWORD 」*\nPerhatian Untuk Member Grup ${name} Tercinta\nHarap Jangan Toxic Di Sini Atau Z Akan Kick!`, id)
                } else {
                    let nixx = antibadword.indexOf(chatId)
                    antibadword.splice(nixx, 1)
                    fs.writeFileSync('./lib/database/antibadword.json', JSON.stringify(antibadword))
                    zama.reply(self, `*「 ANTI BADWORD 」*\nPerhatian Untuk Member Grup ${name} Tercinta\nHarap Jangan Toxic Di Sini Atau Z Akan Kick!`, id)
                }
            } else {
                zama.reply(self, `Pilih enable atau disable udin!`, id)
            }
            break
        case `${prefix}antilink`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
            if (!isGroupMsg) return zama.reply(self, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            if (!isGroupAdmins) return zama.reply(self, `Perintah ini hanya bisa di gunakan oleh Admin group!`, id)
            if (!isBotGroupAdmins) return zama.reply(self, `Perintah ini hanya bisa di gunakan jika Bot menjadi Admin!`, id)
            if (args[1] == 'enable') {
                var cek = antilink.includes(chatId);
                if(cek){
                    return zama.reply(self, `*「 ANTI GROUP LINK 」*\nPerhatian Untuk Member Grup ${name} Tercinta\nJika Ingin Send Link Harap Izin Ke Admin`, id)
                } else {
                    antilink.push(chatId)
                    fs.writeFileSync('./lib/database/antilink.json', JSON.stringify(antilink))
                    zama.reply(self, `*「 ANTI GROUP LINK 」*\nPerhatian Untuk Member Grup ${name} Tercinta\nJika Ingin Send Link Harap Izin Ke Admin`, id)
                }
            } else if (args[1] == 'disable') {
                var cek = antilink.includes(chatId);
                if(!cek){
                    return zama.reply(self, `*「 ANTI GROUP LINK 」*\nPerhatian Untuk Member Grup ${name} Tercinta\nJika Ingin Send Link Harap Izin Ke Admin`, id)
                } else {
                    let nixx = antilink.indexOf(chatId)
                    antilink.splice(nixx, 1)
                    fs.writeFileSync('./lib/database/antilink.json', JSON.stringify(antilink))
                    zama.reply(self, `*「 ANTI GROUP LINK 」*\nPerhatian Untuk Member Grup ${name} Tercinta\nJika Ingin Send Link Harap Izin Ke Admin`, id)
                }
            } else {
                zama.reply(self, `Pilih enable atau disable udin!`, id)
            }
            break
        case `${prefix}nsfw`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
            if (!isGroupMsg) return zama.reply(self, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            if (!isGroupAdmins) return zama.reply(self, `Perintah ini hanya bisa di gunakan oleh Admin group!`, id)
            if (args.length === 1) return zama.reply(self, `Pilih enable atau disable!`, id)
            if (args[1].toLowerCase() === 'enable') {
                nsfw_.push(chat.id)
                fs.writeFileSync('./lib/database/nsfwz.json', JSON.stringify(nsfw_))
                zama.reply(self, `NSFW berhasil di aktifkan di group ini! kirim perintah *#nsfwMenu* untuk mengetahui menu`, id)
            } else if (args[1].toLowerCase() === 'disable') {
                nsfw_.splice(chat.id, 1)
                fs.writeFileSync('./lib/database/nsfwz.json', JSON.stringify(nsfw_))
                zama.reply(self, `NSFW berhasil di nonaktifkan di group ini!`, id)
            } else {
                zama.reply(self, `Pilih enable atau disable udin!`, id)
            }
            break
        case `${prefix}simi`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
            if (!isGroupMsg) return zama.reply(self, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            if (!isAdmin) return zama.reply(self, `Perintah ini hanya bisa di gunakan oleh admin Zam!`, id) // Hanya Admin yang bisa mengaktifkan
            if (args.length === 1) return zama.reply(self, `Pilih enable atau disable!`, id)
            if (args[1].toLowerCase() === 'enable') {
                simi_.push(chat.id)
                fs.writeFileSync('./lib/database/Simsimi.json', JSON.stringify(simi_))
                zama.reply(self, `Simsimi berhasil di aktifkan di group ini! Kirim perintah *# [teks]*\nContoh : *# halo*`, id)
            } else if (args[1].toLowerCase() === 'disable') {
                simi_.splice(chat.id, 1)
                fs.writeFileSync('./lib/database/Simsimi.json', JSON.stringify(simi_))
                zama.reply(self, `Simsimi berhasil di nonaktifkan di group ini!`, id)
            } else {
                zama.reply(self, `Pilih enable atau disable udin!`, id)
            }
            break

        case `${prefix}left`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
            if (!isGroupMsg) return zama.reply(self, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            if (!isGroupAdmins) return zama.reply(self, `Perintah ini hanya bisa di gunakan oleh Admin group!`, id)
            if (args.length === 1) return zama.reply(self, `Pilih enable atau disable!`, id)
            if (args[1].toLowerCase() === 'enable') {
                left.push(chat.id)
                fs.writeFileSync('./lib/database/left.json', JSON.stringify(left))
                zama.reply(self, `Fitur left berhasil di aktifkan di group ini!`, id)
            } else if (args[1].toLowerCase() === 'disable') {
                left.splice(chat.id, 1)
                fs.writeFileSync('./lib/database/left.json', JSON.stringify(left))
                zama.reply(self, `Fitur left berhasil di nonaktifkan di group ini!`, id)
            } else {
                zama.reply(self, `Pilih enable atau disable udin!`, id)
            }
            break
        case `${prefix}welcome`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
            if (!isGroupMsg) return zama.reply(self, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            if (!isGroupAdmins) return zama.reply(self, `Perintah ini hanya bisa di gunakan oleh Admin group!`, id)
            if (args.length === 1) return zama.reply(self, `Pilih enable atau disable!`, id)
            if (args[1].toLowerCase() === 'enable') {
                welkom.push(chat.id)
                fs.writeFileSync('./lib/database/welcome.json', JSON.stringify(welkom))
                zama.reply(self, `Fitur welcome berhasil di aktifkan di group ini!`, id)
            } else if (args[1].toLowerCase() === 'disable') {
                welkom.splice(chat.id, 1)
                fs.writeFileSync('./lib/database/welcome.json', JSON.stringify(welkom))
                zama.reply(self, `Fitur welcome berhasil di nonaktifkan di group ini!`, id)
            } else {
                zama.reply(self, `Pilih enable atau disable udin!`, id)
            }
            break
        // ANIME //
        case `${prefix}neonime`:
            if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
            if (!isGroupMsg) return zama.reply(self, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            if (isLimit(serial)) return zama.reply(self, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            if (args.length === 1) return zama.reply(self, `Kirim perintah *${prefix}neonime [ Query ]*, Contoh : #neonime danmachi`)
            const nenon = body.slice(9)
            zama.reply(self, mess.wait, id)
            try {
                const response2 = await fetch('https://tobz-api.herokuapp.com/api/neonime?q=' + nenon + '&apikey=' + tobzkey)
                if (!response2.ok) throw new Error(`unexpected response ${response2.statusText}`)
                const jsonserc = await response2.json()
                const { result } = await jsonserc
                let xixixi = `*「 NEONIME 」*\n\n*Hasil Pencarian : ${nenon}*\n`
                for (let i = 0; i < result.length; i++) {
                    xixixi += `\n─────────────────\n\n• *Title* : ${result[i].title}\n• *Deskripsi* : ${result[i].desc}\n• *Link* : ${result[i].link}`
                }
                await zama.sendFileFromUrl(self, result[0].image, 'neon.jpg', xixixi, id)
                await limitAdd(serial)
            } catch (err) {
                    console.log(err)
                    await zama.sendFileFromUrl(self, errorurl2, 'error.png', '💔️ Maaf, Anime tidak ditemukan')
            }
            break
        case `${prefix}otakudesu`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
            if (!isGroupMsg) return zama.reply(self, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            if (isLimit(serial)) return zama.reply(self, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik #limit Untuk Mengecek Kuota Limit Kamu`, id)

            await limitAdd(serial)
            if (args.length === 1) return zama.reply(self, `Kirim perintah *#otakudesu [query]*\nContoh : *#otakudesu darling in the franxx*`, id)
            const animes = await axios.get('https://mhankbarbars.herokuapp.com/api/otakudesu?q=' + body.slice(7) + '&apiKey=' + barbarkey)
            if (animes.data.error) return zama.reply(self, animes.data.error, id)
            const res_animes = `${animes.data.title}\n\n${animes.data.info}\n\n${animes.data.sinopsis}`
            zama.sendFileFromUrl(self, animes.data.thumb, 'otakudesu.jpg', res_animes, id)
            break
        case `${prefix}kusonime`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
            if (!isGroupMsg) return zama.reply(self, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            if (isLimit(serial)) return zama.reply(self, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik #limit Untuk Mengecek Kuota Limit Kamu`, id)

            await limitAdd(serial)
            if (args.length === 1) return zama.reply(self, `Kirim perintah *#kusonime [query]*\nContoh : *#kusonime darling in the franxx*`, id)
            const animeq = await axios.get('https://tobz-api.herokuapp.com/v1/kuso?q=' + body.slice(7)  + '&apikey=' + tobzkey)
            if (animeq.data.error) return zama.reply(self, animeq.data.error, id)
            const res_animeq = `${animeq.data.title}\n\n${animeq.data.info}\n\n${animeq.data.sinopsis}\n\n${animeq.data.link_dl}`
            zama.sendFileFromUrl(self, animeq.data.thumb, 'kusonime.jpg', res_animeq, id)
            break
        case `${prefix}dewabatch`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
            if (!isGroupMsg) return zama.reply(self, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            if (isLimit(serial)) return zama.reply(self, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik #limit Untuk Mengecek Kuota Limit Kamu`, id)

            await limitAdd(serial)
            if (args.length === 1) return zama.reply(self, `Kirim perintah *#dewabatch [query]*\nContoh : *#dewabatch darling in the franxx*`, id)
            const animek = await axios.get('https://tobz-api.herokuapp.com/v1/dewabatch?q=' + body.slice(7)  + '&apikey=' + tobzkey)
            if (animek.data.error) return zama.reply(self, animek.data.error, id)
            const res_animek = `${animek.data.result}\n\n${animek.data.sinopsis}`
            zama.sendFileFromUrl(self, animek.data.thumb, 'dewabatch.jpg', res_animek, id)
            break
        case `${prefix}komiku`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
            if (!isGroupMsg) return zama.reply(self, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            if (isLimit(serial)) return zama.reply(self, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik #limit Untuk Mengecek Kuota Limit Kamu`, id)

            await limitAdd(serial)
            if (args.length === 1) return zama.reply(self, `Kirim perintah *#komiku [query]*\nContoh : *#komiku darling in the franxx*`, id)
            const animep = await axios.get('https://mhankbarbars.herokuapp.com/api/komiku?q=' + body.slice(7) + '&apiKey=' + barbarkey)
            if (animep.data.error) return zama.reply(self, animep.data.error, id)
            const res_animep = `${animep.data.info}\n\n${animep.data.sinopsis}\n\n${animep.data.link_dl}`
            zama.sendFileFromUrl(self, animep.data.thumb, 'komiku.jpg', res_animep, id)
            break
        case `${prefix}pinterest`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
            if (!isGroupMsg) return zama.reply(self, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            if (isLimit(serial)) return zama.reply(self, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik #limit Untuk Mengecek Kuota Limit Kamu`, id)

            await limitAdd(serial)
            if (args.length === 1) return zama.reply(self, `Kirim perintah *#pinterest [query]*\nContoh : *#pinterest Z*`, id)
            const ptrsq = body.slice(11)
            const ptrs = await axios.get('https://api.fdci.se/rep.php?gambar='+ptrsq)
            const b = JSON.parse(JSON.stringify(ptrs.data))
            const ptrs2 =  b[Math.floor(Math.random() * b.length)]
            const image = await bent("buffer")(ptrs2)
            const base64 = `data:image/jpg;base64,${image.toString("base64")}`
            zama.sendImage(self, base64, 'ptrs.jpg', `*Pinterest*\n\n*Hasil Pencarian : ${ptrsq}*`)
            break
        case `${prefix}nhview`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
            if (!isGroupMsg) return zama.reply(self, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            if (args.length === 1) return zama.reply(self, `Kirim perintah *#nhview [212121]*\nContoh : *#nhview 321421*`, id)
            const nhsh = body.slice(11)
            const nhsh2 = await axios.get('https://mnazria.herokuapp.com/api/nhentai?code='+nhsh)
            for (let i = 0; i < nhsh2.length; i++) {
                await zama.sendImage(self, nhsh2[i].data, 'thumbserc.jpg', '', id)
                }
            break
        case `${prefix}loli`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
            if (!isGroupMsg) return zama.reply(self, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            if (isLimit(serial)) return zama.reply(self, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik #limit Untuk Mengecek Kuota Limit Kamu`, id)

            await limitAdd(serial)
            const loli = await axios.get(`https://api.vhtear.com/randomloli&apikey=${vhtearkey}`)
            const loly = loli.data.result
            zama.sendFileFromUrl(self, loly.result, 'loli.jpeg', '*LOLI*', id)
            break
        case `${prefix}goldplay`:
          await zama.reply(self, mess.wait, id) 
          var playbut = body.slice(10)
          const gold = await axios.get(`https://api.zeks.xyz/api/gplaybutton?text=${playbut}&apikey=apivinz`).json()
          zama.sendFileFromUrl(self, gold.result, 'gold.jpg','Nihh', id)
    break
    /*case `${prefix}silverplay`:
          await zama.reply(self, mess.wait, id) 
          var playbut = body.slice(11)
          const silver = await axios.get(`http://api.zeks.xyz/api/splaybutton?text=${playbut}&apikey=apivinz`).json()
          zama.sendFileFromUrl(self, silver.result, 'silver.jpg','Nihh', id)
    break
     case `${prefix}graffity`:
          await zama.reply(self, mess.wait, id) 
          var graffity = body.slice(10)
          const grafiti = await axios.get(`http://api.zeks.xyz/api/grafiti?text=${graffity}&apikey=apivinz`).json()
          zama.sendFileFromUrl(self, grafiti.result, 'grafiti.jpg','Nihh', id)
          break
     case prefix+'leaves':
          await zama.reply(self, mess.wait, id) 
          var leaves1 = body.slice(8)
          const leaves2 = await axios.get(`http://api.zeks.xyz/api/leavest?text=${leaves1}&apikey=apivinz`).json()
          zama.sendFileFromUrl(self, leaves2.result, 'leaves2.jpg','Nihh', id)
          break
        case prefix+'tlight':
          await zama.reply(self, mess.wait, id) 
          var tlight1 = body.slice(8)
          const tlight2 = await axios.get(`http://api.zeks.xyz/api/tlight?text=${tlight1}&apikey=apivinz`).json()
          zama.sendFileFromUrl(self, tlight2.result, 'tlight2.jpg','Nihh', id)
          break*/
        case `${prefix}crismes`:
          await zama.reply(self, mess.wait, id) 
          var crismes1 = body.slice(8)
          const crismes2 = await axios.get(`http://api.zeks.xyz/api/crismes?text=${crismes1}&apikey=apivinz`).json()
          zama.sendFileFromUrl(self, crismes2.result, 'crismes2.jpg','Nihh', id)
          break
         /*case prefix+'goldplay':
          await zama.reply(self, mess.wait, id) 
          var playbut = body.slice(10)
          const gold = await axios.get(`https://api.zeks.xyz/api/gplaybutton?text=${playbut}&apikey=apivinz`).json()
          zama.sendFileFromUrl(self, gold.result, 'gold.jpg','Nihh', id)
    break*/
    case `${prefix}silverplay`:
          await zama.reply(self, mess.wait, id) 
          var playbut = body.slice(11)
          const silver = await axios.get(`http://api.zeks.xyz/api/splaybutton?text=${playbut}&apikey=apivinz`).json()
          zama.sendFileFromUrl(self, silver.result, 'silver.jpg','Nihh', id)
    break
     case `${prefix}graffity`:
          await zama.reply(self, mess.wait, id) 
          var graffity = body.slice(10)
          const grafiti = await axios.get(`http://api.zeks.xyz/api/grafiti?text=${graffity}&apikey=apivinz`).json()
          zama.sendFileFromUrl(self, grafiti.result, 'grafiti.jpg','Nihh', id)
          break
     case `${prefix}leaves`:
          await zama.reply(self, mess.wait, id) 
          var leaves1 = body.slice(8)
          const leaves2 = await axios.get(`http://api.zeks.xyz/api/leavest?text=${leaves1}&apikey=apivinz`).json()
          zama.sendFileFromUrl(self, leaves2.result, 'leaves2.jpg','Nihh', id)
          break
        case `${prefix}tlight`:
          await zama.reply(self, mess.wait, id) 
          var tlight1 = body.slice(8)
          const tlight2 = await axios.get(`http://api.zeks.xyz/api/tlight?text=${tlight1}&apikey=apivinz`).json()
          zama.sendFileFromUrl(self, tlight2.result, 'tlight2.jpg','Nihh', id)
          break
        /*case `${prefix}crismes`:
          await zama.reply(self, mess.wait, id) 
          var crismes1 = body.slice(8)
          const crismes2 = await axios.get(`http://api.zeks.xyz/api/crismes?text=${crismes1}&apikey=apivinz`).json()
          zama.sendFileFromUrl(self, crismes2.result, 'crismes2.jpg','Nihh', id)
          break*/
         case `${prefix}stickerhentai`: //lupa dari siapa
            case `${prefix}shentai`:  
            case `${prefix}stikerhentai`:
            if(isReg(obj)) return
                 zama.reply(self, mess.wait, id)
                 const hentayo = ['http://i4.xxxhentaigallery.com/photos/204/747-part.jpg','http://i1.xxxhentaigallery.com/photos/193/809__8.jpg','http://i2.xxxhentaigallery.com/photos/165/356_Kidmo.jpg','http://i4.xxxhentaigallery.com/photos/192/811___.jpg','http://i2.xxxhentaigallery.com/photos/179/075_.jpg','http://i1.xxxhentaigallery.com/photos/174/070_Zeroshiki.jpg','http://i1.xxxhentaigallery.com/photos/132/678__Captain_.jpg']
                 let hentayok = hentayo[Math.floor(Math.random() * hentayo.length)]
                 zama.sendStickerfromUrl(self, hentayok, '', 'Neh...', id)
                 break
                  /*case `${prefix}phcomment`:

                 const ph = body.slice(10)
                const usernamePh = ph.split('|')[0]
                const commentPh = ph.split('|')[1]
                const ppPhRaw = await zama.getProfilePicFromServer(sender.id)
                if (ppPhRaw === undefined) {
                    var ppPh = errorImg
                } else {
                    var ppPh = ppPhRaw
                }
                const dataPpPh = await bent('buffer')(ppPh)
                const linkPpPh = await uploadImages(dataPpPh, `${sender.id}_ph`)
                await zama.reply(from, ind.wait(), id)
                const preproccessPh = await axios.get(`https://nekobot.xyz/api/imagegen?type=phcomment&image=${linkPpPh}&text=${commentPh}&username=${usernamePh}`)
                await zama.sendFileFromUrl(from, preproccessPh.data.message, 'ph.jpg', '', id)
                console.log('Success creating image!')
            break*/
          case `${prefix}phcomment`: //by: bocchi

                 const ph = body.slice(10)
                const usernamePh = ph.split('|')[0]
                const commentPh = ph.split('|')[1]
                const ppPhRaw = await zama.getProfilePicFromServer(sender.id)
                if (ppPhRaw === undefined) {
                    var ppPh = errorImg
                } else {
                    var ppPh = ppPhRaw
                }
                const dataPpPh = await bent('buffer')(ppPh)
                const linkPpPh = await uploadImages(dataPpPh, `${sender.id}_ph`)
                await zama.reply(from, ind.wait(), id)
                const preproccessPh = await axios.get(`https://nekobot.xyz/api/imagegen?type=phcomment&image=${linkPpPh}&text=${commentPh}&username=${usernamePh}`)
                await zama.sendFileFromUrl(from, preproccessPh.data.message, 'ph.jpg', '', id)
                console.log('Success creating image!')
            break
         case `${prefix}loli2`:
//return rahmat.reply(self, `Fitur Sedang Dalam Perbaikan!`, id)
            if(isReg(obj)) return
            if(cekumur(cekage)) return
                //if (!isVipUser) return zama.reply(self, '*Fitur Ini Khusus VIP!*\n _Daftar VIP Hanya 10k/Bulan_\n\n*Mau Daftar VIP?*\nChat Owner BOT\n_wa.me/6285811955968 ', id)
            //if (!isGroupMsg) return zama.reply(self, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (isLimit(serial)) return zama.reply(self, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis/nJika Ingin Isi Ulang Chat Owner!/nKetik %limit Untuk Mengecek Kuota Limit Kamu`, id)
            const loli2 = fs.readFileSync('./lib/loli.json')
            const loliJson = JSON.parse(loli2)
            const loliIndex = Math.floor(Math.random() * loliJson.length)
            const loliKey = loliJson[loliIndex]
            zama.sendFileFromUrl(self, loliKey.image, 'loli.jpg', loliKey.teks)
            break
        case `${prefix}shota`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
            if (!isGroupMsg) return zama.reply(self, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            if (isLimit(serial)) return zama.reply(self, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik #limit Untuk Mengecek Kuota Limit Kamu`, id)

            await limitAdd(serial)
            const imageToBase64 = require('image-to-base64')
            var shouta = ['shota anime','anime shota'];
            var shotaa = shouta[Math.floor(Math.random() * shouta.length)];
            var urlshot = "https://api.fdci.se/rep.php?gambar=" + shotaa;

            axios.get(urlshot)
            .then((result) => {
            var sht = JSON.parse(JSON.stringify(result.data));
            var shotaak =  sht[Math.floor(Math.random() * sht.length)];
            imageToBase64(shotaak)
            .then(
                (response) => {
            let img = 'data:image/jpeg;base64,'+response
            zama.sendFile(self, img, "shota.jpg", `*SHOTA*`, id)
                    })
                .catch(
                    (error) => {
                        console.log(error);
                    })
            })
            break
        case `${prefix}waifu`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
            if (!isGroupMsg) return zama.reply(self, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            if (isLimit(serial)) return zama.reply(self, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik #limit Untuk Mengecek Kuota Limit Kamu`, id)

            await limitAdd(serial)
            const waifu = await axios.get('https://tobz-api.herokuapp.com/api/waifu?apikey=' + tobzkey)
            zama.sendFileFromUrl(self, waifu.data.image, 'Waifu.jpg', `➸ Name : ${waifu.data.name}\n➸ Description : ${waifu.data.desc}\n\n➸ Source : ${waifu.data.source}`, id)
            break
        case `${prefix}husbu`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
            if (!isGroupMsg) return zama.reply(self, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            if (isLimit(serial)) return zama.reply(self, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik #limit Untuk Mengecek Kuota Limit Kamu`, id)

            await limitAdd(serial)
            const diti = fs.readFileSync('./lib/database/husbu.json')
            const ditiJsin = JSON.parse(diti)
            const rindIndix = Math.floor(Math.random() * ditiJsin.length)
            const rindKiy = ditiJsin[rindIndix]
            zama.sendFileFromUrl(self, rindKiy.image, 'Husbu.jpg', rindKiy.teks, id)
            break
        case `${prefix}randomnekonime`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
            if (!isGroupMsg) return zama.reply(self, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            if (isLimit(serial)) return zama.reply(self, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik #limit Untuk Mengecek Kuota Limit Kamu`, id)

            await limitAdd(serial)
            const nekonime = await axios.get('https://tobz-api.herokuapp.com/api/nekonime?apikey=' + tobzkey)
            const nekon = nekonime.data
            if (nekon.result.endsWith('.png')) {
                var ext = '.png'
            } else {
                var ext = '.jpg'
            }
            zama.sendFileFromUrl(self, nekon.result, `Nekonime${ext}`, 'Nekonime!', id)
            break
        case `${prefix}randomtrapnime`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
            if (!isGroupMsg) return zama.reply(self, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            if (!isNsfw) return zama.reply(self, `command/Perintah NSFW belum di aktifkan di group ini!`, id)
            if (isLimit(serial)) return zama.reply(self, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik #limit Untuk Mengecek Kuota Limit Kamu`, id)

            await limitAdd(serial)
            const trapnime = await axios.get('https://tobz-api.herokuapp.com/api/nsfwtrap?apikey=' + tobzkey)
            const trapn = trapnime.data.result
            if (trapn.result.endsWith('.png')) {
                var ext = '.png'
            } else {
                var ext = '.jpg'
            }
            zama.sendImage(self, trapn.result, `trapnime${ext}`, 'Trapnime!', id)
            break
        case `${prefix}randomhentai`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
            if (!isGroupMsg) return zama.reply(self, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            if (!isNsfw) return zama.reply(self, `command/Perintah NSFW belum di aktifkan di group ini!`, id)
            if (isLimit(serial)) return zama.reply(self, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik #limit Untuk Mengecek Kuota Limit Kamu`, id)

            await limitAdd(serial)
            const hentai = await axios.get('https://tobz-api.herokuapp.com/api/hentai?apikey=' + tobzkey)
            const henta = hentai.data
            if (henta.result.endsWith('.png')) {
                var ext = '.png'
            } else {
                var ext = '.jpg'
            }
            zama.sendImage(self, henta.result, `RandomHentai${ext}`, 'Random Hentai!', id)
            break
        case `${prefix}randomnsfwneko`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
            if (!isGroupMsg) return zama.reply(self, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            if (!isNsfw) return zama.reply(self, `command/Perintah NSFW belum di aktifkan di group ini!`, id)
            if (isLimit(serial)) return zama.reply(self, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik #limit Untuk Mengecek Kuota Limit Kamu`, id)

            await limitAdd(serial)
            const nsfwneko = await axios.get('https://tobz-api.herokuapp.com/api/nsfwneko?apikey=' + tobzkey)
            const nsfwn = nsfwneko.data
            if (nsfwn.result.endsWith('.png')) {
                var ext = '.png'
            } else {
                var ext = '.jpg'
            }
            zama.sendImage(self, nsfwn.result, `NsfwNeko${ext}`, 'NsfwNeko!', id)
            break
        case `${prefix}randomanime`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
            if (!isGroupMsg) return zama.reply(self, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            if (isLimit(serial)) return zama.reply(self, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik #limit Untuk Mengecek Kuota Limit Kamu`, id)

            await limitAdd(serial)
            const ranime = await axios.get('https://tobz-api.herokuapp.com/api/randomanime?apikey=' + tobzkey)
            const ranimen = ranime.data
            if (ranimen.result.endsWith('.png')) {
                var ext = '.png'
            } else {
                var ext = '.jpg'
            }
            zama.sendFileFromUrl(self, ranime.result, `RandomAnime${ext}`, 'Random Anime!', id)
            break
        case `${prefix}randomblowjob`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
            if (!isGroupMsg) return zama.reply(self, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            if (isLimit(serial)) return zama.reply(self, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik #limit Untuk Mengecek Kuota Limit Kamu`, id)
            if (!isNsfw) return zama.reply(self, `command/Perintah NSFW belum di aktifkan di group ini!`, id)
            await limitAdd(serial)
            const sblow = await axios.get('https://tobz-api.herokuapp.com/api/nsfwblowjob?apikey=' + tobzkey)
            const rblow = sblow.data
            zama.sendFileFromUrl(self, rblow.result, `RandoBlow${ext}`, 'Random Blowjob!', id)
            break
        case `${prefix}randomcry`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
            if (!isGroupMsg) return zama.reply(self, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            if (isLimit(serial)) return zama.reply(self, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik #limit Untuk Mengecek Kuota Limit Kamu`, id)

            await limitAdd(serial)
            const shug = await axios.get('https://tobz-api.herokuapp.com/api/cry?apikey=' + tobzkey)
            const rcry = scry.data
            zama.sendFileFromUrl(self, rcry.result, `RandomCry${ext}`, 'Random Cry!', id)
            break
        case `${prefix}randomkiss`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
            if (!isGroupMsg) return zama.reply(self, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            if (isLimit(serial)) return zama.reply(self, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik #limit Untuk Mengecek Kuota Limit Kamu`, id)

            await limitAdd(serial)
            const skiss = await axios.get('https://tobz-api.herokuapp.com/api/kiss?apikey=' + tobzkey)
            const rkiss = skiss.data
            zama.sendFileFromUrl(self, rkiss.result, `RandomKiss${ext}`, 'Random Kiss!', id)
            break
        case `${prefix}subreddit`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
            arg = body.trim().split(' ')
            const sr = arg[1]
            try {
            const response1 = await axios.get('https://meme-api.herokuapp.com/gimme/' + sr + '/');
            const { postLink, title, subreddit, url, nsfw, spoiler } = response1.data
                if (nsfw == true) {
                    if ((isGroupMsg) && (isNsfw)) {
                        await zama.sendFileFromUrl(self, `${url}`, 'Reddit.jpg', `*Title*: ${title}` + '\n\n*Postlink*:' + `${postLink}`)
                    } else if ((isGroupMsg) && (!isNsfw)) {
                        await zama.reply(self, `Nsfw belum diaktifkan di Grup *${name}*`, id)
                    }
                } else {
                    await zama.sendFileFromUrl(self, `${url}`, 'Reddit.jpg', `*Title*: ${title}` + '\n\n*Postlink*:' + `${postLink}`)
                }
            } catch(err) {
                await zama.sendFileFromUrl(self, errorurl, id)
            }
            break
        case `${prefix}nhder`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
            if (!isGroupMsg) return zama.reply(self, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            if (!isNsfw) return zama.reply(self, `command/Perintah NSFW belum di aktifkan di group ini!`, id)
            if (isLimit(serial)) return zama.reply(self, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik #limit Untuk Mengecek Kuota Limit Kamu`, id)

            await limitAdd(serial)
            if (args.length >=2){
                const code = args[1]
                const url = 'https://nhder.herokuapp.com/download/nhentai/'+code+'/zip'
                const short = []
                const shortener = await urlShortener(url)
                url['short'] = shortener
                short.push(url)
                const caption = `*NEKOPOI DOWNLOADER*\n\nLink: ${shortener}`
                zama.sendText(self, caption)
            } else {
                zama.sendText(self, `Maaf tolong masukan code nuclear`)
            }
            break
        case `${prefix}wallanime`:
            if (!isGroupMsg) return zama.reply(self, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            const walnime = ['https://wallpaperaccess.com/full/395986.jpg','https://wallpaperaccess.com/full/21628.jpg','https://wallpaperaccess.com/full/21622.jpg','https://wallpaperaccess.com/full/21612.jpg','https://wallpaperaccess.com/full/21611.png','https://wallpaperaccess.com/full/21597.jpg','https://cdn.nekos.life/wallpaper/QwGLg4oFkfY.png','https://wallpaperaccess.com/full/21591.jpg','https://cdn.nekos.life/wallpaper/bUzSjcYxZxQ.jpg','https://cdn.nekos.life/wallpaper/j49zxzaUcjQ.jpg','https://cdn.nekos.life/wallpaper/YLTH5KuvGX8.png','https://cdn.nekos.life/wallpaper/Xi6Edg133m8.jpg','https://cdn.nekos.life/wallpaper/qvahUaFIgUY.png','https://cdn.nekos.life/wallpaper/leC8q3u8BSk.jpg','https://cdn.nekos.life/wallpaper/tSUw8s04Zy0.jpg','https://cdn.nekos.life/wallpaper/sqsj3sS6EJE.png','https://cdn.nekos.life/wallpaper/HmjdX_s4PU4.png','https://cdn.nekos.life/wallpaper/Oe2lKgLqEXY.jpg','https://cdn.nekos.life/wallpaper/GTwbUYI-xTc.jpg','https://cdn.nekos.life/wallpaper/nn_nA8wTeP0.png','https://cdn.nekos.life/wallpaper/Q63o6v-UUa8.png','https://cdn.nekos.life/wallpaper/ZXLFm05K16Q.jpg','https://cdn.nekos.life/wallpaper/cwl_1tuUPuQ.png','https://cdn.nekos.life/wallpaper/wWhtfdbfAgM.jpg','https://cdn.nekos.life/wallpaper/3pj0Xy84cPg.jpg','https://cdn.nekos.life/wallpaper/sBoo8_j3fkI.jpg','https://cdn.nekos.life/wallpaper/gCUl_TVizsY.png','https://cdn.nekos.life/wallpaper/LmTi1k9REW8.jpg','https://cdn.nekos.life/wallpaper/sbq_4WW2PUM.jpg','https://cdn.nekos.life/wallpaper/QOSUXEbzDQA.png','https://cdn.nekos.life/wallpaper/khaqGIHsiqk.jpg','https://cdn.nekos.life/wallpaper/iFtEXugqQgA.png','https://cdn.nekos.life/wallpaper/deFKIDdRe1I.jpg','https://cdn.nekos.life/wallpaper/OHZVtvDm0gk.jpg','https://cdn.nekos.life/wallpaper/YZYa00Hp2mk.jpg','https://cdn.nekos.life/wallpaper/R8nPIKQKo9g.png','https://cdn.nekos.life/wallpaper/_brn3qpRBEE.jpg','https://cdn.nekos.life/wallpaper/ADTEQdaHhFI.png','https://cdn.nekos.life/wallpaper/MGvWl6om-Fw.jpg','https://cdn.nekos.life/wallpaper/YGmpjZW3AoQ.jpg','https://cdn.nekos.life/wallpaper/hNCgoY-mQPI.jpg','https://cdn.nekos.life/wallpaper/3db40hylKs8.png','https://cdn.nekos.life/wallpaper/iQ2FSo5nCF8.jpg','https://cdn.nekos.life/wallpaper/meaSEfeq9QM.png','https://cdn.nekos.life/wallpaper/CmEmn79xnZU.jpg','https://cdn.nekos.life/wallpaper/MAL18nB-yBI.jpg','https://cdn.nekos.life/wallpaper/FUuBi2xODuI.jpg','https://cdn.nekos.life/wallpaper/ez-vNNuk6Ck.jpg','https://cdn.nekos.life/wallpaper/K4-z0Bc0Vpc.jpg','https://cdn.nekos.life/wallpaper/Y4JMbswrNg8.jpg','https://cdn.nekos.life/wallpaper/ffbPXIxt4-0.png','https://cdn.nekos.life/wallpaper/x63h_W8KFL8.jpg','https://cdn.nekos.life/wallpaper/lktzjDRhWyg.jpg','https://cdn.nekos.life/wallpaper/j7oQtvRZBOI.jpg','https://cdn.nekos.life/wallpaper/MQQEAD7TUpQ.png','https://cdn.nekos.life/wallpaper/lEG1-Eeva6Y.png','https://cdn.nekos.life/wallpaper/Loh5wf0O5Aw.png','https://cdn.nekos.life/wallpaper/yO6ioREenLA.png','https://cdn.nekos.life/wallpaper/4vKWTVgMNDc.jpg','https://cdn.nekos.life/wallpaper/Yk22OErU8eg.png','https://cdn.nekos.life/wallpaper/Y5uf1hsnufE.png','https://cdn.nekos.life/wallpaper/xAmBpMUd2Zw.jpg','https://cdn.nekos.life/wallpaper/f_RWFoWciRE.jpg','https://cdn.nekos.life/wallpaper/Y9qjP2Y__PA.jpg','https://cdn.nekos.life/wallpaper/eqEzgohpPwc.jpg','https://cdn.nekos.life/wallpaper/s1MBos_ZGWo.jpg','https://cdn.nekos.life/wallpaper/PtW0or_Pa9c.png','https://cdn.nekos.life/wallpaper/32EAswpy3M8.png','https://cdn.nekos.life/wallpaper/Z6eJZf5xhcE.png','https://cdn.nekos.life/wallpaper/xdiSF731IFY.jpg','https://cdn.nekos.life/wallpaper/Y9r9trNYadY.png','https://cdn.nekos.life/wallpaper/8bH8CXn-sOg.jpg','https://cdn.nekos.life/wallpaper/a02DmIFzRBE.png','https://cdn.nekos.life/wallpaper/MnrbXcPa7Oo.png','https://cdn.nekos.life/wallpaper/s1Tc9xnugDk.jpg','https://cdn.nekos.life/wallpaper/zRqEx2gnfmg.jpg','https://cdn.nekos.life/wallpaper/PtW0or_Pa9c.png','https://cdn.nekos.life/wallpaper/0ECCRW9soHM.jpg','https://cdn.nekos.life/wallpaper/kAw8QHl_wbM.jpg','https://cdn.nekos.life/wallpaper/ZXcaFmpOlLk.jpg','https://cdn.nekos.life/wallpaper/WVEdi9Ng8UE.png','https://cdn.nekos.life/wallpaper/IRu29rNgcYU.png','https://cdn.nekos.life/wallpaper/LgIJ_1AL3rM.jpg','https://cdn.nekos.life/wallpaper/DVD5_fLJEZA.jpg','https://cdn.nekos.life/wallpaper/siqOQ7k8qqk.jpg','https://cdn.nekos.life/wallpaper/CXNX_15eGEQ.png','https://cdn.nekos.life/wallpaper/s62tGjOTHnk.jpg','https://cdn.nekos.life/wallpaper/tmQ5ce6EfJE.png','https://cdn.nekos.life/wallpaper/Zju7qlBMcQ4.jpg','https://cdn.nekos.life/wallpaper/CPOc_bMAh2Q.png','https://cdn.nekos.life/wallpaper/Ew57S1KtqsY.jpg','https://cdn.nekos.life/wallpaper/hVpFbYJmZZc.jpg','https://cdn.nekos.life/wallpaper/sb9_J28pftY.jpg','https://cdn.nekos.life/wallpaper/JDoIi_IOB04.jpg','https://cdn.nekos.life/wallpaper/rG76AaUZXzk.jpg','https://cdn.nekos.life/wallpaper/9ru2luBo360.png','https://cdn.nekos.life/wallpaper/ghCgiWFxGwY.png','https://cdn.nekos.life/wallpaper/OSR-i-Rh7ZY.png','https://cdn.nekos.life/wallpaper/65VgtPyweCc.jpg','https://cdn.nekos.life/wallpaper/3vn-0FkNSbM.jpg','https://cdn.nekos.life/wallpaper/u02Y0-AJPL0.jpg','https://cdn.nekos.life/wallpaper/_-Z-0fGflRc.jpg','https://cdn.nekos.life/wallpaper/3VjNKqEPp58.jpg','https://cdn.nekos.life/wallpaper/NoG4lKnk6Sc.jpg','https://cdn.nekos.life/wallpaper/xiTxgRMA_IA.jpg','https://cdn.nekos.life/wallpaper/yq1ZswdOGpg.png','https://cdn.nekos.life/wallpaper/4SUxw4M3UMA.png','https://cdn.nekos.life/wallpaper/cUPnQOHNLg0.jpg','https://cdn.nekos.life/wallpaper/zczjuLWRisA.jpg','https://cdn.nekos.life/wallpaper/TcxvU_diaC0.png','https://cdn.nekos.life/wallpaper/7qqWhEF_uoY.jpg','https://cdn.nekos.life/wallpaper/J4t_7DvoUZw.jpg','https://cdn.nekos.life/wallpaper/xQ1Pg5D6J4U.jpg','https://cdn.nekos.life/wallpaper/aIMK5Ir4xho.jpg','https://cdn.nekos.life/wallpaper/6gneEXrNAWU.jpg','https://cdn.nekos.life/wallpaper/PSvNdoISWF8.jpg','https://cdn.nekos.life/wallpaper/SjgF2-iOmV8.jpg','https://cdn.nekos.life/wallpaper/vU54ikOVY98.jpg','https://cdn.nekos.life/wallpaper/QjnfRwkRU-Q.jpg','https://cdn.nekos.life/wallpaper/uSKqzz6ZdXc.png','https://cdn.nekos.life/wallpaper/AMrcxZOnVBE.jpg','https://cdn.nekos.life/wallpaper/N1l8SCMxamE.jpg','https://cdn.nekos.life/wallpaper/n2cBaTo-J50.png','https://cdn.nekos.life/wallpaper/ZXcaFmpOlLk.jpg','https://cdn.nekos.life/wallpaper/7bwxy3elI7o.png','https://cdn.nekos.life/wallpaper/7VW4HwF6LcM.jpg','https://cdn.nekos.life/wallpaper/YtrPAWul1Ug.png','https://cdn.nekos.life/wallpaper/1p4_Mmq95Ro.jpg','https://cdn.nekos.life/wallpaper/EY5qz5iebJw.png','https://cdn.nekos.life/wallpaper/aVDS6iEAIfw.jpg','https://cdn.nekos.life/wallpaper/veg_xpHQfjE.jpg','https://cdn.nekos.life/wallpaper/meaSEfeq9QM.png','https://cdn.nekos.life/wallpaper/Xa_GtsKsy-s.png','https://cdn.nekos.life/wallpaper/6Bx8R6D75eM.png','https://cdn.nekos.life/wallpaper/zXOGXH_b8VY.png','https://cdn.nekos.life/wallpaper/VQcviMxoQ00.png','https://cdn.nekos.life/wallpaper/CJnRl-PKWe8.png','https://cdn.nekos.life/wallpaper/zEWYfFL_Ero.png','https://cdn.nekos.life/wallpaper/_C9Uc5MPaz4.png','https://cdn.nekos.life/wallpaper/zskxNqNXyG0.jpg','https://cdn.nekos.life/wallpaper/g7w14PjzzcQ.jpg','https://cdn.nekos.life/wallpaper/KavYXR_GRB4.jpg','https://cdn.nekos.life/wallpaper/Z_r9WItzJBc.jpg','https://cdn.nekos.life/wallpaper/Qps-0JD6834.jpg','https://cdn.nekos.life/wallpaper/Ri3CiJIJ6M8.png','https://cdn.nekos.life/wallpaper/ArGYIpJwehY.jpg','https://cdn.nekos.life/wallpaper/uqYKeYM5h8w.jpg','https://cdn.nekos.life/wallpaper/h9cahfuKsRg.jpg','https://cdn.nekos.life/wallpaper/iNPWKO8d2a4.jpg','https://cdn.nekos.life/wallpaper/j2KoFVhsNig.jpg','https://cdn.nekos.life/wallpaper/z5Nc-aS6QJ4.jpg','https://cdn.nekos.life/wallpaper/VUFoK8l1qs0.png','https://cdn.nekos.life/wallpaper/rQ8eYh5mXN8.png','https://cdn.nekos.life/wallpaper/D3NxNISDavQ.png','https://cdn.nekos.life/wallpaper/Z_CiozIenrU.jpg','https://cdn.nekos.life/wallpaper/np8rpfZflWE.jpg','https://cdn.nekos.life/wallpaper/ED-fgS09gik.jpg','https://cdn.nekos.life/wallpaper/AB0Cwfs1X2w.jpg','https://cdn.nekos.life/wallpaper/DZBcYfHouiI.jpg','https://cdn.nekos.life/wallpaper/lC7pB-GRAcQ.png','https://cdn.nekos.life/wallpaper/zrI-sBSt2zE.png','https://cdn.nekos.life/wallpaper/_RJhylwaCLk.jpg','https://cdn.nekos.life/wallpaper/6km5m_GGIuw.png','https://cdn.nekos.life/wallpaper/3db40hylKs8.png','https://cdn.nekos.life/wallpaper/oggceF06ONQ.jpg','https://cdn.nekos.life/wallpaper/ELdH2W5pQGo.jpg','https://cdn.nekos.life/wallpaper/Zun_n5pTMRE.png','https://cdn.nekos.life/wallpaper/VqhFKG5U15c.png','https://cdn.nekos.life/wallpaper/NsMoiW8JZ60.jpg','https://cdn.nekos.life/wallpaper/XE4iXbw__Us.png','https://cdn.nekos.life/wallpaper/a9yXhS2zbhU.jpg','https://cdn.nekos.life/wallpaper/jjnd31_3Ic8.jpg','https://cdn.nekos.life/wallpaper/Nxanxa-xO3s.png','https://cdn.nekos.life/wallpaper/dBHlPcbuDc4.jpg','https://cdn.nekos.life/wallpaper/6wUZIavGVQU.jpg','https://cdn.nekos.life/wallpaper/_-Z-0fGflRc.jpg','https://cdn.nekos.life/wallpaper/H9OUpIrF4gU.jpg','https://cdn.nekos.life/wallpaper/xlRdH3fBMz4.jpg','https://cdn.nekos.life/wallpaper/7IzUIeaae9o.jpg','https://cdn.nekos.life/wallpaper/FZCVL6PyWq0.jpg','https://cdn.nekos.life/wallpaper/5dG-HH6d0yw.png','https://cdn.nekos.life/wallpaper/ddxyA37HiwE.png','https://cdn.nekos.life/wallpaper/I0oj_jdCD4k.jpg','https://cdn.nekos.life/wallpaper/ABchTV97_Ts.png','https://cdn.nekos.life/wallpaper/58C37kkq39Y.png','https://cdn.nekos.life/wallpaper/HMS5mK7WSGA.jpg','https://cdn.nekos.life/wallpaper/1O3Yul9ojS8.jpg','https://cdn.nekos.life/wallpaper/hdZI1XsYWYY.jpg','https://cdn.nekos.life/wallpaper/h8pAJJnBXZo.png','https://cdn.nekos.life/wallpaper/apO9K9JIUp8.jpg','https://cdn.nekos.life/wallpaper/p8f8IY_2mwg.jpg','https://cdn.nekos.life/wallpaper/HY1WIB2r_cE.jpg','https://cdn.nekos.life/wallpaper/u02Y0-AJPL0.jpg','https://cdn.nekos.life/wallpaper/jzN74LcnwE8.png','https://cdn.nekos.life/wallpaper/IeAXo5nJhjw.jpg','https://cdn.nekos.life/wallpaper/7lgPyU5fuLY.jpg','https://cdn.nekos.life/wallpaper/f8SkRWzXVxk.png','https://cdn.nekos.life/wallpaper/ZmDTpGGeMR8.jpg','https://cdn.nekos.life/wallpaper/AMrcxZOnVBE.jpg','https://cdn.nekos.life/wallpaper/ZhP-f8Icmjs.jpg','https://cdn.nekos.life/wallpaper/7FyUHX3fE2o.jpg','https://cdn.nekos.life/wallpaper/CZoSLK-5ng8.png','https://cdn.nekos.life/wallpaper/pSNDyxP8l3c.png','https://cdn.nekos.life/wallpaper/AhYGHF6Fpck.jpg','https://cdn.nekos.life/wallpaper/ic6xRRptRes.jpg','https://cdn.nekos.life/wallpaper/89MQq6KaggI.png','https://cdn.nekos.life/wallpaper/y1DlFeHHTEE.png']
            let walnimek = walnime[Math.floor(Math.random() * walnime.length)]
            zama.sendFileFromUrl(self, walnimek, 'Nimek.jpg', '', id)
            break
        case `${prefix}quotesnime`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
            if (!isGroupMsg) return zama.reply(self, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            if (isLimit(serial)) return zama.reply(self, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik #limit Untuk Mengecek Kuota Limit Kamu`, id)

            await limitAdd(serial)
            const skya = await axios.get('https://tobz-api.herokuapp.com/api/quotesnime/random?apikey=' + tobzkey)
            skya_ = skya.data
            zama.reply(self, `➸ *Quotes* : ${skya_.quote}\n➸ *Character* : ${skya_.character}\n➸ *Anime* : ${skya_.anime}`, id)
            break
        //by: github.com/iris
        case prefix+'fox':
            if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
            const fox = await axios.get(`https://some-random-api.ml/img/fox`)
            await zama.sendFileFromUrl(self, fox.data.link, ``, 'Nihh', id)
            break
         case prefix+'nasa':
            if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
            const nasa = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
            console.log(nasa.data)
            await zama.sendFileFromUrl(self, `${nasa.data.url}`, '', `Title: ${nasa.data.title}\n\nData: ${nasa.data.date}\n\nAutor: ${nasa.data.copyright}\n\nMateria: ${nasa.data.explanation}`, id)
            .catch(() => {
                        zama.reply(self, `Title: ${nasa.data.title}\n\nData: ${nasa.data.date}\n\nAutor: ${nasa.data.copyright}\n\nMateria: ${nasa.data.explanation}\n\nURL: ${nasa.data.url}`, id)
                    })
            break
        case prefix+'morte':
        case prefix+'death':
            if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
            if (args.length === 1) return zama.reply(self, 'Cantumkan nama, hanya satu, tanpa nama belakang atau nama lengkap, khusus untuk keselamatan Anda!', id)
            const predea = await axios.get(`https://api.agify.io/?name=${args[1]}`)
            await zama.reply(self, `Orang dengan nama ini  "${predea.data.name}" cenderung meninggal pada usia ${predea.data.age} tahun.`, id)
            break
        case prefix+'gender':
        case prefix+'genero':
            if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
            if (args.length === 1) return zama.reply(self, 'Coloque um nome, apenas um, nada de sobrenome ou nomes inteiros, ainda mais por sua segurança!', id)
            const seanl = await axios.get(`https://api.genderize.io/?name=${args[1]}`)
            const gender = seanl.data.gender.replace('female', 'mulheres').replace('male', 'homens')
            await zama.reply(self, `Name "${seanl.data.name}" lebih digunakan oleh: ${gender}.`, id)
            break
         //buat yg ga work block nya
         case prefix+'blokdia':
            if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
            if (!isOwner) return await zama.reply(self, `Perintah ini hanya bisa digunakan oleh owner bot`, id)
            for (let blost of mentionedJidList) {
                    banned.push(blost)
                    fs.writeFileSync('./lib/database/blokir.json', JSON.stringify(ban)) //buat file lib/database/blokir.json 
                await zama.contactBlock(mentionedJidList)
                }
                await zama.reply(self, `Success blokir target!`, id)
            break
        case prefix+'unblokdia':
            if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
            if (!isOwner) return await zama.reply(self, `Perintah ini hanya bisa digunakan oleh owner bot`, id)
            for (let blost of mentionedJidList) {
                unbanned.push(blost)
                    fs.writeFileSync('./lib/database/unblokir.json', JSON.stringify(ban)) //buat file lib/database/blokir.json 
                await zama.contactUnblock(mentionedJidList)
                }
                await zama.reply(self, `Success unblokir target!`, id)
            break
        case prefix+'buatgroup':
            if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
        if (!isOwner) return zama.reply(self, 'Perintah ini hanya bisa di gunakan oleh Owner Rahmat!', id)
            argz = body.trim().split('|')
            const gcname = argz[1]
            zama.createGroup(gcname, mentionedJidList)
            zama.sendText(self, 'Succes membuat group')
            break
        case `${prefix}meme`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
            if (!isGroupMsg) return zama.reply(self, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            if (isLimit(serial)) return zama.reply(self, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik #limit Untuk Mengecek Kuota Limit Kamu`, id)

            await limitAdd(serial)
            const response = await axios.get('https://meme-api.herokuapp.com/gimme/wholesomeanimemes')
            const { postlink, title, subreddit, url, nsfw, spoiler } = response.data
            zama.sendFileFromUrl(self, `${url}`, 'meme.jpg', `${title}`)
            break
        case `${prefix}nekopoi`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
            if (!isGroupMsg) return zama.reply(self, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            if (!isNsfw) return zama.reply(self, `command/Perintah NSFW belum di aktifkan di group ini!`, id)
            if (args.length === 1) return zama.reply(self, `Kirim perintah *#nekopoi [linkNekopoi]*\nContoh : *#nekopoi https://nekopoi.care/tsunpuri-episode-1-subtitle-indonesia/*`, id)
            try {
            zama.reply(self, mess.wait, id)
            const nekipoi = await axios.get('https://mhankbarbars.herokuapp.com/api/nekopoi?url=' + body.slice(7) + '&apikey=' + vhtearkey)
            const nekop = nekipoi.data.result
            const nekop2 = `*Anime Ditemukan!*\n➸ Judul : ${nekop.judul}\n➸ Dilihat : ${nekop.dilihat}\n➸ Info : ${nekop.info}`
            const image = await bent("buffer")(nekop.thumbnail)
            const base64 = `data:image/jpg;base64,${image.toString("base64")}`
            zama.sendImage(self, base64, judul, nekop2)
            } catch (err) {
             console.error(err.message)
             await zama.sendFileFromUrl(self, errorurl2, 'error.png', '💔️ Maaf, Video tidak ditemukan')
             zama.sendText(ownerNumber, 'Nekopoi Error : ' + err)
           }
            break
        case `${prefix}quoteanime`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
            if (!isGroupMsg) return zama.reply(self, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            if (isLimit(serial)) return zama.reply(self, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik #limit Untuk Mengecek Kuota Limit Kamu`, id)

            await limitAdd(serial)
                        if(args[1]){
                            if(args[1] === 'anime'){
                                const anime = body.slice(13)
                                axios.get('https://animechanapi.xyz/api/quotes?anime='+anime).then(({ data }) => {
                                    let quote = data.data[0].quote
                                    let char = data.data[0].character
                                    let anime = data.data[0].anime
                                    zama.sendText(self, `"${quote}"\n\nCharacter : ${char}\nAnime : ${anime}`)
                                }).catch(err => {
                                    zama.sendText('Quote Char/Anime tidak ditemukan!')
                                })
                            }else{
                                const char = body.slice(12)
                                axios.get('https://animechanapi.xyz/api/quotes?char='+char).then(({ data }) => {
                                    let quote = data.data[0].quote
                                    let char = data.data[0].character
                                    let anime = data.data[0].anime
                                    zama.sendText(self, `"${quote}"\n\nCharacter : ${char}\nAnime : ${anime}`)
                                }).catch(err => {
                                    zama.sendText('Quote Char/Anime tidak ditemukan!')
                                })
                            }
                        }else{
                            axios.get('https://animechanapi.xyz/api/quotes/random').then(({ data }) => {
                                let penyanyi = data.result[0].penyanyi
                                let judul = data.result[0].judul
                                let linkimg = data.result[0].linkImg
                                let lagu = data.result[0].linkMp3
                                let size = data.result[0].filesize
                                let durasi = data.result[0].duration
                                zama.sendText(self, `"${quote}"\n\nCharacter : ${char}\nAnime : ${anime}`)
                            }).catch(err => {
                                console.log(err)
                            })
                        }
            break
        case `${prefix}malanime`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
            if (!isGroupMsg) return zama.reply(self, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            if (isLimit(serial)) return zama.reply(self, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik #limit Untuk Mengecek Kuota Limit Kamu`, id)

            await limitAdd(serial)
            const keyword = message.body.replace('#malanime', '')
            try {
            const data = await fetch(
           `https://api.jikan.moe/v3/search/anime?q=${keyword}`
            )
            const parsed = await data.json()
            if (!parsed) {
              await zama.sendFileFromUrl(self, errorurl2, 'error.png', '💔️ Maaf, Anime tidak ditemukan', id)
              return null
              }
            const { title, synopsis, episodes, url, rated, score, image_url } = parsed.results[0]
            const content = `*Anime Ditemukan!*
✨️ *Title:* ${title}
🎆️ *Episodes:* ${episodes}
💌️ *Rating:* ${rated}
❤️ *Score:* ${score}
💚️ *Synopsis:* ${synopsis}
🌐️ *URL*: ${url}`

            const image = await bent("buffer")(image_url)
            const base64 = `data:image/jpg;base64,${image.toString("base64")}`
            zama.sendImage(self, base64, title, content)
           } catch (err) {
             console.error(err.message)
             await zama.sendFileFromUrl(self, errorurl2, 'error.png', '💔️ Maaf, Anime tidak ditemukan')
           }
          break
        case `${prefix}malcharacter`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
            if (!isGroupMsg) return zama.reply(self, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            if (isLimit(serial)) return zama.reply(self, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik #limit Untuk Mengecek Kuota Limit Kamu`, id)

            await limitAdd(serial)
            const keywords = message.body.replace('#malcharacter', '')
            try {
            const data = await fetch(
           `https://api.jikan.moe/v3/search/character?q=${keywords}`
            )
            const parsed = await data.json()
            if (!parsed) {
              await zama.sendFileFromUrl(self, errorurl2, 'error.png', '💔️ Maaf, Anime tidak ditemukan', id)
              return null
              }
            const { name, alternative_names, url, image_url } = parsed.results[0]
            const contentt = `*Anime Ditemukan!*

✨️ *Name:* ${name}
💌️ *Alternative Names:* ${alternative_names}
🌐️ *URL*: ${url}`

            const image = await bent("buffer")(image_url)
            const base64 = `data:image/jpg;base64,${image.toString("base64")}`
            zama.sendImage(self, base64, name, contentt)
           } catch (err) {
             console.error(err.message)
             await zama.sendFileFromUrl(self, errorurl2, 'error.png', '💔️ Maaf, Anime tidak ditemukan')
           }
          break
        // PRAY //
        case `${prefix}jadwalshalat`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
        case `${prefix}jadwalsholat`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
            if (!isGroupMsg) return zama.reply(self, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            if (isLimit(serial)) return zama.reply(self, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik #limit Untuk Mengecek Kuota Limit Kamu`, id)
            if (args.length === 1) return zama.reply(self, `[❗] Kirim perintah *#jadwalShalat [ Daerah ]*\ncontoh : *#jadwalShalat Tangerang*\nUntuk list daerah kirim perintah *#listDaerah*`)
            const daerah = body.slice(14)
            const jadwalShalat = await axios.get(` `)
            if (jadwalShalat.data.error) return zama.reply(self, jadwalShalat.data.error, id)
            const { Shubuh, Zduhur, Ashr, Magrib, Isya, kota } = await jadwalShalat.data
            arrbulan = ["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"];
            tgl = new Date().getDate()
            bln = new Date().getMonth()
            thn = new Date().getFullYear()
            const resultJadwal = `「 JADWAL SHALAT 」\n\nJadwal shalat di ${kota}, ${tgl}-${arrbulan[bln]}-${thn}\n\nSubuh : ${Shubuh}\nDzuhur : ${Zduhur}\nAshar : ${Ashr}\nMaghrib : ${Magrib}\nIsya : ${Isya}`
            await limitAdd(serial)
            break
        case `${prefix}quran`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
            if (!isGroupMsg) return zama.reply(self, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            if (isLimit(serial)) return zama.reply(self, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik #limit Untuk Mengecek Kuota Limit Kamu`, id)
            if (args.length === 1) return zama.reply(self, `Kirim perintah Surah Quran kamu dengan cara ketik perintah :\n*#quran* [ Urutan Surat ]\nContoh :\n*#quran 1*`, id)
            const qura = `https://api.vhtear.com/quran?no=${args[1]}&apikey=${vhtearkey}`
            const quraan = await axios.get(qura)
            const quraann = quraan.data
            let hasqu = `*「 AL-QURAN 」*\n\n*Surah : ${quraann.result.surah}*\n*Quran* : ${quraann.result.quran}*`
            await zama.reply(self, `${hasqu}`, id).catch((e) => zama.reply(self, `*Terdapat kesalahan saat mencari surat ${args[1]}*`, id))
            await limitAdd(serial)
            break
        case `${prefix}listsurah`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
            if (!isGroupMsg) return zama.reply(self, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            try {
                axios.get('https://raw.githubusercontent.com/tobzZ/scraper-results/main/islam/surah.json')
                .then((response) => {
                    let hehex = '*「 DAFTAR SURAH 」*\n\n___________________________\n'
                    let nmr = 1
                    for (let i = 0; i < response.data.data.length; i++) {
                        hehex += nmr + '. ' +  monospace(response.data.data[i].name.transliteration.id.toLowerCase()) + '\n'
                        nmr++
                            }
                        hehex += '___________________________'
                    zama.reply(self, hehex, id)
                })
            } catch(err) {
                zama.reply(self, err, id)
            }
            break
        case `${prefix}infosurah`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
            if (!isGroupMsg) return zama.reply(self, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            if (isLimit(serial)) return zama.reply(self, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik #limit Untuk Mengecek Kuota Limit Kamu`, id)
            if (args.length == 1) return zama.reply(self, `Kirim perintah *#infosurah [ Nama Surah ]*\nContoh : *#infosurah al-fatihah*`, message.id)
                var responseh = await axios.get('https://raw.githubusercontent.com/tobzZ/scraper-results/main/islam/surah.json')
                var { data } = responseh.data
                var idx = data.findIndex(function(post, index) {
                if((post.name.transliteration.id.toLowerCase() == args[1].toLowerCase())||(post.name.transliteration.en.toLowerCase() == args[1].toLowerCase()))
                    return true;
                });
                try {
                    var pesan = "*「 INFORMASI SURAH 」*\n\n___________________________\n\n"
                    pesan = pesan + "➸ *Nama* : "+ data[idx].name.transliteration.id + "\n" + "➸ *Asma* : " +data[idx].name.short+"\n"+"➸ *Arti* : "+data[idx].name.translation.id+"\n"+"➸ *Jumlah ayat* : "+data[idx].numberOfVerses+"\n"+"➸ *Nomor surah* : "+data[idx].number+"\n"+"Jenis : "+data[idx].revelation.id+"\n"+"➸ *Keterangan* : "+data[idx].tafsir.id
                    pesan += '\n\n___________________________'
                    zama.reply(self, pesan, message.id)
                    limitAdd(serial)
                }catch{
                    zama.reply(self, `Data tidak ditemukan, atau nama surah salah`, id)
                }
            break
        case `${prefix}tafsir`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
            if (!isGroupMsg) return zama.reply(self, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            if (isLimit(serial)) return zama.reply(self, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik #limit Untuk Mengecek Kuota Limit Kamu`, id)
            if (args.length == 1) return zama.reply(self, `Kirim perintah *#tafsir [ Nama Surah ] [ Ayat ]*\nContoh : *#tafsir al-fatihah 2*`, message.id)
                var responsh = await axios.get('https://raw.githubusercontent.com/tobzZ/scraper-results/main/islam/surah.json')
                var {data} = responsh.data
                var idx = data.findIndex(function(post, index) {
                if((post.name.transliteration.id.toLowerCase() == args[1].toLowerCase())||(post.name.transliteration.en.toLowerCase() == args[1].toLowerCase()))
                    return true;
                });
            try{
                nmr = data[idx].number
                if(!isNaN(nmr)) {
                var responsih = await axios.get('https://api.quran.sutanlab.id/surah/'+nmr+"/"+args[2])
                    var {data} = responsih.data
                    pesan = ""
                    pesan = pesan + "*「 TAFSIR 」*\n\nTafsir Q.S. "+data.surah.name.transliteration.id+":"+args[2]+"\n\n"
                    pesan = pesan + data.text.arab + "\n\n"
                    pesan = pesan + "_" + data.translation.id + "_" + "\n\n" +data.tafsir.id.long
                    pesan += '\n\n___________________________'
                    zama.reply(self, pesan, message.id)
                    limitAdd(serial)
                }
            }catch{
                zama.reply(self, `Data tidak ditemukan, mungkin nama surah/ayat salah`, id)
            }
            break
        // MEDIA //
        case `${prefix}tinyurl`:
            if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
            if (!isGroupMsg) return zama.reply(self, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (isLimit(serial)) return zama.reply(self, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            if (args.length === 1) return zama.reply(self, 'Kirim perintah *#shorturl [linkWeb]*\nContoh : *#shorturl https://neonime.vip*', id)
            const shorturl2 = body.slice(9)
            const tiny1 = await axios.get('https://tobz-api.herokuapp.com/api/shorturl?url=' + shorturl2 + '&apikey=' + tobzkey)
            const tiny2 = tiny1.data
            if (tiny2.error) return zama.reply(self, tiny2.error, id)
            const surl3 = `Link : ${shorturl2}\nShort URL : ${tiny2.result}`
            zama.sendText(self, surl3, id)
            await limitAdd(serial)
            break
        case `${prefix}infogempa`:
            if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
            if (!isGroupMsg) return zama.reply(self, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (isLimit(serial)) return zama.reply(self, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            const bmkg = await axios.get('http://tobz-api.herokuapp.com/api/infogempa?apikey=' + tobzkey)
            const { potensi, koordinat, lokasi, kedalaman, magnitude, waktu, map } = bmkg.data
            const hasil = `*${waktu}*\n📍 *Lokasi* : *${lokasi}*\n〽️ *Kedalaman* : *${kedalaman}*\n💢 *Magnitude* : *${magnitude}*\n🔘 *Potensi* : *${potensi}*\n📍 *Koordinat* : *${koordinat}*`
            zama.sendFileFromUrl(self, map, 'shakemap.jpg', hasil, id)
            await limitAdd(serial)
            break
        case `${prefix}ssweb`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
            if (!isGroupMsg) return zama.reply(self, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            if (isLimit(serial)) return zama.reply(self, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik #limit Untuk Mengecek Kuota Limit Kamu`, id)

            await limitAdd(serial)
            if (args.length === 1) return zama.reply(self, `Kirim perintah *#ssweb [linkWeb]*\nContoh : *#ssweb https://neonime.vip*`, id)
            const ssw = await axios.get('https://mhankbarbars.herokuapp.com/api/url2image?url=' + body.slice(7) + '&apiKey=' + barbarkey)
            const ssww = ssw.data
            if (ssww.error) return zama.reply(self, ssww.error, id)
            const ssw2 = `Filesize: ${ssww.filesize}`
            zama.sendFileFromUrl(self, ssww.result, 'ssweb.jpg', ssw2, id)
            break
        /*case `${prefix}shorturl`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
            if (!isGroupMsg) return zama.reply(self, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            if (isLimit(serial)) return zama.reply(self, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik #limit Untuk Mengecek Kuota Limit Kamu`, id)

            await limitAdd(serial)
            if (args.length === 1) return zama.reply(self, `Kirim perintah *#shorturl [linkWeb]*\nContoh : *#shorturl https://neonime.vip*`, id)
            const sorturl = body.slice(10)
            const surl = await axios.get('https://tobz-api.herokuapp.com/api/shorturl?url=' + sorturl)
            const surll = surl.data
            if (surll.error) return zama.reply(self, ssww.error, id)
            const surl2 = `Link : ${sorturl}\nShort URL : ${surll.result}`
            zama.sendText(self, surl2, id)
            break*/
        case `${prefix}cuaca`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
            if (!isGroupMsg) return zama.reply(self, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            if (isLimit(serial)) return zama.reply(self, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik #limit Untuk Mengecek Kuota Limit Kamu`, id)

            await limitAdd(serial)
            if (args.length === 1) return zama.reply(self, `Kirim perintah *#cuaca [tempat]*\nContoh : *#cuaca tangerang`, id)
            const tempat = body.slice(7)
            const weather = await axios.get('https://mhankbarbars.herokuapp.com/api/cuaca?q='+ tempat +'&apiKey='+ barbarkey)
            const weatherr = weather.data
            if (weatherr.error) {
                zama.reply(self, weatherr.error, id)
            } else {
                zama.reply(self, `➸ Tempat : ${weatherr.result.tempat}\n\n➸ Angin : ${weatherr.result.angin}\n➸ Cuaca : ${weatherr.result.cuaca}\n➸ Deskripsi : ${weatherr.result.desk}\n➸ Kelembapan : ${weatherr.result.kelembapan}\n➸ Suhu : ${weatherr.result.suhu}\n➸ Udara : ${weatherr.result.udara}`, id)
            }
            break
        case `${prefix}covid`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
            if (!isGroupMsg) return zama.reply(self, `Perintah ini hanya bisa di gunakan dalam group`, id)
            if (isLimit(serial)) return zama.reply(self, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik #limit Untuk Mengecek Kuota Limit Kamu`, id)

            await limitAdd(serial)
            arg = body.trim().split(' ')
            console.log(...arg[1])
            var slicedArgs = Array.prototype.slice.call(arg, 1);
            console.log(slicedArgs)
            const country = await slicedArgs.join(' ')
            console.log(country)
            const response2 = await axios.get('https://coronavirus-19-api.herokuapp.com/countries/' + country + '/')
            const { cases, todayCases, deaths, todayDeaths, active } = response2.data
                await zama.sendText(self, '🌎️ Covid Info - ' + country + ' 🌍️\n\n✨️ Total Cases: ' + `${cases}` + '\n📆️ Today\'s Cases: ' + `${todayCases}` + '\n☣️ Total Deaths: ' + `${deaths}` + '\n☢️ Today\'s Deaths: ' + `${todayDeaths}` + '\n⛩️ Active Cases: ' + `${active}` + '.')
            break
        case `${prefix}spamcall`:
            if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
            if (!isGroupMsg) return zama.reply(self, 'Perintah ini hanya bisa di gunakan dalam group', id)
            if (!isOwner, !isAdmin) return zama.reply(self, 'Perintah ini hanya untuk Owner & Admin bot', id)
            argz = body.trim().split(' ')
            console.log(...argz[1])
            var slicedArgs = Array.prototype.slice.call(arg, 1);
            console.log(slicedArgs)
            const spam = await slicedArgs.join(' ')
            console.log(spam)
            const call2 = await axios.get('https://tobz-api.herokuapp.com/api/spamcall?no=' + spam + '&apikey=' + tobzkey)
            const { logs } = call2.data
                await zama.sendText(self, `Logs : ${logs}` + '.')
            break
        case `${prefix}ytmp4`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
            if (!isGroupMsg) return zama.reply(self, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            if (isLimit(serial)) return zama.reply(self, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik #limit Untuk Mengecek Kuota Limit Kamu`, id)
            if (args.length === 1) return zama.reply(self, `Kirim perintah *#ytmp4 [ Link Yt ]*, untuk contoh silahkan kirim perintah *#readme*`)
            let isLin = args[1].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
            if (!isLin) return zama.reply(self, mess.error.Iv, id)
            try {
                zama.reply(self, mess.wait, id)
                const ytvh = await fetch(`http://api.vhtear.com/ytdl?link=${args[1]}&apikey=${vhtearkey}`)
                if (!ytvh.ok) throw new Error(`Error YTMP4 : ${ytvh.statusText}`)
                const ytvh2 = await ytvh.json()
                 if (ytvh2.status == false) {
                    zama.reply(self, `*Maaf Terdapat kesalahan saat mengambil data, mohon pilih media lain...*`, id)
                } else {
                    const { title, UrlVideo, imgUrl, size } = await ytvh2.result
                    if (Number(ytvh2.result.size.split(' MB')[0]) > 30.00) return zama.sendFileFromUrl(self, UrlVideo, `${title}.mp4`, `*「 YOUTUBE MP4 」*\n\n• *Judul* : ${title}\n• *Filesize* : ${size}\n\n__Maaf, Durasi video melebihi 30 MB. Silahkan download video melalui link dibawah_.\n${UrlVideo}`, id)
                    zama.sendFileFromUrl(self, imgUrl, 'thumb.jpg', `*「 YOUTUBE MP4 」*\n\n• *Judul* : ${title}\n• *Filesize* : ${size}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`, id)
                    /await zama.sendFileFromUrl(self, UrlVideo, `${title}.mp4`, '', id).catch(() => zama.reply(self, mess.error.Yt4, id))
                    await limitAdd(serial)
                }
            } catch (err) {
                zama.sendText(ownerNumber, 'Error ytmp4 : '+ err)
                zama.reply(self, 'Jangan download video yang sama dengan sebelumnya!', id)
                console.log(err)
            }
            break
        case `${prefix}play`:
            if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
            //if (!isAdmin) return zama.reply(self, `Perintah ini hanya bisa di gunakan oleh Admin Elaina!`, id)
            if (!isGroupMsg) return zama.reply(self, 'Perintah ini hanya bisa di gunakan dalam group', id)
            if (isLimit(serial)) return zama.reply(self, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik #ceklimit Untuk Mengecek Kuota Limit Kamu`, id)
            if (args.length == 1) return zama.reply(self, `Untuk mencari lagu dari youtube\n\nPenggunaan: #play judul lagu`, id)
            try {
                zama.reply(self, mess.wait, id)
                const serplay = body.slice(6)
                const webplay = await fetch(`https://api.vhtear.com/ytmp3?query=${serplay}&apikey=${vhtearkey}`)
                if (!webplay.ok) throw new Error(`Error Play : ${webplay.statusText}`)
                const webplay2 = await webplay.json()
                 if (webplay2.status == false) {
                    zama.reply(self, `*Maaf Terdapat kesalahan saat mengambil data, mohon pilih media lain...*`, id)
                } else {
                    if (Number(webplay2.result.size.split(' MB')[0]) >= 10.00) return zama.reply(self, 'Maaf durasi music sudah melebihi batas maksimal 10 MB!', id)
                    const { image, mp3, size, ext, title, duration } = await webplay2.result
                    const captplay = `*「 PLAY 」*\n\n• *Judul* : ${title}\n• *Durasi* : ${duration}\n• *Filesize* : ${size}\n• *Exp* : ${ext}\n\n_*Music Sedang Dikirim*_`
                    zama.sendFileFromUrl(self, image, `thumb.jpg`, captplay, id)
                    await zama.sendFileFromUrl(self, mp3, `${title}.mp3`, '', id).catch(() => zama.reply(self, mess.error.Yt4, id))
                    await limitAdd(serial)
                }
            } catch (err) {
                zama.sendText(ownerNumber, 'Error Play : '+ err)
                zama.reply(self, 'Jangan meminta lagu yang sama dengan sebelumnya!', id)
            }
            break
        case `${prefix}ytmp3`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
            if (!isGroupMsg) return zama.reply(self, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            if (isLimit(serial)) return zama.reply(self, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik #limit Untuk Mengecek Kuota Limit Kamu`, id)
            if (args.length === 1) return zama.reply(self, `Kirim perintah *#ytmp3 [ Link Yt ]*, untuk contoh silahkan kirim perintah *#readme*`, id)
            let isLinks = args[1].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
            if (!isLinks) return zama.reply(self, mess.error.Iv, id)
            try {
                zama.reply(self, mess.wait, id)
                const vhtearyt3 = await fetch(`https://api.vhtear.com/ytdl?link=${args[1]}&apikey=${vhtearkey}`)
                if (!vhtearyt3.ok) throw new Error(`Error YTMP3 : ${vhtearyt3.statusText}`)
                const vhtearyt33 = await vhtearyt3.json()
                 if (vhtearyt33.status == false) {
                    zama.reply(self, `*Maaf Terdapat kesalahan saat mengambil data, mohon pilih media lain...*`, id)
                } else {
                    const { title, ext, size, UrlMp3, status, imgUrl } = await vhtearyt33.result
                    console.log(`VhTear Giliran ${ext}\n${size}\n${status}`)
                    if(Number(vhtearyt33.result.size.split(' MB')[0]) >= 25.00) return zama.sendFileFromUrl(self, imgUrl, `thumb.jpg`, `*「 YOUTUBE MP3 」*\n\n• *Judul* : ${title}\n• *Filesize* : ${size}\n\n_Maaf, Durasi audio melebihi 25 MB. Silahkan download audio melalui link dibawah_.\n${UrlMp3}`, id)
                    const captions = `*「 YOUTUBE MP3 」*\n\n• *Judul* : ${title}\n• *Filesize* : ${size}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
                    zama.sendFileFromUrl(self, imgUrl, `thumb.jpg`, captions, id)
                    //await zama.sendFile(self, UrlMp3, `${title}.mp3`, '`, id)
                    await zama.sendFileFromUrl(self, UrlMp3, `${title}.mp3`, '', id).catch(() => zama.reply(self, mess.error.Yt4, id))
                    await limitAdd(serial)
                }
            } catch (err) {
                zama.sendText(ownerNumber, 'Error ytmp3 : '+ err)
                zama.reply(self, 'Jangan download audio yang sama dengan sebelumnya!', id)
            }
            break
        case `${prefix}google`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
            if (!isGroupMsg) return zama.reply(self, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            if (isLimit(serial)) return zama.reply(self, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik #limit Untuk Mengecek Kuota Limit Kamu`, id)

            await limitAdd(serial)
            zama.reply(self, mess.wait, id)
            const googleQuery = body.slice(8)
            if(googleQuery == undefined || googleQuery == ' ') return zama.reply(self, `*Hasil Pencarian : ${googleQuery}* tidak ditemukan`, id)
            google({ 'query': googleQuery }).then(results => {
            let vars = `_*Hasil Pencarian : ${googleQuery}*_\n`
            for (let i = 0; i < results.length; i++) {
                vars +=  `\n═════════════════\n\n*Judul* : ${results[i].title}\n\n*Deskripsi* : ${results[i].snippet}\n\n*Link* : ${results[i].link}\n\n`
            }
                zama.reply(self, vars, id);
            }).catch(e => {
                console.log(e)
                zama.sendText(ownerNumber, 'Google Error : ' + e);
            })
            break
        case `${prefix}translate`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
            if (!isGroupMsg) return zama.reply(self, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            if (isLimit(serial)) return zama.reply(self, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik #limit Untuk Mengecek Kuota Limit Kamu`, id)

            await limitAdd(serial)
            if(args[1] == undefined || args[2] == undefined) return
            if(args.length >= 2){
                var codelang = args[1]
                var text = body.slice(11+codelang.length);
                translatte(text, {to: codelang}).then(res => {
                    zama.sendText(self,res.text);
                    limitAdd(serial)
                }).catch(err => {
                     zama.sendText(self,`[ERROR] Teks tidak ada, atau kode bahasa ${codelang} tidak support\n~> *#bahasa* untuk melihat list kode bahasa`);
                });
            }
            break
        case `${prefix}nhentai`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id) // SEARCH NHENTAI
            if (!isprem) return zama.reply(self, `Fitur *Premium* Belum diaktifkan`, id)
            case `${prefix}nhentai`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
        case `${prefix}nh`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
            //if (!isGroupMsg) return zama.reply(self, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            //if (!isNsfw) return zama.reply(self, `command/Perintah NSFW belum di aktifkan di group ini!`, id)
            if (args.length === 2) {
                const nuklir = body.split(' ')[1]
                zama.reply(self, mess.wait, id)
                const cek = await nhentai.exists(nuklir)
                if (cek === true)  {
                    try {
                        const api = new API()
                        const pic = await api.getBook(nuklir).then(book => {
                            return api.getImageURL(book.cover)
                        })
                        const dojin = await nhentai.getDoujin(nuklir)
                        const { title, details, link } = dojin
                        const { parodies, tags, artists, groups, languages, categories } = await details
                        var teks = `*Title* : ${title}\n\n*Parodies* : ${parodies}\n\n*Tags* : ${tags.join(', ')}\n\n*Artists* : ${artists.join(', ')}\n\n*Groups* : ${groups.join(', ')}\n\n*Languages* : ${languages.join(', ')}\n\n*Categories* : ${categories}\n\n*Link* : ${link}`
                        exec('nhentai --id=' + nuklir + ` -P mantap.pdf -o ./hentong/${nuklir}.pdf --format `+ `${nuklir}.pdf`, (error, stdout, stderr) => {
                            zama.sendFileFromUrl(self, pic, 'hentod.jpg', teks, id).then(() =>
                            zama.sendFile(self, `./hentong/${nuklir}.pdf/${nuklir}.pdf.pdf`, `${title}.pdf`, '', id)).catch(() =>
                            zama.sendFile(self, `./hentong/${nuklir}.pdf/${nuklir}.pdf.pdf`, `${title}.pdf`, '', id))
                            if (error) {
                                console.log('error : '+ error.message)
                                return
                            }
                            if (stderr) {
                                console.log('stderr : '+ stderr)
                                return
                            }
                            console.log('stdout : '+ stdout)
                            })
                    } catch (err) {
                        zama.reply(self, `[❗] Terjadi kesalahan, mungkin kode nuklir salah`, id)
                    }
                } else {
                    zama.reply(self, `[❗] Kode nuklir Salah!`)
                }
            } else {
                zama.reply(self, `[ WRONG ] Kirim perintah *@nhentai [kode]* untuk contoh kirim perintah *@readme*`)
            }
            break
        case `${prefix}getnhentai`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id) // DOWNLOADER NHENTAI PDF FROM #NHENTAI
            if (!isprem) return zama.reply(self, `Fitur *Premium* Belum diaktifkan`, id)
            if (!isGroupMsg) return zama.reply(self, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            zama.reply(self, `PREMIUM COMMAND, HUBUNGI : wa.me/6281311850715`, id)
          break
        case `${prefix}xvideos`:
            if (!isGroupMsg) return tobz.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            tobz.reply(from, 'PREMIUM COMMAND, HUBUNGI : wa.me/6281311850715', id)
        case `${prefix}getxvideos`:
            if (!isGroupMsg) return tobz.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            tobz.reply(from, 'PREMIUM COMMAND, HUBUNGI : wa.me/6281311850715', id)
        case `${prefix}video`:
            if (!isGroupMsg) return tobz.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            tobz.reply(from, 'PREMIUM COMMAND, HUBUNGI : wa.me/6281311850715', id)
        case `${prefix}getvideo`:
            if (!isGroupMsg) return tobz.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            tobz.reply(from, 'PREMIUM COMMAND, HUBUNGI : wa.me/6281311850715', id)
        case `${prefix}music`:
            if (!isGroupMsg) return tobz.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            tobz.reply(from, 'PREMIUM COMMAND, HUBUNGI : wa.me/6281311850715', id)
        case `${prefix}getmusic`:
            if (!isGroupMsg) return tobz.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            tobz.reply(from, 'PREMIUM COMMAND, HUBUNGI : wa.me/6281311850715', id)
        case `${prefix}youtubesearch`:
            if (!isGroupMsg) return tobz.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            tobz.reply(from, 'PREMIUM COMMAND, HUBUNGI : wa.me/6281311850715', id)
        case `${prefix}shopee`:
            if (!isGroupMsg) return tobz.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            tobz.reply(from, 'PREMIUM COMMAND, HUBUNGI : wa.me/6281311850715', id)
        case `${prefix}playstore`:
            if (!isGroupMsg) return tobz.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            tobz.reply(from, 'PREMIUM COMMAND, HUBUNGI : wa.me/6281311850715', id)
        case `${prefix}animesearch`:
            if (!isGroupMsg) return tobz.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            tobz.reply(from, 'PREMIUM COMMAND, HUBUNGI : wa.me/6281311850715', id)
        case `${prefix}xnxx`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
            if (!isGroupMsg) return zama.reply(self, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            if (!isNsfw) return zama.reply(self, `command/Perintah NSFW belum di aktifkan di group ini!`, id)
            if (isLimit(serial)) return zama.reply(self, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik #limit Untuk Mengecek Kuota Limit Kamu`, id)

            await limitAdd(serial)
            if (args.length === 1) return zama.reply(self, `Kirim perintah *#xnxx [linkXnxx]*, untuk contoh silahkan kirim perintah *#readme*`)
            if (!args[1].match(isUrl) && !args[1].includes('xnxx.com')) return zama.reply(self, mess.error.Iv, id)
            try {
                zama.reply(self, mess.wait, id)
                const resq = await axios.get('https://mhankbarbars.herokuapp.com/api/xnxx?url='+ args[1] +'&apiKey='+ barbarkey)
                const resp = resq.data
                 if (resp.error) {
                    zama.reply(self, ytvv.error, id)
                } else {
                    if (Number(resp.result.size.split(' MB')[0]) > 20.00) return zama.reply(self, `Maaf durasi video sudah melebihi batas maksimal 20 menit!`, id)
                    zama.sendFileFromUrl(self, resp.result.thumb, 'thumb.jpg', `➸ *Judul* : ${resp.result.judul}\n➸ *Deskripsi* : ${resp.result.desc}\n➸ *Filesize* : ${resp.result.size}\n\nSilahkan tunggu sebentar proses pengiriman file membutuhkan waktu beberapa menit.`, id)
                    await zama.sendFileFromUrl(self, resp.result.vid, `${resp.result.title}.mp4`, '', id)}
            } catch (err) {
                console.log(err)
                await zama.sendFileFromUrl(self, errorurl2, 'error.png', '💔️ Maaf, Video tidak ditemukan')
                zama.sendText(ownerNumber, 'Xnxx Error : ' + err)
            }
            break
        case `${prefix}ramalpasangan`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
            if (!isGroupMsg) return zama.reply(self, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            if (isLimit(serial)) return zama.reply(self, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik #limit Untuk Mengecek Kuota Limit Kamu`, id)

            await limitAdd(serial)
            if (args.length === 1) return zama.reply(self, `Kirim perintah *#ramalpasangan [kamu|pasangan]*\nContoh : *#ramalpasangan zama|Z*`, id)
            arg = body.trim().split('|')
            if (arg.length >= 2) {
            zama.reply(self, mess.wait, id)
            const kamu = arg[0]
            const pacar = arg[1]
            const rpmn = rate[Math.floor(Math.random() * (rate.length))]
            const rpmn2 = rate[Math.floor(Math.random() * (rate.length))]
            const rpmn3 = rate[Math.floor(Math.random() * (rate.length))]
            const rpmn4 = rate[Math.floor(Math.random() * (rate.length))]
            const rpmn5 = rate[Math.floor(Math.random() * (rate.length))]
            const rpmn6 = rate[Math.floor(Math.random() * (rate.length))]
            const rjh2 = `*Hasil Pengamatan!*\nPasangan dengan nama ${kamu} dan ${pacar}\n\n➸ Cinta : ${rpmn}\n➸ Jodoh : ${rpmn2}\n➸ Kemiripan : ${rpmn3}\n➸ Kesukaan : ${rpmn4}\n➸ Kesamaan : ${rpmn5}\n➸ Kebucinan ${rpmn6}`
            zama.reply(self, rjh2, id)
            } else {
            await zama.reply(self, `Wrong Format!`, id)
            }
            break
        case `${prefix}artinama`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
            if (!isGroupMsg) return zama.reply(self, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            if (isLimit(serial)) return zama.reply(self, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik #limit Untuk Mengecek Kuota Limit Kamu`, id)

            await limitAdd(serial)
            if (args.length === 1) return zama.reply(self, `Kirim perintah *#artinama [query]*\nContoh : *#artinama zama*`, id)
            try {
            const resp = await axios.get('https://api.vhtear.com/artinama?nama=' + body.slice(9) + '&apikey=' + vhtearkey)
            if (resp.data.error) return zama.reply(self, resp.data.error, id)
            const anm2 = `➸ Artinama : ${resp.data.result.hasil}`
            zama.reply(self, anm2, id)
            } catch (err) {
                console.error(err.message)
                await zama.sendFileFromUrl(self, errorurl2, 'error.png', '💔️ Maaf, User tidak ditemukan')
                zama.sendText(ownerNumber, 'Artinama Error : ' + err)
           }
            break
        case `${prefix}zodiak`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
            if (!isGroupMsg) return zama.reply(self, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            if (isLimit(serial)) return zama.reply(self, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik #limit Untuk Mengecek Kuota Limit Kamu`, id)

            await limitAdd(serial)
            if (args.length === 1) return zama.reply(self, `Kirim perintah *#zodiak [zodiak kamu]*\nContoh : *#zodiak scorpio*`, id)
            try {
            const resp = await axios.get('https://api.vhtear.com/zodiak?query=' + body.slice(8) + '&apikey=' + vhtearkey)
            if (resp.data.error) return zama.reply(self, resp.data.error, id)
            const anm2 = `➸ Zodiak : ${resp.data.result.zodiak}\n➸ Ramalan : ${resp.data.result.ramalan}\n➸ Nomor Keberuntungan : ${resp.data.result.nomorKeberuntungan}\n➸ Motivasi : ${resp.data.result.motivasi}\n➸ Inspirasi : ${resp.data.result.inspirasi}`
            zama.reply(self, anm2, id)
            } catch (err) {
                console.error(err.message)
                await zama.sendFileFromUrl(self, errorurl2, 'error.png', '💔️ Maaf, Zodiak tidak ditemukan')
                zama.sendText(ownerNumber, 'Zodiak Error : ' + err)
           }
           break
        case `${prefix}caklontong`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
            if (!isGroupMsg) return zama.reply(self, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            if (isLimit(serial)) return zama.reply(self, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik #limit Untuk Mengecek Kuota Limit Kamu`, id)

            await limitAdd(serial)
            try {
            const resp = await axios.get('https://api.vhtear.com/funkuis&apikey=' + vhtearkey)
            if (resp.data.error) return zama.reply(self, resp.data.error, id)
            const anm2 = `➸ Soal : ${resp.data.result.soal}\n➸ Deskripsi : ${resp.data.result.desk}\n➸ Poin : ${resp.data.result.poin}`
            const jwban = `➸ Jawaban : ${resp.data.result.jawaban}`
            zama.reply(self, anm2, id)
            zama.sendText(self, `30 Detik Lagi...`, id)
            await sleep(10000)
            zama.sendText(self, `20 Detik Lagi...`, id)
            await sleep(10000)
            zama.sendText(self, `10 Detik Lagi...`, id)
            await sleep(10000)
            zama.reply(self, jwban, id)
            } catch (err) {
                console.error(err.message)
                await zama.sendFileFromUrl(self, errorurl2, 'error.png', '💔️ Maaf, Soal Quiz tidak ditemukan')
                zama.sendText(ownerNumber, 'Zodiak Error : ' + err)
           }
           break
         case `${prefix}tebakgambar`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
            if (!isGroupMsg) return zama.reply(self, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            if (isLimit(serial)) return zama.reply(self, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik #limit Untuk Mengecek Kuota Limit Kamu`, id)

            await limitAdd(serial)
            try {
            const resp = await axios.get('https://api.vhtear.com/tebakgambar&apikey=' + vhtearkey)
            if (resp.data.error) return zama.reply(self, resp.data.error, id)
            const jwban = `➸ Jawaban : ${resp.data.result.jawaban}`
            zama.sendFileFromUrl(self, resp.data.result.soalImg, 'tebakgambar.jpg', '_Silahkan Jawab Maksud Dari Gambar Ini_', id)
            zama.sendText(self, `30 Detik Lagi...`, id)
            await sleep(10000)
            zama.sendText(self, `20 Detik Lagi...`, id)
            await sleep(10000)
            zama.sendText(self, `10 Detik Lagi...`, id)
            await sleep(10000)
            zama.reply(self, jwban, id)
            } catch (err) {
                console.error(err.message)
                await zama.sendFileFromUrl(self, errorurl2, 'error.png', '💔️ Maaf, Soal Quiz tidak ditemukan')
                zama.sendText(ownerNumber, 'Tebak Gambar Error : ' + err)
           }
           break
         case `${prefix}family100`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
            if (!isGroupMsg) return zama.reply(self, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            if (isLimit(serial)) return zama.reply(self, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik #limit Untuk Mengecek Kuota Limit Kamu`, id)

            await limitAdd(serial)
            try {
            const resp = await axios.get('https://api.vhtear.com/family100&apikey=' + vhtearkey)
            if (resp.data.error) return zama.reply(self, resp.data.error, id)
            const anm2 = `➸ Soal : ${resp.data.result.soal}\n_Silahkan DiJawab_`
            const jwban = `➸ Jawaban : ${resp.data.result.jawaban}`
            zama.reply(self, anm2, id)
            zama.sendText(self, `30 Detik Lagi...`, id)
            await sleep(10000)
            zama.sendText(self, `20 Detik Lagi...`, id)
            await sleep(10000)
            zama.sendText(self, `10 Detik Lagi...`, id)
            await sleep(10000)
            zama.reply(self, jwban, id)
            } catch (err) {
                console.error(err.message)
                await zama.sendFileFromUrl(self, errorurl2, 'error.png', '💔️ Maaf, Soal Quiz tidak ditemukan')
                zama.sendText(ownerNumber, 'Family100 Error : ' + err)
           }
           break
        case `${prefix}heroml`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
            if (!isGroupMsg) return zama.reply(self, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            if (isLimit(serial)) return zama.reply(self, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik #limit Untuk Mengecek Kuota Limit Kamu`, id)

            await limitAdd(serial)
            if (args.length === 1) return zama.reply(self, `Kirim perintah *#heroml [nama hero]*\nContoh : *#heroml akai*`, id)
            try {
            const resp = await axios.get('https://api.vhtear.com/herodetail?query=' + body.slice(8) + '&apikey=' + vhtearkey)
            if (resp.data.error) return zama.reply(self, resp.data.error, id)
            const anm2 = `➸ Title : ${resp.data.result.title}\n➸ Quotes : ${resp.data.result.quotes}\n➸ Info : ${resp.data.result.info}\n➸ Atribut : ${resp.data.result.attributes}`
            zama.sendFileFromUrl(self, resp.data.result.pictHero, 'hero.jpg', anm2, id)
            } catch (err) {
                console.error(err.message)
                await zama.sendFileFromUrl(self, errorurl2, 'error.png', '💔️ Maaf, Hero tidak ditemukan')
                zama.sendText(ownerNumber, 'Heroml Error : ' + err)
           }
            break
        case `${prefix}nomorhoki`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
            if (!isGroupMsg) return zama.reply(self, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            if (isLimit(serial)) return zama.reply(self, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik #limit Untuk Mengecek Kuota Limit Kamu`, id)

            await limitAdd(serial)
            if (args.length === 1) return zama.reply(self, `Kirim perintah *#nomorhoki [no hp kamu]*\nContoh : *#nomorhoki 0895384009405*`, id)
            try {
            const resp = await axios.get('https://api.vhtear.com/nomerhoki?no=' + body.slice(11) + '&apikey=' + vhtearkey)
            if (resp.data.error) return zama.reply(self, resp.data.error, id)
            const anm2 = `➸ Hasil :\n ${resp.data.result.hasil}`
            zama.reply(self, anm2, id)
            } catch (err) {
                console.error(err.message)
                await zama.sendFileFromUrl(self, errorurl2, 'error.png', '💔️ Maaf, Nomor Hoki tidak ditemukan')
                zama.sendText(ownerNumber, 'Nomorhoki Error : ' + err)
           }
            break
        case `${prefix}artimimpi`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
            if (!isGroupMsg) return zama.reply(self, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            if (isLimit(serial)) return zama.reply(self, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik #limit Untuk Mengecek Kuota Limit Kamu`, id)

            await limitAdd(serial)
            if (args.length === 1) return zama.reply(self, `Kirim perintah *#artimimpi [mimpi]*\nContoh : *#artimimpi ular*`, id)
            try {
            const resp = await axios.get('https://api.vhtear.com/artimimpi?query=' + body.slice(10) + '&apikey=' + vhtearkey)
            if (resp.data.error) return zama.reply(self, resp.data.error, id)
            const anm2 = `➸ Artimimpi : ${resp.data.result.hasil}`
            zama.reply(self, anm2, id)
            } catch (err) {
                console.error(err.message)
                await zama.sendFileFromUrl(self, errorurl2, 'error.png', '💔️ Maaf, Mimpi tidak ditemukan')
                zama.sendText(ownerNumber, 'Artimimpi Error : ' + err)
           }
            break
         case `${prefix}fb`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
            if (!isGroupMsg) return zama.reply(self, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            if (isLimit(serial)) return zama.reply(self, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik #limit Untuk Mengecek Kuota Limit Kamu`, id)

            if (args.length === 1) return zama.reply(self, `Kirim perintah *#fb [ Link Fb ]*\nContoh : *#fb https://www.facebook.com/24609282673/posts/10158628585367674/*`, id)
            try {
            zama.reply(self, mess.wait, id)
            const resp = await axios.get('https://api.vhtear.com/fbdl?link='+ body.slice(4) +'&apikey=' + vhtearkey)
            const epbe2 = `*「 FACEBOOK DOWNLOADER 」*\n➸ *Aplikasi*: Facebook`
            zama.sendFileFromUrl(self, resp.data.result.VideoUrl, `Facebook.mp4`, epbe2, id)
            await limitAdd(serial)
            } catch (err) {
                console.error(err.message)
                await zama.sendFileFromUrl(self, errorurl2, 'error.png', '💔️ Maaf, Video tidak ditemukan')
                zama.sendText(ownerNumber, 'Facebook Error : ' + err)
            }
            break
        case `${prefix}tiktok`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
            if (!isGroupMsg) return zama.reply(self, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            if (isLimit(serial)) return zama.reply(self, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik #limit Untuk Mengecek Kuota Limit Kamu`, id)

            await limitAdd(serial)
            if (args.length === 1) return zama.reply(self, `Kirim perintah *#tiktok [linkTiktok]*\nContoh : *#tiktok https://vt.tiktok.com/yqyjPX/*`, id)
            const tkdl = body.slice(8)
            zama.reply(self, mess.wait, id)
            try {
                const titkod = await fetch(`https://api.vhtear.com/tiktokdl?link=${tkdl}&apikey=${vhtearkey}`)
                if (!titkod.ok) throw new Error(`Error Tiktok : ${titkod.statusText}`)
                const tiktod = await titkod.json()
                if (tiktod.status == false) {
                    zama.reply(self, `*Maaf Terdapat kesalahan saat mengambil data, mohon pilih media lain...*`, id)
                } else {
                    const { video, title, image, desk, dibuat, duration } = await tiktod.result
                    zama.sendFileFromUrl(self, image, 'thumb.jpg', `*「 TIKTOK DOWNLOADER 」*\n\n➸ *Judul* : ${title}\n➸ Deskripsi : ${desk}\n➸ Durasi : ${duration}\n➸ Dibuat : ${dibuat}\n\n_Silahkan tunggu sebentar proses pengiriman file membutuhkan waktu beberapa menit._`, id)
                    await zama.sendFileFromUrl(self, video, `${title}.mp4`, '', id).catch(() => zama.reply(self, mess.error.Yt4, id))
                    await limitAdd(serial)
                }
            } catch (err) {
                zama.sendText(ownerNumber, 'Tiktok Download Error : '+ err)
                zama.reply(self, mess.error.Yt4, id)
                console.log(err)
            }
            break
        case `${prefix}wiki`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
            if (!isGroupMsg) return zama.reply(self, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            if (isLimit(serial)) return zama.reply(self, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik #limit Untuk Mengecek Kuota Limit Kamu`, id)
            if (args.length === 1) return zama.reply(self, `Kirim perintah *#wiki [ Query ]*\nContoh : *#wiki asu*`, id)
            const queryz_ = body.slice(6)
            const wiki = await axios.get(`https://api.vhtear.com/wikipedia?query=${queryz_}&apikey=${vhtearkey}`)
            if (wiki.data.error) {
                zama.reply(self, wiki.data.error, id)
            } else {
                zama.sendFileFromUrl(self, wiki.data.result.ImgResult, '', `*「 WIKI 」*\n\n➸ *Query* : ${queryz_}\n\n➸ *Result* : ${wiki.data.result.Info}`, id)
                await limitAdd(serial)
            }
        case `${prefix}kbbi`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
            if (!isGroupMsg) return zama.reply(self, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            if (isLimit(serial)) return zama.reply(self, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik #limit Untuk Mengecek Kuota Limit Kamu`, id)
            if (args.length === 1) return zama.reply(self, `Kirim perintah *#kbbi [ Query ]*\nContoh : *#kbbi asu*`, id)
            const kbbl = body.slice(6)
            const kbbl2 = await axios.get(`https://api.vhtear.com/kbbi?query=${kbbl}&apikey=${vhtearkey}`)

            if (kbbl2.data.error) {
                zama.reply(self, kbbl2.data.error, id)
            } else {
                zama.sendText(self, `*「 KBBI 」*\n\n➸ *Query* : ${kbbl}\n\n➸ *Result* : ${kbbl2.data.result.hasil}`, id)
                await limitAdd(serial)
            }
            break
        case `${prefix}googleimage`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
            if (!isGroupMsg) return zama.reply(self, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            if (isLimit(serial)) return zama.reply(self, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik #limit Untuk Mengecek Kuota Limit Kamu`, id)
            argz = body.trim().split('|')
            if (argz.length >= 2) {
            const qwery = argz[1]
            const jum = argz[2]
            if(!qwery) return await zama.reply(self, `Kirim perintah *#googleimage [ |Query|Jumlah ]*, contoh = #googleimage |loli|3`, id)
            if(!jum) return await zama.reply(self, `Jumlah gambar diperlukan, contoh = #googleimage |loli|3`, id)
            if(jum >= 5) return await zama.reply(self, `Jumlah terlalu banyak! Max 4`, id)
            var gis = require('g-i-s');
            var opts = {
                searchTerm: qwery
                };
                gis(opts, logResults);

                function logResults(error, results) {
                    if (error) {
                        zama.reply(self, `Maaf, Fitur Sedang Error`, id)
                    } else {
                        const item = results.slice(0, jum)
                        item.forEach(async(res) => {
                        console.log(res)
                        const yurl = await urlShortener(res.url)
                        zama.sendImage(self, res.url, null, `➸ Link : ${yurl}\n➸ Image size : ${res.height} x ${res.width}`)
                        limitAdd(serial)
                        })
                    }
                }
            }
        case `${prefix}smule`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
            if (!isGroupMsg) return zama.reply(self, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            if (isLimit(serial)) return zama.reply(self, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik #limit Untuk Mengecek Kuota Limit Kamu`, id)

            await limitAdd(serial)
            if (args.length === 1) return zama.reply(self, `Kirim perintah *#smule [linkSmule]*\nContoh : *#smule https://www.smule.com/p/767512225_3062360163*`, id)
            zama.reply(self, mess.wait, id)
            arg = body.trim().split(' ')
            console.log(...arg[1])
            var slicedArgs = Array.prototype.slice.call(arg, 1);
            console.log(slicedArgs)
            const sml = await slicedArgs.join(' ')
            console.log(sml)
            try {
            const resp = await axios.get('https://api.vhtear.com/getsmule?link=' + sml + '&apikey=' + vhtearkey)
            const { Type, title, url, image } = resp.data.result
            const sml3 = `*Music Ditemukan!*

➸ *Judul:* ${title}
➸ *Type:* ${Type}`

            zama.sendImage(self, image, `${title}.jpg`, sml3)
            zama.sendFileFromUrl(self, url, `${title}.mp3`, sml3, id)
            } catch (err) {
             console.error(err.message)
             await zama.sendFileFromUrl(self, errorurl2, 'error.png', '💔️ Maaf, Music tidak ditemukan')
             zama.sendText(ownerNumber, 'Smule Error : ' + err)
           }
          break
        case `${prefix}sandwriting`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
            if (!isGroupMsg) return zama.reply(self, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            if (isLimit(serial)) return zama.reply(self, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik #limit Untuk Mengecek Kuota Limit Kamu`, id)

            await limitAdd(serial)
            if (args.length === 1)  return zama.reply(self, `Kirim perintah *#sandwriting [ Teks ]*\nContoh *#sandwriting Z Cantik*`, id)
            const swrt = body.slice(13)
            try {
            const swrt2 = await axios.get('https://api.vhtear.com/sand_writing?text1=' + swrt + '&apikey=' + vhtearkey)
            const { imgUrl } = swrt2.data.result
            const swrt3 = `*「 SAND WRITING 」*

*Text : ${swrt}*`
            const pictk = await bent("buffer")(imgUrl)
            const base64 = `data:image/jpg;base64,${pictk.toString("base64")}`
            zama.sendImage(self, base64, swrt3)
            } catch (err) {
             console.error(err.message)
             await zama.sendFileFromUrl(self, errorurl2, 'error.png', '💔️ Maaf, User tidak ditemukan')
             zama.sendText(ownerNumber, 'Sand Writing Error : ' + err)
           }
          break
         case `${prefix}tahta`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
             if (!isGroupMsg) return zama.reply(self, `Perintah ini hanya bisa di gunakan dalam group!`, id)
             if (isLimit(serial)) return zama.reply(self, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik #limit Untuk Mengecek Kuota Limit Kamu`, id)

             await limitAdd(serial)
             const thunderg = body.slice(7)
             if (!thunderg) return zama.reply(self, `Kirim perintah *#tahta [teks]*\n\nContoh *#tahta Z*`, id)
             if (thunderg.length > 7) return zama.reply(self, `Maksimal 7 Huruf!`, id)
             zama.sendText(self, `_Sedang diproses, mohon tunggu sebentar!..._`, id)
             await zama.sendFileFromUrl(self, `https://api.vhtear.com/hartatahta?text=${thunderg}&apikey=${vhtearkey}`,`${thunderg}.jpg`,`Harta Tahta ${thunderg}`, id)
             break
//https://api.vhtear.com/galaxytext?text=Sakura%20Ku&apikey=Nabilihsana
        case `${prefix}resepmasakan`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
            if (!isGroupMsg) return zama.reply(self, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            if (isLimit(serial)) return zama.reply(self, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik #limit Untuk Mengecek Kuota Limit Kamu`, id)

            await limitAdd(serial)
            if (args.length === 1)  return zama.reply(self, `Kirim perintah *#resepmasakan [optional]*\nContoh *#resepmasakan rawon*`, id)
            arg = body.trim().split(' ')
            console.log(...arg[1])
            var slicedArgs = Array.prototype.slice.call(arg, 1);
            console.log(slicedArgs)
            const rmk = await slicedArgs.join(' ')
            console.log(rmk)
            try {
            const resp = await axios.get('https://api.vhtear.com/resepmasakan?query=' + rmk + '&apikey=' + vhtearkey)
            const { bahan, cara, image, title  } = resp.data.result
            const rmk3 = `*Resep Ditemukan!*
➸ *Judul:* ${title}
➸ *Bahan:* ${bahan}
➸ *Cara:* ${cara}`

            const pictk = await bent("buffer")(image)
            const base64 = `data:image/jpg;base64,${pictk.toString("base64")}`
            zama.sendImage(self, base64, title, rmk3)
            } catch (err) {
             console.error(err.message)
             await zama.sendFileFromUrl(self, errorurl2, 'error.png', '💔️ Maaf, Resep tidak ditemukan')
             zama.sendText(ownerNumber, 'Resepmasakan Error : ' + err)
           }
           break
        case `${prefix}twitterstalk`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
        case `${prefix}twtstalk`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
            if (!isGroupMsg) return zama.reply(self, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            if (isLimit(serial)) return zama.reply(self, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik #limit Untuk Mengecek Kuota Limit Kamu`, id)

            await limitAdd(serial)
            if (args.length === 1)  return zama.reply(self, `Kirim perintah *#twtstalk @username*\nContoh *#twtstalk @miakhalifah*`, id)
            arg = body.trim().split(' ')
            console.log(...arg[1])
            var slicedArgs = Array.prototype.slice.call(arg, 1);
            console.log(slicedArgs)
            const twstalk = await slicedArgs.join(' ')
            console.log(twstalk)
            try {
            const twstalk2 = await axios.get('https://mhankbarbars.herokuapp.com/api/twstalk?username=' + twstalk + '&apiKey=' + barbarkey)
            const { followers_count, full_name, name, profile_pic, status_count } = twstalk2.data
            const twstalk3 = `*User Ditemukan!*

➸ *Nama:* ${name}
➸ *Nama Panjang:* ${full_name}
➸ *Jumlah Pengikut:* ${followers_count}
➸ *Jumlah Postingan:* ${status_count}`

            const pictk = await bent("buffer")(profile_pic)
            const base64 = `data:image/jpg;base64,${pictk.toString("base64")}`
            zama.sendImage(self, base64, name, twstalk3)
            } catch (err) {
             console.error(err.message)
             await zama.sendFileFromUrl(self, errorurl2, 'error.png', '💔️ Maaf, User tidak ditemukan')
             zama.sendText(ownerNumber, 'Twitter Error : ' + err)
           }
          break
        case `${prefix}igstalk`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
            if (!isGroupMsg) return zama.reply(self, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            if (isLimit(serial)) return zama.reply(self, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik #limit Untuk Mengecek Kuota Limit Kamu`, id)

            await limitAdd(serial)
            if (args.length === 1)  return zama.reply(self, `Kirim perintah *#igstalk @username*\nContoh *#igstalk duar_amjay*`, id)
            arg = body.trim().split(' ')
            console.log(...arg[1])
            var slicedArgs = Array.prototype.slice.call(arg, 1);
            console.log(slicedArgs)
            const istalk = await slicedArgs.join(' ')
            console.log(istalk)
            try {
            const istalk2 = await axios.get('https://api.vhtear.com/igprofile?query=' + istalk + '&apikey=' + vhtearkey)
            const { username, biography, follow, follower, full_name, picture, post_count, is_private } = istalk2.result
        const istalk3 = `*「 INSTAGRAM PROFILE 」*

• *Username:* @${username}
• *Nama:* ${full_name}
• *Deskripsi:* ${biography}
• *Pengikut:* ${follower}
• *Mengikuti*: ${follow}
• *Jumlah Postingan:* ${post_count}
• *Private:* ${is_private}
• *Link:* https://instagram.com/${username}`


            const pictk = await bent("buffer")(picture)
            const base64 = `data:image/jpg;base64,${pictk.toString("base64")}`
            zama.sendImage(self, base64, username, istalk3)
            } catch (err) {
             console.error(err.message)
             await zama.sendFileFromUrl(self, errorurl2, 'error.png', '💔️ Maaf, User tidak ditemukan')
             zama.sendText(ownerNumber, 'Igstalk Error : ' + err)
           }
          break
        case `${prefix}tiktokstalk`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
            if (!isGroupMsg) return zama.reply(self, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            if (isLimit(serial)) return zama.reply(self, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik #limit Untuk Mengecek Kuota Limit Kamu`, id)

            await limitAdd(serial)
            if (args.length === 1)  return zama.reply(self, `Kirim perintah *#tiktokstalk @username*\nContoh *#tiktokstalk @duar_amjay*`, id)
            arg = body.trim().split(' ')
            console.log(...arg[1])
            var slicedArgs = Array.prototype.slice.call(arg, 1);
            console.log(slicedArgs)
            const tstalk = await slicedArgs.join(' ')
            console.log(tstalk)
            try {
            const tstalk2 = await axios.get('https://api.vhtear.com/tiktokprofile?query=' + tstalk + '&apikey=' + vhtearkey)
            const { username, bio, follow, follower, title, like_count, video_post, description, picture, url_account } = tstalk2.data.result
            const tiktod = `*User Ditemukan!*
➸ *Username:* ${username}
➸ *Judul:* ${title}
➸ *Bio:* ${bio}
➸ *Mengikuti:* ${follow}
➸ *Pengikut:* ${follower}
➸ *Jumlah Like*: ${like_count}
➸ *Jumlah Postingan:* ${video_post}
➸ *Deskripsi:* ${description}
➸ *Link:* ${url_account}`

            const pictk = await bent("buffer")(picture)
            const base64 = `data:image/jpg;base64,${pictk.toString("base64")}`
            zama.sendImage(self, base64, title, tiktod)
            } catch (err) {
             console.error(err.message)
             await zama.sendFileFromUrl(self, errorurl2, 'error.png', '💔️ Maaf, User tidak ditemukan')
             zama.sendText(ownerNumber, 'Error Tiktokstalk : '+ err)
           }
          break
        case `${prefix}smulestalk`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
            if (!isGroupMsg) return zama.reply(self, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            if (isLimit(serial)) return zama.reply(self, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik #limit Untuk Mengecek Kuota Limit Kamu`, id)

            await limitAdd(serial)
            if (args.length === 1) return zama.reply(self, `Kirim perintah *#smulestalk [@username]*\nContoh : *#smulestalk loli*`, id)
            arg = body.trim().split(' ')
            console.log(...arg[1])
            var slicedArgs = Array.prototype.slice.call(arg, 1);
            console.log(slicedArgs)
            const sstalk = await slicedArgs.join(' ')
            console.log(sstalk)
            try {
            const sstalk2 = await axios.get('https://api.vhtear.com/smuleprofile?query=' + sstalk + '&apikey=' + vhtearkey)
            const { username, full_name, follower, follow, biography, is_vip, picture, recording } = sstalk2.data.result
            const smule = `*User Ditemukan!*
➸ *Username:* ${username}
➸ *Full Name:* ${title}
➸ *Biografi:* ${biography}
➸ *Mengikuti:* ${follow}
➸ *Pengikut:* ${follower}
➸ *VIP*: ${is_vip}
➸ *Total Rekaman:* ${recording}`

            const pictk = await bent("buffer")(picture)
            const base64 = `data:image/jpg;base64,${pictk.toString("base64")}`
            zama.sendImage(self, base64, title, smule)
            } catch (err) {
             console.error(err.message)
             await zama.sendFileFromUrl(self, errorurl2, 'error.png', '💔️ Maaf, User tidak ditemukan')
             zama.sendText(ownerNumber, 'Error Smulestalk : '+ err)
            }
          break
        case `${prefix}`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
            if (!isGroupMsg) return zama.reply(self, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            if (!isSimi) return zama.reply(self, `command/Perintah Simi belum di aktifkan di group ini!`, id)
            if (args.length === 1) return zama.reply(self, `Kirim perintah *# [teks]*\nContoh : *# halo*`)
            const que = body.slice(2)
            const sigo = await axios.get(`http://simsumi.herokuapp.com/api?text=${que}&lang=id`)
            const sigot = sigo.data
            zama.reply(self, sigot.success, id)
            console.log(sigot)
            break
        case `${prefix}ig`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
        case `${prefix}instagram`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
            if (isLimit(serial)) return zama.reply(self, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik #limit Untuk Mengecek Kuota Limit Kamu`, id)
            if (args.length === 1) return zama.reply(self, `Kirim perintah *#ig [ Link Instagram ]* untuk contoh silahkan kirim perintah *#readme*`)
            if (!args[1].match(isUrl) && !args[1].includes('instagram.com')) return zama.reply(self, `Maaf, link yang kamu kirim tidak valid. [Invalid Link]`, id)
            await zama.reply(self, mess.wait, id);
            instagram(args[1]).then(async(res) => {
                for (let i = 0; i < res.result.result.length; i++) {
            if (res.result.result[i].includes('.mp4')) {
                        var ext = '.mp4'
                    } else {
                        var ext = '.jpg'
                    }
            zama.sendFileFromUrl(self, res.result.result[i], `ig.${ext}`, `*「 INSTAGRAM 」*`, id);
                    limitAdd(serial)
                }
            }).catch((err) => {
                console.log(err);
                zama.reply(self, `Maaf, Terjadi Kesalahan`, id)
            })
            break
        case `${prefix}starmaker`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
            if (!isGroupMsg) return zama.reply(self, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            if (isLimit(serial)) return zama.reply(self, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik #limit Untuk Mengecek Kuota Limit Kamu`, id)

            await limitAdd(serial)
            if (args.length === 1) return zama.reply(self, `Kirim perintah *#starmaker [linkStarmaker]* untuk contoh silahkan kirim perintah *#readme*`)
            arg = body.trim().split(' ')
            console.log(...arg[1])
            var slicedArgs = Array.prototype.slice.call(arg, 1);
            console.log(slicedArgs)
            const smkr = await slicedArgs.join(' ')
            console.log(smkr)
            try {
            const smkr2 = await axios.get('https://api.vhtear.com/starmakerdl?link=' + smkr + '&apikey=' + vhtearkey)
            const { image, desc, url, title } = smkr2.data.result
            const smkr3 = `*User Ditemukan!*

➸ *Judul:* ${title}
➸ *Deskripsi:* ${desc}`

            const pictk = await bent("buffer")(image)
            const base64 = `data:image/jpg;base64,${pictk.toString("base64")}`
            zama.sendImage(self, base64, 'image.jpg', 'nihh mhank')
            zama.sendFileFromUrl(self, url, `${title}.mp4`, '', id)
            } catch (err) {
             console.error(err.message)
             await zama.sendFileFromUrl(self, errorurl2, 'error.png', '💔️ Maaf, User tidak ditemukan')
             zama.sendText(ownerNumber, 'Error Starmaker : '+ err)
           }
          break
        case `${prefix}maps`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
            if (!isGroupMsg) return zama.reply(self, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            if (isLimit(serial)) return zama.reply(self, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik #limit Untuk Mengecek Kuota Limit Kamu`, id)

            await limitAdd(serial)
            if (args.length === 1) return zama.reply(self, `Kirim perintah *#maps [optional]*, Contoh : *#maps Jakarta*`)
            arg = body.trim().split(' ')
            console.log(...arg[1])
            var slicedArgs = Array.prototype.slice.call(arg, 1);
            console.log(slicedArgs)
            const mapz = await slicedArgs.join(' ')
            console.log(mapz)
            try {
            const mapz2 = await axios.get('https://mnazria.herokuapp.com/api/maps?search=' + mapz)
            const { gambar } = mapz2.data
            const pictk = await bent("buffer")(gambar)
            const base64 = `data:image/jpg;base64,${pictk.toString("base64")}`
            zama.sendImage(self, base64, 'maps.jpg', `*Hasil Maps : ${mapz}*`)
            } catch (err) {
             console.error(err.message)
             await zama.sendFileFromUrl(self, errorurl2, 'error.png', '💔️ Maaf, User tidak ditemukan')
             zama.sendText(ownerNumber, 'Error Maps : '+ err)
           }
          break
        /*case `${prefix}twitter`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
            if (!isGroupMsg) return zama.reply(self, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            if (isLimit(serial)) return zama.reply(self, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik #limit Untuk Mengecek Kuota Limit Kamu`, id)

            await limitAdd(serial)
            if (args.length === 1) return zama.reply(self, `Kirim perintah *#twitter [linkTwitter]* untuk contoh silahkan kirim perintah *#readme*`)
            arg = body.trim().split(' ')
            console.log(...arg[1])
            var slicedArgs = Array.prototype.slice.call(arg, 1);
            console.log(slicedArgs)
            const twtdl = await slicedArgs.join(' ')
            console.log(twtdl)
            try {
            const twtdl2 = await axios.get('https://mhankbarbars.herokuapp.com/api/twit?url=' + twtdl + '&apiKey=' + barbarkey)
            const { filesize, quote, result, title } = twtdl2.data
            const twtdl3 = `*User Ditemukan!*

➸ *Judul:* ${title}
➸ *Deskripsi:* ${quote}
➸ *Filesize:* ${filesize}`

            zama.sendFileFromUrl(self, result, `${title}.mp4`, twtdl3, id)
            } catch (err) {
             console.error(err.message)
             await .sendFileFromUrl(self, errorurl2, 'error.png', '💔️ Maaf, User tidak ditemukan')
           }
          break*/
         case `${prefix}joox`:
            if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
            if (!isGroupMsg) return zama.reply(self, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            if (isLimit(serial)) return zama.reply(self, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            zama.reply(self, mess.wait, id)
            if (args.length === 1) return zama.reply(self, `Kirim perintah *#joox [ Optional ]*\nContoh : *#joox Alan Walker*`, id)
            zama.reply(self, mess.wait, id)
            joox(args[1]).then(async(res) => {
                let { penyanyi, judul, album, linkImg, linkMp3, filesize, ext, duration } = await res
                let tjoox = `*「 JOOX DOWNLOADER 」*\n\n➸ *Penyanyi:* ${penyanyi}\n➸ *Judul:* ${judul}\n➸ *Album:* ${album}\n➸ *Ext:* ${ext}\n➸ *Size:* ${filesize}\n➸ *Durasi:* ${duration}\n\n_Silahkan tunggu sebentar proses pengiriman file membutuhkan waktu beberapa menit._`
                zama.sendImage(self, linkImg, judul, tjoox)
                zama.sendFileFromUrl(self, linkMp3, `${judul}.${ext}`, '', id).catch(() => zama.reply(self, mess.error.Yt4, id))
                await limitAdd(serial)
            }).catch((err) => {
                console.log(err);
                zama.reply(self, `Maaf, Terjadi Kesalahan`, id)
            })
            break
        case `${prefix}checkip`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
            if (!isGroupMsg) return zama.reply(self, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            if (isLimit(serial)) return zama.reply(self, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik #limit Untuk Mengecek Kuota Limit Kamu`, id)

            await limitAdd(serial)
            if (args.length === 1) return zama.reply(self, `Kirim perintah *#checkip [ipaddress]*\nContoh : *#checkip 182.0.144.145*`, id)
            zama.reply(self, mess.wait, id)
            arg = body.trim().split(' ')
            console.log(...arg[1])
            var slicedArgs = Array.prototype.slice.call(arg, 1);
            console.log(slicedArgs)
            const cekip = await slicedArgs.join(' ')
            console.log(cekip)
            try {
            const cekip2 = await axios.get('https://mnazria.herokuapp.com/api/check?ip=' + cekip)
            const { city, continent_name, country_name, ip, latitude, location, longitude, region_name } = cekip2.data
            const cekip3 = `*User Ditemukan!*

➸ *Kota:* ${city}
➸ *Benua:* ${continent_name}
➸ *Negara:* ${country_name}
➸ *Ip Address:* ${ip}
➸ *Garis Lintang:* ${latitude}
➸ *Kode Telepon:* +${location.calling_code}
➸ *Ibu Kota:* +${location.capital}
➸ *Bahasa:* +${location.languages[0].name}
➸ *Garis Bujur:* ${longitude}
➸ *Wilayah:* +${region_name}`

            const pictk = await bent("buffer")(location.country_flag)
            const base64 = `data:image/jpg;base64,${pictk.toString("base64")}`
            zama.sendImage(self, base64, city, cekip3)
            } catch (err) {
             console.error(err.message)
             await zama.sendFileFromUrl(self, errorurl2, 'error.png', '💔️ Maaf, User tidak ditemukan')
             zama.sendText(ownerNumber, 'Error Check IP : '+ err)
           }
          break
        case `${prefix}nhentai`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
        case `${prefix}nh`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
            if (!isGroupMsg) return zama.reply(self, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            if (!isNsfw) return zama.reply(self, `command/Perintah NSFW belum di aktifkan di group ini!`, id)
            if (args.length === 2) {
                const nuklir = body.split(' ')[1]
                zama.reply(self, mess.wait, id)
                const cek = await nhentai.exists(nuklir)
                if (cek === true)  {
                    try {
                        const api = new API()
                        const pic = await api.getBook(nuklir).then(book => {
                            return api.getImageURL(book.cover)
                        })
                        const dojin = await nhentai.getDoujin(nuklir)
                        const { title, details, link } = dojin
                        const { parodies, tags, artists, groups, languages, categories } = await details
                        var teks = `*Title* : ${title}\n\n*Parodies* : ${parodies}\n\n*Tags* : ${tags.join(', ')}\n\n*Artists* : ${artists.join(', ')}\n\n*Groups* : ${groups.join(', ')}\n\n*Languages* : ${languages.join(', ')}\n\n*Categories* : ${categories}\n\n*Link* : ${link}`
                        exec('nhentai --id=' + nuklir + ` -P mantap.pdf -o ./hentong/${nuklir}.pdf --format `+ `${nuklir}.pdf`, (error, stdout, stderr) => {
                            zama.sendFileFromUrl(self, pic, 'hentod.jpg', teks, id).then(() =>
                            zama.sendFile(self, `./hentong/${nuklir}.pdf/${nuklir}.pdf.pdf`, `${title}.pdf`, '', id)).catch(() =>
                            zama.sendFile(self, `./hentong/${nuklir}.pdf/${nuklir}.pdf.pdf`, `${title}.pdf`, '', id))
                            if (error) {
                                console.log('error : '+ error.message)
                                return
                            }
                            if (stderr) {
                                console.log('stderr : '+ stderr)
                                return
                            }
                            console.log('stdout : '+ stdout)
                            })
                    } catch (err) {
                        zama.reply(self, `[❗] Terjadi kesalahan, mungkin kode nuklir salah`, id)
                    }
                } else {
                    zama.reply(self, `[❗] Kode nuklir Salah!`)
                }
            } else {
                zama.reply(self, `[ WRONG ] Kirim perintah *#nhentai [kode]* untuk contoh kirim perintah *#readme*`)
            }
            break
        case `${prefix}brainly`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
            if (!isGroupMsg) return zama.reply(self, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            if (isLimit(serial)) return zama.reply(self, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik #limit Untuk Mengecek Kuota Limit Kamu`, id)

            await limitAdd(serial)
            if (args.length >= 2){
                const BrainlySearch = require('./lib/brainly')
                let tanya = body.slice(9)
                let jum = Number(tanya.split('.')[1]) || 2
                if (jum > 10) return zama.reply(self, `Max 10!`, id)
                if (Number(tanya[tanya.length-1])){
                    tanya
                }
                zama.reply(self, `➸ *Pertanyaan* : ${tanya.split('.')[0]}\n\n➸ *Jumlah jawaban* : ${Number(jum)}`, id)
                await BrainlySearch(tanya.split('.')[0],Number(jum), function(res){
                    res.forEach(x=>{
                        if (x.jawaban.fotoJawaban.length == 0) {
                            zama.reply(self, `➸ *Pertanyaan* : ${x.pertanyaan}\n\n➸ *Jawaban* : ${x.jawaban.judulJawaban}\n`, id)
                        } else {
                            zama.reply(self, `➸ *Pertanyaan* : ${x.pertanyaan}\n\n➸ *Jawaban* 〙: ${x.jawaban.judulJawaban}\n\n➸ *Link foto jawaban* : ${x.jawaban.fotoJawaban.join('\n')}`, id)
                        }
                    })
                })
            } else {
                zama.reply(self, `Usage :\n!brainly [pertanyaan] [.jumlah]\n\nEx : \n!brainly NKRI .2`, id)
            }
            break
        case `${prefix}math`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
            if (!isGroupMsg) return zama.reply(self, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            if (args.length === 1) return zama.reply(self, '[❗] Kirim perintah *#math [ Angka ]*\nContoh : #math 12*12\n*NOTE* :\n- Untuk Perkalian Menggunakan *\n- Untuk Pertambahan Menggunakan +\n- Untuk Pengurangan Mennggunakan -\n- Untuk Pembagian Menggunakan /')
            const mtk = body.slice(6)
            if (typeof Math_js.evaluate(mtk) !== "number") {
            zama.reply(self, `"${mtk}", bukan angka!\n[❗] Kirim perintah *#math [ Angka ]*\nContoh : #math 12*12\n*NOTE* :\n- Untuk Perkalian Menggunakan *\n- Untuk Pertambahan Menggunakan +\n- Untuk Pengurangan Mennggunakan -\n- Untuk Pembagian Menggunakan /`, id)
        } else {
            zama.reply(self, `*「 MATH 」*\n\n*Kalkulator*\n${mtk} = ${Math_js.evaluate(mtk)}`, id)
        }
        break
        case `${prefix}wait`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
            if (!isGroupMsg) return zama.reply(self, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            if (isLimit(serial)) return zama.reply(self, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik #limit Untuk Mengecek Kuota Limit Kamu`, id)

            await limitAdd(serial)
            if (isMedia && type === 'image' || quotedMsg && quotedMsg.type === 'image') {
                if (isMedia) {
                    var mediaData = await decryptMedia(message, uaOverride)
                } else {
                    var mediaData = await decryptMedia(quotedMsg, uaOverride)
                }
                const fetch = require('node-fetch')
                const imgBS4 = `data:${mimetype};base64,${mediaData.toString('base64')}`
                zama.reply(self, `Searching....`, id)
                fetch('https://trace.moe/api/search', {
                    method: 'POST',
                    body: JSON.stringify({ image: imgBS4 }),
                    headers: { "Content-Type": "application/json" }
                })
                .then(respon => respon.json())
                .then(resolt => {
                    if (resolt.docs && resolt.docs.length <= 0) {
                        zama.reply(self, `Maaf, saya tidak tau ini anime apa`, id)
                    }
                    const { is_adult, title, title_chinese, title_romaji, title_english, episode, similarity, filename, at, tokenthumb, anilist_id } = resolt.docs[0]
                    teks = ''
                    if (similarity < 0.92) {
                        teks = '*Saya memiliki keyakinan rendah dalam hal ini* :\n\n'
                    }
                    teks += `➸ *Title Japanese* : ${title}\n➸ *Title chinese* : ${title_chinese}\n➸ *Title Romaji* : ${title_romaji}\n➸ *Title English* : ${title_english}\n`
                    teks += `➸ *Ecchi* : ${is_adult}\n`
                    teks += `➸ *Eps* : ${episode.toString()}\n`
                    teks += `➸ *Kesamaan* : ${(similarity * 100).toFixed(1)}%\n`
                    var video = `https://media.trace.moe/video/${anilist_id}/${encodeURIComponent(filename)}?t=${at}&token=${tokenthumb}`;
                    zama.sendFileFromUrl(self, video, 'nimek.mp4', teks, id).catch(() => {
                        zama.reply(self, teks, id)
                    })
                })
                .catch(() => {
                    zama.reply(self, `Error !`, id)
                })
            } else {
                zama.sendFileFromUrl(self, tutor, 'Tutor.jpg', 'Neh contoh mhank!', id)
            }
            break
        case `${prefix}textmaker`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
                if (!isGroupMsg) return zama.reply(self, `Perintah ini hanya bisa di gunakan dalam group!`, id)
                if (isLimit(serial)) return zama.reply(self, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik #limit Untuk Mengecek Kuota Limit Kamu`, id)

                await limitAdd(serial)
                arg = body.trim().split('|')
                zama.reply(self, `[WAIT] Sedang di proses⏳ silahkan tunggu ± 1 min!`, id)
                if ((isMedia || isQuotedImage) && arg.length >= 2) {
                const top = arg[1]
                const bott = arg[2]
                const encryptMedia = isQuotedImage ? quotedMsg : message
                const mediaData = await decryptMedia(encryptMedia, uaOverride)
                const getUrl = await uploadImages(mediaData, false)
                const ImageBase64 = await custom(getUrl, top, bott)
                await zama.sendFile(self, ImageBase64, 'image.png','neh...')
                } else {
                await zama.reply(self, `Wrong Format!`, id)
                }
                break
        case `${prefix}quotemaker`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
            if (!isGroupMsg) return zama.reply(self, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            if (isLimit(serial)) return zama.reply(self, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik #limit Untuk Mengecek Kuota Limit Kamu`, id)

            await limitAdd(serial)
            arg = body.trim().split('|')
            if (arg.length >= 4) {
                zama.reply(self, mess.wait, id)
                const quotes = arg[1]
                const author = arg[2]
                const theme = arg[3]
                await quotemaker(quotes, author, theme).then(amsu => {
                    zama.sendFile(self, amsu, 'quotesmaker.jpg','neh...',id).catch(() => {
                       zama.reply(self, mess.error.Qm, id)
                    })
                })
            } else {
                zama.reply(self, `Usage: \n#quotemaker |teks|watermark|theme\n\nEx :\n#quotemaker |ini contoh|bicit|random`, id)
            }
            break
        case `${prefix}listchannel`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
            if (!isGroupMsg) return zama.reply(self, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            zama.reply(self, listChannel, id)
            break
        case `${prefix}jadwaltv`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
            if (!isGroupMsg) return zama.reply(self, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            if (isLimit(serial)) return zama.reply(self, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik #limit Untuk Mengecek Kuota Limit Kamu`, id)

            await limitAdd(serial)
            if (args.length === 1) return zama.reply(self, `Kirim perintah *#jadwalTv [channel]*`, id)
            const query = body.slice(10).toLowerCase()
            const jadwal = await jadwalTv(query)
            zama.reply(self, jadwal, id)
            break
        case `${prefix}jadwaltvnow`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
            if (!isGroupMsg) return zama.reply(self, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            if (isLimit(serial)) return zama.reply(self, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik #limit Untuk Mengecek Kuota Limit Kamu`, id)

            await limitAdd(serial)
            const jadwalNow = await axios.get('https://api.haipbis.xyz/jadwaltvnow')
            zama.reply(self, `Jam : ${jadwalNow.data.jam}\n\nJadwalTV : ${jadwalNow.data.jadwalTV}`, id)
            break
        case `${prefix}nulis`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
            if (!isGroupMsg) return zama.reply(self, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            if (isLimit(serial)) return zama.reply(self, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik #limit Untuk Mengecek Kuota Limit Kamu`, id)

            await limitAdd(serial)
            if (args.length === 1) return zama.reply(self, `Kirim perintah *#nulis [teks]*, contoh *#nulis aku bukan boneka*`, id)
            const ngettik = body.slice(7)
            const ngetikk = await axios.get('https://mhankbarbars.herokuapp.com/nulis?text='+ ngettik+'&apiKey='+ barbarkey)
            if (ngetikk.data.error) return zama.reply(self, ngetikk.data.error, id)
            zama.sendFileFromUrl(self, ngetikk.data.result, 'nulis.jpg', '', id)
            break
                case `${prefix}inu`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
            if (!isGroupMsg) return zama.reply(self, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            if (isLimit(serial)) return zama.reply(self, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik #limit Untuk Mengecek Kuota Limit Kamu`, id)

            await limitAdd(serial)
            const list = ["https://cdn.shibe.online/shibes/247d0ac978c9de9d9b66d72dbdc65f2dac64781d.jpg","https://cdn.shibe.online/shibes/1cf322acb7d74308995b04ea5eae7b520e0eae76.jpg","https://cdn.shibe.online/shibes/1ce955c3e49ae437dab68c09cf45297d68773adf.jpg","https://cdn.shibe.online/shibes/ec02bee661a797518d37098ab9ad0c02da0b05c3.jpg","https://cdn.shibe.online/shibes/1e6102253b51fbc116b887e3d3cde7b5c5083542.jpg","https://cdn.shibe.online/shibes/f0c07a7205d95577861eee382b4c8899ac620351.jpg","https://cdn.shibe.online/shibes/3eaf3b7427e2d375f09fc883f94fa8a6d4178a0a.jpg","https://cdn.shibe.online/shibes/c8b9fcfde23aee8d179c4c6f34d34fa41dfaffbf.jpg","https://cdn.shibe.online/shibes/55f298bc16017ed0aeae952031f0972b31c959cb.jpg","https://cdn.shibe.online/shibes/2d5dfe2b0170d5de6c8bc8a24b8ad72449fbf6f6.jpg","https://cdn.shibe.online/shibes/e9437de45e7cddd7d6c13299255e06f0f1d40918.jpg","https://cdn.shibe.online/shibes/6c32141a0d5d089971d99e51fd74207ff10751e7.jpg","https://cdn.shibe.online/shibes/028056c9f23ff40bc749a95cc7da7a4bb734e908.jpg","https://cdn.shibe.online/shibes/4fb0c8b74dbc7653e75ec1da597f0e7ac95fe788.jpg","https://cdn.shibe.online/shibes/125563d2ab4e520aaf27214483e765db9147dcb3.jpg","https://cdn.shibe.online/shibes/ea5258fad62cebe1fedcd8ec95776d6a9447698c.jpg","https://cdn.shibe.online/shibes/5ef2c83c2917e2f944910cb4a9a9b441d135f875.jpg","https://cdn.shibe.online/shibes/6d124364f02944300ae4f927b181733390edf64e.jpg","https://cdn.shibe.online/shibes/92213f0c406787acd4be252edb5e27c7e4f7a430.jpg","https://cdn.shibe.online/shibes/40fda0fd3d329be0d92dd7e436faa80db13c5017.jpg","https://cdn.shibe.online/shibes/e5c085fc427528fee7d4c3935ff4cd79af834a82.jpg","https://cdn.shibe.online/shibes/f83fa32c0da893163321b5cccab024172ddbade1.jpg","https://cdn.shibe.online/shibes/4aa2459b7f411919bf8df1991fa114e47b802957.jpg","https://cdn.shibe.online/shibes/2ef54e174f13e6aa21bb8be3c7aec2fdac6a442f.jpg","https://cdn.shibe.online/shibes/fa97547e670f23440608f333f8ec382a75ba5d94.jpg","https://cdn.shibe.online/shibes/fb1b7150ed8eb4ffa3b0e61ba47546dd6ee7d0dc.jpg","https://cdn.shibe.online/shibes/abf9fb41d914140a75d8bf8e05e4049e0a966c68.jpg","https://cdn.shibe.online/shibes/f63e3abe54c71cc0d0c567ebe8bce198589ae145.jpg","https://cdn.shibe.online/shibes/4c27b7b2395a5d051b00691cc4195ef286abf9e1.jpg","https://cdn.shibe.online/shibes/00df02e302eac0676bb03f41f4adf2b32418bac8.jpg","https://cdn.shibe.online/shibes/4deaac9baec39e8a93889a84257338ebb89eca50.jpg","https://cdn.shibe.online/shibes/199f8513d34901b0b20a33758e6ee2d768634ebb.jpg","https://cdn.shibe.online/shibes/f3efbf7a77e5797a72997869e8e2eaa9efcdceb5.jpg","https://cdn.shibe.online/shibes/39a20ccc9cdc17ea27f08643b019734453016e68.jpg","https://cdn.shibe.online/shibes/e67dea458b62cf3daa4b1e2b53a25405760af478.jpg","https://cdn.shibe.online/shibes/0a892f6554c18c8bcdab4ef7adec1387c76c6812.jpg","https://cdn.shibe.online/shibes/1b479987674c9b503f32e96e3a6aeca350a07ade.jpg","https://cdn.shibe.online/shibes/0c80fc00d82e09d593669d7cce9e273024ba7db9.jpg","https://cdn.shibe.online/shibes/bbc066183e87457b3143f71121fc9eebc40bf054.jpg","https://cdn.shibe.online/shibes/0932bf77f115057c7308ef70c3de1de7f8e7c646.jpg","https://cdn.shibe.online/shibes/9c87e6bb0f3dc938ce4c453eee176f24636440e0.jpg","https://cdn.shibe.online/shibes/0af1bcb0b13edf5e9b773e34e54dfceec8fa5849.jpg","https://cdn.shibe.online/shibes/32cf3f6eac4673d2e00f7360753c3f48ed53c650.jpg","https://cdn.shibe.online/shibes/af94d8eeb0f06a0fa06f090f404e3bbe86967949.jpg","https://cdn.shibe.online/shibes/4b55e826553b173c04c6f17aca8b0d2042d309fb.jpg","https://cdn.shibe.online/shibes/a0e53593393b6c724956f9abe0abb112f7506b7b.jpg","https://cdn.shibe.online/shibes/7eba25846f69b01ec04de1cae9fed4b45c203e87.jpg","https://cdn.shibe.online/shibes/fec6620d74bcb17b210e2cedca72547a332030d0.jpg","https://cdn.shibe.online/shibes/26cf6be03456a2609963d8fcf52cc3746fcb222c.jpg","https://cdn.shibe.online/shibes/c41b5da03ad74b08b7919afc6caf2dd345b3e591.jpg","https://cdn.shibe.online/shibes/7a9997f817ccdabac11d1f51fac563242658d654.jpg","https://cdn.shibe.online/shibes/7221241bad7da783c3c4d84cfedbeb21b9e4deea.jpg","https://cdn.shibe.online/shibes/283829584e6425421059c57d001c91b9dc86f33b.jpg","https://cdn.shibe.online/shibes/5145c9d3c3603c9e626585cce8cffdfcac081b31.jpg","https://cdn.shibe.online/shibes/b359c891e39994af83cf45738b28e499cb8ffe74.jpg","https://cdn.shibe.online/shibes/0b77f74a5d9afaa4b5094b28a6f3ee60efcb3874.jpg","https://cdn.shibe.online/shibes/adccfdf7d4d3332186c62ed8eb254a49b889c6f9.jpg","https://cdn.shibe.online/shibes/3aac69180f777512d5dabd33b09f531b7a845331.jpg","https://cdn.shibe.online/shibes/1d25e4f592db83039585fa480676687861498db8.jpg","https://cdn.shibe.online/shibes/d8349a2436420cf5a89a0010e91bf8dfbdd9d1cc.jpg","https://cdn.shibe.online/shibes/eb465ef1906dccd215e7a243b146c19e1af66c67.jpg","https://cdn.shibe.online/shibes/3d14e3c32863195869e7a8ba22229f457780008b.jpg","https://cdn.shibe.online/shibes/79cedc1a08302056f9819f39dcdf8eb4209551a3.jpg","https://cdn.shibe.online/shibes/4440aa827f88c04baa9c946f72fc688a34173581.jpg","https://cdn.shibe.online/shibes/94ea4a2d4b9cb852e9c1ff599f6a4acfa41a0c55.jpg","https://cdn.shibe.online/shibes/f4478196e441aef0ada61bbebe96ac9a573b2e5d.jpg","https://cdn.shibe.online/shibes/96d4db7c073526a35c626fc7518800586fd4ce67.jpg","https://cdn.shibe.online/shibes/196f3ed10ee98557328c7b5db98ac4a539224927.jpg","https://cdn.shibe.online/shibes/d12b07349029ca015d555849bcbd564d8b69fdbf.jpg","https://cdn.shibe.online/shibes/80fba84353000476400a9849da045611a590c79f.jpg","https://cdn.shibe.online/shibes/94cb90933e179375608c5c58b3d8658ef136ad3c.jpg","https://cdn.shibe.online/shibes/8447e67b5d622ef0593485316b0c87940a0ef435.jpg","https://cdn.shibe.online/shibes/c39a1d83ad44d2427fc8090298c1062d1d849f7e.jpg","https://cdn.shibe.online/shibes/6f38b9b5b8dbf187f6e3313d6e7583ec3b942472.jpg","https://cdn.shibe.online/shibes/81a2cbb9a91c6b1d55dcc702cd3f9cfd9a111cae.jpg","https://cdn.shibe.online/shibes/f1f6ed56c814bd939645138b8e195ff392dfd799.jpg","https://cdn.shibe.online/shibes/204a4c43cfad1cdc1b76cccb4b9a6dcb4a5246d8.jpg","https://cdn.shibe.online/shibes/9f34919b6154a88afc7d001c9d5f79b2e465806f.jpg","https://cdn.shibe.online/shibes/6f556a64a4885186331747c432c4ef4820620d14.jpg","https://cdn.shibe.online/shibes/bbd18ae7aaf976f745bc3dff46b49641313c26a9.jpg","https://cdn.shibe.online/shibes/6a2b286a28183267fca2200d7c677eba73b1217d.jpg","https://cdn.shibe.online/shibes/06767701966ed64fa7eff2d8d9e018e9f10487ee.jpg","https://cdn.shibe.online/shibes/7aafa4880b15b8f75d916b31485458b4a8d96815.jpg","https://cdn.shibe.online/shibes/b501169755bcf5c1eca874ab116a2802b6e51a2e.jpg","https://cdn.shibe.online/shibes/a8989bad101f35cf94213f17968c33c3031c16fc.jpg","https://cdn.shibe.online/shibes/f5d78feb3baa0835056f15ff9ced8e3c32bb07e8.jpg","https://cdn.shibe.online/shibes/75db0c76e86fbcf81d3946104c619a7950e62783.jpg","https://cdn.shibe.online/shibes/8ac387d1b252595bbd0723a1995f17405386b794.jpg","https://cdn.shibe.online/shibes/4379491ef4662faa178f791cc592b52653fb24b3.jpg","https://cdn.shibe.online/shibes/4caeee5f80add8c3db9990663a356e4eec12fc0a.jpg","https://cdn.shibe.online/shibes/99ef30ea8bb6064129da36e5673649e957cc76c0.jpg","https://cdn.shibe.online/shibes/aeac6a5b0a07a00fba0ba953af27734d2361fc10.jpg","https://cdn.shibe.online/shibes/9a217cfa377cc50dd8465d251731be05559b2142.jpg","https://cdn.shibe.online/shibes/65f6047d8e1d247af353532db018b08a928fd62a.jpg","https://cdn.shibe.online/shibes/fcead395cbf330b02978f9463ac125074ac87ab4.jpg","https://cdn.shibe.online/shibes/79451dc808a3a73f99c339f485c2bde833380af0.jpg","https://cdn.shibe.online/shibes/bedf90869797983017f764165a5d97a630b7054b.jpg","https://cdn.shibe.online/shibes/dd20e5801badd797513729a3645c502ae4629247.jpg","https://cdn.shibe.online/shibes/88361ee50b544cb1623cb259bcf07b9850183e65.jpg","https://cdn.shibe.online/shibes/0ebcfd98e8aa61c048968cb37f66a2b5d9d54d4b.jpg"]
            let kya = list[Math.floor(Math.random() * list.length)]
            zama.sendFileFromUrl(self, kya, 'Dog.jpeg', 'Inu',id)
            break
        case `${prefix}qrcode`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
           if (!isGroupMsg) return zama.reply(self, `Perintah ini hanya bisa di gunakan dalam group!`, id)
        if (isLimit(serial)) return zama.reply(self, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik #limit Untuk Mengecek Kuota Limit Kamu`, id)

            await limitAdd(serial)
           if(!args.lenght >= 2) return
           let qrcodes = body.slice(8)
           await zama.sendFileFromUrl(self, `https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=${qrcodes}`, 'gambar.png', 'Process sukses!')
           break
        case `${prefix}ptl`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
            if (!isGroupMsg) return zama.reply(self, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            if (isLimit(serial)) return zama.reply(self, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik #limit Untuk Mengecek Kuota Limit Kamu`, id)

            await limitAdd(serial)
            const pptl = ["https://i.pinimg.com/564x/b2/84/55/b2845599d303a4f8fc4f7d2a576799fa.jpg","https://i.pinimg.com/236x/98/08/1c/98081c4dffde1c89c444db4dc1912d2d.jpg","https://i.pinimg.com/236x/a7/e2/fe/a7e2fee8b0abef9d9ecc8885557a4e91.jpg","https://i.pinimg.com/236x/ee/ae/76/eeae769648dfaa18cac66f1d0be8c160.jpg","https://i.pinimg.com/236x/b2/84/55/b2845599d303a4f8fc4f7d2a576799fa.jpg","https://i.pinimg.com/564x/78/7c/49/787c4924083a9424a900e8f1f4fdf05f.jpg","https://i.pinimg.com/236x/eb/05/dc/eb05dc1c306f69dd43b7cae7cbe03d27.jpg","https://i.pinimg.com/236x/d0/1b/40/d01b40691c68b84489f938b939a13871.jpg","https://i.pinimg.com/236x/31/f3/06/31f3065fa218856d7650e84b000d98ab.jpg","https://i.pinimg.com/236x/4a/e5/06/4ae5061a5c594d3fdf193544697ba081.jpg","https://i.pinimg.com/236x/56/45/dc/5645dc4a4a60ac5b2320ce63c8233d6a.jpg","https://i.pinimg.com/236x/7f/ad/82/7fad82eec0fa64a41728c9868a608e73.jpg","https://i.pinimg.com/236x/ce/f8/aa/cef8aa0c963170540a96406b6e54991c.jpg","https://i.pinimg.com/236x/77/02/34/77023447b040aef001b971e0defc73e3.jpg","https://i.pinimg.com/236x/4a/5c/38/4a5c38d39687f76004a097011ae44c7d.jpg","https://i.pinimg.com/236x/41/72/af/4172af2053e54ec6de5e221e884ab91b.jpg","https://i.pinimg.com/236x/26/63/ef/2663ef4d4ecfc935a6a2b51364f80c2b.jpg","https://i.pinimg.com/236x/2b/cb/48/2bcb487b6d398e8030814c7a6c5a641d.jpg","https://i.pinimg.com/236x/62/da/23/62da234d941080696428e6d4deec6d73.jpg","https://i.pinimg.com/236x/d4/f3/40/d4f340e614cc4f69bf9a31036e3d03c5.jpg","https://i.pinimg.com/236x/d4/97/dd/d497dd29ca202be46111f1d9e62ffa65.jpg","https://i.pinimg.com/564x/52/35/66/523566d43058e26bf23150ac064cfdaa.jpg","https://i.pinimg.com/236x/36/e5/27/36e52782f8d10e4f97ec4dbbc97b7e67.jpg","https://i.pinimg.com/236x/02/a0/33/02a033625cb51e0c878e6df2d8d00643.jpg","https://i.pinimg.com/236x/30/9b/04/309b04d4a498addc6e4dd9d9cdfa57a9.jpg","https://i.pinimg.com/236x/9e/1d/ef/9e1def3b7ce4084b7c64693f15b8bea9.jpg","https://i.pinimg.com/236x/e1/8f/a2/e18fa21af74c28e439f1eb4c60e5858a.jpg","https://i.pinimg.com/236x/22/d9/22/22d9220de8619001fe1b27a2211d477e.jpg","https://i.pinimg.com/236x/af/ac/4d/afac4d11679184f557d9294c2270552d.jpg","https://i.pinimg.com/564x/52/be/c9/52bec924b5bdc0d761cfb1160865b5a1.jpg","https://i.pinimg.com/236x/1a/5a/3c/1a5a3cffd0d936cd4969028668530a15.jpg"]
            let pep = pptl[Math.floor(Math.random() * pptl.length)]
            zama.sendFileFromUrl(self, pep, 'pptl.jpg', 'Follow ig : https://www.instagram.com/ptl_repost untuk mendapatkan penyegar timeline lebih banyak', message.id)
            break
        case `${prefix}neko`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
            if (!isGroupMsg) return zama.reply(self, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            if (isLimit(serial)) return zama.reply(self, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik #limit Untuk Mengecek Kuota Limit Kamu`, id)

            await limitAdd(serial)
            q2 = Math.floor(Math.random() * 900) + 300;
            q3 = Math.floor(Math.random() * 900) + 300;
            zama.sendFileFromUrl(self, 'http://placekitten.com/'+q3+'/'+q2, 'neko.png','Neko ')
            break
        case `${prefix}pokemon`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
            if (!isGroupMsg) return zama.reply(self, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            if (isLimit(serial)) return zama.reply(self, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik #limit Untuk Mengecek Kuota Limit Kamu`, id)

            await limitAdd(serial)
            q7 = Math.floor(Math.random() * 890) + 1;
            zama.sendFileFromUrl(self, 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/'+q7+'.png','Pokemon.png', id)
            break
        case `${prefix}quote`:
        case `${prefix}quotes`:
            if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
            if (!isGroupMsg) return zama.reply(self, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (isLimit(serial)) return zama.reply(self, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            const quotez2 = await axios.get('https://tobz-api.herokuapp.com/api/randomquotes?apikey=' + tobzkey)
            zama.reply(self, `➸ *Quotes* : ${quotez2.data.quotes}\n➸ *Author* : ${quotez2.data.author}`, id)
            await limitAdd(serial)
            break
        case `${prefix}lirik`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
            if (!isGroupMsg) return zama.reply(self, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            if (isLimit(serial)) return zama.reply(self, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik #limit Untuk Mengecek Kuota Limit Kamu`, id)

            await limitAdd(serial)
            if (args.length == 1) return zama.reply(self, `Kirim perintah *#lirik [optional]*, contoh *#lirik aku bukan boneka*`, id)
            const lagu = body.slice(7)
            const lirik = await liriklagu(lagu)
            zama.reply(self, lirik, id)
            break
        case `${prefix}chord`:
            if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
            if (!isGroupMsg) return zama.reply(self, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (isLimit(serial)) return zama.reply(self, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            if (args.length === 1) return zama.reply(self, 'Kirim perintah *#chord [query]*, contoh *#chord aku bukan boneka*', id)
            const query__ = body.slice(7)
            const chord = await axios.get('https://tobz-api.herokuapp.com/api/chord?q='+ query__+'&apikey='+tobzkey)
            if (chord.data.error) return zama.reply(self, chord.data.error, id)
            zama.reply(self, chord.data.result, id)
            await limitAdd(serial)
            break
        case `${prefix}listdaerah`:
            if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
            if (!isGroupMsg) return zama.reply(self, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            const listDaerah = await axios.get('https://tobz-api.herokuapp.com/api/daerah?apikey='+tobzkey)
            zama.reply(self, listDaerah.data.result, id)
            await limitAdd(serial)
            break
        // ADMIN & OWNER
        case `${prefix}bc`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id) // KASIH CREDIT DONG KALO COPAS
            if (!isOwner) return zama.reply(self, `Perintah ini hanya untuk Owner Zam`, id)
                bctxt = body.slice(4)
                txtbc = `*「 Z BROADCAST 」*\n\n${bctxt}`
                const semuagrup = await zama.getAllChatIds();
                if(quotedMsg && quotedMsg.type == 'image'){
                    const mediaData = await decryptMedia(quotedMsg)
                    const imageBase64 = `data:${quotedMsg.mimetype};base64,${mediaData.toString('base64')}`
                    for(let grupnya of semuagrup){
                        var cekgrup = await zama.getChatById(grupnya)
                        if(!cekgrup.isReadOnly) zama.sendImage(grupnya, imageBase64, 'gambar.jpeg', txtbc)
                    }
                    zama.reply('Broadcast sukses!')
                }else{
                    for(let grupnya of semuagrup){
                        var cekgrup = await zama.getChatById(grupnya)
                        if(!cekgrup.isReadOnly && isMuted(grupnya)) zama.sendText(grupnya, txtbc)
                    }
                            zama.reply('Broadcast Success!')
                }
                break
        case `${prefix}adminlist`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
            if (!isGroupMsg) return zama.reply(self, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            let mimin = ''
            for (let admon of groupAdmins) {
                mimin += `➸ @${admon.replace(/@c.us/g, '')}\n`
            }
            await sleep(2000)
            await zama.sendTextWithMentions(self, mimin)
            break
        case `${prefix}ownergroup`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
            if (!isGroupMsg) return zama.reply(self, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            const Owner_ = chat.groupMetadata.owner
            await zama.sendTextWithMentions(self, `Owner Group : @${Owner_}`)
            break
        case `${prefix}otagall`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id) // FOR OWNER & admin Zam
        case `${prefix}omentionall`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
            if (!isGroupMsg) return zama.reply(self, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            if (!isOwner, !isAdmin) return zama.reply(self, `Perintah ini hanya untuk Owner Zam`, id)
            const groupMek = await zama.getGroupMembers(groupId)
            let heho = '╔══✪〘 Mention All 〙✪══\n'
            for (let i = 0; i < groupMek.length; i++) {
                heho += '╠➥'
                heho += ` @${groupMek[i].id.replace(/@c.us/g, '')}\n`
            }
            heho += '╚═〘 Zam 〙'
            await sleep(2000)
            await zama.sendTextWithMentions(self, heho)
            break
        case `${prefix}tagall`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id) // FOR GROUP ADMINS
        case `${prefix}mentionall`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
            if (!isGroupMsg) return zama.reply(self, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            if (!isGroupAdmins) return zama.reply(self, `Perintah ini hanya bisa di gunakan oleh admin group`, id)
            const groupMem = await zama.getGroupMembers(groupId)
            let hehe = '╔══✪〘 Mention All 〙✪══\n'
            for (let i = 0; i < groupMem.length; i++) {
                hehe += '╠➥'
                hehe += ` @${groupMem[i].id.replace(/@c.us/g, '')}\n`
            }
            hehe += '╚═〘 Zam 〙'
            await sleep(2000)
            await zama.sendTextWithMentions(self, hehe)
            break
        case `${prefix}ekickall`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
            if (!isGroupMsg) return zama.reply(self, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            if (!isOwner) return zama.reply(self, `Perintah ini hanya untuk Owner Zam`, id)
            if (!isBotGroupAdmins) return zama.reply(self, `Perintah ini hanya bisa di gunakan ketika bot menjadi admin`, id)
            const allMem = await zama.getGroupMembers(groupId)
            for (let i = 0; i < allMem.length; i++) {
                if (ownerNumber.includes(allMem[i].id)) {
                    console.log('Upss this is Admin group')
                } else {
                    await zama.removeParticipant(groupId, allMem[i].id)
                }
            }
            zama.reply(self, `Success kick all member`, id)
            break
        case `${prefix}okickall`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
            if (!isGroupMsg) return zama.reply(self, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            if (!isOwner) return zama.reply(self, `Perintah ini hanya untuk Admin Zam`, id)
            if (!isBotGroupAdmins) return zama.reply(self, `Perintah ini hanya bisa di gunakan ketika bot menjadi admin`, id)
            const allMeq = await zama.getGroupMembers(groupId)
            for (let i = 0; i < allMeq.length; i++) {
                if ((adminNumber, ownerNumber).includes(allMeq[i].id)) {
                    console.log('Upss this is Admin group')
                } else {
                    await zama.removeParticipant(groupId, allMeq[i].id)
                }
            }
            zama.reply(self, `Succes kick all member`, id)
            break
        case `${prefix}kickall`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
            if (!isGroupMsg) return zama.reply(self, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            const isGroupOwner = sender.id === chat.groupMetadata.owner
            if (!isGroupOwner) return zama.reply(self, `Perintah ini hanya bisa di gunakan oleh Owner group`, id)
            if (!isBotGroupAdmins) return zama.reply(self, `Perintah ini hanya bisa di gunakan ketika bot menjadi admin`, id)
            const allMek = await zama.getGroupMembers(groupId)
            for (let i = 0; i < allMek.length; i++) {
                if ((adminNumber, ownerNumber).includes(allMek[i].id)) {
                    console.log('Upss this is Admin group')
                } else {
                    await zama.removeParticipant(groupId, allMek[i].id)
                }
            }
            zama.reply(self, `Success kick all member`, id)
            break
        case `${prefix}leaveall`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
            if (!isOwner) return zama.reply(self, `Perintah ini hanya untuk Owner Zam`, id)
            const allChats = await zama.getAllChatIds()
            const allGroups = await zama.getAllGroups()
            for (let gclist of allGroups) {
                await zama.sendText(gclist.contact.id, `Maaf bot sedang pembersihan, total chat aktif : ${allChats.length}`)
                await zama.leaveGroup(gclist.contact.id)
            }
            zama.reply(self, `Succes leave all group!`, id)
            break
        case `${prefix}clearall`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
            if (!isOwner) return zama.reply(self, `Perintah ini hanya untuk Owner Zam`, id)
            const allChatz = await zama.getAllChats()
            for (let dchat of allChatz) {
                await zama.deleteChat(dchat.id)
            }
            zama.reply(self, `Succes clear all chat!`, id)
            break
        case `${prefix}oadd`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
            const orang = args[1]
            if (!isGroupMsg) return zama.reply(self, `Fitur ini hanya bisa di gunakan dalam group`, id)
            if (args.length === 1) return zama.reply(self, `Untuk menggunakan fitur ini, kirim perintah *#add* 628xxxxx`, id)
            if (!isOwner, !isAdmin) return zama.reply(self, `Perintah ini hanya untuk Admin Zam`, id)
            if (!isBotGroupAdmins) return zama.reply(self, `Perintah ini hanya bisa di gunakan ketika bot menjadi admin`, id)
            try {
                await zama.addParticipant(self,`${orang}@c.us`)
            } catch {
                zama.reply(self, mess.error.Ad, id)
            }
            break
        case `${prefix}add`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
            const orgh = body.slice(5)
            if (!isGroupMsg) return zama.reply(self, `Fitur ini hanya bisa di gunakan dalam group`, id)
            if (args.length === 1) return zama.reply(self, `Untuk menggunakan fitur ini, kirim perintah *#add* 628xxxxx`, id)
            if (!isGroupAdmins) return zama.reply(self, `Perintah ini hanya bisa di gunakan oleh admin group`, id)
            if (!isBotGroupAdmins) return zama.reply(self, `Perintah ini hanya bisa di gunakan ketika bot menjadi admin`, id)
            try {
                await zama.addParticipant(self,`${orgh}@c.us`)
            } catch {
                zama.reply(self, mess.error.Ad, id)
            }
            break

        case `${prefix}okick`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
            if (!isGroupMsg) return zama.reply(self, `Perintah ini hanya bisa di gunakan dalam group`, id)
            if (!isOwner) return zama.reply(self, `Perintah ini hanya untuk Owner Zam`, id)
            if (!isBotGroupAdmins) return zama.reply(self, `Perintah ini hanya bisa di gunakan ketika bot menjadi admin`, id)
            if (mentionedJidList.length === 0) return zama.reply(self, `Untuk menggunakan Perintah ini, kirim perintah *#okick* @tagmember`, id)
            await zama.sendText(self, `Perintah Owner diterima, mengeluarkan:\n${mentionedJidList.join('\n')}`)
            for (let i = 0; i < mentionedJidList.length; i++) {
                if ((adminNumber, ownerNumber).includes(mentionedJidList[i])) return zama.reply(self, mess.error.Sp, id)
                await zama.removeParticipant(groupId, mentionedJidList[i])
            }
            break
        case `${prefix}kick`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
            if (!isGroupMsg) return zama.reply(self, `Fitur ini hanya bisa di gunakan dalam group`, id)
            if (!isGroupAdmins) return zama.reply(self, `Perintah ini hanya bisa di gunakan oleh admin group`, id)
            if (!isBotGroupAdmins) return zama.reply(self, `Perintah ini hanya bisa di gunakan ketika bot menjadi admin`, id)

            if (quotedMsg){
            var qmid = quotedMsgObj.sender.id
            await zama.sendTextWithMentions(self, `Perintah diterima, mengeluarkan:\n@${qmid.replace("@c.us","")}`)
            await zama.removeParticipant(groupId, qmid)
        }
        else if (!quotedMsg){
            if (mentionedJidList.length === 0) return zama.reply(self, `Untuk menggunakan Perintah ini, kirim perintah *#kick* @tagmember`, id)
                await zama.sendText(self, `Perintah diterima, mengeluarkan:\n${mentionedJidList.join('\n')}`)
            for (let i = 0; i < mentionedJidList.length; i++) {
                if ((adminNumber, groupAdmins).includes(mentionedJidList[i])) return zama.reply(self, mess.error.Sp, id)
                await zama.removeParticipant(groupId, mentionedJidList[i])
            }}
            break
        case `${prefix}oleave`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
            if (!isGroupMsg) return zama.reply(self, `Perintah ini hanya bisa di gunakan dalam group`, id)
            if (!isOwner, !isAdmin) return zama.reply(self, `Perintah ini hanya untuk Admin Zam`, id)
            await zama.sendText(self,'Z DIPERINTAHKAN KELUAR OLEH OWNER!!').then(() => zama.leaveGroup(groupId))
            break
        case `${prefix}leave`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
            if (!isGroupMsg) return zama.reply(self, `Perintah ini hanya bisa di gunakan dalam group`, id)
            if (!isGroupAdmins) return zama.reply(self, `Perintah ini hanya bisa di gunakan oleh admin group`, id)
            await zama.sendText(self,'Sayonara').then(() => zama.leaveGroup(groupId))
            break
        case `${prefix}opromote`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
            if (!isGroupMsg) return zama.reply(self, `Perintah ini hanya bisa di gunakan dalam group`, id)
            if (!isOwner, !isAdmin) return zama.reply(self, `Perintah ini hanya untuk Admin Zam`, id)
            if (!isBotGroupAdmins) return zama.reply(self, `Fitur ini hanya bisa di gunakan ketika bot menjadi admin`, id)
            if (mentionedJidList.length === 0) return zama.reply(self, `Untuk menggunakan fitur ini, kirim perintah *#promote* @tagmember`, id)
            if (mentionedJidList.length >= 2) return zama.reply(self, `Maaf, perintah ini hanya dapat digunakan kepada 1 user.`, id)
            if (groupAdmins.includes(mentionedJidList[0])) return zama.reply(self, `Maaf, user tersebut sudah menjadi admin.`, id)
            await zama.promoteParticipant(groupId, mentionedJidList[0])
            await zama.sendTextWithMentions(self, `Perintah Owner diterima, menambahkan @${mentionedJidList[0]} sebagai admin.`)
            break
        case `${prefix}promote`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
            if (!isGroupMsg) return zama.reply(self, `Fitur ini hanya bisa di gunakan dalam group`, id)
            if (!isGroupAdmins) return zama.reply(self, `Fitur ini hanya bisa di gunakan oleh admin group`, id)
            if (!isBotGroupAdmins) return zama.reply(self, `Fitur ini hanya bisa di gunakan ketika bot menjadi admin`, id)
            if (mentionedJidList.length === 0) return zama.reply(self, `Untuk menggunakan fitur ini, kirim perintah *#promote* @tagmember`, id)
            if (mentionedJidList.length >= 2) return zama.reply(self, `Maaf, perintah ini hanya dapat digunakan kepada 1 user.`, id)
            if (groupAdmins.includes(mentionedJidList[0])) return zama.reply(self, `Maaf, user tersebut sudah menjadi admin.`, id)
            await zama.promoteParticipant(groupId, mentionedJidList[0])
            await zama.sendTextWithMentions(self, `Perintah diterima, menambahkan @${mentionedJidList[0]} sebagai admin.`)
            break
        case `${prefix}odemote`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
            if (!isGroupMsg) return zama.reply(self, `Perintah ini hanya bisa di gunakan dalam group`, id)
            if (!isOwner, !isAdmin) return zama.reply(self, `Perintah ini hanya untuk Admin Zam`, id)
            if (!isBotGroupAdmins) return zama.reply(self, `Fitur ini hanya bisa di gunakan ketika bot menjadi admin`, id)
            if (mentionedJidList.length === 0) return zama.reply(self, `Untuk menggunakan fitur ini, kirim perintah *#demote* @tagadmin`, id)
            if (mentionedJidList.length >= 2) return zama.reply(self, `Maaf, perintah ini hanya dapat digunakan kepada 1 orang.`, id)
            if (!groupAdmins.includes(mentionedJidList[0])) return zama.reply(self, `Maaf, user tersebut tidak menjadi admin.`, id)
            await zama.demoteParticipant(groupId, mentionedJidList[0])
            await zama.sendTextWithMentions(self, `Perintah Owner diterima, menghapus jabatan @${mentionedJidList[0]}.`)
            break
        case `${prefix}demote`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
            if (!isGroupMsg) return zama.reply(self, `Fitur ini hanya bisa di gunakan dalam group`, id)
            if (!isGroupAdmins) return zama.reply(self, `Fitur ini hanya bisa di gunakan oleh admin group`, id)
            if (!isBotGroupAdmins) return zama.reply(self, `Fitur ini hanya bisa di gunakan ketika bot menjadi admin`, id)
            if (mentionedJidList.length === 0) return zama.reply(self, `Untuk menggunakan fitur ini, kirim perintah *#demote* @tagadmin`, id)
            if (mentionedJidList.length >= 2) return zama.reply(self, `Maaf, perintah ini hanya dapat digunakan kepada 1 orang.`, id)
            if (!groupAdmins.includes(mentionedJidList[0])) return zama.reply(self, `Maaf, user tersebut tidak menjadi admin.`, id)
            await zama.demoteParticipant(groupId, mentionedJidList[0])
            await zama.sendTextWithMentions(self, `Perintah diterima, menghapus jabatan @${mentionedJidList[0]}.`)
            break
        case `${prefix}join`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
            if (args.length === 1) return zama.reply(self, `Hanya Owner yang bisa memasukan Bot ke dalam Grup!`, id)
            if (!isOwner) return zama.reply(self, `Perintah ini hanya untuk Owner Zam`, id)
            const link = body.slice(6)
            const tGr = await zama.getAllGroups()
            const minMem = 5
            const isLink = link.match(/(https:\/\/chat.whatsapp.com)/gi)
            const check = await zama.inviteInfo(link)
            if (!isLink) return zama.reply(self, `Ini link? 👊🤬`, id)
            if (tGr.length > 256) return zama.reply(self, `Maaf jumlah group sudah maksimal!`, id)
            if (check.size < minMem) return zama.reply(self, `Member group tidak melebihi 5, bot tidak bisa masuk`, id)
            if (check.status === 200) {
                await zama.joinGroupViaLink(link).then(() => zama.reply(self, `Bot akan segera masuk!`))
            } else {
                zama.reply(self, `Link group tidak valid!`, id)
            }
            break
        case `${prefix}odelete`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
            if (!isGroupMsg) return zama.reply(self, `Perintah ini hanya bisa di gunakan dalam group`, id)
            if (!isOwner, !isAdmin) return zama.reply(self, `Perintah ini hanya untuk Admin Zam`, id)
            if (!quotedMsg) return zama.reply(self, `Salah!!, kirim perintah *#delete [tagpesanbot]*`, id)
            if (!quotedMsgObj.fromMe) return zama.reply(self, `Salah!!, Bot tidak bisa mengahpus chat user lain!`, id)
            zama.deleteMessage(quotedMsgObj.chatId, quotedMsgObj.id, false)
            break
        case `${prefix}delete`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
            if (!isGroupMsg) return zama.reply(self, `Fitur ini hanya bisa di gunakan dalam group`, id)
            if (!isGroupAdmins) return zama.reply(self, `Fitur ini hanya bisa di gunakan oleh admin group`, id)
            if (!quotedMsg) return zama.reply(self, `Salah!!, kirim perintah *#delete [tagpesanbot]*`, id)
            if (!quotedMsgObj.fromMe) return zama.reply(self, `Salah!!, Bot tidak bisa mengahpus chat user lain!`, id)
            zama.deleteMessage(quotedMsgObj.chatId, quotedMsgObj.id, false)
            break
        case `${prefix}getses`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
            if (!isOwner) return zama.reply(self, `Perintah ini hanya untuk Owner Zam`, id)
            const sesPic = await zama.getSnapshot()
            zama.sendFile(self, sesPic, 'session.png', 'Nih boss', id)
            break
        case `${prefix}zamadmin`:
        case `${prefix}botadmin`:
        case `${prefix}adminbot`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
            let admn = `This is list of Z Admin\nTotal : ${adminNumber.length}\n`
            for (let i of adminNumber) {
                admn += `➸ @${i.replace(/@c.us/g,'')}\n`
            }
            await zama.sendTextWithMentions(self, admn, id)
            break
        case `${prefix}limit`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
            var found = false
            const limidat = JSON.parse(fs.readFileSync('./lib/database/limit.json'))
            for(let lmt of limidat){
                if(lmt.id === serial){
                    let limitCounts = limitCount-lmt.limit
                    if(limitCounts <= 0) return zama.reply(self, `Limit request anda sudah habis\n\n_Note : Limit akan direset setiap jam 21:00!_`, id)
                    zama.reply(self, `Sisa limit request anda tersisa : *${limitCounts}*\n\n_Note : Limit akan direset setiap jam 21:00!_`, id)
                    found = true
                }
            }
            console.log(limit)
            console.log(limidat)
            if (found === false){
                let obj = {id: `${serial}`, limit:1};
                limit.push(obj);
                fs.writeFileSync('./lib/database/limit.json',JSON.stringify(limit, 1));
                zama.reply(self, `Sisa limit request anda tersisa : *${limitCount}*\n\n_Note : Limit akan direset setiap jam 21:00!_`, id)
            }
            break
        case `${prefix}eval`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
            const q = args.join(' ')
            if (!isOwner) return zama.reply(self, `Perintah ini hanya bisa di gunakan oleh Owner Zam!`, id)
            if (!q) return zama.reply(self, `Harap masukkan code JavaScript!`, id)
            try {
                let evaled = await eval(q)
                if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                zama.sendText(self, evaled)
            } catch (err) {
                zama.reply(self, err, id)
            }
        break
        case `${prefix}restart`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id) // WORK IF YOU RUN USING PM2
            if(isOwner){
                zama.sendText(self, `*[WARN]* Restarting ...`)
                setting.restartState = true
                setting.restartId = chatId
                var obj = []
                //fs.writeFileSync('./lib/setting.json', JSON.stringify(obj, null,2));
                fs.writeFileSync('./lib/database/limit.json', JSON.stringify(obj));
                fs.writeFileSync('./lib/database/muted.json', JSON.stringify(obj));
                fs.writeFileSync('./lib/database/msgLimit.json', JSON.stringify(obj));
                fs.writeFileSync('./lib/database/banned.json', JSON.stringify(obj));
                fs.writeFileSync('./lib/database/welcome.json', JSON.stringify(obj));
                fs.writeFileSync('./lib/database/left.json', JSON.stringify(obj));
                fs.writeFileSync('./lib/database/Simsimi.json', JSON.stringify(obj));
                fs.writeFileSync('./lib/database/nsfwz.json', JSON.stringify(obj));
                const spawn = require('child_process').exec;
                function os_func() {
                    this.execCommand = function (command) {
                        return new Promise((resolve, reject)=> {
                        spawn(command, (error, stdout, stderr) => {
                            if (error) {
                                reject(error);
                                return;
                            }
                            resolve(stdout)
                        });
                    })
                }}
                var oz = new os_func();
                oz.execCommand('pm2 restart index').then(res=> {
                }).catch(err=> {
                    console.log("os >>>", err);
                })
            }
            break
        case `${prefix}addadmin`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
            if (!isOwner) return zama.reply(self, `Perintah ini hanya bisa di gunakan oleh Owner Zam!`, id)
                for (let i = 0; i < mentionedJidList.length; i++) {
                adminNumber.push(mentionedJidList[i])
                fs.writeFileSync('./lib/database/admin.json', JSON.stringify(adminNumber))
                zama.reply(self, `Success Menambahkan admin Zam!`, id)
                }
            break
        case `${prefix}deladmin`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
            if (!isOwner) return zama.reply(self, `Perintah ini hanya bisa di gunakan oleh Owner Zam!`, id)
                let inq = adminNumber.indexOf(mentionedJidList[0])
                adminNumber.splice(inq, 1)
                fs.writeFileSync('./lib/database/admin.json', JSON.stringify(adminNumber))
                zama.reply(self, `Success Menghapus admin Zam!`, id)
            break
        case `${prefix}block`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
            if (!isOwner) return zama.reply(self, `Perintah ini hanya bisa di gunakan oleh Owner Zam!`, id)
            for (let i = 0; i < mentionedJidList.length; i++) {
                let unblock = `${mentionedJidList[i]}`
                await zama.contactBlock(unblock).then((a)=>{
                    console.log(a)
                    zama.reply(self, `Success block ${args[1]}!`, id)
                })
            }
            break
        case `${prefix}unblock`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
            if (!isOwner) return zama.reply(self, `Perintah ini hanya bisa di gunakan oleh Owner Zam!`, id)
            for (let i = 0; i < mentionedJidList.length; i++) {
                let unblock = `${mentionedJidList[i]}`
                await zama.contactUnblock(unblock).then((a)=>{
                    console.log(a)
                    zama.reply(self, `Success unblok ${args[1]}!`, id)
                })
            }
            break

        case `${prefix}ban`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
            if (!isAdmin) return zama.reply(self, `Perintah ini hanya bisa di gunakan oleh admin Zam!`, id)
            for (let i = 0; i < mentionedJidList.length; i++) {
                if ((adminNumber).includes(mentionedJidList[i])) return zama.reply(self,`Maaf ${pushname}, Kamu tidak bisa banned admin Zam!`, id)
                banned.push(mentionedJidList[i])
                fs.writeFileSync('./lib/banned.json', JSON.stringify(banned))
                zama.reply(self, `Succes ban target!`,id)
            }
            break
        case `${prefix}unban`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
            if (!isAdmin) return zama.reply(self, `Perintah ini hanya bisa di gunakan oleh admin Zam!`, id)
                let inz = banned.indexOf(mentionedJidList[0])
                banned.splice(inz, 1)
                fs.writeFileSync('./lib/database/banned.json', JSON.stringify(banned))
                zama.reply(self, `Unbanned User!`, id)
            break
        case `${prefix}listgroup`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
                zama.getAllGroups().then((res) => {
                let berhitung1 = 1
                let gc = `*This is list of group* :\n`
                for (let i = 0; i < res.length; i++) {
                    gc += `\n═════════════════\n\n*No : ${i+1}*\n*Nama* : ${res[i].name}\n*Pesan Belum Dibaca* : ${res[i].unreadCount} chat\n*Tidak Spam* : ${res[i].notSpam}\n`
                }
                zama.reply(self, gc, id)
            })
            break
        case `${prefix}listbanned`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
            let bened = `This is list of banned number\nTotal : ${banned.length}\n`
            for (let i of banned) {
                bened += `➸ ${i.replace(/@c.us/g,'')}\n`
            }
            await zama.reply(self, bened, id)
            break
        case `${prefix}listblock`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
            let hih = `This is list of blocked number\nTotal : ${blockNumber.length}\n`
            for (let i of blockNumber) {
                hih += `➸ ${i.replace(/@c.us/g,'')}\n`
            }
            await zama.reply(self, hih, id)
            break
        case `${prefix}ping`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
        case `${prefix}speed`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
            const loadedMsg = await zama.getAmountOfLoadedMessages()
            const chatIds = await zama.getAllChatIds()
            const groups = await zama.getAllGroups()
            const me = await zama.getMe()
            const battery = await zama.getBatteryLevel()
            const isCharging = await zama.getIsPlugged()
            await zama.reply(self, `Penggunaan RAM: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB\n_CPU:_ ${os.cpus()[0].model}\n\nStatus :\n- ${loadedMsg} Loaded Messages\n- ${groups.length} Group Chats\n- ${chatIds.length - groups.length} Personal Chats\n- ${chatIds.length} Total Chats\n\n*Status HP Bot*\n${(`\n*Battery :* ${battery}% ${isCharging ? 'Charging...' : 'No Charging!'}\n${Object.keys(me.phone).map(key => `${key} : ${me.phone[key]}`).join('\n')}`.slice(1, -1))}\n\n\n*Speed:* ${latensi.toFixed(4)} _Second_`, id)
            break
        case `${prefix}setgroupicon`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
            if (!isGroupMsg) return zama.reply(self, `Fitur ini hanya bisa di gunakan dalam group`, id)
            if (!isGroupAdmins) return zama.reply(self, `Fitur ini hanya bisa di gunakan oleh admin group`, id)
            if (!isBotGroupAdmins) return zama.reply(self, `Fitur ini hanya bisa di gunakan ketika bot menjadi admin`, id)
            if (isMedia) {
                const mediaData = await decryptMedia(message)
                const imageBase64 = `data:${mimetype};base64,${mediaData.toString('base64')}`
                await zama.setGroupIcon(self, imageBase64)
                zama.sendTextWithMentions(self, `Profile group telah diubah oleh admin @${sender.id.replace('@c.us','')}`)
            } else if (quotedMsg && quotedMsg.type == 'image') {
                const mediaData = await decryptMedia(quotedMsg)
                const imageBase64 = `data:${quotedMsg.mimetype};base64,${mediaData.toString('base64')}`
                await zama.setGroupIcon(self, imageBase64)
                zama.sendTextWithMentions(self, `Profile group telah diubah oleh admin @${sender.id.replace('@c.us','')}`)
            } else {
                zama.reply(self, `Wrong Format!\n⚠️ Harap Kirim Gambar Dengan #setgroupicon`, id)
            }
            break
        case `${prefix}bugreport`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
            if (args.length === 1) return zama.reply(self, `[❗] Kirim perintah *#bugreport [teks]*\ncontoh : *#bugreport Permisi Owner, Ada bug pada command #otakudesu, Tolong diperbaiki*`)
            const bug = body.slice(11)
            if(!bug) return
            if(isGroupMsg){
                zama.sendText(ownerNumber, `*[BUG REPORT]*\n*WAKTU* : ${time}\nNO PENGIRIM : wa.me/${sender.id.match(/\d+/g)}\nGroup : ${formattedTitle}\n\n${bug}`)
                zama.reply(self, `Masalah telah di laporkan ke owner BOT, laporan palsu/main2 tidak akan ditanggapi.` ,id)
            }else{
                zama.sendText(ownerNumber, `*[BUG REPORT]*\n*WAKTU* : ${time}\nNO PENGIRIM : wa.me/${sender.id.match(/\d+/g)}\n\n${bug}`)
                zama.reply(self, `Masalah telah di laporkan ke owner BOT, laporan palsu/main2 tidak akan ditanggapi.`, id)
            }
            break
         case `${prefix}profile`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
            if (isBanned, isBlocked) return false
            if (isGroupMsg) {
                if (!quotedMsg) {
                var block = blockNumber.includes(author)
                var bend = banned.includes(author)
                var pic = await zama.getProfilePicFromServer(author)
                var namae = pushname
                var sts = await zama.getStatus(author)
                var adm = isGroupAdmins
                var donate = isAdmin
                const { status } = sts
                if (pic == undefined) {
                    var pfp = errorurl
                } else {
                    var pfp = pic
                }
                await zama.sendFileFromUrl(self, pfp, 'pfp.jpg', `*User Profile* ✨️ \n\n➸ *Username: ${namae}*\n\n➸ *User Info: ${status}*\n\n*➸ Block : ${block}*\n\n*➸ Banned : ${bend}*\n\n➸ *Admin Group: ${adm}*\n\n➸ *admin Zam: ${donate}*`)
             } else if (quotedMsg) {
             var qmid = quotedMsgObj.sender.id
             var block = blockNumber.includes(qmid)
             var bend = banned.includes(author)
             var pic = await zama.getProfilePicFromServer(qmid)
             var namae = quotedMsgObj.sender.name
             var sts = await zama.getStatus(qmid)
             var adm = isGroupAdmins
             var donate = isAdmin
             const { status } = sts
              if (pic == undefined) {
              var pfp = errorurl
              } else {
              var pfp = pic
              }
              await zama.sendFileFromUrl(self, pfp, 'pfp.jpg', `*User Profile* ✨️ \n\n➸ *Username: ${namae}*\n\n➸ *User Info: ${status}*\n\n*➸ Block : ${block}*\n\n*➸ Banned : ${bend}*\n\n➸ *Admin Group: ${adm}*\n\n➸ *admin Zam: ${donate}*`)
             }
            }
            break
        // LIST MENU
        /*case `${prefix}menu`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
            zama.sendText(self, menu)
            break*/
        case `${prefix}zamgroup`:
        case `${prefix}botgroup`:
        case `${prefix}groupbot`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
            zama.reply(self, `Link Group Z : https://chat.whatsapp.com/LDhWuaF3Q8cIRuOFgMfzYP\nJangan Lupa Join Ya Kak ${pushname}`, id)
            break
        case `${prefix}groupmenu`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
            zama.sendText(self, groupcmd)
            break
        case `${prefix}mediamenu`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
            zama.sendText(self, mediacmd)
            break
        case `${prefix}animemenu`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
            zama.sendText(self, animecmd)
            break
        case `${prefix}premiummenu`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
        if (!isprem) return zama.reply(self, `Fitur *Premium* belum diaktifkan`)
            zama.sendText(self, premiumcmd)
            break
        case `${prefix}kerangmenu`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
            zama.sendText(self, kerangcmd)
            break
        case `${prefix}adminbanmenu`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
        if (!isAdminban) return zama.reply(self, `Perintah ini hanya bisa dilakukan oleh Adminban Z`, id)
            zama.sendText(self, adminbancmd)
            break
        case `${prefix}downloadmenu`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
            zama.sendText(self, downloadcmd)
            break
        case `${prefix}creatormenu`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
            zama.sendText(self, othercmd)
            break
        case `${prefix}iklan`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
            zama.sendText(self, sewa)
            break
        case `${prefix}help`:
        case `${prefix}menu`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
            zama.reply(self, `
╭────────────────────────
│───「 *INFORMATION* 」──
│────────────────────────
│> Self-ZAM
│> 3.0
│> ${regisNumber.length} User Terverifikasi
│────────────────────────
│───「 *USER INFO* 」────
│────────────────────────
│> *Username* : *${pushname}*
│> *Level*         : *${userLevel}*
│> *Xp*             : *${userXp}*
│> *Speed*       : _${latensi.toFixed(4)} Ms_
│> *Link Wa*    : *wa.me/${sender.id.replace("@c.us","")}*
│────────────────────────
│───「 *LIST MENU* 」────
│────────────────────────
│> *${prefix}ownermenu*
│> *${prefix}adminmenu*
│> *${prefix}groupmenu*
│> *${prefix}praymenu*
│> *${prefix}nsfwmenu*
│> *${prefix}mediamenu*
│> *${prefix}animemenu*
│> *${prefix}kerangmenu*
│> *${prefix}downloadmenu*
│> *${prefix}creatormenu*
│────────────────────────
│───「 *OTHER* 」────────
│────────────────────────
│> *${prefix}bugreport [teks]*
│> *${prefix}listblock*
│> *${prefix}listbanned*
│> *${prefix}listgroup*
│> *${prefix}iklan*
│> *${prefix}info*
│> *${prefix}limit*
│> *${prefix}snk*
│> *${prefix}readme*
│> *${prefix}donate*
│> *${prefix}ping*
│> *${prefix}botgroup*
│> *${prefix}botadmin*
│> *${prefix}owner*
│────────────────────────
│   「 *Self-BOT* 」
╰────────────────────────
`, id)
            break
        case `${prefix}adminmenu`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
            if (!isAdmin) return zama.reply(self, `Perintah ini hanya untuk Admin Zam`, id)
            zama.sendText(self, admincmd)
            break
        case `${prefix}ownermenu`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
            if (!isOwner) return zama.reply(self, `Perintah ini hanya untuk Owner Zam`, id)
            zama.sendText(self, ownercmd)
            break
        case `${prefix}praymenu`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
            zama.reply(self, praycmd)
            break
        case `${prefix}nsfwmenu`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
            if (!isGroupMsg) return zama.reply(self, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            if (!isNsfw) return zama.reply(self, `command/Perintah NSFW belum di aktifkan di group ini!`, id)
            zama.sendText(self, nsfwcmd)
            break
        // INFORMATION
        case `${prefix}donate`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
            zama.sendText(self, sumbang)
            break
        case `${prefix}readme`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
            zama.reply(self, readme, id)
            break
        case `${prefix}info`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
            zama.sendText(self, info)
            break
        case `${prefix}bahasa`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
            zama.sendText(self, bahasalist)
            break
        case `${prefix}snk`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
            zama.reply(self, snk, id)
            break
        case `${prefix}bp`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
             if (!isGroupMsg) return zama.reply(self, `Perintah ini hanya bisa di gunakan dalam group!`, id)
             const bp = body.slice(4)
            const namaee = pushname
             if (!bp) return zama.reply(self, `Kirim perintah *${prefix}tahta [teks]*\n\nContoh *${prefix}bp Z*`, id)
             if (bp.length > 7) return zama.reply(self, `Maksimal 7 Huruf!`, id)
             zama.sendText(self, `_Sedang diproses, mohon tunggu sebentar!..._`, id)
             await zama.sendFileFromUrl(self, `https://api.vhtear.com/blackpinkicon?text=${bp}&apikey=${vhtearkey}`,`${bp}.jpg`,`AYE AYE ${namaee}`, id)
             break
        case `${prefix}gltext`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
             if (!isGroupMsg) return zama.reply(self, `Perintah ini hanya bisa di gunakan dalam group!`, id)
             const glitch = body.slice(8)
                const word1 = glitch.split('-')[0]
                const word2 = glitch.split('-')[1]
             zama.reply(self, `_Sedang diproses, mohon tunggu sebentar!..._`, id)
             await zama.sendFileFromUrl(self, `https://api.vhtear.com/glitchtext?text1=${word1}&text2=${word2}&apikey=${vhtearkey}`,`glitch.jpg`,`Nih ka ${nma} udah jadi`,id)
             break
        case `${prefix}thunder`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
             if (!isGroupMsg) return zama.reply(self, `Perintah ini hanya bisa di gunakan dalam group!`, id)
             const thunder = body.slice(9)
         const namaewaa = pushname
             if (!thunder) return zama.reply(self, `Kirim perintah *${prefix}thunder [teks]*\n\nContoh *${prefix}thunder Z*`, id)
             zama.sendText(self, `_Sedang diproses, mohon tunggu sebentar!..._`, id)
             await zama.sendFileFromUrl(self, `https://api.vhtear.com/thundertext?text=${thunder}&apikey=${vhtearkey}`,`${thunder}.jpg`,`Nih kak ${namaewaa}`, id)
             break
        case `${prefix}sthunder`:
        const thunders = args.join(' ')
            if (args[1].toLowerCase() == args[1].toLowerCase()){
            const gledek = body.slice(14)
            const thunders = `https://api.vhtear.com/thundertext?text=${args[1]}&apikey=${vhtearkey}`
                    await zama.sendStickerfromUrl(self, thunders, { method: 'get' })
            }
            break
        case `${prefix}phlogo`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
             if (!isGroupMsg) return zama.reply(self, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            const php = body.slice(8)
                const ph1 = php.split('-')[0]
                const ph2 = php.split('-')[1]
             zama.sendText(self, `_Sedang diproses, mohon tunggu sebentar!..._`, id)
             await zama.sendFileFromUrl(self, `https://api.vhtear.com/pornlogo?text1=${ph1}&text2=${ph2}&apikey=${vhtearkey}`,'pornhub.jpg',`Nih kak ${nma} udah jadi`, id)
             break
        case `${prefix}galaxy`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
             if (!isGroupMsg) return zama.reply(self, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            const galaxy = body.slice(8)
             zama.sendText(self, `_Sedang diproses, mohon tunggu sebentar!..._`, id)
             await zama.sendFileFromUrl(self, `https://api.vhtear.com/galaxytext?text=${galaxy}&apikey=${vhtearkey}`,'galaxy.jpg',`Nih kak ${nma} udah jadi`, id)
             break
        case `${prefix}goldplaybutton`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
        if (!isGroupMsg) return zama.reply(self, `Perintah ini hanya bisa di gunakan dalam group!`, id)
        const goldp = body.slice(15)
        zama.sendText(self, `_Sedang diproses, mohon tunggu sebentar!..._`, id)
        const silver = await axios.get(`https://zeksapi.herokuapp.com/api/gplaybutton?text=${goldp}&apikey=apivinz`)
        await zama.sendFileFromUrl(self, silver.result, 'silver.jpg', 'Bamru Mancap',id)
        break
        case `${prefix}heromlmaker`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
             if (!isGroupMsg) return zama.reply(self, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            const hero = body.slice(13)
            const nhero = hero.split('-')[0]
            const thero = hero.split('-')[1]
             zama.sendText(self, `_Sedang diproses, mohon tunggu sebentar!..._`, id)
             await zama.sendFileFromUrl(self, `https://api.vhtear.com/logoml?hero=${nhero}&text=${thero}&apikey=${vhtearkey}`,`${hero}.jpg`,`Nama Hero : ${hero}`, id)
             break
        case `${prefix}gaming`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
             if (!isGroupMsg) return zama.reply(self, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            const game = body.slice(8)
             zama.sendText(self, `_Sedang diproses, mohon tunggu sebentar!..._`, id)
             await zama.sendFileFromUrl(self, `https://api.vhtear.com/gamelogo?text=${game}&apikey=${vhtearkey}`,`gaming.jpg`,`Nih kak ${nma} udah jadi`, id)
             break
        case `${prefix}textmaker2`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
             if (!isGroupMsg) return zama.reply(self, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            const textm = body.slice(12)
            const tekss = textm.split('-')[0]
            const colour = textm.split('-')[1]
             zama.sendText(self, `_Sedang diproses, mohon tunggu sebentar!..._`, id)
             await zama.sendFileFromUrl(self, `https://api.vhtear.com/textmaker?text=${tekss}&warna=${colour}&apikey=${vhtearkey}`,'text.jpg',`Nih kak ${nma} udah jadi`, id)
             break
        case `${prefix}neongreen`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
             if (!isGroupMsg) return zama.reply(self, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            const gneon = body.slice(11)
             zama.sendText(self, `_Sedang diproses, mohon tunggu sebentar!..._`, id)
            const neong = await get.get(`http://melodicxt.herokuapp.com/api/txtcustom?theme=green_neon&text=${gneon}&apiKey=administrator`).json()
            zama.sendFileFromUrl(self, neong.result, 'Retro.jpg',`Nih kak ${nma} udah jadi`, id)
             break
        case `${prefix}joker`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
             if (!isGroupMsg) return zama.reply(self, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            const joker = body.slice(7)
             zama.sendText(self, `_Sedang diproses, mohon tunggu sebentar!..._`, id)
            const jokerr = await get.get(`http://melodicxt.herokuapp.com/api/txtcustom?theme=joker&text=${joker}&apiKey=administrator`).json()
            zama.sendFileFromUrl(self, jokerr.result, 'joker.jpg',`Nih kak ${nma} udah jadi`, id)
             break
        case `${prefix}phcomment`:
                if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
                const phcoments = body.slice(11)
                if (!phcoments) return await zama.reply(self, `Format Salah!\nketik : ${prefix}phcomment text1|text2\nContoh : ${prefix}phcomment test|tas`, id)
                const usernamePh = phcoments.split('|')[0]
                const commentPh = phcoments.split('|')[1]
                const ppPhRaw = await zama.getProfilePicFromServer(sender.id)
                if (ppPhRaw === undefined) {
                    var ppPh = errorurl
                } else {
                    var ppPh = ppPhRaw
                }
                const dataPpPh = await bent('buffer')(ppPh)
                const linkPpPh = await uploadImages(dataPpPh, `${sender.id}_ph`)
                await zama.reply(self, mess.wait, id)
                const preproccessPh = await axios.get(`https://nekobot.xyz/api/imagegen?type=phcomment&image=${linkPpPh}&text=${commentPh}&username=${usernamePh}`)
                await zama.sendFileFromUrl(self, preproccessPh.data.message, 'ph.jpg', '', id)
                console.log('Success creating image!')
            break
        case `${prefix}sandengraved`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
             if (!isGroupMsg) return zama.reply(self, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            const sand = body.slice(14)
             zama.sendText(self, `_Sedang diproses, mohon tunggu sebentar!..._`, id)
            const sandd = await get.get(`http://melodicxt.herokuapp.com/api/txtcustom?theme=sand_engraved&text=${sand}&apiKey=administrator`).json()
            zama.sendFileFromUrl(self, sandd.result, 'sand.jpg',`Nih kak ${nma} udah jadi`, id)
             break
        case `${prefix}metaldarkgold`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
             if (!isGroupMsg) return zama.reply(self, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            const mdg = body.slice(16)
             zama.sendText(self, `_Sedang diproses, mohon tunggu sebentar!..._`, id)
            const mdgg = await get.get(`http://melodicxt.herokuapp.com/api/txtcustom?theme=metal_dark_gold&text=${mdg}&apiKey=administrator`).json()
            zama.sendFileFromUrl(self, mdgg.result, 'mdg.jpg',`Nih kak ${nma} udah jadi`, id)
             break
        case `${prefix}sky`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
             if (!isGroupMsg) return zama.reply(self, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            const sky = body.slice(5)
             zama.sendText(self, `_Sedang diproses, mohon tunggu sebentar!..._`, id)
            const skyy = await get.get(`http://melodicxt.herokuapp.com/api/txtcustom?theme=sky_online&text=${sky}&apiKey=administrator`).json()
            zama.sendFileFromUrl(self, skyy.result, 'sky.jpg',`Nih kak ${nma} udah jadi`, id)
             break
        case `${prefix}matrix`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
             if (!isGroupMsg) return zama.reply(self, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            const matrix = body.slice(8)
             zama.sendText(self, `_Sedang diproses, mohon tunggu sebentar!..._`, id)
            const matrixx = await get.get(`http://melodicxt.herokuapp.com/api/txtcustom?theme=matrix&text=${matrix}&apiKey=administrator`).json()
            zama.sendFileFromUrl(self, matrixx.result, 'matrix.jpg',`Nih kak ${nma} udah jadi`, id)
             break
        case `${prefix}wolf`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
             if (!isGroupMsg) return zama.reply(self, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            const wolf = body.slice(6)
            const wolf1 = wolf.split('-')[0]
            const wolf2 = wolf.split('-')[1]
             zama.sendText(self, `_Sedang diproses, mohon tunggu sebentar!..._`, id)
            const wolff = await get.get(`http://melodicxt.herokuapp.com/api/txtcustom?theme=wolf_galaxy&text1=${wolf1}&text2=${wolf2}&apiKey=administrator`).json()
            zama.sendFileFromUrl(self, wolff.result, 'wolf.jpg',`Nih kak ${nma} udah jadi`, id)
             break
        case `${prefix}leavest`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
             if (!isGroupMsg) return zama.reply(self, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            const leavest = body.slice(9)
             zama.sendText(self, `_Sedang diproses, mohon tunggu sebentar!..._`, id)
            constleav = await get.get(`https://zeksapi.harispoppy.com/api/leavest?text=${leavest}&apikey=apivinz`).json()
            zama.sendFileFromUrl(self, leav.result, 'leavest.jpg',`Nih kak ${nma} udah jadi`, id)
             break

        case `${prefix}dropwater`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
             if (!isGroupMsg) return zama.reply(self, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            const drop = body.slice(11)
             zama.sendText(self, `_Sedang diproses, mohon tunggu sebentar!..._`, id)
            const dropp = await get.get(`http://melodicxt.herokuapp.com/api/txtcustom?theme=dropwater&text=${drop}&apiKey=administrator`).json()
            zama.sendFileFromUrl(self, dropp.result, 'dropwater.jpg',`Nih kak ${nma} udah jadi`, id)
             break
        case `${prefix}bluemetal`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
             if (!isGroupMsg) return zama.reply(self, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            const bluem = body.slice(11)
             zama.sendText(self, `_Sedang diproses, mohon tunggu sebentar!..._`, id)
            const bluee = await get.get(`http://melodicxt.herokuapp.com/api/txtcustom?theme=blue_metal&text=${bluem}&apiKey=administrator`).json()
            zama.sendFileFromUrl(self, bluee.result, 'bluem.jpg',`Nih kak ${nma} udah jadi`, id)
             break
        case `${prefix}marvel`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
             if (!isGroupMsg) return zama.reply(self, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            const marvel = body.slice(8)
            const marvel1 = marvel.split('-')[0]
            const marvel2 = marvel.split('-')[1]
             zama.sendText(self, `_Sedang diproses, mohon tunggu sebentar!..._`, id)
            const marvell = await get.get(`http://melodicxt.herokuapp.com/api/txtcustom?theme=marvel_studio&text1=${marvel1}&text2=${marvel2}&apiKey=administrator`).json()
            zama.sendFileFromUrl(self, marvell.result, 'marvel.jpg',`Nih kak ${nma} udah jadi`, id)
             break
        case `${prefix}3dtext`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
             if (!isGroupMsg) return zama.reply(self, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            const dtext = body.slice(8)
             zama.sendText(self, `_Sedang diproses, mohon tunggu sebentar!..._`, id)
             await zama.sendFileFromUrl(self, `https://docs-jojo.herokuapp.com/api/text3d?text=${dtext}`,'galaxy.jpg',`Nih kak ${nma} udah jadi`, id)
             break
        case `${prefix}googletext`:
            if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
            if (!isGroupMsg) return zama.reply(self, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            const google = body.slice(12)
                const google1 = google.split('-')[0]
                const google2 = google.split('-')[1]
                const google3 = google.split('-')[2]
                zama.sendText(self, `_Sedang diproses, mohon tunggu sebentar!..._`, id)
            await zama.sendFileFromUrl(self, `https://api.vhtear.com/googletext?text1=${google1}&text2=${google2}&text3=${google3}&apikey=${vhtearkey}`,'google.jpg',`Nih kak ${nma} udah jadi`, id)
            break
        case `${prefix}watercolour`:
            if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
            if (!isGroupMsg) return zama.reply(self, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            const water = body.slice(12)
                const water1 = water.split('-')[0]
                const water2 = water.split('-')[1]
                zama.sendText(self, `_Sedang diproses, mohon tunggu sebentar!..._`, id)
            await zama.sendFileFromUrl(self, `https://api.vhtear.com/watercolour_text?text1=${water1}&text2=${water2}&apikey=${vhtearkey}`,'water.jpg',`Nih kak ${nma} udah jadi`, id)
            break
        case `${prefix}silk`:
            if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
            if (!isGroupMsg) return zama.reply(self, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            const silk = body.slice(6)
                zama.sendText(self, `_Sedang diproses, mohon tunggu sebentar!..._`, id)
            await zama.sendFileFromUrl(self, `https://api.vhtear.com/silktext?text=${silk}&apikey=${vhtearkey}`,'silk.jpg',`Nih kak ${nma} udah jadi`, id)
            break
        case `${prefix}party`:
            if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
            if (!isGroupMsg) return zama.reply(self, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            const party = body.slice(7)
                zama.sendText(self, `_Sedang diproses, mohon tunggu sebentar!..._`, id)
            await zama.sendFileFromUrl(self, `https://api.vhtear.com/partytext?text=${party}&apikey=${vhtearkey}`,'party.jpg',`Nih kak ${nma} udah jadi`, id)
            break
        case `${prefix}romance`:
            if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
            if (!isGroupMsg) return zama.reply(self, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            const rmnc = body.slice(9)
                zama.sendText(self, `_Sedang diproses, mohon tunggu sebentar!..._`, id)
            await zama.sendFileFromUrl(self, `https://api.vhtear.com/romancetext?text=${rmnc}&apikey=${vhtearkey}`,'romance.jpg',`Nih kak ${nma} udah jadi`, id)
            break
        case `${prefix}sliding`:
            if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
            if (!isGroupMsg) return zama.reply(self, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            const slid = body.slice(9)
                zama.sendText(self, `_Sedang diproses, mohon tunggu sebentar!..._`, id)
            await zama.sendFileFromUrl(self, `https://api.vhtear.com/slidingtext?text=${slid}&apikey=${vhtearkey}`,'sliding.mp4',`Nih kak ${nma} udah jadi`, id)
            break
         case `${prefix}textlove`:
            if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
             const love = body.slice(10)
             if (!love) return zama.reply(self, `Kirim perintah #lovemaker [teks]\n\nContoh ${prefix}lovemaker Zam`, id)
             zama.sendText(self, `Sedang di proses...`, id)
             await zama.sendFileFromUrl(self, `https://api.vhtear.com/lovemessagetext?text=${love}&apikey=${vhtearkey}`,`${love}.jpg`,`Nih kak ${nma}`, id)
             break
         case `${prefix}textglow`:
            if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
             const glow = body.slice(10)
             if (!glow) return zama.reply(self, `Kirim perintah #glowmaker [teks]\n\nContoh ${prefix}glowmaker Zam`, id)
             zama.sendText(self, `Sedang di proses...`, id)
             await zama.sendFileFromUrl(self, `https://api.vhtear.com/glowtext?text=${glow}&apikey=${vhtearkey}`,`${glow}.jpg`,`Nih kak ${nma} udah jadi`, id)
             break
        case `${prefix}logo1`: {
                                if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
                                const logojoker = body.slice(7)
                                const puppeteer = require('puppeteer')
                                if (!logojoker) return zama.reply(self, 'Kirim perintah #logo1 [text]\n\nContoh : #logo1 laylay', id)
                                zama.reply(self, mess.wait, id)
                        try {
                            (async () => {
                                const browser = await puppeteer.launch({
                                    headless: true,
                                });
                                const page = await browser.newPage();
                                await page
                                    .goto("https://textpro.me/create-logo-joker-online-934.html", {
                                        waitUntil: "networkidle2"
                                    })
                                    .then(async () => {
                                        await page.type("#text-0", logojoker);
                                        await page.click("#submit");
                                        await new Promise(resolve => setTimeout(resolve, 3000));
                                        const element = await page.$(
                                            'div[class="thumbnail"] > img'
                                            );
                                        const texts1 = await (await element.getProperty("src")).jsonValue();
                                        zama.sendFileFromUrl(self, texts1, id)
                                        browser.close();

                                    })
                                    .catch((err => {
                                        console.log(err)
                                        zama.reply(self, 'error', id)
                                    }))
                            })();
                        } catch (error) {
                            console.log('error bang')
                            zama.reply(self, 'error', id)
                        }
                        }
                                    break
                                    case `${prefix}tiktod`: {
                                        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
                                        const tiktods = body.slice(8)
                                        const tiktods1 = tiktods.split('|')[0]
                                        const tiktods2 = tiktods.split('|')[1]
                                        const puppeteer = require('puppeteer')
                                        if (!tiktods) return zama.reply(self, 'Kirim perintah #tiktod [text]\n\nContoh : #tiktod colay', id)
                                        zama.reply(self, mess.wait, id)
                                try {
                                    (async () => {
                                        const browser = await puppeteer.launch({
                                            headless: true,
                                        });
                                        const page = await browser.newPage();
                                        await page
                                            .goto("https://textpro.me/create-glitch-text-effect-style-tik-tok-983.html", {
                                                waitUntil: "networkidle2"
                                            })
                                            .then(async () => {
                                                await page.type("#text-0", tiktods1);
                                                await page.type("#text-1", tiktods2);
                                                await page.click("#submit");
                                                await new Promise(resolve => setTimeout(resolve, 3000));
                                                const element = await page.$(
                                                    'div[class="thumbnail"] > img'
                                                    );
                                                const text = await (await element.getProperty("src")).jsonValue();
                                                zama.sendFileFromUrl(self, text, id)
                                                browser.close();

                                            })
                                            .catch((err => {
                                                console.log(err)
                                                zama.reply(self, 'error', id)
                                            }))
                                    })();
                                } catch (error) {
                                    console.log('error bang')
                                    zama.reply(self, 'error', id)
                                }
                                }
                                            break
                                            case `${prefix}wolf1`: {
                                                if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
                                                const logowolfs = body.slice(7)
                                                const logowolfs1 = logowolfs.split('|')[0]
                                                const logowolfs2 = logowolfs.split('|')[1]
                                                const puppeteer = require('puppeteer')
                                                if (!logowolfs) return zama.reply(self, 'Kirim perintah #wolf1 text1|text2\n\nContoh : #wolf1 aing|gamteng', id)
                                                zama.reply(self, mess.wait, id)
                                        try {
                                            (async () => {
                                                const browser = await puppeteer.launch({
                                                    headless: true,
                                                });
                                                const page = await browser.newPage();
                                                await page
                                                    .goto("https://textpro.me/create-wolf-logo-galaxy-online-936.html", {
                                                        waitUntil: "networkidle2"
                                                    })
                                                    .then(async () => {
                                                        await page.type("#text-0", logowolfs1);
                                                        await page.type("#text-1", logowolfs2);
                                                        await page.click("#submit");
                                                        await new Promise(resolve => setTimeout(resolve, 3000));
                                                        const element = await page.$(
                                                            'div[class="btn-group"] > a'
                                                            );
                                                        const text = await (await element.getProperty("href")).jsonValue();
                                                        zama.sendFileFromUrl(self, text, id)
                                                        browser.close();

                                                    })
                                                    .catch((err => {
                                                        console.log(err)
                                                        zama.reply(self, 'error', id)
                                                    }))
                                            })();
                                        } catch (error) {
                                            console.log('error bang')
                                            zama.reply(self, 'error', id)
                                        }
                                        }
                                                    break
                                                    case `${prefix}wolf2`: {
                                                        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
                                                        const logowolfss = body.slice(7)
                                                        const logowolfss1 = logowolfss.split('|')[0]
                                                        const logowolfss2 = logowolfss.split('|')[1]
                                                        const puppeteer = require('puppeteer')
                                                        if (!logowolfss) return zama.reply(self, 'Kirim perintah #wolf2 text1|text2\n\nContoh : #wolf2 aing|gamteng', id)
                                                        zama.reply(self, mess.wait, id)
                                                try {
                                                    (async () => {
                                                        const browser = await puppeteer.launch({
                                                            headless: true,
                                                        });
                                                        const page = await browser.newPage();
                                                        await page
                                                            .goto("https://textpro.me/create-wolf-logo-black-white-937.html", {
                                                                waitUntil: "networkidle2"
                                                            })
                                                            .then(async () => {
                                                                await page.type("#text-0", logowolfss1);
                                                                await page.type("#text-1", logowolfss2);
                                                                await page.click("#submit");
                                                                await new Promise(resolve => setTimeout(resolve, 3000));
                                                                const element = await page.$(
                                                                    'div[class="btn-group"] > a'
                                                                    );
                                                                const text = await (await element.getProperty("href")).jsonValue();
                                                                zama.sendFileFromUrl(self, text, id)
                                                                browser.close();

                                                            })
                                                            .catch((err => {
                                                                console.log(err)
                                                                zama.reply(self, 'error', id)
                                                            }))
                                                    })();
                                                } catch (error) {
                                                    console.log('error bang')
                                                    zama.reply(self, 'error', id)
                                                }
                                                }
                                                            break
                                            case `${prefix}hemker`: {
                                                if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
                                                const hemkers = body.slice(8)
                                                const puppeteer = require('puppeteer')
                                                if (!hemkers) return zama.reply(self, 'Kirim perintah #hemker [text]\n\nContoh : #hemker colay', id)
                                                zama.reply(self, mess.wait, id)
                                        try {
                                            (async () => {
                                                const browser = await puppeteer.launch({
                                                    headless: true,
                                                });
                                                const page = await browser.newPage();
                                                await page
                                                    .goto("https://textpro.me/matrix-style-text-effect-online-884.html", {
                                                        waitUntil: "networkidle2"
                                                    })
                                                    .then(async () => {
                                                        await page.type("#text-0", hemkers);
                                                        await page.click("#submit");
                                                        await new Promise(resolve => setTimeout(resolve, 3000));
                                                        const element = await page.$(
                                                            'div[class="thumbnail"] > img'
                                                            );
                                                        const text = await (await element.getProperty("src")).jsonValue();
                                                        zama.sendFileFromUrl(self, text, id)
                                                        browser.close();

                                                    })
                                                    .catch((err => {
                                                        console.log(err)
                                                        zama.reply(self, 'error', id)
                                                    }))
                                            })();
                                        } catch (error) {
                                            console.log('error bang')
                                            zama.reply(self, 'error', id)
                                        }
                                        }
                                                    break
        case `${prefix}neon3`: {
            if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
            const neoncuys = body.slice(7)
            const neoncuys1 = neoncuys.split('|')[0]
            const neoncuys2 = neoncuys.split('|')[1]
            const neoncuys3 = neoncuys.split('|')[2]
            if (!neoncuys) return zama.reply(self, 'Kirim perintah #neon3 text1|text2|text3\n\nContoh : #neon3 Subscribe|Channel|Nabil', id)
            zama.reply(self, mess.wait, id)
            const puppeteer = require('puppeteer')
            try {
            (async () => {
                const browser = await puppeteer.launch({
                    headless: true,
                });
                const page = await browser.newPage();
                await page
                .goto("https://textpro.me/80-s-retro-neon-text-effect-online-979.html", {
                    waitUntil: "networkidle2"
                })
            .then(async () => {
            await page.type("#text-0", neoncuys1);
            await page.type("#text-1", neoncuys2);
            await page.type("#text-2", neoncuys3);
            await page.click("#submit");
            await new Promise(resolve => setTimeout(resolve, 3000));
            const element = await page.$(
            'div[class="thumbnail"] > img'
            );
            const text = await (await element.getProperty("src")).jsonValue();
            zama.sendFileFromUrl(self, text, id)
            browser.close();

            })
            .catch((err => {
            console.log(err)
            zama.reply(self, 'error', id)
            }))
            })();
            } catch (error) {
            console.log('error bang')
            zama.reply(self, 'error', id)
            }
            }
            break
            case `${prefix}neon4`: {
                if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
                const neon4 = body.slice(7)
                if (!neon4) return zama.reply(self, 'Kirim perintah #neon4 [text]\n\nContoh : #neon4 Nabil', id)
                zama.reply(self, mess.wait, id)
                const puppeteer = require('puppeteer')
                try {
                (async () => {
                const browser = await puppeteer.launch({
                    headless: true,
                });
                const page = await browser.newPage();
                await page
                .goto("https://textpro.me/neon-light-text-effect-with-galaxy-style-981.html", {
                waitUntil: "networkidle2"
                })
                .then(async () => {
                await page.type("#text-0", neon4);
                await page.click("#submit");
                await new Promise(resolve => setTimeout(resolve, 5000));
                const element = await page.$(
                    'div[class="btn-group"] > a'
                );
                const text = await (await element.getProperty("href")).jsonValue();
                zama.sendFileFromUrl(self, text, id)
                browser.close();

                })
                .catch((err => {
                console.log(err)
                zama.reply(self, 'error', id)
                }))
                })();
                } catch (error) {
                console.log('error bang')
                zama.reply(self, 'error', id)
                }
                }
                break
        case `${prefix}logo2`: {
            if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
            const neoncuyss = body.slice(7)
            const neoncuyss1 = neoncuyss.split('|')[0]
            const neoncuyss2 = neoncuyss.split('|')[1]
            if (!neoncuyss) return zama.reply(self, 'Kirim perintah #logo2 text1|text2\n\nContoh : #logo Subscribe|Nabil', id)
            zama.reply(self, mess.wait, id)
            const puppeteer = require('puppeteer')
            try {
            (async () => {
            const browser = await puppeteer.launch({
                headless: true,
            });
            const page = await browser.newPage();
            await page
            .goto("https://textpro.me/create-lion-logo-mascot-online-938.html", {
            waitUntil: "networkidle2"
            })
            .then(async () => {
            await page.type("#text-0", neoncuyss1);
            await page.type("#text-1", neoncuyss2);
            await page.click("#submit");
            await new Promise(resolve => setTimeout(resolve, 3000));
            const element = await page.$(
            'div[class="thumbnail"] > img'
            );
            const text = await (await element.getProperty("src")).jsonValue();
            zama.sendFileFromUrl(self, text, id)
            browser.close();

            })
            .catch((err => {
            console.log(err)
            zama.reply(self, 'error', id)
            }))
            })();
            } catch (error) {
            console.log('error bang')
            zama.reply(self, 'error', id)
            }
            }
            break
            case `${prefix}logo3`: {
                if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
                const logo3 = body.slice(7)
                const logo31 = logo3.split('|')[0]
                const logo32 = logo3.split('|')[1]
                if (!logo3) return zama.reply(self, 'Kirim perintah #logo3 text1|text2\n\nContoh : #logo3 Subscribe|Nabil', id)
                zama.reply(self, mess.wait, id)
                const puppeteer = require('puppeteer')
                try {
                (async () => {
                const browser = await puppeteer.launch({
                    headless: true,
                });
                const page = await browser.newPage();
                await page
                .goto("https://textpro.me/create-ninja-logo-online-935.html", {
                waitUntil: "networkidle2"
                })
                .then(async () => {
                await page.type("#text-0", logo31);
                await page.type("#text-1", logo32);
                await page.click("#submit");
                await new Promise(resolve => setTimeout(resolve, 3000));
                const element = await page.$(
                'div[class="btn-group"] > a'
                );
                const text = await (await element.getProperty("href")).jsonValue();
                zama.sendFileFromUrl(self, text, id)
                browser.close();

                })
                .catch((err => {
                console.log(err)
                zama.reply(self, 'error', id)
                }))
                })();
                } catch (error) {
                console.log('error bang')
                zama.reply(self, 'error', id)
                }
                }
                break
                case `${prefix}logo4`: {
                    if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
                    const logo4 = body.slice(7)
                    if (!logo4) return zama.reply(self, 'Kirim perintah #logo4 [text]\n\nContoh : #logo4 Nabil', id)
                    zama.reply(self, mess.wait, id)
                    const puppeteer = require('puppeteer')
                    try {
                    (async () => {
                    const browser = await puppeteer.launch({
                        headless: true,
                    });
                    const page = await browser.newPage();
                    await page
                    .goto("https://ephoto360.com/tao-logo-team-logo-gaming-phong-cach-mascot-mien-phi-633.html", {
                    waitUntil: "networkidle2"
                    })
                    .then(async () => {
                    await page.type("#text-0", logo4);
                    await page.click("#submit");
                    await new Promise(resolve => setTimeout(resolve, 10000));
                    const element = await page.$(
                    'div[class="btn-group"] > a'
                    );
                    const text = await (await element.getProperty("href")).jsonValue();
                    zama.sendFileFromUrl(self, text, id)
                    browser.close();

                    })
                    .catch((err => {
                    console.log(err)
                    zama.reply(self, 'error', id)
                    }))
                    })();
                    } catch (error) {
                    console.log('error bang')
                    zama.reply(self, 'error', id)
                    }
                    }
                    break
                    case `${prefix}logo5`: {
                        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
                        const logo5 = body.slice(7)
                        if (!logo5) return zama.reply(self, 'Kirim perintah #logo5 [text]\n\nContoh : #logo5 Nabil', id)
                        zama.reply(self, mess.wait, id)
                        const puppeteer = require('puppeteer')
                        try {
                        (async () => {
                        const browser = await puppeteer.launch({
                            headless: true,
                        });
                        const page = await browser.newPage();
                        await page
                        .goto("https://ephoto360.com/tao-logo-game-pubg-free-fire-fps-online-dep-607.html", {
                        waitUntil: "networkidle2"
                        })
                        .then(async () => {
                        await page.type("#text-0", logo5);
                        await page.click("#radio0-radio-bb937ed86ace4fb6bc632e90a737e32c");
                        await new Promise(resolve => setTimeout(resolve, 7000));
                        await page.click("#submit");
                        await new Promise(resolve => setTimeout(resolve, 5000));
                        const element = await page.$(
                        'div[class="btn-group"] > a'
                        );
                        const text = await (await element.getProperty("href")).jsonValue();
                        zama.sendFileFromUrl(self, text, id)
                        browser.close();

                        })
                        .catch((err => {
                        console.log(err)
                        zama.reply(self, 'error', id)
                        }))
                        })();
                        } catch (error) {
                        console.log('error bang')
                        zama.reply(self, 'error', id)
                        }
                        }
                        break
                        case `${prefix}logo6`: {
                            if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
                            const logo6 = body.slice(7)
                            if (!logo6) return zama.reply(self, 'Kirim perintah #logo6 [text]\n\nContoh : #logo6 Nabil', id)
                            zama.reply(self, mess.wait, id)
                            const puppeteer = require('puppeteer')
                            try {
                            (async () => {
                            const browser = await puppeteer.launch({
                                headless: true,
                            });
                            const page = await browser.newPage();
                            await page
                            .goto("https://ephoto360.com/tao-logo-game-pubg-free-fire-fps-online-dep-607.html", {
                            waitUntil: "networkidle2"
                            })
                            .then(async () => {
                            await page.type("#text-0", logo6);
                            await page.click("#radio0-radio-f53b5da95e994874a634d06ae81a2b09");
                            await new Promise(resolve => setTimeout(resolve, 7000));
                            await page.click("#submit");
                            await new Promise(resolve => setTimeout(resolve, 5000));
                            const element = await page.$(
                            'div[class="btn-group"] > a'
                            );
                            const text = await (await element.getProperty("href")).jsonValue();
                            zama.sendFileFromUrl(self, text, id)
                            browser.close();

                            })
                            .catch((err => {
                            console.log(err)
                            zama.reply(self, 'error', id)
                            }))
                            })();
                            } catch (error) {
                            console.log('error bang')
                            zama.reply(self, 'error', id)
                            }
                            }
                            break
                            case `${prefix}logo7`: {
                                if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
                                const logo7 = body.slice(7)
                                if (!logo7) return zama.reply(self, 'Kirim perintah #logo7 [text]\n\nContoh : #logo7 Nabil', id)
                                zama.reply(self, mess.wait, id)
                                const puppeteer = require('puppeteer')
                                try {
                                (async () => {
                                const browser = await puppeteer.launch({
                                    headless: true,
                                });
                                const page = await browser.newPage();
                                await page
                                .goto("https://ephoto360.com/tao-logo-team-logo-gaming-phong-cach-mascot-mien-phi-633.html", {
                                waitUntil: "networkidle2"
                                })
                                .then(async () => {
                                await page.type("#text-0", logo7);
                                await page.click("#radio0-radio-f99fea3e79c242959b4a241e8332780b");
                                await new Promise(resolve => setTimeout(resolve, 5000));
                                await page.click("#submit");
                                await new Promise(resolve => setTimeout(resolve, 5000));
                                const element = await page.$(
                                'div[class="btn-group"] > a'
                                );
                                const text = await (await element.getProperty("href")).jsonValue();
                                zama.sendFileFromUrl(self, text, id)
                                browser.close();

                                })
                                .catch((err => {
                                console.log(err)
                                zama.reply(self, 'error', id)
                                }))
                                })();
                                } catch (error) {
                                console.log('error bang')
                                zama.reply(self, 'error', id)
                                }
                                }
                                break
                                case `${prefix}logo9`: {
                                    if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
                                    const logo9 = body.slice(7)
                                    if (!logo9) return zama.reply(self, 'Kirim perintah #logo9 [text]\n\nContoh : #logo9 Nabil', id)
                                    zama.reply(self, mess.wait, id)
                                    const puppeteer = require('puppeteer')
                                    try {
                                    (async () => {
                                    const browser = await puppeteer.launch({
                                        headless: true,
                                    });
                                    const page = await browser.newPage();
                                    await page
                                    .goto("https://ephoto360.com/tao-logo-team-logo-gaming-phong-cach-mascot-mien-phi-633.html", {
                                    waitUntil: "networkidle2"
                                    })
                                    .then(async () => {
                                    await page.type("#text-0", logo9);
                                    await page.click("#radio0-radio-7e8d1d6b1b72481abc38a9d26513a803");
                                    await new Promise(resolve => setTimeout(resolve, 5000));
                                    await page.click("#submit");
                                    await new Promise(resolve => setTimeout(resolve, 5000));
                                    const element = await page.$(
                                    'div[class="btn-group"] > a'
                                    );
                                    const text = await (await element.getProperty("href")).jsonValue();
                                    zama.sendFileFromUrl(self, text, id)
                                    browser.close();

                                    })
                                    .catch((err => {
                                    console.log(err)
                                    zama.reply(self, 'error', id)
                                    }))
                                    })();
                                    } catch (error) {
                                    console.log('error bang')
                                    zama.reply(self, 'error', id)
                                    }
                                    }
                                    break
                                    case `${prefix}logo10`: {
                                        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
                                        const logo10 = body.slice(8)
                                        if (!logo10) return zama.reply(self, 'Kirim perintah #logo10 [text]\n\nContoh : #logo10 Nabil', id)
                                        zama.reply(self, mess.wait, id)
                                        const puppeteer = require('puppeteer')
                                        try {
                                        (async () => {
                                        const browser = await puppeteer.launch({
                                            headless: true,
                                        });
                                        const page = await browser.newPage();
                                        await page
                                        .goto("https://ephoto360.com/tao-logo-team-logo-gaming-phong-cach-mascot-mien-phi-633.html", {
                                        waitUntil: "networkidle2"
                                        })
                                        .then(async () => {
                                        await page.type("#text-0", logo10);
                                        await page.click("#radio0-radio-2952bc88e2e345fdb54da8f73b52413f");
                                        await new Promise(resolve => setTimeout(resolve, 5000));
                                        await page.click("#submit");
                                        await new Promise(resolve => setTimeout(resolve, 5000));
                                        const element = await page.$(
                                        'div[class="btn-group"] > a'
                                        );
                                        const text = await (await element.getProperty("href")).jsonValue();
                                        zama.sendFileFromUrl(self, text, id)
                                        browser.close();

                                        })
                                        .catch((err => {
                                        console.log(err)
                                        zama.reply(self, 'error', id)
                                        }))
                                        })();
                                        } catch (error) {
                                        console.log('error bang')
                                        zama.reply(self, 'error', id)
                                        }
                                        }
                                        break
        case `${prefix}say`:
            const bilang = body.slice(5)
            const org = sender.id
            zama.sendTextWithMentions(self, `@${org.replace('@c.us','')} Berkata : *${bilang}*`,id)
            break
        case `${prefix}hilih`:
            const hilih = quotedMsg.type == 'chat' ? quotedMsg.body : ''
            const hili = hilih.replace(/a|u|e|o/g, "i")
            await zama.reply(self, hili, id)
            break
        case `${prefix}halah`:
            const halah = quotedMsg.type == 'chat' ? quotedMsg.body : ''
            const hala = halah.replace(/i|u|e|o/g, "a")
            await zama.reply(self, hala, id)
            break
        case `${prefix}heleh`:
            const heleh = quotedMsg.type == 'chat' ? quotedMsg.body : ''
            const hele = heleh.replace(/i|u|a|o/g, "e")
            await zama.reply(self, hele, id)
            break
        case `${prefix}holoh`:
            const holoh = quotedMsg.type == 'chat' ? quotedMsg.body : ''
            const holo = holoh.replace(/i|u|e|a/g, "o")
            await zama.reply(self, holo, id)
            break
        case `${prefix}huluh`:
            const huluh = quotedMsg.type == 'chat' ? quotedMsg.body : ''
            const hulu = huluh.replace(/i|o|e|a/g, "u")
            await zama.reply(self, hulu, id)
            break
        case `${prefix}panggil`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
        if (!isGroupAdmins) return zama.reply(self, ` Perintah ini hanya bisa dilakukan oleh admin group`, id)
            const panggil = body.slice(9)
                const jumlahh = panggil.split('-')[0]
                const orangg = panggil.split('-')[1]
            for(var i=1;i<=jumlahh;i++){
                await zama.sendTextWithMentions(self, `Admin @${sender.id} memanggil ${orangg} ${i}x`)
            }
        break
        case `${prefix}chat`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
            if (quotedMsg){
            var qmid = quotedMsgObj.sender.id
            await zama.reply(self, `wa.me/${qmid.replace('@c.us','')}?text=${body.slice(6).replace(/\s/g, '+')}`,id)
        }
        else{
            await zama.reply(self, `wa.me/${sender.id.replace("@c.us","")}?text=${body.slice(6).replace(/\s/g, '+')}`,id)
        }
        break
        case `${prefix}slap`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
            if(isLimit(serial)) return
            if (!isGroupMsg) return zama.reply(self, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            const slap = body.slice(6)
            const person = author.replace('@c.us', '')
            await zama.sendGiphyAsSticker(self, `https://media.giphy.com/media/S8507sBJm1598XnsgD/source.gif`)
            zama.sendTextWithMentions(self, '@' + person + ' *slapped* ' + slap)
            limitAdd(serial)
            break
            case `${prefix}setname`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
            if (!isOwner) return zama.reply(self, `Perintah ini hanya bisa di gunakan oleh Owner Zam!`, id)
                const setnem = body.slice(9)
                await zama.setMyName(setnem)
                zama.sendTextWithMentions(self, `Makasih Nama Barunya @${sender.id.replace('@c.us','')} 😘`)
            break
        case `${prefix}setstatus`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
            if (!isOwner) return zama.reply(self, `Perintah ini hanya bisa di gunakan oleh Owner Zam!`, id)
                const setstat = body.slice(11)
                await zama.setMyStatus(setstat)
                zama.sendTextWithMentions(self, `Makasih Status Barunya @${sender.id.replace('@c.us','')} 😘`)
            break
        case `${prefix}setpic`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
            if (!isOwner) return zama.reply(self, `Perintah ini hanya bisa di gunakan oleh Owner Zam!`, id)
            if (isMedia) {
                const mediaData = await decryptMedia(message)
                const imageBase64 = `data:${mimetype};base64,${mediaData.toString('base64')}`
                await zama.setProfilePic(imageBase64)
                zama.sendTextWithMentions(`Makasih @${sender.id.replace('@c.us','')} Foto Profilenya 😘`)
            } else if (quotedMsg && quotedMsg.type == 'image') {
                const mediaData = await decryptMedia(quotedMsg)
                const imageBase64 = `data:${quotedMsg.mimetype};base64,${mediaData.toString('base64')}`
                await zama.setProfilePic(imageBase64)
                zama.sendTextWithMentions(self, `Makasih @${sender.id.replace('@c.us','')} Foto Profilenya 😘`)
            } else {
                zama.reply(self, `Wrong Format!\n⚠️ Harap Kirim Gambar Dengan #setprofilepic`, id)
            }
            break
        case `${prefix}getpic`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
            if (!isGroupMsg) return zama.reply(self, `Fitur ini hanya bisa di gunakan dalam group`, id)
            const texnugm = body.slice(8)
            const getnomber =  await zama.checkNumberStatus(texnugm)
            const useriq = getnomber.id.replace('@','') + '@c.us'
                try {
                    var jnck = await zama.getProfilePicFromServer(useriq)

                    zama.sendFileFromUrl(self, jnck, `awok.jpg`)
                } catch {
                    zama.reply(self, `Tidak Ada Foto Profile!`, id)
                }
            break
        case `${prefix}spam`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
            const spamm = body.slice(6)
                const jumlah = spamm.split('-')[0]
                const kata1 = spamm.split('-')[1]
            for(var i=1;i<=jumlah;i++){
                await zama.sendText(self, kata1)
            }
            break
        case `${prefix}autosticker`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
            if (!isGroupMsg) return zama.reply(self, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            if (!isGroupAdmins) return zama.reply(self, `Perintah ini hanya bisa di gunakan oleh Admin group!`, id)
            if (!isBotGroupAdmins) return zama.reply(self, `Perintah ini hanya bisa di gunakan jika Bot menjadi Admin!`, id)
            if (args[1] == 'enable') {
                var cek = autostick.includes(chatId);
                if(cek){
                    return zama.reply(self, `Fitur *AutoSticker* sekarang Diaktifkan`, id)
                } else {
                    autostick.push(chatId)
                    fs.writeFileSync('./lib/database/autostick.json', JSON.stringify(autostick))
                    zama.reply(self, `Fitur *AutoSticker* sekarang Diaktifkan`, id)
                }
            } else if (args[1] == 'disable') {
                var cek = autostick.includes(chatId);
                if(!cek){
                    return zama.reply(self, `Fitur *AutoSticker* sekarang Dinonaktifkan`, id)
                } else {
                    let nixx = autostick.indexOf(chatId)
                    autostick.splice(nixx, 1)
                    fs.writeFileSync('./lib/database/autostick.json', JSON.stringify(autostick))
                    zama.reply(self, `Fitur *AutoSticker* sekarang Dinonaktifkan`, id)
                }
            } else {
                zama.reply(self, `Pilih enable atau disable udin!`, id)
            }
            break
        case `${prefix}antisara`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
            if (!isGroupMsg) return zama.reply(self, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            if (!isGroupAdmins) return zama.reply(self, `Perintah ini hanya bisa di gunakan oleh Admin group!`, id)
            if (!isBotGroupAdmins) return zama.reply(self, `Perintah ini hanya bisa di gunakan jika Bot menjadi Admin!`, id)
            if (args[1] == 'enable') {
                var cek = antisara.includes(chatId);
                if(cek){
                    return zama.reply(self, `*ANTI SARA* Diaktifkan`, id)
                } else {
                    antisara.push(chatId)
                    fs.writeFileSync('./lib/database/antisara.json', JSON.stringify(antisara))
                    zama.reply(self, `*ANTI SARA* Diaktifkan`, id)
                }
            } else if (args[1] == 'disable') {
                var cek = antisara.includes(chatId);
                if(!cek){
                    return zama.reply(self, `*ANTI SARA* Dinonaktifkan`, id)
                } else {
                    let nixx = antisara.indexOf(chatId)
                    antisara.splice(nixx, 1)
                    fs.writeFileSync('./lib/database/antisara.json', JSON.stringify(antisara))
                    zama.reply(self, `*ANTI SARA* Dinonaktifkan`, id)
                }
            } else {
                zama.reply(self, `Pilih enable atau disable udin!`, id)
            }
            break
        case `${prefix}infoall`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id) // FOR GROUP ADMINS
            if (!isGroupMsg) return zama.reply(self, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            if (!isGroupAdmins) return zama.reply(self, `Perintah ini hanya bisa di gunakan oleh admin group`, id)
            const groupMemm = await zama.getGroupMembers(groupId)
            let hehee = `>>>>〘 INFO ALL 〙<<<<\n>INFO : ${body.slice(9)}\n`
            for (let i = 0; i < groupMemm.length; i++) {
                hehee += '>'
                hehee += ` @${groupMemm[i].id.replace(/@c.us/g, '')}\n`
            }
            hehee += '>>>>〘 Zam 〙'
            await sleep(2000)
            await zama.sendTextWithMentions(self, hehee)
            break
         case `${prefix}addadminban`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
                if (!isOwner) return zama.reply(self, `Perintah ini hanya bisa di gunakan oleh Owner Zam!`, id)
                    for (let i = 0; i < mentionedJidList.length; i++) {
                    adminbanNumber.push(mentionedJidList[i])
                    fs.writeFileSync('./lib/database/adminban.json', JSON.stringify(adminbanNumber))
                    zama.reply(self, `Success Menambahkan Adminban Z!`, id)
                    }
                break
                case `${prefix}deladminban`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
                    if (!isOwner) return zama.reply(self, `Perintah ini hanya bisa di gunakan oleh Owner Zam!`, id)
                        let inqq = adminNumber.indexOf(mentionedJidList[0])
                        adminbanNumber.splice(inqq, 1)
                        fs.writeFileSync('./lib/database/adminban.json', JSON.stringify(adminbanNumber))
                        zama.reply(self, `Success Menghapus Adminban Z!`, id)
                    break
        /*case `${prefix}+add`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
            const orghh = body.slice(6)
            if (!isGroupMsg) return zama.reply(self, `Fitur ini hanya bisa di gunakan dalam group`, id)
            if (args.length === 1) return zama.reply(self, `Untuk menggunakan fitur ini, kirim perintah *!add* 628xxxxx`, id)
            if (!isAdminban) return zama.reply(self, `Perintah ini hanya bisa di gunakan oleh adminban Zam`, id)
            if (!isBotGroupAdmins) return zama.reply(self, `Perintah ini hanya bisa di gunakan ketika bot menjadi admin`, id)
            try {
                await zama.addParticipant(self,`${orghh}@c.us`)
            } catch {
                zama.reply(self, mess.error.Ad, id)
            }
            break*/
            /*case `${prefix}kick`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
                if (!isGroupMsg) return zama.reply(self, `Fitur ini hanya bisa di gunakan dalam group`, id)
                if (!isAdminban) return zama.reply(self, `Perintah ini hanya bisa di gunakan oleh adminban Zam`, id)
                if (!isBotGroupAdmins) return zama.reply(self, `Perintah ini hanya bisa di gunakan ketika bot menjadi admin`, id)
                if (mentionedJidList.length === 0) return zama.reply(self, `Untuk menggunakan Perintah ini, kirim perintah *!kick* @tagmember`, id)
                await zama.sendText(self, `Perintah diterima, mengeluarkan:\n${mentionedJidList.join('\n')}`)
                for (let i = 0; i < mentionedJidList.length; i++) {
                    if ((adminbanNumber, groupAdmins).includes(mentionedJidList[i])) return zama.reply(self, mess.error.Sp, id)
                    await zama.removeParticipant(groupId, mentionedJidList[i])
                }
                break*/
                case `${prefix}tagall`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id) // FOR GROUP ADMINS
                case `${prefix}mentionall`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
                    if (!isGroupMsg) return zama.reply(self, `Perintah ini hanya bisa di gunakan dalam group!`, id)
                    if (!isAdminban) return zama.reply(self, `Perintah ini hanya bisa di gunakan oleh adminban Zam`, id)
                    const groupMemmm = await zama.getGroupMembers(groupId)
                    let heheh = '╔══✪〘 Mention All 〙✪══\n'
                    for (let i = 0; i < groupMemmm.length; i++) {
                        heheh += '╠➥'
                        heheh += ` @${groupMemmm[i].id.replace(/@c.us/g, '')}\n`
                    }
                    heheh += '╚═〘 Zam BOT 〙'
                    await sleep(2000)
                    await zama.sendTextWithMentions(self, heheh)
                    break
                /*case `${prefix}delete`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
                    if (!isGroupMsg) return zama.reply(self, `Fitur ini hanya bisa di gunakan dalam group`, id)
                    if (!isAdminban) return zama.reply(self, `Fitur ini hanya bisa di gunakan oleh adminban Z`, id)
                    if (!quotedMsg) return zama.reply(self, `Salah!!, kirim perintah *!delete [tagpesanbot]*`, id)
                    zama.deleteMessage(quotedMsgObj.chatId, quotedMsgObj.id, false)
                    break*/
                case `${prefix}+groupinfo`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
                        if (!isGroupMsg) return zama.reply(self, `Perintah ini hanya bisa di gunakan dalam group!`, message.id)
                        if (!isAdminban) return zama.reply(self, `perintah ini hanya untuk adminban Z`, id)
                        isMuted(chatId) == false
                        var totalMem = chat.groupMetadata.participants.length
                        var desc = chat.groupMetadata.desc
                        var groupname = name
                        var welgrp = welkom.includes(chat.id)
                        var leftgrp = left.includes(chat.id)
                        var ngrp = nsfw_.includes(chat.id)
                        var simu = simi_.includes(chat.id)
                        var grouppic = await zama.getProfilePicFromServer(chat.id)
                        if (grouppic == undefined) {
                             var pfp = errorurl
                        } else {
                             var pfp = grouppic
                        }
                        await zama.sendFileFromUrl(self, pfp, 'group.png', `➸ *Name : ${groupname}*
            *➸ Members : ${totalMem}*
            *➸ Welcome : ${welgrp}*
            *➸ Left : ${leftgrp}*
            *➸ NSFW : ${ngrp}*
            *➸ Simsimi : ${simu}*
            *➸ Group Description*
            ${desc}`)
        break
    case `bot`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
    await zama.sendPtt(self, `./media/loli.mp3`, id)
    break
        case `${prefix}+sider`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
        if (!isAdminban) return zama.reply (self, `Perintah ini hanya bisa dilakukan oleh adminban Z`, id)
            if (!isGroupMsg) return zama.reply(self, menuPriv, id)
            try {
                if (quotedMsg) {
                    zama.getMessageReaders(message.quotedMsgObj.id).then(a => {
                        let siderne = `Para sider jumlahnya ${a.length} orang : \n`
                        for (let i = 0; i < a.length; i++){
                            const nomerr = a[i].id.replace('@c.us','')
                            siderne += `➣ @${nomer}\n`
                        }
                        zama.sendTextWithMentions(self, siderne, id)
                    })
                } else {
                    zama.reply(self, `Hanya tag pesan bot oke!`, id)
                }
            } catch(e) {
                zama.reply(self, `Pastikan anda tag pesan bot!`, id)
            }
            break
        case `${prefix}+adminbanlist`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
            if (!isAdminban) return zama.reply(self, `perintah ini hanya untuk adminban Z`, id)
            let admnb = `This is list of Z Adminban\nTotal : ${adminbanNumber.length}\n`
            for (let g of adminbanNumber) {
                admnb += `➸ ${g.replace(/@c.us/g,'')}\n`
            }
            await zama.reply(self, admnb,id)
        break
        case `${prefix}grouplink`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
            if (!isBotGroupAdmins) return zama.reply(self, `Perintah ini hanya bisa di gunakan ketika bot menjadi admin`, id)
            if (isGroupMsg) {
                const inviteLink = await zama.getGroupInviteLink(groupId);
                zama.sendLinkWithAutoPreview(self, inviteLink, `\nLink group *${name}*`)
            } else {
                zama.reply(self, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            }
            break
        case `${prefix}sider`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
        if (!isGroupAdmins) return zama.reply (self, `Perintah ini hanya bisa dilakukan oleh admin group `, id)
            if (!isGroupMsg) return zama.reply(self, menuPriv, id)
            try {
                if (quotedMsg) {
                    zama.getMessageReaders(message.quotedMsgObj.id).then(a => {
                        let siderne = `Para sider jumlahnya ${a.length} orang : \n`
                        for (let i = 0; i < a.length; i++){
                            const nomer = a[i].id.replace('@c.us','')
                            siderne += `➣ @${nomer}\n`
                        }
                        zama.sendTextWithMentions(self, siderne, id)
                    })
                } else {
                    zama.reply(self, `Hanya tag pesan bot oke!`, id)
                }
            } catch(e) {
                zama.reply(self, `Pastikan anda tag pesan bot!`, id)
            }
            break
        case `${prefix}hi`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
            if (!isGroupMsg) return zama.reply(self, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            const namaa = pushname
            const cwk = urutan[Math.floor(Math.random() * (urutan.length))]
            await zama.sendFile(self, `./media/pic/${cwk}.jpeg`,`${cwk}.jpeg`,`Hi juga kak ${namaa}`,id)
            break
        case `${prefix}sayy`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
                    if (isLimit(serial)) return zama.reply(self, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik #ceklimit Untuk Mengecek Kuota Limit Kamu`, id)

                    await limitAdd(serial)
                    const doto = fs.readFileSync('./lib/database/say.json')
                    const dotoJson = JSON.parse(doto)
                    const rondIndox = Math.floor(Math.random() * dotoJson.length)
                    const rondKoy = dotoJson[rondIndox]
                    zama.reply(self, rondKoy, id)
                    break
                case `${prefix}addsay`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
                    if (args.length == 1) return zama.reply(self, `Kirim perintah +addsay [teks]\ncontoh +addsay anjay`, id)
                    const says = body.slice(8)
                    say.push(says)
                    fs.writeFileSync('./lib/database/say.json', JSON.stringify(say))
                    zama.reply(self, `Add ${says} sukses!`,id)
                    break
                case `${prefix}delsay`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
                    if (args.length == 1) return zama.reply(self, `Kirim perintah +delsay [teks], contoh +delsay anjay`, id)
                    const sayso = body.slice(8)
                    let delsayso = say.indexOf(sayso)
                    say.splice(delsayso, 1)
                    fs.writeFileSync('./lib/say.json', JSON.stringify(say))
                    zama.reply(self, `Delete ${sayso} sukses!`,id)
                    break
                case `${prefix}saylist`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
                    let saylisto = `Random say list\nTotal : ${say.length}\n`
                    for (let i of say) {
                    saylisto += `☛ ${i}\n`
                    }
                    await zama.reply(self, saylisto, id)
                    break
        case `${prefix}katacinta`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
            fetch('https://raw.githubusercontent.com/beniismael/whatsapp-bot/master/bucin.txt')
            .then(res => res.text())
            .then(body => {
                let splitcinta = body.split('\n')
                let randomcinta = splitcinta[Math.floor(Math.random() * splitcinta.length)]
                zama.reply(self, randomcinta, id)
            })
            .catch(() => {
                zama.reply(self, `Ada yang Error!`, id)
            })
            break
        case `${prefix}howgay`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
            const gayy = body.slice(9)
            fetch('https://raw.githubusercontent.com/MrPawNO/howgay/main/howgay.txt')
            .then(res => res.text())
            .then(body => {
                let splitgay = body.split('\n')
                let randomgay = splitgay[Math.floor(Math.random() * splitgay.length)]
                zama.sendTextWithMentions(self, `howgay ${gayy}?\n*${randomgay}*`, id)
            })
            .catch(() => {
                zama.reply(self, `Ada yang Error!`, id)
            })
            break
        case `${prefix}edotensei`:
        const test = body.slice(11)
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
        if (!isGroupMsg) return zama.reply(self, `Perintah ini hanya bisa digunakan dalam grup`, id)
        if (!isBotGroupAdmins) return zama.reply(self, `Perintah ini hanya bisa digunakan ketika bot menjadi admin`, id)
        if (!isGroupAdmins) return zama.reply(self, `Perintah ini hanya bisa digunakan oleh admin group`, id)

            if (quotedMsg) {
                var qmid = quotedMsgObj.sender.id
                await zama.removeParticipant(groupId, qmid)
                await sleep(3000)
                await zama.sendText(self, `Edo Tensei No jutsu....`)
                await sleep(1000)
                await zama.addParticipant(self, `${qmid}`)
                await zama.sendTextWithMentions(self, `@${qmid.replace("@c.us","")} telah diedo tensei oleh @${sender.id.replace("@c.us","")}`)
            }
            else if (!quotedMsg) {
                if (test.length < 1) return zama.reply(self, `Silahkan tag member/reply pesan member yang ingin diedo tensei`, id)
                await zama.removeParticipant(groupId, mentionedJidList[i])
                await sleep(3000)
                await zama.sendText(self, `Edo Tensei No jutsu....`)
                await sleep(1000)
                await zama.addParticipant(self, `${mentionedJidList}`)
                await zama.sendTextWithMentions(self, `@${mentionedJidList.replace("@c.us","")} telah diedo tensei oleh @${sender.id.replace("@c.us","")}`)
            }
            else{
                await zama.sendText(self, `Silahkan tag/reply pesan member yang ingin diedotensei`, id)
            }
            break
        case `${prefix}open`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
        if (!isGroupMsg) return zama.reply(self, `Fitur ini hanya bisa di gunakan dalam group`, id)
            if (!isGroupAdmins) return zama.reply(self, `Fitur ini hanya bisa di gunakan oleh admin group`, id)
            if (!isBotGroupAdmins) return zama.reply(self, `Fitur ini hanya bisa di gunakan ketika bot menjadi admin`, id)
                zama.setGroupToAdminsOnly(groupId, false)
                zama.sendTextWithMentions(self, `Group telah dibuka oleh admin @${sender.id.replace('@c.us','')}\nSekarang *semua member* dapat mengirim pesan`)
                break
        case `${prefix}close`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
        if (!isGroupMsg) return zama.reply(self, `Fitur ini hanya bisa di gunakan dalam group`, id)
            if (!isGroupAdmins) return zama.reply(self, `Fitur ini hanya bisa di gunakan oleh admin group`, id)
            if (!isBotGroupAdmins) return zama.reply(self, `Fitur ini hanya bisa di gunakan ketika bot menjadi admin`, id)
                zama.setGroupToAdminsOnly(groupId, true)
                zama.sendTextWithMentions(self, `Group telah ditutup oleh admin @${sender.id.replace('@c.us','')}\nSekarang *hanya admin* yang dapat mengirim pesan`)
                break
        case `${prefix}inv`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
            var qmid = quotedMsgObj.sender.id
            if (!isGroupMsg) return zama.reply(self, `Fitur ini hanya bisa di gunakan dalam group`, id)
            if (!isGroupAdmins) return zama.reply(self, `Perintah ini hanya bisa di gunakan oleh admin group`, id)
            if (!isBotGroupAdmins) return zama.reply(self, `Perintah ini hanya bisa di gunakan ketika bot menjadi admin`, id)
            try {
                await zama.addParticipant(self, qmid)
            } catch {
                zama.reply(self, mess.error.Ad, id)
            }
            break
        case `${prefix}rmv`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
            var qmid = quotedMsgObj.sender.id
            if (!isGroupMsg) return zama.reply(self, `Fitur ini hanya bisa di gunakan dalam group`, id)
            if (!isGroupAdmins) return zama.reply(self, `Perintah ini hanya bisa di gunakan oleh admin group`, id)
            if (!isBotGroupAdmins) return zama.reply(self, `Perintah ini hanya bisa di gunakan ketika bot menjadi admin`, id)
            try {
                await zama.removeParticipant(self, qmid)
            } catch {
                zama.reply(self, mess.error.Ad, id)
            }
            break
        case `${prefix}promotee`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
            var qmid = quotedMsgObj.sender.id
            if (!isGroupMsg) return zama.reply(self, `Fitur ini hanya bisa di gunakan dalam group`, id)
            if (!isGroupAdmins) return zama.reply(self, `Perintah ini hanya bisa di gunakan oleh admin group`, id)
            if (!isBotGroupAdmins) return zama.reply(self, `Perintah ini hanya bisa di gunakan ketika bot menjadi admin`, id)
            await zama.promoteParticipant(groupId, qmid)
            await zama.sendTextWithMentions(self, `Perintah diterima, menambahkan @${qmid} sebagai admin.`)
            break
        case `${prefix}demotee`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
            var qmid = quotedMsgObj.sender.id
            if (!isGroupMsg) return zama.reply(self, `Fitur ini hanya bisa di gunakan dalam group`, id)
            if (!isGroupAdmins) return zama.reply(self, `Perintah ini hanya bisa di gunakan oleh admin group`, id)
            if (!isBotGroupAdmins) return zama.reply(self, `Perintah ini hanya bisa di gunakan ketika bot menjadi admin`, id)
            await zama.demoteParticipant(groupId, qmid)
            await zama.sendTextWithMentions(self, `Perintah diterima, menghapus @${qmid} sebagai admin.`)
            break
        case `${prefix}kickme`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
        if (!isGroupMsg) return zama.reply(self, `Fitur ini hanya bisa di gunakan dalam group`, id)
            if (!isBotGroupAdmins) return zama.reply(self, `Perintah ini hanya bisa di gunakan ketika bot menjadi admin`, id)
            await zama.removeParticipant(self, sender.id)
        break
        case 'iri':
  zama.sendPtt(self, './media/iri.mp3', id)
break
case 'tapi':
  zama.sendPtt(self, './media/tapi.mp3', id)
break
case 'tts':
  zama.sendPtt(self, './media/tts.mp3', id)
break
case 'mantap':
  zama.sendPtt(self, './media/mantap.mp3', id)
break
case 'kang':
  zama.sendPtt(self, './media/kang.mp3', id)
break
case 'sasageyo':
  zama.sendPtt(self, './media/sasageyo.mp3', id)
break
case 'sory bang jago':
  zama.sendPtt(self, './media/sory bang jago.mp3', id)
break
case 'abang':
  zama.sendPtt(self, './media/abang.mp3', id)
break
case 'palepale':
        case 'pale':
            zama.sendPtt(self, './media/pale.mp3', id)
            break
            case `anjay`:
        case `dasarloanjay`:
        case `loanjay`:
            zama.sendPtt(self, './media/dasarloanjay.mp3', id)
            break
            case `manise`:
        case `nonamanise`:
        case `kakamainsalah`:
            zama.sendPtt(self, './media/manise.mp3', id)
            break
            case `pota`:
        case `potapota`:
            zama.sendPtt(self, './media/pota.mp3', id)
            break
            case `playforme`:
        case `djforme`:
            zama.sendPtt(self, './media/playforme.mp3', id)
            break
        case `ladaladi`:
        case `lada`:
            zama.sendPtt(self, './media/ladaladi.mp3', id)
            break
        case `tarekses`:
        case `tariksis`:
        case `tareksis`:
        case `tareeksis`:
        case `tareekses`:
            zama.sendPtt(self, './media/tarekses.mp3', id)
            break
        case 'p':
        case 'halo':
        case '.':
            zama.reply(self, `daripada gabut mending ketik *${prefix}help* untuk menampilkan menu`, id)
            break
        case 'assalamualaikum':
        case 'asalamualaikum':
        case 'samlekom':
            zama.reply(self, `Walaikumsalam,ada yg bisa saya bantu ?,ketik *${prefix}help* untuk menampilkan menu`, id)
            break
        case 'Zam':zama.reply(self, `Aku di sini kak ${pushname} ? ketik *${prefix}help* untuk menampilkan menu`, id)
        break
        case 'bot':
        case 'Bot':
            zama.reply(self, `Aku di sini kak ${pushname} ? ketik *${prefix}help* untuk menampilkan menu`, id)
            break
        case '@6281295037142':
            zama.reply(self, `KENAPA TAG OWNER KU KAK?? KALO PENTING CHAT AJA DIA`, id)
            break
        case `${prefix}addtruth`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
        if (!isAdmin) return zama.reply(self, 'Perintah ini hanya bisa dilakukan oleh Admin Zam', id)
            const truthh = body.slice(10)
            truth.push(truthh)
            fs.writeFileSync('./lib/database/truth.json', JSON.stringify(truth))
            zama.reply(self, `Kalimat *${truthh}*\ntelah berhasil ditambahkan ke Database`,id)
            break
        case `${prefix}deltruth`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
        if (!isAdmin) return zama.reply(self, 'Perintah ini hanya bisa dilakukan oleh Admin Zam', id)
            const truthhh = body.slice(10)
            let deltruthhh = truth.indexOf(truthhh)
            truth.splice(deltruthhh, 1)
            fs.writeFileSync('./lib/database/truth.json', JSON.stringify(truth))
            zama.sendText(self, `Kalimat *${truthhh}*\nTelah berhasil dihapus dari database`)
            break
        case `${prefix}truthlist`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
            let truthlist = `Random *truth* list\nTotal : ${truth.lenght}\n`
            for (let i of truth) {
            truthlist += `☛ ${i}\n`
            }
            await zama.reply(self,truthlist, id)
            break
        case `${prefix}adddare`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
        if (!isAdmin) return zama.reply(self, 'Perintah ini hanya bisa dilakukan oleh Admin Zam', id)
            const daree = body.slice(9)
            dare.push(daree)
            fs.writeFileSync('./lib/database/dare.json', JSON.stringify(dare))
            zama.reply(self, `Kalimat *${daree}*\ntelah berhasil ditambahkan ke Database`,id)
            break
        case `${prefix}deldare`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
        if (!isAdmin) return zama.reply(self, 'Perintah ini hanya bisa dilakukan oleh Admin Zam', id)
            const dareee = body.slice(9)
            let deldareee = dare.indexOf(dareee)
            dare.splice(deldareee, 1)
            fs.writeFileSync('./lib/database/dare.json', JSON.stringify(dare))
            zama.sendText(self, `Kalimat *${dareee}*\nTelah berhasil dihapus dari database`)
            break
        case `${prefix}darelist`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
            let darelist = `Random *Dare* list\nTotal : ${dare.lenght}\n`
            for (let i of dare) {
            darelist += `☛ ${i}\n`
            }
            await zama.reply(self,darelist, id)
            break
        case `${prefix}tod`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
        if (!isGroupMsg) return zama.reply(self, `Fitur ini hanya bisa di gunakan dalam group`, id)
        var hasiltod = tod[Math.floor(Math.random() * (tod.length))]
        if (hasiltod == "Truth"){
            const dota = fs.readFileSync('./lib/database/truth.json')
            const dotaJson = JSON.parse(dota)
            const rondtruth = Math.floor(Math.random() * dotaJson.length)
            const rondtruthh = dotaJson[rondtruth]
            await zama.reply(self, `*${hasiltod}*\n\n${rondtruthh}`,id)
        }
        if (hasiltod == "Dare"){
            const dotaa = fs.readFileSync('./lib/database/dare.json')
            const dotaaJson = JSON.parse(dotaa)
            const ronddare = Math.floor(Math.random() * dotaaJson.length)
            const ronddaree = dotaaJson[ronddare]
            await zama.reply(self, `*${hasiltod}*\n\n${ronddaree}`,id)
        }
            break
        case `${prefix}bokep`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id) // MFARELS
        case `${prefix}randombokep`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id) // MFARELS
        case `${prefix}bkp`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id) // MFARELS
            if (!isGroupMsg) return zama.reply(self, `Perintah ini hanya bisa di gunakan dalam group!`, id) // MFARELS
            if (!isNsfw) return zama.reply(self, `command/Perintah NSFW belum di aktifkan di group ini!`, id) // MFARELS
            if (isLimit(serial)) return zama.reply(self, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik #limit Untuk Mengecek Kuota Limit Kamu`, id) // MFARELS

            await limitAdd(serial) // MFARELS
            const mskkntl = fs.readFileSync('./lib/database/18+.json') // MFARELS
            const kntlnya = JSON.parse(mskkntl) // MFARELS
            const rindBkp = Math.floor(Math.random() * kntlnya.length) // MFARELS
            const rindBkep = kntlnya[rindBkp] // MFARELS
            zama.sendFileFromUrl(self, rindBkep.image, 'Bokep.jpg', rindBkep.teks, id) // MFARELS
            break
        case `${prefix}resend`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
                if (!isGroupAdmins) return zama.reply(self, `Gagal, Fitur ini hanya bisa digunakan oleh Admin`, id)
                if (quotedMsgObj) {
                    let encryptMedia
                    let replyOnReply = await zama.getMessageById(quotedMsgObj.id)
                    let obj = replyOnReply.quotedMsgObj
                    if (/ptt|audio|video|image|document|sticker/.test(quotedMsgObj.type)) {
                        encryptMedia = quotedMsgObj
                        if (encryptMedia.animated) encryptMedia.mimetype = ''
                    } else if (obj && /ptt|audio|video|image/.test(obj.type)) {
                        encryptMedia = obj
                    } else return
                    const _mimetype = encryptMedia.mimetype
                    const mediaData = await decryptMedia(encryptMedia)
                    await zama.sendFile(self, `data:${_mimetype};base64,${mediaData.toString('base64')}`, 'file', ':)', encryptMedia.id)
                } else zama.reply(self, config.msg.noMedia, id)
                break
        case `${prefix}resetlinkgroup`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
            if (!isGroupMsg) return zama.reply(self, `Fitur ini hanya bisa di gunakan dalam group`, id)
            if (!isGroupAdmins) return zama.reply(self, `Fitur ini hanya bisa di gunakan oleh admin group`, id)
            if (!isBotGroupAdmins) return zama.reply(self, `Fitur ini hanya bisa di gunakan ketika bot menjadi admin`, id)
            if (isGroupMsg) {
            await zama.revokeGroupInviteLink(groupId);
            zama.sendTextWithMentions(self, `Link group telah direset oleh admin @${sender.id.replace('@c.us', '')}`)
            }
            break
        case `${prefix}setprefix`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
            if(!isOwner) return zama.reply(self, `Perintah ini hanya bisa di gunakan oleh Owner Zam!`, id)
            if (args.length === 1) return zama.reply(self, `Kirim perintah *${prefix}prefix [ NEW PREFIX ]*`, id)
            const prefa = body.slice(11)
            setting.prefix = `${prefa}`
            prefix = `${prefa}`
            fs.writeFileSync('./lib/database/setting.json', JSON.stringify(setting))
            zama.sendText(self, `Berhasil Mengganti Prefix Ke *「* ${prefa} *」*`)
            break
        case `${prefix}setlimit`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
            if(!isOwner) return zama.reply(self, `Perintah ini hanya bisa dilakukan oleh Owner Zam`, id)
            const limitt = body.slice(10)
            setting.limitCount = `${limitt}`
            limitCount = `${limitt}`
            fs.writeFileSync('./lib/database/setting.json', JSON.stringify(setting))
            zama.sendText(self, `Berhasil mengatur limit ke *「* ${limitt} *」*`)
            break
        case `${prefix}setgrouplimit`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
            if(!isOwner) return zama.reply(self, `Perintah ini hanya bisa dilakukan oleh Owner Zam`, id)
            const grouplim = body.slice(15)
            setting.groupLimit = `${grouplim}`
            groupLimit = `${grouplim}`
            fs.writeFileSync('./lib/database/setting.json', JSON.stringify(setting))
            zama.sendText(self, `Berhasil mengatur limit Group ke *「* ${grouplim} *」*`)
            break
        case `${prefix}setmemberlimit`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
            if(!isOwner) return zama.reply(self, `Perintah ini hanya bisa dilakukan oleh Owner Zam`, id)
            const memlim = body.slice(16)
            setting.memberLimit = `${memlim}`
            memberLimit = `${memlim}`
            fs.writeFileSync('./lib/database/setting.json', JSON.stringify(setting))
            zama.sendText(self, `Berhasil mengatur limit member ke *「* ${memlim} *」*`)
            break
        case `${prefix}gift`: // Hanya Admin & Owner Elaina yang bisa gift Limit
            if (!isAdmin, !isOwner) return zama.reply(self, `Maaf, perintah ini hanya dapat dilakukan oleh Admin Elaina!`, id)
                    const giv = body.slice(6)
                    const nomerr = giv.split(' ')[0]
                    const jmla = giv.split(' ')[1]
                    if(!nomerr) return zama.reply(self, `Masukkan nomor yang akan di gift, ${prefix}gift [ @tagmember Jumlah ]\n=> Contoh : ${prefix}gift @62813118507151 15`, id)
                    let texta = nomerr.replace(/[-\s+@c.us]/g,'')
                    const cusz = texta + '@c.us'
                    if(!jmla) return zama.reply(self, `Masukkan Jumlah gift quota, ${prefix}gift [ @tagmember Jumlah ]\n=> Contoh : ${prefix}gift @62813118507151 15`, id)
                    if(jmla > 20) return await zama.reply(self, `Maximal  20!`, id)
                        var found = false
                        Object.keys(limit).forEach((i) => {
                            if(limit[i].id == cusz){
                                found = i
                            }
                        })
                        if (found !== false) {
                            limit[found].limit = Math.max(0, limit[found].limit);
                            if(limit[found].limit <= 30) { // JIKA LIMIT 0 MAKA BISA GIFT
                                return zama.reply(self, `Kuota limit pada nomor tersebut sudah penuh!`, id)
                            }else{
                            limit[found].limit -= jmla
                            const updated = limit[found]
                            const result = `Gift kuota limit sukses pada ${moment().format('DD/MM/YY HH:mm:ss')}
*「 GIFT KUOTA LIMIT 」*
• User : @${updated.id.replace('@c.us','')}
• Limit: ${limitCount-updated.limit}`
                            console.log(limit[found])
                            fs.writeFileSync('./lib/database/limit.json',JSON.stringify(limit));
                            zama.sendTextWithMentions(self, result)
                            }
                        } else {
                                zama.reply(self, `Maaf, nomor itu tidak terdaftar di database!`, id)
                        }
                break
        case `prefix`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
            zama.reply(self, `*Zam is Use ( ${prefix} ) Prefix!.*
_Prefix adalah tanda di awal perintah._
_Contoh: ${prefix}menu_`, id)
            break
        case `${prefix}tomp3`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
                    if ((isMedia || isQuotedVideo || isQuotedFile)) {
                        zama.reply(self, mess.wait, ('mp4', 'mp3', 'Meng-ekstrak audio dari video'), id)
                        const encryptMedia = isQuotedVideo || isQuotedFile ? quotedMsg : message
                        const _mimetype = isQuotedVideo || isQuotedFile ? quotedMsg.mimetype : mimetype
                        console.log(color('[WAPI]', 'green'), 'Downloading and decrypt media...')
                        const mediaData = await decryptMedia(encryptMedia)
                        let temp = './temp'
                        let name = new Date() * 1
                        let fileInputPath = path.join(temp, 'video', `${name}.${_mimetype.replace(/.+\//, '')}`)
                        let fileOutputPath = path.join(temp, 'audio', `${name}.mp3`)
                        console.log(color('[fs]', 'green'), `Downloading media into '${fileInputPath}'`)
                        fs.writeFile(fileInputPath, mediaData, err => {

                            // ffmpeg -y -t 5 -i <input_file> -vf "scale=512:512:flags=lanczos:force_original_aspect_ratio=decrease" -qscale 100 <output_file>.webp
                            ffmpeg(fileInputPath)
                                .format('mp3')
                                .on('start', function (commandLine) {
                                    console.log(color('[FFmpeg]', 'green'), commandLine)
                                })
                                .on('progress', function (progress) {
                                    console.log(color('[FFmpeg]', 'green'), progress)
                                })
                                .on('end', function () {
                                    console.log(color('[FFmpeg]', 'green'), 'Processing finished!')
                                    // fs.readFile(fileOutputPath, { encoding: 'base64' }, (err, base64) => {
                                    // if (err) return zama.sendText(self, `Ada yang error saat membaca file .mp3') && console.log(color('[ERROR]', 'red'), err)
                                    zama.sendFile(self, fileOutputPath, 'audio.mp3', '', id)
                                    // })
                                    setTimeout(() => {
                                        try {
                                            fs.unlinkSync(fileInputPath)
                                            fs.unlinkSync(fileOutputPath)
                                        } catch (e) {
                                            console.log(color('[ERROR]', 'red'), e)
                                        }
                                    }, 30000)
                                })
                                .save(fileOutputPath)
                        })
                    }
                    limitAdd(serial)
                break
        case `${prefix}cerpen`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
                    const cerpen = await get.get('https://tobzz.herokuapp.com/api/cerpen').json()
                    zama.reply(self, `➸ *Cerpen*: ${cerpen.result}`, id)
                    break
        case `${prefix}puisi`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
                    const puisi = await get.get('https://tobzz.herokuapp.com/api/puisi1').json()
                    zama.reply(self, `➸ *Puisi*: ${puisi.result}`, id)
                    break
        case `${prefix}puisi2`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
                    const puisi2 = await get.get('https://tobzz.herokuapp.com/api/puisi2').json()
                    zama.reply(self, `➸ *Puisi*: ${puisi2.result}`, id)
                    break
        case `${prefix}puisi3`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
                    const puisi3 = await get.get('https://tobzz.herokuapp.com/api/puisi3').json()
                    zama.reply(self, `➸ *Puisi*: ${puisi3.result}`, id)
                    break
        case `${prefix}bass`:{
                    if (isQuotedAudio) {
                        let dB = 20
                        let freq = 60
                        if (args[0]) dB = clamp(parseInt(args[0]) || 20, 0, 50)
                        if (args[1]) freq = clamp(parseInt(args[1]) || 20, 20, 500)
                        let mediaData = await decryptMedia(quotedMsg)
                        let temp = './temp'
                        let name = new Date() * 1
                        let fileInputPath = path.join(temp, 'audio', `${name}.mp3`)
                        let fileOutputPath = path.join(temp, 'audio', `${name}_2.mp3`)
                        console.log(color('[fs]', 'green'), `Writing media into '${fileInputPath}'`)
                        zama.reply(self, `tunggu ya sedang diproses`, ('mp3', 'mp3', `Bass ${freq}hz: +${dB}dB`), id)
                        fs.writeFile(fileInputPath, mediaData, err => {
                            if (err) return zama.sendText(self, `Ada yang error saat menulis file`, id)
                            ffmpeg(fileInputPath)
                                .audioFilter('equalizer=f=' + freq + ':width_type=o:width=2:g=' + dB)
                                .format('mp3')
                                .on('start', function (commandLine) {
                                    console.log(color('[FFmpeg]', 'green'), commandLine)
                                })
                                .on('progress', function (progress) {
                                    console.log(color('[FFmpeg]', 'green'), progress)
                                })
                                .on('end', function () {
                                    console.log(color('[FFmpeg]', 'green'), 'Processing finished!')
                                    // fs.readFile(fileOutputPath, { encoding: 'base64' }, (err, base64) => {
                                    // if (err) return zama.sendText(self, `Ada yang error saat membaca file .mp3') && console.log(color('[ERROR]', 'red'), err)
                                    zama.sendFile(self, fileOutputPath, 'distorted.mp3', '', id)
                                    // })
                                    setTimeout(() => {
                                        try {
                                            fs.unlinkSync(fileInputPath)
                                            fs.unlinkSync(fileOutputPath)
                                        } catch (e) { _err(e) }
                                    }, 30000)
                                })
                                .save(fileOutputPath)
                        })
                    }
                }
                limitAdd(serial)
                break

                function clampFloat(value) {
                return value > 1 ? 1 : value < -1 ? -1 : value
            }
            function useQuoted(text, quotedMsgObj) {
                if (text && quotedMsgObj) return false
                else if (!text && quotedMsgObj) return true
                else if (text && !quotedMsgObj) return false
                else return ''
            }
            function clamp(value, min, max) {
                return Math.min(Math.max(min, value), max)
            }
            function distordFX(value) {
                return value > 0 ? 1 : value < 0 ? -1 : 0
            }

        case `${prefix}motor`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
            if (isLimit(serial)) return zama.reply(self, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik !limit Untuk Mengecek Kuota Limit Kamu`, id)

            await limitAdd(serial)
            const mtr = body.slice(7)
            try {
                const resp = await axios.get(`https://api.vhtear.com/infomotor?merk=${mtr}&apikey=${vhtearkey}`)
                if (resp.data.error) return zama.reply(self, resp.data.error, id)
                const kbbuaww = `➸ *Title* : ${resp.data.result.title}\n➸ *Harga* : ${resp.data.result.harga}\n➸ *Spesifikasi* : ${resp.data.result.spesifikasi}\n➸ *Kelebihan* : ${resp.data.result.kelebihan}\n➸ *Kekurangan* : ${resp.data.result.kekurangan}`
                zama.sendFileFromUrl(self, resp.data.result.image, 'gsm.jpg', kbbuaww, id)
            } catch (err) {
                console.error(err.message)
                await zama.sendFileFromUrl(self, errorurl2, 'error.png', '💔️ Maaf, tidak ditemukan')
                zama.sendText(ownerNumber, 'Motor Error : ' + err)
            }
            break
        case `${prefix}rpaper` :
                const wallnime = ['https://cdn.nekos.life/wallpaper/QwGLg4oFkfY.png','https://cdn.nekos.life/wallpaper/bUzSjcYxZxQ.jpg','https://cdn.nekos.life/wallpaper/j49zxzaUcjQ.jpg','https://cdn.nekos.life/wallpaper/YLTH5KuvGX8.png','https://cdn.nekos.life/wallpaper/Xi6Edg133m8.jpg','https://cdn.nekos.life/wallpaper/qvahUaFIgUY.png','https://cdn.nekos.life/wallpaper/leC8q3u8BSk.jpg','https://cdn.nekos.life/wallpaper/tSUw8s04Zy0.jpg','https://cdn.nekos.life/wallpaper/sqsj3sS6EJE.png','https://cdn.nekos.life/wallpaper/HmjdX_s4PU4.png','https://cdn.nekos.life/wallpaper/Oe2lKgLqEXY.jpg','https://cdn.nekos.life/wallpaper/GTwbUYI-xTc.jpg','https://cdn.nekos.life/wallpaper/nn_nA8wTeP0.png','https://cdn.nekos.life/wallpaper/Q63o6v-UUa8.png','https://cdn.nekos.life/wallpaper/ZXLFm05K16Q.jpg','https://cdn.nekos.life/wallpaper/cwl_1tuUPuQ.png','https://cdn.nekos.life/wallpaper/wWhtfdbfAgM.jpg','https://cdn.nekos.life/wallpaper/3pj0Xy84cPg.jpg','https://cdn.nekos.life/wallpaper/sBoo8_j3fkI.jpg','https://cdn.nekos.life/wallpaper/gCUl_TVizsY.png','https://cdn.nekos.life/wallpaper/LmTi1k9REW8.jpg','https://cdn.nekos.life/wallpaper/sbq_4WW2PUM.jpg','https://cdn.nekos.life/wallpaper/QOSUXEbzDQA.png','https://cdn.nekos.life/wallpaper/khaqGIHsiqk.jpg','https://cdn.nekos.life/wallpaper/iFtEXugqQgA.png','https://cdn.nekos.life/wallpaper/deFKIDdRe1I.jpg','https://cdn.nekos.life/wallpaper/OHZVtvDm0gk.jpg','https://cdn.nekos.life/wallpaper/YZYa00Hp2mk.jpg','https://cdn.nekos.life/wallpaper/R8nPIKQKo9g.png','https://cdn.nekos.life/wallpaper/_brn3qpRBEE.jpg','https://cdn.nekos.life/wallpaper/ADTEQdaHhFI.png','https://cdn.nekos.life/wallpaper/MGvWl6om-Fw.jpg','https://cdn.nekos.life/wallpaper/YGmpjZW3AoQ.jpg','https://cdn.nekos.life/wallpaper/hNCgoY-mQPI.jpg','https://cdn.nekos.life/wallpaper/3db40hylKs8.png','https://cdn.nekos.life/wallpaper/iQ2FSo5nCF8.jpg','https://cdn.nekos.life/wallpaper/meaSEfeq9QM.png','https://cdn.nekos.life/wallpaper/CmEmn79xnZU.jpg','https://cdn.nekos.life/wallpaper/MAL18nB-yBI.jpg','https://cdn.nekos.life/wallpaper/FUuBi2xODuI.jpg','https://cdn.nekos.life/wallpaper/ez-vNNuk6Ck.jpg','https://cdn.nekos.life/wallpaper/K4-z0Bc0Vpc.jpg','https://cdn.nekos.life/wallpaper/Y4JMbswrNg8.jpg','https://cdn.nekos.life/wallpaper/ffbPXIxt4-0.png','https://cdn.nekos.life/wallpaper/x63h_W8KFL8.jpg','https://cdn.nekos.life/wallpaper/lktzjDRhWyg.jpg','https://cdn.nekos.life/wallpaper/j7oQtvRZBOI.jpg','https://cdn.nekos.life/wallpaper/MQQEAD7TUpQ.png','https://cdn.nekos.life/wallpaper/lEG1-Eeva6Y.png','https://cdn.nekos.life/wallpaper/Loh5wf0O5Aw.png','https://cdn.nekos.life/wallpaper/yO6ioREenLA.png','https://cdn.nekos.life/wallpaper/4vKWTVgMNDc.jpg','https://cdn.nekos.life/wallpaper/Yk22OErU8eg.png','https://cdn.nekos.life/wallpaper/Y5uf1hsnufE.png','https://cdn.nekos.life/wallpaper/xAmBpMUd2Zw.jpg','https://cdn.nekos.life/wallpaper/f_RWFoWciRE.jpg','https://cdn.nekos.life/wallpaper/Y9qjP2Y__PA.jpg','https://cdn.nekos.life/wallpaper/eqEzgohpPwc.jpg','https://cdn.nekos.life/wallpaper/s1MBos_ZGWo.jpg','https://cdn.nekos.life/wallpaper/PtW0or_Pa9c.png','https://cdn.nekos.life/wallpaper/32EAswpy3M8.png','https://cdn.nekos.life/wallpaper/Z6eJZf5xhcE.png','https://cdn.nekos.life/wallpaper/xdiSF731IFY.jpg','https://cdn.nekos.life/wallpaper/Y9r9trNYadY.png','https://cdn.nekos.life/wallpaper/8bH8CXn-sOg.jpg','https://cdn.nekos.life/wallpaper/a02DmIFzRBE.png','https://cdn.nekos.life/wallpaper/MnrbXcPa7Oo.png','https://cdn.nekos.life/wallpaper/s1Tc9xnugDk.jpg','https://cdn.nekos.life/wallpaper/zRqEx2gnfmg.jpg','https://cdn.nekos.life/wallpaper/PtW0or_Pa9c.png','https://cdn.nekos.life/wallpaper/0ECCRW9soHM.jpg','https://cdn.nekos.life/wallpaper/kAw8QHl_wbM.jpg','https://cdn.nekos.life/wallpaper/ZXcaFmpOlLk.jpg','https://cdn.nekos.life/wallpaper/WVEdi9Ng8UE.png','https://cdn.nekos.life/wallpaper/IRu29rNgcYU.png','https://cdn.nekos.life/wallpaper/LgIJ_1AL3rM.jpg','https://cdn.nekos.life/wallpaper/DVD5_fLJEZA.jpg','https://cdn.nekos.life/wallpaper/siqOQ7k8qqk.jpg','https://cdn.nekos.life/wallpaper/CXNX_15eGEQ.png','https://cdn.nekos.life/wallpaper/s62tGjOTHnk.jpg','https://cdn.nekos.life/wallpaper/tmQ5ce6EfJE.png','https://cdn.nekos.life/wallpaper/Zju7qlBMcQ4.jpg','https://cdn.nekos.life/wallpaper/CPOc_bMAh2Q.png','https://cdn.nekos.life/wallpaper/Ew57S1KtqsY.jpg','https://cdn.nekos.life/wallpaper/hVpFbYJmZZc.jpg','https://cdn.nekos.life/wallpaper/sb9_J28pftY.jpg','https://cdn.nekos.life/wallpaper/JDoIi_IOB04.jpg','https://cdn.nekos.life/wallpaper/rG76AaUZXzk.jpg','https://cdn.nekos.life/wallpaper/9ru2luBo360.png','https://cdn.nekos.life/wallpaper/ghCgiWFxGwY.png','https://cdn.nekos.life/wallpaper/OSR-i-Rh7ZY.png','https://cdn.nekos.life/wallpaper/65VgtPyweCc.jpg','https://cdn.nekos.life/wallpaper/3vn-0FkNSbM.jpg','https://cdn.nekos.life/wallpaper/u02Y0-AJPL0.jpg','https://cdn.nekos.life/wallpaper/_-Z-0fGflRc.jpg','https://cdn.nekos.life/wallpaper/3VjNKqEPp58.jpg','https://cdn.nekos.life/wallpaper/NoG4lKnk6Sc.jpg','https://cdn.nekos.life/wallpaper/xiTxgRMA_IA.jpg','https://cdn.nekos.life/wallpaper/yq1ZswdOGpg.png','https://cdn.nekos.life/wallpaper/4SUxw4M3UMA.png','https://cdn.nekos.life/wallpaper/cUPnQOHNLg0.jpg','https://cdn.nekos.life/wallpaper/zczjuLWRisA.jpg','https://cdn.nekos.life/wallpaper/TcxvU_diaC0.png','https://cdn.nekos.life/wallpaper/7qqWhEF_uoY.jpg','https://cdn.nekos.life/wallpaper/J4t_7DvoUZw.jpg','https://cdn.nekos.life/wallpaper/xQ1Pg5D6J4U.jpg','https://cdn.nekos.life/wallpaper/aIMK5Ir4xho.jpg','https://cdn.nekos.life/wallpaper/6gneEXrNAWU.jpg','https://cdn.nekos.life/wallpaper/PSvNdoISWF8.jpg','https://cdn.nekos.life/wallpaper/SjgF2-iOmV8.jpg','https://cdn.nekos.life/wallpaper/vU54ikOVY98.jpg','https://cdn.nekos.life/wallpaper/QjnfRwkRU-Q.jpg','https://cdn.nekos.life/wallpaper/uSKqzz6ZdXc.png','https://cdn.nekos.life/wallpaper/AMrcxZOnVBE.jpg','https://cdn.nekos.life/wallpaper/N1l8SCMxamE.jpg','https://cdn.nekos.life/wallpaper/n2cBaTo-J50.png','https://cdn.nekos.life/wallpaper/ZXcaFmpOlLk.jpg','https://cdn.nekos.life/wallpaper/7bwxy3elI7o.png','https://cdn.nekos.life/wallpaper/7VW4HwF6LcM.jpg','https://cdn.nekos.life/wallpaper/YtrPAWul1Ug.png','https://cdn.nekos.life/wallpaper/1p4_Mmq95Ro.jpg','https://cdn.nekos.life/wallpaper/EY5qz5iebJw.png','https://cdn.nekos.life/wallpaper/aVDS6iEAIfw.jpg','https://cdn.nekos.life/wallpaper/veg_xpHQfjE.jpg','https://cdn.nekos.life/wallpaper/meaSEfeq9QM.png','https://cdn.nekos.life/wallpaper/Xa_GtsKsy-s.png','https://cdn.nekos.life/wallpaper/6Bx8R6D75eM.png','https://cdn.nekos.life/wallpaper/zXOGXH_b8VY.png','https://cdn.nekos.life/wallpaper/VQcviMxoQ00.png','https://cdn.nekos.life/wallpaper/CJnRl-PKWe8.png','https://cdn.nekos.life/wallpaper/zEWYfFL_Ero.png','https://cdn.nekos.life/wallpaper/_C9Uc5MPaz4.png','https://cdn.nekos.life/wallpaper/zskxNqNXyG0.jpg','https://cdn.nekos.life/wallpaper/g7w14PjzzcQ.jpg','https://cdn.nekos.life/wallpaper/KavYXR_GRB4.jpg','https://cdn.nekos.life/wallpaper/Z_r9WItzJBc.jpg','https://cdn.nekos.life/wallpaper/Qps-0JD6834.jpg','https://cdn.nekos.life/wallpaper/Ri3CiJIJ6M8.png','https://cdn.nekos.life/wallpaper/ArGYIpJwehY.jpg','https://cdn.nekos.life/wallpaper/uqYKeYM5h8w.jpg','https://cdn.nekos.life/wallpaper/h9cahfuKsRg.jpg','https://cdn.nekos.life/wallpaper/iNPWKO8d2a4.jpg','https://cdn.nekos.life/wallpaper/j2KoFVhsNig.jpg','https://cdn.nekos.life/wallpaper/z5Nc-aS6QJ4.jpg','https://cdn.nekos.life/wallpaper/VUFoK8l1qs0.png','https://cdn.nekos.life/wallpaper/rQ8eYh5mXN8.png','https://cdn.nekos.life/wallpaper/D3NxNISDavQ.png','https://cdn.nekos.life/wallpaper/Z_CiozIenrU.jpg','https://cdn.nekos.life/wallpaper/np8rpfZflWE.jpg','https://cdn.nekos.life/wallpaper/ED-fgS09gik.jpg','https://cdn.nekos.life/wallpaper/AB0Cwfs1X2w.jpg','https://cdn.nekos.life/wallpaper/DZBcYfHouiI.jpg','https://cdn.nekos.life/wallpaper/lC7pB-GRAcQ.png','https://cdn.nekos.life/wallpaper/zrI-sBSt2zE.png','https://cdn.nekos.life/wallpaper/_RJhylwaCLk.jpg','https://cdn.nekos.life/wallpaper/6km5m_GGIuw.png','https://cdn.nekos.life/wallpaper/3db40hylKs8.png','https://cdn.nekos.life/wallpaper/oggceF06ONQ.jpg','https://cdn.nekos.life/wallpaper/ELdH2W5pQGo.jpg','https://cdn.nekos.life/wallpaper/Zun_n5pTMRE.png','https://cdn.nekos.life/wallpaper/VqhFKG5U15c.png','https://cdn.nekos.life/wallpaper/NsMoiW8JZ60.jpg','https://cdn.nekos.life/wallpaper/XE4iXbw__Us.png','https://cdn.nekos.life/wallpaper/a9yXhS2zbhU.jpg','https://cdn.nekos.life/wallpaper/jjnd31_3Ic8.jpg','https://cdn.nekos.life/wallpaper/Nxanxa-xO3s.png','https://cdn.nekos.life/wallpaper/dBHlPcbuDc4.jpg','https://cdn.nekos.life/wallpaper/6wUZIavGVQU.jpg','https://cdn.nekos.life/wallpaper/_-Z-0fGflRc.jpg','https://cdn.nekos.life/wallpaper/H9OUpIrF4gU.jpg','https://cdn.nekos.life/wallpaper/xlRdH3fBMz4.jpg','https://cdn.nekos.life/wallpaper/7IzUIeaae9o.jpg','https://cdn.nekos.life/wallpaper/FZCVL6PyWq0.jpg','https://cdn.nekos.life/wallpaper/5dG-HH6d0yw.png','https://cdn.nekos.life/wallpaper/ddxyA37HiwE.png','https://cdn.nekos.life/wallpaper/I0oj_jdCD4k.jpg','https://cdn.nekos.life/wallpaper/ABchTV97_Ts.png','https://cdn.nekos.life/wallpaper/58C37kkq39Y.png','https://cdn.nekos.life/wallpaper/HMS5mK7WSGA.jpg','https://cdn.nekos.life/wallpaper/1O3Yul9ojS8.jpg','https://cdn.nekos.life/wallpaper/hdZI1XsYWYY.jpg','https://cdn.nekos.life/wallpaper/h8pAJJnBXZo.png','https://cdn.nekos.life/wallpaper/apO9K9JIUp8.jpg','https://cdn.nekos.life/wallpaper/p8f8IY_2mwg.jpg','https://cdn.nekos.life/wallpaper/HY1WIB2r_cE.jpg','https://cdn.nekos.life/wallpaper/u02Y0-AJPL0.jpg','https://cdn.nekos.life/wallpaper/jzN74LcnwE8.png','https://cdn.nekos.life/wallpaper/IeAXo5nJhjw.jpg','https://cdn.nekos.life/wallpaper/7lgPyU5fuLY.jpg','https://cdn.nekos.life/wallpaper/f8SkRWzXVxk.png','https://cdn.nekos.life/wallpaper/ZmDTpGGeMR8.jpg','https://cdn.nekos.life/wallpaper/AMrcxZOnVBE.jpg','https://cdn.nekos.life/wallpaper/ZhP-f8Icmjs.jpg','https://cdn.nekos.life/wallpaper/7FyUHX3fE2o.jpg','https://cdn.nekos.life/wallpaper/CZoSLK-5ng8.png','https://cdn.nekos.life/wallpaper/pSNDyxP8l3c.png','https://cdn.nekos.life/wallpaper/AhYGHF6Fpck.jpg','https://cdn.nekos.life/wallpaper/ic6xRRptRes.jpg','https://cdn.nekos.life/wallpaper/89MQq6KaggI.png','https://cdn.nekos.life/wallpaper/y1DlFeHHTEE.png']
                let walnimekk = wallnime[Math.floor(Math.random() * wallnime.length)]
                zama.sendFileFromUrl(self, walnimekk, 'Nimek.jpg', '', message.id)
                limitAdd(serial)
                break
        /*case `${prefix}nobg`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
        if (isMedia) {
                try {
                    var mediaData = await decryptMedia(message, uaOverride)
                    var imageBase64 = `data:${mimetype};base64,${mediaData.toString('base64')}`
                    var base64img = imageBase64
                    var outFile = './media/img/noBg.png'
                    // untuk api key kalian bisa dapatkan pada website remove.bg
                    var result = await removeBackgroundFromImageBase64({ base64img, apiKey: 'F3wZAdCbRH8J3fPdq5oNHfri', size: 'auto', type: 'auto', outFile })
                    await fs.writeFile(outFile, result.base64img)
                    await zama.sendImageAsSticker(self, `data:${mimetype};base64,${result.base64img}`)
                } catch(err) {
                    console.log(err)
                }
            }
            break*/
        case `${prefix}cttp`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
            if (isLimit(serial)) return zama.reply(self, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            if (args.length === 1) return zama.reply(self, `Kirim perintah *#ttp2 [ Teks ]*, contoh *#ttp2 Z*`, id)
            const ttpp = body.slice(6)
                const cttp1 = ttpp.split('-')[0]
                const cttp2 = ttpp.split('-')[1]
            await zama.sendStickerfromUrl(self, `https://api.vhtear.com/textmaker?text=${cttp1}&warna=${cttp2}&apikey=${vhtearkey}`)
            break
        case `${prefix}rttp`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
            if (isLimit(serial)) return zama.reply(self, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            if (args.length === 1) return zama.reply(self, `Kirim perintah *#ttp2 [ Teks ]*, contoh *#ttp2 Z*`, id)
            const ttp2t = body.slice(6)
            const lttp2 = ["Orange","White","Green","Black","Purple","Red","Yellow","Blue","Navy","Grey","Magenta","Brown","Gold"]
            const rttp2 = lttp2[Math.floor(Math.random() * (lttp2.length))]
            await zama.sendStickerfromUrl(self, `https://api.vhtear.com/textmaker?text=${ttp2t}&warna=${rttp2}&apikey=${vhtearkey}`)
            break
        case `${prefix}listwarnattp`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
         zama.sendText(self, `Orange\nWhite\nGreen\nBlack\nPurple\nRed\nYellow\nBlue\nNavy\nGrey\nMagenta\nBrown\nGold`, id)
        break
        case `${prefix}hug`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
            if (!isGroupMsg) return zama.reply(self, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            arg = body.trim().split(' ')
            const janjing = author.replace('@c.us', '')
            await zama.sendGiphyAsSticker(self, `https://media.giphy.com/media/od5H3PmEG5EVq/giphy.gif`)
            zama.sendTextWithMentions(self, '@' + janjing + ' *peyuuuk* ' + arg[1])
            break
        case `${prefix}nye`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
            if (!isGroupMsg) return zama.reply(self, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            const nye = body.slice(5)
            const jancuk7 = author.replace('@c.us', '')
            await zama.sendGiphyAsSticker(self, `https://media.giphy.com/media/cute-baka-13LunYkkBppSBa/giphy.gif`)
            zama.sendTextWithMentions(self, '@' + jancuk7 +' *nye nye* ' + nye)
            break
        case `${prefix}pat`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
            if (!isGroupMsg) return zama.reply(self, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            const pat = body.slice(5)
            const jartod = author.replace('@c.us', '')
            await zama.sendGiphyAsSticker(self, `https://media.giphy.com/media/Z7x24IHBcmV7W/giphy.gif`)
            zama.sendTextWithMentions(self, '@' + jartod + ' *👈 Si Mengelu-elus si👉* ' + pat)
            break
        case `${prefix}flip`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
                    const sides = Math.floor(Math.random() * 2) + 1
                    if (sides == 1) {
                    zama.sendStickerfromUrl(self, `https://i.ibb.co/LJjkVK5/heads.png`)
                  } else {
                    zama.sendStickerfromUrl(self, `https://i.ibb.co/wNnZ4QD/tails.png`)
                  }
                  break
                case `${prefix}trigger`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
                    if (!isGroupMsg) return zama.reply(self, `Perintah ini hanya bisa di gunakan dalam group`, id)
                    arg = body.trim().split(' ')
                    const pukimak = ['https://media.giphy.com/media/yaAbruchhQFFu/source.gif', 'https://media.giphy.com/media/d7wz7XI8RAikOv6iTI/source.gif']
                    const kiya = pukimak[Math.floor(Math.random() * pukimak.length)]
                    const bruhh = author.replace('@c.us', '')
                    await zama.sendGiphyAsSticker(self, kiya, id)
                    zama.sendTextWithMentions(self, '@' + bruhh + ' *Triggered* ' + arg[1])
                    break
            case `${prefix}infoalamat`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
                if (isLimit(serial)) return zama.reply(self, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik #limit Untuk Mengecek Kuota Limit Kamu`, id)

                await limitAdd(serial)
                if (args.length === 1) return zama.reply(self, `Kirim perintah *#heroml [nama hero]*Contoh : *#heroml akai*`, id)
                try {
                const resp = await axios.get('https://api.vhtear.com/infoalamat?query=' + body.slice(11) + '&apikey=' + vhtearkey)
                if (resp.data.error) return zama.reply(self, resp.data.error, id)
                const anm2 = `➸ Info : ${resp.data.result.data}
\n➸ Deskripsi : ${resp.data.result.deskripsi}`
                zama.reply(self, anm2, id)
                } catch (err) {
                console.error(err.message)
                await zama.sendFileFromUrl(self, errorurl2, 'error.png', '💔️ Maaf, User tidak ditemukan')
                zama.sendText(ownerNumber, 'Heroml Error : ' + err)
                }
            break
        case '@verify':
                if (isregistered) return zama.reply(self, `Nomor anda telah diverifikasi\nAnda tidak perlu memverifikasinya lagi`, id)
                var sts = await zama.getStatus(author)
            const { statuss } = sts
                regisNumber.push(sender.id)
                fs.writeFileSync('./lib/database/daftar.json', JSON.stringify(regisNumber))
                zama.reply(self, `───「 Verifikasi 」───

+ Nama : ${nma}
+ Nomor : wa.me/${sender.id.replace("@c.us","")}

───────────────────
Terima kasih telah melakukan Verifikasi.
Total user terverifikasi : ${regisNumber.length}

          ║▌│█║▌│ █║▌│█│║▌║
          ║▌│█║▌│ █║▌│█│║▌║

                     Zam  `, id)
            break
        case `${prefix}addpremium`:
            if(!isOwner) return zama.reply(self, 'Perintah ini hanya bisa dilakukan oleh admin', id)
            for (let i = 0; i < mentionedJidList.length; i++) {
            premiumuser.push(mentionedJidList[i])
            fs.writeFileSync('./lib/database/premium.json', JSON.stringify(premiumuser))
            zama.reply(self, `───「 SUKSES MENAMBAHKAN USER KE PREMIUM LIST 」───

───────────────────
Terima kasih telah menjadi user premium.
Total user premium : ${premiumuser.length}

          ║▌│█║▌│ █║▌│█│║▌║
          ║▌│█║▌│ █║▌│█│║▌║

                     Zam  `, id)
        }
        break
        case `${prefix}delpremium`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
            if (!isOwner) return zama.reply(self, `Perintah ini hanya bisa di gunakan oleh Owner Zam!`, id)
                let inqqqq = premiumuser.indexOf(mentionedJidList[0])
                premiumuser.splice(inqqqq, 1)
                fs.writeFileSync('./lib/database/premium.json', JSON.stringify(premiumuser))
                zama.reply(self, `Success Menghapus premium!`, id)
            break
        case `${prefix}userpremium`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
            let premi = `Daftar pengguna premium\nTotal : ${premiumuser.length}\n`
            for (let o of premiumuser) {
                premi += `➸ @${o.replace(/@c.us/g,'')}\n`
            }
            await zama.sendTextWithMentions(self, premi)
            break
        case `${prefix}userlist`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
            let regis = `Daftar pengguna terverifikasi\nTotal : ${regisNumber.length}\n`
            for (let i of regisNumber) {
                regis += `➸ @${i.replace(/@c.us/g,'')}\n`
            }
            await zama.sendTextWithMentions(self, regis)
            break
        case `${prefix}unreg`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
        if (!isAdmin) return zama.reply(self, `Perintah ini hanya bisa dilakukan oleh admin Zam`, id)
            if (quotedMsg) {
            var qmid = quotedMsgObj.sender.id
            let inqqq = regisNumber.indexOf(qmid)
                regisNumber.splice(inqqq, 1)
                fs.writeFileSync('./lib/database/daftar.json', JSON.stringify(regisNumber))
                zama.sendTextWithMentions(self, `Success Unreg @${qmid.replace("@c.us","")}!`)
            }
        let inqqq = regisNumber.indexOf(mentionedJidList[0])
                regisNumber.splice(inqqq, 1)
                fs.writeFileSync('./lib/database/daftar.json', JSON.stringify(regisNumber))
                zama.sendTextWithMentions(self, `Success Unreg ${body.slice(7)}!`)
            break
        case `${prefix}totaluser`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
        if (!isAdmin) return zama.reply(self, `Perintah ini hanya bisa dilakukan oleh admin Zam`, id)
        await zama.reply(self, `Total Pengguna yang terverifikasi : ${regisNumber.length}`,id)
    break
        case `${prefix}runtime`:
            function format(seconds){
            function pad(s){
            return (s < 10 ? '0' : '') + s;
            }
            var hours = Math.floor(seconds / (60*60));
             var minutes = Math.floor(seconds % (60*60) / 60);
             var seconds = Math.floor(seconds % 60);

             return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds);
              }

            var uptime = process.uptime();
            zama.reply(self, `Bot telah berjalan selama ${format(uptime)}`, id)
            break
        case `${prefix}afk`:
                if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
                if (!isGroupMsg) return await zama.reply(self, ind.groupOnly(), id)
                if (isAfkon) return await zama.reply(self, `Fitur AFK telah diaktifkan sebelumnya.`, id)
                const reason = body.slice(5)
                addAfk(sender.id, time, reason)
                await zama.reply(self, `Fitur AFK berhasil *diaktifkan*!\n\n➸ *Username*: ${pushname}\n➸ *Alasan*: ${reason}`, id)
            break
        case `${prefix}leveling`:
                if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
                if (!isGroupMsg) return zama.reply(self, `Perintah ini hanya bisa di gunakan dalam group!`, id)
                if (!isGroupAdmins) return await zama.reply(self, `Perintah ini hanya bisa dilakukan oleh admin group`, id)
                if (ar[1] === 'enable') {
                    if (isLevelingOn) return await zama.reply(self, ind.levelingOnAlready(), id)
                    _leveling.push(chat.id)
                    fs.writeFileSync('./lib/database/leveling.json', JSON.stringify(_leveling))
                    await zama.reply(self, ind.levelingOn(), id)
                } else if (ar[1] === 'disable') {
                    _leveling.splice(chat.id, 1)
                    fs.writeFileSync('./lib/database/leveling.json', JSON.stringify(_leveling))
                    await zama.reply(self, ind.levelingOff(), id)
                } else {
                    await zama.reply(self, ind.wrongFormat(), id)
                }
            break
        /*case `${prefix}leveling`:
                if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
                if (!isGroupMsg) return zama.reply(self, `Perintah ini hanya bisa di gunakan dalam group!`, id)
                if (!isAdminban) return await zama.reply(self, `Perintah ini hanya bisa dilakukan oleh adminban Z`, id)
                if (ar[1] === 'enable') {
                    if (isLevelingOn) return await zama.reply(self, ind.levelingOnAlready(), id)
                    _leveling.push(chat.id)
                    fs.writeFileSync('./lib/database/leveling.json', JSON.stringify(_leveling))
                    await zama.reply(self, ind.levelingOn(), id)
                } else if (ar[1] === 'disable') {
                    _leveling.splice(chat.id, 1)
                    fs.writeFileSync('./lib/database/leveling.json', JSON.stringify(_leveling))
                    await zama.reply(self, ind.levelingOff(), id)
                } else {
                    await zama.reply(self, ind.wrongFormat(), id)
                }
            break*/
        case `${prefix}respon`:
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
            if (!isGroupMsg) return zama.reply(self, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            if (!isGroupAdmins) return zama.reply(self, `Perintah ini hanya bisa di gunakan oleh Admin group!`, id)
            if (!isBotGroupAdmins) return zama.reply(self, `Perintah ini hanya bisa di gunakan jika Bot menjadi Admin!`, id)
            if (args[1] == 'suara') {
                var cek = respon.includes(chatId);
                if(cek){
                    return zama.reply(self, `Respon suara telah diaktifkan di group ini`, id)
                } else {
                    respon.push(chatId)
                    fs.writeFileSync('./lib/database/respon.json', JSON.stringify(respon))
                    zama.reply(self, `Respon suara telah diaktifkan di group ini`, id)
                }
            } else if (args[1] == 'text') {
                var cek = respon.includes(chatId);
                if(!cek){
                    return zama.reply(self, `Respon text telah diaktifkan di group ini`, id)
                } else {
                    let nixx = respon.indexOf(chatId)
                    respon.splice(nixx, 1)
                    fs.writeFileSync('./lib/database/respon.json', JSON.stringify(respon))
                    zama.reply(self, `Respon text telah diaktifkan di group ini`, id)
                }
            } else {
                zama.reply(self, `Pilih suara atau text udin!`, id)
            }
            break
        case `${prefix}ig2`: {
                const igmp4 = body.slice(7)
                if (!igmp4) return zama.reply(self, `Kirim perintah #ig2 linknya\n\nContoh : #ig2 https://www.instagram.com/p/CI5C1U5Boaa/?igshid=11ab1ua6kbjb8`, id)
                zama.reply(self, mess.wait, id)
                const puppeteer = require('puppeteer')
                try {
                (async () => {
                const browser = await puppeteer.launch({
                    headless: true,
                });
                const page = await browser.newPage();
                await page
                .goto("https://www.instagramsave.com/download-instagram-videos.php#video-downloader", {
                waitUntil: "networkidle2"
                })
                .then(async () => {
                await page.type("#input", igmp4);
                await page.click("#btnPost");
                await new Promise(resolve => setTimeout(resolve, 3000));
                const element = await page.$(
                    'div[class="content"] > a'
                );
                const text = await (await element.getProperty("href")).jsonValue();
                const urlmp4 = ({
                    url: text
                })
                zama.sendFileFromUrl(self, text,`ig.mp4`,`Nih kak ${nma}`, id)
                browser.close();

                })
                .catch((err => {
                console.log(err)
                zama.reply(self, `error`, id)
                }))
                })();
                } catch (error) {
                console.log('error bang')
                zama.reply(self, `error`, id)
                }
                }
                break
        case `${prefix}ytaudio`: {
            const yt2matekudasai = body.slice(5)
            if (!yt2matekudasai) return zama.reply(self, `Kirim perintah #ytmp3 [linkyt]\n\nContoh : ${prefix}ytaudio https://yotube.com/blabla`, id)
            zama.reply(self, mess.wait, id)
            const puppeteer = require('puppeteer')
            try {
            (async () => {
            const browser = await puppeteer.launch({
                headless: true,
            });
            const page = await browser.newPage();
            await page
            .goto("https://ytmp3.cc/en13/", {
            waitUntil: "networkidle2"
            })
            .then(async () => {
            await page.type("#input", yt2matekudasai);
            await page.click("#submit");
            await new Promise(resolve => setTimeout(resolve, 3000));
            const element = await page.$(
                'div[id="buttons"] > a'
            );
            const text = await (await element.getProperty("href")).jsonValue();
            const urlmp4 = ({
                url: text
            })
            zama.sendFileFromUrl(self, text, id)
            browser.close();

            })
            .catch((err => {
            console.log(err)
            zama.reply(self, `error`, id)
            }))
            })();
            } catch (error) {
            console.log('error bang')
            zama.reply(self, `error`, id)
            }
            }
            break
        case `${prefix}level`:
                if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
                if (!isLevelingOn) return await zama.reply(self, ind.levelingNotOn(), id)
                if (!isGroupMsg) return await zama.reply(self, ind.groupOnly(), id)
                if (userLevel === undefined && userXp === undefined) return await zama.reply(self, ind.levelNull(), id)
                const ppLink = await zama.getProfilePicFromServer(sender.id)
                if (ppLink === undefined) {
                    var pepe = errorImg
                } else {
                    var pepe = ppLink
                }
                const requiredXp = 8000 * (Math.pow(2, userLevel) - 1)
                const userId = sender.id.substring(9, 13)
                const randomHexs = `#${(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0')}`
                const randomHex = `#${(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0')}`
                const rank = new canvas.Rank()
                    .setAvatar(pepe)
                    .setLevel(userLevel)
                    .setRankColor('#2c2f33', '#2c2f33')
                    .setCurrentXP(userXp)
                    .setRequiredXP(requiredXp)
                    .setProgressBar([randomHexs, randomHex], 'GRADIENT')
                    .setUsername(pushname)
                    .setDiscriminator(userId)
                rank.build()
                    .then(async (buffer) => {
                        canvas.write(buffer, `${pushname}.png`)
                        await zama.sendFile(self, `${pushname}.png`, `${pushname}.png`, '', id)
                            .then(() => fs.unlinkSync(`${pushname}.png`))
                    })
                    .catch(async (err) => {
                        console.error(err)
                        await zama.reply(self, `Error!\n${err}`, id)
                    })
            break
            case 'leaderboard':
                if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
                if (!isLevelingOn) return await zama.reply(self, ind.levelingNotOn(), id)
                if (!isGroupMsg) return await zama.reply(self. ind.groupOnly(), id)
                const resp = _level
                resp.sort((a, b) => (a.xp < b.xp) ? 1 : -1)
                let leaderboard = '-----[ *LEADERBOARD* ]----\n\n'
                let nom = 0
                try {
                    for (let i = 0; i < 15; i++) {
                        nom++
                        leaderboard += `${nom}. @${resp[i].id.replace('@c.us', '')}\n➸ XP: *${resp[i].xp}* Level: *${resp[i].level}*\n\n`
                    }
                    await zama.sendTextWithMentions(self, leaderboard)
                } catch (err) {
                    console.error(err)
                    await zama.reply(self, ind.minimalDb(), id)
                }
            break
        case `${prefix}asupan`:
        case `${prefix}ptlvid`:
            if (!isGroupMsg) return zama.reply(self, `Perintah ini hanya bisa dilakukan dalam group`, id)
            zama.reply(self, `Tunggu sebentar kaka...`, id)
            const ditai = fs.readFileSync('./lib/database/asupan.json')
            const ditaijson = JSON.parse(ditai)
            const randtai = Math.floor(Math.random() * ditaijson.length)
            const randtaii = ditaijson[randtai]
            zama.sendFileFromUrl(self, randtaii, 'asupan.mp4','Nih Asupan', id)
            break
        case `${prefix}hii`: // Credit By ./NotF0und
            if (isBanned, isBlocked) return
                var item = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20"]
                var randomItem = item[Math.floor(Math.random() * item.length)]
                await zama.sendTextWithMentions(self, `Hi juga kak~ 👋\n@${sender.id.replace('@c.us','')}`)
                await zama.sendImage(self, `./media/picthi/${randomItem}.jpg`, '', `Nihh ku kasi asupan biar semangat... (>///<)`, id)
            break
        case `${prefix}sethi`: // Credit By ./NotF0und
            if (!isOwner) return
            let nmHi = body.slice(7)
            if (quotedMsg && quotedMsg.type === 'image'){
                const mediaData = await decryptMedia(quotedMsg, uaOverride)
                const filename = `./media/picthi/${nmHi}.jpeg`
                await fs.writeFileSync(filename, mediaData)
                await zama.reply(self, `Gambar Hi dengan nama ${nmHi} berhasil disimpan!`, id)
            }else if(isMedia && type === 'image'){
                const mediaData = await decryptMedia(message, uaOverride)
                const filename = `./media/picthi/${nmHi}.jpeg`
                await fs.writeFileSync(filename, mediaData)
                await zama.reply(self, `Gambar Hi dengan nama ${nmHi} berhasil disimpan!`, id)
            }else{
                await zama.reply(self, `Error! Silahkan coba kembali...`, id)
            }
            break
        case `${prefix}v`: // Credit By ./NotF0und
            if (isBanned, isBlocked) return
                const namfil = body.slice(3)
                await zama.sendPtt(self, `./media/audio/${namfil}.mp3`, id)
            break
        case `${prefix}setvn`: // Credit By ./NotF0und
            if (!isOwner) return
            let nmfil = body.slice(7)
            if (isQuotedAudio){
                const mediaData = await decryptMedia(quotedMsg, uaOverride)
                const filename = `./media/audio/${nmfil}.mp3`
                await fs.writeFileSync(filename, mediaData)
                vnlist.push(nmfil)
                fs.writeFileSync('./lib/database/vn.json', JSON.stringify(vnlist))
                await zama.reply(self, `Vn dengan nama ${nmfil} berhasil disimpan!`, id)
            }else if(isMedia && type === 'audio'){
                const mediaData = await decryptMedia(message, uaOverride)
                const filename = `./media/audio/${nmfil}.mp3`
                await fs.writeFileSync(filename, mediaData)
                vnlist.push(nmfil)
                fs.writeFileSync('./lib/database/vn.json', JSON.stringify(vnlist))
                await zama.reply(self, `Vn dengan nama ${nmfil} berhasil disimpan!`, id)
            }else{
                await zama.reply(self, `Error! Silahkan coba kembali...`, id)
            }
            break
        case `${prefix}vnlist`:
        let vn = `Daftar vn tersimpan\nTotal : ${vnlist.length}\n`
            for (let i of vnlist) {
                vn += `➸ ${i}\n`
            }
            await zama.sendText(self, vn)
            break
        case `${prefix}s`: // Credit By ./NotF0und
            if (isBanned, isBlocked) return
                const sticker = body.slice(3)
                await zama.sendImage(self, `./media/picthi/${sticker}.jpeg`,`cwk.jpeg`,`Nih ${nma}`, id)
            break
        case `${prefix}babi`:
            const gmek = await zama.getGroupMembersId(groupId)
            let gmik = gmek[Math.floor(Math.random() * gmek.length)]
            const mmkk = `YANG PALING BABI DISINI ADALAH @${gmik.replace(/@c.us/g, '')}`
            zama.sendTextWithMentions(self, mmkk, id)
            break
        case `${prefix}ganteng`:
            const gmekk = await zama.getGroupMembersId(groupId)
            let gmikk = gmekk[Math.floor(Math.random() * gmekk.length)]
            const mmkkkk = `YANG PALING GANTENG DISINI ADALAH @${gmikk.replace(/@c.us/g, '')}`
            zama.sendTextWithMentions(self, mmkkkk, id)
            break
        case `${prefix}rtag`:
            const gmekkk = await zama.getGroupMembersId(groupId)
            let gmikkk = gmekkk[Math.floor(Math.random() * gmekkk.length)]
            const mmkkkkk = `Maaf Buat yang ke tag @${gmikkk.replace(/@c.us/g, '')}`
            zama.sendTextWithMentions(self, mmkkkkk, id)
            break
        case `${prefix}indohot`:
            if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
            if (isLimit(serial)) return zama.reply(self, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik !limit Untuk Mengecek Kuota Limit Kamu`, id)

            await limitAdd(serial)
            if (isGroupMsg) {
                if (!isNsfw) return zama.reply(self, `Command/Perintah NSFW belum diaktifkan di group ini!`, id)
            const dsa = await get.get(`https://tobzz.herokuapp.com/api/indohot`).json()
            const { country, durasi, genre, judul, url } = await dsa.result
            await zama.sendText(self, `*Judul* : ${judul}\n*Durasi* : ${durasi}\n*Genre* : ${genre}\n*Negara* : ${country}\n*Link* : ${url}`, id)
            }
            break
        case `${prefix}cekwatak`:
          case `${prefix}sifat`:
         if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
         if (!isGroupMsg) return zama.reply(self, `Perintah ini hanya bisa di gunakan dalam group!`, id)
          if (args.length === 1) return zama.reply(self, `Kirim perintah !cekwatak [Saya]\nContoh : !cekwatak Saya`, id)
    /*      arg = body.trim().split(' ')
          if (arg.length >= 0) {
            zama.reply(self, mess.wait, id)*/
            var namao = pushname
            var prfx = await zama.getProfilePicFromServer(sender)
            //const kmu = arg[0]
            //const pacar = arg[1]
            const wtk = watak[Math.floor(Math.random() * (watak.length))]
            const akhlak = rate[Math.floor(Math.random() * (rate.length))]
            const sft = sifat[Math.floor(Math.random() * (sifat.length))]
            const hby = hobby[Math.floor(Math.random() * (hobby.length))]
            const klbh = kelebihan[Math.floor(Math.random() * (kelebihan.length))]
            const typo = tipe[Math.floor(Math.random() * (tipe.length))]
            //const rjh2 = `Hasil Pengamatan!\nPasangan dengan nama ${kamu} dan ${pacar}\n\n➸ Cinta : ${rpmn}\n➸ Jodoh : ${rpmn2}\n➸ Kemiripan : ${rpmn3}\n➸ Kesukaan : ${rpmn4}\n➸ Kesamaan : ${rpmn5}\n➸ Kebucinan ${rpmn6}`
           await zama.reply(self, `[ INTROGASI SUKSES ]\n\n*[Nama]:${namao}\n\n[Watak]:${wtk}\n\n[Akhlak✨]:${akhlak}\n\n[Sifat]:${sft}\n\n[Hobby]:${hby}\n\n[Tipe]:${typo}\n\n[Kelebihan]:${klbh}\n\n*Note\n\n_ini hanya main main_`, id)
         //  await zama.sendFilefromUrl(self, prfx, 'profile.jpg', foxt, id)
          break
        case `${prefix}ssphone`:
             if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
            if (!isGroupMsg) return zama.reply(self, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            if (isLimit(serial)) return zama.reply(self, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            if (args.length === 1) return zama.reply(self, `Kirim perintah *#ssphone [linkWeb]*\nContoh : *#ssphone https://neonime.vip*`, id)
            const ssphone = body.slice(9)
            zama.sendFileFromUrl(self, `https://api.vhtear.com/ssweb?link=${ssphone}&type=phone&apikey=${vhtearkey}`, 'ssphone.jpg', '', id)
            await limitAdd(serial)
            break
        case `${prefix}sspc`:
             if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
            if (!isGroupMsg) return zama.reply(self, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            if (args.length === 1) return zama.reply(self, `Kirim perintah *#sspc [linkWeb]*\nContoh : *#sspc https://neonime.vip*`, id)
            const sspc = body.slice(6)
            zama.sendFileFromUrl(self, `https://api.vhtear.com/ssweb?link=${sspc}&type=pc&apikey=${vhtearkey}`, 'sspc.jpg', '', id)
            await limitAdd(serial)
            break
        case `${prefix}fakta`:
            fetch('https://raw.githubusercontent.com/tobzZ/grabbed-results/main/random/faktaunix.txt')
            .then(res => res.text())
            .then(body => {
                let splitnix = body.split('\n')
                let randomnix = splitnix[Math.floor(Math.random() * splitnix.length)]
                zama.reply(self, randomnix, id)
            })
            .catch(() => {
                zama.reply(self, 'Ada yang Error!', id)
            })
            break
        case `${prefix}katabijak`:
            fetch('https://raw.githubusercontent.com/tobzZ/grabbed-results/main/random/katabijax.txt')
            .then(res => res.text())
            .then(body => {
                let splitbijak = body.split('\n')
                let randombijak = splitbijak[Math.floor(Math.random() * splitbijak.length)]
                zama.reply(self, randombijak, id)
            })
            .catch(() => {
                zama.reply(self, 'Ada yang Error!', id)
            })
            break
        case `${prefix}pantun`:
            fetch('https://raw.githubusercontent.com/tobzZ/grabbed-results/main/random/pantun.txt')
            .then(res => res.text())
            .then(body => {
                let splitpantun = body.split('\n')
                let randompantun = splitpantun[Math.floor(Math.random() * splitpantun.length)]
                zama.reply(self, randompantun.replace(/tobz-line/g,"\n"), id)
            })
            .catch(() => {
                zama.reply(self, 'Ada yang Error!', id)
            })
            break
        case `${prefix}distance`:
                if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
                if (!isGroupMsg) return zama.reply(self, `Perintah ini hanya bisa di gunakan dalam group!`, id)
                if (isLimit(serial)) return zama.reply(self, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
                if (args.length === 1) return zama.reply(self, `[❗] Kirim perintah *${prefix}distance [ Daerah1|Daerah2 ]*\ncontoh : *${prefix}distance Jakarta|Bandung*`)
                zama.reply(self, `[WAIT] Sedang di proses⏳ silahkan tunggu ± 1 min!`, id)
                try {
                    const dfdc = body.slice(10)
                    const dfdc1 = dfdc
                    .split('-')[0]
                    const dfdc2 = dfdc.split('-')[1]
                    const dfdcres = await axios.get('https://api.vhtear.com/distance?from='+dfdc1+'&to='+dfdc2+'&apikey='+vhtearkey)
                    const { result } = dfdcres.data
                    await zama.reply(self, `*「 DRIVING-FLYING DISTANCE 」*\n\n${result.data}`, id)
                    await limitAdd(serial)
                } catch (err) {
                    console.error(err.message)
                    await zama.sendFileFromUrl(self, errorurl2, 'error.png', '💔️ Maaf, Lokasi tidak ditemukan')
                    zama.sendText(ownerNumber, 'Distance Error : ' + err)
                }
                break
        case `${prefix}gdrive`:
            if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
            if (!isGroupMsg) return zama.reply(self, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            if (isLimit(serial)) return zama.reply(self, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            const regex = new RegExp("\/d\/(.+)\/", 'gi')
            if (!args[1].match(regex)) { await zama.reply(self, `Url Google Drive Yang Kamu Masukkan Salah!\nContoh : #gdrive https://drive.google.com/file/d/1Cd8KjB9-cUU_Jy8Q/view`, id) }
                const urla = args[1]
                const units = ['bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
                function niceBytes(x){
                    let l = 0, n = parseInt(x, 10) || 0;
                    while(n >= 1024 && ++l){
                        n = n/1024;
                    }
                    return(n.toFixed(n < 10 && l > 0 ? 1 : 0) + ' ' + units[l]);
                }
                const m = urla.match(regex)
                const fileid = m.toString().trimStart('/', 'd').trim('/');
                const linke = 'https://drive.google.com/file' + fileid + 'view?usp=sharing'
                fetch('https://gdbypass.host/api/?link='+linke)
                    .then((res) => {
                        status = res.status
                        return res.json()
                    })
                    .then(async(body) => {
                        const fileName = body.data.Filename
                        const size = body.data.Filesize
                        const newLink = body.data.NewUnlimitedURL
                        const ling = await urlShortener(newLink)
                            zama.reply(self, `*「 GOOGLE DRIVE 」*\n\n• *Nama File :* ${fileName}\n*• File Size :* ${niceBytes(size)}\n*• Short Link :* ${ling}`, id)
                            limitAdd(serial)
                    })
                    .catch((err) => {
                        zama.reply(self, `Maaf, Sepertinya Link Tidak Berhasil Di Bypass\n` + err, id)
                    })
            break
        case `${prefix}newstickerline`:
        case `${prefix}sline`:
        case `${prefix}stickerline`:
            if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
            if (!isGroupMsg) return zama.reply(self, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            if (isLimit(serial)) return zama.reply(self, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            zama.reply(self, mess.wait, id)
            try {
                const stcline = await fetch(`https://api.vhtear.com/newsticker?apikey=${vhtearkey}`)
                if (!stcline.ok) throw new Error(`unexpected response ${stcline.statusText}`)
                const stcline2 = await stcline.json()
                const { hasil } = await stcline2.result
                let xixixi = `*「 NEW STICKER LINE 」*\n\n`
                for (let i = 0; i < hasil.length; i++) {
                    xixixi += `\n─────────────────\n\n*Title* : ${hasil[i].title}\n*Url* : ${hasil[i].uri}\n`
                }
                await zama.sendFileFromUrl(self, 'https://play-lh.googleusercontent.com/BkvRJsjYiEjb0-XKuop2AurqFKLhhu_iIP06TrCTGAq180P9Briv8Avz8ncLp7bOmCs', 'newstc.jpg', xixixi, id)
                await limitAdd(serial)
            } catch (err) {
                    console.log(err)
                    await zama.sendFileFromUrl(self, errorurl2, 'error.png', '💔️ Maaf, Video tidak ditemukan')
                    zama.sendText(ownerNumber, 'Berita Error : ' + err)
            }
            break
        case `${prefix}news`:
        case `${prefix}berita`:
            if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
            if (!isGroupMsg) return zama.reply(self, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            if (isLimit(serial)) return zama.reply(self, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            zama.reply(self, mess.wait, id)
            try {
                const response2 = await fetch(`https://api.vhtear.com/beritaterbaru&apikey=${vhtearkey}`)
                if (!response2.ok) throw new Error(`unexpected response ${response2.statusText}`)
                const jsonber = await response2.json()
                const { data } = await jsonber.result
                let xixixi = `*「 BERITA TERKINI 」*\n\n`
                for (let i = 0; i < data.length; i++) {
                    xixixi += `\n─────────────────\n\n*Source* : ${data[i].url}\n*Penulis* : ${data[i].author}\n*Judul* : ${data[i].title}\n*Deskripsi* : ${data[i].description}\n*Dipublikasi* : ${data[i].publishedAt}\n*Konten* : ${data[i].content}\n`
                }
                await zama.sendFileFromUrl(self, data[0].urlToImage, 'thumbserc.jpg', xixixi, id)
                await limitAdd(serial)
            } catch (err) {
                    console.log(err)
                    await zama.sendFileFromUrl(self, errorurl2, 'error.png', '💔️ Maaf, Video tidak ditemukan')
                    zama.sendText(ownerNumber, 'Berita Error : ' + err)
            }
            break
        case `${prefix}jadwalbola`:
            if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
            if (!isGroupMsg) return zama.reply(self, `Perintah ini hanya bisa di gunakan dalam group!`, id)
            if (isLimit(serial)) return zama.reply(self, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            zama.reply(self, mess.wait, id)
            try {
                const jdbola = await fetch(`https://api.vhtear.com/jadwalbola&apikey=${vhtearkey}`)
                if (!jdbola.ok) throw new Error(`unexpected response ${jdbola.statusText}`)
                const jdbola2 = await jdbola.json()
                const { data } = await jdbola2.result
                let xixixi = `*「 JADWAL BOLA 」*\n\n`
                for (let i = 0; i < data.length; i++) {
                    xixixi += `\n─────────────────\n\n*Kick-Off* : ${data[i].kickoff}\n*Pertandingan* : ${data[i].pertandingan}\n*Stasiun TV* : ${data[i].stasiuntv}`
                }
                await zama.sendText(self, xixixi, id)
                await limitAdd(serial)
            } catch (err) {
                    console.log(err)
                    await zama.sendFileFromUrl(self, errorurl2, 'error.png', '💔️ Maaf, Jadwal tidak ditemukan')
                    zama.sendText(ownerNumber, 'Jadwal Bola Error : ' + err)
            }
            break
        case `${prefix}pastebin`: //BY VINZ
        if (!isregis) return zama.reply(self, `Nomor anda belum terverifikasi\nKetik @verify untuk memverifikasi`, id)
        if (args.length == 1) return zama.reply(self, `Ketik command ${prefix}pastebin [text]|[nama]\nContoh ${prefix}pastebin ini contohnya|tolll`, id)
           await zama.reply(self, mess.wait, id)
           var bdtrm = body.slice(10).trim().split('|')
           const pstbn = await axios.get(`https://zeksapi.herokuapp.com/api/pastebin?apikey=benbenz&text=${bdtrm[0]}&name=${bdtrm[1]}`)
        console.log(bdtrm[0])
        if (pstbn.data.status == false) return zama.reply(self, pstbn.data.message ,id)
        await zama.reply(self, pstbn.data.result, id)
        break
        default:
        if (command.startsWith(`${prefix}`)) {
            zama.reply(self, `
──────────────────
Heyy ${pushname}!
Command / Perintah *${args[0]}*
Tidak Terdaftar Di Dalam *${prefix}menu*
──────────────────`, id)
        }
        //await zama.sendSeen(from)
        }
    }
    } catch (err) {
        console.log(color('[ERROR]', 'red'), err)
        //zama.kill().then(a => console.log(a))
    }
}
