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

$('#offCanvas').foundation('close');

$(document).ready(function () {
    checkScreenSize();
    NewscheckScreenSize();
    industryCode();
});