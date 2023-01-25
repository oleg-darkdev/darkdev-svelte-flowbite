<script>
  import '../app.css';
  import 'aos/dist/aos.css';
  import AOS from 'aos';
  import { onMount } from 'svelte';
	onMount(() => {
		AOS.init();
                startTimer();
	});

const tournamentDay = '1/',
      tournamentMonth = '02/';

// Timer
async function startTimer() {
  const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

  let today = new Date(),
      dd = String(today.getDate()).padStart(2, "0"),
      mm = String(today.getMonth() + 1).padStart(2, "0"),
      yyyy = today.getFullYear(),
      nextYear = yyyy + 1,
      dayMonth = tournamentMonth.concat(tournamentDay),
      tournament = dayMonth + yyyy;
  
  today = mm + "/" + dd + "/" + yyyy;
  if (today > tournament) {
    tournament = dayMonth + nextYear;
  }
  //end
  
  const countDown = new Date(tournament).getTime(),
      x = setInterval(function() {    

        const now = new Date().getTime(),
              distance = countDown - now;

        document.getElementById("days").innerText = Math.floor(distance / (day)),
          document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
          document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
          document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);

        if (distance < 0) {
          document.getElementById("headline").innerText = "Turniej odbędzie się dzisiaj!";
          document.getElementById("countdown").style.display = "none";
          clearInterval(x);
        }
        //seconds
      }, 0);
}
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
    
    src: local(''),
        /* Super Modern Browsers */ url('/fonts/impact.woff') format('woff'),
        /* Modern Browsers */ url('/fonts/impact.ttf') format('truetype'),
        /* Safari, Android, iOS */ url('/fonts/impact.svg') format('svg'); /* Legacy iOS */
}

</style>