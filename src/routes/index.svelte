<script>
	import Footer from "../components/Footer.svelte";
	let firstColumnData = [
		'Turniej warcabowy: Żółty Pionek',
		[
			{
				title: 'O turnieju',
				link: 'https://yellow-elephant.vercel.app/checkers#about'
			},
			{
				title: 'Regulamin',
				link: 'https://yellow-elephant.vercel.app/checkers#terms'
			},
			{
				title: 'Nagrody',
				link: 'https://yellow-elephant.vercel.app/checkers#awards'
			},
			{
				title: 'Sędzia',
				link: 'https://yellow-elephant.vercel.app/checkers#referee'
			},
			{
				title: 'Historia',
				link: 'https://yellow-elephant.vercel.app/checkers#hronology'
			}
		]
	];

	let secondColumnData = [
		'Lorem',
		[
			{
				title: 'Lorem',
				link: ''
			},
			{
				title: 'Lorem',
				link: ''
			},
			{
				title: 'Lorem',
				link: ''
			},
			{
				title: 'Lorem',
				link: ''
			},
			{
				title: 'Lorem',
				link: ''
			},
			{
				title: 'Lorem',
				link: ''
			},
		]
	];
	let thirdColumnData = [
		'Kontakt',
		[
			{
				title: 'Facebook',
				link: 'https://www.facebook.com/hulio.mondre'
			},
			{
				title: 'LinkedIn',
				link: 'https://www.linkedin.com/in/oleg-darkdev?original_referer=https%3A%2F%2Flinktr.ee%2F'
			},
			{
				title: 'Email',
				link: 'mailto:oleg@darkdev.games'
			}
		]
	];

	const organisators = [
		// {
		// 	logo: '/partners/partner_sopot.svg',
		// 	link: 'https://www.sopot.pl/',
		// 	title: 'Sopot miasto'
		// },
		{
			logo: '/partners/partner_44_cubes.svg',
			link: '',
			title: '44 cubes'
		},

		{
			logo: '/partners/partner_sopoteka.svg',
			link: 'https://www.mbp.sopot.pl/placowki/sopoteka',
			title: 'Sopoteka'
		}
	];

	const sponsors = [
		{
			logo: '/partners/partner_darkdev.svg',
			link: '',
			title: 'DarkDev progect'
		},
		{
			logo: '/partners/partner_itingo.svg',
			link: 'https://itingo.vercel.app/',
			title: 'ITingo'
		}
	];

	const socialMedia = [
		{
			link: 'https://www.facebook.com/yellow.elephant.tournament/',
			img: './social/facebook.svg',
			title: 'Facebook'
		},
		// {
		//     link: '',
		//     img: './social/instagram.svg',
		//     title: ''
		// },
		{
			link: 'https://t.me/chess_yellow_elephant',
			img: './social/telegram.svg',
			title: 'Telegram'
		},
		{
			link: '',
			img: './social/linkedin.svg',
			title: 'Linkedin'
		}
	];

</script>

<svelte:head>
	<title>Żółty słoń</title>
</svelte:head>

<main class="bg-light">
	<section class="banner w-full pb-12 flex flex-col items-center">
		<div class="lg:mt-10 lg:bg-transparent  md:bg-transparent  bg-white w-full flex justify-center">
			<ul class="flex flex-row  mt-4 md:space-x-8 md:mt-0 md:text-sm md:font-medium ">
				<li>
					<a
						href="#about"
						class="lg:text-3xl text-1xl block py-2 pr-2 pl-2 md:p-0 rounded md:border-0 font-impact text-dark hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-dark  "
					>
						O turnieju
					</a>
				</li>
				<li>
					<a
						href="#terms"
						class="lg:text-3xl text-1xl  block py-2 pr-2 pl-2 md:p-0 rounded md:border-0 font-impact text-dark hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-dark  "
					>
						Regulamin
					</a>
				</li>
				<li>
					<a
						href="#awards"
						class="lg:text-3xl text-1xl  block py-2 pr-2 pl-2 md:p-0 rounded md:border-0 font-impact text-dark hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-dark  "
					>
						Nagrody
					</a>
				</li>
				<li>
					<a
						href="#referee"
						class="lg:text-3xl text-1xl  block py-2 pr-2 pl-2 md:p-0 rounded md:border-0 font-impact text-dark hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-dark  "
					>
						Sędzia
					</a>
				</li>
			</ul>
		</div>

		<h1
			class=" lg:pt-10 md:pt-10 pt-2 text-center text-white font-impact xl:text-6xl lg:text-6xl md:text-5xl text-3xl lg:max-w-2xl lg:w-8/12 w-10/12"
		>
			Comiesięczny turniej szachowy "Żółty Słoń"
		</h1>
	</section>

	<!-- 
<section class="w-full pt-12 pb-12 h-auto">

</section> -->
</main>

<Footer {firstColumnData} {secondColumnData} {thirdColumnData} />

<style>
	
</style>
