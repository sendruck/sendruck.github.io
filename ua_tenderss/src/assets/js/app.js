import $ from 'jquery';
import whatInput from 'what-input';
import {checkScreenSize} from '../js/tender.js';
import {industryCode} from '../js/industry.js';
import {NewscheckScreenSize} from '../js/news.js';

window.$ = $;

import Foundation from 'foundation-sites';
// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
//import './lib/foundation-explicit-pieces';


$(document).foundation();

// window.onbeforeunload = function () {
//     window.scrollTo(0, 0);
// }

$(document).ready(function () {  
    window.scrollTo(0, 0);
    checkScreenSize();
    NewscheckScreenSize();
    industryCode();
});