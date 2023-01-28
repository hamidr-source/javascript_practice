let student = {
    "amir": 25,
    "bahador":14
}
const grade = Object.keys(student).map(key =>({
    name:key,
    grade:student[key]
}))
