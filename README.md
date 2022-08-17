## Magic App to coderhouse
<p>
    This project is about Magic The Gathering. It's a game with card's and you may
    bought cards(singles), decks and accesories.
    <a href='https://magic.wizards.com/es'>MTG</a>
</p>

````
npm install
````
## Scripts
````
npm run
````


## Changes
Project made with Vite
<ul>
    <li>Change React.StrictMode for React.Fragment</li>
</ul>

## Cart
<ul>
    <li>Cart.js (/Cart/Cart.jsx). <b>ok</b></li>
    <li>Debe mostrar el desglose de tu carrito y el precio total. <b>ok</b></li>
    <li>Debe estar agregada la ruta cart al BrowserRouter. <b>ok</b></li>
    <li>Por cada item, incluye un control para eliminar items. <b>ok</b> </li>
    <li>De no haber ítems muestra un mensaje, de manera condicional, diciendo que no hay ítems y un react-router Link o un botón para que pueda volver al Landing (ItemDetailContainer.js) para buscar y comprar algo. <b>ok</b></li>
    <li>CartWidget.js (/CartWidget/CartWidget.jsx). <b>ok</b></li>
    <li>Ahora debe consumir el CartContext y mostrar en tiempo real (aparte del ícono) qué cantidad de ítems están agregados (2 camisas y 1 gorro equivaldrían a 3 items). <b>ok</b></li>
    <li>El cart widget no se debe mostrar más si no hay items en el carrito, aplicando la técnica que elijas (dismount, style,etc). <b>ok</b></li>
    <li>Cuando el estado interno de ItemDetail tenga la cantidad de ítems solicitados mostrar en su lugar un botón que diga “Terminar mi compra”.</li>
</ul>