<template>
	<form class="counter__form form" name="counter" action="#" method="post">
		<form-phys-stats @physicalStats="recievePhysStats" />
		<button style="margin-left: 130px" @click="this.testButton += 1">
			Жмяк
		</button>
		<form-activity @activityCoeff="recieveActivityCoeff" />
		<form-submit :stats="stats" />
	</form>
</template>

<script>
	import FormPhysStats from "@/components/FormPhysStats.vue";
	import FormActivity from "./FormActivity.vue";
	import FormSubmit from "./FormSubmit.vue";
	export default {
		components: { FormPhysStats, FormActivity, FormSubmit },
		data() {
			return {
				stats: {
					activityCoeff: 1.2,
					genderCoeff: 5,
					age: Number,
					height: Number,
					weight: Number,
				},
				testArray: [1, 2, 3],
				testButton: 0,
			};
		},

		methods: {
			recieveActivityCoeff(data) {
				this.stats.activityCoeff = data;
			},
			recievePhysStats(data) {
				this.stats.genderCoeff = data.genderCoeff;
				this.stats.age = data.age;
				this.stats.height = data.height;
				this.stats.weight = data.weight;
			},
		},
	};
</script>

<style scoped>
</style>