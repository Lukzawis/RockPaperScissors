function rand(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function estimateResult(user, computer){
    if(user == computer){
        score.draw++;
        console.log("No one win!");
    }
    else if(user == 1 && computer == 2){
        score.computer++;
        console.log("Computer win!");
    }
    else if(user == 1 && computer == 3){
        score.user++;
        console.log("User win!");
    }
    else if(user == 2 && computer == 1){
        score.user++;
        console.log("User win!");
    }
    else if(user == 2 && computer == 3){
        score.computer++;
        console.log("Computer win!");
    }
    else if(user == 3 && computer == 1){
        score.computer++;
        console.log("Computer win!");
    }
    else if(user == 3 && computer == 2){
        score.user++;
        console.log("User win!");
    }
    console.log(`You: ${showWhat(user)}`);
    console.log(`Com: ${showWhat(computer)}`);
}
function showWhat(id){
    switch(id){
        case 1: 
            return 'rock';
            break;
        case 2:
            return 'paper';
            break;
        case 3:
            return 'scissors';
            break;
    }
}

function showScore(){
    console.log(`User: ${score.user}`);
    console.log(`Computer: ${score.computer}`);
    console.log(`Draw: ${score.draw}`);
}
//Main loop
let score = {
    user: 0,
    computer: 0,
    draw: 0
};

for(;;){
    let user = parseInt(prompt("1 - rock; 2 - paper; 3 - scissors; 0 - exit; 9 - score"));
    let computer = rand(1, 3);
    console.clear();
    if(user == 0){
        break;
    }
    else if(user == "9"){
        showScore();
    }
    else if(user >= 1 && user <= 3){
        estimateResult(user, computer);
    }
    else{
        alert("Entered data is incorrect!");
    }
}