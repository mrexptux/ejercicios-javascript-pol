const baseUrl = 'https://api.nationalize.io';
const button$ = document.querySelector("button");
const input$$ = document.querySelector("input");


const buscar = () => {
    const input$$ = document.querySelector('input');

    fetch(baseUrl + '?name=' + input$$.value).then(res => res.json()).then(person => {
        crearNacionalizarP(person)
    })
}


const crearNacionalizarP = (person) => {
    const p$$ = document.createElement("p");
    let text = `El nombre ${person.name} tiene`;

    for (const country of person.country) {
        const porcentage = Math.floor(country.probability * 100);
        text += ` un ${porcentage} porciento de ser de ${country.country_id}`;
    }

    p$$.textContent = text;
    document.body.appendChild(p$$);
};


button$.addEventListener("click", buscar);