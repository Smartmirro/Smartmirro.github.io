$(document).ready(function() {
    getWeather();
    setInterval(getWeather, 10000);
});

function getWeather() {

    var location = (51.986734 + ',' + 5.951322);
    var woeid = undefined;

    $.simpleWeather({
        location: location,
        woeid: woeid,
        unit: 'C',
        success: function(weather){
            city = '<p>' + weather.city + '<img style = "margin-bottom :-10px;" src='+weather.thumbnail+'></img>' + '</p>' + '<br>';
            temp = '<p>Buitentemperatuur: ' + weather.temp + '&deg;' + 'C' + '</p>';
            wcode = '<img class="weathericon" src="images/weathericons/'+weather.code+'.svg">';
            wind = '<p>Windsnelheid: '+weather.wind.speed + weather.units.speed+'</p>';
            humidity = 'Luchtvochtigheid: ' + weather.humidity+' %';
            voorspelling = '<br>' + "Voorspelling: "
            for(var i=0;i<weather.forecast.length - 2;i++) {
                voorspelling += '<p>'+weather.forecast[i].day+': '+weather.forecast[i].high + '&deg;' + 'C' +'</p>';
            }
            $(".location").html(city);
            $(".temperature").html(temp);
            $(".climate_bg").html(wcode);
            $(".windspeed").html(wind);
            $(".humidity").text(humidity);
            $(".voorspelling").html(voorspelling);
        },
        error: function(error){
            $(".error").html('<p>'+error+'</p>');
        }
    });
}
