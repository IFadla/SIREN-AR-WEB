<script setup>
import { ref } from 'vue'

const isLoading1 = ref(false);
const isLoading2 = ref(false);
const isLoading3 = ref(false);
const isLoading4 = ref(false);
const isLoading5 = ref(false);

function onImgLoad1 () {
	isLoading1.value = true;
}

function onImgLoad2 () {
	isLoading2.value = true;
}

function onImgLoad3 () {
	isLoading3.value = true;
}

function onImgLoad4 () {
	isLoading4.value = true;
}

function onImgLoad5 () {
	isLoading5.value = true;
}
</script>

<template>
	<section class="marker">
		<div class="marker-item">
			<div v-if="!isLoading1" class="marker-item-status"><p>Loading...</p></div>
			<img :class="[!isLoading1 ? 'marker-item-loading' : '']" src="@/assets/Marker/Bencana-Alam/1-Banjir-Rompi-Pelampung.jpg" @load="onImgLoad1" alt="marker">
		</div>
		<div class="marker-item">
			<div v-if="!isLoading2" class="marker-item-status"><p>Loading...</p></div>
			<img :class="[!isLoading2 ? 'marker-item-loading' : '']" src="@/assets/Marker/Bencana-Alam/2-Banjir-Power-Bank.jpg" @load="onImgLoad2" alt="marker">
		</div>
		<div class="marker-item">
			<div v-if="!isLoading3" class="marker-item-status"><p>Loading...</p></div>
			<img :class="[!isLoading3 ? 'marker-item-loading' : '']" src="@/assets/Marker/Bencana-Alam/3-Banjir-Botol-Air.jpg" @load="onImgLoad3" alt="marker">
		</div>
		<div class="marker-item">
			<div v-if="!isLoading4" class="marker-item-status"><p>Loading...</p></div>
			<img :class="[!isLoading4 ? 'marker-item-loading' : '']" src="@/assets/Marker/Bencana-Alam/4-Banjir-Genset.jpg" @load="onImgLoad4" alt="marker">
		</div>
		<div class="marker-item">
			<div v-if="!isLoading5" class="marker-item-status"><p>Loading...</p></div>
			<img :class="[!isLoading5 ? 'marker-item-loading' : '']" src="@/assets/Marker/Bencana-Alam/5-Banjir-Lampu-Darurat.jpg" @load="onImgLoad5" alt="marker">
		</div>
	</section>
</template>

<style scoped>
.marker {
	width: 100%;
	height: 100%;
	padding: 2rem;
	display: flex;
	flex-direction: column;
	gap: 2rem;
	/* border: 1px solid salmon; */
	overflow-y: scroll;
}

.marker .marker-item {
	width: 100%;
	/* border: 1px solid green; */
	padding: 1rem;
	background-color: var(--c-white-1);
	border-radius: 1rem;
	position: relative;
}

.marker .marker-item-status {
	position: absolute;
	left: 0; top: 0; right: 0; bottom: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	/* border: 1px solid magenta; */
}

.marker-item img {
	width: 100%;
}

.marker-item img.marker-item-loading {
	opacity: .3;
}
</style>
