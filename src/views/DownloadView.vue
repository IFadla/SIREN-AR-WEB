<script setup>
import Navigation from "../components/Navigation.vue";
</script>

<template>
  <section class="download">
    <a href="/pdf/SIREN AR Marker.pdf" download class="download-button">Download Marker PDF</a>
  </section>

	<footer class="footer">
    <Navigation />
  </footer>
</template>

<style scoped>
.footer {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  /* border: 1px solid black; */
}

.download {
  padding: 2rem;
  /* border: 1px solid magenta; */
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.download .download-button {
  /* border: 1px solid magenta; */
  padding: .8rem 2rem;
  width: 100%;
  text-align: center;
  border-radius: .5rem;
  text-decoration: none;
  background-color: var(--c-orange-1);
  color: var(--c-white-1);
}
</style>