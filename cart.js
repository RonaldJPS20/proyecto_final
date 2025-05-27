// Variables globales
let carrito = [];
const carritoContainer = document.createElement('div');

// Inicializar el carrito
const initCart = () => {
    // Recuperar carrito del localStorage si existe
    const savedCart = localStorage.getItem('roldan_games_cart');
    if (savedCart) {
        carrito = JSON.parse(savedCart);
        updateCartCount();
    }

    // Crear el contenedor del carrito
    setupCartContainer();

    // Añadir listener al botón del carrito
    document.getElementById('cart-button').addEventListener('click', toggleCart);

    // Cerrar el carrito al hacer clic afuera
    document.addEventListener('click', (e) => {
        if (carritoContainer.classList.contains('active') &&
            !carritoContainer.contains(e.target) &&
            e.target.id !== 'cart-button' &&
            !e.target.closest('#cart-button')) {
            toggleCart();
        }
    });
}

// Configurar el contenedor del carrito
const setupCartContainer = () => {
    carritoContainer.className = 'fixed top-16 right-4 w-96 max-h-[80vh] overflow-y-auto bg-gray-800 border-2 border-green-400 rounded-lg shadow-xl p-4 z-50 transform transition-transform duration-300 scale-0 origin-top-right';
    carritoContainer.innerHTML = `
    <div class="flex justify-between items-center border-b-2 border-gray-700 pb-3 mb-4">
      <h3 class="text-xl font-bold text-green-400">🛒 Tu Carrito</h3>
      <button id="close-cart" class="text-gray-400 hover:text-white">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
    <div id="cart-items" class="mb-4"></div>
    <div class="border-t-2 border-gray-700 pt-3">
      <div class="flex justify-between mb-4">
        <span class="text-gray-300">Total:</span>
        <span id="cart-total" class="text-xl font-bold text-green-400">$0</span>
      </div>
      <button id="checkout-button" class="w-full bg-green-500 hover:bg-green-600 text-black font-bold py-2 px-4 rounded-lg transition duration-200">
        Proceder al Pago
      </button>
      <button id="clear-cart" class="w-full mt-2 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg transition duration-200">
        Vaciar Carrito
      </button>
    </div>
  `;
    document.body.appendChild(carritoContainer);

    // Añadir event listeners
    document.getElementById('close-cart').addEventListener('click', toggleCart);
    document.getElementById('clear-cart').addEventListener('click', clearCart);
    document.getElementById('checkout-button').addEventListener('click', checkout);
}

// Mostrar/ocultar el carrito
const toggleCart = (e) => {
    if (e) e.preventDefault();

    if (carritoContainer.classList.contains('active')) {
        carritoContainer.classList.remove('active');
        carritoContainer.classList.add('scale-0');
    } else {
        renderCartItems();
        carritoContainer.classList.add('active');
        carritoContainer.classList.remove('scale-0');
    }
}

// Renderizar los items del carrito
const renderCartItems = () => {
    const cartItemsContainer = document.getElementById('cart-items');

    if (carrito.length === 0) {
        cartItemsContainer.innerHTML = `
      <div class="flex flex-col items-center justify-center py-6">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-gray-500 mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
        <p class="text-gray-400 text-center">Tu carrito está vacío</p>
        <p class="text-gray-500 text-center text-sm mt-2">¡Añade algunos juegos increíbles!</p>
      </div>
    `;
    } else {
        let cartHTML = '';

        carrito.forEach(item => {
            cartHTML += `
        <div class="flex items-center justify-between p-2 mb-3 bg-gray-700 rounded-lg hover:bg-gray-650 transition-colors">
          <div class="flex items-center">
            <img src="${item.image}" alt="${item.title}" class="w-12 h-12 object-cover rounded mr-3">
            <div>
              <h4 class="text-sm font-medium text-white">${item.title}</h4>
              <p class="text-xs text-gray-400">$${item.price} COP</p>
            </div>
          </div>
          <div class="flex items-center">
            <div class="flex items-center mr-3">
              <button class="decrease-quantity px-2 py-1 bg-gray-800 text-white rounded" data-id="${item.id}">-</button>
              <span class="mx-2 text-sm">${item.quantity}</span>
              <button class="increase-quantity px-2 py-1 bg-gray-800 text-white rounded" data-id="${item.id}">+</button>
            </div>
            <button class="remove-item text-red-400 hover:text-red-300" data-id="${item.id}">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
            </button>
          </div>
        </div>
      `;
        });

        cartItemsContainer.innerHTML = cartHTML;

        // Añadir event listeners para los botones
        document.querySelectorAll('.decrease-quantity').forEach(button => {
            button.addEventListener('click', (e) => {
                decreaseQuantity(parseInt(e.currentTarget.dataset.id));
            });
        });

        document.querySelectorAll('.increase-quantity').forEach(button => {
            button.addEventListener('click', (e) => {
                increaseQuantity(parseInt(e.currentTarget.dataset.id));
            });
        });

        document.querySelectorAll('.remove-item').forEach(button => {
            button.addEventListener('click', (e) => {
                removeFromCart(parseInt(e.currentTarget.dataset.id));
            });
        });
    }

    // Actualizar total
    updateCartTotal();
}

// Añadir al carrito
const addToCart = (producto) => {
    // Buscar si el producto ya está en el carrito
    const itemIndex = carrito.findIndex(item => item.id === producto.id);

    if (itemIndex !== -1) {
        // Si ya existe, incrementar cantidad
        carrito[itemIndex].quantity += 1;
    } else {
        // Si no existe, añadirlo con cantidad 1
        carrito.push({
            ...producto,
            quantity: 1
        });
    }

    // Guardar en localStorage y actualizar UI
    saveCart();
    updateCartCount();

    // Mostrar notificación
    showNotification(`${producto.title} añadido al carrito`);
}

// Incrementar cantidad
const increaseQuantity = (id) => {
    const itemIndex = carrito.findIndex(item => item.id === id);
    if (itemIndex !== -1) {
        carrito[itemIndex].quantity += 1;
        saveCart();
        renderCartItems();
    }
}

// Decrementar cantidad
const decreaseQuantity = (id) => {
    const itemIndex = carrito.findIndex(item => item.id === id);
    if (itemIndex !== -1) {
        if (carrito[itemIndex].quantity > 1) {
            carrito[itemIndex].quantity -= 1;
        } else {
            // Si la cantidad llega a 0, eliminar del carrito
            removeFromCart(id);
            return;
        }
        saveCart();
        renderCartItems();
    }
}

// Eliminar del carrito
const removeFromCart = (id) => {
    carrito = carrito.filter(item => item.id !== id);
    saveCart();
    renderCartItems();
    updateCartCount();
}

// Vaciar el carrito
const clearCart = () => {
    carrito = [];
    saveCart();
    renderCartItems();
    updateCartCount();
    showNotification("Carrito vaciado");
}

// Guardar carrito en localStorage
const saveCart = () => {
    localStorage.setItem('roldan_games_cart', JSON.stringify(carrito));
}

// Actualizar contador del carrito
const updateCartCount = () => {
    const cartCountElement = document.getElementById('cart-count');
    const totalItems = carrito.reduce((total, item) => total + item.quantity, 0);
    cartCountElement.textContent = totalItems;

    // Mostrar/ocultar el contador según si hay items
    if (totalItems > 0) {
        cartCountElement.classList.remove('hidden');
    } else {
        cartCountElement.classList.add('hidden');
    }
}

// Actualizar el total del carrito
const updateCartTotal = () => {
    const cartTotalElement = document.getElementById('cart-total');
    const total = carrito.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotalElement.textContent = `$${total.toLocaleString()} COP`;
}

// Proceder al pago
const checkout = () => {
    if (carrito.length === 0) {
        showNotification("Tu carrito está vacío", "error");
        return;
    }

    // Aquí se implementaría la lógica de pago
    // Por ahora solo mostramos una notificación
    showNotification("¡Procesando tu compra!", "success");

    // Simulación de procesamiento
    setTimeout(() => {
        showNotification("¡Compra completada con éxito!", "success");
        clearCart();
        toggleCart();
    }, 2000);
}

// Mostrar notificación
const showNotification = (message, type = 'info') => {
    // Crear elemento de notificación
    const notification = document.createElement('div');

    // Asignar clases según el tipo
    let bgColor = 'bg-blue-500';
    let icon = `
    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
`;

    if (type === 'success') {
        bgColor = 'bg-green-500';
        icon = `
    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
    </svg>
    `;
    } else if (type === 'error') {
        bgColor = 'bg-red-500';
        icon = `
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
    `;
    }

    notification.className = `fixed bottom-4 right-4 ${bgColor} text-white py-2 px-4 rounded-lg shadow-lg flex items-center transform transition-transform duration-300 translate-y-20`;
    notification.innerHTML = `
    ${icon}
    <span>${message}</span>
`;

    document.body.appendChild(notification);

    // Mostrar con animación
    setTimeout(() => {
        notification.classList.remove('translate-y-20');
    }, 10);

    // Eliminar después de 3 segundos
    setTimeout(() => {
        notification.classList.add('translate-y-20');
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Configurar botones para añadir al carrito desde script.js
document.addEventListener('DOMContentLoaded', () => {
    initCart();
    setTimeout(() => {
        document.querySelectorAll('.add-to-cart-btn').forEach(button => {
            const newButton = button.cloneNode(true);
            button.parentNode.replaceChild(newButton, button);

            newButton.addEventListener('click', function() {
                const productId = parseInt(this.dataset.id);
                const producto = PRODUCTOS.find(p => p.id === productId);
                if (producto) {
                    addToCart(producto);
                }
            });
        });
    }, 500);
});