const images = [
    {
        id: 1,
        source: 'https://meme.museum/_images/4aada8eb8ff614d68985e922fe226373/5313%20-%20account%20donald_trump%20facebook%20hack%20hacking%20kim_jong-un%20programming%20text.png'
    },
    {
        id: 2,
        source: 'https://www.freecodecamp.org/news/content/images/2019/07/scumbag-javascript.jpeg'
    },
    {
        id: 3,
        source: 'https://ahseeit.com//king-include/uploads/2021/01/133868364_232714921746992_7115436353011383073_n-5484690961.jpg'
    },
    {
        id: 4,
        source: 'https://i.pinimg.com/originals/ef/9a/0f/ef9a0f91fb24fd8202fa7fe79253762e.jpg'
    },
    {
        id: 5,
        source: 'https://miro.medium.com/max/1280/0*gUmnBbPXyTNTL8hI'
    }
];

const openBtn = document.getElementById('open-btn');
const modal = document.querySelector('.modal');
const closeBtn = document.querySelector('.fa-times-circle');
let imageSrc = document.getElementById('meme');

let index = -1;

openBtn.addEventListener('click', function () {
    index++;

    if (index >= images.length) {
        index = 0;
    }

    imageSrc.src = images[index].source;
    modal.classList.add('show-modal');
});

closeBtn.addEventListener('click', function () {
    modal.classList.remove('show-modal');
});