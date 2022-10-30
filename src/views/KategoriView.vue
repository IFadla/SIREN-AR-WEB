<script setup>
import { RouterLink } from 'vue-router'
import { ref } from 'vue'
import Navigation from "../components/Navigation.vue";

const isTab1 = ref(true)
const isTab2 = ref(false)
const isTab3 = ref(false)

function toggleTab1() {
	isTab1.value = !isTab1.value
	isTab2.value = false
	isTab3.value = false
}

function toggleTab2() {
	isTab1.value = false
	isTab2.value = !isTab2.value
	isTab3.value = false
}

function toggleTab3() {
	isTab1.value = false
	isTab2.value = false
	isTab3.value = !isTab3.value
}
</script>

<template>	

	<header class="header">
		<div @click="toggleTab1" :class="[isTab1 ? 'header-item header-item--active' : 'header-item']">
			<p>Bencana alam</p>
		</div>
		<div @click="toggleTab2" :class="[isTab2 ? 'header-item header-item--active' : 'header-item']">
			<p>Kegagalan Teknis</p>
		</div>
		<div @click="toggleTab3" :class="[isTab3 ? 'header-item header-item--active' : 'header-item']">
			<p>Huru-Hara</p>
		</div>
	</header>

	<section v-if="isTab1" class="kategori kategori--bencana-alam">
		<RouterLink to="/marker-banjir">
			<div class="kategori-item">
				<img src="@/assets/images/banjir-bg.png" alt="banjir-bg" class="kategori-item-background">
				
				<div class="kategori-item-information">
					<p>Banjir</p>
					<p>adalah keadaan dimana suatu daerah tergenang<br />oleh air dalam jumlah yang besar.</p>
				</div>

				<div class="kategori-item-total">
					<p>5</p>
				</div>
			</div>
		</RouterLink>
	</section>

	<section v-if="isTab2" class="kategori kategori--kegagalan-teknis">
		<RouterLink to="/marker-kebakaran">
			<div class="kategori-item">
				<img src="@/assets/images/kebakaran-bg.png" alt="kebakaran-bg" class="kategori-item-background">
				
				<div class="kategori-item-information">
					<p>Kebakaran</p>
					<p>suatu nyala api, baik kecil atau besar pada tempat<br />yang tidak kita kehendaki, dan merugikan.</p>
				</div>

				<div class="kategori-item-total">
					<p>5</p>
				</div>
			</div>
		</RouterLink>
	</section>

	<section v-if="isTab3" class="kategori kategori--huru-hara">
		<RouterLink to="/marker-huru-hara">
			<div class="kategori-item">
				<img src="@/assets/images/huru-hara-bg.png" alt="banjir-bg" class="kategori-item-background">
				
				<div class="kategori-item-information">
					<p>Kerusuhan</p>
					<p>Terjadi kala sekelompok orang berkumpul bersama<br />untuk melakukan tindak kekerasan.</p>
				</div>

				<div class="kategori-item-total">
					<p>5</p>
				</div>
			</div>
		</RouterLink>
	</section>
	<footer class="footer">
    <Navigation />
  </footer>
</template>

<style scoped>
.header {
	display: flex;
	/* border: 1px solid magenta; */
	border-bottom: 2px solid var(--c-white-1);
}

.header .header-item {
	flex: 1;
	text-align: center;
	/* border: 1px solid magenta; */
	padding: 1rem;
	color: var(--c-black-3);
	cursor: pointer;
}

.header .header-item:nth-child(1).header-item--active {
	background-color: var(--c-green-2);
	color: var(--c-green-1);
}

.header .header-item:nth-child(2).header-item--active {
	background-color: var(--c-orange-2);
	color: var(--c-orange-1);
}

.header .header-item:nth-child(3).header-item--active {
	background-color: var(--c-purple-2);
	color: var(--c-purple-1);
}

.header .header-item:nth-child(1) {
	padding: 1rem 1rem 1rem 2rem;
	border-right: 2px solid var(--c-white-1);
}

.header .header-item:nth-child(3) {
	padding: 1rem 2rem 1rem 1rem;
	border-left: 2px solid var(--c-white-1);
}

.kategori {
	padding: 2rem;
	/* background-color: black; */
	/* border: 1px solid magenta; */
}

.kategori a {
	text-decoration: none;
	color: var(--c-black-1);
}

.kategori--bencana-alam .kategori-item {
	border: 1px solid var(--c-green-1);
	border-radius: 1rem;
	padding: 2rem;
	position: relative;
	background-color: var(--c-green-2);
}

.kategori--kegagalan-teknis .kategori-item {
	border: 1px solid var(--c-orange-1);
	border-radius: 1rem;
	padding: 2rem;
	position: relative;
	background-color: var(--c-orange-2);
}

.kategori--huru-hara .kategori-item {
	border: 1px solid var(--c-purple-1);
	border-radius: 1rem;
	padding: 2rem;
	position: relative;
	background-color: var(--c-purple-2);
}

.kategori-item .kategori-item-background {
	height: 100%;
	position: absolute;
	top: 0; right: 0;
	opacity: .2;
}

.kategori-item .kategori-item-information {
	display: flex;
	flex-direction: column;
	gap: .4rem;
}

.kategori-item .kategori-item-information p:nth-child(1) {
	font-weight: 500;
	font-size: 1.2rem;
}

.kategori-item .kategori-item-information p:nth-child(2) {
	color: var(--c-black-3);
}

.kategori--bencana-alam .kategori-item .kategori-item-total {
	position: absolute;
	background-color: var(--c-green-1);
	padding: .25rem .6rem;
	border-radius: .6rem;
	font-size: .8rem;
	color: var(--c-white-1);
	top: 0; right: 0;
	margin: 1rem;
}

.kategori--kegagalan-teknis .kategori-item .kategori-item-total {
	position: absolute;
	background-color: var(--c-orange-1);
	padding: .25rem .6rem;
	border-radius: .6rem;
	font-size: .8rem;
	color: var(--c-white-1);
	top: 0; right: 0;
	margin: 1rem;
}

.kategori--huru-hara .kategori-item .kategori-item-total {
	position: absolute;
	background-color: var(--c-purple-1);
	padding: .25rem .6rem;
	border-radius: .6rem;
	font-size: .8rem;
	color: var(--c-white-1);
	top: 0; right: 0;
	margin: 1rem;
}

.footer {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  /* border: 1px solid black; */
}
</style>