<script>
	import {
		TableBody,
		TableBodyCell,
		TableBodyRow,
		TableHead,
		TableHeadCell,
		TableSearch
	} from 'flowbite-svelte';
	import { tournament } from '../../data/app/store';

	let tournamentData = '';

	tournament.subscribe((value) => {
		tournamentData = value;
	});

	function sortByScore() {
		return $tournament.players.sort((prev, next) => next.score - prev.score);
	}
	let searchPlayer = '';
	$: filteredItems = $tournament.players
		.filter((player) => player.name.toLowerCase().indexOf(searchPlayer.toLowerCase()) !== -1)
		.sort((prev, next) => next.score - prev.score);
</script>

<div class="mb-2">
	<slot name="btn-panel" />
</div>

<div class="lg:w-5/12 rounded-lg border-2 border-light ">
	<TableSearch
		placeholder="Search by name"
		striped={true}
		hoverable={true}
		bind:inputValue={searchPlayer}
	>
		<thead class="bg-light text-xs uppercase text-gray-700  ">
			<tr>
				<th class="px-6 py-3">Miejsce / P </th><th class="px-6 py-3">Imię </th>
				<th class="px-6 py-3">Nazwisko </th>
				<th class="px-6 py-3">Raiting </th>
			</tr>
		</thead>

		<TableBody class="divide-y">
			{#each filteredItems as item, i}
				<tr class="bg-white   odd:bg-white even:bg-light  hover:bg-gray-100">
					<td class="px-6 py-4 whitespace-nowrap font-medium text-gray-900 "
						>{i + 1} | {item.wins + item.draws * 0.5}
					</td>
					<td class="px-6 py-4 whitespace-nowrap font-medium text-gray-900 ">{item.name} </td>
					<td class="px-6 py-4 whitespace-nowrap font-medium text-gray-900 ">{item.surname} </td>
					<td class="px-6 py-4 whitespace-nowrap font-medium text-gray-900 ">{item.elo} </td>
				</tr>
			{/each}
		</TableBody>
	</TableSearch>
</div>
