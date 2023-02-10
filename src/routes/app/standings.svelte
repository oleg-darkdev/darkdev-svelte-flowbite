<script>
	import Tabs from '../../components/app/Tabs.svelte';
	import PlayersTable from '../../components/app/Table.svelte';
	import InfoCard from '../../components/app/settings/InfoCard.svelte';
</script>

<svelte:head>
	<title>standings</title>
</svelte:head>

<Tabs />
<section class="w-full flex justify-center " >
	<!-- <div class="w-8/12 flex items-start flex-wrap  flex-row">
		<InfoCard />
		<PlayersTable />
	</div> -->
	<PlayersTable />
</section>