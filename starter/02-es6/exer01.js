class User {
  constructor(email, password) {
    this.email = email
    this.password = password
  }
  isAdmin() {
    return this.admin === true
  }
}

class Admin extends User {
  constructor() {
    super()
    this.admin = true
  }
}

const User1 = new User('user@domain.com', 'pass123')
const Admin1 = new Admin('user@domain.com', 'pass123')

console.log(User1.isAdmin())
console.log(Admin1.isAdmin())