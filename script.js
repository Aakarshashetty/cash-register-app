const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const next = document.querySelector(".next");
const check = document.querySelector(".check");
const errMsg = document.querySelector(".err-msg")
const numOfNotes = document.querySelectorAll(".no-of-notes");
const notes = [2000, 500, 100, 20, 10, 5, 1];
const hide = document.querySelector(".hide"); 
const changeTable = document.querySelector(".change-table");


hide.style.display = "none";
next.addEventListener('click', () => {
    if(billAmount.value.length !== 0){
        hide.style.display = "block"
        errorMessage("Enter cash given");
    }
    else if(billAmount.value.length === 0){
        errorMessage("Enter valid bill amount");
    }
});
check.addEventListener('click', () => {
    
    hideError();
    if(billAmount.value > 0) {
        console.log("cash given ", typeof cashGiven.value);
        console.log("bill amount ",typeof billAmount.value);
        if(Number(cashGiven.value) >= Number(billAmount.value)){
            console.log("true");
            const amount = cashGiven.value - billAmount.value;
            changeToBeGiven(amount);

        }else{
            errorMessage("Cash given is insufficient:(");
        }
    }else {
        errorMessage("Invalid Input");
    }

});

const hideError = () => {
    errMsg.style.display = "none";
};
const errorMessage = (msg) => {
    errMsg.style.display = "flex";
    errMsg.innerText = msg;
};

const changeToBeGiven = (amt) => {
    changeTable.classList.remove("d-none");
for(let i=0; i< notes.length; i++) {
    const noOfNotes = Math.trunc(amt / notes[i]);
    amt %= notes[i];
    numOfNotes[i].innerText = noOfNotes;
}
    
}