const TEXT_ID = "ui-number";

function increment() {
    setValue(TEXT_ID,getValue(TEXT_ID)+1);
}

function decrement() {
    let value = getValue(TEXT_ID);
    if(value<=0) {
        alert("Value can't negative");
        return;
    }
    setValue(TEXT_ID,value-1);
}

function getValue(id) {
    return parseInt(document.getElementById(id).textContent);
}

function setValue(id,value) {
    document.getElementById(id).innerText = value;
}