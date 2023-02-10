<script>
	import Tabs from '../../components/app/Tabs.svelte';
	import Form from '../../components/app/settings/Form.svelte';
	import InfoCard from '../../components/app/settings/InfoCard.svelte';
</script>

<svelte:head>
	<title>Tempate</title>
</svelte:head>

<Tabs />
<section class="mb-8 w-full flex justify-center">
	<div class="flex flex-col flex-wrap w-6/12 items-center">
		<InfoCard />
		<Form />
		
		
	</div>
</section>



