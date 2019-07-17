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
