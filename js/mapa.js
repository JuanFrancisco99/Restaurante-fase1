function geolocationSuccess(position) {
    let userLatLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

    let myOptions = {
        zoom : 16,
        center : userLatLng,
        mapTypeId : google.maps.MapTypeId.ROADMAP
    };
    
    let mapObject = new google.maps.Map(document.getElementById("map"), myOptions);
    
        new google.maps.Marker({
                map: mapObject,
                position: userLatLng,
                title: 'Ubicació'
            });
            
    let circle = new google.maps.Circle({
        center: userLatLng,
        radius: position.coords.accuracy,
        map: mapObject,
    });
    mapObject.fitBounds(circle.getBounds());
}

function geolocationError(positionError) {
    document.getElementById("error").innerHTML += "Error: " + positionError.message + "<br />";
}

function geolocateUser() {
    
    geolocationSuccess({coords: {latitude:39.601319605007305, longitude:2.689286422605696}});
}

window.onload = geolocateUser;