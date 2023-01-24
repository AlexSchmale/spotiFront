/* -------------------------------------------------------------------------- */
/*                        [4] FUNCION: marcar favorito                        */
/* -------------------------------------------------------------------------- */

 function setFavorite(){
    const heartButton = document.querySelectorAll('.fa-heart')

    heartButton.forEach(button =>{

        button.addEventListener('click', function(){

            albumesFamosos.forEach(album =>{
                if (album.id === button.id) {
                    album.like = !album.like                  
                }
            })

            renderizarAlbumes(albumesFamosos)
            setFavorite()
        })

    })
}
setFavorite() 


/* ----------------------------- MESA DE TRABAJO ---------------------------- */
/* -------------------------------------------------------------------------- */
/*                         [5] FUNCION: Eliminar album                        */
/* -------------------------------------------------------------------------- */

 function borrarAlbum(){
    window.addEventListener('keydown', function(e){

        if (e.key === 'f') {
            let albumAEliminar = prompt('¿Qué álbum desea eliminar?')

            albumesFamosos.forEach(album =>{
                if (album.nombre.toLocaleLowerCase() === albumAEliminar.toLocaleLowerCase()) {
                    albumesFamosos = albumesFamosos.filter(album => album.nombre.toLocaleLowerCase() != albumAEliminar.toLocaleLowerCase())
                    
                    renderizarAlbumes(albumesFamosos)
                    setFavorite()
                }
            })
        }
        

    })
}
borrarAlbum()