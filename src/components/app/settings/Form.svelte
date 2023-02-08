<script>
	import { Button, Label, Input, Checkbox } from 'flowbite-svelte';
	import { Card } from 'flowbite-svelte';
	import { rounds, title, excelLink } from '../../../data/app/store';
	import ToastG from '../ToastG.svelte';

	let formTitle = '';
	let titleData, formExcelLink;

	title.subscribe((value) => {
		titleData = value;
	});

	excelLink.subscribe((value) => {
		formExcelLink = value;
	});

	function decrement() {
		rounds.update((n) => n - 1);
	}
	function increment() {
		rounds.update((n) => n + 1);
	}
	function saveTornInfo() {
		rounds.set(roundsData);
		excelLink.set(formExcelLink);
		title.set(titleData);
	}
</script>

<div class="p-6 space-y-6 w-5/12 max-w-2xl bg-white rounded-xl">
	<form class="flex flex-col items-center space-y-6 " action="#">
		<div class="space-y-2 w-full">
			<Label for="title" class="mb-2">Tytuł</Label>
			<Input type="text" id="title" placeholder="Żółty słoń" bind:value={formTitle} required />
		</div>
		<div class="space-y-2 w-full">
			<Label for="title" class="mb-2">Link do Google Excela</Label>
			<Input type="text" id="title" placeholder="" bind:value={$excelLink} required />
		</div>
		<div class="flex flex-col w-full">
			<Label class="mb-2 text-center w-full">Ilość rund</Label>
			<div class="flex flex-row h-16 content-center justify-center">
				<button
					on:click={decrement}
					type="button"
					class="text-center font-medium focus:ring-4 focus:outline-none inline-flex items-center justify-center px-5 py-2.5 text-sm text-white hover:text-dark bg-dark hover:bg-light focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 rounded-lg !p-2"
				>
					<svg
						aria-hidden="true"
						class="w-5 h-5"
						fill="currentColor"
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							fill-rule="evenodd"
							d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
							clip-rule="evenodd"
						/>
					</svg>
				</button>

				<span class="font-impact text-3xl text-gray-900 m-4">
					{$rounds}
				</span>

				<button
					on:click={increment}
					type="button"
					class="text-center font-medium focus:ring-4 focus:outline-none inline-flex items-center justify-center px-5 py-2.5 text-sm text-white bg-dark hover:text-dark hover:bg-light focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 rounded-lg !p-2"
				>
					<svg
						aria-hidden="true"
						class="w-5 h-5"
						fill="currentColor"
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							fill-rule="evenodd"
							d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
							clip-rule="evenodd"
						/>
					</svg>
				</button>
			</div>
		</div>
		<button
			on:click={saveTornInfo}
			type="submit"
			class="text-center font-medium w-5/12 focus:ring-4 focus:outline-none inline-flex items-center justify-center px-5 py-2.5 text-sm text-white bg-dark hover:text-dark hover:bg-light focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 rounded-lg !p-2"
		>
			Zapisać turniej
		</button>
	</form>
</div>

<!-- <ToastG on:message text='Saved'/> -->
