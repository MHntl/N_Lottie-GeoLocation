//https://www.npmjs.com/package/@react-native-community/geolocation
//Configuration and Permissions gereklidir 
Info.plist

<key>NSLocationAlwaysAndWhenInUseUsageDescription</key>
	<string>Konumunuza erişmek için izin vermeniz gerekiyor!</string>
	<key>NSLocationAlwaysUsageDescription</key>
	<string>Konumunuza erişmek için izin vermeniz gerekiyor!</string>
	<key>NSLocationWhenInUseUsageDescription</key>
	<string>Konumunuza erişmek için izin vermeniz gerekiyor!</string>




import Geolocation from '@react-native-community/geolocation';

Geolocation.getCurrentPosition(info => console.log(info));
