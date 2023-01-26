const gradeList = [
    {name:"amir", grade:14},
    {name:"bahador", grade:20}
]
const arrayToObject = gradeList.reduce((gradeObject, {name, grade}) =>{
    return gradeObject = {name,grade};
}, {});
console.log(arrayToObject)
