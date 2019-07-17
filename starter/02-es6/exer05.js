const arr = [1, 2, 3, 4 , 5, 6]
const [x, ...y] = arr
console.log(x)
console.log(y)

function sumAll(...params) {
  return params.reduce((total, next) => total + next)
}
console.log(sumAll(1,2,4,8,16,32))

const userOne = {
  name: 'João',
  age: 34,
  address: {
    city: 'Vacaria',
    state: 'RS',
    country: 'BR'
  }
}

const userTwo = { ...userOne, name: 'Victor'}
console.log(userTwo)
const userThree = { ...userOne, address: city = 'Florianópolis'}
console.log(userThree)