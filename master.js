function output()
{
    let rawInput = document.getElementById("userInput").value;
    const getuserInput = rawInput.toLowerCase();
    const choices = ["rock", "paper", "scissor"];
    const computerChoice = Math.floor(Math.random() * choices.length);
    
    if(getuserInput == "")
    {
        alert("enter your choice : Rock, paper, scissor");
    }
    
    else if(getuserInput == "rock" || getuserInput == "paper" || getuserInput == "scissor")
    {
        if(getuserInput == choices[computerChoice])
        {
            alert("Its a TIE ! computer chose " + choices[computerChoice] + " and you chose " + rawInput);
        }

        else if(getuserInput == "rock" && choices[computerChoice] == "scissor" || getuserInput == "paper" && choices[computerChoice] == "rock" || getuserInput == "scissor" && choices[computerChoice] == "paper")
        {
            alert("you win ! the computer choosed " + choices[computerChoice] + " and you choosed " + rawInput);
        }
        else if(getuserInput == "rock" && choices[computerChoice] == "paper" || getuserInput == "paper" && choices[computerChoice] == "scissor" || getuserInput == "scissor" && choices[computerChoice] == "rock"){
            alert("You lose :( the computer choosed " + choices[computerChoice] + " and you choosed " + rawInput);
        }

    }
    else{
        alert("you have entered either something else than the options or you have typo");
    }
}