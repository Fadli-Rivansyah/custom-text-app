const inputText = document.querySelector('#input-text');
const wordModel = document.querySelector('#word-model');
const btnResult = document.querySelector('#btn-result');
const btnCopy = document.querySelector('#btn-copy');
const result = document.querySelector("#result");

btnResult.addEventListener('click', (e) => {
    e.preventDefault();
    if(wordModel.value == "uc"){
        result.value = inputText.value.toUpperCase();
    } else if (wordModel.value == "lc") {
        result.value = inputText.value.toLowerCase();
    } else if (wordModel.value == "sc") {
        result.value = snakeCase(inputText.value);
    } else if (wordModel.value == "cc") {
        result.value = camelCase(inputText.value);
    }
});

btnCopy.addEventListener("click", () => {
    
})

function snakeCase (text) {
    return text.split(" ").join("_");
}

function camelCase(text) {
    return text.toLowerCase().split(" ").map((word, index) => index == 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)).join("");
}
