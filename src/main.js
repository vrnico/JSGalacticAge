import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Age} from './js/age.js';
import {Entry} from './js/entry.js';

$(document).ready(function() {

  let newEntry = new Entry("test");

    $('#date-form').submit(function(event){
      event.preventDefault();
      let birthDate = document.getElementById('birthDate').value;
      newEntry.create(birthDate);
      let user = newEntry.age[0];
      let year = user.year;
      let age = (year.toFixed(2));

      let mercAge = user.userMerc();
      let mercYear = (mercAge.toFixed(2));
      let venusAge = user.userVenus();
      let venusYear = (venusAge.toFixed(2));
      let marsAge = user.userMars();
      let marsYear = (marsAge.toFixed(2));
      let jupiterAge = user.userJupiter();
      let jupiterYear = (jupiterAge.toFixed(2));
      let seconds = (Math.floor(user.age));
      $("#output").fadeTo("swing", 1);
      console.log(user);
      console.log(birthDate);

      document.getElementById("userBirthDate").innerText = birthDate;
      document.getElementById("userYears").innerText = age;
      document.getElementById("userSeconds").innerText = seconds;
      document.getElementById("userMerc").innerText = mercYear;
      document.getElementById("userVenus").innerText = venusYear;
      document.getElementById("userMars").innerText = marsYear;
      document.getElementById("userJupiter").innerText = jupiterYear;
    })

  });
