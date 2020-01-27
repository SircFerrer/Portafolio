'use strict';

const grid = new Muuri(".grid", {
    layout: {
        rounding: false
    }
});

window.addEventListener('load', () => {
    grid.refreshItems().layout();
    document.getElementById("grid").classList.add("loadImg")
    //Agregar los listeners de los links para filtrar por data-category
    const links = document.querySelectorAll("#header__options a");
    links.forEach((link) => {
        link.addEventListener("click", (ev) => {
            ev.preventDefault();
            links.forEach((link) => link.classList.remove("active"))
            ev.target.classList.add("active")
            const category = ev.target.innerHTML;
            category === "Todos" ? grid.filter("[data-category]") : grid.filter(`[data-category= "${category}"]`)

        })

    })

    //Agregar los listeners para la barra búsqueda

    document.querySelector("#search-menu").addEventListener("input", (ev) => {
        const search = ev.target.value;
        grid.filter((item) => item.getElement().dataset.labels.includes(search))

    })
})


