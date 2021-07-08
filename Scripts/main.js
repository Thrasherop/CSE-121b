function submitPrompt(prompt) {
    
    //Lets user know something is happening
    document.querySelector("#output").textContent = "PhilosopherAI is thinking...";

    
    const url = 'http://localhost:8989/hello/' + prompt
    fetch(url)
    .then(response => response.json())  
    .then(json => {
        console.log(json);
        let response = json['completion'];
        document.querySelector("#output").textContent = response;
    })};

function onSubmit(){

    let prompt = document.querySelector("#input").value;
    console.log("User prompt is: " + prompt);

    submitPrompt(prompt)

}

document.querySelector("#submit").addEventListener("click",onSubmit);

