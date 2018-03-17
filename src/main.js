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
      let lifeExpInput = user.lifeExp;
      let lifeExp = (lifeExpInput.toFixed(2));
      let mercLife = user.mercAge;
      let lifeExpMerc = (mercLife.toFixed(2));
      let venusLife = user.venusAge;
      let lifeExpVenus = (venusLife.toFixed(2));
      let marsLife = user.marsAge;
      let lifeExpMars = (marsLife.toFixed(2));
      let jupiterLife = user.jupiterAge;
      let lifeExpJupiter = (jupiterLife.toFixed(4));
      $("#output").fadeTo("swing", 1);


      document.getElementById("userBirthDate").innerText = birthDate;
      document.getElementById("userYears").innerText = age;
      document.getElementById("userSeconds").innerText = seconds;
      document.getElementById("userMerc").innerText = mercYear;
      document.getElementById("userVenus").innerText = venusYear;
      document.getElementById("userMars").innerText = marsYear;
      document.getElementById("userJupiter").innerText = jupiterYear;
      document.getElementById("lifeExp").innerText = lifeExp;
      document.getElementById("lifeExpMerc").innerText = lifeExpMerc;
      document.getElementById("lifeExpVenus").innerText = lifeExpVenus;
      document.getElementById("lifeExpMars").innerText = lifeExpMars;
      document.getElementById("lifeExpJupiter").innerText = lifeExpJupiter;
    })

  });
