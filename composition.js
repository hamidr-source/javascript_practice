const compose = (...funcs) => arg =>
    funcs.reduce((arg, f) => f(arg), arg);

const divide2 = number => number / 2;
const divide3 = number => number / 3

const divide = compose(
    divide2,
    divide3
)

divide(30)
