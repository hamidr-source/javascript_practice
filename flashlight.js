const lightOn = a => console.log("Light is on");
const lightOff = b => console.log("Light is off");
const flashLight = (condition, funcOn, funcOff) => condition ? funcOn() : funcOff();

chraqQove(true, lightOn, lightOff)
