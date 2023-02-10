<script>
	$: current = '';
</script>

<!-- border-b-2 border-blue-600 -->
<div class="rounded-xl max-w-lg flex justify-center my-4 mx-auto bg-light p-2 sm:p-6">
	<!-- <nav aria-label="Navigation panel" class="flex">
    <ol class="inline-flex items-center space-x-1 md:space-x-3">
      <li class="inline-flex items-center">
        <a href="/" class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900  " >
          <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z">
            </path>
          </svg> Home
        </a>
      </li> 
      <li class="inline-flex items-center">
        <svg class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd">
          </path>
        </svg> 
        <a href="/" class="ml-1 text-sm font-medium text-gray-700 hover:text-gray-900 md:ml-2  ">Projects
        </a>
      </li> 
    </ol>
  </nav> -->
	<ul class="flex flex-wrap space-x-2 -mb-px">
		<li class="group" role="presentation">
			<!-- <button type="button" on:click={() => showSettings = !showSettings} role="tab" class="inline-block text-sm font-medium text-center disabled:cursor-not-allowed p-4 text-dark   active">
        Settings
      </button>  -->
			<a
				href="/app/settings"
				class="inline-block font-impact text-2xl font-medium text-center disabled:cursor-not-allowed m-2 text-dark   active"
			>
				Settings
			</a>
		</li>
		<li class="group" role="presentation">
			<a
				href="/app/players"
				class="inline-block font-impact text-2xl text-sm font-medium text-center disabled:cursor-not-allowed m-2  text-dark   active"
			>
				Players
			</a>
		</li>
		<li class="group" role="presentation">
			<a
				href="/app/rounds"
				class="inline-block font-impact text-2xl text-sm font-medium text-center disabled:cursor-not-allowed m-2 text-dark   active"
			>
				Rounds
			</a>
		</li>
		<li class="group" role="presentation">
			<a
				href="/app/standings"
				class=" inline-block font-impact text-2xl text-sm font-medium text-center disabled:cursor-not-allowed m-2   text-dark   active"
			>
				Standings
			</a>
		</li>
	</ul>
</div>

<style>
	.selected {
		border-bottom: 6px solid black;
	}
</style>
