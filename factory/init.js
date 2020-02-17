define(function() {
    'use strict';

    return {
        init: function () {
            var myVideo, myImage,
                mediaFactory = require('factory/mediaFactory');

            myVideo = mediaFactory.createMedia('Video', {
                length: 3.2,
                name: 'my video'
            });

            console.log(myVideo);
        }
    };
})
