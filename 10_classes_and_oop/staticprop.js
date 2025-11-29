class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username ${this.username}`);
    }

    static creatId(){
        return `123`
    }
}

const vishal = new User("vishal")
// console.log(vishal.creatId())

class Teacher extends User{
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const mobile = new Teacher("Samsung", "smg@gmail.com")

mobile.logMe()

// console.log(mobile.creatId());
