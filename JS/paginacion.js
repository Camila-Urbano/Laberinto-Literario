
// Obtén todos los elementos de tarjeta de libro
var cards = document.querySelectorAll('.card');

// Número de tarjetas por página
var cardsPerPage = 10;

// Calcula el número total de páginas
var totalPages = Math.ceil(cards.length / cardsPerPage);

// Página actual
var currentPage = 1;

// Muestra las tarjetas correspondientes a la página actual
function showCards() 
{
    var startIndex = (currentPage - 1) * cardsPerPage;
    var endIndex = startIndex + cardsPerPage;

    for (var i = 0; i < cards.length; i++) 
    {
        if (i >= startIndex && i < endIndex) 
        {
            cards[i].style.display = 'block';
        } 
        else 
        {
            cards[i].style.display = 'none';
        }
    }

    // Obtiene referencias a los botones Prev y Next
    var prevButton = document.getElementById('prev');
    var nextButton = document.getElementById('next');

    // Cambia el color del botón Prev si estás en la página inicial
    if (currentPage === 1) 
    {
        prevButton.style.backgroundColor = '#a0a0a0'; // Cambia el color a tu elección
    } 
    else 
    {
        prevButton.style.backgroundColor = '#242424'; // Restablece el color predeterminado
    }

    // Cambia el color del botón Next si estás en la última página
    if (currentPage === totalPages) 
    {
        nextButton.style.backgroundColor = '#a0a0a0'; // Cambia el color a tu elección
    } 
    else 
    {
        nextButton.style.backgroundColor = '#242424'; // Restablece el color predeterminado
    }

}

// Manejador de evento para el botón Siguiente
document.getElementById('next').addEventListener('click', function() 
{
    if (currentPage < totalPages) {
        currentPage++;
        showCards();
    }
});

// Manejador de evento para el botón Anterior
document.getElementById('prev').addEventListener('click', function() 
{
    if (currentPage > 1) {
        currentPage--;
        showCards();
    }
});

// Mostrar las tarjetas de la primera página al cargar la página
showCards();