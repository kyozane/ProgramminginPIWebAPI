﻿// the engine class sorts out the calls to the PI WEB API.

//TODO: methods need to be more general and in reference to the PI AF Structure for server overhauls
//Because AJAX is asyncronous, the value returned will always be undefined (uses different browser thread). Because of this the logic will have to be applied within the method rather than in the HTML page.
function getJsonData(webAPIURL) {
    
    $.ajax({
        headers: { "Content-Type": "application/json; charset=utf-8", },
        url: webAPIURL,
        dataType: 'json',
        type: 'GET',
    }).done(function (response) {
        console.log('RESPONSE FROM JSON METHOD :');

        console.log(response);

        //TODO:main logic goes here.
        
    });
}
