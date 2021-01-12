const fs = require('fs-extra')

module.exports = left = async (zama, event) => {
    //console.log(event.action)
    const left = JSON.parse(fs.readFileSync('./lib/database/left.json'))
    const isLeft = left.includes(event.chat)
    try {
        if (event.action == 'remove' && left) {
            const gChat = await zama.getChatById(event.chat)
            const pChat = await zama.getContact(event.who)
            const { contact, groupMetadata, name } = gChat
            const pepe = await zama.getProfilePicFromServer(event.who)
            const capt = `Byee nak pongooott @${event.who.replace('@c.us', '')} 👋,join lagi biar gak di bilang anak pongot`
            if (pepe == '' || pepe == undefined) {
                await zama.sendFileFromUrl(event.chat, 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTQcODjk7AcA4wb_9OLzoeAdpGwmkJqOYxEBA&usqp=CAU', 'profile.jpg')
            } else {
                await zama.sendFileFromUrl(event.chat, pepe, 'profile.jpg')
                zama.sendTextWithMentions(event.chat, capt)
            }
        }
    } catch (err) {
        console.log(err)
    }
}