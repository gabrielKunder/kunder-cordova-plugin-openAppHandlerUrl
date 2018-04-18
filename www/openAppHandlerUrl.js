/* global cordova, window, localStorage */
window.handleOpenURL = function(url) {
  'use strict';
  var parameters = url.split('://')[1];
  if (cordova.platformId === 'ios') {
    if(parameters) {
      if (window.registeredHandlerOpenUrl) {
        window.registeredHandlerOpenUrl(url);
      } else {
        localStorage.savedOpenUrl = parameters;
      } 
    }
  }
};

window.webintent.onNewIntent(function(parameters) {
    'use strict';
    if (cordova.platformId === 'android') {
        if (parameters) {
            localStorage.savedOpenUrl = parameters;
        }
    }
});

window.webintent.getUri(function(parameters) {
    'use strict';
    if (cordova.platformId === 'android') {
        if (parameters) {
            localStorage.savedOpenUrl = parameters;
        }
    }
});
