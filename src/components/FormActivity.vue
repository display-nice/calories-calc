<template>
	<fieldset class="form__item">
		<legend class="heading">Физическая активность</legend>
		<ul class="radios-group">
			<li class="radio">
				<div class="radio__wrapper">
					<input
						@click="getActivityCoeff"
						ref="activityMin"
						id="activity-minimal"
						name="activity"
						value="min"
						type="radio"
						checked
						required
					/>
					<label for="activity-minimal"> Минимальная </label>
				</div>
				<p class="radio__description">
					Сидячая работа и нет физических нагрузок
				</p>
			</li>
			<li class="radio">
				<div class="radio__wrapper">
					<input
						@click="getActivityCoeff"
						id="activity-low"
						name="activity"
						value="low"
						type="radio"
						required
					/>
					<label for="activity-low"> Низкая </label>
				</div>
				<p class="radio__description">
					Редкие, нерегулярные тренировки, активность в быту
				</p>
			</li>
			<li class="radio">
				<div class="radio__wrapper">
					<input
						@click="getActivityCoeff"
						id="activity-medium"
						name="activity"
						value="medium"
						type="radio"
						required
					/>
					<label for="activity-medium"> Средняя </label>
				</div>
				<p class="radio__description">Тренировки 3-5 раз в неделю</p>
			</li>
			<li class="radio">
				<div class="radio__wrapper">
					<input
						@click="getActivityCoeff"
						id="activity-high"
						name="activity"
						value="high"
						type="radio"
						required
					/>
					<label for="activity-high"> Высокая </label>
				</div>
				<p class="radio__description">Тренировки 6-7 раз в неделю</p>
			</li>
			<li class="radio">
				<div class="radio__wrapper">
					<input
						@click="getActivityCoeff"
						id="activity-maximal"
						name="activity"
						value="max"
						type="radio"
						required
					/>
					<label for="activity-maximal"> Очень высокая </label>
				</div>
				<p class="radio__description">
					Больше 6 тренировок в неделю и физическая работа
				</p>
			</li>
		</ul>
	</fieldset>
</template>

<script>
	export default {
		props: {
			setDefault: 0,
		},
		data() {
			return {
				activityCoeff: 1.2,
			};
		},
		methods: {
			getActivityCoeff(e) {
				switch (e.target.value) {
					case "min":
						this.activityCoeff = 1.2;
						break;
					case "low":
						this.activityCoeff = 1.375;
						break;
					case "medium":
						this.activityCoeff = 1.55;
						break;
					case "high":
						this.activityCoeff = 1.725;
						break;
					case "max":
						this.activityCoeff = 1.9;
						break;
					default:
						this.activityCoeff = 1.2;
						break;
				}
				this.$emit("activityCoeff", this.activityCoeff);
			},
		},
		watch: {
			setDefault(newValue) {
				console.log(
					"в Activity пришли пропсы и сработал вотчер, setDefault = ",
					this.setDefault
				);
				this.$refs.activityMin.checked = true;
			},
		},
	};
</script>

<style scoped>
</style>