const compose = (...funcs) => arg =>
funcs.reduce((com, f) => f(com), arg)

const second = () => 1000;

const getCurrentTime = () => new Date();

const clear = () => console.clear();

const log = message => console.log(message)

const clockTime = date => ({
    hours: date.getHours(),
    minutes: date.getMinutes(),
    seconds: date.getSeconds()
})

const pm = time => ({
    ...time,
    hours: time.hours > 12 ? time.hours - 12 : time.hours
})

const amPm = time => ({
   ...time,
    ampm: time < 12 ? "AM" : "PM"
})

const formatClock = format => time =>
    format
        .replace("hh", time.hours)
        .replace("mm", time.minutes)
        .replace("ss", time.seconds)
        .replace("tt", time.ampm);

const zero = key => time => ({
    ...time,
    key: time[key] < 10 ? "0" + time[key] : time[key]
})

const convert = time =>
    compose(
    amPm,
    pm
)(time)

const digits = civilianTime =>
    compose(
    zero("hours"),
    zero("minutes"),
    zero("seconds")
)(civilianTime)

const startTicking = () =>
    setInterval(
        compose(
            clear,
            getCurrentTime,
            clockTime,
            convert,
            digits,
            formatClock("hh:mm:ss tt"),
            log
    ),
    second()
);
