/* --------------------------- listado de almbumes --------------------------- */
let albumesFamosos = [{
        id: "x123",
        nombre: "Nevermind",
        imagen: "https://m.media-amazon.com/images/I/71DQrKpImPL._SL1400_.jpg",
        like: true
    },
    {
        id: "y456",
        nombre: "Thriller",
        imagen: "https://img.discogs.com/LfnH5tbhcZ4xRMNLAodIyvea9xA=/fit-in/600x600/filters:strip_icc():format(webp):mode_rgb():quality(90)/discogs-images/R-294033-1151290881.jpeg.jpg",
        like: true
    },
    {
        id: "z789",
        nombre: "The wall",
        imagen: "https://img.discogs.com/EbLYco6R1A-5Z7QJ4t4O1JSzsM8=/fit-in/587x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-4620059-1370165707-3841.jpeg.jpg",
        like: false
    },
    {
        id: "a987",
        nombre: "Abbey Road",
        imagen: "https://cloudfront-us-east-1.images.arcpublishing.com/copesa/RDH5EPH2TNENPI73NBWUWWMLPA.jpg",
        like: false
    },
    {
        id: "b654",
        nombre: "Origin of Symmetry",
        imagen: "https://http2.mlstatic.com/D_NQ_NP_967206-MLA26105577132_102017-O.webp",
        like: false
    },
    {
        id: "c321",
        nombre: "Back in Black",
        imagen: "https://i1.wp.com/www.scienceofnoise.net/wp-content/uploads/2020/07/068660474366a63e1263e53ff370eb50.jpg",
        like: false
    },
];


/* -------------------------------------------------------------------------- */
/*                  [1] FUNCION: captar el nombre de usuario                  */
/* -------------------------------------------------------------------------- */

    function nombreUsuario() {
        const user = document.querySelector("#nombreUsuario")
        let name = ''
    
        do{
            name = prompt("Por favor Ingrese su nombre de usuario")
        } while (name === null || !isNaN(name) || name.length<3)
    
        user.innerText = name
    }
    nombreUsuario()



/* -------------------------------------------------------------------------- */
/*                [2] FUNCION: renderizar tarjetas del albumes               */
/* -------------------------------------------------------------------------- */

function renderizarAlbumes(list){
    const listaAlbumes = document.querySelector('.covers')
    listaAlbumes.innerHTML=''
    list.forEach((album) => {
        listaAlbumes.innerHTML += `
        <li>
            <img src='${album.imagen}' alt='${album.nombre}'>
            <p>${album.nombre}</p>
            <i id='${album.id}' class = 'fa fa-heart ${album.like ? 'favorito' :''}' ></i>
        </li>
        `
    });
    mostrarListadoYFavoritos(list)

}
renderizarAlbumes(albumesFamosos)



/* ----------------------------- MESA DE TRABAJO ---------------------------- */
/* -------------------------------------------------------------------------- */
/*                   [3] FUNCION: mostrar datos del usuario                   */
/* -------------------------------------------------------------------------- */


function mostrarListadoYFavoritos(list){
    const totalAlbumes = document.querySelector('#cant-albums')
    const totalFavoritos = document.querySelector('#cant-favoritos')
    let counter = 0
    totalAlbumes.innerHTML = `${list.length} ${list.length === 1 ? 'álbum':'álbumes'}`
    totalFavoritos.innerHTML = ''

    list.forEach(album =>{
        if (album.like === true) {
            counter++
        }
    })
    totalFavoritos.innerHTML = `${counter} ${counter === 1? ' favorito':'favoritos'}`
}

