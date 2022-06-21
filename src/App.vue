<template>
	<Header />
	<Form />
	<Result />
</template>

<script>
	import Header from "@/components/Header.vue";
	import Form from "@/components/Form.vue";
	import Result from "./components/Result.vue";
	export default {
		components: {
			Header,
			Form,
			Result,
		},
	};
</script>

<style>
</style>
