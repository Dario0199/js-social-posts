// Ricreiamo un feed social aggiungendo al layout di base fornito (allegato sotto) il nostro codice javascript in cui:
// - Creiamo il nostro array di 5 oggetti che rappresentano ciascun post. Ogni post dovrà avere le informazioni necessarie per stampare la relativa card: nome autore, foto profilo, data, testo del post, immagine, numero di likes.
// Per le immagini va bene utilizzare qualsiasi servizio di placeholder ad es: https://picsum.photos/id/237/600/350
// - Prendendo come riferimento il layout di esempio presente nell’html, stampiamo i post del nostro feed.
const container = document.getElementById('container');

const posts = [
{
    avatar: 'https://picsum.photos/200',
    name:'Magdalena Hunter',
    time: '30 minuti',
    text: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
    image:'https://picsum.photos/id/237/500/300',
    like:'105',
},
{
    avatar: 'https://picsum.photos/200',
    name:'Forrest Pate',
    time: '9 ore',
    text: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
    image:'https://picsum.photos/id/231/500/300',
    like:'162',
},
{
    avatar: 'https://picsum.photos/200',
    name:'Sherri Mccullough',
    time: '1 week',
    text: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
    image:'https://picsum.photos/id/232/500/300',
    like:'250',
},
{
    avatar: 'https://picsum.photos/200',
    name:'Finley Cervantes',
    time: '5 mounth',
    text: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
    image:'https://picsum.photos/id/233/500/300',
    like:'94',
},
{
    avatar: 'https://picsum.photos/200',
    name:'Salim Fleming',
    time: '3 week',
    text: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
    image:'https://picsum.photos/id/234/500/300',
    like:'148',
},
];
console.log(posts);
console.table(posts);

genPosts(posts, container)

//FUNZIONI
function genPosts(posts, container){
    for(let i = 0; i < posts.length; i++){
        const postItem = posts[i]

        container.innerHTML += `
        <div class="post">
            <div class="post__header">
                <div class="post-meta">                    
                    <div class="post-meta__icon">
                        <img class="profile-pic" src="${postItem.avatar}" alt="${postItem.name}">                    
                    </div>
                    <div class="post-meta__data">
                        <div class="post-meta__author">${postItem.name}</div>
                        <div class="post-meta__time">${postItem.time}</div>
                    </div>                    
                </div>
            </div>
            <div class="post__text">${postItem.text}</div>
            <div class="post__image">
                <img src="${postItem.image}" alt="">
            </div>
            <div class="post__footer">
                <div class="likes js-likes">
                    <div class="likes__cta">
                        <a class="like-button  js-like-button" href="#" data-postid="1">
                            <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                            <span class="like-button__label">Mi Piace</span>
                        </a>
                    </div>
                    <div class="likes__counter">
                        Piace a <b id="like-counter-1" class="js-likes-counter">${postItem.like}</b> persone
                    </div>
                </div> 
            </div>            
        </div
        `
    }
}

