<script>
	import {
		tournament,
		roundsHistory,
		roundNow,
		settingshowRound,
		rounds
	} from '../../../data/app/store';
	import {
		Table,
		TableBody,
		TableBodyCell,
		TableBodyRow,
		TableHead,
		TableHeadCell,
		Checkbox,
		TableSearch
	} from 'flowbite-svelte';

	let tournamentData;

	tournament.subscribe((value) => {
		tournamentData = value;
	});

	let roundCounter = 0;

	roundNow.subscribe((value) => {
		roundCounter = value;
	});

	function saveDataAfterRound(roundData) {
		roundData.forEach((pairData, index) => {
			updPlayersInTournamentAfterRound(
				pairData.playerWhite.name,
				pairData.playerBlack.name,
				pairData.result
			);
		});

		function updPlayersInTournamentAfterRound(
			roundWhitePlayerName,
			roundBlackPlayerName,
			resultRound
		) {
			$tournament.players.forEach((playerData, indexPlayerInTournament) => {
				if (playerData.name === roundWhitePlayerName) {
					$tournament.players.splice(
						indexPlayerInTournament,
						1,
						updWhitePlayerDataAfterRound(playerData, resultRound[0])
					);
				} else if (playerData.name === roundBlackPlayerName) {
					$tournament.players.splice(
						indexPlayerInTournament,
						1,
						updBlackPlayerDataAfterRound(playerData, resultRound[1])
					);
				}
			});
		}

		function updWhitePlayerDataAfterRound(playerData, resultRound) {
			playerData.whiteGames++;

			return recordRoundResult(playerData, resultRound);
		}

		function updBlackPlayerDataAfterRound(playerData, resultRound) {
			playerData.blackGames++;

			return recordRoundResult(playerData, resultRound);
		}

		function recordRoundResult(playerData, resultRound) {
			if (resultRound == 1) {
				playerData.wins++;
				playerData.score = playerData.score + playerData.wins;
			} else if (resultRound == 0) {
				playerData.losses++;
			} else if (resultRound == 5) {
				playerData.draws++;
				playerData.score = playerData.score + playerData.draws * 0.5;
			}

			// console.log(playerData)

			return playerData;
		}
	}

	function saveResult() {
		console.log('upd result');
	}

	function generateNextMatch() {
		let sortedPlayers = sortedPlayersAboutScore();
		let matches = createRound(sortedPlayers);
		saveDataAfterRound($roundsHistory[0]);
		// console.log(createRound(sortedPlayers));
		$roundNow++;

		saveRoundDataInStore(matches);
	}

	function saveRoundDataInStore(matches) {
		return roundsHistory.update((v) => {
			v.unshift(matches);
			return v;
		});
	}

	function generateFirstMatch() {
		$settingshowRound = true;
		$roundNow++;

		let sortedPlayers = sortedPlayersAboutRaiting();
		let matches = createRound(sortedPlayers);
		saveRoundDataInStore(matches);
		saveDataAfterRound($roundsHistory[0]);
	}

	function sortedPlayersAboutScore() {
		// console.log($tournament.players[0].score)
		// $tournament.players.forEach((playerData, indexPlayerInTournament) => {
		//      console.log(playerData.name)
		//             if (playerData.name === 'Renata') {
		//                 console.log('yes')

		//                 console.log($tournament.players[indexPlayerInTournament].score)
		//             }
		//         })

		let tempArr = $tournament.players.sort((a, b) => a.score - b.score);
		// const sortByScore = (a, b) => Number(b.score) -  Number(a.score);
		// let tempArr = $tournament.players.sort(sortByScore).slice();

		const half = Math.ceil(tempArr.length / 2);
		let group1 = tempArr.slice(0, half);
		let group2 = tempArr.slice(half);
		tempArr.concat(group1, group2);
		// console.log(group1);
		// console.log(typeof group2[0].score);

		return tempArr;
	}

	function sortedPlayersAboutRaiting() {
		let tempArr = tournamentData.players.sort((a, b) => b.rating - a.rating);
		return tempArr;
	}

	function createRound(sortedPlayers) {
		// let sortedPlayers = $tournament.players;
		let matches = [];
		let tempArr = sortedPlayers.slice();

		// tempArr.forEach((playerData, indexPlayerInTournament) => {
		//     console.log(playerData)
		// })

		let indexPlayer = 0;
		while (0 < tempArr.length) {
			indexPlayer++;
			matches.push({
				playerWhite: tempArr[0],
				playerBlack: tempArr[1],
				id: `${roundCounter.toString() + indexPlayer.toString()}`,
				result: ''
			});
			tempArr.shift();
			tempArr.shift();
		}
		// console.log(matches)

		return matches;
	}

	let resultOptions = [
		{ value: '10', id: 1, name: '1 : 0' },
		{ value: '01', id: 2, name: '0 : 1' },
		{ value: '55', id: 3, name: '1/2 : 1/2' }
	];
</script>

<div class="inline-flex mb-4 rounded-lg shadow-sm mt-6" role="group">
	{#if ($roundNow < $rounds) & $settingshowRound}
		<button
			on:click={generateNextMatch}
			type="button"
			class="group text-center font-medium focus:ring-4 focus:outline-none inline-flex items-center justify-center px-6 py-3.5 text-base text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-yellow-300  first:rounded-l-lg last:rounded-r-lg"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				stroke="currentColor"
				class="w-5 h-5 mr-2 text-purple-500 "
				><path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M6 13.5V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 9.75V10.5"
				/></svg
			>

			Next round
		</button>
	{/if}
	{#if $roundNow == $rounds}
		<h3 class="text-3xl font-bold text-light text-center w-full">Turniej jest zakończony</h3>
	{/if}
	{#if !$settingshowRound}
		<button
			on:click={generateFirstMatch}
			type="button"
			class="group text-center font-medium focus:ring-4 focus:outline-none inline-flex items-center justify-center px-6 py-3.5 text-base text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-yellow-300  first:rounded-l-lg last:rounded-r-lg"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				stroke="currentColor"
				class="w-5 h-5 mr-2 text-purple-500 "
				><path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M6 13.5V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 9.75V10.5"
				/></svg
			>

			Start
		</button>
	{/if}
</div>
{#if $settingshowRound}
	<div class="lg:w-5/12 pt-8  rounded-lg border-2 border-light ">
		{#each $roundsHistory as round, i}
			<h3 class="text-3xl font-bold text-light text-center w-full">
				Round {$roundsHistory.length - i}
			</h3>
			<table class="mb-8 w-full text-left text-sm text-gray-500 w-12/12">
				<thead class="bg-light text-xs uppercase text-gray-700  ">
					<tr>
						<th class="px-2 py-1">Imię </th>

						<th class="px-2 py-1">Nazwisko </th>

						<th class="px-2 py-1"> Wynik </th>

						<th class="px-2 py-1">Imię </th>

						<th class="px-2 py-1">Nazwisko </th>
					</tr>
				</thead>
				<TableBody class="divide-y">
					{#each round as match (match.id)}
						<tr class="bg-white   odd:bg-white even:bg-light  hover:bg-gray-100">
							<td class="px-2 py-1 whitespace-nowrap font-medium text-gray-900 ">
								{match.playerWhite.name}
							</td>

							<td class="px-2 py-1 whitespace-nowrap font-medium text-gray-900 ">
								{match.playerWhite.surname}
								{match.playerWhite.score}
							</td>

							<td class="px-2 py-1 flex h-20 whitespace-nowrap font-medium text-gray-900 ">
								<select
									on:click={() => saveResult()}
									bind:value={match.result}
									class="block w-full text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500      text-sm p-2.5 mt-2"
								>
									{#each resultOptions as option (option.id)}
										<option value={option.value}>
											{option.name}
										</option>
									{/each}
								</select>
							</td>

							<td class="px-2 py-1 whitespace-nowrap font-medium text-gray-900 ">
								{match.playerBlack.name}
							</td>

							<td class="px-2 py-1 whitespace-nowrap font-medium text-gray-900 ">
								{match.playerBlack.surname}
								{match.playerBlack.score}
							</td>
						</tr>
					{/each}
				</TableBody>
			</table>
		{/each}
	</div>
{/if}
