'use strict'; 

var hours = process.argv[2];
var minutes = process.argv[3];

// Немного замечательного кода и магии by m-a-bykovsky
if (( 0 <= hours && hours <= 23) && (0 <= minutes && minutes <= 59)) {
	console.log(convertArabicToRoman(hours) +':'+ convertArabicToRoman(minutes));
} else {
	console.log('Время указано не верно');
}

function getRomanDigit(x) {
	var romanDigit
	switch (x) {
		case 1:
			romanDigit = "I";
			break;
		case 5:
			romanDigit = "V";
			break;
		case 10:
			romanDigit = "X";
			break;
		case 50:
			romanDigit = "L";
			break;
	}
	return (romanDigit)
 }
 
function convertArabicToRoman(x){
	var rank;
	var num = '';
	x = parseInt(x);
	//console.log(x);
	if (x == 0){
		num = 'NN';
	}
	else{
		while (x > 0){
			//Проверяем разрядность
			if (x.toString().length === 1){
				rank = 1;
			}
			else if(x.toString().length === 2){
				rank = 10;
			}
			else{
				console.log('Error ' + x.length + ' ' + typeof(x) + x); //Отладочная
				process.abort();
			}
			//Перевод в римские
			if (x >= 9*rank){
				num = num + getRomanDigit(rank) + getRomanDigit(rank*10);
				x = (x - 9*rank);
			}
			else if (x >= 5*rank){
				num = num + getRomanDigit(5*rank);
				x = (x - 5*rank);
			}
			else if (x >= 4*rank){
				num = num + getRomanDigit(rank) + getRomanDigit(5*rank); 
				x = (x - 4*rank);
			} 
			else if (x >= rank){
				num = num + getRomanDigit(rank);
				x = (x - rank);	
			}
		}
	}
	return num
}
