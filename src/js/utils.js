const utils = {

	initializeHeightsArr: function(columnCount) {
		const arr = new Array(columnCount);
		for (let i = 0; i < columnCount; i++) {
			arr[i] = 0;
		}
		return arr;
	},

	findIndex: function(heightsArr, boolMinimum) {
		let maxVal = heightsArr[0];
		let minVal = heightsArr[0];
		let maxIndex = 0;
		let minIndex = 0;
		heightsArr.forEach((h, i) => {
			if (h > maxVal) {
				maxIndex = i;
				maxVal = h;
			}
			if (h < minVal) {
				minIndex = i;
				minVal = h;
			}
		});
		return boolMinimum ? {minIndex, minVal} : {maxIndex, maxVal};
	}
};

export default utils;
