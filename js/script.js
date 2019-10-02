'use strict';

// script.js - {description}
(function () {
	let form = document.querySelector('#search-form');
	let select = document.querySelector('#search-select');
	let search = document.querySelector('#search-field');
	let logo = document.querySelector('.search-logo');
	let text = document.querySelector('.search-value');

	let searchEngineValues = {
		google: {
			name: 'Google',
			action: 'http://google.com/search?q='
		},
		yandex: {
			name: 'Яндекс',
			action: 'https://yandex.ru/search/?text='
		}
	};

	let selectHandler = () => {
		text.textContent = searchEngineValues[select.value].name;
		logo.src = 'img/' + select.value + '.png';
		form.action = searchEngineValues[select.value].action;
	};


	let submitHandler = (evt) => {
		evt.preventDefault();
		window.open(form.action + search.value);
	};

	select.addEventListener('blur', selectHandler);
	form.addEventListener('submit', submitHandler);

})();