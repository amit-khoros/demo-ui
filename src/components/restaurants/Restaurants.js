import React from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import { Marker } from '@react-google-maps/api';
import { Card, List, Map, Container, Image ,Line,Details} from './Restaurants-styled';


const containerStyle = {
    width: '400px',
    height: '250px'
};

var center = {
    lat: 13.1986348,
    lng: 77.7065928,
};
const Maps = () => {
    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: "AIzaSyBu5XxU9kBsFbi1K9D16jr_EBeSVlrfsyc",
        libraries: ['places'],
    })
    var map1;
    var service;
    const [map, setMap] = React.useState()
    const [restaurant, setResturents] = React.useState([])
    const onLoad = React.useCallback(function callback(map) {
        var pyrmont = new window.google.maps.LatLng(15.837732075398238, 78.02613648167242);
        map1 = new window.google.maps.Map(document.createElement('div'), {
            center: pyrmont,
        });
        service = new window.google.maps.places.PlacesService(map1);
        var request = {
            location: {
                lat: 13.1986348,
                lng: 77.7065928,
            },
            radius: 500,
            type: ['restaurant'],
        };

        service.nearbySearch(request, callback);
        function callback(results, status) {

            if (status == window.google.maps.places.PlacesServiceStatus.OK) {
                for (var i = 0; i < results.length; i++) {
                    setResturents(results)
                    createMarker(results[i]);
                }
            }
        }
        function createMarker(place) {
            if (!place.geometry || !place.geometry.location) return;

            const marker = new window.google.maps.Marker({
                map,
                position: place.geometry.location,
            });
        }
        setMap(map)
    }, [])

    const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
    }, [])

    return (
        <Container>
            <Map>
                {isLoaded ?
                    <GoogleMap
                        mapContainerStyle={containerStyle}
                        center={center}
                        zoom={16}
                        onLoad={onLoad}
                        onUnmount={onUnmount}
                    >
                        { /* Child components, such as markers, info windows, etc. */}
                        <Marker position={{ lat: -3.746122699999999, lng: -38.5230346 }} />
                    </GoogleMap> : <p>loading..</p>}
            </Map>
            <List>
                {restaurant.map((res1) => (<><Card>
                    <Details>
                        <h4>{res1.name}</h4>
                        <p>{"rating:" + res1.rating}</p>
                        <p>{"Address:" + res1["vicinity"]}</p>
                    </Details>
                    <Image>
                        {res1.photos != undefined ? <img src={res1["photos"][0].getUrl()} height={150} width={150} style={{ borderRadius: "5px" }} /> : <img src={"https://thumbs.dreamstime.com/b/no-image-available-icon-photo-camera-flat-vector-illustration-132483141.jpg"} height={150} width={150} />}
                    </Image>
                </Card>
                </>))}</List>
        </Container>
    );
}
export default Maps;

