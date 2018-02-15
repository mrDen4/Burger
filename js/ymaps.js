ymaps.ready(init);
var myMap,
    myPlacemark;

function init() {
    myMap = new ymaps.Map("map", {
        center: [55.99750671, 37.21066432],
        zoom: 13,
        controls: ['zoomControl'],
        behaviors: ['drag']
    });

    myPlacemark = new ymaps.Placemark([55.996185, 37.211611], {
        hintContent: 'Cafe friends',
        balloonContent: 'ФРЭНДС'
    });

    myMap.geoObjects.add(myPlacemark);
}