<script>
	import Footer from '../components/Footer.svelte';
	import sponsors from '../data/sponsors';
	import BecomeOrganisator from '../components/tournaments/BecomeOrganisator.svelte';

	let firstColumnData = [
		'Turniej warcabowy: Żółty Pionek',
		[
			{
				title: 'O turnieju',
				link: 'checkers#about'
			},
			{
				title: 'Regulamin',
				link: 'checkers#terms'
			},
			{
				title: 'Nagrody',
				link: 'checkers#awards'
			},
			{
				title: 'Sędzia',
				link: 'checkers#referee'
			},
			{
				title: 'Historia',
				link: 'checkers#hronology'
			}
		]
	];

	let secondColumnData = [
		'Turniej szachowy "Żółty słoń"',
		[
			{
				title: 'O turnieju',
				link: '/chess#about'
			},
			{
				title: 'Regulamin',
				link: '/chess#terms'
			},
			{
				title: 'Nagrody',
				link: '/chess#awards'
			},
			{
				title: 'Sędzia',
				link: '/chess#referee'
			},
			{
				title: 'Historia',
				link: '/chess#hronology'
			}
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

	const services = [
		{
			title: 'Bez baz danych',
			img: '/app/service_4.svg',
			description:
				'Wystarczy, że podłączysz swój arkusz google excel z wpisanymi danymi uczestników i klikniesz "rozpocznij turniej".'
		},
		{
			title: 'Darmowa',
			img: '/app/service_2.svg',
			description: 'Możesz zaplanować turniej dla dowolnej liczby uczestników, całkowicie za darmo.'
		},
		{
			title: 'Open source',
			img: '/app/service_3.svg',
			description:
				'Kod źródłowy projektu jest dostępny na GitHub, więc zawsze możesz dodać nową funkcjonalności w razie potrzeby.'
		},
		{
			title: 'Łatwe użytkowania',
			img: '/app/service_1.svg',
			description:
				'Potrzebujesz tylko arkusza google excel uczestników turnieju i żadnej rejestracji.'
		}
	];

	const aboutUs = [
		{
			title: 'Nieograniczona liczba uczestników',
			img: '/app/about_1.svg',
			description: 'Łatwe dostosowanie do dowolnej liczby uczestników Twojego turnieju.'
		},
		{
			title: 'Doświadczenie w użytkowaniu',
			img: '/app/about_2.svg',
			description: 'Wykorzystywane przy organizowaniu turniejów szachowych i warcabow, w Sopocie.'
		},
		{
			title: 'Adaptacyjny wygląd',
			img: '/app/about_3.svg',
			description: 'Adaptacyjny wygląd dla telefonów i komputerów.'
		},
		{
			title: 'Bezpieczeństwo danych',
			img: '/app/about_4.svg',
			description: 'Nie zachowujemy danych o uczestnikach Waszych turniejów.'
		}
	];
</script>

<svelte:head>
	<title>Żółty słoń</title>
</svelte:head>

<main class="bg-light">
	<section class="banner w-full pb-12 flex flex-col items-center">
		<div class="lg:mt-4 lg:bg-transparent  md:bg-transparent  bg-white w-full flex justify-center">
			<ul class="flex flex-row  mt-4 md:space-x-8 md:mt-0 md:text-sm md:font-medium ">
				<li>
					<a
						href="/chess"
						class="lg:text-3xl text-1xl text-center block py-2 pr-2 pl-2 md:p-0 rounded md:border-0 font-impact text-dark hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-dark  "
					>
						Turniej: <br /> "Żółty Słoń"
					</a>
				</li>

				<li style="">
					<a
						href="/сheckers"
						class="lg:text-3xl text-1xl text-center block py-2 pr-2 pl-2 md:p-0 rounded md:border-0 font-impact text-dark hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-dark  "
					>
						Turniej: <br /> "Żółty Pionek"
					</a>
				</li>
				<li>
					<a
						href="/oleg-medvedev"
						class="lg:text-3xl text-1xl text-center block py-2 pr-2 pl-2 md:p-0 rounded md:border-0 font-impact text-dark hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-dark  "
					>
						Oleg <br /> Medvedev
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

	<section class="w-full bg-dark pt-12 pb-12 flex flex-col items-center h-auto">
		<h2 id="servise" class="w-full text-light font-impact text-7xl max-w-3xl text-center">
			O serwisie
		</h2>

		<div class="flex flex-row flex-wrap max-w-4xl justify-center ">
			{#each services as service}
				<div
					data-aos="fade-up"
					data-aos-delay="100"
					data-aos-duration="1000"
					data-aos-once="false"
					data-aos-mirror="true"
					class="bg-light hover:bg-white text-gray-500 m-2 rounded-lg border border-gray-200  shadow-md flex max-w-sm flex-col p-4 sm:p-6"
				>
					<img class="w-20 h-20" src={service.img} alt={service.title} />
					<h2 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
						{service.title}
					</h2>
					<p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
						{service.description}
					</p>
				</div>
			{/each}
		</div>
	</section>

	<section class="bg-about w-full pl-20 pt-12 pb-12 h-auto">
		<h2 id="about" class="w-full text-dark font-impact text-7xl max-w-3xl ">O serwisie</h2>

		<div class="flex flex-row flex-wrap w-8/12 ">
			{#each aboutUs as about}
				<div
					data-aos="fade-up"
					data-aos-delay="100"
					data-aos-duration="1000"
					data-aos-once="false"
					data-aos-mirror="true"
					class="bg-white  text-gray-500 m-2 rounded-lg border border-gray-200  shadow-md flex max-w-sm flex-col p-4 sm:p-6"
				>
					<img class="w-20 h-20" src={about.img} alt={about.title} />
					<!-- <a href="/"> -->
					<h2 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
						{about.title}
					</h2>
					<!-- </a> -->
					<p class="mb-3 font-normal text-gray-500 dark:text-gray-400">
						{about.description}
					</p>
				</div>
			{/each}
		</div>
	</section>

	<section class="partners bg-dark w-full pt-12 pb-12 flex flex-col items-center">
		<h2
			class="w-full text-center text-white font-impact lg:text-5xl md:text-4xl text-4xl max-w-3xl "
		>
			Sponsorzy
		</h2>
		<div id="support" class="flex flex-row flex-wrap w-full justify-center mb-2">
			{#each sponsors as sponsor}
				<a href={sponsor.link} target="_blank">
					<div
						class="hover:border-light hover:border-4 rounded-lg m-1"
						style="background-image: url({sponsor.logo}); width: 220px; height: 110px;"
					/>
				</a>
			{/each}
		</div>
		<!-- <h2
			class="w-full text-center text-white font-impact lg:text-5xl md:text-4xl text-4xl max-w-3xl "
		>
			Organizatorzy
		</h2>
		<div class="flex flex-row flex-wrap w-full justify-center mb-10">
			{#each organisators as organisator}
				<a href={organisator.link} target="_blank">
					<div
						class="hover:border-light hover:border-4 rounded-lg m-1 "
						style="background-image: url({organisator.logo}); width: 220px; height: 110px;"
					/>
				</a>
			{/each}
		</div> -->

		<div
			class="bg-light dark:bg-gray-800  rounded-lg  shadow-md flex max-w-2xl flex-col p-4 sm:p-8 text-center"
		>
			<BecomeOrganisator />
		</div>
	</section>
	<section class="w-full pl-20 pt-12 pb-12 h-auto flex justify-center">
		<h2 id="contact" class="w-full text-dark font-impact text-5xl max-w-2xl ">
			Rozpocznij i korzystaj za darmo
		</h2>

		<div class="flex flex-row flex-wrap  max-w-sm">
			<button
				type="button"
				class="text-center font-medium  inline-flex items-center justify-center px-6 py-3.5 text-base text-white bg-dark hover:bg-gray-900 rounded-lg"
				>Rozpocząć
				<svg
					aria-hidden="true"
					class="ml-2 -mr-1 w-5 h-5"
					fill="currentColor"
					viewBox="0 0 20 20"
					xmlns="http://www.w3.org/2000/svg"
					><path
						fill-rule="evenodd"
						d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
						clip-rule="evenodd"
					/></svg
				>
			</button>
		</div>
	</section>
</main>

<Footer {firstColumnData} {secondColumnData} {thirdColumnData} />

<style>
	.bg-about {
		background-image: url(/about.png);
		background-repeat: no-repeat;
		background-position: right;
		background-size: contain;
	}
</style>
