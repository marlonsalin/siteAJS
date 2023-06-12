
const closePainelFoto = document.getElementById('close-Painel-fotos')
const closePainelVideo = document.getElementById('close-Painel-videos')
// captando elemento header principal 

const headerMain = document.getElementById('main-header')


// botao painel selecao de foto ou video
const btnvideo = document.getElementById('btn-video')
const btnphotos = document.getElementById('btn-photos')

// containers de elementos de quadro galeria foto e video
const containerPhoto = document.getElementById('photos-content')
const containerVideo = document.getElementById('videos-content')


// 

// recebe elementos botao de seleção de fotos e video
const btnPrev = document.getElementById('btn-prev')
const btnProx = document.getElementById('btn-next')
const btnNextMovie = document.getElementById('btn-next-video')
const btnPrevMovie = document.getElementById('btn-prev-video')


// recebe todas os elementos que possuem a classe .my-photos: onde o mesmo apresenta a imagem em cada div(.my-photos)
let mySlides = document.querySelectorAll('.my-photos')

let mySlidesMovie = document.querySelectorAll('.my-videos')



// variavel global seletora do indice de slides(fotos)
let selectSlide = 1


// botao seleciona o painel de fotos
btnphotos.addEventListener('click', () => {
    containerPhoto.style.display = 'block'
    containerPhoto.style.left = '0'
})

btnvideo.addEventListener('click', () => {
    containerVideo.style.display = 'block'
    containerVideo.style.left= '0'

})



// EVENTOS QUE FECHAM O PAINEL FOTOS OU PAINEL VIDEO
closePainelFoto.addEventListener('click', () => {
    selectSlide = 1
    containerPhoto.style.display = 'none'
    containerPhoto.style.left = '0'
})

closePainelVideo.addEventListener('click', () => {
    selectSlide = 1
    containerVideo.style.display = 'none'
    containerVideo.style.left = '0'
})
// 







// inicia a pagina com o primeiro slide(foto)[1]
indicadorPhoto(selectSlide)


// ouvidores de eventos botaos select elementos fotos
btnPrev.addEventListener('click', () => {
    selectPhotos(-1)
})

btnProx.addEventListener('click', () => {
    selectPhotos(1)
})
// 
// 
// 


// inicia a pagina com o primeiro slide(video)[1]
indicadorVideo(selectSlide)

// ouvidores de eventos botaos select elementos fotos
btnPrevMovie.addEventListener('click', () => {
    selectMovie(-1)
})

btnNextMovie.addEventListener('click', () => {
    selectMovie(1)
})
// 
// 
// 

function selectPhotos(n){
    indicadorPhoto(selectSlide += n)
}

function selectMovie(n){
    indicadorVideo(selectSlide += n)

}


// funções de tratamento de indicação foto e video

function indicadorPhoto(n){
   if(n > mySlides.length){
        selectSlide = 1
   }

   if(n < 1){
        selectSlide = mySlides.length
    }

    for(let i = 0; i < mySlides.length; i++){

        mySlides[i].style.display = 'none'

    }

    mySlides[selectSlide-1].style.display = 'block'

}

function indicadorVideo(n){
    if(n > mySlidesMovie.length){
        selectSlide = 1
   }

   if(n < 1){
        selectSlide = mySlidesMovie.length
    }

    for(let i = 0; i < mySlidesMovie.length; i++){

        mySlidesMovie[i].style.display = 'none'

    }

    mySlidesMovie[selectSlide-1].style.display = 'block'


}

