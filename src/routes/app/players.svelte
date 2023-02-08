<script>
	import NewPlayerModal from '../components/players/NewPlayerModal.svelte';
	import Tabs from '../components/Tabs.svelte';
	import PlayersTable from '../components/Table.svelte';

	$: showNewPlayerForm = false;
</script>

<svelte:head>
	<title>Players list</title>
</svelte:head>

<Tabs />
<section class="w-full flex items-center flex-col" >
	<PlayersTable >
		<div slot="btn-panel" class="inline-flex rounded-lg shadow-sm mt-6" role="group">
			<button on:click={() => showNewPlayerForm = true} type="button" class="group text-center font-medium focus:ring-4 focus:outline-none inline-flex items-center justify-center px-6 py-3.5 text-base text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-yellow-300 dark:focus:ring-yellow-900 first:rounded-l-lg last:rounded-r-lg">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mr-2 text-purple-500 dark:text-green-500"><path stroke-linecap="round" stroke-linejoin="round" d="M6 13.5V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 9.75V10.5" /></svg>

				Nowy gracz
			</button>
			<!-- <button on:click={() => } type="button" class="group text-center font-medium focus:ring-4 focus:outline-none inline-flex items-center justify-center px-6 py-3.5 text-base text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-yellow-300 dark:focus:ring-yellow-900 first:rounded-l-lg last:rounded-r-lg">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mr-2 text-purple-500 dark:text-green-500"><path stroke-linecap="round" stroke-linejoin="round" d="M6 13.5V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 9.75V10.5" /></svg>

				Wyniki 
			</button> -->
		</div>	
	</PlayersTable>
</section>

<NewPlayerModal bind:showNewPlayerForm />