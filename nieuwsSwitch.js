function verstopNieuws () {
document.getElementById("Nieuws_kort").style.display = "block";
}

function verstopWeer () {
document.getElementById("hetWeer").style.display = "block";
}

function verstopDatum () {
document.getElementById("deDatum").style.display = "block";
}

function toonKalender () {
document.getElementById("deKalender").style.display = "block";
}

function getWeather(){
		// checkt de status van calenderStatus en laat de kalender zien wanneer deze true is.
		var ref = firebase.database().ref("sensorData/s_weatherData/weatherStatus");
    var showWeerEnDatum = document.getElementById('Weer');
    ref.on("value", function(snapshot){
			weatherValue = snapshot.val();
			if (weatherValue == true) {
				//don't show homepage
				// show weather div
        showWeerEnDatum.style.display = 'block';
			} else {
				// don't show weather div
				// show homepage
        showWeerEnDatum.style.display = 'none';
			}
		})
	}

function getCal(){
	// checkt de status van calenderStatus en laat de kalender zien wanneer deze true is.
	var ref = firebase.database().ref("sensorData/s_calenderData/calenderStatus");
  var showKalender = document.getElementById('Kalender');
  ref.on("value", function(snapshot){
		calenderValue = snapshot.val();
		if (calenderValue == true) {
			//don't show homepage
			// show calender div
      showKalender.style.display = 'block';
		} else {
			// don't show calender div
			// show homepage
      showKalender.style.display = 'none';
		}
	})
}

function getNews() {
	// checkt de status van newsStatus en laat de feed zien wanneer deze true is.
	var ref = firebase.database().ref("sensorData/s_newsData/newsStatus");
  var showNieuws = document.getElementById('Kalender');
  ref.on("value", function(snapshot) {
		newsValue = snapshot.val();
		if (newsValue == true) {
			//don't show homepage
			//show newsfeed div
      showNieuws.style.display = 'block';
		} else {
			// don't show newsfeed div
			// show homepage
      showNieuws.style.display = 'none';
		}
	})
}
