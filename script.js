/**
 * ================================================================
 * BENEY STORE — Main JavaScript
 * Vanilla JS, no frameworks. Mobile-first. Accessible.
 * ================================================================
 */

'use strict';

/* ================================================================
   0. CENTRALIZED BUSINESS CONFIGURATION
   Edit these values to update all content across the site.
   ================================================================ */
const BUSINESS_CONFIG = {
  name:            'Beney Store',
  tagline:         'Distribuidor Autorizado Beney',
  phone:           '+54 9 11 0000-0000',
  whatsapp:        '5491100000000',
  email:           'contacto@beneystore.com.ar',
  address:         'Dirección Pendiente',
  city:            'Ciudad Pendiente',
  province:        'Provincia Pendiente',
  country:         'Argentina',
  googleBusiness:  '',          // TODO: Add Google Business Profile URL
  instagram:       'https://www.instagram.com/beneystore',
  facebook:        'https://www.facebook.com/beneystore',
  siteUrl:         'https://www.beneystore.com.ar',
};

/* ================================================================
   1. SHIPPING CONFIGURATION
   Adjust these values to change shipping behavior.
   ================================================================ */
const SHIPPING_CONFIG = {
  enabled:               true,
  cost:                  5000,         // Fixed shipping cost in ARS
  freeShippingThreshold: null,         // Set to a number (e.g. 50000) to enable free shipping above that amount. null = always charged.
  freeShippingMessage:   '¡Envío gratis en pedidos mayores a $',
};

/* ================================================================
   2. MERCADO PAGO INTEGRATION LAYER
   ================================================================
   TODO: Complete this section to enable real payments.

   Steps:
   1. Replace MP_PUBLIC_KEY with your real Mercado Pago public key.
   2. Create a backend endpoint that generates a Checkout Preference
      (POST to https://api.mercadopago.com/checkout/preferences)
      and returns the preference_id.
   3. Use the preference_id to initialize the Checkout Pro button
      inside initializeMercadoPagoCheckout().
   4. Configure your Webhook URL in the Mercado Pago dashboard
      to receive payment notifications (IPN or Webhooks).
   5. Handle payment_status (approved / pending / rejected) in
      handlePaymentResult().

   Docs: https://www.mercadopago.com.ar/developers/
   ================================================================ */

const MERCADO_PAGO_CONFIG = {
  // TODO: Replace with your real Mercado Pago public key
  publicKey:  'TEST-XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX',
  // TODO: Set to true when ready to go live
  production: false,
  // TODO: Set to your backend preference endpoint
  preferenceEndpoint: '/api/create-preference',
};

/**
 * Initialize Mercado Pago Checkout Pro.
 * Call this function when the user is ready to pay.
 *
 * @param {Object} orderData - The order data to send to your backend.
 */
function initializeMercadoPagoCheckout(orderData) {
  // TODO: Step 1 — Load the Mercado Pago SDK
  // const script = document.createElement('script');
  // script.src = 'https://sdk.mercadopago.com/js/v2';
  // script.onload = () => {
  //
  //   TODO: Step 2 — Initialize the SDK with your public key
  //   const mp = new MercadoPago(MERCADO_PAGO_CONFIG.publicKey, {
  //     locale: 'es-AR',
  //   });
  //
  //   TODO: Step 3 — Create a Checkout Preference on your backend
  //   fetch(MERCADO_PAGO_CONFIG.preferenceEndpoint, {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify(orderData),
  //   })
  //   .then(res => res.json())
  //   .then(data => {
  //
  //     TODO: Step 4 — Mount the Checkout Pro button
  //     const bricksBuilder = mp.bricks();
  //     bricksBuilder.create('wallet', 'mercadoPagoContainer', {
  //       initialization: { preferenceId: data.preference_id },
  //       callbacks: {
  //         onReady: () => {},
  //         onSubmit: () => {},
  //         onError: (error) => handlePaymentResult({ status: 'error', error }),
  //       },
  //     });
  //   });
  // };
  // document.head.appendChild(script);

  console.log('[MP] initializeMercadoPagoCheckout called — integration pending.', orderData);
}

/**
 * Handle the payment result from Mercado Pago.
 * Called after the payment flow completes.
 *
 * @param {Object} result - { status: 'approved'|'pending'|'rejected'|'error', data }
 */
function handlePaymentResult(result) {
  // TODO: Handle MP payment statuses
  // switch (result.status) {
  //   case 'approved': showOrderConfirmation(); break;
  //   case 'pending':  showPendingMessage(); break;
  //   case 'rejected': showRejectedMessage(); break;
  //   case 'error':    showErrorMessage(); break;
  // }
  console.log('[MP] Payment result:', result);
}

/* ================================================================
   3. PRODUCT DATA
   ================================================================
   *** ADD / REPLACE PRODUCTS HERE ***

   Each product object has:
   - id:          Unique string identifier
   - name:        Product name
   - category:    'fernet' | 'fitoextractos' | 'proteccion-familiar'
   - price:       Number (ARS)
   - description: Short description (shown on card)
   - image:       Path to image file OR emoji placeholder
   - badge:       Optional string (e.g. 'Nuevo', 'Destacado')
   - inStock:     true | false

   *** PHYTOEXTRACT PRODUCTS ***
   Replace the fitoextractos entries below with the actual products
   from the file you will provide. The structure is already in place.

   *** FAMILY PROTECTION PRODUCTS ***
   Based on the conceptual structure from Beney Regionales.
   Replace with actual products as needed.
   ================================================================ */
const PRODUCTS = [

  /* ----------------------------------------------------------
     FERNET BENEY
     ---------------------------------------------------------- */
  {
    id:          'fernet-001',
    name:        'Fernet Beney 1.5L',
    category:    'fernet',
    price:       21000,
    description: 'El clásico fernet argentino con la inconfundible fórmula Beney. Elaborado con hierbas seleccionadas, ideal para mezclar o tomar solo.',
    image:       '<img src="imagenes/img46.jpg" alt="Fernet Beney 1.5L">',          // TODO: Replace with actual image path e.g. 'assets/products/fernet-750.jpg'
    badge:       'Gran Tamaño',
    inStock:     true,
  },
  {
    id:          'fernet-002',
    name:        'Fernet Beney 750cc3',
    category:    'fernet',
    price:       15000,
    description: 'El clásico fernet argentino con la inconfundible fórmula Beney. Elaborado con hierbas seleccionadas, ideal para mezclar o tomar solo.',
    image:       '<img src="imagenes/img42.jpg" alt="Fernet Beney 750cc3">',          // TODO: Replace with actual image path e.g. 'assets/products/fernet-750.jpg'
    badge:       'false',
    inStock:     true,
  },

  {
    id:          'fernet-003',
    name:        'Combo Día del Padre',
    category:    'fernet',
    price:       20000,
    description: 'Para regalarle a papá en su día: Vaso Fernetero de Ceramiica + Fernet Beney de 375cm3. El combo perfecto para que disfrute su fernet favorito con estilo.',
    image:       '<img src="imagenes/img45.jpg" alt="Combo Día del Padre">',          // TODO: Replace with actual image
    badge:       'Oferta',
    inStock:     true,
  },


  /* ----------------------------------------------------------
     LABORATORIOS BENEY — FITOEXTRACTOS
     *** REPLACE WITH FILE-PROVIDED PRODUCTS ***
     ---------------------------------------------------------- */

  /* === FITOEXTRACTO PRODUCT TEMPLATE ===
     Duplicate and fill in the following structure for each
     phytoextract product from the file you will provide:

  {
    id:          'fito-XXX',          // e.g. 'fito-001', 'fito-002', etc.
    name:        'NOMBRE DEL PRODUCTO',
    category:    'fitoextractos',
    price:       XXXXX,               // Price in ARS
    description: 'DESCRIPCIÓN CORTA DEL PRODUCTO',
    image:       'assets/products/fito-XXX.jpg', // or emoji placeholder
    badge:       'Nuevo' | null,
    inStock:     true,
  },

     === END TEMPLATE === */

  {
    id:          'fito-001',
    name:        'Ondina',
    category:    'fitoextractos',
    price:       10000,
    description: 'Restablece el equilibrio hormonal. Previene la perdida de memoria, disminuye el insomnio y la ansiedad. Normaliza los efectos propios de la menopausia.',
    image:       '<img src="imagenes/img48.jpg" alt="Ondina">', // TODO: Replace with actual image path
    badge:       'Natural',
    inStock:     true,
  },
  {
    id:          'fito-002',
    name:        'Relax',
    category:    'fitoextractos',
    price:       10000,
    description: 'Sedante suave, mejora la función digestiva y armoniza. Utilizado para combatir estrés, estados de pánico, fibromialgia y migrañas.',
    image:       '<img src="imagenes/img49.jpg" alt="Relax">', // TODO: Replace with actual image path
    badge:       null,
    inStock:     true,
  },
  {
    id:          'fito-003',
    name:        'Propoleo',
    category:    'fitoextractos',
    price:       10000,
    description: 'Es un complemento alimenticio, Antibacteriano, Antisépticos, Antifúngico, Antiviral, Antibiótico, Cicatrizante, Inmuno Estimulante.',
    image:       '<img src="imagenes/img50.jpg" alt="Propoleo">', // TODO: Replace with actual image path
    badge:       'Destacado',
    inStock:     true,
  },
  {
    id:          'fito-004',
    name:        '50 Hierbas',
    category:    'fitoextractos',
    price:       10000,
    description: 'Suplemento dietario digestivo, protector hepático, depurador sanguíneo, sedante suave, cicatrizante interno y externo, quita la acidez estomacal, mejora el funcionamiento renal, es expectorante, alivia dolores menstruales. Normaliza rápidamente trastornos digestivos por los cambios de agua o comida.',
    image:       '<img src="imagenes/img51.jpg" alt="50 Hierbas">', // TODO: Replace with actual image path
    badge:       null,
    inStock:     true,
  },
  {
    id:          'fito-005',
    name:        'Arandanos',
    category:    'fitoextractos',
    price:       10000,
    description: 'Gran contenido de antioxidantes, mejora la visión nocturna y la función urinaria. Previene enfermedades neurodegenerativas (Alzheimer y Parkinson), Activa la microcirculación sanguínea, desinflama Hemorroides, Combate la disentería y trastornos Gastrointestinales.',
    image:       '<img src="imagenes/img52.jpg" alt="Arandanos">', // TODO: Replace with actual image path
    badge:       null,
    inStock:     true,
  },
  {
    id:          'fito-005',
    name:        'Dolorcalm',
    category:    'fitoextractos',
    price:       10000,
    description: 'Especialmente indicado para dolores de huesos y articulaciones. Calma dolores en general. Uso interno (consumiendo en gotas) o externo (aplicándolo en crema base).',
    image:       '<img src="imagenes/img53.jpg" alt="Dolorcalm">', // TODO: Replace with actual image path
    badge:       null,
    inStock:     true,
  },
  {
    id:          'fito-005',
    name:        'Adelgazante',
    category:    'fitoextractos',
    price:       10000,
    description: 'Ayuda a eliminar toxinas, lípidos por vía urinaria. Mejora el transito intestinal y la circulación sanguínea. Se debe complementar con buenos hábitos de alimentación y ejercicio físico.',
    image:       '<img src="imagenes/img54.jpg" alt="Adelgazante">', // TODO: Replace with actual image path
    badge:       null,
    inStock:     true,
  },
  {
    id:          'fito-005',
    name:        'Energizante',
    category:    'fitoextractos',
    price:       10000,
    description: 'Complementa las falencias de alimentación diaria. Mejora la función digestiva y circulatoria. Mejora estados de ánimo aumentando los glóbulos rojos. Contiene las plantas típicas afrodisíacas de alta montaña.',
    image:       '<img src="imagenes/img55.jpg" alt="Energizante">', // TODO: Replace with actual image path
    badge:       null,
    inStock:     true,
  },
  {
    id:          'fito-005',
    name:        'Enjuague Bucal',
    category:    'fitoextractos',
    price:       10000,
    description: 'Limpia y desinfecta la boca, ayudando a cicatrizar lastimaduras y llagas. Uso tópico para dolores bucales. Preventivo para afecciones de la garganta.',
    image:       '<img src="imagenes/img56.jpg" alt="Enjuague Bucal">', // TODO: Replace with actual image path
    badge:       null,
    inStock:     true,
  },
  {
    id:          'fito-005',
    name:        'Quemadillo',
    category:    'fitoextractos',
    price:       10000,
    description: 'Indicado para prevenir catarros, tos, bronquitis y afecciones en la garganta. Recomendado en personas que trabajan con la voz (Docentes, cantantes, locutores, etc.).',
    image:       '<img src="imagenes/img57.jpg" alt="Quemadillo">', // TODO: Replace with actual image path
    badge:       null,
    inStock:     true,
  },
  {
    id:          'fito-005',
    name:        'Regulador de Azucar',
    category:    'fitoextractos',
    price:       10000,
    description: 'Normaliza el nivel del Azúcar en sangre, mejorando la función digestiva. Elaborado con plantas que estimulan al organismo a generar insulina.',
    image:       '<img src="imagenes/img58.jpg" alt="Regulador de Azucar">', // TODO: Replace with actual image path
    badge:       null,
    inStock:     true,
  },
  {
    id:          'fito-005',
    name:        'Antiparasitos',
    category:    'fitoextractos',
    price:       10000,
    description: 'Antiparasitario, mejora la salud digestiva, fortalece el sistema inmune, contribuye a restaurar el equilibrio de la flora intestinal.',
    image:       '<img src="imagenes/img59.jpg" alt="Antiparasitos">', // TODO: Replace with actual image path
    badge:       null,
    inStock:     true,
  },
  {
    id:          'fito-005',
    name:        'Rompe Piedras',
    category:    'fitoextractos',
    price:       10000,
    description: 'Restablece el equilibrio hormonal. Previene la perdida de memoria, Disminuye el insomnio y la ansiedad. Normaliza los efectos propios de la menopausia.',
    image:       '<img src="imagenes/img60.jpg" alt="Rompe Piedras">', // TODO: Replace with actual image path
    badge:       null,
    inStock:     true,
  },

  /* ----------------------------------------------------------
     LABORATORIOS BENEY — PROTECCIÓN FAMILIAR
     ---------------------------------------------------------- */
  {
    id:          'prot-001',
    name:        'Epantapiojos',
    category:    'proteccion-familiar',
    price:       12000,
    description: 'Kit completo de protección para toda la familia. Incluye productos esenciales para el hogar formulados con ingredientes seguros y eficaces.',
    image:       '<img src="imagenes/img61.jpg" alt="Epantapiojos">', // TODO: Replace with actual image path
    badge:       'Familia',
    inStock:     true,
  },
];

/* ================================================================
   4. FAQ DATA
   ================================================================ */
const FAQ_DATA = [
  {
    question: '¿Son productos originales de Beney?',
    answer:   'Sí. Somos distribuidores autorizados por Beney. Todos los productos son 100% originales y cuentan con garantía de autenticidad. Nunca vendemos imitaciones ni productos de segunda mano.',
  },
  {
    question: '¿Realizan envíos a todo el país?',
    answer:   'Sí, realizamos envíos a todas las provincias de Argentina. El costo de envío se calcula automáticamente al momento del checkout según tu ubicación.',
  },
  {
    question: '¿Cómo puedo pagar mi pedido?',
    answer:   'Aceptamos pagos mediante Mercado Pago (tarjetas de crédito, débito, dinero en cuenta MP y más). También podés realizar transferencia bancaria contactándonos directamente.',
  },
  {
    question: '¿Cuánto demora en llegar mi pedido?',
    answer:   'Los pedidos se procesan y despachan dentro de las 24-48 horas hábiles de confirmado el pago. El tiempo de entrega varía según la provincia de destino, generalmente entre 3 y 7 días hábiles.',
  },
  {
    question: '¿Puedo hacer pedidos al por mayor?',
    answer:   'Sí, contamos con precios especiales para compras mayoristas. Contactanos por WhatsApp o email y te asesoraremos sobre los packs y descuentos disponibles.',
  },
  {
    question: '¿Qué hago si mi pedido llega dañado o incompleto?',
    answer:   'Ante cualquier inconveniente con tu pedido, contactanos dentro de las 48 horas de recibido con foto del problema. Gestionamos el reenvío o reintegro del producto sin cargo adicional.',
  },
];

/* ================================================================
   5. APPLICATION STATE
   ================================================================ */
let cart          = [];          // Array of { id, name, category, price, image, quantity }
let activeFilter  = 'all';
let searchQuery   = '';
let orders        = [];          // Persisted to LocalStorage

/* ================================================================
   6. LOCALSTORAGE HELPERS
   ================================================================ */
const LS = {
  getCart:    ()        => { try { return JSON.parse(localStorage.getItem('beney_cart')) || []; } catch { return []; } },
  setCart:    (c)       => localStorage.setItem('beney_cart', JSON.stringify(c)),
  getOrders:  ()        => { try { return JSON.parse(localStorage.getItem('beney_orders')) || []; } catch { return []; } },
  setOrders:  (o)       => localStorage.setItem('beney_orders', JSON.stringify(o)),
};

/* ================================================================
   7. CART MANAGEMENT
   ================================================================ */

function addToCart(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const existing = cart.find(item => item.id === productId);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({
      id:       product.id,
      name:     product.name,
      category: product.category,
      price:    product.price,
      image:    product.image,
      quantity: 1,
    });
  }

  LS.setCart(cart);
  updateCartUI();
  showToast(`✅ ${product.name} agregado al carrito`, 'success');
}

function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  LS.setCart(cart);
  updateCartUI();
}

function updateQuantity(productId, delta) {
  const item = cart.find(i => i.id === productId);
  if (!item) return;

  item.quantity += delta;
  if (item.quantity <= 0) {
    removeFromCart(productId);
    return;
  }

  LS.setCart(cart);
  updateCartUI();
}

function resetCart() {
  cart = [];
  LS.setCart(cart);
  updateCartUI();
}

function getCartSubtotal() {
  return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
}

function getShippingCost(subtotal) {
  if (!SHIPPING_CONFIG.enabled) return 0;
  if (SHIPPING_CONFIG.freeShippingThreshold && subtotal >= SHIPPING_CONFIG.freeShippingThreshold) return 0;
  return SHIPPING_CONFIG.cost;
}

function getCartTotal() {
  const subtotal = getCartSubtotal();
  return subtotal + getShippingCost(subtotal);
}

function formatPrice(n) {
  return '$' + n.toLocaleString('es-AR', { minimumFractionDigits: 0, maximumFractionDigits: 0 });
}

/* ================================================================
   8. CART UI
   ================================================================ */

function updateCartUI() {
  renderCartItems();
  updateCartCount();
  updateCartTotals();
}

function updateCartCount() {
  const count = cart.reduce((sum, i) => sum + i.quantity, 0);
  const badge = document.getElementById('cartCount');
  if (!badge) return;
  badge.textContent = count;
  badge.dataset.count = count;
  badge.hidden = count === 0;
}

function updateCartTotals() {
  const subtotal = getCartSubtotal();
  const shipping  = getShippingCost(subtotal);
  const total     = subtotal + shipping;

  setText('cartSubtotal', formatPrice(subtotal));
  setText('cartShipping',  shipping === 0 ? 'Gratis' : formatPrice(shipping));
  setText('cartTotal',     formatPrice(total));
}

function renderCartItems() {
  const body     = document.getElementById('cartBody');
  const footer   = document.getElementById('cartFooter');
  const empty    = document.getElementById('cartEmpty');
  if (!body) return;

  if (cart.length === 0) {
    body.innerHTML = '';
    body.appendChild(getCartEmptyElement());
    if (footer) footer.hidden = true;
    return;
  }

  if (footer) footer.hidden = false;

  body.innerHTML = cart.map(item => `
    <div class="cart-item" data-id="${item.id}" role="listitem">
      <div class="cart-item-img" aria-hidden="true">${getProductImageHTML(item)}</div>
      <div class="cart-item-details">
        <div class="cart-item-name">${escapeHTML(item.name)}</div>
        <div class="cart-item-price">${formatPrice(item.price)}</div>
        <div class="cart-item-controls">
          <button class="qty-btn" onclick="updateQuantity('${item.id}', -1)" aria-label="Disminuir cantidad de ${escapeHTML(item.name)}">−</button>
          <span class="qty-display" aria-label="Cantidad: ${item.quantity}">${item.quantity}</span>
          <button class="qty-btn" onclick="updateQuantity('${item.id}', 1)" aria-label="Aumentar cantidad de ${escapeHTML(item.name)}">+</button>
        </div>
      </div>
      <button class="cart-item-remove" onclick="removeFromCart('${item.id}')" aria-label="Eliminar ${escapeHTML(item.name)} del carrito">✕</button>
    </div>
  `).join('');

  updateCartTotals();
}

function getCartEmptyElement() {
  const div = document.createElement('div');
  div.className = 'cart-empty';
  div.innerHTML = `
    <div class="empty-cart-icon" aria-hidden="true">🛒</div>
    <p>Tu carrito está vacío</p>
    <button class="btn btn-primary" onclick="closeCart()">Ver Productos</button>
  `;
  return div;
}

function getProductImageHTML(item) {
  if (item.image && item.image.startsWith('assets/')) {
    return `<img src="${item.image}" alt="${escapeHTML(item.name)}" loading="lazy" width="64" height="64" />`;
  }
  return item.image || '📦';
}

/* ================================================================
   9. CART SIDEBAR TOGGLE
   ================================================================ */

function openCart() {
  const sidebar = document.getElementById('cartSidebar');
  if (!sidebar) return;
  sidebar.hidden = false;
  document.body.style.overflow = 'hidden';
  // Focus management
  const closeBtn = document.getElementById('cartClose');
  if (closeBtn) closeBtn.focus();
}

function closeCart() {
  const sidebar = document.getElementById('cartSidebar');
  if (!sidebar) return;
  sidebar.hidden = true;
  document.body.style.overflow = '';
}

/* ================================================================
   10. PRODUCT RENDERING
   ================================================================ */

function getFilteredProducts() {
  return PRODUCTS.filter(p => {
    const matchesFilter = activeFilter === 'all' || p.category === activeFilter;
    const q = searchQuery.toLowerCase().trim();
    const matchesSearch = !q ||
      p.name.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q);
    return matchesFilter && matchesSearch;
  });
}

function getCategoryLabel(cat) {
  const labels = {
    'fernet':              'Fernet',
    'fitoextractos':       'Fitoextractos',
    'proteccion-familiar': 'Protección Familiar',
  };
  return labels[cat] || cat;
}

function renderProducts() {
  const grid      = document.getElementById('productGrid');
  const emptyState = document.getElementById('emptyState');
  if (!grid) return;

  const filtered = getFilteredProducts();

  if (filtered.length === 0) {
    grid.innerHTML = '';
    if (emptyState) emptyState.hidden = false;
    return;
  }

  if (emptyState) emptyState.hidden = true;

  grid.innerHTML = filtered.map(product => `
    <article class="product-card" role="listitem"
      itemscope itemtype="https://schema.org/Product"
      data-category="${product.category}"
      aria-label="${escapeHTML(product.name)}">

      <div class="product-card-img" aria-hidden="true">
        ${product.image && product.image.startsWith('assets/')
          ? `<img src="${product.image}" alt="${escapeHTML(product.name)}" loading="lazy" width="320" height="240" itemprop="image" />`
          : `<span style="font-size:3.5rem">${product.image || '📦'}</span>`
        }
        ${product.badge ? `<span class="product-badge" aria-label="Etiqueta: ${product.badge}">${product.badge}</span>` : ''}
      </div>

      <div class="product-card-body">
        <div class="product-category-tag">${getCategoryLabel(product.category)}</div>
        <h3 itemprop="name">${escapeHTML(product.name)}</h3>
        <p class="product-description" itemprop="description">${escapeHTML(product.description)}</p>

        <div class="product-card-footer">
          <div class="product-price" itemprop="offers" itemscope itemtype="https://schema.org/Offer">
            <span itemprop="price" content="${product.price}">${formatPrice(product.price)}</span>
            <meta itemprop="priceCurrency" content="ARS" />
            <meta itemprop="availability" content="${product.inStock ? 'https://schema.org/InStock' : 'https://schema.org/OutOfStock'}" />
          </div>
          ${product.inStock
            ? `<button class="add-to-cart-btn" onclick="addToCart('${product.id}')" aria-label="Agregar ${escapeHTML(product.name)} al carrito">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><path d="M9 22c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm13 0c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zM1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
                Agregar
               </button>`
            : `<span class="btn btn-outline btn-sm" style="opacity:.5;pointer-events:none" aria-label="Sin stock">Sin stock</span>`
          }
        </div>
      </div>
    </article>
  `).join('');
}

function resetFilters() {
  activeFilter = 'all';
  searchQuery  = '';

  const searchEl = document.getElementById('catalogSearch');
  if (searchEl) searchEl.value = '';

  document.querySelectorAll('.filter-tab').forEach(tab => {
    tab.classList.toggle('active', tab.dataset.filter === 'all');
    tab.setAttribute('aria-selected', tab.dataset.filter === 'all' ? 'true' : 'false');
  });

  renderProducts();
}

/* ================================================================
   11. FAQ RENDERING
   ================================================================ */

function renderFAQ() {
  const list = document.getElementById('faqList');
  if (!list) return;

  list.innerHTML = FAQ_DATA.map((item, i) => `
    <div class="faq-item" id="faq-item-${i}">
      <button
        class="faq-question"
        aria-expanded="false"
        aria-controls="faq-answer-${i}"
        onclick="toggleFAQ(${i})"
      >
        <span>${escapeHTML(item.question)}</span>
        <span class="faq-icon" aria-hidden="true">+</span>
      </button>
      <div class="faq-answer" id="faq-answer-${i}" role="region" aria-labelledby="faq-q-${i}">
        ${escapeHTML(item.answer)}
      </div>
    </div>
  `).join('');
}

function toggleFAQ(index) {
  const item    = document.getElementById(`faq-item-${index}`);
  const btn     = item.querySelector('.faq-question');
  const isOpen  = item.classList.contains('open');

  // Close all
  document.querySelectorAll('.faq-item.open').forEach(el => {
    el.classList.remove('open');
    el.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
  });

  if (!isOpen) {
    item.classList.add('open');
    btn.setAttribute('aria-expanded', 'true');
  }
}

/* ================================================================
   12. CHECKOUT FLOW
   ================================================================ */

function openCheckout() {
  if (cart.length === 0) {
    showToast('⚠️ Tu carrito está vacío', 'error');
    return;
  }

  closeCart();
  populateCheckoutSummary();

  const modal = document.getElementById('checkoutModal');
  if (modal) {
    modal.hidden = false;
    document.body.style.overflow = 'hidden';
    // Focus on first form field
    setTimeout(() => {
      const firstField = document.getElementById('fullName');
      if (firstField) firstField.focus();
    }, 100);
  }
}

function closeCheckout() {
  const modal = document.getElementById('checkoutModal');
  if (modal) {
    modal.hidden = true;
    document.body.style.overflow = '';
    showCheckoutStep(1);
  }
}

function showCheckoutStep(step) {
  document.querySelectorAll('.checkout-step').forEach((el, i) => {
    el.hidden = (i + 1) !== step;
  });
}

function populateCheckoutSummary() {
  const itemsEl   = document.getElementById('checkoutItems');
  const subtotalEl = document.getElementById('co-subtotal');
  const shippingEl = document.getElementById('co-shipping');
  const totalEl    = document.getElementById('co-total');

  if (!itemsEl) return;

  const subtotal = getCartSubtotal();
  const shipping  = getShippingCost(subtotal);
  const total     = subtotal + shipping;

  itemsEl.innerHTML = cart.map(item => `
    <div class="checkout-item">
      <span class="checkout-item-name">${escapeHTML(item.name)} ×${item.quantity}</span>
      <span class="checkout-item-price">${formatPrice(item.price * item.quantity)}</span>
    </div>
  `).join('');

  setText('co-subtotal', formatPrice(subtotal));
  setText('co-shipping',  shipping === 0 ? 'Gratis' : formatPrice(shipping));
  setText('co-total',     formatPrice(total));
}

/* ================================================================
   13. FORM VALIDATION
   ================================================================ */

const VALIDATORS = {
  fullName: v => v.trim().length >= 3 ? '' : 'Por favor ingresá tu nombre completo.',
  phone:    v => /^[\d\s\+\-\(\)]{7,}$/.test(v.trim()) ? '' : 'Ingresá un teléfono válido.',
  email:    v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()) ? '' : 'Ingresá un email válido.',
  province: v => v !== '' ? '' : 'Seleccioná tu provincia.',
  city:     v => v.trim().length >= 2 ? '' : 'Ingresá tu ciudad.',
  zipCode:  v => /^\d{4,8}$/.test(v.trim()) ? '' : 'Ingresá un código postal válido.',
  address:  v => v.trim().length >= 5 ? '' : 'Ingresá tu dirección completa.',
};

function validateField(fieldId) {
  const field = document.getElementById(fieldId);
  const error = document.getElementById(fieldId + 'Error');
  if (!field || !VALIDATORS[fieldId]) return true;

  const message = VALIDATORS[fieldId](field.value);
  if (error) error.textContent = message;
  field.classList.toggle('error', message !== '');
  return message === '';
}

function validateForm() {
  const fields = Object.keys(VALIDATORS);
  let valid = true;
  fields.forEach(id => {
    if (!validateField(id)) valid = false;
  });
  return valid;
}

/* ================================================================
   14. ORDER GENERATION
   ================================================================ */

function generateOrderNumber() {
  const ts   = Date.now().toString(36).toUpperCase();
  const rand = Math.random().toString(36).substring(2, 6).toUpperCase();
  return `BNY-${ts}-${rand}`;
}

function handleCheckoutSubmit(e) {
  e.preventDefault();

  if (!validateForm()) {
    showToast('⚠️ Por favor revisá los campos marcados', 'error');
    return;
  }

  const formData = {
    fullName: document.getElementById('fullName').value.trim(),
    phone:    document.getElementById('phone').value.trim(),
    email:    document.getElementById('email').value.trim(),
    province: document.getElementById('province').value,
    city:     document.getElementById('city').value.trim(),
    zipCode:  document.getElementById('zipCode').value.trim(),
    address:  document.getElementById('address').value.trim(),
    notes:    document.getElementById('notes').value.trim(),
  };

  const order = {
    orderNumber: generateOrderNumber(),
    date:        new Date().toISOString(),
    customer:    formData,
    items:       [...cart],
    subtotal:    getCartSubtotal(),
    shipping:    getShippingCost(getCartSubtotal()),
    total:       getCartTotal(),
    status:      'confirmed',
  };

  // Persist order
  orders = LS.getOrders();
  orders.push(order);
  LS.setOrders(orders);

  // Show confirmation
  showOrderConfirmation(order);

  // Prepare Mercado Pago (when ready)
  // initializeMercadoPagoCheckout(order);
}

function showOrderConfirmation(order) {
  showCheckoutStep(2);

  setText('confirmationSubtitle', `Tu número de pedido es ${order.orderNumber}`);

  const details = document.getElementById('orderDetails');
  if (!details) return;

  details.innerHTML = `
    <div class="order-number">#${order.orderNumber}</div>

    <strong>Productos:</strong>
    ${order.items.map(i => `
      <div class="checkout-item">
        <span>${escapeHTML(i.name)} ×${i.quantity}</span>
        <span>${formatPrice(i.price * i.quantity)}</span>
      </div>
    `).join('')}

    <div class="checkout-totals" style="margin-top:12px">
      <div class="summary-row"><span>Subtotal</span><span>${formatPrice(order.subtotal)}</span></div>
      <div class="summary-row"><span>Envío</span><span>${order.shipping === 0 ? 'Gratis' : formatPrice(order.shipping)}</span></div>
      <div class="summary-row summary-total"><strong>Total</strong><strong>${formatPrice(order.total)}</strong></div>
    </div>

    <div style="margin-top:16px; padding-top:16px; border-top:1px solid var(--color-border)">
      <strong>Entrega para:</strong>
      <div style="margin-top:6px; color:var(--color-text-muted); font-size:.9375rem; line-height:1.6">
        ${escapeHTML(order.customer.fullName)}<br/>
        ${escapeHTML(order.customer.address)}, ${escapeHTML(order.customer.city)}<br/>
        ${escapeHTML(order.customer.province)} — CP ${escapeHTML(order.customer.zipCode)}<br/>
        ${escapeHTML(order.customer.phone)}<br/>
        ${escapeHTML(order.customer.email)}
        ${order.customer.notes ? `<br/><em>Notas: ${escapeHTML(order.customer.notes)}</em>` : ''}
      </div>
    </div>
  `;
}

/* ================================================================
   15. TOAST NOTIFICATIONS
   ================================================================ */

function showToast(message, type = '') {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `toast ${type ? 'toast-' + type : ''}`;
  toast.textContent = message;
  toast.setAttribute('role', 'status');

  container.appendChild(toast);

  setTimeout(() => {
    toast.classList.add('toast-out');
    toast.addEventListener('animationend', () => toast.remove(), { once: true });
  }, 3000);
}

/* ================================================================
   16. HEADER SCROLL BEHAVIOR
   ================================================================ */

function initScrollBehaviors() {
  const header    = document.getElementById('site-header');
  const backToTop = document.getElementById('backToTop');

  let lastScroll = 0;

  window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;

    // Sticky header shadow
    if (header) header.classList.toggle('scrolled', currentScroll > 10);

    // Back to top button
    if (backToTop) backToTop.hidden = currentScroll < 400;

    lastScroll = currentScroll;
  }, { passive: true });

  if (backToTop) {
    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}

/* ================================================================
   17. NAVIGATION
   ================================================================ */

function initNavigation() {
  // Mobile menu toggle
  const mobileToggle = document.getElementById('mobileMenuToggle');
  const mobileMenu   = document.getElementById('mobileMenu');

  if (mobileToggle && mobileMenu) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = !mobileMenu.hidden;
      mobileMenu.hidden = isOpen;
      mobileToggle.setAttribute('aria-expanded', String(!isOpen));
    });

    // Close menu when a link is clicked
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.hidden = true;
        mobileToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Search bar toggle
  const searchToggle = document.getElementById('searchToggle');
  const searchBar    = document.getElementById('searchBar');
  const searchClose  = document.getElementById('searchClose');
  const globalSearch = document.getElementById('globalSearch');

  if (searchToggle && searchBar) {
    searchToggle.addEventListener('click', () => {
      searchBar.hidden = false;
      if (globalSearch) globalSearch.focus();
    });
  }
  if (searchClose) {
    searchClose.addEventListener('click', () => {
      if (searchBar) searchBar.hidden = true;
      if (globalSearch) globalSearch.value = '';
    });
  }
  if (globalSearch) {
    globalSearch.addEventListener('input', debounce(e => {
      searchQuery = e.target.value;
      const catalogEl = document.getElementById('catalogSearch');
      if (catalogEl) catalogEl.value = searchQuery;
      activeFilter = 'all';
      document.querySelectorAll('.filter-tab').forEach(t => {
        t.classList.toggle('active', t.dataset.filter === 'all');
        t.setAttribute('aria-selected', t.dataset.filter === 'all');
      });
      renderProducts();
      if (searchQuery) {
        document.getElementById('catalogo')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 300));
  }

  // Catalog filter tabs
  document.querySelectorAll('.filter-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      activeFilter = tab.dataset.filter;
      searchQuery  = '';
      const searchEl = document.getElementById('catalogSearch');
      if (searchEl) searchEl.value = '';

      document.querySelectorAll('.filter-tab').forEach(t => {
        t.classList.toggle('active', t === tab);
        t.setAttribute('aria-selected', t === tab ? 'true' : 'false');
      });

      renderProducts();
    });
  });

  // Catalog search input
  const catalogSearch = document.getElementById('catalogSearch');
  if (catalogSearch) {
    catalogSearch.addEventListener('input', debounce(e => {
      searchQuery = e.target.value;
      renderProducts();
    }, 300));
  }

  // Category card buttons — filter catalog on click
  document.querySelectorAll('[data-category]').forEach(el => {
    el.addEventListener('click', e => {
      const cat = el.dataset.category;
      if (!cat) return;
      activeFilter = cat;
      document.querySelectorAll('.filter-tab').forEach(tab => {
        tab.classList.toggle('active', tab.dataset.filter === cat);
        tab.setAttribute('aria-selected', tab.dataset.filter === cat ? 'true' : 'false');
      });
      renderProducts();
    });
  });

  // Smooth scroll for all anchor links
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      const target = document.querySelector(link.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      const offset = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--header-height')) || 72;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });

  // Close dropdowns on outside click
  document.addEventListener('click', e => {
    if (!e.target.closest('.nav-dropdown')) {
      document.querySelectorAll('.nav-dropdown-toggle').forEach(btn => {
        btn.setAttribute('aria-expanded', 'false');
      });
    }
  });

  // Keyboard escape closes modals
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      if (!document.getElementById('cartSidebar')?.hidden)     closeCart();
      if (!document.getElementById('checkoutModal')?.hidden)   closeCheckout();
      if (!document.getElementById('searchBar')?.hidden) {
        document.getElementById('searchBar').hidden = true;
      }
    }
  });

  // Cart sidebar
  const cartToggle = document.getElementById('cartToggle');
  const cartClose  = document.getElementById('cartClose');
  const cartOverlay = document.getElementById('cartOverlay');
  const checkoutBtn = document.getElementById('checkoutBtn');

  if (cartToggle) cartToggle.addEventListener('click', openCart);
  if (cartClose)  cartClose.addEventListener('click', closeCart);
  if (cartOverlay) cartOverlay.addEventListener('click', closeCart);
  if (checkoutBtn) checkoutBtn.addEventListener('click', openCheckout);

  // Checkout modal
  const checkoutClose = document.getElementById('checkoutClose');
  if (checkoutClose) checkoutClose.addEventListener('click', closeCheckout);

  // Click outside modal inner
  const checkoutModal = document.getElementById('checkoutModal');
  if (checkoutModal) {
    checkoutModal.addEventListener('click', e => {
      if (e.target === checkoutModal) closeCheckout();
    });
  }

  // Checkout form submit
  const checkoutForm = document.getElementById('checkoutForm');
  if (checkoutForm) {
    checkoutForm.addEventListener('submit', handleCheckoutSubmit);

    // Inline validation
    Object.keys(VALIDATORS).forEach(id => {
      const field = document.getElementById(id);
      if (field) {
        field.addEventListener('blur', () => validateField(id));
        field.addEventListener('input', () => {
          // Clear error on input
          const err = document.getElementById(id + 'Error');
          if (err && err.textContent) validateField(id);
        });
      }
    });
  }
}

/* ================================================================
   18. INTERSECTION OBSERVER — Animate on Scroll
   ================================================================ */

function initAnimations() {
  if (!('IntersectionObserver' in window)) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll(
    '.benefit-item, .category-card, .contact-item, .visual-card, .faq-item, .cta-card'
  ).forEach(el => {
    el.style.opacity    = '0';
    el.style.transform  = 'translateY(20px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(el);
  });
}

/* ================================================================
   19. UTILITY FUNCTIONS
   ================================================================ */

function escapeHTML(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function setText(id, text) {
  const el = document.getElementById(id);
  if (el) el.textContent = text;
}

function debounce(fn, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}

/* ================================================================
   20. FOOTER YEAR
   ================================================================ */

function initFooterYear() {
  const el = document.getElementById('footerYear');
  if (el) el.textContent = new Date().getFullYear();
}

/* ================================================================
   21. INIT
   ================================================================ */

document.addEventListener('DOMContentLoaded', () => {
  // Load persisted cart
  cart   = LS.getCart();
  orders = LS.getOrders();

  // Render
  renderProducts();
  renderFAQ();
  updateCartUI();
  initNavigation();
  initScrollBehaviors();
  initFooterYear();

  // Animate after a short delay so initial paint is fast
  setTimeout(initAnimations, 200);

  console.log(
    `%c${BUSINESS_CONFIG.name} %cStore Ready ✓`,
    'color:#B8860B;font-weight:700;font-size:14px',
    'color:#2C1F0A;font-size:14px'
  );
});
