<script>
	import Tabs from '../components/Tabs.svelte';
	import RoundTable from '../components/rounds/RoundTable.svelte';
	// import Btns from '../components/rounds/Btns.svelte';
   	// let tournamentData;

	// tournament.subscribe(value => {
	// 	tournamentData = value.players;
	// });


		// 	for (let pair of pairs) {
		// 	let [playerWhiteName, playerBlackName] = pair;
		// 	let result = pair.shift();
		// 	var playerWhite = this.getPlayer(playerWhiteName),
		// 		playerBlack = this.getPlayer(playerBlackName);
		// 	if (result === '1') {
		// 		this.playerWhite.win();
		// 		printResults();
		// 	} else if (result === '0') {
		// 		playerBlack.win();
		// 		this.printResults();
		// 	} else if (result === '0.5') {
		// 		playerWhite.draw();
		// 		playerBlack.draw();
		// 		this.printResults();
		// 	}
		// }
	const data = [
		[
			['Gabriela', 'Renata' , '0.5', '0.5'],
			['Barbara', 'Cieślik' , '1', '0'],
		],
		[
			['Żukowski', 'Jacek' , '0.5', '0.5'],
			['Barbara', 'Janiszewska', '1', '0'],
		],
	];
</script>

<svelte:head>
	<title>Rounds</title>
</svelte:head>

<Tabs />

<section class="w-full flex items-center flex-col" >
	<!-- <Btns bind:showRound/> -->

	
		<RoundTable />

</section>