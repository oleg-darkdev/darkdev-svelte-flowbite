<script>
    
const honorsList = [

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
        img: '/honors/honors_first.svg',
        title: '1 miejsce',
        awards: [
            'Medal pamiątkowa',
            'Dyplom',
            'Przedmiot dla domu wydrukowany w 3D',
        ],
        hackerspace: true
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


</script>

<h2 class="w-full text-center text-white font-impact lg:text-5xl md:text-4xl text-4xl max-w-3xl ">
    Nagrody turnieju "Żółty słoń"
</h2>
<div   class="flex flex-row flex-wrap flex-wrap justify-center ">
    {#each honorsList as honor}
    
        <div style="background-image: url({honor.img}); " class="card-award m-2 -mt-10 items-end flex max-w-sm">
            <div style="min-height: 200px; height: auto; width: 100%; " class=" bg-dark text-light rounded-lg border border-light shadow-md flex max-w-sm flex-col p-4 sm:p-6">
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
                {#if honor.hackerspace}
                <span class="text-1xl mt-6 tracking-tight text-white text-center">
                    Serdeczne podziękowania dla  <a class="inline-flex items-center hover:underline font-normal text-light underline hover:no-underline" href="https://44hackerspace.vercel.app/">44Hackerspace</a> za udostępnienie sprzętu do druku 3D.
                </span> 
                
                {/if}
            </div>

        </div>
    {/each}
</div>


<style>
    .card-award {
        height: 640px;
        background-repeat: no-repeat;        
        background-position: center;
        background-size: contain;
    }
</style>