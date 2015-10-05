var hours = process.argv[2];
var minutes = process.argv[3];

// Немного замечательного кода и магии by m-a-bykovsky
if (( 0 < hours && hours <= 23) && (0 <= minutes && minutes <= 59)) {
	arabicToRoman(hours,minutes);
} else {
	console.log('Время указано не верно');
}
function romanDigit(x) {
	var y
	switch (x) {
		case 1:
			y="I";
			break;
		case 5:
			y="V";
			break;
		case 10:
			y="X";
			break;
		case 50:
			y="L";
			break;
	}
	return (y)
 }
function numbers(x){
	var base;
	var num='';
	x = parseFloat(x);
	while (x > 0){
		//Проверяем разрядность
		if (x.toString().length === 1){
			base = 1;
		}
		else if(x.toString().length === 2){
			if (x[0] === '0'){
				base = 1;		
			}
			else {
				base = 10;
			}
		}
		else{
			console.log('Error ' + x.length + ' ' + typeof(x) + x); //Отладочная
			process.abort();
		}
		//Перевод в римские
		if (x >= 9*base){
			num = num + romanDigit(base) + romanDigit(base*10);
			x = (x - 9*base);
		}
		else if (x >= 5*base){
			num = num + romanDigit(5*base);
			x = (x - 5*base);
		}
		else if (x >= 4*base){
			num = num + romanDigit(base) + romanDigit(5*base); 
			x = (x - 4*base);
		} 
		else if (x >= base){
			num = num + romanDigit(base);
			x = (x - base);	
		}
	}
	return num
}
function arabicToRoman(x,y){
	console.log(numbers(x) +':'+ numbers(y));
}