<script>
	export let tournamentData;
</script>

<ul
	class="bg-white w-full text-gray-500 rounded-lg border border-gray-200 divide-y divide-gray-200 border-0 "
>
	{#each tournamentData.schedule as tournament}
		<li
			class="py-2 px-4 w-full  text-gray-900  text-sm font-medium first:rounded-t-lg last:rounded-b-lg hover:border hover:border-2 hover:border-light hover:text-light hover:bg-dark"
		>
			<div class="flex items-center space-x-4 ">
				<img
					alt=""
					src={tournament.status ? 'ended.svg' : 'current.svg'}
					class="rounded w-20 h-20 bg-gray-100 dark:bg-gray-600 text-gray-600 dark:text-gray-300"
				/>
				<div class="flex-1 min-w-0 ">
					<p class="text-2xl font-bold  truncate ">
						{tournament.title}
					</p>
					<span
						class="font-medium inline-flex items-center justify-center px-2.5 py-0.5 text-xs border  {tournament.status ? 'bg-dark text-light  border-light' : 'bg-light text-dark  border-dark'}  rounded"
						>{tournament.status ? 'Już rozegrany' : 'Nadchodzący'}
					</span>
					<!-- <span class="text-xl font-regular text-light"
						></span
					> -->
					<p class="text-sm  truncate ">
						{tournament.addres}
					</p>
				</div>
				<div class="inline-flex items-center text-base font-semibold  ">
					{tournament.date}
				</div>
				<a
					href={tournament.linkFb}
					target="_blank"
					class="text-center font-medium focus:ring-4 focus:outline-none inline-flex hover:bg-light items-center justify-center px-5 py-2.5 text-sm text-white bg-dark  focus:ring-yellow-300  rounded-lg !p-2"
				>
					<svg
						aria-hidden="true"
						class="w-5 h-5"
						fill="currentColor"
						viewBox="0 0 15 22"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							fill-rule="evenodd"
							d="M3,21.2c1.6,0,3.2,0,4.5,0v-9h3.8l0.8-4.5H7.6V4.5h4.6V0H7.6C5.1,0,3,2,3,4.5c0,0,0,0,0,0v3.1H0v4.5h3V21.2z"
						/>
					</svg>
				</a>
			</div>
		</li>
	{/each}
</ul>
