'use strict';

(function () {
  var load = function (onLoad, onError) {
    var xhr = new XMLHttpRequest();
    var URL = 'https://js.dump.academy/keksobooking/data';

    xhr.responseType = 'json';

    xhr.addEventListener('load', function () {
      if (xhr.status === window.constatns.SERVER_CODE_OK) {
        onLoad(xhr.response);
      } else {
        onError('Статус ответа: ' + xhr.status + ' ' + xhr.statusText);
      }
    });

    xhr.addEventListener('error', function () {
      onError('Произошла ошибка соединения');
    });

    xhr.addEventListener('timeout', function () {
      onError('Запрос не успел выполниться за ' + xhr.timeout + 'мс');
    });

    xhr.timeout = window.constatns.SERVER_TIMEOUT;

    xhr.open('GET', URL);
    xhr.send();
  };

  var uploadForm = function (data, onUploadSuccess, onUploadError) {
    var xhr = new XMLHttpRequest();
    var URL = 'https://js.dump.academy/keksobooking';

    xhr.responseType = 'json';

    xhr.addEventListener('load', function () {
      if (xhr.status === window.constatns.SERVER_CODE_OK) {
        onUploadSuccess(xhr.response);
      } else {
        onUploadError('Статус ответа: ' + xhr.status + ' ' + xhr.statusText);
      }
    });

    xhr.addEventListener('error', function () {
      onUploadError('Произошла ошибка соединения');
    });

    xhr.addEventListener('timeout', function () {
      onUploadError('Запрос не успел выполниться за ' + xhr.timeout + 'мс');
    });

    xhr.timeout = window.constatns.SERVER_TIMEOUT; // 10s

    xhr.open('POST', URL);
    xhr.send(data);
  };

  window.backend = {
    load: load,
    uploadForm: uploadForm
  };
})();
