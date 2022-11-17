async function getUsers() {
    const KEYS = ['usr', 'eme', 'psw', 'age', 'loc', 'fll']
    return await fetch("/challenge01/users.txt").then(res => res.text()).then(content => {
        const validUsers = content.split(/\r?\n\r?\n/).filter(user => KEYS.every(key => user.includes(key)))
        let lastValidUser = validUsers[validUsers.length - 1].split(" ").filter(user => user.includes('usr'))[0].split(':')[1]
        console.log(validUsers.length, lastValidUser)
    })
}

getUsers()