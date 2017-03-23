
function startRequest(lat,lon){
  //OpenWeather API Key
  var appid = "93ed5f4755afc85d10e401695df1a93c";

  var jsonURLPrefix = "https://crossorigin.me/";
  var jsonURL = jsonURLPrefix + "https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&appid=" + appid;
  
  $.getJSON( jsonURL, function( json ) {
	//Get and Set Values using JSON object as required
	
	//Get Weather Icon
	var iconURL = "http://openweathermap.org/img/w/"+ json.weather[0].icon +".png";
	
	//Get current time and change to friendly format
	var today = new Date();
	var fullDate = dateReadable(YMD(today));
	var fullTime = timeReadable(today.getHours(), today.getMinutes(), 12);
	
	//Define current location with city and country
	var currentLocation = json.name + ", " + getCountryName(json.sys.country);
	
	//Get Weather Description
	var desc = titleCase(json.weather[0].description);
	
	//Get Temperature 
	var farenheit = kelvinToFarenheit(json.main.temp);
	var celsius = farenheitToCelsius(farenheit);
	
	//Get Wind Speed in Knots and MPS
	var windSpeedMps = json.wind.speed;
	var windSpeedKns = Math.round((json.wind.speed * 1.943) * 10) / 10;
	
	//Get Humidity
	var humidity = json.main.humidity + "%";
	
	//Set Values on LOAD
	$("#currentDate").html(fullDate);
	$("#currentLocation").html(currentLocation);
	$("#weatherIcon").prop("src",iconURL);
	$("#weatherDesc").html(desc);
	$("#updateTime").html(fullTime);
	$("#temp").html(celsius+" <sup>o</sup>C");
	$("#wind").html(windSpeedMps + " meter/s");
	$("#humidity").html(humidity);
	
	$("#tempType").on('change',function(){
		if ($("#tempType").prop("checked") === true) {
			$("#temp").html(celsius+" <sup>o</sup>C");
		} else {
			$("#temp").html(farenheit+" <sup>o</sup>F");
		}
	});
	
	$("#windType").on('change',function(){
		if ($("#windType").prop("checked") === true) {
			$("#wind").html(windSpeedMps+ " meter/s");
		} else {
			$("#wind").html(windSpeedKns+ " knots");
		}
	});
  });
  //End JSON Request
}
		  
