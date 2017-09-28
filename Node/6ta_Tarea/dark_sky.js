const yargs = require('yargs');
let request = require('request');

function temper(latitud, longitud){

	var tempAddress = (lat, long) => {
		return new Promise((resolve,reject) => {
			const API_KEY ="8e0b95deef54eb1efc5ab90e0b563ea9";
			let URL_weather = "https://api.darksky.net/forecast/" + API_KEY + "/" + lat + "," + long;
			request({
			  url: URL_weather,
			  json: true
			}, function (err, res, body) {
				if(err){
					reject('Unable to connect to google servers');
				}else if(body){
					//console.log("La temperatura en F es: ", body.currently.temperature);
					var temp_c=(body.currently.temperature-32)*(5/9);
					console.log("La temperatura en C es: ", temp_c.toPrecision(4));
					/*resolve(
						{
							t: body.currently.temperature
						}
					);*/
				}
			});
		});
	};

	tempAddress(latitud, longitud).then((location) => {
		console.log(JSON.stringify(location,undefined, 2));
	}, (errorMessage) => {
		console.log(errorMessage);
	});

};


module.exports={
	temper
};
