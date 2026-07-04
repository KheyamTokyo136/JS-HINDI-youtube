function setuser(username) {
    // comples DB call
    this.username=username
    console.log('called')

}

function createuser(username,email,password) {
    setuser.call(this,username)
    this.email=email
    this.password=password
}
const chai= new createuser("kheyam","kheyamkhan@gmail.com",123)
console.log(chai);
