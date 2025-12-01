// let users = [
//     {id: 1, name: 'Аркадий', lastname: 'Петухов', age: 7},
//     {id: 2, name: 'Тимоха', lastname: 'Высокий', age: 55}
// ];

// function addUser(name, lastname, age) {
//     const maxId = users.length > 0 ? Math.max(...users.map(user => user.id)) : 0;
//     const newId = maxId + 1;
    
//     const newUser = {
//         id: newId,
//         name: name,
//         lastname: lastname,
//         age: age
//     };

//     users.push(newUser);
//     console.log(`Пользователь ${name} ${lastname} добавлен с ID ${newId}`);
//     return newUser;
// }
// function updateUser(id, name, lastname, age) {
//     const userIndex = users.findIndex(user => user.id === id);
    
//     if (userIndex === -1) {
//         console.log(`Пользователь с ID ${id} не найден`);
//         return null;
//     }

//     users[userIndex] = {
//         id: id,
//         name: name,
//         lastname: lastname,
//         age: age
//     };
//     console.log(`Данные пользователя с ID ${id} обновлены`);
//     return users[userIndex];
// }

// function deleteUser(id) {
//     const userIndex = users.findIndex(user => user.id === id);
    
//     if (userIndex === -1) {
//         console.log(`Пользователь с ID ${id} не найден`);
//         return false;
//     }
    
//     const deletedUser = users.splice(userIndex, 1)[0];
//     console.log(`Пользователь ${deletedUser.name} ${deletedUser.lastname} (ID: ${id}) удален`);
//     return true;
// }

// function displayUsers() {
//     console.log('\nТекущий список пользователей:');

//     users.forEach(user => {
//         console.log(`ID: ${user.id}, Имя: ${user.name}, Фамилия: ${user.lastname}, Возраст: ${user.age}`);
//     });
// }

// console.log('\n1. Исходное состояние:');
// displayUsers();

// console.log('\n2. Добавление новых пользователей:');
// addUser('Вади', 'Карташов', 9);
// addUser('Альберт', 'Острые_козырьки', 90);
// displayUsers();

// console.log('\n3. Изменение данных пользователя с ID 1:');
// updateUser(1, 'Роман', 'Шпак', 12);
// displayUsers();

// console.log('\n4. Попытка изменения несуществующего пользователя:');
// updateUser(10, 'Test', 'User', 40);

// console.log('\n5. Удаление пользователя с ID 2:');
// deleteUser(2);
// displayUsers();

// console.log('\n6. Попытка удаления несуществующего пользователя:');
// deleteUser(99);

// console.log('\n7. Финальное состояние:');
// displayUsers();

// fetch('https://jsonplaceholder.typicode.com/users')
//   .then((res) => res.json())
//   .then((res) => console.log(res));

  // let user = {
  //   name: 'bob',
  //   email: 'example@com',
  // };
  // let userJSONE = JSON.stringify(user);

  // console.log(userJSONE);

  // fetch('https://jsonplaceholder.typicode.com/users',{
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/jsone'
  //   },
  //   body: userJSONE
  // }).then((res) => res.json())
  // .then((result) => console.log(result));

  //PUT - обновляет объект на сервере полностью


// try {
//   console.log(1);
//   console.log(n);
//   console.log(2);
// } catch(erorr){
//   console.log('Возникла ошибк' + erorr.stack)
// }finally{
//   console.log('последний блок')
// }

// function calculate() {
//   let a = parseFloat(prompt('Напиши число'));
//   let b = parseFloat(prompt('Напиши число'));
//   let c = prompt('Напиши оператор');

//   if (isNaN(a) || isNaN(b)) {
//     throw new Error('Некорректные числа');
//   }
//   if (c === '/' && b === 0) {
//     throw new Error('Делить на ноль нельзя');
//   }

//   if (c === '+') {
//     console.log(a + b);
//   } else if (c === '-') {
//     console.log(a - b);
//   } else if (c === '*') {
//     console.log(a * b);
//   } else if (c === '/') {
//     console.log(a / b);
//   } else {
//     throw new Error('Неизвестный оператор');
//   }
// }

// console.log(calculate());

// class Player {
//   #hp
//   constructor(name, damage){
//     this.name = name;
//     this.damage = damage;
//     this.#hp = 100;
//   }
//   atack(enemy){
//     enemy.takeDamage(this.damage);
//     console.log(this.name + ' нанес урон' + enemy.name);
//   }
//   takeDamage(countDamage){
//     this.#hp -= countDamage;
//     if(this.#hp <= 0){
//       console.log(this.name + ' погиб')
//     }
//     else{
//       console.log(this.name + ' получил урон.' + this.#hp + ' hp осталось');
//     }
//   }
// }

// class Enemy{
//   #hp
//   constructor(name, damage){
//     this.name = name;
//     this.damage = damage;
//     this.#hp = 100;
//   }
//     atack(player){
//     player.takeDamage(this.damage);
//     console.log(this.name + ' нанес урон' + player.name);
//   }

//   takeDamage(countDamage){
//     this.#hp -= countDamage;
//     if(this.#hp <= 0){
//       console.log(this.name + 'погиб')
//     }
//     else{
//       console.log(this.name + ' получил урон.' + this.#hp + ' hp осталось');
//     }
//   }

// }

// let user1 = new Player(' Игрок' , 20);
// let enemy1 = new Enemy(' гоблин', 50);
// user1.atack(enemy1);
// enemy1.atack(user1);