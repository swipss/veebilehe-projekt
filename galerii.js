// ise kirjutatud
// võtab kõik elemendid class-iga "fullscreen" ja loopib ükshaaval kõik üle, lisades neile peale klikimise "kuulaja" ehk teeb midagi, kui peale vajutatakse
document.querySelectorAll('.fullscreen').forEach(function(img) {
    // lisatakse class pildi positsiooni ja suuruse muutmiseks
    img.classList.add('img-enlargable');
    img.addEventListener('click', function() {
        // võetakse pildi küljest link
        var src = this.getAttribute('src');
        // tehakse uus element millele lisatakse taustaks pildi link ja muud stiilid
        var overlay = document.createElement('div');
        overlay.style.background = 'RGBA(0,0,0,.5) url(' + src + ') no-repeat center';
        overlay.style.backgroundSize = 'contain';
        overlay.style.width = '100%';
        overlay.style.height = '100%';
        overlay.style.position = 'fixed';
        overlay.style.zIndex = '10000';
        overlay.style.top = '0';
        overlay.style.left = '0';
        overlay.style.cursor = 'zoom-out';
        // uuele elemendile peale vajutades eemaldatakse loodud element
        overlay.addEventListener('click', function() {
            document.body.removeChild(this);
        });
        // lisab uue elemendi dokumenti
        document.body.appendChild(overlay);
    });
});