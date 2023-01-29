const logIn = userName => message => console.log(`${userName} -> ${message}`)

let amirLog = logIn("amir")
amirLog("hello user")
