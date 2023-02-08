

class Player {
	constructor(name, surname, elo, email) {
		this.name = name;
		this.elo = elo;
		this.surname = surname;
		this.score = 0;
		this.wins = 0;
		this.draws = 0;
		this.losses = 0;
		this.email = email;
		this.whiteGames = 0;
		this.blackGames = 0;
	}

	win() {
		return (this.score += 1);
	}
	draw() {
		return (this.score += 0.5);
	}

	// Метод для обновления результата игры участника
	// updateResult(result) {
	// 	if (result) {
	// 		this.score += 1;
	// 		this.wins += 1;
	// 	} else if (!result) {
	// 		this.losses += 1;
	// 	} else if (result === '0.5') {
	// 		this.score += 0.5;
	// 		this.draws += 1;
	// 	}
	// }
}


export default Player;
