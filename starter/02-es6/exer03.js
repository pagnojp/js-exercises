const arr = [1, 2, 3, 4, 5]
console.log('item +10: ', arr.map(item => item + 10))

const user = { nome: 'João Pedro', age: 34 }
const showAge = () => user.age
console.log('age: ', showAge())

const name = "João Pedro";
const age = 34;
const showUser = () => ({ name, age })
console.log('user: ', showUser())

// const promise = () => new Promise((resolve, reject)=>resolve())
// console.log(promise)