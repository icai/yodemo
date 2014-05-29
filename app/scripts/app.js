var Yodemo = window.Yodemo = Ember.Application.create({
	API_HOST:'http://c.com/',
	API_VER:'api/'
});
Yodemo.CONFIG = {
    jwplayer:{
        key: 'oG0v5NALSVPtw3/3bmz4Lq2P2+1BYpjKlo+m7A=='
    },
    facebook: {
        appId: '216000381800259'//cndev: 348431525260908 //thecn: 216000381800259
    },
    twitter: {
        appId: '2Zo2cstrfHtntlPuK4uhQ'//cndev MdsjWCQWmqmR4Qk6t71pPA //thecn: 2Zo2cstrfHtntlPuK4uhQ
    },
    google:{
        appId: '510131775518-purd7jlil27va2podcru9sjm1ijnlluf.apps.googleusercontent.com'//cndev'
    },
    linkedin: {
        appId: '756dsfeo9427ih'//cndev
    }
}



/* Order and include as you please. */
require('scripts/controllers/*');
//require('scripts/store');
require('scripts/adopter/*');
require('scripts/models/*');
require('scripts/routes/*');
require('scripts/views/*');
require('scripts/router');
