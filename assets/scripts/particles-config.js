particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 40,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "shape": {
      "type": "image",
      "image": {
        "src": "/assets/images/heart-cursor1.png", // usa teu coração 32x32
        "width": 32,
        "height": 32
      }
    },
    "opacity": {
      "value": 0.9,
      "random": true
    },
    "size": {
      "value": 20,
      "random": true
    },
    "move": {
      "enable": true,
      "speed": 2,
      "direction": "bottom",
      "straight": false,
      "out_mode": "out"
    }
  },
  "interactivity": {
    "events": {
      "onhover": {
        "enable": true,
        "mode": "repulse"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      }
    },
    "modes": {
      "repulse": { "distance": 100 },
      "push": { "particles_nb": 3 }
    }
  },
  "retina_detect": true
});
