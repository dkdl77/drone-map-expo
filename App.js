import React, { useState } from 'react';
import { View, Button, StyleSheet, Alert } from 'react-native';
import MapComponent from './src/components/MapComponent';
import fetchDroneData from './src/services/droneApi';
import { filterDetectedObjects } from './src/utils/filter';

export default function App() {
  const [markers, setMarkers] = useState([]);

  const handleDetect = async () => {
    try {
      const droneData = await fetchDroneData();
      const validObjects = filterDetectedObjects(droneData, {
        type: "person",
        confidence: 0.9
      });

      if (validObjects.length > 0) {
        setMarkers(validObjects);
        Alert.alert('탐지 성공', '조건을 만족하는 객체가 지도에 표시되었습니다!');
      } else {
        Alert.alert('알림', '조건을 만족하는 객체가 없습니다.');
      }
    } catch (error) {
      Alert.alert('에러', '드론 데이터 수신 실패: ' + error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Button title="드론 객체 탐지" onPress={handleDetect} />
      <MapComponent markers={markers} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: '#fff'
  }
});
