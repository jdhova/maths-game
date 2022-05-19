'use strict';


     let answer
     let randomNumber1 
     let randomNumber2 
     let randomNumber3
     let randomNumber4
     let score = 1;
     let highScore = 0;
    //  const score2 = score > 20 && score < 30 ? score > 40 && score < 50 ? 'Excellent' : 'Fantastic';

     let score2 = score > 3 && score < 6 ? score :''

     
     const scoreBoard = document.querySelector('.score');
     const highScoreBoard = document.querySelector('.highScore');
     const message1 =   document.querySelector('.message1')
     const message  = document.querySelector('.message');
     const restartGame = document.querySelector('.restartGame');
     const start = document.querySelector('.start');
     const restart = document.querySelector('.reset');
     const userInput = document.querySelector('input');
     const img = document.querySelector("img");

    var sound = {
        win: new Howl({
            src: ['sounds/win.mp3']
        }),
        win1: new Howl({
            src: ['sounds/win1.mp3']
        }),
        fail: new Howl({
            src: ['sounds/fail.mp3']
        }),
        gameOver: new Howl({
            src: ['sounds/game-over.mp3']
        })
        
    }
     

     const generateNum = () => {
                    
        let randomNumber1 = Math.floor(Math.random() * 10) + 1;
        let randomNumber2 = Math.floor(Math.random() * 10) + 1;
        answer = randomNumber1 + randomNumber2;
        message1.innerText = `${randomNumber1} ` + '+ ' + `${randomNumber2} = ` ; 
        userInput.value = '';  
    }
 

    const generateNum2 = () => {
                    
        let randomNumber1 = Math.floor(Math.random() * 10) + 1;
        let randomNumber2 = Math.floor(Math.random() * 10) + 1;
        answer = randomNumber1 > randomNumber2 ? randomNumber1 - randomNumber2 : randomNumber2 - randomNumber1;

        randomNumber1 > randomNumber2 ? message1.innerText = `${randomNumber1} ` + '- ' + `${randomNumber2} = ` : message1.innerText = `${randomNumber2} ` + '- ' + `${randomNumber1} = ` ;

        userInput.value = '';  


    }

    const generateNum3 = () => {                   
        let randomNumber1 = Math.floor(Math.random() * 10) + 1;
        let randomNumber2 = Math.floor(Math.random() * 10) + 1;
        answer = randomNumber1 * randomNumber2;
        message1.innerText = `${randomNumber1} ` + ' * ' + `${randomNumber2} = ` ; 
        userInput.value = '';  
        // console.log(randomNumber1, randomNumber2);
        // console.log(typeof randomNumber1, typeof randomNumber2);
    }


    const generateNum4 = () => {
                    
        let randomNumber1 = Math.floor(Math.random() * 10) + 1;
        let randomNumber2 = Math.floor(Math.random() * 10) + 1;
        answer = randomNumber1 > randomNumber2 ? randomNumber1 * randomNumber2 / randomNumber2 : randomNumber2 * randomNumber2/ randomNumber1;

        randomNumber1 > randomNumber2 ? message1.innerText = `${randomNumber1 * randomNumber2} ` + '/ ' + `${randomNumber2} = ` : message1.innerText = `${randomNumber2 * randomNumber1 } ` + '/ ' + `${randomNumber1} = ` ;
         userInput.value = '';  


    }




    const gameOver = () => {

        message.innerText = 'Game Over';
        message1.innerText = 'Game Over';
        restartGame.innerText = 'Play Again';
        start.style.display = 'none';
        restartGame.style.display = 'block';
        scoreBoard.innerText =  score;
        userInput.value = '';
        userInput.disabled = true;
        sound.gameOver.play()
        score = 0;

    }

    document.querySelector('.start').addEventListener('click',  function (){
        message.innerText = 'start...!';
        restartGame.style.display = 'none';
        scoreBoard.innerText = 1;
        score = 1
        userInput.disabled = false;
        generateNum();
    }
        
        );


    document.querySelector('.restartGame').addEventListener('click',  function (){
        message.innerText = 'start...!';
        message1.innerText = '';  
        start.style.display = 'block';
        restartGame.style.display = 'none';
        userInput.value = '';      
       
    }
        
        );

       
        function firstStageSound() {
            if(score > 1) {
                sound.win1.play()
            }
           
        }

        function secondStageSound() {
            
            if(score === 4 ) {
                sound.win.play()
            }
          
        }

        function successImage() {
        img.src = 'img/good.jpeg';
        clearTimeout(1000);
        }   

    //     setTimeout(() => {
    //         img.src = 'img/good.jpeg';
    //  //console.log("Delayed for 1 second.");
    //     }, "1000")

    
        // setTimeout(() => {
        //             img.src = 'img/good.jpeg';
        //         console.log("Delayed for 1 second.");
        //         }, "1000")
    
        // setTimeout(function successImage() {
        //     img.src = 'img/good.jpeg';
        //     // clearTimeout(1000);
        //     } , 1000)

      

        // function thirdStageSound() {
            
        //     if(score === 8 ) {
        //         // firstStage();
        //         sound.win.play()
        //     }
          
        // }
        


    document.querySelector('.check').addEventListener('click', function () {

        if (userInput.value === '') {
            // console.log('empty');
            message.innerText = 'Please enter a valid number!';
            //message1.innerText = 'Please enter a valid number!';
        } else if (parseInt(userInput.value) === answer && score < 3) 
            { 

                // less thzn 3 sound here
                // console.log('here now less than 3');

                message.innerText = 'Correct!';
                
                // img.src = 'img/good.jpeg';
                score += 1;
                // firstStage();
                // sound.win1.play();
                scoreBoard.innerText = score;
                //successImage();
                firstStageSound();
                generateNum();

                setTimeout(function successImage() {
                    img.src = 'img/good.jpeg';
                    console.log('heheheh')
                    // clearTimeout(1000);
                    } , 1000)
                    
                    // function myStopFunction() {
                    //     clearTimeout(myTimeout);
                    //   }
                    // window.setTimeout('cycle();',5000);

                // clearTimeout(function successImage() {
                //         img.src = 'img/good.jpeg';
                //         console.log('heheheh stop')
                //         // clearTimeout(1000);
                //         } , 3000)

                
               
        
                } else if (parseInt(userInput.value) !== answer && score > 0 && score < 3) {   
                score -= 1;
                scoreBoard.innerText = score;
                message.innerText = 'Wrong !';
                sound.fail.play();
                generateNum();
                


            } else if (parseInt(userInput.value) !== answer && score === 0)  
    
            {
                gameOver()    
        }  else if 
        (parseInt(userInput.value) === answer && score >= 3 && score <= 6)
        // more thzn 3 sound here

        {
            message.innerText = 'Correct!';
                score += 1;
                //secondStage();
                // sound.win.play();
                scoreBoard.innerText = score;
                firstStageSound();
                secondStageSound();
            
            generateNum2();
            console.log('activated substracton')
            
        } else if (parseInt(userInput.value) !== answer && score  >= 3 && score <= 6) {   
            score -= 1;
            scoreBoard.innerText = score;

            message.innerText = 'Wrong !';
            sound.fail.play();
            generateNum2();
            


        } else if (parseInt(userInput.value) === answer && score >= 6 && score <= 9)


        {
            message.innerText = 'Correct!';
                score += 1;
                scoreBoard.innerText = score;
            
            generateNum3();
            //more thzn 6 sound here
            console.log('multi substracton')
            
        } else if (parseInt(userInput.value) !== answer && score >= 6 && score <= 9) {   
            score -= 1;
            scoreBoard.innerText = score;

            message.innerText = 'Wrong !';
            sound.fail.play();
            generateNum3();
            


        } else if (parseInt(userInput.value) === answer && score >= 9 && score <= 12)


        {
            message.innerText = 'Correct!';
                score += 1;
                scoreBoard.innerText = score;
            
            generateNum4();
            console.log('multi substracton')
            
        } else if (parseInt(userInput.value) !== answer && score >= 9 && score <= 12) {   
            score -= 1;
            scoreBoard.innerText = score;

            message.innerText = 'Wrong !';
            sound.fail.play();
            generateNum4();

        } 
    
    
    });




    













    
  


