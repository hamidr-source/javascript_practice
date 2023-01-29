const fibonacci = limiter =>{
    let fib = []
    let f1 = 0
    let f2 = 1
    fib.concat(f1)
    fib.concat(f2)

    for(let i= 0; i<limiter; i++){
        fib.push(f1 + f2)
        f3 = f1
        f1 = f2
        f2 = f3 + f2
    }
    console.log(fib)
}


