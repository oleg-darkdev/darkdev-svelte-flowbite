<script>
	export let firstColumnData = '',
		secondColumnData = '',
		thirdColumnData = '';
</script>

<footer class="bg-dark">
	<div class="flex flex-row justify-center py-8 px-6">
		<div style="width: 180px;">
			<h2 class="mb-6 text-sm font-semibold text-gray-400 uppercase">{firstColumnData[0]}</h2>
			<ul class="text-gray-300">
				{#each firstColumnData[1] as data}
					<li class="mb-4">
						<a href={data.link} class="hover:underline; hover:text-light" target="_blank"
							>{data.title}
						</a>
					</li>
				{/each}
			</ul>
		</div>
		<div style="width: 300px;">
			<h2 class="mb-6 text-sm font-semibold uppercase text-gray-400">{secondColumnData[0]}</h2>
			<ul class="text-gray-300">
				{#each secondColumnData[1] as data}
					<li class="mb-4">
						<a href={data.link} class="hover:underline; hover:text-light" target="_blank"
							>{data.title}
						</a>
					</li>
				{/each}
			</ul>
		</div>
		<div style="width: 180px;">
			<h2 class="mb-6 text-sm font-semibold uppercase text-gray-400">{thirdColumnData[0]}</h2>
			<ul class="text-gray-300">
				{#each thirdColumnData[1] as data}
					<li class="mb-4">
						<a href={data.link} class="hover:underline; hover:text-light" target="_blank"
							>{data.title}
						</a>
					</li>
				{/each}
			</ul>
		</div>
	</div>
</footer>
