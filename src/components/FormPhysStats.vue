<template>
	<div class="form__item">
		<h2 class="heading">Пол</h2>
		<ul class="switcher">
			<li class="switcher__item">
				<input
					@click="emitPhysStats"
					ref="defaultGender"
					id="gender-male"
					name="gender"
					value="male"
					type="radio"
					checked
					required
				/>
				<label for="gender-male">Мужчина</label>
			</li>
			<li class="switcher__item">
				<input
					@click="emitPhysStats"
					id="gender-female"
					name="gender"
					value="female"
					type="radio"
					required
				/>
				<label for="gender-female">Женщина</label>
			</li>
		</ul>
	</div>
	<fieldset class="form__item form__parameters" name="parameters">
		<legend class="visually-hidden">Физические параметры</legend>
		<div class="inputs-group">
			<div class="input">
				<div class="input__heading">
					<label class="heading" for="age"> Возраст </label>
					<div class="input__wrapper">
						<input
							@input="emitPhysStats"
							v-model="physStats.age"
							type="text"
							id="age"
							name="age"
							placeholder="0"
							inputmode="decimal"
							maxlength="3"
							required
						/>
						<span class="input__heading-unit"> лет </span>
					</div>
				</div>
			</div>
			<div class="input">
				<div class="input__heading">
					<label class="heading" for="height"> Рост </label>
					<div class="input__wrapper">
						<input
							@input="emitPhysStats"
							v-model="physStats.height"
							type="text"
							id="height"
							name="height"
							placeholder="0"
							inputmode="decimal"
							maxlength="3"
							required
						/>
						<span class="input__heading-unit"> см </span>
					</div>
				</div>
			</div>
			<div class="input">
				<div class="input__heading">
					<label class="heading" for="weight"> Вес </label>
					<div class="input__wrapper">
						<input
							v-model="physStats.weight"
							@input="emitPhysStats"
							type="text"
							id="weight"
							name="weight"
							placeholder="0"
							inputmode="decimal"
							maxlength="3"
							required
						/>
						<span class="input__heading-unit"> кг </span>
					</div>
				</div>
			</div>
		</div>
	</fieldset>
</template>

<script>
	export default {
		emits: ["physicalStats"],
		props: {
			setDefault: 0
		},
		data() {
			return {
				physStats: {
					genderCoeff: 5,
					age: "",
					height: "",
					weight: "",
				},
			};
		},
		methods: {
			emitPhysStats(e) {
				switch (e.target.value) {
					case "male": {
						this.physStats.genderCoeff = 5;
						break;
					}
					case "female": {
						this.physStats.genderCoeff = -161;
						break;
					}
				}
				this.$emit("physicalStats", this.physStats);
			},
		},
		watch: {
			setDefault(newValue) {
				console.log(
					"в PhysStats пришли пропсы и сработал вотчер, setDefault = ",
					this.setDefault
				);
				this.physStats = {
					age: "",
					height: "",
					weight: "",
				}
				this.$refs.defaultGender.checked = true;
			},
		},
	};
</script>

<style scoped>
</style>