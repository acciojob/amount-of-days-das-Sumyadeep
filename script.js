//your JS code here. If required.

function daysOfAyear(){

	if(n % 4 == 0) return 366;
	else if(n % 100 != 0) return 366;
	else if(n % 400 == 0) return 366;
	else{
		return 365;
	}
}

daysOfAyear(2024);
