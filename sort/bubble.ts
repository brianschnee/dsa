// O(N^2)
function bubble_sort(arr: number[]): void {
	for (let i = 0; i < arr.length; i++) {
		for (let j = i; j < arr.length - 1 - i; j++) {
			if (arr[j] > arr[j + 1]) {
				const temp = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = temp;
			}
		}
	}
}