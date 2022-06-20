// 2я домашка по JS со звездочками:

// 1. Написать скриптик, который сосчитает и выведет результат от возведения 2 в степень 10, начиная со степени 1
// 1*. Преобразовать 1 задачу в функцию, принимающую на вход степень, в которую будет возводиться число 2
function pow(a) {
    let result = 2

    if (a == 1) {
        console.log(result);
    } else if (a == 0) {
        result = 1;
        console.log(result); //любое число в 0 степени = всегда 1
    } else
    for (let i = 1; i < a; i++) {
        result = result * 2;
        console.log(result);
    }
}
pow(-2) //ничего не выведется в консоль
pow(0)
pow(1)
pow(5)
pow(10)



// 2. Написать скрипт, который выведет 5 строк в консоль таким образом, чтобы в первой строчке выводилось :), во второй :):) и так далее
// Пример в консоли:
// :)
// :):)
// :):):)
// :):):):)
// :):):):):)

// 2*. Преобразовать 2 задачу в функцию, принимающую на вход строку, которая и будет выводиться в консоль (как в условии смайлик), а также количество строк для вывода 
// e.g. function printSmile(stroka, numberOfRows)
function printSmile(str, rows) {

    for (let i = 1; i <= rows; i++) {
        console.log(str.repeat(i));
    }
}
printSmile(":(", 0) //ничего не выведется в консоль
printSmile(":|", 1)
printSmile(":)", 3)
printSmile(":D", 7)



// 3**.  Написать функцию, которая принимает на вход слово. Задача функции посчитать и вывести в консоль, сколько в слове гласных, и сколько согласных букв.
// e.g. function getWordStructure(word)
// В консоли: 
// Слово (word) состоит из  (число) гласных и (число) согласных букв
function letters_count(str) {
    let vowel_list = 'aeiouyAEIOUYаеёиоуыэюяАЕЁИОУЫЭЮЯ'; //задаем гласные символы для сравнения
    let vcount = 0;
    let consonant_list = 'bcdfghjklmnpqrstvwxzBCDFGHJKLMNPQRSTVWXZбвгджзйклмнпрстфхцчБВГДЖЗЙКЛМНПРСТФХЦЧ'; //задаем согласные символы для сравнения
    let ccount = 0;
    
    for(let i = 0; i < str.length ; i++) {
      if (vowel_list.indexOf(str[i]) != -1) { //если текущий символ в str совпадает хотя бы с одним из гласных символов в vowel_list - то это гласная
        vcount += 1;
      } else if (consonant_list.indexOf(str[i]) != -1) { //если данный символ - не гласная, проверяем на согласную из consonant_list
        ccount += 1;
      } //если текущий символ не гласная и не согласная, он просто пропустится
    }
    console.log("Слово "+ str + " состоит из " + vcount + " гласных и " + ccount + " согласных");
  }
  letters_count("test-case")
  letters_count("case")
  letters_count("Case")
  letters_count("Text with spaces")
  letters_count("091236")
  letters_count("(/!.,")
  letters_count("Русская фраза")


  
// 4**. Написать функцию, которая проверяет, является ли слово палиндромом
// e.g. function isPalindrom(word)