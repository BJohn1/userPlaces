import React, { Component } from 'react'
import MapView from 'react-native-maps'
import { StyleSheet, Dimensions, View, ShadowPropTypesIOS } from 'react-native'


export default function Map(props){
    let userLocationMarker = null;
    if(props.userLocation){
        userLocationMarker = <MapView.Marker coordinate={props.userLocation}/>
        console.log(props.userLocation)
    }
    const usersMarkers = props.userPlaces.map(userPlace => <MapView.Marker coordinate={userPlace} key={userPlace.id}/>)
      return(
        <View style={styles.container}>
          <MapView
             style={styles.map}
             initialRegion={{
               latitude: 37.78825,
               longitude: -122.4324,
               latitudeDelta: 0.0922,
               longitudeDelta: 0.0421,
             }}
             region={props.userLocation}
             >
                 {userLocationMarker}
                 {usersMarkers}
             </MapView>
        </View>
        )
      }

let {height, width} = Dimensions.get('window')
const styles = StyleSheet.create({
 container: {
   height: height,
   width: width,
 },
 map: {
   ...StyleSheet.absoluteFillObject,
 }})