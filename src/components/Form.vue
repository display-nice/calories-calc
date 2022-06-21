<template>
	<form class="counter__form form" name="counter" action="#" method="post">
		<form-phys-stats />
		<form-activity />
		<form-submit />
	</form>
</template>

<script>
	import FormPhysStats from "@/components/FormPhysStats.vue";
	import FormActivity from "./FormActivity.vue";
	import FormSubmit from "./FormSubmit.vue";
	export default {
		components: { FormPhysStats, FormActivity, FormSubmit },
	};
</script>

<style scoped>
</style>