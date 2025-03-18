

var firstText = [
    "I",
    "You",
    "She",
    "He",
    "They",
  ]
  
  var secondText = [
    "love",
    "loves",
    "luv",
    "cherish",
    "adore",
    "like",
    "likes",
    
  ]
  
  

  

  function addText() {
    // let firstWord = Math.floor(Math.random() * firstText.length);
    // let secondWord = Math.floor(Math.random() * secondText.length);

    const heart1 = document.querySelectorAll(".heartText1");
    const heart2 = document.querySelectorAll(".heartText2");
    const heart3 = document.querySelectorAll(".heartText3");
    const heart4 = document.querySelectorAll(".heartText4");
    const heart5 = document.querySelectorAll(".heartText5");
    const heart6 = document.querySelectorAll(".heartText6");
    const heart7 = document.querySelectorAll(".heartText7");
    const heart8 = document.querySelectorAll(".heartText8");
    
    let offset = 0;
    let offsetY = 0;
    
    heart1.forEach((heartPos1) => {
        
        offset += 10;
      heartPos1.style.transform = `translateX(${offset}px)`;

      let randomFirst = firstText[Math.floor(Math.random() * firstText.length)];
    //   let randomSecond = secondText[Math.floor(Math.random() * secondText.length)];
      heartPos1.textContent = randomFirst;
    
    });
    
    heart2.forEach((heartPos2) => {
        
        offset += -10;
      heartPos2.style.transform = `translateX(${offset}px)`;

    //   let randomFirst = firstText[Math.floor(Math.random() * firstText.length)];
      let randomSecond = secondText[Math.floor(Math.random() * secondText.length)];
      heartPos2.textContent = randomSecond;
    
    });
    
    heart3.forEach((heartPos3) => {
        
        offset += -5;
      heartPos3.style.transform = `translate(${offset}px, ${offset}px)`;

      let randomFirst = firstText[Math.floor(Math.random() * firstText.length)];
    //   let randomSecond = secondText[Math.floor(Math.random() * secondText.length)];
      heartPos3.textContent = randomFirst;
    
    });
    
    heart4.forEach((heartPos4) => {
        
        offset += 5;
        offsetY += -5;
      heartPos4.style.transform = `translate(${offset}px, ${offsetY}px)`;

    //   let randomFirst = firstText[Math.floor(Math.random() * firstText.length)];
      let randomSecond = secondText[Math.floor(Math.random() * secondText.length)];
      heartPos4.textContent = randomSecond;
    
    });

    heart5.forEach((heartPos5) => {

      let randomFirst = firstText[Math.floor(Math.random() * firstText.length)];
    //   let randomSecond = secondText[Math.floor(Math.random() * secondText.length)];
      heartPos5.textContent = randomFirst;
    
    });

    heart6.forEach((heartPos6) => {

        // let randomFirst = firstText[Math.floor(Math.random() * firstText.length)];
        let randomSecond = secondText[Math.floor(Math.random() * secondText.length)];
        heartPos6.textContent = randomSecond;
      
      });
    
    heart7.forEach((heartPos7) => {
        
        offset += 12;
      heartPos7.style.transform = `translateX(${offset}px)`;

    //   let randomFirst = firstText[Math.floor(Math.random() * firstText.length)];
      let randomSecond = secondText[Math.floor(Math.random() * secondText.length)];
      heartPos7.textContent = randomSecond;
    
    });
    
    
    heart8.forEach((heartPos8) => {
        
        offset += -12;
      heartPos8.style.transform = `translateX(${offset}px)`;

      let randomFirst = firstText[Math.floor(Math.random() * firstText.length)];
    //   let randomSecond = secondText[Math.floor(Math.random() * secondText.length)];
      heartPos8.textContent = randomFirst;
    
    });

  }

  addText();