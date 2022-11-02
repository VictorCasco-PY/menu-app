const SHEET_ID = "13DaYe28pSfUPGxtrcPmXgNkoWCWKc0wre2oLSx6hKQU";
const TOKEN = "ya29.a0Aa4xrXPPJuQXbSMEOgStJupWFg68YzUWnOwWCvcWT9XqWnzmwtFiBtOd4P3FYqASoaj9zGo6-eqhrXInqUk9NqHKBwDhM929y5m9AFWQ3iUF0YdGUWbvV-wsi0n4OzmGEOBkufh5ZYoW0b2KTrGtEKKqWxM7aCgYKATASARMSFQEjDvL9E1LbvY9psIE22tP5nxzkgQ0163";
//Valores offline
let offlineValues = [
    ["Empanada", "(carne, pollo, JyQ, chilena)", 1000],
    ["Prueba2", "(ingredientes)", 20000],
    ["Prueba3", "(ingredientes)", 2000],
    ["Prueba4", "(ingredientes)", 26000],
];

fetch(
    `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/menu!A2:C`,
    {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${TOKEN}`,
        },
    }
).then(function (response) {
    response.json().then(function (data) {
        const VALUES = data.values;
        const LISTA = document.getElementById("lista-menu");

        for (let i = 0; i < VALUES.length; i++) {
            //Div que contiene los datos
            const PRODUCTO = document.createElement("tr");
            PRODUCTO.className = "menu-item";

            //Nombre del producto
            const ITEM_PROD = document.createElement("td");
            ITEM_PROD.className = "item producto";
            ITEM_PROD.innerHTML = VALUES[i][0];

            //Descripcion del producto
            const ITEM_DESC = document.createElement("td");
            ITEM_DESC.className = "item desc";
            ITEM_DESC.innerHTML = VALUES[i][1];

            //Precio del producto
            const ITEM_PRECIO = document.createElement("td");
            ITEM_PRECIO.className = "item precio";
            ITEM_PRECIO.innerHTML = VALUES[i][2] + 'Gs.';

            //Se agregan al div los span
            PRODUCTO.appendChild(ITEM_PROD);
            PRODUCTO.appendChild(ITEM_DESC);
            PRODUCTO.appendChild(ITEM_PRECIO);

            //Se agregan al HTML
            LISTA.appendChild(PRODUCTO);
        }
    }).catch((error) => {
        //Manejo de excepciones
        const LISTA = document.getElementById("lista-menu");

        for (let i = 0; i < offlineValues.length; i++) {
            //Div que contiene los datos
            const PRODUCTO = document.createElement("tr");
            PRODUCTO.className = "menu-item";

            //Nombre del producto
            const ITEM_PROD = document.createElement("td");
            ITEM_PROD.className = "item producto";
            ITEM_PROD.innerHTML = offlineValues[i][0];

            //Descripcion del producto
            const ITEM_DESC = document.createElement("td");
            ITEM_DESC.className = "item desc";
            ITEM_DESC.innerHTML = offlineValues[i][1];

            //Precio del producto
            const ITEM_PRECIO = document.createElement("td");
            ITEM_PRECIO.className = "item precio";
            ITEM_PRECIO.innerHTML = offlineValues[i][2] + 'Gs.';

            //Se agregan los Datos de la tabla a las filas
            PRODUCTO.appendChild(ITEM_PROD);
            PRODUCTO.appendChild(ITEM_DESC);
            PRODUCTO.appendChild(ITEM_PRECIO);

            //Se agregan al HTML
            LISTA.appendChild(PRODUCTO);
        }
    });
});
