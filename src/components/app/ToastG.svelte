<script>
      import { Toast, Button } from 'flowbite-svelte';
  import { slide } from 'svelte/transition';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();


  let counter = 6;

  function trigger() {
    showG = true;
    counter = 6;
    dispatch('message', {
        text: 'Hello!'
    })
    
    timeout();
  }

  function timeout() {
    if (--counter > 0)
      return setTimeout(timeout, 1000);
    showG = false;
  }


  export let text, showG;
</script>


<div class="flex gap-10 flex-col">
  <Button on:click={trigger} class="my-3">{text}</Button>
  <Toast simple transition={slide} bind:open={showG}>
    <svelte:fragment slot="icon">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    </svelte:fragment>
    Autohide in {counter}s.
  </Toast>
</div>