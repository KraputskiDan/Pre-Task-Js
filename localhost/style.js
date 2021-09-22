//выбор стиля для формы
function remakeOpt(num) {
	switch (Number(num.value)) {
		
		case 1 : {
			searchTagAndСhangeStyle('body', 'rgba(69, 78, 70, 0.5)');
			searchTagAndСhangeStyle('label','#9fba9d');
			searchTagAndСhangeStyle('article','rgba(18, 25, 26, 0.71)');
			searchTagAndСhangeStyle('header', 'rgba(18, 25, 26, 0.71)');
			searchTagAndСhangeStyle('footer', 'rgba(18, 25, 26, 0.71)');
			break;
		}

		case 2 : {
			searchTagAndСhangeStyle('body', 'white');
			searchTagAndСhangeStyle('label', 'black');
			searchTagAndСhangeStyle('header', 'rgb(94, 167, 194)');
			searchTagAndСhangeStyle('article', 'rgb(94, 167, 194)');
			searchTagAndСhangeStyle('footer', 'rgb(94, 167, 194)');
			break;
		}

		case 3 : {
			searchTagAndСhangeStyle('body', 'rgb(69 78 70 / 12%)');
			searchTagAndСhangeStyle('label', '#735335');
			searchTagAndСhangeStyle('article','rgb(57, 184, 130)');
			searchTagAndСhangeStyle('header', 'rgb(57, 184, 130)');
			searchTagAndСhangeStyle('footer', 'rgb(57, 184, 130)');
			break;
		}

	}
}

//перебор доступных тегов, которым можно применить стиль
function searchTagAndСhangeStyle(nameTag, styleTag) {
	let labels = document.getElementsByTagName(String(nameTag));
	for (let i = 0; i < labels.length; i++) {
    	if (labels[i].htmlFor != '' && nameTag == 'label') {
         	document.querySelectorAll(String(nameTag))[i].style.color = styleTag;       
    	}
    	else{
    		document.querySelectorAll(String(nameTag))[i].style.background = styleTag;   
    	}
    	document.querySelectorAll(String(nameTag))[i].style.transition = "all 2s";
	}

}

