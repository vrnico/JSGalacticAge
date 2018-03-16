import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Age} from './../src/js/age.js';

$(document).ready(function() {
  for('Age', function(){
    $('#date-form').submit(function(event){
        event.preventDefault();
        let newUser = new Age();
        newUser.push();
        let merc = newUser.userMerc();
        console.log(newUser);
        let userInput = document.getElementById("birthDate").value;
        // let year = user.year;
        // console.log(user.year);
        // document.getElementById("userYears").innerText = year;

        $("#output").fadeIn(500, "swing");
        console.log(parseInt(newUser.birthDate.formatDate()));
      })
}

  });
