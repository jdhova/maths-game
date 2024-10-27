'use strict';

// Global Variables
     let answer
     let randomNumber1 
     let randomNumber2 
     let randomNumber3
     let randomNumber4
     let score = 1;
     let highScore = 0;
    //  const score2 = score > 20 && score < 30 ? score > 40 && score < 50 ? 'Excellent' : 'Fantastic';

     let score2 = score > 3 && score < 20 ? score :''

     
     const scoreBoard = document.querySelector('.score');
     const highScoreBoard = document.querySelector('.highScore');
     const message1 =   document.querySelector('.message1')
     const message  = document.querySelector('.message');
     const restartGame = document.querySelector('.restartGame');
     const start = document.querySelector('.start');
    //  const restart = document.querySelector('.reset');
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
                    
        let randomNumber1 = Math.floor(Math.random() * 10) + 10;
        let randomNumber2 = Math.floor(Math.random() * 10) + 1;
        answer = randomNumber1 + randomNumber2;
        message1.innerText = `${randomNumber1} ` + '+ ' + `${randomNumber2} = ` ; 
        userInput.value = '';  
    }
        // double digits addition

    const generateNum4 = () => {
                    
        let randomNumber1 = Math.floor(Math.random() * 10) + 10;
        let randomNumber2 = Math.floor(Math.random() * 10) + 10;
        answer = randomNumber1 + randomNumber2;
        message1.innerText = `${randomNumber1} ` + '+ ' + `${randomNumber2} = ` ; 
        userInput.value = '';  
    }

    
        // double digits Subtraction

    const generateNum5 = () => {
                    
        let randomNumber1 = Math.floor(Math.random() * 10) + 10;
        let randomNumber2 = Math.floor(Math.random() * 10) + 10;
        answer = randomNumber1 > randomNumber2 ? randomNumber1 - randomNumber2 : randomNumber2 - randomNumber1;

        randomNumber1 > randomNumber2 ? message1.innerText = `${randomNumber1} ` + '- ' + `${randomNumber2} = ` : message1.innerText = `${randomNumber2} ` + '- ' + `${randomNumber1} = ` ;

        userInput.value = '';  


    }

      // double digits Subtraction Borrowing 

    const generateNum55 = () => {
                    
        let randomNumber1 = Math.floor(Math.random() * 10) + 20;
        let randomNumber2 = Math.floor(Math.random() * 10) + 10;
        answer = randomNumber1 > randomNumber2 ? randomNumber1 - randomNumber2 : randomNumber2 - randomNumber1;

        randomNumber1 > randomNumber2 ? message1.innerText = `${randomNumber1} ` + '- ' + `${randomNumber2} = ` : message1.innerText = `${randomNumber2} ` + '- ' + `${randomNumber1} = ` ;

        userInput.value = '';  


    }

// Triple Digit Addision
    const generateNumTripleDigitAddision = () => {
                    
        let randomNumber1 = Math.floor(Math.random() * 10) + 200;
        let randomNumber2 = Math.floor(Math.random() * 10) + 100;
        answer = randomNumber1 + randomNumber2;
        message1.innerText = `${randomNumber1} ` + '+ ' + `${randomNumber2} = ` ; 
        userInput.value = '';  
    }



// Triple Digit Subtraction
    const generateNumTripleDigitSubtraction = () => {
                    
        let randomNumber1 = Math.floor(Math.random() * 10) + 200;
        let randomNumber2 = Math.floor(Math.random() * 10) + 100;
        answer = randomNumber1 > randomNumber2 ? randomNumber1 - randomNumber2 : randomNumber2 - randomNumber1;

        randomNumber1 > randomNumber2 ? message1.innerText = `${randomNumber1} ` + '- ' + `${randomNumber2} = ` : message1.innerText = `${randomNumber2} ` + '- ' + `${randomNumber1} = ` ;

        userInput.value = '';  


    }

// Single Digit Multiplication
    const generateNum6 = () => {                   
        let randomNumber1 = Math.floor(Math.random() * 10) + 1;
        let randomNumber2 = Math.floor(Math.random() * 10) + 1;
        answer = randomNumber1 * randomNumber2;
        message1.innerText = `${randomNumber1} ` + ' * ' + `${randomNumber2} = ` ; 
        userInput.value = '';  
       
    }

// Single Digits Devision Yet to be implemented in If else statment
    const generateNum7 = () => {
                    
        let randomNumber1 = Math.floor(Math.random() * 10) + 1;
        let randomNumber2 = Math.floor(Math.random() * 10) + 1;

        answer = randomNumber1 > randomNumber2 ? randomNumber1 * randomNumber2 / randomNumber2 : randomNumber2 * randomNumber1/ randomNumber1;

        randomNumber1 > randomNumber2 ? message1.innerText = `${randomNumber1 * randomNumber2} ` + '/ ' + `${randomNumber2} = ` : message1.innerText = `${randomNumber2 * randomNumber1 } ` + '/ ' + `${randomNumber1} = ` ;
         userInput.value = '';  


    }




    const gameOver = () => {

        message.innerText = 'Game Over';
        message1.innerText = 'Game Over';
        restartGame.innerText = 'Play Again';
        start.style.display = 'none';
        restartGame.style.display = 'none';
        scoreBoard.innerText =  score;
        userInput.value = '';
        userInput.disabled = true;
        sound.gameOver.play()
        score = 0;
        setTimeout(dead, 1000);
        //setTimeout(hideImage, 8000);

    }

    //   document.querySelector('.restartGame').addEventListener('click',  function (){
    //     message.innerText = 'start...!';
    //     restartGame.style.display = 'none';
    //     start.style.display = 'block';
    //     scoreBoard.innerText = 1;
    //     score = 1
    //     userInput.disabled = false;
    //     generateNum();
       
    // }
        
    //     );

    // document.querySelector('.start').addEventListener('click',  function (){
    //     message.innerText = 'start...!';
    //     restartGame.style.display = 'none';
    //     scoreBoard.innerText = 1;
    //     score = 1
    //     userInput.disabled = false;
    //     generateNum();
    // }
        
    //     );


    start.addEventListener('click',  function (){
        message.innerText = 'Start...!';
        restartGame.style.display = 'block';
        start.style.display = 'none';
        scoreBoard.innerText = 1;
        score = 1
        userInput.disabled = false;
        generateNum();
        // generateNumTripleDigitAddision() 
        //generateNumTripleDigitSubtraction();
       
    }
        
        );



    document.querySelector('.restartGame').addEventListener('click',  function (){
        message.innerText = 'Press Start button...!';
        message1.innerText = '';  
        start.style.display = 'block';
        restartGame.style.display = 'none';
        userInput.value = '';  
        scoreBoard.innerText = 1;
        score = 1
        userInput.disabled = true;
       generateNum();  
       // generateNumTripleDigitAddision() 
       //generateNumTripleDigitSubtraction(); 
      
       
    }
        
        );

    //    Sound Functions
        function firstStageSound() {
            if(score > 1) {
                sound.win1.play()
            }
           
        }

        function secondStageSound() {
            
            if(score >= 20 && score <= 21 ) {
                sound.win.play()
                
            }
          
        }

        function thirdStageSound() {
            
            if(score >= 50 && score <= 51 ) {
                sound.win.play()
                
            }

            // Third and fouth game sound pending
          
        }

        // Emogi Functions
        function successImage() {
            img.src = 'img/good.jpeg';
        
        }
        function successImage2() {
            img.src = 'img/awersome.gif';
            //img.src = 'img/awe.jpeg';
            
            }
        function cry() {
            img.src = 'img/cry.jpeg';
            
                }
        function mag() {
            img.src = 'img/best2.jpeg';
                    
                }
        function dead() {
            img.src = 'img/dead.jpeg';
        }      

        function best() {
            img.src = 'img/best.jpeg';
                        
                }
        function hideImage() {
            img.src = '';
            
            }

        // setTimeout(function successImage() {
        //     img.src = 'img/good.jpeg';
        //     console.log('heheheh')
        //     // clearTimeout(1000);
        //     } , 1000)

  


    document.querySelector('.check').addEventListener('click', function () {

        if (userInput.value === '') {
       
            message.innerText = 'Please enter a valid number!';
         
        } else if (parseInt(userInput.value) === answer && score < 5) 
            { 

              

                message.innerText = 'Correct!';
                score += 1;
                scoreBoard.innerText = score;
                firstStageSound();
                 generateNum();
                // generateNumTripleDigitAddision()
                //generateNumTripleDigitSubtraction();
                setTimeout(successImage, 1000);
                setTimeout(hideImage, 2000);
               
        
                } else if (parseInt(userInput.value) !== answer && score > 0 && score < 5) {       
                score -= 1;
                scoreBoard.innerText = score;
                message.innerText = 'Wrong !';
                sound.fail.play();
                generateNum();
                // generateNumTripleDigitAddision()
                //generateNumTripleDigitSubtraction();
                setTimeout(cry, 1000);
                setTimeout(hideImage, 2000);
                


            } else if (parseInt(userInput.value) !== answer && score === 0)  
    
            {
                gameOver()    
        }  else if 
        (parseInt(userInput.value) === answer && score >= 5 && score <= 13)

        {
            message.innerText = 'Correct!';
                score += 1;
                scoreBoard.innerText = score;
                firstStageSound();
                secondStageSound();
                 generateNum2();
                setTimeout(successImage2, 1000);
                setTimeout(hideImage, 2000);
            console.log('activated substracton')
            
        } else if (parseInt(userInput.value) !== answer && score  >= 5 && score <= 13) {   
            score -= 1;
            scoreBoard.innerText = score;

            message.innerText = 'Wrong !';
            sound.fail.play();
            generateNum2();
            setTimeout(cry, 1000);
            setTimeout(hideImage, 2000);
            


        } else if (parseInt(userInput.value) === answer && score >= 13 && score <= 15)


        {
            message.innerText = 'Correct!';
                score += 1;
                scoreBoard.innerText = score;
                firstStageSound();
                thirdStageSound();
                generateNum3();
             setTimeout(mag, 1000);
            setTimeout(hideImage, 2000);
            

            
        } else if (parseInt(userInput.value) !== answer && score >= 13 && score <= 15) {   
            score -= 1;
            scoreBoard.innerText = score;
            message.innerText = 'Wrong !';
            sound.fail.play();
            generateNum3();
            setTimeout(cry, 1000);
            setTimeout(hideImage, 2000);
            


        } else if (parseInt(userInput.value) === answer && score >= 15 && score <= 20)


        {
            message.innerText = 'Correct!';
                score += 1;
                scoreBoard.innerText = score;
                firstStageSound();
                generateNum4();
                setTimeout(best, 1000);
                setTimeout(hideImage, 2000);
           
            
        } else if (parseInt(userInput.value) !== answer && score >= 15 && score <= 20) {   
            score -= 1;
            scoreBoard.innerText = score;

            message.innerText = 'Wrong !';
            sound.fail.play();
            generateNum4();
            setTimeout(cry, 1000);
            setTimeout(hideImage, 2000);

        } else if (parseInt(userInput.value) === answer && score >= 20 && score <= 23)


            {
                message.innerText = 'Correct!';
                    score += 1;
                    scoreBoard.innerText = score;
                    firstStageSound();
                    generateNum5();
                    setTimeout(best, 1000);
                    setTimeout(hideImage, 2000);
               
                
            } else if (parseInt(userInput.value) !== answer && score >= 20 && score <= 23) {   
                score -= 1;
                scoreBoard.innerText = score;
    
                message.innerText = 'Wrong !';
                sound.fail.play();
                generateNum5();
                setTimeout(cry, 1000);
                setTimeout(hideImage, 2000);
    
            } else if (parseInt(userInput.value) === answer && score >= 23 && score <= 50)


                {
                    message.innerText = 'Correct!';
                        score += 1;
                        scoreBoard.innerText = score;
                        firstStageSound();
                        generateNum55();
                        setTimeout(best, 1000);
                        setTimeout(hideImage, 2000);
                   
                    
                } else if (parseInt(userInput.value) !== answer && score >= 23 && score <= 50) {   
                    score -= 1;
                    scoreBoard.innerText = score;
        
                    message.innerText = 'Wrong !';
                    sound.fail.play();
                    generateNum55();
                    setTimeout(cry, 1000);
                    setTimeout(hideImage, 2000);
        
                } else if (parseInt(userInput.value) === answer && score >= 50 && score <= 75)


                    {
                        message.innerText = 'Correct!';
                            score += 1;
                            scoreBoard.innerText = score;
                            firstStageSound();
                            generateNumTripleDigitAddision();
                            setTimeout(best, 1000);
                            setTimeout(hideImage, 2000);
                       
                        
                    } else if (parseInt(userInput.value) !== answer && score >= 50 && score <= 75) {   
                        score -= 1;
                        scoreBoard.innerText = score;
            
                        message.innerText = 'Wrong !';
                        sound.fail.play();
                        generateNumTripleDigitAddision();
                        setTimeout(cry, 1000);
                        setTimeout(hideImage, 2000);
            
                    } else if (parseInt(userInput.value) === answer && score >= 75 && score <= 100)


                        {
                            message.innerText = 'Correct!';
                                score += 1;
                                scoreBoard.innerText = score;
                                firstStageSound();
                                generateNumTripleDigitSubtraction();
                                setTimeout(best, 1000);
                                setTimeout(hideImage, 2000);
                           
                            
                        } else if (parseInt(userInput.value) !== answer && score >= 75 && score <= 100) {   
                            score -= 1;
                            scoreBoard.innerText = score;
                
                            message.innerText = 'Wrong !';
                            sound.fail.play();
                            generateNumTripleDigitSubtraction();
                            setTimeout(cry, 1000);
                            setTimeout(hideImage, 2000);
                
                        } else if (parseInt(userInput.value) === answer && score >= 100 && score <= 1130)


                            {
                                message.innerText = 'Correct!';
                                    score += 1;
                                    scoreBoard.innerText = score;
                                    firstStageSound();
                                    generateNum6();
                                    setTimeout(best, 1000);
                                    setTimeout(hideImage, 2000);
                               
                                
                            } else if (parseInt(userInput.value) !== answer && score >= 100 && score <= 1130) {   
                                score -= 1;
                                scoreBoard.innerText = score;
                    
                                message.innerText = 'Wrong !';
                                sound.fail.play();
                                generateNum6();
                                setTimeout(cry, 1000);
                                setTimeout(hideImage, 2000);
                    
                            } 

        
    
    
    });




    













    
  

