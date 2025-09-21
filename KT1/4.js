const word = prompt("Ваше слово")

if(word === null || word.length === 0){
    throw new Error("Слово не введено")
}

const sqrt = Math.sqrt(word.length)
let result
if (sqrt % 1 === 0) {
     result = 1
} else {
    result = 0
}

console.log(result)