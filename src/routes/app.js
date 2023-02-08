import TournamentOrganizer from 'tournament-organizer';

const Manager = new TournamentOrganizer();

let yellowElephant = Manager.createTournament('Tourn 1', {
	stageOne: {
		format: 'swiss',
		consolation: true,
		rounds: 0
	},
	sorting: 'ascending'
});

yellowElephant.createPlayer('taras', '1');
yellowElephant.createPlayer('volat', '2');
yellowElephant.createPlayer('brest', '3');
yellowElephant.createPlayer('ibragim', '4');
yellowElephant.createPlayer('piotr', '5');
yellowElephant.createPlayer('vasil', '6');
yellowElephant.createPlayer('martin', '7');
yellowElephant.createPlayer('gregor', '8');

yellowElephant.start();

let playersList = yellowElephant.players,
	matches = yellowElephant.matches;

// 1 round
yellowElephant.enterResult(matches[0].id, 0, 1, 0);
yellowElephant.enterResult(matches[1].id, 1, 0, 0);
yellowElephant.enterResult(matches[2].id, 0, 1, 0);
yellowElephant.enterResult(matches[3].id, 0, 1, 0);

// 2 round
yellowElephant.next();
yellowElephant.enterResult(matches[0].id, 0, 1, 0);
yellowElephant.enterResult(matches[1].id, 1, 0, 0);
yellowElephant.enterResult(matches[2].id, 0, 1, 0);
yellowElephant.enterResult(matches[3].id, 0, 1, 0);

console.log(yellowElephant);

// end():

// let tournament = ;

// yellowElephant.enterResult("TEK30D6ziu45");
let text = 'dsfsdfsd';

export function load() {
	return { text };
}
