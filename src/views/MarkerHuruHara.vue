<script setup>

</script>

<template>
	<section class="marker">
		<div class="marker-item">
			<img src="@/assets/images/Marker/Huru Hara/1-Kerusuhan-Pertolongan-Pertama.jpg" alt="marker">
		</div>
		<div class="marker-item">
			<img src="@/assets/images/Marker/Huru Hara/2-Kerusuhan-Semprotan-Merica.jpg" alt="marker">
		</div>
		<div class="marker-item">
			<img src="@/assets/images/Marker/Huru Hara/3-Kerusuhan-Kawat-Silet.jpg" alt="marker">
		</div>
		<div class="marker-item">
			<img src="@/assets/images/Marker/Huru Hara/4-Kerusuhan-Pistol-Setrum.jpg" alt="marker">
		</div>
		<div class="marker-item">
			<img src="@/assets/images/Marker/Huru Hara/5-Kerusuhan-Tongkat-Pemukul.jpg" alt="marker">
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
