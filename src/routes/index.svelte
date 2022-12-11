<script>
    import { Button } from 'flowbite-svelte';


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
</script>


<svelte:head>
	<title>Żółty słoń</title>
</svelte:head>



<section class="banner w-full pb-12 flex justify-center">
    <h1 class="lg:pt-32 md:pt-14 pt-14 text-center text-white anton-font lg:text-6xl md:text-5xl text-3xl lg:max-w-2xl w-8/12">Comiesięczny turniej szachówy "Żółty słoń"</h1>
</section>

<section class="w-full h-auto pb-12 pt-12 flex justify-center">
    <div class="h-auto rounded-lg max-w-2xl bg-dark p-8">
        <h2 class="w-full text-center text-white anton-font lg:text-5xl md:text-4xl text-4xl max-w-3xl ">
            Turniej Żółty słoń"
        </h2>
        <p class="text-light text-2xl m-1">
            Comiesięczny turniej szachów klasycznych "Żółty słoń"
        </p>
        <p class="text-light text-2xl m-1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>        <!-- <ul class="list-disc list-inside text-light">
            <li class="text-light text-2xl">
                Design
            </li> 
        </ul> -->
    </div>
</section>

<section class="partners bg-dark w-full pt-12 pb-12 flex flex-col items-center">
    <h2 class="w-full text-center text-white anton-font lg:text-5xl md:text-4xl text-4xl max-w-3xl ">
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
    <h2 class="w-full text-center text-white anton-font lg:text-5xl md:text-4xl text-4xl max-w-3xl ">
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
        <p class="text-white text-4xl m-1 anton-font max-w-2xl text-center">
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



<section class="w-full pt-12 pb-12 h-auto flex flex-col items-center bg-white">
    <h2 class="w-full text-center text-dark anton-font lg:text-5xl md:text-4xl text-4xl max-w-3xl ">
        Regulamin turnieju "Żółty słoń"
    </h2>
    <div class="flex flex-row w-full  justify-center cards-wrap">
        <div style="background-image: url(/terms/terms_clocks.svg);" class="card-term items-end flex">
            <div style="height: 200px; width: 380px;" class="bg-dark text-light rounded-lg border border-light shadow-md flex max-w-sm flex-col p-4 sm:p-6">
                <span class="text-8xl anton-font tracking-tight text-white text-center">
                    10 min.
                </span> 
                <span class="text-4xl anton-font tracking-tight text-white text-center">
                    na jednego gracza
                </span> 
            </div>
        </div>
        <div style="background-image: url(/terms/terms_ranking.svg); " class="max-w-sm card-ranking items-center flex">
            <div style="height: 180px; width: 420px;" class="bg-dark text-light rounded-lg border border-light shadow-md flex max-w-sm flex-col p-4 sm:p-6">

                <span class="text-4xl anton-font tracking-tight text-white text-center">
                    Rankinging 
                </span> 
                <span class="text-7xl anton-font tracking-tight text-white text-center">
                    1400-2000
                </span> 
            </div>
        </div>

        <div style="background-image: url(/terms/terms_system.svg); " class="card-term items-end flex">
            <div style="height: 200px; width: 380px;"  class="bg-dark text-light rounded-lg border border-light shadow-md flex max-w-sm flex-col p-4 sm:p-6">
                <span class="text-7xl anton-font tracking-tight text-white text-center">
                    Szwajcarski
                </span> 
                <span class="text-4xl anton-font tracking-tight text-white text-center">
                    system rozgrywek
                </span> 
            </div>
        </div>
        
    </div>
</section>


<section class="w-full pt-12 pb-12 h-auto flex flex-col items-center bg-dark">
    <h2 class="w-full text-center text-white anton-font lg:text-5xl md:text-4xl text-4xl max-w-3xl ">
        Nagrody turnieju "Żółty słoń"
    </h2>
    <div   class="row flex-wrap cards-wrap">
        <div style="background-image: url(/honors/honors_first.svg);" class="card-honor items-end flex max-w-sm">
            <div style="height: 200px; width: 100%;" class="bg-dark text-light rounded-lg border border-light shadow-md flex max-w-sm flex-col p-4 sm:p-6">
                <span class="text-6xl anton-font tracking-tight text-white text-center">
                    1 miejsce
                </span> 
                <span class="text-4xl anton-font tracking-tight text-white text-center">
                    na jednego gracza
                </span> 
            </div>
        </div>
    </div>
</section>

<section class="w-full pt-12 pb-12 h-auto">

</section>

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
