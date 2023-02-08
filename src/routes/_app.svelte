<script>
	import '../app.css';
	// import Tabs from '../components/app/Tabs.svelte';
	import InfoCard from '../components/app/settings/InfoCard.svelte';
	import PlayersTable from '../components/app/Table.svelte';
	import { tournament } from '../data/app/store';
	import PlayerModel from '../data/app/PlayerModel';
	import TournamentModel from '../data/app/TournamentModel';

	let tournamentData;

	tournament.subscribe((value) => {
		tournamentData = value;
	});

	async function getDataForTournament() {
		let endpoint_url =
			'https://sheets.googleapis.com/v4/spreadsheets/1_mv_FaONbPfjj_i9ODX3ATRk17mT3A4aJJXASGD2lms/?key=AIzaSyCzpHVijt3vbAxYAOGtuKGVZWAwOg_fPwA&includeGridData=true';

		const res = await fetch(endpoint_url);
		const text = await res.json();

		if (res.ok) {
			return Object.values(text.sheets[0].data[0].rowData);
		} else {
			throw new Error(text);
		}
	}

	async function createTournament() {
		let allData = await getDataForTournament(),
			playersList = createPlayersList(allData);

		tournament.set(new TournamentModel(playersList));

		if (tournament) {
			// console.log(tournament);
			return tournamentData;
		} else {
			throw new Error(text);
		}
	}

	function createPlayersList(players) {
		let tempArray = [];
		Object.values(players).forEach((element) => {
			tempArray.push(
				new PlayerModel(
					element.values[0].userEnteredValue.stringValue,
					element.values[1].userEnteredValue.stringValue,
					element.values[2].userEnteredValue.numberValue,
					element.values[3].userEnteredValue.stringValue
				)
			);
		});

		tempArray.shift();
		return tempArray;
	}

	$: tournamentData = createTournament();

    // second version
import TournamentOrganizer from "tournament-organizer";

const Manager = new TournamentOrganizer();

let yellowElephant = Manager.createTournament("Tourn 1", {
  stageOne: {
    format: "swiss",
    consolation: true,
    rounds: 0,
  },
  sorting: "ascending",
});

yellowElephant.createPlayer("taras", '1');
yellowElephant.createPlayer("volat", '2');
yellowElephant.createPlayer("brest", '3');
yellowElephant.createPlayer("ibragim", "4");
yellowElephant.createPlayer("piotr", "5");
yellowElephant.createPlayer("vasil", "6");
yellowElephant.createPlayer("martin", "7");
yellowElephant.createPlayer("gregor", "8");

yellowElephant.start();

let playersList = yellowElephant.players,
  matches = yellowElephant.matches;

let numbersMatches = playersList.length / 2; 
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

// console.log(yellowElephant);


  // data.yellowElephant.start();

// let playersList = data.yellowElephant.players;
// let matches = data.yellowElephant.matches;

// console.log(matches);
// data.yellowElephant.enterResult('TEK30D6ziu45')
// console.log(data.text);
// console.log(data);





</script>


{#await tournamentData then tournament}
	<section class="w-full flex items-center flex-col">
		<InfoCard />
	</section>

	<section class="w-full flex items-center flex-col">
		<h3 class="text-3xl font-bold text-light text-center w-full">Lista uczestników turnieju</h3>
		<PlayersTable />
	</section>
	<!-- поиск по участникам -->
	<!-- {tournament.getPlayer('Taras').surname} -->

	<!--


<button on:click={tournament.printResults()}>
	Results
</button>

<button on:click={console.log(tournament.playersList)}>
	players List
</button>

<button on:click={tournament.playRound([['Taras', 'Pumba'], ['1', '0']])}>
	Results 1
</button>
<button on:click={tournament.playRound([['Taras', 'Pumba'], ['0', '1']])}>
	Results 0
</button>
<button on:click={tournament.playRound([['Taras', 'Pumba'], ['0.5', '0.5']])}>
	Results 0.5
</button> -->

	<div class="flex flex-col pt-50">
		<!-- {firstPlayer} -->

		<!-- Taras: {tournament.getPlayer('Taras').score}
Pumba: {tournament.getPlayer('Pumba').score}  -->
	</div>
{/await}

<h2>Second version</h2>
<!-- {#each matches as match (match.id)}
    <div class="flex flex-row">
        <span>{playersList[parseInt(match.player1.id)].name}</span>
    </div>
{/each} -->

<!-- <span>{data.text}</span> -->


