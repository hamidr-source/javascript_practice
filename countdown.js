const countdown = (number,func) => {
    func(number);
    return number > 0 ? countdown(number - 1, func) : number;
}
