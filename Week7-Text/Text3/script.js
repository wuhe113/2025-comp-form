var firstText = [
    "A",,
    "The",
    "Her",
    "His",
    "Their",
  ]
  
  var secondText = [
    "star",
    "stone",
    "phone",
    "cow",
    "clock",
    "film",
    "speaker",
    "rose",
    
  ]
  
  
  var thirdText = [
    "runs",
    "walks",
    "eats",
    "writes",
    "sings",
    "sleeps",
    "studies",
    "investigates",
    "has",
  ]


  
  
  
  function addText() {
    let firstWord = Math.floor(Math.random() * firstText.length);
    let secondWord = Math.floor(Math.random() * secondText.length);
    let thirdWord = Math.floor(Math.random() * thirdText.length);


    function generateStoryParts() {
        return [
            firstText[Math.floor(Math.random() * firstText.length)], 
            secondText[Math.floor(Math.random() * secondText.length)],
            thirdText[Math.floor(Math.random() * thirdText.length)]
        ];
    }

    let storyParts = generateStoryParts();

    let clickCount = 0;

    document.body.onclick = function () {
        if (clickCount >= storyParts.length) {
            storyParts = generateStoryParts(); 
            clickCount = 0;
        }


        
        let newDiv = document.createElement("div");

document.onmousemove = function(e){
    newDiv.style.position = "fixed";
    newDiv.style.left = e.clientX + "px";
    newDiv.style.top = e.clientY + "px";
}

        newDiv.classList.add("text");

        newDiv.textContent = storyParts[clickCount];


        document.body.appendChild(newDiv);

        clickCount++;
    };


}

addText();

      


// const newDiv = document.createElement("div");
// newDiv.classList.add("text");
// document.body.appendChild(newDiv);

// let clickCount = 0;
// const storyParts = ["start", "second", "third", "fourth"]; 

// document.body.onclick = function(){

//     let storyParts = ["start", "second", "third", "fourth"];

//     if (clickCount >= storyParts.length) {
//         clickCount = 0;
//     }

//     newDiv.innerText = g.expand(`$${storyParts[clickCount]}`);
//     clickCount++;


// }

  


