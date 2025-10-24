
const catalogo = document.createElement("div");
catalogo.id = "catalogo";
document.body.appendChild(catalogo);


const header = document.createElement("div");
header.className = "header";
catalogo.appendChild(header);

const input = document.createElement("input");
input.type = "text";
input.placeholder = "Buscar productos...";
input.className = "input-busqueda";
header.appendChild(input);

const botonPrincipal = document.createElement("button");
botonPrincipal.textContent = "Carrito: 0";
botonPrincipal.className = "boton-principal";
header.appendChild(botonPrincipal);


const titulo = document.createElement("h1");
titulo.textContent = "Catálogo de productos";
titulo.className = "titulo";
catalogo.appendChild(titulo);


const productosContainer = document.createElement("div");
productosContainer.className = "productos";
catalogo.appendChild(productosContainer);


const mensaje = document.createElement("p");
mensaje.className = "mensaje";
mensaje.textContent = "";
catalogo.appendChild(mensaje);


const productos = [
  { nombre: "Camiseta", precio: 20, imagen: "assets/Camiseta-Blanca-3.jpg" },
  { nombre: "Zapatillas", precio: 50, imagen: "assets/fn6703-003_phsrh000-2000.webp" },
  { nombre: "Cartera", precio: 30, imagen: "assets/images.jpg" },
  { nombre: "Reloj", precio: 100, imagen: "assets/images (1).jpg" },

];


let carrito = 0;


function renderizarProductos(lista) {
  productosContainer.innerHTML = "";

  if (lista.length === 0) {
    mensaje.textContent = "No hay productos que coincidan con tu búsqueda.";
    return;
  } else {
    mensaje.textContent = "";
  }

  lista.forEach(prod => {
    const card = document.createElement("div");
    card.className = "card";

    const img = document.createElement("img");
    img.src = prod.imagen;
    img.alt = prod.nombre;

    const nombre = document.createElement("h2");
    nombre.textContent = prod.nombre;

    const precio = document.createElement("p");
    precio.textContent = `$${prod.precio}`;

    const boton = document.createElement("button");
    boton.textContent = "Agregar al carrito";
    boton.className = "boton-card";

    boton.addEventListener("click", () => {
      carrito++;
      botonPrincipal.textContent = `Carrito: ${carrito}`;
    });

    card.appendChild(img);
    card.appendChild(nombre);
    card.appendChild(precio);
    card.appendChild(boton);

    productosContainer.appendChild(card);
  });
}

renderizarProductos(productos);

input.addEventListener("input", (e) => {
  const texto = e.target.value.toLowerCase().trim();
  const filtrados = productos.filter(p =>
    p.nombre.toLowerCase().includes(texto)
  );
  renderizarProductos(filtrados);
});
