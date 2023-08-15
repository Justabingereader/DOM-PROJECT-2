const buttons = document.querySelectorAll('.button');
const submit = document.getElementById('submit');
const select = document.getElementById('select');
let isAnyButtonClicked = false;
submit.addEventListener('click', function(){
    document.querySelector('.thankState').style.display = "block";
    validateButton();
});
buttons.forEach(button => {
    button.addEventListener("click", () => {
        isAnyButtonClicked = true;
        buttons.forEach(btn => btn.classList.remove("highlight"));
        button.classList.add("highlight");
        const buttonText = button.textContent;
        select.textContent = `You Selected ${buttonText} out of 5`;
    });
});
function validateButton(){
    if(isAnyButtonClicked){
        select.textContent = `You Selected ${buttonText} out of 5`;
    } else {
        select.textContent = "Kindly give us a rating";
    }
}
