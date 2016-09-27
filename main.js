function bubbleSort(arr) {
	var len = arr.length;
	if (!len) return;
	for (var i =0; i< len;i++) {
		for (var j =0; j<len-1-i; j++) {
			if (arr[j] > arr[j+1]) {
				var temp = arr[j+1];
				arr[j+1] =arr[j];
				arr[j] = temp;
			}
		}
	}
	return arr;
}

var arr = [3, 4,3,56,76,34,12,1];
console.log(bubbleSort(arr));