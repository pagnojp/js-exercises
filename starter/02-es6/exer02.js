const users = [
  { name: 'João', age: 34, company: 'Unemployed' },
  { name: 'Pedro', age: 34, company: 'Unemployed' },
  { name: 'Victor', age: 13, company: 'Sony' }
]

const ages = users.map(users => users.age)
console.log('map:', ages)

const unemployeds = users.filter(users => users.company === 'Unemployed')
console.log('filter:', unemployeds)

const employee = users.find(users => users.company !== 'Unemployed')
console.log('find:', employee)

const doubleAge = users.map(users => users.age * 2)
console.log('age * 2:', doubleAge)

const doubleAgeGreatherThan = users.reduce((acc, user) => { 
  if ((user.age * 2) > 50) acc.push({ nome: user.name, age: user.age * 2, company: user.company }); return acc 
}, []);
console.log('greather than 50:', doubleAgeGreatherThan)