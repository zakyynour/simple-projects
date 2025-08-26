
        // Game state
        const score = {
            wins: 0,
            losses: 0,
            draws: 0
        };
        
        // DOM elements
        const resultElement = document.getElementById('result');
        const winsElement = document.getElementById('wins');
        const lossesElement = document.getElementById('losses');
        const drawsElement = document.getElementById('draws');
        
      function generateComputerMove( ){
        let randomN = Math.random();
        if (randomN < 0.33 ){
         return   'rock'
        }else if (randomN > 0.33  && randomN < 0.66){
         return 'paper'
        }else {
          return   'scissors'
        }
      };

      function determineWinner(playerMove , computerMove ){
        if(playerMove == computerMove){
          return 'draw'
        }else  if (playerMove === 'rock' && computerMove === 'scissors' || 
          playerMove === 'scissors' && computerMove ==='paper'||
          playerMove === 'paper' && computerMove === 'rock'
        ){
          return 'u win' 
      }else{
        return 'u lose'
      }  

      };

      function updateScore(result){
        if(result == 'u win'){
          score.wins++
          winsElement.textContent = score.wins;
        }else if (result == 'u lose'){
          score.losses++
          lossesElement.textContent = score.losses;
        }else if(result =='draw'){
          score.draws++
          drawsElement.textContent = score.draws;
        }
      }

      function playGame(playerMove){
        let computerMove = generateComputerMove();
      let result = determineWinner(playerMove , computerMove);

      updateScore(result);
      displayResult(playerMove, computerMove, result)

      }

 function displayResult(playerMove, computerMove, result) {
            const moveEmojis = {
                rock: '✊',
                paper: '✋',
                scissors: '✌️'
            };
            
            let resultText = '';
            
            if (result === 'u win') {
                resultText = 'You win!';
            } else if (result === 'u lose') {
                resultText = 'Computer wins!';
            } else {
                resultText = "It's a draw!";
            }
            
            resultElement.innerHTML = `
                <h2>${resultText}</h2>
                <div class="moves">
                    <div class="move">
                        <div class="emoji">${moveEmojis[playerMove]}</div>
                        <div>Your move</div>
                        <div>${playerMove}</div>
                    </div>
                    <div class="move">
                        <div class="emoji">${moveEmojis[computerMove]}</div>
                        <div>Computer's move</div>
                        <div>${computerMove}</div>
                    </div>
                </div>
            `;
          }; 

      function resetGame( ){
        score.wins = 0;
            score.losses = 0;
            score.draws = 0;

                  winsElement.textContent = '0';
            lossesElement.textContent = '0';
            drawsElement.textContent = '0';
            
            resultElement.innerHTML = '<p>Game reset. Make your move to start playing!</p>'
      };
       