import React, { PureComponent } from 'react';
import Map from "./map";


class Geo extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
             listOfNearByLocation: [],
             latitude: null,
             longitude: null,
        }
    }

    success =(position) => {
        const latitude  = position.coords.latitude;
        const longitude = position.coords.longitude;

        this.setState({
            latitude,
            longitude,
        });
    
            console.log("latitude==>",latitude);
            console.log("longitude==>",longitude);
            // Call the BE api to get the results and display it.
            // axios.get(`preview.com/station?lat=${latitude}&long=${longitude}`)
            //   .then(function (response) {
            //     // handle success
            //     console.log(response);
            //      this.setState({listOfNearByLocation:responce.listOfNearByLocation});
            //   })
            //   .catch(function (error) {
            //     // handle error
            //     console.log(error);
            //   });
    }
    
    error = () => {
        console.log('Unable to retrieve your location');
    }

    componentDidMount(){
        if (!navigator.geolocation) {
            console.log('Geolocation is not supported by your browser');
          } else {
            console.log('Geolocation is supported by your browser');
            navigator.geolocation.getCurrentPosition(this.success, this.error);
          }
    }

    render() {
        const {listOfNearByLocation, latitude ,longitude } = this.state;
        return (
            <div>
                
                {/* {  listOfNearByLocation.length && listOfNearByLocation.map( item => {
                        return item.name;
                    })
                } */}
                {   latitude && longitude &&
                    // <Map id="myMap" options={{center: { lat: latitude, lng: longitude }, zoom: 13}} />
                    <Map zoom={15} center={[latitude, longitude]} />
                }
            </div>
        )
    }
}

export default Geo 