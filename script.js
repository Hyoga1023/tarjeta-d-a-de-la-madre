
const confettiCanvas = confetti.create(null, {
  resize: true, 
  useWorker: true, 
});

function lanzarConfetiRojo() {
  confettiCanvas({
    particleCount: 50,
    spread: 120, 
    origin: {
      x: Math.random(), 
      y: Math.random() * 0.5, 
    },
    colors: ['#FF0000'], 
  });
}

setInterval(lanzarConfetiRojo, 300);
