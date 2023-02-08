
// Класс для хранения информации о турнире
class Tournament {
	constructor(players) {
		this.players = players;
		this.ranks = {};
		
		// добавить награды, даты, и прочее
	}

	// get playersList() {
	// 	return this.players;
	// }

	// addPlayers(player) {
	// 	this.players.push(player);
	// }

	// getPlayer(name) {
	// 	return this.players.find((player) => player.name === name);
	// }

	playRound(pairs) {
		for (let pair of pairs) {
			let [playerWhiteName, playerBlackName] = pair;
			let result = pair.shift();
			var playerWhite = this.getPlayer(playerWhiteName),
				playerBlack = this.getPlayer(playerBlackName);
			if (result === '1') {
				this.playerWhite.win();
				printResults();
			} else if (result === '0') {
				playerBlack.win();
				this.printResults();
			} else if (result === '0.5') {
				playerWhite.draw();
				playerBlack.draw();
				this.printResults();
			}
		}
	}

	// printResults() {
	// 	console.log(this.players.sort((prev, next) => prev.score - next.score)[0]);

	// 	return this.players.sort((prev, next) => next.score - prev.score);
	// }
}


export default Tournament;