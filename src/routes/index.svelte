<script>
    import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';

    const organisators = [
			{
				logo: '/partners/partner_sopot.svg',
				link: 'https://www.sopot.pl/',
				title: 'Sopot miasto'
			},
            {
				logo: '/partners/partner_44_cubes.svg',
				link: '',
				title: '44 cubes'
			},

			{
				logo: '/partners/partner_sopoteka.svg',
				link: 'https://www.mbp.sopot.pl/placowki/sopoteka',
				title: 'Sopoteka'
			},            
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


const honorsList = [
    {
        img: '/honors/honors_first.svg',
        title: '1 miejsce',
        awards: [
            'Medal pamiątkowa',
            'Dyplom',
            'Herbata terapeutyczna',
        ]
    },
    {
        img: '/honors/honors_second.svg',
        title: '2 miejsce',
        awards: [
            'Medal pamiątkowa',
            'Dyplom',
            'Herbata terapeutyczna',
        ]
    },
    {
        img: '/honors/honors_third.svg',
        title: '3 miejsce',
        awards: [
            'Medal pamiątkowa',
            'Dyplom',
            'Herbata terapeutyczna',
        ]
    },
];


const organisatoValues = [
    'Kandydat na mistrza sportu',
    'Mistrz Białorusi 2005-2006 r.',
    'Wielokrotny mistrz międzynarodowych turniejów szachowych. ',
];

const socialMedia = [
    {
        link: '',
        img: './social/facebook.svg',
        title: ''
    },
    {
        link: '',
        img: './social/instagram.svg',
        title: ''
    },
    {
        link: '',
        img: './social/telegram.svg',
        title: ''
    },
    {
        link: '',
        img: './social/linkedin.svg',
        title: ''
    }
];


let openNav = false;
</script>


<svelte:head>
	<title>Żółty słoń</title>
</svelte:head>



<section class="banner w-full pb-12 flex flex-col items-center">
  <div class="lg:mt-10 lg:bg-transparent  md:bg-transparent  bg-white w-full flex justify-center" >
        <ul class="flex flex-row  mt-4 md:space-x-8 md:mt-0 md:text-sm md:font-medium ">
            <li>
                <a href="#" class="lg:text-3xl text-1xl block py-2 pr-2 pl-2 md:p-0 rounded md:border-0 font-impact text-dark hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-dark  ">
                    O turnieju 
                </a>
            </li> 
            <li>
                <a href="#" class="lg:text-3xl text-1xl  block py-2 pr-2 pl-2 md:p-0 rounded md:border-0 font-impact text-dark hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-dark  ">
                    Nagrody
                </a>
            </li> 
            <li>
                <a href="#" class="lg:text-3xl text-1xl  block py-2 pr-2 pl-2 md:p-0 rounded md:border-0 font-impact text-dark hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-dark  ">
                    Regulamin 
                </a>
            </li> 
            <li>
                <a href="#" class="lg:text-3xl text-1xl  block py-2 pr-2 pl-2 md:p-0 rounded md:border-0 font-impact text-dark hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-dark  ">
                    Sponsorzy
                </a>
            </li> 
        </ul>
    </div> 


    <h1 class=" lg:pt-10 md:pt-10 pt-2 text-center text-white font-impact lg:text-6xl md:text-5xl text-3xl lg:max-w-2xl lg:w-8/12 w-10/12">
        Comiesięczny turniej szachówy "Żółty słoń"
    </h1>
</section>

<section class="w-full h-auto lg:pb-12 md:pb-12 pb-12 flex justify-center">
    <div class="m-1 h-auto rounded-lg max-w-2xl bg-dark lg:p-8 md:p-8 p-2">
        <h2 class="w-full text-center text-white font-impact lg:text-5xl md:text-4xl text-4xl max-w-3xl ">
            Turniej Żółty słoń"
        </h2>
        <p class="text-gray-100 text-2xl mb-4">
            Comiesięczny turniej szachów klasycznych "Żółty słoń"
        </p>
        <p class="text-gray-100 text-2xl mb-4">
            W naszym turnieju znajdzie się miejsce zarówno dla amatorów jak i tych bardziej zaawansowanych graczy. Ranking graczy 1400-2000. Zgłoszenia rejestrować będziemy drogą mailową (44hackerspace@gmail.com), oraz poprzez zapisy w Sopoteke, przed rozpoczęciem turnieju.
        </p>    
        <p class="text-gray-100 text-2xl mb-4">
            Wpisowe wynosi 5 zł i jest płatne podczas rejestracji w formularzu turniejowym przed rozpoczęciem turnieju.
        </p>    
        <p class="text-gray-100 text-2xl mb-8">
            Turniej odbywa się co miesiąc między 10 a 20 dniami miesiąca. Ogłoszenia o terminach dostępne są w mediach socjalnych.
        </p> 
        <div class="flex flex-row justify-center w-full">
            {#each socialMedia as media}
                <a href="{media.link}">
                    <img alt="{media.title}" src="{media.img}" 
                    class="rounded-full w-16 h-16 m-1 hover:border-white hover:border-2 ">
                </a>
            {/each}
        </div>
    </div>
</section>

<section class="partners bg-dark w-full pt-12 pb-12 flex flex-col items-center">
    <h2 class="w-full text-center text-white font-impact lg:text-5xl md:text-4xl text-4xl max-w-3xl ">
        Sponsorzy
    </h2>
    <div class="flex flex-row flex-wrap w-full justify-center mb-2">
        {#each sponsors as sponsor}
            <a href={sponsor.link} target="_blank"> 
                <div
                    class="hover:border-light hover:border-4 rounded-lg m-1"
                    style="background-image: url({sponsor.logo}); width: 220px; height: 110px;"
                />
            </a>
        {/each}
    </div>
    <h2 class="w-full text-center text-white font-impact lg:text-5xl md:text-4xl text-4xl max-w-3xl ">
        Organizatorzy
    </h2>
    <div class="flex flex-row flex-wrap w-full justify-center mb-10">
        {#each organisators as organisator}
            <a href={organisator.link} target="_blank"> 
                <div
                    class="hover:border-light hover:border-4 rounded-lg m-1"
                    style="background-image: url({organisator.logo}); width: 220px; height: 110px;"
                />
            </a>
        {/each}
    </div>


    <div class="flex flex-col flex-wrap w-full items-center">
        <p class="text-white text-4xl m-1 font-impact max-w-2xl text-center">
            Chciałbyś być jednym z organizatorów lub sponsorów? wspieraj projekt
        </p>
        <div class="flex flex-row ">
            <button type="button" class="m-2 group text-center font-medium focus:ring-4 focus:outline-none inline-flex items-center justify-center px-6 py-3.5 text-base text-light hover:text-dark border border-light hover:bg-yellow-300 focus:ring-yellow-300 rounded-lg">
                Dla organizatorów
            </button>
            <button type="button" class="m-2 group text-center font-medium focus:ring-4 focus:outline-none inline-flex items-center justify-center px-6 py-3.5 text-base text-light hover:text-dark border border-light hover:bg-yellow-300 focus:ring-yellow-300  rounded-lg">
                Dla sponsorów
            </button>

        </div>
    </div>
</section>



<section class="w-full pt-12 pb-12 h-auto flex flex-col items-center bg-gray-100">
    <h2 class="w-full text-center text-dark font-impact lg:text-5xl md:text-4xl text-4xl max-w-3xl ">
        Regulamin turnieju "Żółty słoń"
    </h2>
    <div class="flex flex-row flex-wrap w-full  justify-center cards-wrap">
        <div style="background-image: url(/terms/terms_clocks.svg);" class="card-term items-end flex">
            <div style="height: 200px; width: 360px;" class="bg-dark text-light rounded-lg border border-light shadow-md flex max-w-sm flex-col lg:p-4 md:p-4 p-2">
                <span class="text-8xl font-impact tracking-tight text-white text-center">
                    10 min.
                </span> 
                <span class="text-4xl font-impact tracking-tight text-white text-center">
                    na jednego gracza
                </span> 
            </div>
        </div>
        <div style="background-image: url(/terms/terms_ranking.svg); " class="max-w-sm card-ranking items-center flex">
            <div style="height: 180px; width: 360px;" class="bg-dark text-light rounded-lg border border-light shadow-md flex max-w-sm flex-col lg:p-4 md:p-4 p-2 ">

                <span class="text-4xl font-impact tracking-tight text-white text-center">
                    Rankinging 
                </span> 
                <span class="text-7xl font-impact tracking-tight text-white text-center">
                    1400-2000
                </span> 
            </div>
        </div>

        <div style="background-image: url(/terms/terms_system.svg); " class="card-term items-end flex">
            <div style="height: 200px; width: 360px;"  class="bg-dark text-light rounded-lg border border-light shadow-md flex max-w-sm flex-col lg:p-4 md:p-4 p-2">
                <span class="text-7xl font-impact tracking-tight text-white text-center">
                    Szwajcarski
                </span> 
                <span class="text-4xl font-impact tracking-tight text-white text-center">
                    system rozgrywek
                </span> 
            </div>
        </div>
        
    </div>
</section>


<section class="w-full pt-12 pb-12 h-auto flex flex-col items-center bg-dark">
    <h2 class="w-full text-center text-white font-impact lg:text-5xl md:text-4xl text-4xl max-w-3xl ">
        Nagrody turnieju "Żółty słoń"
    </h2>
    <div   class="flex flex-row flex-wrap flex-wrap justify-center ">
    {#each honorsList as honor}
    
        <div style="background-image: url({honor.img});" class="card-honor m-2 -mt-20 items-end flex max-w-sm">
            <div style="height: 200px; width: 100%;" class="bg-dark text-light rounded-lg border border-light shadow-md flex max-w-sm flex-col p-4 sm:p-6">
                <span class="text-6xl font-impact tracking-tight text-white text-center">
                    {honor.title} 
                </span> 
                <!-- <span class="text-4xl font-impact tracking-tight text-white text-center">
                    na jednego gracza
                </span>  -->
                <ul class="text-light  max-w-md list-disc list-inside space-y-1">
                    {#each honor.awards as award}
                    <li class="">
                        {award}
                    </li> 
                    {/each}
                </ul>
            </div>
        </div>
    {/each}
</div>
</section>


 

<section class="w-full h-auto flex justify-center bg-gray-100">
    <div class="bg-gray-100 max-w-2xl pt-12 pb-12 flex flex-col items-center">
        <img src="./avatar_org.png" class="w-full -mb-10" alt="Photo organisator">
        <div class="h-auto rounded-lg max-w-sm  bg-dark pt-8 pb-8 pr-4 pl-4">
            <h2 class="w-full text-center text-white font-impact lg:text-5xl md:text-4xl text-4xl ">
                Sędzia i organizator
            </h2>
            <h3 class="w-full text-center text-light font-impact text-7xl ">
                Oleg Medvedev
            </h3>
            <ul class="text-light pl-10 max-w-md list-disc list-inside space-y-1">
                {#each organisatoValues as value}
                    <li class="">
                        {value}
                    </li> 
                {/each}
            </ul>
            <div class="flex justify-center">
            <button type="button" class="m-2 group text-center font-medium focus:ring-4 focus:outline-none inline-flex items-center justify-center px-6 py-3.5 text-base text-light hover:text-dark border border-light hover:bg-yellow-300 focus:ring-yellow-300 rounded-lg">
                Wszystkie dane
            </button>
            </div>
        </div>
    </div>
</section>



<!-- <section class="w-full pt-12 pb-12 h-auto">

</section>
<section class="w-full pt-12 pb-12 h-auto">

</section> -->

<style>
    .banner {
        background-image: url(/banner.svg);
        background-repeat: no-repeat;        
        background-position: center;
    }

    @media (min-width: 1024px) {
        .banner {
            min-height: 100vh;
            background-size: contain;
        }
    }

    @media (min-width: 760px) and (max-width: 1024px) {
        .banner {
            height: 70vh;
            background-size: cover;
        }
    }

    @media (max-width: 760px) {
        .banner {
            height: 50vh;
            background-size: cover;
        }
    }

    .partners {
        min-height: 400px;
        height: auto;
    }

    .card-term {
        height: 440px;
        background-repeat: no-repeat;        
        background-position: top;
    }

    .cards-wrap {
        justify-content: space-around;
    }

    .card-ranking {
        height: 440px;
        background-repeat: no-repeat;        
        background-position: center;
        background-size: cover;
    }

    .card-honor {
        height: 640px;
        background-repeat: no-repeat;        
        background-position: center;
        background-size: contain;
    }
</style>
