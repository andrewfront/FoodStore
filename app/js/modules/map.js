const map = () => {
//     function loadScript() {
//         const elem = document.createElement('script');
//         elem.type = 'text/javascript';
//         elem.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyDGgGu0VTYTQAtYvAdDC0Sj1N9OYnlsHgw&callback=initMap';
//         document.querySelectorAll('body')[0].append(elem);
//     }
//     function initMap() {
//         const myLatLng = {
//             lat: 41.387642,
//             lng: 2.173819
//         };
//         const map = new google.maps.Map(document.getElementById("map"), {
//             mapId: "83455f3bf713e66e",
//             zoom: 10,
//             center: myLatLng,

//             disableDefaultUI: false,
//             scrollwheel: true,
//             zoomControl: false
//         });
//         const marker = new google.maps.Marker({
//             position: {
//                 lat: 41.387642,
//                 lng: 2.173819
//             },
//             map,
//             title: "Hello World!",
//             optimized: false,
//             icon: {
//                 url: '../../images/location.svg',
//                 scaledSize: new google.maps.Size(70, 70),
//             }
//         });
//         const infowindow = new google.maps.InfoWindow({
//             content: "thanks for click!",
//         });
//         marker.addListener("click", () => {
//             infowindow.open({
//                 anchor: marker,
//                 map,
//                 shouldFocus: false,
//             });
//         });
//     }
//     setTimeout(loadScript, 1000)
//     setTimeout(initMap, 2000)
}
export default map