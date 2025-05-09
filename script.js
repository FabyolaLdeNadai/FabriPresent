const videoLinks = [
    "https://www.w3schools.com/html/mov_bbb.mp4",
    "https://www.w3schools.com/html/mov_bbb.mp4",
    "https://www.w3schools.com/html/mov_bbb.mp4",
    "https://www.w3schools.com/html/mov_bbb.mp4"
  ];
  
  let encontrados = new Set();
  
  function reveal(index, element) {
    if (encontrados.has(index)) return;
    encontrados.add(index);
    element.style.display = 'none';
  
    const videoModal = document.getElementById("videoModal");
    const modalVideo = document.getElementById("modalVideo");
    modalVideo.src = videoLinks[index];
    videoModal.style.display = "flex";
  
    
  
    if (encontrados.size === 4) {
      const cards = document.getElementById("cardsArea");
      cards.style.opacity = "1";
      cards.style.visibility = 'visible';
      cards.style.display = "grid"
      void cards.offsetWidth;
    }
  }
  
  
  function closeModal() {
    document.getElementById("videoModal").style.display = "none";
    const modalVideo = document.getElementById("modalVideo");
    modalVideo.pause();
    modalVideo.currentTime = 0;
  
    document.querySelectorAll('.heart').forEach((heart) => {
      if (!encontrados.has(Number(heart.id.replace('heart', '')))) {
        heart.style.display = 'inline-block';
      }
    });
  }
  
  document.getElementById("startButton").addEventListener("click", function() {
    document.getElementById("intro").style.display = "none";
    document.getElementById("gameArea").style.display = "block";
  });
  