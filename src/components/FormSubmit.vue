<template id="formSubmit">
	<div class="form__submit">
		<button
			@click.prevent="count"
			class="form__submit-button button"
			name="submit"
			type="submit"
			ref="calcBtn"
			disabled
		>
			Рассчитать
		</button>
		<button @click="customClick">Custom Click</button>
		<button
			class="form__reset-button"
			name="reset"
			type="reset"
			:disabled="clearBtnActive"
		>
			<svg
				width="24"
				height="24"
				viewbox="0 0 24 24"
				fill="#FD3636"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M13.4143 12.0002L18.7072 6.70725C19.0982 6.31625 19.0982 5.68425 18.7072 5.29325C18.3162 4.90225 17.6842 4.90225 17.2933 5.29325L12.0002 10.5862L6.70725 5.29325C6.31625 4.90225 5.68425 4.90225 5.29325 5.29325C4.90225 5.68425 4.90225 6.31625 5.29325 6.70725L10.5862 12.0002L5.29325 17.2933C4.90225 17.6842 4.90225 18.3162 5.29325 18.7072C5.48825 18.9022 5.74425 19.0002 6.00025 19.0002C6.25625 19.0002 6.51225 18.9022 6.70725 18.7072L12.0002 13.4143L17.2933 18.7072C17.4882 18.9022 17.7443 19.0002 18.0002 19.0002C18.2562 19.0002 18.5122 18.9022 18.7072 18.7072C19.0982 18.3162 19.0982 17.6842 18.7072 17.2933L13.4143 12.0002Z"
				/>
			</svg>
			<span> Очистить поля и расчёт </span>
		</button>
	</div>
</template>

<script>
	export default {
		el: "#formSubmit",
		props: {
			stats: {
				type: Object,
				required: true,
			},
		},
		data() {
			return {
				calcBtnActive: false,
				clearBtnActive: false,
				calRange: [],
			};
		},
		methods: {
			customClick() {
				let someElement = this.$el.querySelector(".form__submit-button");
				console.log(someElement);
			},
			count() {
				let N = Math.round(
					(10 * this.stats.weight +
						6.25 * this.stats.height -
						5 * this.stats.age +
						this.stats.genderCoeff) *
						this.stats.activityCoeff
				);
				this.calRange = [];
				this.calRange.push(N); // ккал для поддержания веса
				this.calRange.push(Math.round(N - 0.15 * N)); // ккал для снижения веса
				this.calRange.push(Math.round(N + 0.15 * N)); // ккал для набора веса
			},
		},
		watch: {
			stats: {
				handler(changedStats) {
					let values = Object.values(changedStats);
					let statsFilled = 0;
					for (let value of values) {
						if (value) {
							statsFilled += 1;
						}
					}
					statsFilled === values.length
						? (this.$refs.calcBtn.disabled = false)
						: (this.$refs.calcBtn.disabled = true);
				},
				deep: true,
			},
		},
	};
</script>

<style scoped>
</style>