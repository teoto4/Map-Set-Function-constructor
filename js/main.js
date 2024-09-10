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
