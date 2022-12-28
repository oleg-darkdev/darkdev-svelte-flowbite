<script>
    const organisatoValues = [
    'Kandydat na mistrza sportu',
    'Mistrz Białorusi 2005-2006 r.',
    'Wielokrotny mistrz międzynarodowych turniejów szachowych. ',
    ];
</script>

<div class="bg-gray-100 max-w-2xl pt-12 pb-12 flex flex-col items-center">
    <img 
    data-aos="zoom-in"
    data-aos-delay="100"
    data-aos-duration="1000" 
    data-aos-once="false"
    data-aos-mirror="true" 
    src="./avatar_org.png" class="w-full -mb-10" alt="Photo organisator">
    <div class="h-auto rounded-lg max-w-sm  bg-dark pt-8 pb-8 pr-4 pl-4">
        <h2 class="w-full text-center text-white font-impact lg:text-5xl md:text-4xl text-4xl ">
            Sędzia i Koordynator projektu
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
        <div class="mb-4 flex justify-center">
        <button type="button" class="m-2 group text-center font-medium focus:ring-4 focus:outline-none inline-flex items-center justify-center px-6 py-3.5 text-base text-light hover:text-dark border border-light hover:bg-yellow-300 focus:ring-yellow-300 rounded-lg">
            Wszystkie dane
        </button>
        </div> 
        <div class="flex flex-row justify-center w-full">
                <a href="https://www.facebook.com/hulio.mondre">
                    <img alt="facebook_profile" src="./social/facebook.svg" 
                    class="rounded-full w-16 h-16 m-1 hover:border-white hover:border-2 ">
                </a>
                <a href="https://www.linkedin.com/in/oleg-darkdev">
                    <img alt="linkedin_profile" src="./social/linkedin.svg" 
                    class="rounded-full w-16 h-16 m-1 hover:border-white hover:border-2 ">
                </a>
        </div>
    </div>
</div>