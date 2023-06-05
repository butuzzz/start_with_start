let name = document.querySelector('#name');
let age = document.querySelector('#age');
let email = document.querySelector('#E-mail');
let submit = document.querySelector('#submit');


let users = {};

function User(name, age, email) {
    this.name = name;
    this.age = age;
    this.email = email;
}

function createID(users){
    return Object.keys(users).length;
}

submit.addEventListener('click', function() {
    const nameUser = name.value;
    const ageUser = age.value;
    const emailUser = email.value;

    const user = new User(nameUser, ageUser, emailUser);

    const userID = 'User' + createID(users);
    users[userID] = user;
    console.log(users);

    alert(`${nameUser}, Вы успешно зарегестрировались!`)
})


const getResourse = async (url) => {
    const response = await fetch(url);

    if (!response.ok) {
        throw new Error(`Ошибка по адресу ${url}, статус ошибки ${response}`);
    }
    return await response.json();
};
