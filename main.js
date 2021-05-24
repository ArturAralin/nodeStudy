// Напишите программу для вывода в консоль простых чисел, чтобы они попадали в указанный диапазон включительно. При этом числа должны окрашиваться в цвета по принципу светофора:
// первое число выводится зелёным цветом;
// второе — жёлтым;
// третье — красным.
// Диапазон, куда попадут числа, указывается при запуске программы.
// Если простых чисел в диапазоне нет, нужно, чтобы программа сообщила об этом в терминале красным цветом.
// Если аргумент, переданный при запуске, не считается числом — сообщите об этом ошибкой и завершите программу.

const colors = require("colors/safe");

let startStr = Number(process.argv[2]);
let endStr = Number(process.argv[3]);
let map = new Map();
let mapKey = Number();
let cnt = 0;

map.set(0, function(val) {console.log(colors.green(val))});
map.set(1, function(val) {console.log(colors.yellow(val))});
map.set(2, function(val) {console.log(colors.red(val))});

if(!startStr||!endStr){
	console.log(colors.red('Одно из значений не число.'));
	return;
}
if((startStr < 0 || endStr < 0)||(!Number.isInteger(startStr)||!Number.isInteger(endStr))){
	console.log(colors.red('Вы ввели не простое число.'));
	return;
}
else {
	if(startStr > endStr){
		startStr = Number(process.argv[3]);
		endStr = Number(process.argv[2]);
		console.log('Перовое число больше второго Числа были поменяны местами.');
		console.log('Диапазон от ' + startStr + ' до ' + endStr +'.');		
	}
	else{console.log('Диапазон от ' + startStr + ' до ' + endStr +'.');	}
	
	for (i = startStr; i <= endStr; i++){
		if(i%2 > 0){
			map.get(mapKey)(i);
			mapKey++;
			cnt++;
			if (mapKey > 2) {mapKey = 0}		
		}
	}
	if (cnt == 0) {
		console.log(colors.red('Простых чисел в диапазоне нет.'));
	}
}