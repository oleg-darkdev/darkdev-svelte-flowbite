
	// Класс для хранения информации об участнике турнира
class Player {
  constructor(name) {
    this.name = name;
    this.score = 0;
    this.wins = 0;
    this.draws = 0;
    this.losses = 0;
    this.elo = 1400;
  }

  // Метод для обновления результата игры участника
  updateResult(result) {
    if (result === 'win') {
      this.score += 1;
      this.wins += 1;
    } else if (result === 'draw') {
      this.score += 0.5;
      this.draws += 1;
    } else if (result === 'loss') {
      this.losses += 1;
    }
  }
}

// Класс для хранения информации о турнире
class Tournament {
  constructor() {
    this.players = [];
    this.ranks = {};
    this.currentRound = 1;
  }

  // Метод для добавления участника в турнир
    addPlayer(name) {
    //   1 способ
    this.players.push(new Player(name));
        
    // 2 способ
    const player = new Player(name);
    this.players.push(player);
    this.ranks[player.name] = this.players.length;
  }

  // Метод для получения участника турнира по имени
  getPlayer(name) {
    return this.players.find(player => player.name === name);
  }

  // Метод для обновления результата игры между двумя участниками
  updateGameResult(player1, player2, result1, result2) {
    this.getPlayer(player1).updateResult(result1);
    this.getPlayer(player2).updateResult(result2);
    }
    

    // Метод для получения списка пар участников, которые должны играть друг с другом в текущем туре
    getPairings() {
        const pairings = [];
        for (let i = 0; i < this.players.length; i++) {
            for (let j = i + 1; j < this.players.length; j++) {
                pairings.push([])
            }
        }
    };

    // playRound(pairs) {
    // for (const pair of pairs) {
    //   const [player1, player2] = pair;
    //     if (player1.score > player
          
    //  2 method
    sortPlayers() {
        this.players.sort((p1, p2) => p2.score - p1.score);
    }
    
    printResults() {
    console.log('Results:');
    for (const player of this.players) {
      console.log(`${player.name}: ${player.score} points`);
    }
  }
}


// Добавляем участников в турнир
tournament.addPlayer('Alice);
    
    
const tournament = new Tournament();

tournament.addPlayer('Alice');
tournament.addPlayer('Bob');
tournament.addPlayer('Charlie');

tournament.playRound([['Alice', 'Bob'], ['win', 'loss']]);
tournament.playRound([['Charlie', 'Alice'], ['win', 'loss']]);
tournament.playRound([['Bob', 'Charlie'], ['win', 'loss']]);

tournament.sortPlayers();
tournament.printResults();	 
