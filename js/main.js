/*1.(Map)
Користувач вводить слово англійською, а йому у відповідь українське.
Використовувати Map і діалогові вікна.
Якщо користувач вводить слово, котрого не існує,
йому пропонується доповнити словник, і юзер додає нове слово з перекладом в Map.
Далі програма повторно запитує слово для перекладу і так по колу.
Для завершення програми юзер має ввести команду: #exit
 */
const map = new Map([
  ["first", "превый"],
  ["second", "второй"],
  ["third", "третий"],
]);

function translate(getWord) {
  if (map.has(getWord) === true) {
    alert(map.get(getWord));
  } else {
    alert("Добавьте перевод");
    let add = prompt("Добавить");
    map.set(getWord, add);
    alert(`Слово ${getWord} добавлено. Перевод: ${add}`);
  }
}

let exit = false;
while (exit === false) {
  const getWord = prompt("Скажи слово или выйди = #exit");
  console.log(getWord);

  if (getWord === "#exit") {
    alert("Выход из программы");
    exit = true;
  } else {
    translate(getWord);
  }
}
/*2.
(Set) У вас є два масиви з числами. Необхідно знайти всі числа, які є одночасно в обох масивах.
const array1 = [1, 2, 3, 4, 5, 6];
const array2 = [4, 5, 6, 7, 8, 9];
 */

const array1 = [1, 2, 3, 4, 5, 6];
const array2 = [4, 5, 6, 7, 8, 9];

const setArr = new Set(array1);
const same_numb = array2.filter((numb) => setArr.has(numb));
console.log(same_numb);

/*3.(Set)
Дано рядок, що може містити повторювані символи.
Необхідно перевірити, чи складається цей рядок лише з унікальних символів.
const str = "abcdefg"; */
const str = "abcdefg";
const set_str = new Set(str);
console.log(set_str);
const result = str.length === set_str.size;
if (result) {
  console.log("Its unique str");
} else {
  console.log("not unique");
}

/*4.(Function constuctor)
Створіть функцію-конструктор Car, яка створює об'єкти з наступними властивостями:
марка (brand),
модель (model),
рік випуску (year).
Додайте до об'єктів метод getCarInfo(),
який буде повертати рядок з інформацією про автомобіль у форматі:
"Марка: Toyota, Модель: Corolla, Рік випуску: 2020". */
function Car(brand, model, year) {
  this.brand = brand;
  this.model = model;
  this.year = year;
  this.getCarInfo = function () {
    return `Brand: ${this.brand}, Model: ${this.model}, Year: ${this.year}`;
  };
}

const car1 = new Car("Toyota", "Corolla", 1930);
const car2 = new Car("Bmw", "X5", 2014);

console.log(car1.getCarInfo());
console.log(car2.getCarInfo());

/*5.(Function constuctor)
Створіть функцію-конструктор User, яка приймає ім'я користувача (name) та його вік (age).
Додайте метод canVote(), який буде повертати true, якщо користувач старше 18 років,
і false – якщо молодше.
*/

function User(name, age) {
  this.name = name;
  this.age = age;
  this.canVote = function () {
    if (this.age > 18) {
      return true;
    } else {
      return false;
    }
  };
}

const user1 = new User("Mails", 19);
const user2 = new User("Maikle", 15);
console.log(user1.canVote());
console.log(user2.canVote());
