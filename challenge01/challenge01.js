function isValidUser(user){
    if(!user.match("usr:.+")){
        return false;
    }
    if(!user.match("eme:.+")){
        return false;
    }
    if(!user.match("psw:.+")){
        return false;
    }
    if(!user.match("age:.+")){
        return false;
    }
    if(!user.match("loc:.+")){
        return false;
    }   
    if(!user.match("fll:.+")){
        return false;
    }
    return true
}


async function getUsers() {
    let validUsers = 0
    let line = ""
    let lastValidUser = ""
    return await fetch("./users.txt").then(res => res.text()).then(content => {
        let users = content.split("\n")
        for(let i = 0; i<users.length; i++){
            while(i < users.length && users[i].length > 1){
                line += " "+users[i]
                i++
            }
            if(isValidUser(line)){
                validUsers++
                lastValidUser = line
            }
            line = ""
        }
        let index = lastValidUser.indexOf("usr:")+4
        let lastIndex = lastValidUser.substring(index).indexOf(" ")
        lastValidUser = lastValidUser.substring(index, index+lastIndex)
        return {lastValidUser, validUsers}
    })
}

console.log(getUsers())