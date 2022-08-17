<template>
	<form class="counter__form form" name="counter" action="#" method="post">
		<form-phys-stats :set-default="setDefault" @physicalStats="recievePhysStats" />
		<!-- <button style="margin-left: 130px" @click="this.testButton += 1">
			Жмяк
		</button> -->
		<form-activity
			:set-default="setDefault"
			@activityCoeff="recieveActivityCoeff"
		/>
		<form-submit
			:stats="stats"
			@caloriesEmi="processCalories"
			@clearEmi="processClear"
		/>
	</form>
	<form-result :calories="calories" />
</template>

<script>
	import FormPhysStats from "@/components/FormPhysStats.vue";
	import FormActivity from "./FormActivity.vue";
	import FormSubmit from "./FormSubmit.vue";
	import FormResult from "./FormResult.vue";

	export default {
		components: { FormPhysStats, FormActivity, FormSubmit, FormResult },
		data() {
			return {
				stats: {
					activityCoeff: 1.2,
					genderCoeff: 5,
					age: Number,
					height: Number,
					weight: Number,
				},
				calories: {},
				setDefault: 0,
				testButton: 0,
			};
		},
		// updated() {
		// 	console.log("отработал хук updated внутри Form");
		// },
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
			processCalories(calories) {
				this.calories = calories;
			},
			processClear(setDefault) {
				this.setDefault = setDefault;
				// this.setDefault = false;
				// console.log("выполнился processClear, setDefault = ", this.setDefault);
			},
		},
		// computed: {
		// },
	};
</script>

<style scoped>
</style>