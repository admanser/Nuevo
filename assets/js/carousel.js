
document.getElementById('next').addEventListener('click', () => {
  const carouselContainer = document.querySelector('.carousel-container');
  const items = carouselContainer.querySelectorAll('.carousel-item');
  const firstItem = items[0];
  const hiddenItem = carouselContainer.querySelector('.hidden');

  // Mover el primer item visible al final
  carouselContainer.appendChild(firstItem);

  // Mostrar el item oculto y ocultar el primer item visible
  if (hiddenItem) {
      hiddenItem.classList.remove('hidden');
      firstItem.classList.add('hidden');
  } else {
      firstItem.classList.remove('hidden');
      items[3].classList.add('hidden');
  }
});

document.getElementById('back').addEventListener('click', () => {
  // Seleccionamos el contenedor del carrusel
  const carouselContainer = document.querySelector('.carousel-container');
  // Seleccionamos todos los elementos del carrusel
  const items = carouselContainer.querySelectorAll('.carousel-item');
  // Seleccionamos el último elemento visible del carrusel
  const lastItem = items[items.length - 1];
  // Seleccionamos el elemento que está oculto (si existe)
  const hiddenItem = carouselContainer.querySelector('.hidden');

  // Mover el último elemento visible al principio del contenedor
  // Esto lo elimina de la última posición y lo agrega al principio
  carouselContainer.insertBefore(lastItem, carouselContainer.firstChild);

  // Mostrar el elemento oculto y ocultar el último elemento visible
  if (hiddenItem) {
      // Si existe un elemento oculto, lo mostramos
      hiddenItem.classList.remove('hidden');
      // Y ocultamos el nuevo último elemento visible
      items[items.length - 2].classList.add('hidden');
  } else {
      // Si no hay un elemento oculto (es la primera vez que hacemos clic)
      // Aseguramos que el último elemento visible no esté oculto
      lastItem.classList.remove('hidden');
      // Y ocultamos el nuevo último elemento visible
      items[items.length - 2].classList.add('hidden');
  }
});
