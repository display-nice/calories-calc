<template>
	<div class="form__item">
		<h2 class="heading">Пол</h2>
		<ul class="switcher">
			<li class="switcher__item">
				<input
					@click="setGender"
					id="gender-male"
					name="gender"
					value="male"
					type="radio"
					checked
					required
				/>
				<label for="gender-male"> Мужчина </label>
			</li>
			<li class="switcher__item">
				<input
					@click="setGender"
					id="gender-female"
					name="gender"
					value="female"
					type="radio"
					required
				/>
				<label for="gender-female"> Женщина </label>
			</li>
		</ul>
	</div>
	<fieldset class="form__item form__parameters" name="parameters">
		<legend class="visually-hidden">Физические параметры</legend>
		<div class="inputs-group">
			<div class="input">
				<div class="input__heading">
					<label class="heading" for="age"> Возраст </label>
					<span class="input__heading-unit"> лет </span>
				</div>
				<div class="input__wrapper">
					<input
						v-model="age"
						type="text"
						id="age"
						name="age"
						placeholder="0"
						inputmode="decimal"
						maxlength="3"
						required
					/>
				</div>
			</div>
			<div class="input">
				<div class="input__heading">
					<label class="heading" for="height"> Рост </label>
					<span class="input__heading-unit"> см </span>
				</div>
				<div class="input__wrapper">
					<input
						v-model="height"
						type="text"
						id="height"
						name="height"
						placeholder="0"
						inputmode="decimal"
						maxlength="3"
						required
					/>
				</div>
			</div>
			<div class="input">
				<div class="input__heading">
					<label class="heading" for="weight"> Вес </label>
					<span class="input__heading-unit"> кг </span>
				</div>
				<div class="input__wrapper">
					<input
						v-model="weight"
						type="text"
						id="weight"
						name="weight"
						placeholder="0"
						inputmode="decimal"
						maxlength="3"
						required
					/>
				</div>
			</div>
		</div>
	</fieldset>
</template>

<script>
	export default {
		data() {
			return {
				gender: "",
				age: "",
				height: "",
				weight: "",
			};
		},
		methods: {
			setGender(e) {
				switch (e.target.value) {
					case "male": {
						this.gender = "male";
						break;
					}
					case "female": {
						this.gender = "female";
						break;
					}
				}
			},
		},
	};
</script>

<style scoped>
</style>