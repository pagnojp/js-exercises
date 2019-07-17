const company = {
  name: 'TicketCampeira',
  address: {
    city: 'Vacaria',
    state: 'RS',
    country: 'BR'
  }
}

const { name, address: { city, state, country} } = company
console.log(name, city, state, country)

function showInfo({name, age}) {
  return `${name} have ${age} years old.`
 }
 console.log(showInfo({ name: 'João Pedro', age: 34 }))
