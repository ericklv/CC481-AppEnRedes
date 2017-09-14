function removeItem(arr,item){
	var i=arr.indexOf(item);
	if(i!== -1){
		arr.splice(i,1);
	}
}

module.exports={
	removeItem
}

/*var removeItem=(arr,item)=>{
	var i =arr.indexOf(item);
	i!==-1 && arr.splice(i,1);
}*/