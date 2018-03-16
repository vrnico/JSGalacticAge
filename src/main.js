import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

$(document).ready(function() {
  $('#name-form').submit(function(event) {
    event.preventDefault();
    var name = $('#name').val();
    console.log(name);
      alert("whaddup");
    });
  });
