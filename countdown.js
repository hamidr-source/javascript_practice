const countdown = number => {
    console.log(number);
    return number > 0 ? setTimeout(() => countdown(number - 1),1000) : number
};
countdown(10)
