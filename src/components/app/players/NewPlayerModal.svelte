<script>
	import { Button, Modal, Label, Input, Checkbox } from 'flowbite-svelte';
	import PlayerModel from '../../../data/app/PlayerModel';
	import { tournament } from '../../../data/app/store';

	let nameNewPlayer = 'test';
	let surnameNewPlayer = 'test',
		eloNewPlayer = '1322',
		emailNewPlayer = 'huj@gmail.com';

	function addPlayer() {
		tournament.update((v) => {
			v.players.push(
				new PlayerModel(nameNewPlayer, surnameNewPlayer, eloNewPlayer, emailNewPlayer)
			);
			return v;
		});
	}
	export let showNewPlayerForm;
</script>

<Modal bind:open={showNewPlayerForm} size="xs" autoclose={true}>
	<form class="flex flex-col space-y-6" action="#">
		<h3 class="text-xl font-medium text-gray-900 dark:text-white p-0">
			Rejestracja nowego użytkownika
		</h3>

		<div class="space-y-2">
			<Label for="first_name" class="mb-2">Imię</Label>
			<Input type="text" id="first_name" placeholder="Imię" bind:value={nameNewPlayer} required />
		</div>
		<div class="space-y-2">
			<Label for="last_name" class="mb-2">Nazwisko</Label>
			<Input
				type="text"
				id="last_name"
				placeholder="Nazwisko"
				bind:value={surnameNewPlayer}
				required
			/>
		</div>
		<div class="space-y-2">
			<Label for="raiting" class="mb-2">Raiting</Label>
			<Input type="text" id="raiting" placeholder="1800" bind:value={eloNewPlayer} required />
		</div>
		<div class="space-y-2">
			<Label for="email" class="mb-2">Email</Label>
			<Input
				type="email"
				id="email"
				placeholder="taras@gmail.com"
				bind:value={emailNewPlayer}
				required
			/>
		</div>
		<div class="flex items-start">
			<Checkbox>Wyrażam zgodę na przekazanie danych do publicznego excelu</Checkbox>
			<a href="/" class="ml-auto text-sm text-blue-700 hover:underline dark:text-blue-500"
				>Excel publiczny?</a
			>
		</div>
		<!-- -->
		<Button on:click={() => addPlayer()} type="submit" class="w-full1">Dodać użytkownika</Button>
	</form>
</Modal>
