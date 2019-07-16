'use strict';

(function () {
  var WIDTH_PIN = 50;
  var HEIGHT_PIN = 70;

  var mapPinsElement = document.querySelector('.map__pins');

  var renderPinElement = function (data) {
    var pinElement = document.querySelector('#pin')
    .content
    .querySelector('.map__pin');
    var mapPinElement = pinElement.cloneNode(true);
    mapPinElement.style.left = data.location.x - 0.5 * WIDTH_PIN + 'px';
    mapPinElement.style.top = data.location.y - HEIGHT_PIN + 'px';
    mapPinElement.querySelector('img').src = data.author.avatar;
    mapPinElement.querySelector('img').alt = data.offer.title;

    return mapPinElement;
  };

  // Добавляет пины в разметку
  var addPinList = function (descriptionPins) {
    var fragment = document.createDocumentFragment();

    descriptionPins.forEach(function (el) {
      fragment.appendChild(renderPinElement(el));
    });

    mapPinsElement.appendChild(fragment);
  };

  window.renderPin = {
    addPinList: addPinList
  };
})();
