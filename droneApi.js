import axios from 'axios';

export default async function fetchDroneData() {
  // 실제로는 서버 API 주소로 수정!
  // const response = await axios.get('https://YOUR-SERVER-URL/api/detected-objects');
  // return response.data;

  // 테스트용 더미 데이터
  return [
    { lat: 37.567, lng: 126.982, type: "person", confidence: 0.95 },
    { lat: 37.565, lng: 126.976, type: "car", confidence: 0.85 }
  ];
}
