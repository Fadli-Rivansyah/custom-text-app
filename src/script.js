const inputText = document.querySelector('#input-text');
const wordModel = document.querySelector('#word-model');
const btnResult = document.querySelector('#btn-result');
const btnCopy = document.querySelector('#btn-copy');
const result = document.querySelector("#result");
const iconcopy = document.querySelector(".icon-copy");

btnResult.addEventListener('click', (e) => {
    e.preventDefault();
    if(wordModel.value == "uc"){
        result.value = inputText.value.toUpperCase();
    } else if (wordModel.value == "lc") {
        result.value = inputText.value.toLowerCase();
    } else if (wordModel.value == "sc") {
        result.value = snakeCase(inputText.value);
    } else if (wordModel.value == "kc") {
        result.value = kebabCase(inputText.value);
    } else if (wordModel.value == "cc") {
        result.value = camelCase(inputText.value);
    }else if (wordModel.value == "pc") {
        result.value = pascalCase(inputText.value);
    } 
});

btnCopy.addEventListener("click", () => {
    navigator.clipboard.writeText(result.value)
    iconcopy.innerHTML= `
        <svg class="w-6 h-6 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 11.917 9.724 16.5 19 7.5"/>
        </svg>
    `;
    setTimeout(() => iconcopy.innerHTML= `
        <svg class="w-6 h-6 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="M14 4v3a1 1 0 0 1-1 1h-3m4 10v1a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h2m11-3v10a1 1 0 0 1-1 1h-7a1 1 0 0 1-1-1V7.87a1 1 0 0 1 .24-.65l2.46-2.87a1 1 0 0 1 .76-.35H18a1 1 0 0 1 1 1Z"/>
        </svg>
    `, 1000);
})

function snakeCase (text) {
    return text.split(" ").join("_");
}

function camelCase(text) {
    return text.toLowerCase().split(" ").map((word, index) => index == 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)).join("");
}

function kebabCase (text) {
    return text.split(" ").join("-");
}

function pascalCase (text){
    return text.toLowerCase().split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join("");
    
}