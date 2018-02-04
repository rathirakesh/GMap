import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Dimensions } from 'react-native';

import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import Polyline from '@mapbox/polyline';

let { width, height } = Dimensions.get('window');
const SCREEN_HEIGHT =  height;
const SCREEN_WIDTH  = width ;
const ASPECT_RATIO = width / height;
const LATITUDE = 59.32932349999999;
const LONGITUDE = 18.068580800000063;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

export default class App extends Component<{}> {

  constructor(props) {
    super(props)
    this.state = {
      coords: [],
      source: '',
      destination: '',
      region: {
        latitude: LATITUDE,
        longitude: LONGITUDE,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      },      
      markerPosition: {
        latitude: LATITUDE,
        longitude: LONGITUDE
      }
    }
  }
  componentDidMount() {
   
    navigator.geolocation.getCurrentPosition(
      (position) => {
        var lat = parseFloat(position.coords.latitude)
        var long = parseFloat(position.coords.longitude)
        var initialRegion = {
            latitude: lat,
            longitude: long,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA
        }
        this.setState({ region: initialRegion})
        this.setState({ markerPosition: initialRegion})
      },
    (error) => console.log(error.message),
    //(error) => alert(JSON.stringify(error)),
    { enableHighAccuracy: true, timeout: 20000, maximumAge: 2000 },
    );
    this.watchID = navigator.geolocation.watchPosition(
      position => {
        this.setState({
          region: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA,
          }
        });
      }
    );

  }
  

  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchID);
  }
 // https://maps.googleapis.com/maps/api/directions/json?origin=${ startLoc }&destination=${ destinationLoc }
 //http://app.dutifulness58.hasura-app.io/query?origin=Chennai&dest=Bangalore&mode=driving
 //http://app.dutifulness58.hasura-app.io/query?origin=Chennai&dest=Bangalore&mode=driving
 //http://app.dutifulness58.hasura-app.io/query?origin=${ startLoc }&destination=${ destLoc }
 //https://api.detour88.hasura-app.io/directions?origin=Chennai&destination=Bangalore&mode=driving
  async getDirections(startLoc, destLoc) {
    try {
        let resp = await fetch(`https://api.detour88.hasura-app.io/directions?origin=Chennai&destination=Bangalore&mode=driving`)
        
        let respJson = await resp.json();
        let points = Polyline.decode(respJson.routes[0].overview_polyline.points);
        let coords = points.map((point, index) => {
            return  {
                latitude : point[0],
                longitude : point[1]
            }
        })
        this.setState({coords: coords})
        return coords
    } catch(error) {
        alert(error)
        return error
    }
}

direction = () => {

  let source = this.state.source;
  let dest =  this.state.dest;
  this.getDirections(source, dest)
}

  render() {
    return (
      <View style={styles.containerWorking}>
        <MapView style={styles.map}
         region={ this.state.region }
        >
          <MapView.Marker
          coordinate={ this.state.markerPosition }
            title={'My place'}
            description={'I am here now'}
          />

          <MapView.Polyline 
            coordinates={this.state.coords}
            strokeWidth={2}
            strokeColor="red"/>

        </MapView>
        <TextInput
                  style={styles.inputBox} 
                 underlineColorAndroid='rgba(0, 0, 0, 0)' 
                 placeholder="Origin Location" 
                 placeholderTextColor='#ffffff'
                 onChangeText={ (source) => this.setState({source}) }
             />
              <TextInput
                  style={styles.inputBox} 
                 underlineColorAndroid='rgba(0, 0, 0, 0)' 
                 placeholder="Destination Location" 
                 placeholderTextColor='#ffffff'
                 onChangeText={ (dest) => this.setState({dest}) }
             />
       
      <TouchableOpacity style={styles.btn} onPress = {this.direction} >
               <Text>Direction</Text>
        </TouchableOpacity>   
    
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
  },
  containerWorking: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  },
  radius: {
    height: 50,
    height: 50,
    borderRadius: 50 / 2,
    overflow: 'hidden',
    backgroundColor: 'rgba(0, 122, 255, 0.1)',
    borderWidth: 1,
    borderColor: 'rgba(0, 112, 255, 0.3)',
    justifyContent: 'center',
    alignItems: 'center'
  },
  marker: {
    height: 20,
    height: 20,
    borderRadius: 20 / 2,
    overflow: 'hidden',
    backgroundColor: '#007AFF',
    borderWidth: 3,
    borderColor: 'white'
  },
 inputBox: {
    width: 300,
    backgroundColor: 'red',
    borderRadius: 25,
    paddingHorizontal: 20,
    fontSize: 16,
    color: '#ffffff',
    marginVertical: 10
},
  btn: {
    alignSelf: 'stretch',
    padding: 20,    
    backgroundColor: '#01c853',
    alignItems: 'center',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  }
});


