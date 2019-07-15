function checkAge(age) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      return age >= 18 ? resolve() : reject()
    }, 2000)
  })    
}

checkAge(34)
  .then(function(){
    console.log("18+")
  })
  .catch(function(){
    console.log("18-")
  })