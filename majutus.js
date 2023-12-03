//meetod addEventListener lisab 'DOMContentLoaded'-sündmuse külge kuulajat, 
//mis kontrollib, kas HTML fail on jõudnud üleslaadimisega lõpuni. Kui see saab tehtud, aktiveerub järgmine kood, 
//mille tähistab funktsioon function()
document.addEventListener('DOMContentLoaded', function () {

  //dimOverlay viitab semenimelisele objektile HTML failist, 
  //mis aktiveerituna pimendab tausta hiire asumisel fotokarusselli alale
  var dimOverlay = document.getElementById('dimOverlay');
  
  //teised muutujad viitavad karussellidele HTML failis
  var karussell = document.getElementById('karussell');
  var karussell2 = document.getElementById('karussell2');
  var karussell3 = document.getElementById('karussell3');
  var karussell4 = document.getElementById('karussell4');

  //kui kursor on karuselli peal, aktiveerub pimenduskiht dimOveraly. 
  //Kuna karusell asub teises kihis, jääb see pemendamata
  karussell.addEventListener('mouseover', function () {
      dimOverlay.style.display = 'block';     
  });

  karussell2.addEventListener('mouseover', function () {
    dimOverlay.style.display = 'block';
  });

  karussell3.addEventListener('mouseover', function () {
    dimOverlay.style.display = 'block';
  });

  karussell4.addEventListener('mouseover', function () {
    dimOverlay.style.display = 'block';
  });

  //kursor siirdub karuselli alast välja - dimOverlay lõpetab toimimist, jälle hele ekraan
  karussell.addEventListener('mouseout', function () {
      dimOverlay.style.display = 'none'; 
  });

  karussell2.addEventListener('mouseout', function () {
    dimOverlay.style.display = 'none'; 
  });

  karussell3.addEventListener('mouseout', function () {
    dimOverlay.style.display = 'none'; 
  });
  karussell4.addEventListener('mouseout', function () {
    dimOverlay.style.display = 'none';  
});

});

