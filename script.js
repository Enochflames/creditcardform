const cardholder = document.getElementById("cardholder-name");
const cardNumber = document.getElementById("card-number");
const expiry = Array.from(document.querySelectorAll(".expiry");
const cvc = document.getElementById("cvc");
const submit = document.getElementById("submit");
const nameOnCard = document.getElementById(".cardholder-display");
const numOnCard = document.getElementById(".card-number-display");
const expMM = document.getElementById(".expiry-month-display");
const expYY = document.getElementById(".expiry-month-display");
const cvcDisplay = document.getElementById(".cvc-display");
const thankYou = document.getElementById("thank-you-header");
const thankYouSection = document.getElementById("thank-you");
const continueBtn = document.getElementById("continue");
const form = document.getElementById("myForm");
const expiryErrorMsg = document.getElementById("expiry-error");

function inputName() {
    nameOnCard.innerHTML = cardholder.value;
    thankYou.innerHTML = 'Thank You $(cardholder.value)';
    if (nameOnCard.innerHTML == "") {
        nameOnCard.innerHTML = cardholder.placeholder;
    }

}
 