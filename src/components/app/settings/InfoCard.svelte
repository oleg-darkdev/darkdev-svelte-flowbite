<script>
	import { rounds, title, excelLink, roundNow, tournament, raiting } from '../../../data/app/store';
</script>

<a
	href={$excelLink}
	class="m-6 flex  md:max-w-xl max-w-sm flex-col md:flex-row  bg-white shadow-md text-gray-500  rounded-lg border border-gray-200  hover:bg-gray-100 "
>
	<!-- <img class="rounded-t-lg object-cover w-full h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="/images/image-1.webp" alt="">  -->
	<div class="p-6 flex flex-col ">
		<h4 class="font-impact font-normal text-gray-900 text-6xl leading-tight">01.02.2023 r.</h4>
		<span class="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">Turniej "{$title}"</span>
		<span class="mb-2 text-2xl font-bold tracking-tight text-gray-900 "
			>Rounds: {$roundNow} / {$rounds}</span
		>
		<span class="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">Raiting: {$raiting}</span>
		<span class=" text-2xl font-bold tracking-tight text-gray-900 "
			>Members: {$tournament.players.length}</span
		>

		<a href="/" class="mb-8 inline-flex items-center text-gray-900 hover:underline">
			Przejdź do Excela
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				stroke="currentColor"
				class="w-5 h-5 ml-2"
				><path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
				/></svg
			>
		</a>

		<div class="flex flex-row justify-center w-full">
			<a href="https://www.facebook.com/hulio.mondre">
				<img
					alt="facebook_profile"
					src="./social/facebook.svg"
					class="rounded-full w-16 h-16 m-1 hover:border-white hover:border-2 "
				/>
			</a>
			<a href="https://www.linkedin.com/in/oleg-darkdev">
				<img
					alt="linkedin_profile"
					src="./social/linkedin.svg"
					class="rounded-full w-16 h-16 m-1 hover:border-white hover:border-2 "
				/>
			</a>
		</div>
	</div>
</a>
