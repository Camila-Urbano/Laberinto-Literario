/********************************************* BUSCADOR *********************************************/
$(document).ready(function() 
{
    $('#buscador').on('input', function() 
    {
      var busqueda = $(this).val().toLowerCase(); // Obtener el valor del campo de búsqueda en minúsculas
      $('.card').hide(); // Ocultar todos los libros

        $('.card').filter(function() 
        {
         var bookName = $(this).attr('nombre-libro').toLowerCase(); // Obtener el nombre del libro en minúsculas
         var author = $(this).attr('autor').toLowerCase(); // Obtener el nombre del autor en minúsculas

            if (bookName.includes(busqueda) || author.includes(busqueda)) 
            {
                $(this).show();
            }
            else 
            {
                $(this).hide();
            }
        });
    });
});

/********************************************* FILTRAR POR CATEGORIA *********************************************/

// Obtener todos los elementos de categoría
var categorias = document.querySelectorAll('.cate');

// Añadir evento de clic a cada categoría
categorias.forEach(function(categoria) 
{
    categoria.addEventListener('click', function() 
    {
        // Quitar la clase 'activo' de todas las categorías
        categorias.forEach(function(c) 
        {
            c.classList.remove('activo');
        });

        // Agregar la clase 'activo' a la categoría seleccionada
        this.classList.add('activo');

        // Obtener el valor de la categoría seleccionada
        var categoriaSeleccionada = this.getAttribute('id').replace('categoria-', '');

        // Mostrar u ocultar los libros según la categoría seleccionada
        var libros = document.querySelectorAll('.card');

        libros.forEach(function(libro) 
        {
            if (categoriaSeleccionada === 'todos' || libro.getAttribute('categoria') === categoriaSeleccionada) 
            {
                libro.style.display = 'block';
            } 
            else 
            {
                libro.style.display = 'none';
            }
        });
    });
});