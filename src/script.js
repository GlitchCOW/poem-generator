function displayPoem(response){
    //type writer effect
    new Typewriter("#poem", {
        strings: response.data.answer,
        autoStart: true,
        delay: 1,
        cursor: "",
      });
}




function generatePoem(event){
    event.preventDefault();
    let instructionIput = document.querySelector(".instructions");
    let apiKey = "c99a06af36400a3o817aacf43a5073bt";
    let context = "your are an emotional poem expert your mission is to make the reader feel the poem in 4 line basic HTML with each line sparted with a <br /> Make sure to follow the user instructions. Do not include a title to the poem. follow the User instructions"
    let prompt = `User instructions generate an emotional poem about ${instructionIput}` 
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`


    let poemElement = document.querySelector("#poem");
    poemElement.classList.remove("hidden");
    poemElement.innerHTML = `<div class="generating">⏳ Generating poem ${instructionsInput.value}</div>`;    

   axios.get(apiUrl).then(displayPoem);
}


// event listerner//
let poemForm = document.querySelector("#poem-gen-form");
poemForm.addEventListener("submit", generatePoem);



