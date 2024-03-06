const baseUrl = 'https://api.nationalize.io';

const buscador = () => {
    const input$$ = document.querySelector('input');

    fetch(baseUrl + '?name=' + input$$.value).then(res => res.json()).then(person => {
        crearNacionalizarP(person)
    })
}


const crearNacionalizarP = (person) => {

    let text = `El nombre ${person.name} tiene`;

    for (const pais of person.country) {
        const porcentage = Math.floor(pais.probability * 100)
        text += ` un ${porcentage} porciento de ser de ${pais.country_id}`;
    }

    const div$$ = document.createElement('div');
    const p$$ = document.createElement('p');
    const button$$ = document.createElement('button');

    p$$.textContent = text;
    button$$.innerHTML = 'X (Eliminar)';

    div$$.appendChild(p$$);
    div$$.appendChild(button$$);

    button$$.addEventListener('click', () => { eliminarPersona(div$$) })
    document.body.appendChild(div$$);

}

const eliminarPersona = (Div$$) => {
    Div$$.remove();
}

const button$ = document.querySelector('button');
button$.addEventListener('click', buscador);



