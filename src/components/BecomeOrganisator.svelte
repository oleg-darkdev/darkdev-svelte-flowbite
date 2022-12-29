<script>
    
    let contact = false;
</script>

{#if !contact}
  <h5 class="mb-2 text-3xl font-impact text-gray-900 dark:text-white">
        Chciałbyś być jednym z organizatorów lub sponsorów?
  </h5> 
  <div class="justify-center items-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
        <button type="button" on:click={() => contact = !contact} class="m-2 group text-center font-medium focus:ring-4 focus:outline-none inline-flex items-center justify-center px-6 py-3.5 text-base text-light hover:text-dark border border-light hover:bg-gray-100 bg-dark focus:ring-yellow-300 rounded-lg">
            Dla organizatorów
        </button>
        <button type="button" on:click={() => contact = !contact} class="m-2 group text-center font-medium focus:ring-4 focus:outline-none inline-flex items-center justify-center px-6 py-3.5 text-base text-light hover:text-dark border border-light hover:bg-gray-100 bg-dark focus:ring-yellow-300 rounded-lg">
            Dla sponsorów
        </button>
    </div>
{:else}
    <div class="bg-dark bg-dark pt-4 pb-4 pr-4 pl-4 rounded-lg max-w-2xl flex flex-col items-center">

    <!-- <div class="h-auto rounded-lg max-w-sm  > -->
        <h2 class="w-full text-center text-white font-impact lg:text-5xl md:text-4xl text-4xl ">
            Należy skontaktować się z koordynatorem projektu
        </h2>
        <div class="flex flex-row justify-center w-full m-6">
                <a href="https://www.facebook.com/hulio.mondre">
                    <img alt="facebook_profile" src="./social/facebook.svg" 
                    class="rounded-full w-16 h-16 m-1 hover:border-white hover:border-2 ">
                </a>
                <a href="https://www.linkedin.com/in/oleg-darkdev">
                    <img alt="linkedin_profile" src="./social/linkedin.svg" 
                    class="rounded-full w-16 h-16 m-1 hover:border-white hover:border-2 ">
                </a>
        </div>
        <p class="text-gray-100 text-2xl mb-4 text-center">
            lub za pomocą poczty elektronicznej  <span class="inline-flex items-center  text-light  hover:no-underline">yellow_elephant.pl@outlook.com</span> 
        </p>
        
    </div>
{/if}
