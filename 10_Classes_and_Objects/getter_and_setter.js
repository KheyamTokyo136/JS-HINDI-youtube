class user{
    constructor(email,password){
        this.email=email
        this.password=password
    }
    get email(){
        return this._email.toUpperCase()
    }
    set email(value)
    {
        this._email=value
    }
    get password(){
        return `${this._password}kheyam`
    }
    set password(value){
        return this._password=value
    }
}

const kheyam= new user("@gmail.com","abc")
console.log(kheyam.email);
