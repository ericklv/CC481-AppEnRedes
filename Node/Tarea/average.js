function avgArr(arr){
	let arr2=Object.keys(arr).map(function (key){return arr[key];});
	console.log(arr2);
	let sum= arr2.reduce((previous,current)=>current+=previous);
	let avg=sum/arr.length;
	return avg;
}

module.exports={
	avgArr
};