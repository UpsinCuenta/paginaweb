const imagenes = document.querySelectorAll(".img-galeria");
const imagenesLight = document.querySelector(".agregar-imagen");
const contenedorLight = document.querySelector(".imgen-light");
const imagen2 = document.querySelector(".imagen1");

imagenes.forEach(imagene =>{
    imagene.addEventListener("click", ()=>{
        aparecerImagen(imagene.getAttribute("src"));
        
    })
})

contenedorLight.addEventListener("click", (e)=>{
    if(e.target !== imagenesLight){
        contenedorLight.classList.toggle("show") 
        imagenesLight.classList.toggle("showImagen")
        imagen2.style.opacity = "1"       
    }
})

const aparecerImagen = (imagen)=>{
    imagenesLight.src = imagen;
    contenedorLight.classList.toggle("show") 
    imagenesLight.classList.toggle("showImagen")
    imagen2.style.opacity ="0"
}
