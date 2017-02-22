
//Build function to change dates into acceptable readable format
function dateReadable(dateArr){
  
  var str; //Declaration to hold return value
  var date = dateArr[0];
  //Take date string and split into array, assign values as necessary
  var day = date.split('-')[2];
  var month = date.split('-')[1];
  var year = date.split('-')[0];
  
  //Convert to INT the first and last digits of the day variable
  var dayLastDigit = parseInt(day.charAt(1));
  var dayFirstDigit = parseInt(day.charAt(0));
  
  //Convert date values to integers
  year = parseInt(year);
  month = parseInt(month);
  day = parseInt(day);
  
  //Get day suffix e.g. 1st, 5th etc to "th" by default
  var suffix = "th";
  
  //If the first digit of the two digit day is not equal to 1, the assign 123 values accordingly
  if (dayFirstDigit !== 1) {
    switch (dayLastDigit){
      case 1:
        suffix = "st";
        break;
      case 2:
        suffix = "nd";
        break;
      case 3:
        suffix = "rd";
        break;
    }
  }

  //Build array with friendly month names for reference
  var monthArr = ["January", "February", "March", "April", "May", "June"];
  monthArr.push("July","August","September","October", "November", "December");
  
  //Build array for friendly days of the week for reference
  var daysArr = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  
  //Check for second argument, if exists, alter return string accordingly
  switch(arguments[1]) {
    case 1: //Return just month and day
      str = monthArr[month - 1] + " " + day + suffix;
      break;
    case 2: //Return just day
      str = day + suffix;
      break;
    case 3: //Return day, month and year
      str = monthArr[month - 1] + " " + day + suffix + ", " + year;
      break;
    default:
      str = daysArr[dateArr[1]] + " " + day + suffix + " " + monthArr[month - 1] + ", " + year;
  }
  
  return str;
}

function YMD(date){
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var day = date.getDate();
  var dayOfWeek = date.getDay();
  
  if (month.toString().length === 1) {
    month = "0" + month.toString();
  }
  
  if (day.toString().length === 1) {
    day = "0" + day.toString();
  }
  
  return [year+"-"+month+"-"+day,dayOfWeek];
}

function timeReadable(hh,mm,ante){
	var suffix;
	
	if (mm.toString().length === 1) {
		mm = "0" + mm.toString();
	}
	
	if (ante === 12) {
		if (hh < 12) {
			suffix = "AM";
		} else {
			hh = hh - 12;
			suffix = "PM";
		}
		if (hh === 0) {
			hh = 12;
		}
		
		return hh + ":" + mm + suffix;
	} else {
		
		if (hh.toString().length === 1) {
			hh = "0" + hh.toString();
		}
		
		return hh + ":" + mm;
	}
}

function titleCase(str) {
  
  //Uppercase holding variable
  var uCase;
  
  
  //Convert string to lowercase
  str = str.toLowerCase();
  
  //Split string into array
  var strArr = str.split(" ");
  
  //Declare new array for Capitalised sentence
  var capArr = [];
  
  //Capitalise each word in new array
  for (var i = 0; i < strArr.length; i++) {
    uCase = strArr[i].charAt(0).toUpperCase();
    capArr[i] = strArr[i].replace(/\w/,uCase);
  }
  
  //Join array to single string
  str = capArr.join(" ");

  return str;
}

function kelvinToFarenheit(k){
	return Math.round((k * 9/5) - 459.67);
}

function farenheitToCelsius(f){
	return Math.round((f - 32) * 5/9);
}
