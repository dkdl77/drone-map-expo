import React from 'react';
import MapView, { Marker } from 'react-native-maps';
import { View, StyleSheet } from 'react-native';

const GOOGLE_MAPS_API_KEY = "AIzaSyCI_zBk8q3oE9kvcSgS__TCcpT2meVQpt4"; // ← 본인 키 입력

export default function MapComponent({ markers }) {
  const initialRegion = {
    latitude: 37.5665,
    longitude: 126.9780,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01
  };

  return (
    <View style={styles.mapContainer}>
      <MapView
        style={styles.map}
        initialRegion={initialRegion}
      >
        {markers.map((obj, idx) => (
          <Marker
            key={idx}
            coordinate={{ latitude: obj.lat, longitude: obj.lng }}
            title={obj.type}
            description={`신뢰도: ${obj.confidence}`}
            pinColor={obj.type === 'person' ? 'blue' : 'red'}
          />
        ))}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  mapContainer: {
    flex: 1,
    marginTop: 20
  },
  map: {
    width: '100%',
    height: '100%'
  }
});
