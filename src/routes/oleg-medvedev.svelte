<script>
    import Footer from "../components/Footer.svelte";
</script>

<svelte:head>
	<title>Oleg Medvedev</title>
</svelte:head>

<main class="bg-gray-100">
	<div class="flex justify-start w-full lg:p-10 md:p-10">
		<h1
			class="text-center bg-light  max-w-2xl rounded-lg lg:p-10 p-6 text-dark font-impact lg:text-5xl md:text-4xl text-4xl "
		>
			Informacje o organizatorze turnieju «Żółty słoń»
		</h1>
	</div>

	<section class="w-full h-auto flex flex-col justify-center mb-10  ">
		<div class="flex w-full flex-row flex-wrap-reverse justify-center">
			<div
				class="flex flex-col lg:w-4/12 md:w-4/12 w-full bg-light lg:p-6 md:p-6 p-4 rounded-lg items-center cards-wrap z-10"
			>
				<div class="mb-6">
					<p class="text-dark text-center font-impact w-full text-4xl">Cześć, nazywam się</p>
					<h2 class="w-full text-center text-dark font-impact text-7xl max-w-3xl ">
						Oleg Medvedev
					</h2>
				</div>
				<div
					data-aos="fade-up"
					data-aos-delay="100"
					data-aos-duration="1000"
					data-aos-once="false"
					data-aos-mirror="true"
					style="background-image: url(/organisator/champion.svg);"
					class="card-term items-end flex "
				>
					<div
						style="height: 200px; width: 360px;"
						class="bg-dark text-light rounded-lg border border-light shadow-md flex max-w-sm flex-col lg:p-4 md:p-4 p-2"
					>
						<span class="text-8xl font-impact tracking-tight text-white text-center"> Mistrz </span>
						<span class="text-4xl -mt-2 font-impact tracking-tight text-white text-center">
							Białorusi
						</span>
					</div>
				</div>
				<div
					data-aos="fade-down"
					data-aos-delay="100"
					data-aos-duration="1000"
					data-aos-once="false"
					data-aos-mirror="true"
					style="background-image: url(/organisator/ranking.svg); "
					class="max-w-sm card-ranking items-center flex"
				>
					<div
						style="height: 180px; width: 360px;"
						class="bg-dark text-light rounded-lg border border-light shadow-md flex max-w-sm flex-col lg:p-4 md:p-4 p-2 "
					>
						<span class="text-4xl font-impact tracking-tight text-white text-center">
							Nagrod turniejowuch
						</span>
						<span class="text-8xl font-impact tracking-tight text-white text-center"> 38 </span>
					</div>
				</div>
			</div>

			<div class="lg:-ml-40 md:-ml-40 flex photo-wrap items-start">
				<img
					data-aos="zoom-in"
					data-aos-delay="100"
					data-aos-duration="1000"
					data-aos-once="false"
					data-aos-mirror="true"
					src="./organisator/avatar_champion.png"
					class="photo-card"
					alt="Photo organisator"
				/>
			</div>
		</div>
	</section>

	<section class="w-full h-auto flex flex-col justify-center ">
		<div class="flex w-full flex-row flex-wrap justify-center">
			<div class="lg:-mr-40 md:-mr-40 flex photo-wrap items-end">
				<img
					data-aos="zoom-in"
					data-aos-delay="100"
					data-aos-duration="1000"
					data-aos-once="false"
					data-aos-mirror="true"
					src="./organisator/avatar_bussines.png"
					class="photo-card"
					alt="Photo organisator"
				/>
			</div>

			<div
				class="flex flex-col lg:w-4/12 md:w-4/12 w-full bg-light lg:p-6 md:p-6 p-4 rounded-lg items-center cards-wrap z-10"
			>
				<div
					data-aos="fade-down"
					data-aos-delay="100"
					data-aos-duration="1000"
					data-aos-once="false"
					data-aos-mirror="true"
					style="background-image: url(/terms/terms_ranking.svg); "
					class="max-w-sm card-ranking items-center flex"
				>
					<div
						style="height: 180px; width: 360px;"
						class="bg-dark text-light rounded-lg border border-light shadow-md flex max-w-sm flex-col lg:p-4 md:p-4 p-2 "
					>
						<span class="text-4xl font-impact tracking-tight text-white text-center">
							Rankinging FIDE
						</span>
						<span class="text-8xl font-impact tracking-tight text-white text-center"> 1954 </span>
					</div>
				</div>

				<div
					data-aos="fade-up"
					data-aos-delay="100"
					data-aos-duration="1000"
					data-aos-once="false"
					data-aos-mirror="true"
					style="background-image: url(/terms/terms_clocks.svg);"
					class="card-term items-end flex"
				>
					<div
						style="height: 200px; width: 360px;"
						class="bg-dark text-light rounded-lg border border-light shadow-md flex max-w-sm flex-col lg:p-4 md:p-4 p-2"
					>
						<p class="flex flex-row justify-center">
							<span class="text-8xl font-impact tracking-tight text-white text-center"> 8 </span>
							<span class="pl-6 text-8xl font-impact tracking-tight text-white text-center">
								lat
							</span>
						</p>

						<span class="text-4xl font-impact tracking-tight text-white text-center">
							kariery sportowej
						</span>
					</div>
				</div>
			</div>
		</div>
	</section>

	<section
		class="w-full flex justify-center items-center flex-row flex-wrap lg:pt-12 md:pt-12 pt-4 md:pb-12 lg:pb-12"
	>
		<div
			style=""
			class="contact flex lg:w-8/12 md:w-10/12 w-full flex-col bg-light rounded-lg lg:p-8 md:p-8 p-4 z-0"
		>
			<h2 class="w-full text-dark font-impact text-7xl max-w-3xl ">Kontakt</h2>
			<p class="text-dark text-4xl m-1 max-w-4xl">
				Zapraszam na indywidualne i grupowe zajęcia szachowe.
			</p>

			<div class="flex flex-row w-full">
				<a href="https://www.facebook.com/hulio.mondre">
					<img
						alt="facebook_profile"
						src="./social/org_contact_facebook.svg"
						class="rounded-full w-40 h-40 m-1  "
					/>
				</a>
				<!-- <a href="https://www.facebook.com/hulio.mondre">
					<img
						alt="github_profile"
						src="./social/org_contact_github.svg"
						class="rounded-full w-40 h-40 m-1  "
					/>
				</a> -->
				<a href="https://www.facebook.com/hulio.mondre">
					<img
						alt="linkedin_profile"
						src="./social/org_contact_linkedin.svg"
						class="rounded-full w-40 h-40 m-1  "
					/>
				</a>
			</div>
		</div>

		<div class="lg:-ml-60 md:-ml-60 -mt-10 flex mini-photo-wrap items-end z-10">
			<img
				data-aos="zoom-in"
				data-aos-delay="100"
				data-aos-duration="1000"
				data-aos-once="false"
				data-aos-mirror="true"
				src="./organisator/avatar_dream.png"
				class="photo-card"
				alt="Photo organisator"
			/>
		</div>
	</section>


	<section
		class="w-full flex justify-center items-center flex-row flex-wrap lg:pt-12 md:pt-12 pt-4 md:pb-12 lg:pb-12"
	>

    </section>

	<section
		class="w-full flex justify-center items-center flex-row flex-wrap lg:pt-12 md:pt-12 pt-4 md:pb-12 lg:pb-12"
	>

    </section>
</main>

<Footer/>

<style>
	@media (max-width: 480px) {
		h1 {
			margin-left: 0;
			margin: 2%;
		}
		.photo-wrap {
			height: 40vh;
			margin-bottom: -40px;
			z-index: 20;
		}
		.contact {
			height: 450px;
		}
	}
	@media (min-width: 480px) {
		h1 {
			margin-left: 18%;
		}
		.photo-wrap {
			height: 130vh;
		}

		.contact {
			height: 400px;
		}
		.mini-photo-wrap {
			width: 600px;
		}
	}
	.photo-card {
		max-height: 900px;
		z-index: 0;
	}
</style>
