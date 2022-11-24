var weight, height, measure, bmi, error ;

function calculate() {
	weight = document.getElementById("weight").value;
	height = document.getElementById("height").value;
	error = "No value is Entered!";
	height /= 100;
	height *= height;
	bmi = weight/height;
	bmi = bmi.toFixed(1);

	if (bmi <= 18.4) {
		measure = "Your BMI is " + bmi + " \n" + "You are Underweight Work Hard";
	} else if (bmi >= 18.5 && bmi <= 24.9) {
		measure = "Your BMI is " + bmi + " \n" + "You are Normal Good";
	} else if (bmi >= 25 && bmi <= 29.9) {
		measure = "Your BMI is " + bmi + " \n" + "You are Overweight Start Lossing Weight";
	} else if (bmi >= 30) {
		measure = "Your BMI is " + bmi + " \n" + "You are Obese Start Diet";
	}
	

	if (weight === 0 ) {
		document.getElementById("results").innerHTML = error;
	} else if (height === 0){
		document.getElementById("results").innerHTML = error;
	}
	 else {

		document.getElementById("results").innerHTML = measure;
	}
	if (weight < 0) {
		document.getElementById("results").innerHTML = "Negative Values not Allowed";
	}
}
