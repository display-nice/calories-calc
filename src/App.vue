<template>
	<main class="main">
		<Hint />
		<div class="container">
		<article  class="counter">
			<Header />
			<Form />
		</article>
		</div>
	</main>
</template>

<script>
	import Header from "@/components/Header.vue";
	import Form from "@/components/Form.vue";
	import Hint from "@/components/Hint.vue";
	export default {
		components: {
			Header,
			Form,
			Hint,
		},
		methods: {},
	};
</script>

<style>
</style>
