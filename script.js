const PRODUCTOS = [
  {
    id: 1,
    title: "Call Of Duty",
    image: "./utils/call_of_dutty.png",
    description:
      "Juego de guerra con misiones tácticas. Recomendado para mayores de 13 años.",
    price: 60000,
    category: "Shooter",
  },
  {
    id: 2,
    title: "The Little Nightmares",
    image: "./utils/thelittle_nightmares.png",
    description: "Juego de suspenso y plataformas con estilo oscuro.",
    price: 50000,
    category: "Shooter",
  },
  {
    id: 3,
    title: "The Last Of Us",
    image: "./utils/thelastofus.png",
    description: "Supervivencia post-apocalíptica con narrativa intensa.",
    price: 65000,
    category: "Shooter",
  },
  {
    id: 4,
    title: "Halo Reach",
    image: "./utils/haloreach.png",
    description: "Acción futurista con combates espaciales y alienígenas.",
    price: 58000,
    category: "Shooter",
  },
  {
    id: 5,
    title: "GTA V",
    image: "./utils/gtav.png",
    description: "Mundo abierto con múltiples personajes y misiones caóticas.",
    price: 70000,
    category: "Shooter",
  },
  {
    id: 6,
    title: "Mario Kart 8",
    image: "./utils/mariokart8.png",
    description: "Carreras con personajes de Nintendo y objetos divertidos.",
    price: 45000,
    category: "Carreras",
  },
  {
    id: 7,
    title: "Hora de Aventuras: Finn y Jake",
    image: "./utils/horaaventura.png",
    description:
      "Juego de plataformas basado en la serie animada. Perfecto para niños.",
    price: 35000,
    category: "Infantil",
  },
  {
    id: 8,
    title: "Burnout 3: Takedown",
    image: "./utils/burnout1.png",
    description: "Carreras explosivas con choques espectaculares.",
    price: 48000,
    category: "Carreras",
  },
  {
    id: 9,
    title: "Need For Speed: Heat",
    image: "./utils/needforspeed.png",
    description: "Carreras urbanas nocturnas con persecuciones policiales.",
    price: 55000,
    category: "Carreras",
  },
  {
    id: 10,
    title: "Forza Horizon 5",
    image: "./utils/forza.png",
    description: "Simulador de conducción con entornos realistas.",
    price: 70000,
    category: "Carreras",
  },
  {
    id: 11,
    title: "Paw Patrol: Mighty Pups",
    image: "./utils/pawpatrol.png",
    description: "Juego para niños con aventuras y misiones de rescate.",
    price: 30000,
    category: "Infantil",
  },
  {
    id: 12,
    title: "Lego Marvel Super Heroes",
    image: "./utils/lego_marvel.png",
    description: "Juego de acción y rompecabezas para todas las edades.",
    price: 40000,
    category: "Infantil",
  },
  {
    id: 13,
    title: "Peppa Pig: World Adventures",
    image: "./utils/peppapig.png",
    description: "Juego educativo para niños pequeños con Peppa Pig.",
    price: 28000,
    category: "Infantil",
  },
  {
    id: 14,
    title: "Hot Wheels Unleashed",
    image: "./utils/hotwheels.png",
    description: "Carreras con coches miniatura en pistas espectaculares.",
    price: 42000,
    category: "Carreras",
  },
  {
    id: 15,
    title: "F1 2023",
    image: "./utils/f1_2023.png",
    description:
      "Simulación realista de la Fórmula 1 con todos los equipos oficiales.",
    price: 65000,
    category: "Carreras",
  },
  {
    id: 16,
    title: "Overwatch 2",
    image: "./utils/overwatch2.png",
    description:
      "Shooter por equipos con personajes únicos y habilidades especiales.",
    price: 50000,
    category: "Shooter",
  },
  {
    id: 17,
    title: "Valorant",
    image: "./utils/valorant.png",
    description: "Shooter táctico multijugador con poderes especiales.",
    price: 50000,
    category: "Shooter",
  },
  {
    id: 18,
    title: "Splatoon 3",
    image: "./utils/splatoon3.png",
    description: "Shooter colorido y amigable para jugadores jóvenes.",
    price: 55000,
    category: "Shooter",
  },
  {
    id: 19,
    title: "Crash Team Racing",
    image: "./utils/crashteamracing.png",
    description: "Carreras alocadas con personajes de Crash Bandicoot.",
    price: 38000,
    category: "Carreras",
  },
  {
    id: 20,
    title: "Super Mario Odyssey",
    image: "./utils/mario_odyssey.png",
    description:
      "Plataformas creativas en mundos variados para todas las edades.",
    price: 60000,
    category: "Infantil",
  },
  {
    id: 21,
    title: "Sonic & All-Stars Racing",
    image: "./utils/sonic_racing.png",
    description: "Carreras con personajes de SEGA en vehículos transformables.",
    price: 46000,
    category: "Carreras",
  },
  {
    id: 22,
    title: "Battlefield 1",
    image: "./utils/battlefield1.png",
    description:
      "Shooter ambientado en la Primera Guerra Mundial con intensas batallas multijugador.",
    price: 60000,
    category: "Shooter",
  },
  {
    id: 23,
    title: "Lego Star Wars",
    image: "./utils/lego_starwars.png",
    description:
      "Aventura para todas las edades con personajes de Star Wars en versión LEGO.",
    price: 48000,
    category: "Infantil",
  },
  {
    id: 24,
    title: "Rocket League",
    image: "./utils/rocketleague.png",
    description: "Frenéticas competencias de fútbol con autos cohete.",
    price: 42000,
    category: "Carreras",
  },
  {
    id: 25,
    title: "Plants vs Zombies",
    image: "./utils/pvz_battle.png",
    description: "Shooter divertido y accesible con plantas y zombis.",
    price: 39000,
    category: "Shooter",
  },
  {
    id: 26,
    title: "Disney Infinity 3.0",
    image: "./utils/disney_infinity.png",
    description: "Juego interactivo con figuras de Disney y mundos creativos.",
    price: 37000,
    category: "Infantil",
  },
  {
    id: 27,
    title: "Midnight Club 3: DUB Edition",
    image: "./utils/midnightclub.png",
    description: "Carreras callejeras nocturnas con autos personalizables.",
    price: 43000,
    category: "Carreras",
  },
  {
    id: 28,
    title: "Counter-Strike",
    image: "./utils/csgo.png",
    description: "Shooter competitivo por equipos con enfoque táctico.",
    price: 52000,
    category: "Shooter",
  },
  {
    id: 29,
    title: "Toy Story 3: The Video Game",
    image: "./utils/toystory3.png",
    description: "Aventura para niños basada en la famosa película de Pixar.",
    price: 34000,
    category: "Infantil",
  },
  {
    id: 30,
    title: "Gran Turismo 7",
    image: "./utils/granturismo7.png",
    description:
      "Simulador de carreras realista con vehículos de lujo y circuitos famosos.",
    price: 72000,
    category: "Carreras",
  },
  {
    id: 31,
    title: "Star Wars Battlefront II",
    image: "./utils/starwars_battlefront2.png",
    description: "Shooter galáctico con personajes icónicos y batallas épicas.",
    price: 59000,
    category: "Shooter",
  },
  {
    id: 32,
    title: "Mario Party Superstars",
    image: "./utils/mario_party_superstars.png",
    description:
      "Minijuegos divertidos y tableros clásicos para todas las edades.",
    price: 50000,
    category: "Infantil",
  },
  {
    id: 33,
    title: "Wreckfest",
    image: "./utils/wreckfest.png",
    description:
      "Carreras de demolición con físicas realistas y colisiones brutales.",
    price: 47000,
    category: "Carreras",
  },
  {
    id: 34,
    title: "DOOM Eternal",
    image: "./utils/doom_eternal.png",
    description: "Shooter frenético en el infierno con acción intensa.",
    price: 65000,
    category: "Shooter",
  },
  {
    id: 35,
    title: "Nickelodeon Kart Racers 3",
    image: "./utils/nick_kart3.png",
    description: "Carreras con personajes de Nickelodeon. Ideal para niños.",
    price: 40000,
    category: "Infantil",
  },
  {
    id: 36,
    title: "DIRT 5",
    image: "./utils/dirt5.png",
    description: "Carreras off-road con gráficos impresionantes.",
    price: 52000,
    category: "Carreras",
  },
  {
    id: 37,
    title: "Quake Champions",
    image: "./utils/quake_champions.png",
    description: "Shooter clásico reinventado para el combate moderno.",
    price: 49000,
    category: "Shooter",
  },
  {
    id: 38,
    title: "My Friend Peppa Pig",
    image: "./utils/myfriend_peppapig.png",
    description: "Juego interactivo para niños pequeños con Peppa Pig.",
    price: 30000,
    category: "Infantil",
  },
  {
    id: 39,
    title: "Asphalt 9: Legends",
    image: "./utils/asphalt9.png",
    description:
      "Carreras arcade con autos de lujo y escenarios impresionantes.",
    price: 41000,
    category: "Carreras",
  },
  {
    id: 40,
    title: "Fortnite",
    image: "./utils/fortnite.png",
    description: "Shooter tipo battle royale con construcción y mucha acción.",
    price: 45000,
    category: "Shooter",
  },
];

const crearCards = (productos) => {
  const cajaGaleria = document.getElementById("caja_galeria");
  cajaGaleria.innerHTML = "";

  productos.forEach((producto) => {
    const card = document.createElement("div");
    const clasesCard =
      "max-w-xs bg-gray-900 rounded-xl shadow-lg border border-gray-700 flex flex-col items-center overflow-hidden hover:scale-105 transform transition-transform duration-300";
    card.className = clasesCard;
    card.innerHTML = `
      <img src="${producto.image}" alt="${producto.title}" class="w-full h-48 object-cover rounded-t-xl" />
      <!-- Imagen con tamaño fijo, recorte proporcional y bordes redondeados arriba -->

      <div class="p-4 w-full text-center">
        <h3 class="text-green-400 text-xl font-semibold mb-2">${producto.title}</h3>
        <p class="text-gray-300 text-sm mb-4">${producto.description}</p>
        <p class="text-green-400 font-bold mb-4">$ ${producto.price} COP</p>

        <button class="add-to-cart-btn bg-green-400 hover:bg-green-500 text-black font-semibold py-2 px-4 rounded-lg w-full transition duration-300" data-id="${producto.id}" id="anadir">
          Añadir al carrito
        </button>
      </div>
    `;

    cajaGaleria.appendChild(card);
  });
  
  // Asignar los event listeners a los botones después de crear las cards
  document.querySelectorAll('.add-to-cart-btn').forEach(button => {
    button.addEventListener('click', function() {
      const productId = parseInt(this.dataset.id);
      const producto = PRODUCTOS.find(p => p.id === productId);
      if (producto) {
        // Si cart.js ya está cargado, llamar directamente a addToCart
        if (typeof addToCart === 'function') {
          addToCart(producto);
        } else {
          console.error('La función addToCart no está disponible');
        }
      }
    });
  });
};

function filtrarCards(categoria) {
  if (categoria.toLowerCase() === "todos") {
    crearCards(PRODUCTOS);
  } else {
    const productosFiltrados = PRODUCTOS.filter(
      (producto) => producto.category.toLowerCase() === categoria.toLowerCase()
    );
    crearCards(productosFiltrados);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  crearCards(PRODUCTOS);

  const enlacesCategorias = document.querySelectorAll(".categoria-link");

  enlacesCategorias.forEach((enlace) => {
    // Al cargar la página, si el enlace es "todos", le agregamos la clase active
    if (enlace.getAttribute("data-categoria").toLowerCase() === "todos") {
      enlace.classList.add("active");
    }

    enlace.addEventListener("click", (e) => {
      e.preventDefault();

      // Remover clase active de todos los enlaces
      enlacesCategorias.forEach((link) => link.classList.remove("active"));

      // Agregar clase active solo al enlace clickeado
      enlace.classList.add("active");

      const categoria = enlace.getAttribute("data-categoria");
      filtrarCards(categoria);
    });
  });
});