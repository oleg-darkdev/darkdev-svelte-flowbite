<script>
	import socialMedia from '../data/socialMedia';
	import Schedule from './Schedule.svelte';
</script>

<h2 class="w-full text-center text-white font-impact lg:text-5xl md:text-4xl text-4xl max-w-3xl ">
	Turniej szachowy "Żółty Słoń"
</h2>

<Schedule />
<slot name="text" />

<div class="flex flex-row justify-center w-full mb-10">
	{#each socialMedia as media}
		<a href={media.link}>
			<img
				alt={media.title}
				src={media.img}
				class="rounded-full w-16 h-16 m-1 hover:border-white hover:border-2 "
			/>
		</a>
	{/each}
</div>

<slot name="timer" />
<slot name="hronology" />
