<script>
	import timelineMyTournaments from '../../data/timelineMyTournaments';

	let shortTimelineMyTournaments = timelineMyTournaments.slice(10, 12);
	let tournamentList = shortTimelineMyTournaments;
</script>

{#each tournamentList as tournament (tournament.id)}
	<div class="timeline">
		<div
			data-aos="fade-{tournament.position}"
			data-aos-delay="100"
			data-aos-duration="800"
			data-aos-once="false"
			data-aos-mirror="true"
			class="bg-white card text-gray-500 rounded-lg border border-gray-200 shadow-md flex flex-col"
		>
			{#if tournament.showCert}
				<img class="rounded-t-lg" src={tournament.img} alt={tournament.title} />
			{/if}
			<div class="p-4 sm:p-6">
				<h3 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
					{tournament.title}
				</h3>
				<p class="mb-3 font-normal text-gray-700 leading-tight">
					{tournament.description}
				</p>
				<button
					type="button"
					on:click={() => (tournament.showCert = !tournament.showCert)}
					class="text-center w-full font-medium focus:ring-4 focus:outline-none inline-flex items-center justify-center px-5 py-2.5 text-sm text-white bg-dark hover:bg-gray-600 focus:bg-gray-300 rounded-lg"
					>Pokaż dyplom
				</button>
			</div>
		</div>
	</div>
{/each}
{#if tournamentList.length < 4}
	<button
		type="button"
		on:click={() => (tournamentList = timelineMyTournaments)}
		class="bg-dark rounded-lg border border-gray-200 font-medium focus:ring-4 focus:outline-none inline-flex items-center justify-center shadow-md flex max-w-2xl  flex-col text-white hover:bg-gray-700 focus:bg-gray-300 rounded-lg p-4 sm:p-6"
	>
		<h5 class="mb-2 text-2xl font-bold tracking-tight text-white">Wyświetl pełną listę</h5>
	</button>
{/if}

<style>
	@media (max-width: 720px) {
		.relative-left {
			position: relative;
			left: 0;
		}

		.relative-right {
			position: relative;
			right: 0;
		}

		.timeline {
			width: 300px;
			margin: auto;
		}
		.card {
			width: 280px;
		}
		.timeline:nth-child(even) {
			border-left: 2px dashed;
			border-top-left-radius: 30px;
			border-bottom-left-radius: 30px;
			margin-right: 5px;
			padding-right: 0;
		}

		.timeline:nth-child(odd) {
			border-right: 2px dashed;
			border-top-right-radius: 30px;
			border-bottom-right-radius: 30px;
			margin-left: 5px;
			padding-left: 0;
		}
	}

	@media (min-width: 720px) {
		.timeline {
			width: 320px;
			margin: auto;
		}

		.relative-left {
			position: relative;
			left: 50%;
		}

		.relative-right {
			position: relative;
			right: 50%;
		}
		.card {
			width: 320px;
		}
		.timeline:nth-child(even) {
			border-left: 2px dashed;
			border-top-left-radius: 30px;
			border-bottom-left-radius: 30px;
			margin-right: 30px;
			padding-right: 0;
		}

		.timeline:nth-child(odd) {
			border-right: 2px dashed;
			border-top-right-radius: 30px;
			border-bottom-right-radius: 30px;
			margin-left: 30px;
			padding-left: 0;
		}
	}

	/* .card {
		position: relative;
	} */
	/* .timeline .card:nth-child(2n + 1) {
		position: relative;
		left: 20%;
	}
	.timeline .card:nth-child(2n) {
		position: relative;
		right: 20%;
	} */
	.timeline {
		border-top: 2px dashed;
		border-color: #12100b !important;
		margin: 0;
		padding: 30px;
	}

	.timeline:first-child {
		border-top: 0;
		border-top-right-radius: 0;
		border-top-left-radius: 0;
	}

	.timeline:last-child {
		border-bottom-right-radius: 0;
		border-bottom-left-radius: 0;
	}
</style>
