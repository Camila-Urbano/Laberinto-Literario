const icon = document.getElementById("carrito_");
const icon_cerrar = document.getElementById("cerrar_carrito");
var container_productos = document.getElementById("carrito");
const contador = document.querySelector(".contador_producto");
const car = document.querySelector(".car");
var total_carrito = document.getElementById("total");

car.onclick = () =>
{
  icon.style.display = 'none';
  contador.style.display = 'none';
  icon_cerrar.style.display = 'block';
  container_productos.style.display = 'block';
}

icon_cerrar.onclick = () =>
{
  icon.style.display = 'block';
  contador.style.display = 'block';
  icon_cerrar.style.display = 'none';
  container_productos.style.display = 'none';
}

// Obtener todos los botones de "Agregar al Carrito"
var botones = document.querySelectorAll("#carrito_btn");

// Inicializar el contador
var contar = 0;

var total = 0;


// Iterar sobre los botones y agregar el manejador de eventos
botones.forEach(function(btn) 
{
  btn.addEventListener("click", agregarProducto);
});

function agregarProducto(event) 
{
  // Obtener la tarjeta del producto
  var tarjeta = event.target.parentElement;
    
  // Obtener los datos del producto
  var nombre = tarjeta.getAttribute("nombre-libro");
  var precio = tarjeta.querySelector(".precio span").textContent;

  // Crear un elemento de la fila para el producto
  var producto = document.createElement("tr");

  producto.innerHTML = ` 
  <td>${nombre}</td>
  <td>${precio}</td>
  <td><a href="#" class="borrar_producto"><i class="fa-sharp fa-solid fa-circle-xmark"></i></a></td>
  `;

  // Agregar el producto al carrito
  var listaProductos = document.getElementById("lista-productos");
  listaProductos.appendChild(producto);

  // Obtener el botón de borrar del producto recién agregado
  var botonBorrar = producto.querySelector(".borrar_producto");

  // Agregar el manejador de eventos para el botón de borrar
  botonBorrar.onclick = () =>
  {
    producto.remove();
    restarContador();
    restarTotal(precio);   
    actualizarTotalPedido(); 
  }

  // Incrementar el contador
  sumarContador();

  // Incrementar el precio total
  sumarTotal(precio);

  compra_btn.disabled = false;

  actualizarTotalPedido();

}

// Función para incrementar el contador
function sumarTotal(precio) 
{
  precio = parseFloat(precio.replace('$', ''));
  total += precio;
  actualizarTotal();
  actualizarTotalPedido();
}

// Función para restar el contador
function restarTotal(precio) 
{
  precio = parseFloat(precio.replace('$', ''));
  total -= precio;
  actualizarTotal();
  actualizarTotalPedido();
}

// Función para actualizar el contador en el HTML
function actualizarTotal() 
{
  total_carrito.textContent = "Precio Total: $" + total.toFixed(3);
  
  var totalCompra = document.getElementById("total-compra");
  totalCompra.textContent = "Precio Total: $" + total.toFixed(3);
}


const totalTarifa = document.getElementById("tarifa");
const totalPedido = document.getElementById("total-pedido");
const pagar_btn = document.getElementById("pagar");

function actualizarTotalPedido() 
{
  const formulario = document.querySelector("form");
  formulario.addEventListener("submit", function(event) 
  {
    event.preventDefault();
    totalTarifa.style.display = "block";
    totalPedido.style.display = "block";
    pagar_btn.style.display = "block";
    
    const ciudadInput = document.querySelector("input[name='ciudad']");
    const valorTotalCarrito = parseFloat(document.getElementById("total-compra").textContent.replace("Precio Total: $", ""));
    var valorTarifa;

    if(total >= 150.000 && ciudadInput.value.toLowerCase() === "cali")
    {
      valorTarifa = 0;
    }
    else if(total <= 150.000 && ciudadInput.value.toLowerCase() === "cali")
    {
      valorTarifa = 10.000;
    }
    else
    {
      valorTarifa = 15.000;
    }
    
    totalTarifa.textContent = "Valor domicilio: $" + valorTarifa.toFixed(3);

    var valorTotalPedido = valorTotalCarrito + valorTarifa;
    var totalPedidoElement = document.getElementById("total-pedido");
    totalPedidoElement.textContent = "Total a Pagar: $" + valorTotalPedido.toFixed(3);

  });
}


// Función para incrementar el contador
function sumarContador() 
{
  contar++;
  actualizarContador();
}

// Función para restar el contador
function restarContador() 
{
  contar--;
  actualizarContador();
}

// Función para actualizar el contador en el HTML
function actualizarContador() 
{
  contador.textContent = contar;
}

// Función para actualizar el carrito en el HTML
function actualizarCarrito() 
{
  const listaProductos = document.getElementById('lista-productos');
  
  // Vaciamos el contenido actual del carrito
  listaProductos.innerHTML = '<td>Nombre</td> <td>Precio</td> <td></td>';
  
  // Recorremos los productos en el carrito y los agregamos al HTML
  carrito.forEach(producto => {
    const nuevoElemento = document.createElement('tr');
    nuevoElemento.innerText =  ` 
    <td>${producto.nombre}</td>
    <td>${producto.precio}</td> 
    <td><a href="#" class=" borrar_producto" ><i class="fa-sharp fa-solid fa-circle-xmark"></i></a></td>
    `;
  });
  
}

// Obtén los elementos para vaciar el carrito y realizar la compra
const vaciarCarritoBtn = document.getElementById('vaciar');

// Agrega eventos de clic para vaciar el carrito y realizar la compra
vaciarCarritoBtn.addEventListener('click', vaciarCarrito);

// Función para vaciar el carrito
function vaciarCarrito() 
{
  carrito = [];
  contar = 0;
  total = 0;

  actualizarTotal();
  actualizarCarrito();
  actualizarContador();
  actualizarTotalPedido();

  compra_btn.disabled = true;

}


/*********************************************************************************************** */


const info_compra = document.querySelector(".info_compra");
const compra_btn = document.getElementById("comprar");
const cerrar = document.getElementById("cerrar_compra");
const cancelar = document.getElementById("cancelar_pedido");



compra_btn.onclick = () =>
{
  if (contar === 0) 
  {
    return alert("El carrito se encuentra vacío, por favor realice una compra"); // Regresar si el carrito está vacío
  }
  info_compra.style.display = 'flex';
}

cerrar.onclick = () =>
{
  info_compra.style.display = 'none';
  totalTarifa.style.display = "none";
  totalPedido.style.display = "none";
  pagar_btn.style.display = "none";
}

cancelar.onclick = () =>
{
  info_compra.style.display = 'none';
  totalTarifa.style.display = "none";
  totalPedido.style.display = "none";
  pagar_btn.style.display = "none";
}

pagar_btn.addEventListener("click", function() 
{
  // Mostrar mensaje de alerta
  alert("¡Gracias por tu compra!");

  // Reiniciar la página
  location.reload();
});
