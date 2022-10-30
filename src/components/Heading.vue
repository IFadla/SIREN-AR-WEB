<script setup>
import {useRoute, RouterLink} from 'vue-router'
import {computed, ref} from 'vue'

const pathTitle = ref("")
const pathTitleBack = ref("")
const pathTitleBackDetail = ref("")
const isBack = ref(false)
const route = useRoute();

const path = computed(() => {
	if (route.path == '/') {
		return pathTitle.value = 'Kategori'
	} else {
		return pathTitle.value = 'Download'
	}
})

const pathBack = computed(() => {
  if (route.path == '/marker-banjir' || route.path == '/marker-kebakaran' || route.path == '/marker-huru-hara') {
		return isBack.value = true
	} else {
		return isBack.value = false
	}
})

const pathBackTitle = computed(() => {
  if (route.path == '/marker-banjir') {
		return pathTitleBack.value = 'Bencana Alam'
	} else if (route.path == '/marker-kebakaran') {
		return pathTitleBack.value = 'Kegagalan Teknis'
	} else if (route.path == '/marker-huru-hara') {
		return pathTitleBack.value = 'Huru-Hara'
	}
})

const pathBackTitleDetail = computed(() => {
  if (route.path == '/marker-banjir') {
		return pathTitleBack.value = 'Banjir'
	} else if (route.path == '/marker-kebakaran') {
		return pathTitleBack.value = 'Kebakaran'
	} else if (route.path == '/marker-huru-hara') {
		return pathTitleBack.value = 'Kerusuhan'
	}
})
</script>

<template>
	<div v-if="!pathBack" class="heading">
		<img src="@/assets/images/logo-siren-ar.png" alt="logo-siren-ar" class="heading-logo">
		<p class="heading-title">{{ path }}</p>
	</div>
	
	<div v-if="pathBack" class="heading heading--marker">
		<RouterLink to="/">
			<div class="heading-back">
				<font-awesome-icon :icon="['fa', 'chevron-left']" />
			</div>
		</RouterLink>

		<div class="heading-title-back">
			<p>{{ pathBackTitle }}</p>
			<p>{{ pathBackTitleDetail }}</p>
		</div>
	</div>
</template>

<style scoped>
.heading {
	/* border: 1px solid magenta; */
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 1rem 2rem;
	border-bottom: 2px solid var(--c-white-1);
}

.heading--marker {
	padding: 0 2rem;
	height: 75px;
}

.heading .heading-logo {
	width: 2.5rem;
}

.heading .heading-title {
	font-weight: 500;
	font-size: 1.2rem;
}

.heading a {
	text-decoration: none;
	color: var(--c-black-1);
}

.heading .heading-back {
	border: 1px solid var(--c-black-1);
	padding: .6rem .4rem;
	border-radius: .4rem;
	font-size: .8rem;
} 

.heading .heading-title-back {
	/* border: 1px solid magenta; */
	text-align: right;
}

.heading .heading-title-back p:nth-child(1) {
	font-size: 1.2rem;
	font-weight: 500;
}
</style>