const rewards = {
    exp: 9999999999,
    money: 9999999999,
    potion: 9999999999,
    mythic: 9999999999,
    legendary: 9999999999
}

const cooldown = 10
let handler = async (m) => {
    let user = global.db.data.users[m.sender]
    if (new Date - user.lastmonthly < cooldown) throw `You have already claimed this cheat rewards, wait for *${((user.lastmonthly + cooldown) - new Date()).toTimeString()}*`
    let text = ''
    for (let reward of Object.keys(rewards)) if (reward in user) {
        user[reward] += rewards[reward]
        text += `*+${rewards[reward]}* ${rpg.emoticon(reward)}${reward}\n`
    }
    conn.sendButton(m.chat,'*––––––『 CHEAT REWARD 』––––––*', text.trim(), null, [['Inventory', '.inv'], ['Menu', '.menu']],m)
    user.lastmonthly = new Date * 1
}
handler.help = ['cheat']
handler.tags = ['owner']
handler.command = /^(cheat)$/i

handler.cooldown = cooldown

export default handler