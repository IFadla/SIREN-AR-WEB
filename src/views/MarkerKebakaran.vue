<script setup>

</script>

<template>
	<section class="marker">
		<div class="marker-item">
			<img src="@/assets/images/Marker/Kegagalan Teknis/1-Kebakaran-APAR.jpg" alt="marker">
		</div>
		<div class="marker-item">
			<img src="@/assets/images/Marker/Kegagalan Teknis/2-Kebakaran-Pendeteksi-Asap.jpg" alt="marker">
		</div>
		<div class="marker-item">
			<img src="@/assets/images/Marker/Kegagalan Teknis/3-Kebakaran-Alarm-Kebakaran.jpg" alt="marker">
		</div>
		<div class="marker-item">
			<img src="@/assets/images/Marker/Kegagalan Teknis/4-Kebakaran-Alat-Penyiram.jpg" alt="marker">
		</div>
		<div class="marker-item">
			<img src="@/assets/images/Marker/Kegagalan Teknis/5-Kebakaran-Keran-Kebakaran.jpg" alt="marker">
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
