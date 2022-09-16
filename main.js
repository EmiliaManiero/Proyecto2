class Pelicula {
    constructor(titulo, imagen, director, descripcion, link) {
        this.titulo = titulo;
        this.imagen = imagen,
        this.director = director;
        this.descripcion = descripcion;
        this.link = link;
    }
}
const peliculas = [
    new Pelicula("Top Gun: Maverick", "../img/TopGun.jpg", "Joseph Kosinski", "Después de más de treinta años de servicio como uno de los mejores aviadores de la Armada, Pete Mitchell está donde pertenece, forzando los límites como valiente piloto de pruebas y esquivando el avance de rango que lo dejaría en tierra.", "https://www.youtube.com/watch?v=zzBIzYmxatU"), 
    new Pelicula("Thor: Love and Thunder", "../img/Thor.jpg", "Taika Waititi", "Thor reclama la ayuda de Valquiria, Korg y su exnovia Jane Foster para luchar contra Gorr el Dios Carnicero, que pretende extinguir a los dioses.", "https://www.youtube.com/watch?v=E5xC9i_1vvY"),
    new Pelicula("Blonde", "../img/Blonde.jpg", "Andrew Dominik", "Una crónica ficticia de la vida interior de Marilyn Monroe.", "https://www.youtube.com/watch?v=6mgek159VZs"),
    new Pelicula("El padrino", "../img/TheGodFather.jpg", "Francis Ford Coppola", "El envejecido patriarca de una dinastía del crimen organizado en la ciudad de Nueva York de la posguerra transfiere el control de su imperio clandestino a su reacio hijo menor.", "https://www.youtube.com/watch?v=nLowVe2RBeA"),
]

function mostrarDetalle(pelicula) {
    const contenedorDePeliculas = document.getElementById("contenedor-de-peliculas");
    contenedorDePeliculas.innerHTML = "";
    
    contenedorDePeliculas.innerHTML = `
        <img src="${pelicula.imagen}" alt="${pelicula.titulo}">
        <h3>${pelicula.titulo}</h3>
        <p>Director: ${pelicula.director}</p>
        <a href="${pelicula.link}">"Ver Trailer"</a>
    `;
}

function crearBotonVolver(){
    const botonVolver = document.createElement("button");
    botonVolver.classList.add("boton-volver");
    botonVolver.innerText = "Atras";
    botonVolver.addEventListener("click", () => {
        mostrarPeliculas(peliculas);
    }
    )
    document.getElementById("contenedor-de-peliculas").prepend(botonVolver);
}

function crearBotonVerDetalle(pelicula){
    const button = document.createElement("button");
    button.innerText = "Ver Detalle";
    button.addEventListener("click", () => {
        mostrarDetalle(pelicula);
        crearBotonVolver();
    })
    return button;
}

function mostrarPeliculas(peliculas) {
    const contenedorDePeliculas = document.getElementById("contenedor-de-peliculas");
    contenedorDePeliculas.innerHTML = "";

    peliculas.forEach(pelicula => {
        const divPelicula = document.createElement("div");
        divPelicula.classList.add("pelicula");
        divPelicula.innerHTML = `
            <img src="${pelicula.imagen}" alt="${pelicula.titulo}">
            <h3>${pelicula.titulo}</h3>
            <p>Director: ${pelicula.director}</p>
            <a href="${pelicula.link}">Ver Trailer</a>
        `;
        const botonVerDetalle = crearBotonVerDetalle(pelicula)
        divPelicula.appendChild(botonVerDetalle);
        contenedorDePeliculas.appendChild(divPelicula);
    })
}

mostrarPeliculas(peliculas);


