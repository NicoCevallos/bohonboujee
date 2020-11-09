<script>
	import HeroTitle from "../components/HeroTitle.svelte";
	import TitleBackground from "../components/TitleBackground.svelte";
</script>

<style>
	.textContainer {
		width: 100%;
	}

	p {
		font-family: Prompt;
		font-weight: 700;
		font-size: 24px;
		line-height: 36px;
		letter-spacing: 0.03em;
		margin-top: 0px;
		margin-bottom: 36px;
	}
	.golden {
		color: #bda37b;
	}
	@media (max-width: 767.88px) {
		.title {
			display: none;
		}
		.p {
			margin: 23px 23px 0 32px;
		}
	}
	@media (min-width: 768px) {
		.textContainer {
			width: 89%;
			margin: 82px auto;
			max-width: 1620px;
			display: flex;
		}
		.title {
			width: 35%;
			min-width: 310px;
		}
		.p {
			width: 65%;
		}
	}
</style>

<HeroTitle
	desktopImgSrc="/images/hero/about_desktop.png"
	mobileImgSrc="/images/hero/about_mobile.png"
	title="About Steoh"
	hideTitleOnDesktop="about steoh"
/>

<div class="textContainer">
	<div class="title">
		<TitleBackground>About Steoh</TitleBackground>
	</div>

	<div class="p">
		<p>
			Stephanie Cogan was born in England and moved to New Jersey with her
			family when she was in 1st grade. Since she was little, she has always
			loved fashion. Often found playing dress up or styling her Barbies!
		</p>

		<p>
			She grew up in Chatham, N.J. and attended the University of Tampa in
			Florida where she received a degree in elementary education and met the
			love of her life Matt. They dated for 8 years until he finally popped the
			question and they married in 2016.
		</p>

		<p class="golden">
			The best day of Steph and Matt’s life was when she gave birth to their
			son, Bishop in October 2018. It was then that she realized she wanted to
			have more time with her baby boy and to make a change to be a better mommy
			and wife!
		</p>

		<p>
			Boho and Boujee launched in March 2020. At the time, she only offered
			clothing from Maverick the Collection, motivated to be able to style and
			dress women of all shapes and sizes at an appropriate price point! Her
			main goal, however, is to have women looking and feeling beautiful in the
			skin they’re in. No one should have to spend lots of money to feel good.
			Steph realized that accessories can make an outfit pop! It was in the
			summer of 2020 that she realized she wanted more and wanted to expand!
		</p>

		<p>
			All accessories and gifts are hand picked by Steph herself. She trials
			them and only finds things that she thinks her Boujee babes will love!
		</p>

		<p class="golden">
			She thanks you for being here and supporting her small business and
			passion for fashion!
		</p>
	</div>
</div>
