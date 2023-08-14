const buttons = document.querySelectorAll('.button');
const submit = document.getElementById('submit');
const select = document.getElementById('select');

submit.addEventListener('click', function(){
    document.querySelector('.thankState').style.display = "block";
});

buttons.forEach(button => {
    button.addEventListener("click", ()=>{
        button.style.backgroundColor = "white";
        button.style.color = "orange";
        const buttonText = button.textContent;
        select.textContent = `You Selected ${buttonText} out of 5`;
    })
})