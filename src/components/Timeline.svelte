<script>
	const title = 'Lorem ipsum ';
	const lorem =
		'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.';
	const awardsList = [
		{
			title: 'Za drugie miejsce',
			img: '/organisator/certificates/1.png',
			description:
				'Za drugie miejsce wśród dzieci do lat ośmiu w IX Międzynarodowym Festiwalu "Azowska Fala".',
			position: 'left',
			date: '',
			id: 1
		},
		{
			title: 'Za pierwsze miejsce',
			img: '/organisator/certificates/2.png',
			description:
				'Za pierwsze miejsce w ogólnokrajowym turnieju szachowym pamięci G. Veresova wśród chłopców do lat 10.',
			// За первое место в республиканском шахматном турнире памяти Г.Вересова среди юношей до 10 лет.
			position: 'right',
			date: '',
			id: 2
		},
		{
			title: 'Za drugie miejsce',
			img: '/organisator/certificates/3.png',
			description:
				'Za drugie miejsce w indywidualnych mistrzostwach Mińska w szachach wśród chłopców do lat 10.',
			// description: 'За второе место в личном первенстве г. Минска по шахматам среди юношей до 10 лет.',
			position: 'left',
			date: '10.04.2004',
			id: 3
		},
		{
			title: 'Za ósme miejsce',
			img: '/organisator/certificates/4.png',
			description: 'Za występ w półfinale Chłopców Under-14, ósme miejsce.',
			// description: 'За участие в полуфинале среди юношей до 14 лет, находясь в возрасте 8 лет занявшему восьмое место.',
			position: 'right',
			date: '',
			id: 4
		},
		{
			title: 'Za pierwsze miejsce',
			img: '/organisator/certificates/5.png',
			description: 'Za pierwsze miejsce wśród chłopców w Otwartych Mistrzostwach Szkoły Sportowej Dzieci i Młodzieży przy Zespole Szkół nr 11 im. Olimpijczyków w szachach szybkich.',
            // За первое место среди юношей в открытом первенстве СДЮШОР №11 по быстрым шахматам.
			position: 'left',
			date: '',
			id: 5
		},
		{
			title: 'Za drugie miejsce',
			img: '/organisator/certificates/6.png',
			description:
				'Za drugie miejsce w Otwartych Letnich Mistrzostwach Szachowych Szkoły Sportowej dla Dzieci i Młodzieży "im. Olimpijczyków Rezerwy nr 11" wśród chłopców i dziewcząt do lat 10.',
			position: 'right',
			date: '',
			id: 6
		},
		// {
		// 	title: '',
		// 	img: '/organisator/certificates/7.png',
		// 	description: '',
		// 	position: 'left',
		// 	date: '',
		// id: 7
		// },
		{
			title: 'Za pierwsze miejsce',
			img: '/organisator/certificates/8.png',
			description:
				'Za pierwsze miejsce w międzynarodowym turnieju "Amethan Sultan Memorial Tournament."',
			position: 'left',
			date: '',
			id: 8
		},
		{
			title: 'Za pierwsze miejsce',
			img: '/organisator/certificates/9.png',
			description:
				'Za pierwsze miejsce w indywidualnych mistrzostwach "Szkoły Sportowej Dzieci i Młodzieży w szachach nr 11", wśród chłopców i dziewcząt.',
			position: 'right',
			date: '',
			id: 9
		},
		{
			title: 'Za drugie miejsce',
			img: '/organisator/certificates/10.png',
			description:
				'II miejsce w republikańskim turnieju szachowym pamięci Y.V. Gulaga wśród chłopców do lat 12.',
			position: 'left',
			date: '04.12.2004',
			id: 10
		},
		{
			title: 'Za pierwsze miejsce',
			img: '/organisator/certificates/11.png',
			description:
				'Za pierwsze miejsce w półfinale mistrzostw Mińska w szachach osobistych wśród chłopców do lat 10.',
			position: 'right',
			date: '',
			id: 11
		},
		{
			title: 'Za pierwsze miejsce',
			img: '/organisator/certificates/12.png',
			description:
				'Za pierwsze miejsce w indywidualnych zawodach szachowych Mińska wśród chłopców do lat 10.',
			position: 'left',
			date: '06.01.2005',
			id: 12
		},
		{
			title: 'Za pierwsze miejsce',
			img: '/organisator/certificates/13.png',
			description: 'Za pierwsze miejsce w szachowych mistrzostwach Republiki Białorusi do lat 10.',
			position: 'right',
			date: '',
			id: 13
		},
		{
			title: 'Za trzecie miejsce',
			img: '/organisator/certificates/14.png',
			description:
				'Za trzecie miejsce w indywidualnych mistrzostwach "Dzieci i Młodzieży Szkoły Szachowej nr 11" wśród chłopców i dziewcząt do lat 10.',
			position: 'left',
			date: '25.04.2005',
			id: 14
		},
		{
			title: 'Za drugie miejsce',
			img: '/organisator/certificates/15.png',
			description:
				'Za drugie miejsce w Mistrzostwach Białorusi w Szachach Szybkich wśród chłopców do lat 10.',
			// 'За второе место в первенстве Беларуси по быстрым шахматам среди мальчиков до 10 лет.',
			position: 'right',
			date: '',
			id: 15
		},
		{
			title: 'Za trzecie miejsce',
			img: '/organisator/certificates/16.png',
			description:
				'Za trzecie miejsce w Ogólnokrajowym Otwartym Turnieju Szachowym pamięci G. Veresova wśród chłopców do lat 10.',
			// 'За третье место в открытом республиканском шахматном турнире памяти Г.Вересова среди юношей до 10 лет.',
			position: 'left',
			date: '27.09.2005',
			id: 16
		},
		{
			title: 'Za pierwsze miejsce',
			img: '/organisator/certificates/17.png',
			description:
				'Dyplom uczestnictwa w VII Międzynarodowym Festiwalu Szachowym "Słoneczny pionek".',
			// description: 'Дииплом участника 7 международного шахматного фестиваля "Солнечная пешка".',
			position: 'right',
			date: '',
			id: 17
		},
		{
			title: 'Za trzecie miejsce',
			img: '/organisator/certificates/18.png',
			description:
				'Za zajęcie trzeciego miejsca w czwartym międzynarodowym turnieju szachowym Orsha 2006.',
			// description: 'За третье место в четвёртом международном шахматном турнире "Орша 2006"',
			position: 'left',
			date: '',
			id: 18
		},
		{
			title: 'Za drugie miejsce',
			img: '/organisator/certificates/19.png',
			description: 'Za drugie miejsce w Turnieju Szachów Drużynowych "Caisa".',
			// description: 'За второе место в коммандном шахматном турнире "Каиса".',
			position: 'right',
			date: '',
			id: 19
		},
		{
			title: 'Za trzecie miejsce',
			img: '/organisator/certificates/20.png',
			description:
				'Za trzecie miejsce w mińskich mistrzostwach indywidualnych w szachach szybkich wśród chłopców do lat 12.',
			// 'За третье место в личном первенстве г. Минска по быстрым шахматам среди юношей до 12 лет.',
			position: 'left',
			date: '29.04.2006',
			id: 20
		},

		{
			title: 'Za trzecie miejsce',
			img: '/organisator/certificates/21.png',
			description:
				'Za trzecie miejsce w Międzynarodowym Turnieju Szachowym pamięci G. Veresova wśród chłopców do lat 12.',
			// 'За третье место в международном шахматном турнире памяти Г.Вересова среди юношей до 12 лет.',
			position: 'right',
			date: '02.07.2006',
			id: 21
		},
		{
			title: 'Za pierwsze miejsce',
			img: '/organisator/certificates/22.png',
			description:
				'Dyplom za udział w VIII Międzynarodowym Festiwalu Szachowym "Słoneczny pionek".',
			position: 'left',
			date: '',
			id: 22
		},
		{
			title: 'Za trzecie miejsce',
			img: '/organisator/certificates/23.png',
			description: 'Za trzecie miejsce w Otwartym Turnieju Republikańskim ku pamięci G. Veresova.',
			// description: 'За третье место в Открытом Республиканском турнире памяти Г.Вересова',
			position: 'right',
			date: '29.06.2008',
			id: 23
		},
		{
			title: 'Za drugie miejsce',
			img: '/organisator/certificates/24.png',
			description: 'Za drugie miejsce w mistrzostwach w szachach wśród chłopców do lat 14.',
			// description: 'За второе место в первенстве СДЮШОР №11 по шахматам среди юношей до 14 лет.',
			position: 'left',
			date: '25.08.2008',
			id: 24
		},
		{
			title: 'Za pierwsze miejsce',
			img: '/organisator/certificates/25.png',
			description: 'Za pierwsze miejsce w turnieju drużynowym Sportowy Duszpasterz.',
			// description: 'За первое место на командном турнире "Спортакиада ДЮСШ".',
			position: 'right',
			date: '14.11.2008',
			id: 25
		},
		{
			title: 'Za pierwsze miejsce',
			img: '/organisator/certificates/26.png',
			description: 'Za pierwsze miejsce w turnieju drużynowym Sportowy Duszpasterz.',
			// description: 'За первое место на командном турнире "Спортакиада ДЮСШ".',
			position: 'left',
			date: '',
			id: 26
		},
		{
			title: 'Za dziewiąte miejsce',
			img: '/organisator/certificates/27.png',
			description: 'Za dziewiąte miejsce na Mistrzostwach Europy Under-10.',
			// description: 'За 9 место на чемпионате Европы среди юношей до 10 лет.',
			position: 'right',
			date: '',
			id: 27
		},
		{
			title: 'Za pierwsze miejsce',
			img: '/organisator/certificates/28.png',
			description: 'Za pierwsze miejsce w międzynarodowym turnieju Frydek-Mistek.',
			// description: 'За первое место в международном турнире Frydek-Mistek.',
			position: 'left',
			date: '13.12.2009',
			id: 28
		},
		{
			title: 'Za pierwsze miejsce',
			img: '/organisator/certificates/29.png',
			description: 'Za pierwsze miejsce w turnieju Dni Olimpijskich Młodzieży.',
			// description: 'За первое место в турнире "Олимпийские дни молодёжи".',
			position: 'right',
			date: '13.03.2009',
			id: 29
		},
		{
			title: '',
			img: '/organisator/certificates/30.png',
			description: 'Za drugie miejsce w turnieju zespołowym Dni Olimpijczyki Młodzieży.',
			// description: 'За второе место в командном турнире "Олимпийские дни молодёжи".',
			position: 'left',
			date: '13.09.2009',
			id: 30
		},
		{
			title: 'Za trzecie miejsce',
			img: '/organisator/certificates/31.png',
			description:
				'Za trzecie miejsce w mistrzostwach Szkoły Sportowej Dzieci i Młodzieży przy Zespole Szkół nr 11 im. Olimpijczyków w szachach szybkich.',
			// description: 'За третье место в первенстве СДЮШОР № 11 по быстрым шахматам.',
			position: 'right',
			date: '',
			id: 31
		},

		{
			title: 'Za trzecie miejsce',
			img: '/organisator/certificates/32.png',
			description:
				'Za trzecie miejsce w ósmym republikańskim turnieju szachowym "Złoty Rustan 2009".',
			// 'За третье место в восьмом республиканском турнире шахматном турнире "Золотая ростань-2009."',
			position: 'left',
			date: '06.10.2009',
			id: 32
		},
		{
			title: 'Za pierwsze miejsce',
			img: '/organisator/certificates/33.png',
			description:
				'Za pierwsze miejsce w Spartakiadzie Republiki Białorusi wśród szkół sportowych dla dzieci i młodzieży w szachach.',
			// 'За первое место в Спартакиаде Республики Беларусь среди детстко-юношеских спортивных школ по шахматам.',
			position: 'right',
			date: '31.10.2009',
			id: 33
		},
		{
			title: 'Za trzecie miejsce',
			img: '/organisator/certificates/34.png',
			description: 'Za trzecie miejsce w Ogólnokrajowym Turnieju Pamięci Y. V. Gulagi.',
			// description: 'За третье место в Республиканском турнире памяти Ю.В.Гулаги',
			position: 'left',
			date: '06.12.2009',
			id: 34
		},
		{
			title: 'Za pierwsze miejsce',
			img: '/organisator/certificates/35.png',
			description:
				'Za pierwsze miejsce w turnieju "Szkoły Sportowej Dzieci i Młodzieży" w szachach nr 11.',
			// description: 'За первое место в первенстве СДЮШОР №11 по шахматам среди юношей.',
			position: 'right',
			date: '24.01.2010',
			id: 35
		},
		{
			title: 'Za drugie miejsce',
			img: '/organisator/certificates/36.png',
			description:
				'Za drugie miejsce w Otwartym Republikańskim Turnieju Szachowym pamięci G.N. Veresova.',
			// 'За второе место в открытом Республиканском шахматном турнире памяти Г.Н.Вересова',
			position: 'left',
			date: '04.07.2010',
			id: 36
		},
		{
			title: 'Za trzecie miejsce',
			img: '/organisator/certificates/37.png',
			description:
				'Za trzecie miejsce w Otwartym Republikańskim Turnieju Szachowym pamięci Y. V. Gulaga.',
			// description: 'За третье место в открытом Республиканском шахматном турнире памяти Ю.В.Гулаги.',
			position: 'right',
			date: '05.12.2010',
			id: 37
		},
		{
			title: 'Za trzecie miejsce',
			img: '/organisator/certificates/38.png',
			description: 'Za trzecie miejsce w miejskiej Sportkiadzie Szachowej.',
			// description: 'За третье место на городской шахматной Спортакиаде.',
			position: 'left',
			date: '28.10.2016',
			id: 38
		},
		{
			title: 'Za pierwsze miejsce',
			img: '/organisator/certificates/39.png',
			description: 'Za pierwsze miejsce w miejskich rozgrywkach szachów.',
			position: 'right',
			date: '',
			id: 39
		},
		{
			title: 'Za pierwsze miejsce',
			img: '/organisator/certificates/40.png',
			description: 'Za pierwsze miejsce w warcabach na wyjazdowych rozgrywkach.',
			position: 'left',
			date: '04.02.2018',
			id: 40
		}
	];

</script>

{#each awardsList as award (award.id)}
	<div class="timeline">
		<div
			data-aos="fade-{award.position}"
			data-aos-delay="100"
			data-aos-duration="800"
			data-aos-once="false"
			data-aos-mirror="true"
			style="width: 350px; position: relative; {award.position}: 50%;"
			class="bg-white  card text-gray-500 rounded-lg border border-gray-200 shadow-md flex flex-col"
		>
			{#if award.showCert}
				<img class="rounded-t-lg" src={award.img} alt={award.title} />
			{/if}
			<div class="p-4 sm:p-6">
				<h3 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
					{award.title}
				</h3>
				<p class="mb-3 font-normal text-gray-700 leading-tight">
					{award.description}
				</p>
				<button
					type="button"
					on:click={() => (award.showCert = !award.showCert)}
					class="text-center w-full font-medium focus:ring-4 focus:outline-none inline-flex items-center justify-center px-5 py-2.5 text-sm text-white bg-dark hover:bg-gray-600 focus:bg-gray-300 rounded-lg"
					>Pokaż dyplom
				</button>
			</div>
		</div>
	</div>
{/each}

<style>
	.timeline {
		width: 350px;
		margin: auto;
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
