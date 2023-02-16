
function getOtt () {
    const ott = randomOtt();
    const ottString = ott + '';
    if (ottString.length === 4) {
        return ott;
    } else {
        return getOtt();
    }
}




function randomOtt() {
  const random = Math.round(Math.random() * 10000);
  return random;
}


document.getElementById('generate-btns').addEventListener('click', function () {
    const randomOtt = getOtt();


    // Disply ott
    const ottField = document.getElementById('ott-field');
    ottField.value = randomOtt;
})