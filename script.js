// Scroll Bottom
document.querySelector("#fakeBody").scrollTo({top: window.innerHeight*2})

// Shake Function
let shakeTimes = 0;
function eruption() {
  if (shakeTimes>=0&&shakeTimes<5){shake(); shakeTimes += 1;}
  function shake() {
    for (let i=0, k=50; i<4; i++){
      let fakeStyle = document.querySelector("#fakeBody").style;
      setTimeout(() => {fakeStyle.transform = "translate(2vw, 0vh)";
        setTimeout(() => {fakeStyle.transform = "translate(-20vw, 1vh)";
          setTimeout(() => {fakeStyle.transform = "translate(15vw, 0vh)";
            setTimeout(() => {fakeStyle.transform = "translate(-8vw, 1vh)";
              setTimeout(() => {fakeStyle.transform = "translate(0vw, 0vh)";        
      }, k*i)}, k*i)}, k*i)}, k*i)}, k*i)
    }
  
  }

  // Eruption Animation
  setTimeout(() => {
    let shM = document.querySelector(".shM").style, shL = document.querySelector(".shL").style, shR = document.querySelector(".shR").style;
    let shell = document.querySelector("#shell").style, fakeM = document.querySelector("#fakeM").style, volBtn = document.querySelector("#volBtn").style;
    shell.backgroundColor = "rgba(255,255,255,0.3)";
    setTimeout(() => {
      if (shakeTimes==1){shM.height = "40vh"; setTimeout(() => {shL.height = "24vw"; shL.transform = "rotate(124deg) translate(19vw, 0vw)"}, 1000)}
      else if (shakeTimes==2){shM.height = "70vh"; setTimeout(() => {shR.height = "19vw"; shR.transform = "rotate(70deg) translate(8vw, -5vw)"}, 1000)}
      else if (shakeTimes==3){
        shM.height = "100vh";
        setTimeout(() => {for (let i=0;i<3;i++){setTimeout(() => {shake()}, 800*i)}}, 1000)
        setTimeout(() => {
          shell.backgroundColor = "rgba(255,255,255,0)"; setTimeout(() => {shell.display = "none"}, 800)
          document.querySelector("#fakeBody").style.overflowY = "hidden";
          shL.transition = "height 100ms"; shL.height = "0vw"; 
          shR.transition = "height 100ms"; shR.height = "0vw";
          fakeM.display = "block"; fakeM.height = "15vh"; 
          shM.display = "none"; 
          setTimeout(() => {
            document.querySelector("#volcano").style.transform = "translate(0vw, 100vh)";
            fakeM.bottom = "-45vh"; fakeM.height = "85vh";
            volBtn.transform = "translate(0vw, 42vh)";
            setTimeout(() => {
              volBtn.backgroundColor = "rgb(235, 113, 61)"; volBtn.border = "1vw solid rgb(25, 25, 25)";
              document.querySelector("#volBtn").addEventListener("mouseover", () => {volBtn.backgroundColor = "white";})
            }, 2500);
          }, 1000);
        }, 2000) 
      }  
      else if (shakeTimes==4){
        volBtn.height = "200vw"; volBtn.width = "200vw";
        volBtn.transform = "translate(0vw, -50vw)";
        setTimeout(() => {document.querySelector("#mainBG").style.display = "flex"; igPet()}, 800)
      }
      else {shakeTimes = -1000;}
    }, 800)
  }, 1000)
}

// Sliding Main Backgrounds
function igPet() {
  setTimeout(() => {
    document.querySelector("#fakeBody").display = "none";
    document.querySelector("#defBG").style.transform = "translate(0vw, 0vh)";
    document.querySelector("#defBG").style.overflowY = "visible";
  }, 2800) 
}

function classPro () {
  document.querySelector("#exhBG").style.transform = "translate(0vw, 0vh)";
  document.querySelector("#exhBG").style.overflowY = "visible";
  setTimeout(() => {document.querySelector("#mainBG").scrollTo({top: 0});},500)
  setTimeout(() => {document.querySelector("#defBG").style.display = "none";}, 1000)
}

function myPrax () {  
  document.querySelector("#benBG").style.overflowY = "visible";
  document.querySelector("#exhBG").style.transform = "translate(-100vw, 0vh)";
  setTimeout(() => {
    document.querySelector("#mainBG").scrollTo({top: 0});
    document.querySelector("#benBG").style.display = "flex";
    document.querySelector("#benBG").style.transform = "translate(0vw, 0vh)"
    setTimeout(() => {
      document.querySelector("#benBG").style.transform = "translate(0vw, 0vh)";
      document.querySelector("#exhBG").style.display = "none";
    }, 800)
  },1000)
}

function quoteBtn () {
  document.querySelector("#benBG").style.transform = "translate(0vw, -600vh)";
  setTimeout(() => {
    document.querySelector("#mainBG").scrollTo({top: 0});
    setTimeout(() => {
      document.querySelector("#quoteBG").style.transform = "translate(0vw, 0vh)";
      document.querySelector("#mainBG").style.overflow = "hidden";
      setTimeout(() => {
        let quoteTXT = "This planet is essentially a body of crystallized and uncrystallized igneous material. The final philosophy of earth history will therefore be founded on igneous-rock geology. — Reginald Aldworth Daly", endTXT = "[END]"
  
        // Quote Typewriter
        for (let m = 0; m < quoteTXT.length; m++) {
          setTimeout(() => {document.querySelector("#quote").innerHTML += quoteTXT[m];}, m * 40); 
        }
        setTimeout(() => {
          for (let m = 0; m < endTXT.length; m++) {
            setTimeout(() => {document.querySelector("#end").innerHTML += endTXT[m];}, m * 500); 
          }
        }, 8500)
      }, 1000)
    }, 800)
  }, 800)
}