// nuevo array con listado de planes
 const planesMensuales = [{
        tipo: "Básico",
        costo: 300,
        descripcion: "Podes escuchar música sin límites todo el mes."
    },
    {
        tipo: "Dúo",
        costo: 450,
        descripcion: "Música ilimitada para vos y alguien más."
    },
    {
        tipo: "Familiar",
        costo: 600,
        descripcion: "El mejor plan, hasta un total de 5 miembros."
    },
];

window.addEventListener('load', function () {
    const footer = document.querySelector('footer');

    let contador = 0
    
    const intervalo = this.setInterval(() => {
        let posicion = contador % 3;
        footer.innerHTML = `<p>Plan: <strong>${planesMensuales[posicion].tipo}</strong> $ ${planesMensuales[posicion].costo}</p><p>${planesMensuales[posicion].descripcion}</p>`
        contador++;

    }, 3000)

    footer.addEventListener('dblclick', function () {
        clearInterval(intervalo);
    })
})

