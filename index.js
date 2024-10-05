document.querySelector('h1').textContent =  "¡Bienvenido a mi juego favorito!";
function toggleDescription(imgId, descId) {
    const img = document.getElementById(imgId);
    const description = document.getElementById(descId);

    img.addEventListener('click', () => {
      if (description.style.display === 'none' || description.style.display === '') {
        description.style.display = 'block';
      } else {
        description.style.display = 'none';
      }
    });
  }


  toggleDescription('img1', 'descripcion1');
  toggleDescription('img2', 'descripcion2');
  toggleDescription('img3', 'descripcion3');
  toggleDescription('img4', 'descripcion4');
  toggleDescription('img5', 'descripcion5');