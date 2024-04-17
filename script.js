const audio = new Audio();
const cards = document.querySelectorAll('.card');

// Agregar un evento de escucha a cada tarjeta
cards.forEach(card => {
  card.addEventListener('mouseover', () => {
    // Obtener la ruta del archivo de audio asociado a esta tarjeta
    const audioSrc = card.dataset.audioSrc;
    
    audio.src = audioSrc;
    audio.play();
  });

  card.addEventListener('mouseout', () => {
    audio.pause();
    audio.currentTime = 0;
  });
});

// Repetir el audio cuando llegue al final
audio.addEventListener('ended', () => {
  // Repetir el audio desde el principio
  audio.currentTime = 0;
  audio.play();
});