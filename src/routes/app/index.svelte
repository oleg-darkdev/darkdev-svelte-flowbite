<script>
	// import '';
	import Tabs from '../../components/app/Tabs.svelte';
	import { tournament } from '../../data/app/store';
	import PlayerModel from '../../data/app/PlayerModel';
	import TournamentModel from '../../data/app/TournamentModel';
	import InfoCard from '../../components/app/settings/InfoCard.svelte';
	import PlayersTable from '../../components/app/Table.svelte';
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
</script>

<Tabs />
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
