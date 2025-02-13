document.getElementById('noButton').addEventListener('mouseover', function() {
    // Hayır butonu üzerine gelindiğinde rastgele konumlandırma
    const x = Math.random() * (window.innerWidth - this.offsetWidth);
    const y = Math.random() * (window.innerHeight - this.offsetHeight);
    this.style.position = "absolute";
    this.style.left = x + 'px';
    this.style.top = y + 'px';
});

document.getElementById('yesButton').addEventListener('click', function() {
    // Evet butonuna tıklandığında ana içerik gizlenir
    document.getElementById('container').style.display = 'none';

    // Yuupii yazısı ve yeni görsel gösterilir
    const result = document.getElementById('result');
    result.classList.remove('hidden');
    result.querySelector('#newImage').src = 'https://c.tenor.com/9CPzp06cA4YAAAAC/tenor.gif';

    // Kalpleri ekleyelim
    for (let i = 0; i < 10; i++) {
        createHeart();
    }
});

function createHeart() {
    // Kalp elementi oluştur
    const heart = document.createElement("i");
    heart.className = "fas fa-heart";
    heart.style.position = "absolute";
    heart.style.left = (Math.random() * 100) + "vw";
    heart.style.animationDuration = (Math.random() * 3) + 2 + "s";
    
    // Kalp elementini ekleyelim
    document.getElementById('result').appendChild(heart);

    // Kalp sayısını kontrol edelim ve gerekiyorsa kalpleri temizleyelim
    const heartArr = document.querySelectorAll(".fa-heart");
    if (heartArr.length > 200) {
        heartArr[0].remove();
    }
}

// Kalp oluşturma fonksiyonunu belirli bir aralıkta çağıralım
setInterval(createHeart, 100);