const text = document.querySelector(".inpt");
/*text.addEventListener("input", (event) => {
  console.log(event.target.value);
});*/
text.addEventListener("focus", (event) => {
  console.log("focus");
});
text.addEventListener("blur",handleBlur);

function handleBlur(event) {
  const name = event.target.value;
  alert(`Hello ${name}`);
}

const btn = document.querySelector(".btn");
btn.addEventListener('click',handleClick);

function handleClick() {
  console.log("ok");  
}

document.addEventListener("keydown", hPress);

function hPress(params) {
  if (params.ctrlKey && params.code == "KeyC") {
    console.log("Copy Error");
    
    params.preventDefault();
  }
}

/*class Bloger {
  constructor(obj) {
    this.email = obj.email;
    this.age = obj.age;
    this.numberOfPost = obj.numberOfPost;
    this.topics = obj.topics;
  }
  getInfo() {
    
  }
  updatePostCount(value) {
    this.numberOfPost += value;
  }
}

const alic = new Bloger({
  email: "aa@r.com",
  age: 25,
  numberOfPost: 30,
  topics: ["chiken","sport"]
})

class User{
  #login;
  #email;

  constructor(login, email) {
    this.#login = login;
    this.#email = email;
  }

  get getLogin() {
    return this.#login;
  }

  set login(newLogin) {
    this.#login = newLogin;
  }

  getEmail() {
    return this.#email;
  }

  setEmail(newEmail) {
    this.#email = newEmail;
  }
}

const toma = new User("Toma", "ww@kk.net");
console.log(toma.getLogin);
toma.login = "tome3"
console.log(toma.getLogin);
*/
