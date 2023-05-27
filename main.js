const button = document.getElementById("button");
const number = document.getElementById("number");
const input = document.getElementById("input");
const playerScore = document.getElementById("Score");
const score_number = document.getElementById("score_number")
const modal = document.getElementById("modal");
const closeModalBtn = document.getElementById("closemdlbtn");
const largeWarning = document.getElementById("large_warning");
const noInputWarning = document.getElementById("noinput_warning");

let score = 100;




//small taks and functions for the game----


showLargeWarning = () =>{
    largeWarning.classList.remove("hidden")
    largeWarning.classList.add("warning");
    hideWarning = () =>{
        largeWarning.classList.add("hidden")
    }
    setTimeout(hideWarning, 3600)
}

showNoInputWarning = () =>{
    noInputWarning.classList.remove("hidden")
    noInputWarning.classList.add("warning");
    hideInputWarning = () =>{
        noInputWarning.classList.add("hidden")
    }
    setTimeout(hideInputWarning, 3600)
}


shakeInput = () =>{
    input.classList.add("shake");
    stopshake = () =>{
        input.classList.remove("shake")
    }
    setTimeout(stopshake, 500)
}

shakeScorNumber = () =>{
    score_number.classList.add("shake");
    stopScoreShake = () =>{
        score_number.classList.remove("shake")
    }
    setTimeout(stopScoreShake, 500)
}

generateRandomNumber = () =>{
    randomNumber = Math.floor(Math.random() * 6);
}


//start of the game----------

onButtonClick =()=>{
    button.addEventListener("click", ()=>{
        generateRandomNumber()
        number.innerText = randomNumber
        console.log(randomNumber)

        if(input.value === ""){
            showNoInputWarning()
            number.innerText = 0
        }
        else if(input.value !== "" && input.value > 5){
            showLargeWarning()
            shakeInput()
            number.innerText = 0
            input.value = ""
        }
        else if(input.value == randomNumber && input.value < 5 ){
            number.style.color = 'green'
            score = score + 10
            playerScore.innerHTML= `score:`
            score_number.innerHTML = ' &nbsp;' + score;
            score_number.style.color = "green"
        }
        else if(input.value < 5 && input.value !== randomNumber){
            number.style.color = 'red';
            score = score - 5
            playerScore.innerHTML = `score:`
            score_number.innerHTML = " &nbsp;" + score;
            score_number.style.color = "red"
            shakeScorNumber()
        }

        

        gameOver = () => {
            if(score <= 0){
                button.disabled = true;
                modal.showModal();
            }
        }
        gameOver()

        //modal for the end of the game - to close and restart the game
        closeModalBtn.addEventListener("click", ()=> {
            modal.close()
            window.location.reload();
        })

    })
}

onButtonClick()
