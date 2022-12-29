<script>
    import Timer from '../components/Timer.svelte';
    import Organisator from '../components/Organisator.svelte';
    import Awards from '../components/Awards.svelte';
    import BecomeOrganisator from '../components/BecomeOrganisator.svelte';

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




const socialMedia = [
    {
        link: 'https://www.facebook.com/people/Turniej-szach%C3%B3wy-%C5%BB%C3%B3%C5%82ty-s%C5%82o%C5%84/100088561723881/',
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



<section class="banner w-full pb-12 flex flex-col items-center">
  <div class="lg:mt-10 lg:bg-transparent  md:bg-transparent  bg-white w-full flex justify-center" >
        <ul class="flex flex-row  mt-4 md:space-x-8 md:mt-0 md:text-sm md:font-medium ">
            <li>
                <a href="#about" class="lg:text-3xl text-1xl block py-2 pr-2 pl-2 md:p-0 rounded md:border-0 font-impact text-dark hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-dark  ">
                    O turnieju 
                </a>
            </li> 
            <li>
                <a href="#terms" class="lg:text-3xl text-1xl  block py-2 pr-2 pl-2 md:p-0 rounded md:border-0 font-impact text-dark hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-dark  ">
                    Regulamin 
                </a>
            </li> 
            <li>
                <a href="#awards" class="lg:text-3xl text-1xl  block py-2 pr-2 pl-2 md:p-0 rounded md:border-0 font-impact text-dark hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-dark  ">
                    Nagrody
                </a>
            </li> 
            <li>
                <a href="#referee" class="lg:text-3xl text-1xl  block py-2 pr-2 pl-2 md:p-0 rounded md:border-0 font-impact text-dark hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-dark  ">
                    Sędzia
                </a>
            </li>             
        </ul>
    </div> 

    <h1 class=" lg:pt-10 md:pt-10 pt-2 text-center text-white font-impact xl:text-6xl lg:text-6xl md:text-5xl text-3xl lg:max-w-2xl lg:w-8/12 w-10/12">
        Comiesięczny turniej szachówy "Żółty Słoń"
    </h1>
</section>


<a id="about"></a>
<section class="w-full h-auto lg:pb-12 md:pb-12 pb-12 flex justify-center">
    <div data-aos="fade-up"
		data-aos-delay="100"
		data-aos-duration="1000" 
		data-aos-once="false"
		data-aos-mirror="true"  
        class="m-1 h-auto rounded-lg max-w-2xl bg-dark lg:p-8 md:p-8 p-2 flex flex-col items-center">
        <h2 class="w-full text-center text-white font-impact lg:text-5xl md:text-4xl text-4xl max-w-3xl ">
            Comiesięczny turniej szachówy "Żółty Słoń"
        </h2>
        <div class="mb-10 text-center font-bold text-light border rounded-lg border-light max-w-sm p-2 h-auto  ">
            <p class="text-gray-100 text-2xl mb-4 text-center">
                Turniej odbywa się każda środa w pierwszym tygodniu miesiąca.
            </p> 
            <p class="text-light text-gray-100 font-regular text-3xl text-center"> 
                Początek o <span class="text-light font-impact text-4xl">17:00</span> 
            </p> 
            <p class="text-light text-gray-100 text-3xl  text-center"> 
                Koniec o <span class="text-light font-impact text-4xl">19:45</span>
            </p> 
        </div>
        
        <p class="text-gray-100 text-2xl mb-4 text-center">
            W tym turnieju szachów klasycznych znajdzie się miejsce zarówno dla amatorów jak i tych bardziej zaawansowanych graczy. <span class="text-light ">Ranking graczy 1400-2000.</span>   
        </p>    
        <p class="text-gray-100 text-2xl mb-4 text-center">
            Uczestnictwo jest bezpłatne. Zgłoszenie rejestrowane drogą mailową <span class="inline-flex items-center  text-light ">yellow_elephant.pl@outlook.com</span>, oraz poprzez zapisy przed rozpoczęciem turnieju.
        </p>   
        <!-- <p class="text-gray-100 text-2xl mb-4">
            Wpisowe wynosi 5 zł i jest płatne podczas rejestracji w formularzu turniejowym przed rozpoczęciem turnieju.
        </p>     -->
        <p class="text-gray-100 text-2xl mb-4 text-center">
            Ogłoszenia o terminach dostępne są w mediach socjalnych.
        </p> 
        <div class="flex flex-row justify-center w-full mb-10">
            {#each socialMedia as media}
                <a href="{media.link}">
                    <img alt="{media.title}" src="{media.img}" 
                    class="rounded-full w-16 h-16 m-1 hover:border-white hover:border-2 ">
                </a>
            {/each}
        </div>
        <Timer/>
    </div>
    
</section>



<a id=""></a>
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
                    class="hover:border-light hover:border-4 rounded-lg m-1 "
                    style="background-image: url({organisator.logo}); width: 220px; height: 110px;"
                />
            </a>
        {/each}
    </div>

    <div class="bg-light dark:bg-gray-800  rounded-lg  shadow-md flex max-w-2xl flex-col p-4 sm:p-8 text-center">
        <BecomeOrganisator />

        <div class="flex flex-col flex-wrap w-full items-center">
            <p class="text-white text-4xl m-1 max-w-2xl text-center">
            </p>
            <div class="flex flex-row ">


            </div>
        </div>
    </div>
</section>


<a id="terms"></a>
<section class="w-full pt-12 pb-12 h-auto flex flex-col items-center bg-gray-100">
    <h2 class="w-full text-center text-dark font-impact lg:text-5xl md:text-4xl text-4xl max-w-3xl ">
        Regulamin turnieju "Żółty słoń"
    </h2>
    <div class="flex flex-row flex-wrap w-full  justify-center cards-wrap">
        <div  
        data-aos="fade-up"
		data-aos-delay="100"
		data-aos-duration="1000" 
		data-aos-once="false"
		data-aos-mirror="true" 
        style="background-image: url(/terms/terms_clocks.svg);" class="card-term items-end flex">
            <div style="height: 200px; width: 360px;" class="bg-dark text-light rounded-lg border border-light shadow-md flex max-w-sm flex-col lg:p-4 md:p-4 p-2">
                <span class="text-8xl font-impact tracking-tight text-white text-center">
                    10 min.
                </span> 
                <span class="text-4xl font-impact tracking-tight text-white text-center">
                    na jednego gracza
                </span> 
            </div>
        </div>
        <div 
         data-aos="fade-down"
		data-aos-delay="100"
		data-aos-duration="1000" 
		data-aos-once="false"
		data-aos-mirror="true" 
        style="background-image: url(/terms/terms_ranking.svg); " class="max-w-sm card-ranking items-center flex">
            <div style="height: 180px; width: 360px;" class="bg-dark text-light rounded-lg border border-light shadow-md flex max-w-sm flex-col lg:p-4 md:p-4 p-2 ">

                <span class="text-4xl font-impact tracking-tight text-white text-center">
                    Rankinging 
                </span> 
                <span class="text-7xl font-impact tracking-tight text-white text-center">
                    1400-2000
                </span> 
            </div>
        </div>

        <div 
         data-aos="fade-up"
		data-aos-delay="100"
		data-aos-duration="1000" 
		data-aos-once="false"
		data-aos-mirror="true" 
        style="background-image: url(/terms/terms_system.svg); " class="card-term items-end flex">
            <div style="height: 200px; width: 360px; justify-content: center; "  class="bg-dark text-light rounded-lg border border-light shadow-md flex  max-w-sm flex-col lg:p-4 md:p-4 p-2">
                <span class="text-6xl font-impact tracking-tight text-white text-center">
                    Szwajcarski
                </span> 
                <span class="text-4xl font-impact tracking-tight text-white text-center">
                    system rozgrywek
                </span> 
            </div>
        </div>
        
    </div>
</section>

<a id="awards"></a>
<section class="w-full pt-12 pb-12 h-auto flex flex-col items-center bg-dark">
    <Awards />
</section>


 
<a id="referee"></a>
<section class="w-full h-auto flex justify-center bg-gray-100">
    <Organisator />
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
            height: 800px;
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
</style>
