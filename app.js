const refValue = document.getElementById("valueToConvert");
const refCurrency = document.getElementById("CurrencyToConvert");
const euro = refCurrency.options[0].text;
const usd = refCurrency.options[1].text;
const yen = refCurrency.options[2].text;
const ls = refCurrency.options[3].text;
const convert = document.getElementById("convert");
const reset = document.getElementById("reset");
const result = document.querySelector(".result");

convert.addEventListener("click", goConvert);
reset.addEventListener("click", goReset);


function goConvert() {
    let toConvert = refValue.value;
    if(refCurrency.value === euro) {
        result.textContent = Math.floor(toConvert*1.13) + " USD   /  " + Math.floor(toConvert*129.8) + " YEN   /  " + Math.floor(toConvert*0.84) + "  LS";
    } else if(refCurrency.value === usd) {
        result.innerHTML = Math.floor(toConvert*0.88) + " EUR   /  " + Math.floor(toConvert*114.73) + " YEN   /  " + Math.floor(toConvert*0.74) + "  LS";
    } else if(refCurrency.value === yen) {
        result.innerHTML = Math.floor(toConvert*0.0077) + " EUR   /  " + Math.floor(toConvert*0.0087) + " USD   /  " + Math.floor(toConvert*0.0065) + "  LS";
    } else {
        result.innerHTML = Math.floor(toConvert*1.19) + " EUR   /  " + Math.floor(toConvert*1.34) + " USD   /  " + Math.floor(toConvert*154.04) + "  YEN";
    }
}

function goReset() {
    result.innerHTML = "";
    refValue.value = "";
}
