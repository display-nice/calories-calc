<template>
	<!-- <button @click="this.calories.vis = !this.calories.vis">Жмяк</button> -->
	<section
		class="counter__result"
		:class="{ counter__result__hidden: !calories.vis }"
	>
		<h2 class="heading">Ваша норма калорий</h2>
		<ul class="counter__result-list">
			<li class="counter__result-item">
				<h3>
					<span id="calories-norm">{{ calories.norm }}</span> ккал
				</h3>
				<p>поддержание веса</p>
			</li>
			<li class="counter__result-item">
				<h3>
					<span id="calories-minimal">{{ calories.min }}</span> ккал
				</h3>
				<p>снижение веса</p>
			</li>
			<li class="counter__result-item">
				<h3>
					<span id="calories-maximal">{{ calories.max }}</span> ккал
				</h3>
				<p>набор веса</p>
			</li>
		</ul>
	</section>
</template>

<script>
	export default {
		props: {
			calories: {
				type: Object,
			},
		},
		data() {
			return {};
		},
	};
</script>

<style scoped>
</style>