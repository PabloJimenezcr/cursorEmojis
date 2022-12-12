let emojis = ['🎄', '🎁', '🎄', '✨', '🎄', '🎇'];

document.addEventListener('mousemove', function (e) {
    let body = document.querySelector('body');
    let emoji = document.createElement('span');
    let x = e.offsetX;
    let y = e.offsetY;

    emoji.style.left = x + 'px';
    emoji.style.top = y + 'px';

    let icon = emojis[Math.floor(Math.random() * emojis.length)];
    emoji.textContent = icon;

    let size = Math.random() * 50;
    emoji.style.fontSize = 5 + size + 'px';

    let max = 0;
    let min = 200;
    let ramdomValue = Math.floor((Math.random() * ((max + 1) - min)) + min);

    emoji.style.transform = 'translateX(' + ramdomValue + ' px)';

    body.appendChild(emoji);
    setTimeout(function () {
        emoji.remove();
    }, 1000);
});