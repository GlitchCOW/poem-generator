function generatePoem(event){
    event.preventDefualt();

    //type writer effect
    new Typewriter("#poem", {
        strings: "",
        autoStart: true,
        delay: 1,
        cursor: "",
      });
}


// event listerner//
let poemForm = document.getElementById("#poem-gen-form");
poemForm.addEventListener("submit", generatePoem);