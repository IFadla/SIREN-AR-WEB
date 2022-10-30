<script setup>

</script>

<template>
	<section class="marker">
		<div class="marker-item">
			<img src="@/assets/Marker/Bencana-Alam/1-Banjir-Rompi-Pelampung.jpg" alt="marker">
		</div>
		<div class="marker-item">
			<img src="@/assets/Marker/Bencana-Alam/2-Banjir-Power-Bank.jpg" alt="marker">
		</div>
		<div class="marker-item">
			<img src="@/assets/Marker/Bencana-Alam/3-Banjir-Botol-Air.jpg" alt="marker">
		</div>
		<div class="marker-item">
			<img src="@/assets/Marker/Bencana-Alam/4-Banjir-Genset.jpg" alt="marker">
		</div>
		<div class="marker-item">
			<img src="@/assets/Marker/Bencana-Alam/5-Banjir-Lampu-Darurat.jpg" alt="marker">
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
}

.marker-item img {
	width: 100%;
}
</style>
