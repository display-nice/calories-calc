<template>
	<aside class="hint">
		<div ref="hintWrapper" id="hint__wrapper" class="hint__wrapper">
			<button @click="openHintInfo" id="hint__btn" class="hint__btn">
				<svg
					class="hint__icon bi bi-info-square"
					xmlns="http://www.w3.org/2000/svg"
					width="50"
					height="50"
					fill="currentColor"
					viewBox="0 0 16 16"
				>
					<path
						d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"
					/>
					<path
						d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"
					/>
				</svg>
			</button>
			<div ref="hintDesc" id="hint__description" class="hint__description">
				<h2 class="hint__header">Особенности проекта:</h2>
				<ul class="hint__list">
					<li class="hint__item">
						Адаптивно-отзывчивая вёрстка (320px-1920px): Вычисление размеров
						через calc() + брейкпоинт 1159px;
					</li>
					<li class="hint__item">
						SCSS, БЭМ;
					</li>
					<li class="hint__item">
						Компонентный подход Vue 3 с использованием Vue CLI (Webpack). Всего семь компонентов (родительские и
						дочерние);
					</li>
					<li class="hint__item">
						Использованы методы, вотчи, директивы (v-show, v-on, v-bind,
						v-model), рефы, пропсы, эмиты;
					</li>
					<li class="hint__item">
						Данные передаются из одного дочернего компонента в другой дочерний компонент через родительский компонент;					</li>
					<li class="hint__item">
						Изначально этот проект был написан мной на чистом Javascript, затем
						подвергся рефакторингу на Vue3 через отдельную ветку (merge с веткой
						master впоследствии);
					</li>
					<li class="hint__item">
						Публикацию проекта я произвёл через npm-пакет "gh-pages";
					</li>
				</ul>
			</div>
			<div ref="hintPointer" id="hint__pointer" class="hint__pointer">
				<div class="hint__pointer-text">
					&#9668; Узнать подробнее об этом проекте
				</div>
				<div
					@click="hideHintPointer"
					id="hint__pointer-close"
					class="hint__pointer-close"
				>
					&#10008;
				</div>
			</div>
		</div>
	</aside>
</template>

<script>
	//-----------------------hint-----------------------------
	export default {
		methods: {
			hideHintPointer() {
				this.$refs.hintPointer.classList.add("hint__pointer--hidden");
			},
			openHintInfo() {
				this.$refs.hintPointer.classList.add("hint__pointer--hidden");
				this.$refs.hintWrapper.style.alignItems = "flex-start";
				this.$refs.hintDesc.classList.toggle("hint__description--active");
			},
		},
	};
</script>
	
<style scoped>
	.hint {
		position: fixed;
		top: 12%;
		z-index: 10;
	}
	.hint__wrapper {
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		gap: 20px;
		-webkit-box-pack: justify;
		-ms-flex-pack: justify;
		justify-content: space-between;
		-webkit-box-align: center;
		-ms-flex-align: center;
		align-items: center;
		position: relative;
	}
	.hint__btn {
		position: relative;
		background: none;
		padding: 0;
		border: 0;
		width: 50px;
		height: 50px;
	}
	.hint__icon {
		border-radius: 8px;
		background: #eddbb1;
	}
	.hint__description {
		padding: 8px;
		background-color: #eddbb1;
		border: 2px solid black;
		border-radius: 10px;
		width: 400px;
		position: absolute;
		left: -480px;
		-webkit-transition-property: left;
		transition-property: left;
		-webkit-transition-duration: 0.2s;
		transition-duration: 0.2s;
	}
	.hint__description--active {
		left: 80px;
	}
	.hint__list {
		margin-top: 10px;
		/* margin-left: 20px; */
		list-style: square;
	}
	.hint__item {
		padding: 2px;
	}
	.hint__pointer {
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		gap: 10px;
		padding: 5px;
		background-color: #eddbb1;
		border: 2px solid black;
		border-radius: 5px;
		font-size: 20px;
		font-weight: 700;
		position: fixed;
		left: 80px;
		-webkit-transition-property: left;
		transition-property: left;
		-webkit-transition-duration: 0.2s;
		transition-duration: 0.2s;
	}
	.hint__pointer--hidden {
		left: -480px;
	}
	.hint__pointer-close {
		padding: 1px;
	}

	@media (max-width: 909px) {
		.hint__wrapper {
			gap: 5px;
			-webkit-box-align: start;
			-ms-flex-align: start;
			align-items: start;
		}
		.hint__btn {
			width: 37px;
			height: 37px;
		}
		.hint__btn svg {
			width: 37px;
			height: 37px;
		}
		.hint__description {
			left: -300px;
			max-width: 250px;
		}
		.hint__description--active {
			left: 45px;
		}
		.hint__header {
			font-size: 16px;
		}
		.hint__item {
			padding: 1px;
			font-size: 14px;
		}
		.hint__pointer {
			max-width: 210px;
			left: 45px;
			gap: 5px;
		}
		.hint__pointer--hidden {
			left: -300px;
		}
		.hint__pointer-text {
			font-size: 14px;
		}
	}
</style>