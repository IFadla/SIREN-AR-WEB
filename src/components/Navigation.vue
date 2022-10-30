<script setup>
	import { RouterLink } from 'vue-router'
</script>

<template>
	<nav class="nav">
		<RouterLink to="/">
			<div class="nav-item">
				<div class="nav-item-icon">
					<font-awesome-icon :icon="['fa', 'book']" />
				</div>
				<p class="nav-item-title">Kategori</p>
			</div>
		</RouterLink>

		<RouterLink to="/download">
			<div class="nav-item">
				<div class="nav-item-icon">
					<font-awesome-icon :icon="['fa', 'cloud-arrow-down']" />
				</div>
				<p class="nav-item-title">Download</p>
			</div>
		</RouterLink>
	</nav>
</template>

<style scoped>
.nav {
	/* border: 1px solid magenta; */
	display: flex;
}

.nav a {
	flex: 1;
	color: var(--c-black-3);
	text-decoration: none;
}

.nav a.router-link-exact-active {
	color: var(--c-orange-1);
}

.nav a .nav-item {
	/* border: 1px solid magenta; */
	border-radius: 1rem 1rem 0 0;
	padding: .5rem 2rem;
	text-align: center;
	font-size: .8rem;
	background-color: var(--c-white-1);

	display: flex;
	flex-direction: column;
	gap: .2rem;
}

.nav-item .nav-item-icon {
	font-size: 1rem;
}
</style>
