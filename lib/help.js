const fs = require('fs-extra')
const {
    prefix
} = JSON.parse(fs.readFileSync('./lib/database/setting.json'))
function menu() {
    return `
╭──────────────────────────
│   「 INFORMATION 」
│────────────────────────
│─≽ itsZam-SelfBOT
│─≽ 3.0
│─≽ PREFIX ${prefix}
│─≽ Owner = wa.me/6281295037142
│─≽ ZAM TELEGRAM : t.me/itsZamofficial
│─≽ FEATURES 200+-
│────────────────────────
│   「 OWNER 」
│────────────────────────
│─≽ *${prefix}block 62858xxxxx*
│─≽ *${prefix}unblock 62858xxxxx*
│─≽ *${prefix}addadmin @tagmember*
│─≽ *${prefix}deladmin @tagmember*
│─≽ *${prefix}restart*
│─≽ *${prefix}ekickall*
│─≽ *${prefix}banchat*
│─≽ *${prefix}unbanchat*
│─≽ *${prefix}setname*
│─≽ *${prefix}setstatus*
│─≽ *${prefix}setpic*
│─≽ *${prefix}eval [kode JavaScript]*
│─≽ *${prefix}premium [enable|disable]*
│────────────────────────
│   「 ADMIN BOT 」
│────────────────────────
│─≽ *${prefix}mute*
│─≽ *${prefix}unmute*
│─≽ *${prefix}ban @tagmember*
│─≽ *${prefix}unban @tagmember*
│─≽ *${prefix}spamcall [81273xxxx]*
│─≽ *${prefix}addsay [teks]*
│─≽ *${prefix}delsay [teks]*
│─≽ *${prefix}saylist*
│─≽ *${prefix}addtruth [teks]*
│─≽ *${prefix}deltruth [teks]*
│─≽ *${prefix}truthlist*
│─≽ *${prefix}adddare [teks]*
│─≽ *${prefix}deldare [teks]*
│─≽ *${prefix}darelist*
│─≽ *${prefix}kickall*
│─≽ *${prefix}oleave*
│─≽ *${prefix}opromote*
│─≽ *${prefix}odemote*
│─≽ *${prefix}odelete*
│─≽ *${prefix}oadd 62813xxxxx*
│─≽ *${prefix}okickall*
│─≽ *${prefix}otagall*
│─≽ *${prefix}chat [teks]*
│─≽ *${prefix}download [enable|disable]*
│────────────────────────
│     「 ADMINBAN Zam」
│────────────────────────
│─≽ *${prefix}groupinfo*
│─≽ *${prefix}add 62858xxxxx*
│─≽ *${prefix}kick @tagmember*
│─≽ *${prefix}tagall*
│─≽ *${prefix}adminbanList*
│─≽ *${prefix}ownerGroup*
│─≽ *${prefix}delete [replyChatBot]*
│────────────────────────
│      「 ISLAMIC 」
│────────────────────────
│─≽ *${prefix}quran [urutan surah]*
│─≽ *${prefix}infosurah [nama surah]*
│─≽ *${prefix}tafsir [nama surah] [ayat]*
│─≽ *${prefix}jadwalsholat [daerah]*
│─≽ *${prefix}listsurah*
│─≽ *${prefix}listdaerah*
│────────────────────────
│      「 KERANG 」
│────────────────────────
│─≽ *${prefix}apakah [optional]*
│─≽ *${prefix}rate* [optional]*
│─≽ *${prefix}bisakah* [optional]*
│─≽ *${prefix}kapankah* [optional]*
│────────────────────────
│      「 MEDIA 」
│────────────────────────
│─≽ *${prefix}distance [daerah1-daerah2]*
│─≽ *${prefix}jadwalbola*
│─≽ *${prefix}news (Update berita)*
│─≽ *${prefix}pastebin [teks]*
│─≽ *${prefix}gdrive [link gdrive]*
│─≽ *${prefix}ramalpasangan [kamu|pasangan]*
│─≽ *${prefix}bass [angka]*
│─≽ *${prefix}tomp3*
│─≽ *${prefix}getpic*
│─≽ *${prefix}cerpen*
│─≽ *${prefix}puisi1*
│─≽ *${prefix}puisi2*
│─≽ *${prefix}puisi3*
│─≽ *${prefix}slap [tag orang]*
│─≽ *${prefix}zodiak* [zodiak kamu]
│─≽ *${prefix}artinama [nama]*
│─≽ *${prefix}caklontong*
│─≽ *${prefix}family100*
│─≽ *${prefix}tebakgambar*
│─≽ *${prefix}artinama [nama]*
│─≽ *${prefix}artimimpi [mimpi]*
│─≽ *${prefix}heroml [nama hero]*
│─≽ *${prefix}motor [nama motor]*
│─≽ *${prefix}covid [negara]*
│─≽ *${prefix}nulis [teks]*
│─≽ *${prefix}sandwriting [teks]*
│─≽ *${prefix}quotemaker [|teks|author|theme]*
│─≽ *${prefix}jadwalTv [channel]*
│─≽ *${prefix}cuaca [tempat]*
│─≽ *${prefix}resepmasakan [optional]*
│─≽ *${prefix}tts [kode bhs] [teks]*
│─≽ *${prefix}igstalk [@username]*
│─≽ *${prefix}tiktokstalk [@username]*
│─≽ *${prefix}smulestalk [@username]*
│─≽ *${prefix}kbbi [query]*
│─≽ *${prefix}wiki [query]*
│─≽ *${prefix}google [query]*
│─≽ *${prefix}pinterest [query]*
│─≽ *${prefix}googleimage [query]*
│─≽ *${prefix}brainlysearch [query]*
│─≽ *${prefix}translate [bahasa] [teks]*
│─≽ *${prefix}brainly [pertanyaan] [.jumlah]*
│─≽ *${prefix}lirik [optional]*
│─≽ *${prefix}chord [optional]*
│─≽ *${prefix}qrcode [optional]*
│─≽ *${prefix}maps [optional]*
│─≽ *${prefix}textmaker [teks1|teks2]*
│─≽ *${prefix}checkip [ipaddress]*
│─≽ *${prefix}ssweb [linkWeb]*
│─≽ *${prefix}infoalamat [nama tempat/alamat]*
│─≽ *${prefix}shorturl [linkWeb]*
│────────────────────────
│     「 ANIME 」
│────────────────────────
│─≽ *${prefix}loli*
│─≽ *${prefix}shota*
│─≽ *${prefix}waifu*
│─≽ *${prefix}husbu*
│─≽ *${prefix}randomNekoNime*
│─≽ *${prefix}randomTrapNime*
│─≽ *${prefix}randomhug*
│─≽ *${prefix}randomcry*
│─≽ *${prefix}randomkiss*
│─≽ *${prefix}randomAnime*
│─≽ *${prefix}quotesnime*
│─≽ *${prefix}wait*
│─≽ *${prefix}koin*
│─≽ *${prefix}malanime [optional]*
│─≽ *${prefix}malcharacter [optional]*
│─≽ *${prefix}kusonime [optional]*
│─≽ *${prefix}otakudesu [optional]*
│─≽ *${prefix}dewabatch [optional]*
│─≽ *${prefix}komiku [optional]*
│────────────────────────
│      「 DOWNLOADER 」
│────────────────────────
│─≽ *${prefix}ytmp3 [linkYt]*
│─≽ *${prefix}ytmp4 [linkYt]*
│─≽ *${prefix}ig [linkIg]*
│─≽ *${prefix}fb [linkFb]*
│─≽ *${prefix}twitter [linkTwitter]*
│─≽ *${prefix}smule [linkSmule]*
│─≽ *${prefix}tiktok [linkTiktok]*
│─≽ *${prefix}starmaker [linkStarmaker]*
│─≽ *${prefix}joox [lagu]*
│────────────────────────
│      「 GROUP 」
│────────────────────────
│─≽ *${prefix}snk*
│─≽ *${prefix}sider*
│─≽ *${prefix}panggil [+panggil jumlah-orang]*
│─≽ *${prefix}groupinfo*
│─≽ *${prefix}add 62858xxxxx*
│─≽ *${prefix}inv [reply pesan orang yang mau di add]*
│─≽ *${prefix}kick @tagmember*
│─≽ *${prefix}promote @tagmember*
│─≽ *${prefix}demote @tagadmin*
│─≽ *${prefix}promotee [reply chat member]*
│─≽ *${prefix}demotee [reply chat admin]*
│─≽ *${prefix}tagall*
│─≽ *${prefix}adminList*
│─≽ *${prefix}ownerGroup*
│─≽ *${prefix}leave*
│─≽ *${prefix}delete [replyChatBot]*
│─≽ *${prefix}kickAll*
│─≽ *${prefix}open*
│─≽ *${prefix}close*
│─≽ *${prefix}resend*
│─≽ *${prefix}antilink [enable|disable]*
│─≽ *${prefix}antitoxic [enable|disable]*
│─≽ *${prefix}autosticker [enable|disable]*
│─≽ *${prefix}NSFW [enable|disable]*
│─≽ *${prefix}left [enable|disable]*
│─≽ *${prefix}welcome [enable|disable]*
│─≽ *${prefix}simi [enable|disable]*
│────────────────────────
│      「 PREMIUM 」
│────────────────────────
│─≽ *${prefix}nhentai [kode]*
│─≽ *${prefix}music [lagu]*
│─≽ *${prefix}getmusic [IdDownload]*
│─≽ *${prefix}video [video]*
│─≽ *${prefix}getvideo [IdDownload]*
│─≽ *${prefix}youtubesearch [query]*
│─≽ *${prefix}shopee [query]*
│─≽ *${prefix}playstore [query]*
│─≽ *${prefix}animesearch [query]*
│────────────────────────
│      「 NSFW 」
│────────────────────────
│─≽ *${prefix}randomhentai*
│─≽ *${prefix}randomblowjob*
│─≽ *${prefix}randombokep*
│─≽ *${prefix}randomnsfwneko*
│─≽ *${prefix}randomtrapnime*
│─≽ *${prefix}nhder [kode]*
│─≽ *${prefix}xnxx [linkXnxx]*
│────────────────────────
│      「 MAKER & FUN 」
│────────────────────────
│─≽ *${prefix}bahasa*
│─≽ *${prefix}sticker*
│─≽ *${prefix}gltext [teks1-teks2]*
│─≽ *${prefix}bp [teks]*
│─≽ *${prefix}party [teks]*
│─≽ *${prefix}romance [teks]*
│─≽ *${prefix}silk [teks]*
│─≽ *${prefix}sliding [teks]*
│─≽ *${prefix}textlove [teks]*
│─≽ *${prefix}textglow [teks]*
│─≽ *${prefix}googletext [teks1-teks2-teks3]*
│─≽ *${prefix}phlogo [teks1-teks2]*
│─≽ *${prefix}thunder [teks]*
│─≽ *${prefix}3dtext [teks]*
│─≽ *${prefix}marvel [teks1-teks2]*
│─≽ *${prefix}metaldarkgold [teks]*
│─≽ *${prefix}sky [teks]*
│─≽ *${prefix}sandengraved [teks]*
│─≽ *${prefix}joker [teks]*
│─≽ *${prefix}matrix [teks]*
│─≽ *${prefix}neongreen [teks]*
│─≽ *${prefix}galaxy [teks]*
│─≽ *${prefix}heromlmaker [namahero-teks]*
│─≽ *${prefix}gaming [teks]*
│─≽ *${prefix}wolf [teks1-teks2]*
│─≽ *${prefix}bluemetal [teks]*
│─≽ *${prefix}dropwater [teks]*
│─≽ *${prefix}logo1 [text]*
│─≽ *${prefix}tiktod [text]*
│─≽ *${prefix}wolf1 [text1|tex2]*
│─≽ *${prefix}wolf2 [text1|text2]*
│─≽ *${prefix}hemker [text]*
│─≽ *${prefix}neon3 [text1|text2|text3]*
│─≽ *${prefix}neon4 [text]*
│─≽ *${prefix}logo2 [text1|text2]*
│─≽ *${prefix}logo3 [text1|text2]*
│─≽ *${prefix}logo4 [text]*
│─≽ *${prefix}logo5 [text]*
│─≽ *${prefix}logo6 [text]*
│─≽ *${prefix}logo7 [text]*
│─≽ *${prefix}logo9 [text]*
│─≽ *${prefix}logo10 [text]*
│─≽ *${prefix}stickergif*
│─≽ *${prefix}sfire*
│─≽ *${prefix}slightning*
│─≽ *${prefix}ttp [teks]*
│─≽ *${prefix}rttp [teks]*
│─≽ *${prefix}cttp [teks-warna]*
│─≽ *${prefix}toimg*
│─≽ *${prefix}neko*
│─≽ *${prefix}pokemon*
│─≽ *${prefix}spam jumlah-teks*
│─≽ *${prefix}inu*
│─≽ *${prefix}infoGempa*
│─≽ *${prefix}quotes*
│─≽ *${prefix}ptl*
│─≽ *${prefix}dadu*
│─≽ *${prefix}koin*
│─≽ *${prefix}pantun*
│─≽ *${prefix}howgay @tagmember*
│─≽ *${prefix}katabijak*
│─≽ *${prefix}katacinta*
│─≽ *${prefix}fakta*
│─≽ *${prefix}say [teks]*
│─≽ *${prefix}halah [reply pesan]*
│─≽ *${prefix}hilih [reply pesan]*
│─≽ *${prefix}huluh [reply pesan]*
│─≽ *${prefix}heleh [reply pesan]*
│─≽ *${prefix}holoh [reply pesan]*
│─≽ *${prefix}hug @tagmember*
│─≽ *${prefix}flip @tagmember*
│─≽ *${prefix}slap @tagmember*
│─≽ *${prefix}trigger @tagmember*
│─≽ *${prefix}nye @tagmember*
│─≽ *${prefix}pat @tagmember*
│─≽ *${prefix}quoterandom*
│────────────────────────
│      「 BOT INFO 」
│────────────────────────
│─≽ *${prefix}bugreport [teks]*
│─≽ *${prefix}listblock*
│─≽ *${prefix}listbanned*
│─≽ *${prefix}listgroup*
│─≽ *${prefix}iklan*
│─≽ *${prefix}info*
│─≽ *${prefix}limit*
│─≽ *${prefix}snk*
│─≽ *${prefix}readme*
│─≽ *${prefix}donate*
│─≽ *${prefix}ping*
│─≽ *${prefix}botgroup*
│─≽ *${prefix}botadmin*
│─≽ *${prefix}owner*
│────────────────────────
│     「 RULES 」
│────────────────────────
│─≽ *Pengen Sewa Bot ? Chat Owner!!!*
│─≽ *SPAM/VC = BLOCK!!!*
│─≽ *Sewaktu-Waktu Bot OFF = OWNER SIBUK*
│─≽ *PENGEN FITUR PREMIUM ?? Ketik #iklan*
│─≽ *Ada Bug?? KETIK #bugreport [Teks]*
│─≽ *Mau Request FItur ?? Chat Owner!!!*
│─≽ *BOT INI MEMILIKI FITUR ANTI SPAM!!!*
│────────────────────────
│     「 itsZam-SelfBOT 」
│────────────────────────
`
}
exports.menu = menu()
function ownercmd() {
    return `
     「 OWNER 」

│─≽ *${prefix}block 62858xxxxx*
│─≽ *${prefix}unblock 62858xxxxx*
│─≽ *${prefix}addadmin @tagmember*
│─≽ *${prefix}deladmin @tagmember*
│─≽ *${prefix}restart*
│─≽ *${prefix}ekickall*
│─≽ *${prefix}banchat*
│─≽ *${prefix}unbanchat*
│─≽ *${prefix}setname*
│─≽ *${prefix}setstatus*
│─≽ *${prefix}setpic*
│─≽ *${prefix}eval [kode JavaScript]*
│─≽ *${prefix}premium [enable|disable]*

    「 itsZam-SelfBOT 」`
}
exports.ownercmd = ownercmd()
function admincmd() {
    return `
    「 ADMIN 」

│─≽ *${prefix}mute*
│─≽ *${prefix}unmute*
│─≽ *${prefix}ban @tagmember*
│─≽ *${prefix}unban @tagmember*
│─≽ *${prefix}spamcall [81273xxxx]*
│─≽ *${prefix}addsay [teks]*
│─≽ *${prefix}delsay [teks]*
│─≽ *${prefix}saylist*
│─≽ *${prefix}addtruth [teks]*
│─≽ *${prefix}deltruth [teks]*
│─≽ *${prefix}truthlist*
│─≽ *${prefix}adddare [teks]*
│─≽ *${prefix}deldare [teks]*
│─≽ *${prefix}darelist*
│─≽ *${prefix}kickall*
│─≽ *${prefix}oleave*
│─≽ *${prefix}opromote*
│─≽ *${prefix}odemote*
│─≽ *${prefix}odelete*
│─≽ *${prefix}oadd 62813xxxxx*
│─≽ *${prefix}okickall*
│─≽ *${prefix}otagall*
│─≽ *${prefix}chat [teks]*
│─≽ *${prefix}download [enable|disable]*

    「 itsZam-SelfBOT 」`
}
exports.admincmd = admincmd()
function nsfwcmd() {
    return `
     「 NSFW 」

│─≽ *${prefix}randomhentai*
│─≽ *${prefix}randomblowjob*
│─≽ *${prefix}randombokep*
│─≽ *${prefix}randomnsfwneko*
│─≽ *${prefix}randomtrapnime*
│─≽ *${prefix}nhder [kode]*
│─≽ *${prefix}xnxx [linkXnxx]*

    「 itsZam-SelfBOT 」`
}
exports.nsfwcmd = nsfwcmd()
function praycmd() {
    return `
    「 PRAY 」

│─≽ *${prefix}quran [urutan surah]*
│─≽ *${prefix}infosurah [nama surah]*
│─≽ *${prefix}tafsir [nama surah] [ayat]*
│─≽ *${prefix}jadwalsholat [daerah]*
│─≽ *${prefix}listsurah*
│─≽ *${prefix}listdaerah*

    「 itsZam-SelfBOT 」`
}
exports.praycmd = praycmd()
function kerangcmd() {
    return `
     「 KERANG 」

│─≽ *${prefix}apakah [optional]*
│─≽ *${prefix}rate* [optional]*
│─≽ *${prefix}bisakah* [optional]*
│─≽ *${prefix}kapankah* [optional]*

     「 itsZam-SelfBOT 」`
}
exports.kerangcmd = kerangcmd()
function mediacmd() {
    return `
     「 MEDIA 」

│─≽ *${prefix}distance [daerah1-daerah2]*
│─≽ *${prefix}jadwalbola*
│─≽ *${prefix}news (Update berita)*
│─≽ *${prefix}pastebin [teks]*
│─≽ *${prefix}gdrive [link gdrive]*
│─≽ *${prefix}ramalpasangan [kamu|pasangan]*
│─≽ *${prefix}bass [angka]*
│─≽ *${prefix}tomp3*
│─≽ *${prefix}getpic*
│─≽ *${prefix}cerpen*
│─≽ *${prefix}puisi1*
│─≽ *${prefix}puisi2*
│─≽ *${prefix}puisi3*
│─≽ *${prefix}slap [tag orang]*
│─≽ *${prefix}zodiak* [zodiak kamu]
│─≽ *${prefix}artinama [nama]*
│─≽ *${prefix}caklontong*
│─≽ *${prefix}family100*
│─≽ *${prefix}tebakgambar*
│─≽ *${prefix}artinama [nama]*
│─≽ *${prefix}artimimpi [mimpi]*
│─≽ *${prefix}heroml [nama hero]*
│─≽ *${prefix}motor [nama motor]*
│─≽ *${prefix}covid [negara]*
│─≽ *${prefix}nulis [teks]*
│─≽ *${prefix}sandwriting [teks]*
│─≽ *${prefix}quotemaker [|teks|author|theme]*
│─≽ *${prefix}jadwalTv [channel]*
│─≽ *${prefix}cuaca [tempat]*
│─≽ *${prefix}resepmasakan [optional]*
│─≽ *${prefix}tts [kode bhs] [teks]*
│─≽ *${prefix}igstalk [@username]*
│─≽ *${prefix}tiktokstalk [@username]*
│─≽ *${prefix}smulestalk [@username]*
│─≽ *${prefix}kbbi [query]*
│─≽ *${prefix}wiki [query]*
│─≽ *${prefix}google [query]*
│─≽ *${prefix}pinterest [query]*
│─≽ *${prefix}googleimage [query]*
│─≽ *${prefix}brainlysearch [query]*
│─≽ *${prefix}translate [bahasa] [teks]*
│─≽ *${prefix}brainly [pertanyaan] [.jumlah]*
│─≽ *${prefix}lirik [optional]*
│─≽ *${prefix}chord [optional]*
│─≽ *${prefix}qrcode [optional]*
│─≽ *${prefix}maps [optional]*
│─≽ *${prefix}textmaker [teks1|teks2]*
│─≽ *${prefix}checkip [ipaddress]*
│─≽ *${prefix}ssweb [linkWeb]*
│─≽ *${prefix}infoalamat [nama tempat/alamat]*
│─≽ *${prefix}shorturl [linkWeb]*

    「 itsZam-SelfBOT 」`
}
exports.mediacmd = mediacmd()
function animecmd() {
    return `
    「 ANIME 」

│─≽ *${prefix}loli*
│─≽ *${prefix}shota*
│─≽ *${prefix}waifu*
│─≽ *${prefix}husbu*
│─≽ *${prefix}randomNekoNime*
│─≽ *${prefix}randomTrapNime*
│─≽ *${prefix}randomhug*
│─≽ *${prefix}randomcry*
│─≽ *${prefix}randomkiss*
│─≽ *${prefix}randomAnime*
│─≽ *${prefix}quotesnime*
│─≽ *${prefix}wait*
│─≽ *${prefix}koin*
│─≽ *${prefix}malanime [optional]*
│─≽ *${prefix}malcharacter [optional]*
│─≽ *${prefix}kusonime [optional]*
│─≽ *${prefix}otakudesu [optional]*
│─≽ *${prefix}dewabatch [optional]*
│─≽ *${prefix}komiku [optional]*

     「 itsZam-SelfBOT 」`
}
exports.animecmd = animecmd()
function othercmd() {
    return `
    「 MAKER & FUN 」

│─≽ *${prefix}bahasa*
│─≽ *${prefix}sticker*
│─≽ *${prefix}gltext [teks1-teks2]*
│─≽ *${prefix}bp [teks]*
│─≽ *${prefix}party [teks]*
│─≽ *${prefix}romance [teks]*
│─≽ *${prefix}silk [teks]*
│─≽ *${prefix}sliding [teks]*
│─≽ *${prefix}textlove [teks]*
│─≽ *${prefix}textglow [teks]*
│─≽ *${prefix}googletext [teks1-teks2-teks3]*
│─≽ *${prefix}phlogo [teks1-teks2]*
│─≽ *${prefix}thunder [teks]*
│─≽ *${prefix}3dtext [teks]*
│─≽ *${prefix}marvel [teks1-teks2]*
│─≽ *${prefix}metaldarkgold [teks]*
│─≽ *${prefix}sky [teks]*
│─≽ *${prefix}sandengraved [teks]*
│─≽ *${prefix}joker [teks]*
│─≽ *${prefix}matrix [teks]*
│─≽ *${prefix}neongreen [teks]*
│─≽ *${prefix}galaxy [teks]*
│─≽ *${prefix}heromlmaker [namahero-teks]*
│─≽ *${prefix}gaming [teks]*
│─≽ *${prefix}wolf [teks1-teks2]*
│─≽ *${prefix}bluemetal [teks]*
│─≽ *${prefix}dropwater [teks]*
│─≽ *${prefix}logo1 [text]*
│─≽ *${prefix}tiktod [text]*
│─≽ *${prefix}wolf1 [text1|tex2]*
│─≽ *${prefix}wolf2 [text1|text2]*
│─≽ *${prefix}hemker [text]*
│─≽ *${prefix}neon3 [text1|text2|text3]*
│─≽ *${prefix}neon4 [text]*
│─≽ *${prefix}logo2 [text1|text2]*
│─≽ *${prefix}logo3 [text1|text2]*
│─≽ *${prefix}logo4 [text]*
│─≽ *${prefix}logo5 [text]*
│─≽ *${prefix}logo6 [text]*
│─≽ *${prefix}logo7 [text]*
│─≽ *${prefix}logo9 [text]*
│─≽ *${prefix}logo10 [text]*
│─≽ *${prefix}stickergif*
│─≽ *${prefix}sfire*
│─≽ *${prefix}slightning*
│─≽ *${prefix}ttp [teks]*
│─≽ *${prefix}rttp [teks]*
│─≽ *${prefix}cttp [teks-warna]*
│─≽ *${prefix}toimg*
│─≽ *${prefix}neko*
│─≽ *${prefix}pokemon*
│─≽ *${prefix}spam jumlah-teks*
│─≽ *${prefix}inu*
│─≽ *${prefix}infoGempa*
│─≽ *${prefix}quotes*
│─≽ *${prefix}ptl*
│─≽ *${prefix}dadu*
│─≽ *${prefix}koin*
│─≽ *${prefix}pantun*
│─≽ *${prefix}howgay @tagmember*
│─≽ *${prefix}katabijak*
│─≽ *${prefix}katacinta*
│─≽ *${prefix}fakta*
│─≽ *${prefix}say [teks]*
│─≽ *${prefix}halah [reply pesan]*
│─≽ *${prefix}hilih [reply pesan]*
│─≽ *${prefix}huluh [reply pesan]*
│─≽ *${prefix}heleh [reply pesan]*
│─≽ *${prefix}holoh [reply pesan]*
│─≽ *${prefix}hug @tagmember*
│─≽ *${prefix}flip @tagmember*
│─≽ *${prefix}slap @tagmember*
│─≽ *${prefix}trigger @tagmember*
│─≽ *${prefix}nye @tagmember*
│─≽ *${prefix}pat @tagmember*
│─≽ *${prefix}quoterandom*

     「 itsZam-SelfBOT 」`
}
exports.othercmd = othercmd()
function premiumcmd() {
    return `
    「 PREMIUM 」

│─≽ *${prefix}nhentai [kode]*
│─≽ *${prefix}music [lagu]*
│─≽ *${prefix}getmusic [IdDownload]*
│─≽ *${prefix}video [video]*
│─≽ *${prefix}getvideo [IdDownload]*
│─≽ *${prefix}youtubesearch [query]*
│─≽ *${prefix}shopee [query]*
│─≽ *${prefix}playstore [query]*
│─≽ *${prefix}animesearch [query]*

    「 itsZam-SelfBOT 」`
}
exports.premiumcmd = premiumcmd()
function adminbancmd() {
    return `
   「 ADMINBAN MENU 」

│─≽ *${prefix}groupinfo*
│─≽ *${prefix}add 62858xxxxx*
│─≽ *${prefix}kick @tagmember*
│─≽ *${prefix}tagall*
│─≽ *${prefix}sider*
│─≽ *${prefix}adminbanlist*
│─≽ *${prefix}delete [replyChatBot]*

   「 itsZam-SelfBOT 」`
}
exports.adminbancmd = adminbancmd()
function downloadcmd() {
    return `
    「 DOWNLOADER 」

│─≽ *${prefix}ytmp3 [linkYt]*
│─≽ *${prefix}ytmp4 [linkYt]*
│─≽ *${prefix}ig [linkIg]*
│─≽ *${prefix}fb [linkFb]*
│─≽ *${prefix}twitter [linkTwitter]*
│─≽ *${prefix}smule [linkSmule]*
│─≽ *${prefix}tiktok [linkTiktok]*
│─≽ *${prefix}starmaker [linkStarmaker]*
│─≽ *${prefix}xnxx [linkXnxx]*
│─≽ *${prefix}nhder [kodeNuclear]*
│─≽ *${prefix}joox [lagu]*
│─≽ *${prefix}play [lagu]*

     「 itsZam-SelfBOT 」`
}
exports.downloadcmd = downloadcmd()
function groupcmd() {
    return `
     「 GROUP 」

│─≽ *${prefix}snk*
│─≽ *${prefix}sider*
│─≽ *${prefix}panggil [+panggil jumlah-orang]*
│─≽ *${prefix}groupinfo*
│─≽ *${prefix}add 62858xxxxx*
│─≽ *${prefix}inv [reply pesan orang yang mau di add]*
│─≽ *${prefix}kick @tagmember*
│─≽ *${prefix}promote @tagmember*
│─≽ *${prefix}demote @tagadmin*
│─≽ *${prefix}promotee [reply chat member]*
│─≽ *${prefix}demotee [reply chat admin]*
│─≽ *${prefix}tagall*
│─≽ *${prefix}adminList*
│─≽ *${prefix}ownerGroup*
│─≽ *${prefix}leave*
│─≽ *${prefix}delete [replyChatBot]*
│─≽ *${prefix}kickAll*
│─≽ *${prefix}open*
│─≽ *${prefix}close*
│─≽ *${prefix}resend*
│─≽ *${prefix}antilink [enable|disable]*
│─≽ *${prefix}antitoxic [enable|disable]*
│─≽ *${prefix}autosticker [enable|disable]*
│─≽ *${prefix}NSFW [enable|disable]*
│─≽ *${prefix}left [enable|disable]*
│─≽ *${prefix}welcome [enable|disable]*
│─≽ *${prefix}simi [enable|disable]*

     「 itsZam-SelfBOT 」`
}
exports.groupcmd = groupcmd()
function readme() {
    return `
            *「 STALK 」*

*[@username]* Diisi dengan Username yang valid tanpa tanda “[” dan “]”
Contoh : *${prefix}tiktokstalk @zamazaaaa_*

*[@username]* Diisi dengan Username yang valid tanpa tanda “[” dan “]”
Contoh : *${prefix}igstalk @zamazaaaa_*

*[@username]* Diisi dengan Username yang valid tanpa tanda “[” dan “]”
Contoh : *${prefix}smulestalk @zamazaaaa_*

            *「 YT SEARCH 」*

*[video]* Diisi dengan Judul Video yang valid tanpa tanda “[” dan “]”
Contoh : *${prefix}video Erpan1140*
Jika ingin mendownload video harap ketik #getvideo [IdDownload] atau #getvideo [urutan]

*[lagu]* Diisi dengan Judul Lagu yang valid tanpa tanda “[” dan “]”
Contoh : *${prefix}music Alan Walker Alone*
Jika ingin mendownload lagu harap ketik #getmusic [IdDownload] atau #getmusic [urutan]

*[IdDownload] atau [urutan]* Diisi dengan IdDownload yang valid tanpa tanda “[” dan “]”
Contoh : *Jika tidak reply pesan : #getmusic Iv32bS1*
Contoh : *Jika reply pesan : #getmusic 1*
Contoh : *Jika tidak reply pesan : #getvideo Iv32bS1*
Contoh : *Jika reply pesan : #getvideo 1*

            *「 DOWNLOADER 」*

*[linkStarmaker]* Diisi dengan link Starmaker yang valid tanpa tanda “[” dan “]”
Contoh : *${prefix}starmaker https://m.starmakerstudios.com/d/playrecording?app=sm&from_user_id=3096224747920316&is_convert=true&recordingId=10696049124506354&share_type=copyLink*

*[linkTwitter]* Diisi dengan link YouTube yang valid tanpa tanda “[” dan “]”
Contoh : *${prefix}twitter https://twitter.com/PassengersMovie/status/821025484150423557*

*[linkXnxx]* Diisi dengan link Xnxx yang valid tanpa tanda “[” dan “]”
Contoh : *${prefix}xnxx http://www.xnxx.com/loli/stev-gay*

*[linkNekopoi]* Diisi dengan link Nekopoi yang valid tanpa tanda “[” dan “]”
Contoh : *${prefix}nekopoi https://nekopoi.care/tsunpuri-episode-1-subtitle-indonesia/*

*[linkYt]* Diisi dengan link YouTube yang valid tanpa tanda “[” dan “]”
Contoh : *${prefix}ytmp3 https://youtu.be/Bskehapzke8*

*[linkYt]* Diisi dengan link YouTube yang valid tanpa tanda “[” dan “]”
Contoh : *${prefix}ytmp4 https://youtu.be/Bskehapzke8*

*[linkTiktok]* Diisi dengan link Tiktok yang valid tanpa tanda “[” dan “]”
Contoh : *${prefix}tiktok https://vt.tiktok.com/yqyjPX/*

*[linkSmule]* Diisi dengan link Smule yang valid tanpa tanda “[” dan “]”
Contoh : *${prefix}smule https://www.smule.com/p/767512225_3062360163*

*[linkIg]* Diisi dengan link Instagram yang valid tanpa tanda “[” dan “]”
Contoh : *${prefix}ig https://www.instagram.com/p/CFqRZTlluAi/?igshid=1gtxkbdqhnbbe*

*[linkFb]* Diisi dengan link Facebook yang valid tanpa tanda “[” dan “]”
Contoh : *${prefix}fb https://www.facebook.com/EpochTimesTrending/videos/310155606660409*

*[linkTiktok]* Diisi dengan link facebookt Tiktok yang valid tanpa tanda “[” dan “]”
Contoh : *${prefix}tiktok https://vt.tiktok.com/yqyjPX/*

            *「 OTHER 」*

*[daerah]* Diisi dengan daerah yang valid, tanpa tanda “[” dan “]”
Contoh : *${prefix}jadwalShalat Tangerang*

*[channel]* Diisi dengan channel televisi yang valid, tanpa tanda “[” dan “]”
Contoh : *${prefix}jadwalTv Indosiar*

*[query]* Diisi dengan query/pencarian yang valid, tanpa tanda “[” dan “]“
Contoh : *${prefix}googlesearch siapa itu Z*

*[tempat]* Diisi dengan tempat/lokasi yang valid, tanpa tanda “[” dan “]“
Contoh : *${prefix}cuaca tangerang*

*[kode bhs]* Diisi dengan kode bahasa, contoh *id*, *en*, dll. Dan *[teks]* Diisi dengan teks yang ingin di jadikan voice, Masih sama seperti di atas tanpa tanda “[” dan “]”
Contoh : *${prefix}tts id Test*
Note : Max 250 huruf

*[|teks|author|theme]* Diisi dengan teks, author, dan theme, tanpa tanda “[” dan “]”
Contoh : *${prefix}quotemaker |Odading|Mang Oleh|Shark*

*[optional]* Diisi dengan teks|title lirik lagu, tanpa tanda “[” dan “]”.
Contoh : *${prefix}lirik aku bukan boneka*

*[ipaddress]* Diisi dengan Ip Address yang valid, tanpa tanda “[” dan “]”.
Contoh : *${prefix}checkip 182.0.144.145*`
}
exports.readme = readme()
function info() {
    return `
╭──「 *INFORMATION* 」────
│───────────────────────
│> *BOT TYPE : NODEJS V14*
│> *NAME : itsZam-SelfBOT*
│> *VERSION : 3.5.0*
│> *GITHUB : github.com/itsZam*
│> *TEAM : @MIRORFACE*
│> *THANKS TO :
│>                   *-Allah SWT*
│>                   *-Orang Tua*
│>                   *-ArugaZ*
│>                   *-MHANKBARBAR*
│>                   *-YOGASAKTI*
│>                   *-TOBZ*
│>                   *-VHTEAR*
│>                   *-@Wa-Automate/Node.js*
│>                   *-MrG3P5*
│>                   *-Zam*
│>                   *-Para Penyedia Web Api
│>                   *-DIRI GUA SENDIRI*
│>
│───────────────────────
│   *「 itsZam-SelfBOT 」*
╰───────────────────────
`
}

exports.info = info()
function snk() {
    return `Syarat dan Ketentuan Bot
1. Teks dan nama pengguna WhatsApp anda akan kami simpan di dalam server selama bot aktif
2. Data anda akan di hapus ketika bot Offline
3. Kami tidak menyimpan gambar, video, file, audio, dan dokumen yang anda kirim
4. Kami tidak akan pernah meminta anda untuk memberikan informasi pribadi
5. Jika menemukan Bug/Error silahkan langsung lapor ke Owner bot
6. Apapun yang anda perintah pada bot ini, KAMI TIDAK AKAN BERTANGGUNG JAWAB!

Thanks !`
}
exports.snk = snk()
function sewa() {
    return `
╭──「 *IKLAN* 」────
│───────────────────────────
│ *BERIKUT INI IKLAN BOT*
│───────────────────────────
│> *DAFTAR SEWA & BUAT BOT :*
│> *SEWA : 10K/GRUP (BULAN)*
│> *BUAT : 50K (BISA JADI OWNER)*
│> *ADMINBOT : 5K/BULAN (COMMAND ADMINBOT)*
│> *ADMINBAN : 5K/BULAN (COMMAND ADMINBAN)*
│> *PREMIUM : 10K/BULAN (COMMAND PREMIUM)*
│> *PEMBAYARAN BISA MELALUI :*
│> *OVO, GOPAY, DANA, PULSA +5K*
│───────────────────────────
│> *KEUNTUNGAN SEWA BOT :*
│> *1. BISA MENJADI ADMIN BOT*
│> *2. BISA MENDAPATKAN COMMAND ADMIN*
│> *KEUNTUNGAN PREMIUM ADM BOT :*
│> *1. BISA MENDAPATKAN COMMAND ADMIN PREMI*
│> *2. LIMIT UNLIMITED KHUSUS PREMI ADMIN*
│> *KEUNTUNGAN BUAT BOT :*
│> *1. BISA MENJADI OWNER BOT SENDIRI*
│> *2. BISA MENGGANTI NAMA BOT SENDIRI*
│> *3. BISA MEMBAWA BOT KE GROUP*
│> *4. BISA MENGGUNAKAN COMMAND OWNER*
│> *5. BISA MENYEWAKAN BOT KEMBALI*
│───────────────────────────
│> *JIKA MINAT IKLAN DIATAS*
│> *HARAP HUBUNGI NOMOR DIBAWAH :*
│> *wa.me/6281295037142*
│───────────────────────────
│   *「 itsZam-SelfBOT 」*
╰───────────────────────
`
}
exports.sewa = sewa()
function sumbang() {
    return `
╭──「 *DONATE* 」────
│───────────────────────────
│> *DONASI BISA MELALUI :*
│> *DANA/PULSA/OVO/GOPAY : 081295037142*
│> *TERIMA KASIH BANYAK YANG SUDAH MAU DONASI*
│───────────────────────────
│   *「 itsZam-SelfBOT 」*
╰────────────────────────
`
}
exports.sumbang = sumbang()
function listChannel() {
    return `Daftar channel:
1. ANTV
2. GTV
3. Indosiar
4. iNewsTV
5. KompasTV
6. MNCTV
7. METROTV
8. NETTV
9. RCTI
10. SCTV
11. RTV
12. Trans7
13. TransTV`
}
exports.listChannel = listChannel()
function bahasalist() {
    return `*List kode Bahasa*\n
  *Code       Bahasa*
    sq        Albanian
    ar        Arabic
    hy        Armenian
    ca        Catalan
    zh        Chinese
    zh-cn     Chinese (China)
    zh-tw     Chinese (Taiwan)
    zh-yue    Chinese (Cantonese)
    hr        Croatian
    cs        Czech
    da        Danish
    nl        Dutch
    en        English
    en-au     English (Australia)
    en-uk     English (United Kingdom)
    en-us     English (United States)
    eo        Esperanto
    fi        Finnish
    fr        French
    de        German
    el        Greek
    ht        Haitian Creole
    hi        Hindi
    hu        Hungarian
    is        Icelandic
    id        Indonesian
    it        Italian
    ja        Japanese
    ko        Korean
    la        Latin
    lv        Latvian
    mk        Macedonian
    no        Norwegian
    pl        Polish
    pt        Portuguese
    pt-br     Portuguese (Brazil)
    ro        Romanian
    ru        Russian
    sr        Serbian
    sk        Slovak
    es        Spanish
    es-es     Spanish (Spain)
    es-us     Spanish (United States)
    sw        Swahili
    sv        Swedish
    ta        Tamil
    th        Thai
    tr        Turkish
    vi        Vietnamese
    cy        Welsh
      `
}
exports.bahasalist = bahasalist()
