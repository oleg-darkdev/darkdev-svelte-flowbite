<script>
	import '../app.css';
	import 'aos/dist/aos.css';
	import AOS from 'aos';
	import { onMount } from 'svelte';
	onMount(() => {
		AOS.init();
	});
</script>

<slot />

<style>
	:global(.card-term) {
		height: 440px;
		background-repeat: no-repeat;
		background-position: top;
	}

	:global(.cards-wrap) {
		justify-content: space-around;
	}

	:global(.card-ranking) {
		height: 440px;
		background-repeat: no-repeat;
		background-position: center;
		background-size: cover;
	}

	:global(.font-impact) {
		font-family: 'Impact';
		line-height: 1.2;
	}

	@font-face {
		font-family: 'Impact';
		font-style: normal;
		font-weight: 500;

		src: local(''), /* Super Modern Browsers */ url('/fonts/impact.woff') format('woff'),
			/* Modern Browsers */ url('/fonts/impact.ttf') format('truetype'),
			/* Safari, Android, iOS */ url('/fonts/impact.svg') format('svg'); /* Legacy iOS */
	}
</style>
