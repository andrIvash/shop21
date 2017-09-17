import '../../node_modules/jquery-modal/jquery.modal.js';
import './jquery.bxslider.min';

console.log('Running App version ! ' + CDN);
//console.log(settings().get('cdn'));


$(document).ready(function(){
  $('.bxslider').bxSlider({
    controls: false,
    auto: true
  });
});
