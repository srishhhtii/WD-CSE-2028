// script.js - Cuisino front-end (no backend) - place in same folder as index.html & style.css

document.addEventListener('DOMContentLoaded', () => {
  // ---------- DATA ----------
  const MENU = [
    {id:'m1', name:'Margherita Pizza', price:199, veg:true, cuisine:'Italian', img:'https://source.unsplash.com/400x300/?margherita,pizza', rating:4.6, offer:'20% OFF'},
    {id:'m2', name:'Paneer Tikka Wrap', price:129, veg:true, cuisine:'Indian', img:'https://source.unsplash.com/400x300/?paneer,wrap', rating:4.7, offer:''},
    {id:'m3', name:'Veg Biryani', price:159, veg:true, cuisine:'Indian', img:'https://source.unsplash.com/400x300/?veg,biryani', rating:4.5, offer:'10% OFF'},
    {id:'m4', name:'Masala Dosa', price:99, veg:true, cuisine:'South Indian', img:'https://source.unsplash.com/400x300/?masala,dosa', rating:4.8, offer:''},
    {id:'m5', name:'Veg Burger', price:119, veg:true, cuisine:'Fast Food', img:'https://source.unsplash.com/400x300/?veg,burger', rating:4.3, offer:'20% OFF'},
    {id:'m6', name:'Chicken Burger', price:149, veg:false, cuisine:'Fast Food', img:'https://source.unsplash.com/400x300/?chicken,burger', rating:4.6, offer:''},
    {id:'m7', name:'Paneer Butter Masala', price:189, veg:true, cuisine:'Indian', img:'https://source.unsplash.com/400x300/?paneer,butter-masala', rating:4.9, offer:''},
    {id:'m8', name:'Chicken Biryani', price:229, veg:false, cuisine:'Indian', img:'https://source.unsplash.com/400x300/?chicken,biryani', rating:4.8, offer:'15% OFF'},
    {id:'m9', name:'Schezwan Noodles', price:149, veg:false, cuisine:'Chinese', img:'https://source.unsplash.com/400x300/?noodles,chinese', rating:4.4, offer:''},
    {id:'m10', name:'Paneer Fried Rice', price:139, veg:true, cuisine:'Chinese', img:'https://source.unsplash.com/400x300/?fried-rice,paneer', rating:4.2, offer:''},
    {id:'m11', name:'Tandoori Chicken', price:259, veg:false, cuisine:'Indian', img:'https://source.unsplash.com/400x300/?tandoori,chicken', rating:4.7, offer:'20% OFF'},
    {id:'m12', name:'Veg Manchurian', price:129, veg:true, cuisine:'Chinese', img:'https://source.unsplash.com/400x300/?manchurian,veg', rating:4.3, offer:''},
    {id:'m13', name:'Fish Curry', price:199, veg:false, cuisine:'Indian', img:'https://source.unsplash.com/400x300/?fish,curry', rating:4.5, offer:''},
    {id:'m14', name:'Mexican Tacos', price:179, veg:false, cuisine:'Mexican', img:'https://source.unsplash.com/400x300/?tacos,mexican', rating:4.4, offer:'20% OFF'},
    {id:'m15', name:'Veg Quesadilla', price:149, veg:true, cuisine:'Mexican', img:'https://source.unsplash.com/400x300/?quesadilla,veg', rating:4.1, offer:''},
    {id:'m16', name:'Chicken Shawarma', price:169, veg:false, cuisine:'Middle Eastern', img:'https://source.unsplash.com/400x300/?shawarma,chicken', rating:4.6, offer:''},
    {id:'m17', name:'Falafel Wrap', price:129, veg:true, cuisine:'Middle Eastern', img:'https://source.unsplash.com/400x300/?falafel,wrap', rating:4.0, offer:''},
    {id:'m18', name:'Gulab Jamun', price:69, veg:true, cuisine:'Dessert', img:'https://source.unsplash.com/400x300/?gulab,jamun', rating:4.9, offer:''},
    {id:'m19', name:'Chocolate Brownie', price:99, veg:true, cuisine:'Dessert', img:'https://source.unsplash.com/400x300/?brownie,chocolate', rating:4.8, offer:'10% OFF'},
    {id:'m20', name:'Egg Fried Rice', price:129, veg:false, cuisine:'Chinese', img:'https://source.unsplash.com/400x300/?egg,fried-rice', rating:4.2, offer:''},
    {id:'m21', name:'Paneer Roll', price:100, veg:true, cuisine:'Street Food', img:'https://source.unsplash.com/400x300/?paneer,roll', rating:4.1, offer:''},
    {id:'m22', name:'BBQ Wings', price:190, veg:false, cuisine:'Fast Food', img:'https://source.unsplash.com/400x300/?bbq,wings', rating:4.5, offer:''},
    {id:'m23', name:'Chowmein', price:140, veg:true, cuisine:'Chinese', img:'https://source.unsplash.com/400x300/?chowmein', rating:4.2, offer:''},
    {id:'m24', name:'Masala Dosa (Set)', price:129, veg:true, cuisine:'South Indian', img:'https://source.unsplash.com/400x300/?dosa,set', rating:4.7, offer:''},
  ];

  const RESTAURANTS = [
    {name:'Spice Corner', type:'Veg', rating:4.6, img:'https://source.unsplash.com/200x200/?veg,restaurant'},
    {name:'Royal Platter', type:'Non-Veg', rating:4.4, img:'https://source.unsplash.com/200x200/?restaurant,chicken'},
    {name:'Green Leaf', type:'Veg', rating:4.5, img:'https://source.unsplash.com/200x200/?salad,restaurant'},
    {name:'Biryani House', type:'Non-Veg', rating:4.7, img:'https://source.unsplash.com/200x200/?biryani,restaurant'},
    {name:'Schezwan Palace', type:'Non-Veg', rating:4.3, img:'https://source.unsplash.com/200x200/?chinese,restaurant'},
    {name:'Masala Magic', type:'Veg', rating:4.2, img:'https://source.unsplash.com/200x200/?masala,restaurant'},
    {name:'Taco Town', type:'Non-Veg', rating:4.1, img:'https://source.unsplash.com/200x200/?taco,restaurant'},
    {name:'Curry Leaf', type:'Veg', rating:4.8, img:'https://source.unsplash.com/200x200/?indian,restaurant'},
    {name:'Grill & Chill', type:'Non-Veg', rating:4.0, img:'https://source.unsplash.com/200x200/?grill,restaurant'},
    {name:'Sugar & Spice', type:'Veg', rating:4.6, img:'https://source.unsplash.com/200x200/?dessert,restaurant'},
    {name:'North Flavors', type:'Non-Veg', rating:4.3, img:'https://source.unsplash.com/200x200/?north-indian,restaurant'},
    {name:'South Spice', type:'Veg', rating:4.4, img:'https://source.unsplash.com/200x200/?south-indian,restaurant'},
    {name:'Cafe Latte', type:'Veg', rating:4.1, img:'https://source.unsplash.com/200x200/?cafe,restaurant'},
    {name:'Urban Tadka', type:'Non-Veg', rating:4.2, img:'https://source.unsplash.com/200x200/?tadka,restaurant'},
    {name:'Flavors of World', type:'Veg', rating:4.5, img:'https://source.unsplash.com/200x200/?world-food,restaurant'}
  ];

  // ---------- STATE ----------
  let cart = JSON.parse(localStorage.getItem('cuisino_cart') || '[]');
  let wallet = parseInt(localStorage.getItem('cuisino_wallet') || '200', 10);
  let locationText = localStorage.getItem('cuisino_location') || 'Abes EC College Gate No.2, Ghaziabad';

  // ---------- ELEMENTS ----------
  const menuGrid = document.getElementById('menuGrid');
  const restaurantsDiv = document.getElementById('restaurants');
  const cartCnt = document.getElementById('cartCnt');
  const floatingCart = document.getElementById('floatingCart');
  const floatingTotal = document.getElementById('floatingTotal');
  const openCartBtn = document.getElementById('openCartBtn');
  const cartModal = document.getElementById('cartModal');
  const cartList = document.getElementById('cartList');
  const subtotalEl = document.getElementById('subtotal');
  const deliveryFeeEl = document.getElementById('deliveryFee');
  const grandTotalEl = document.getElementById('grandTotal');
  const etaEl = document.getElementById('eta');
  const paymentModal = document.getElementById('paymentModal');
  const checkoutSummary = document.getElementById('checkoutSummary');
  const driverModal = document.getElementById('driverModal');
  const walletAmountEl = document.getElementById('walletAmount');
  const locationTextEl = document.getElementById('locationText');
  const searchInput = document.getElementById('searchInput');
  const suggestions = document.getElementById('suggestions');
  const vegOnlyCheckbox = document.getElementById('vegOnly');
  const healthyCheckbox = document.getElementById('healthyMode');

  // ---------- INIT ----------
  walletAmountEl.innerText = '₹' + wallet;
  locationTextEl.innerText = locationText;
  renderMenu(MENU);
  renderRestaurants(RESTAURANTS);
  refreshCartUI();

  // ---------- RENDER MENU ----------
  function renderMenu(list) {
    menuGrid.innerHTML = '';
    const filtered = list.filter(it => {
      if (vegOnlyCheckbox.checked && !it.veg) return false;
      // healthy mode example: price < 160 treated as healthier (simple rule)
      if (healthyCheckbox.checked && it.price > 160) return false;
      return true;
    });
    filtered.forEach(item => {
      const card = document.createElement('article');
      card.className = 'card';
      card.innerHTML = `
        <img src="${item.img}" alt="${item.name}" onerror="this.src='https://source.unsplash.com/400x300/?food'">
        <div class="body">
          <div class="row">
            <div>
              <div style="font-weight:700">${item.name}</div>
              <div class="tag">${item.cuisine} • ${item.veg ? 'Veg' : 'Non-Veg'}</div>
            </div>
            <div style="text-align:right">
              <div class="price">${item.offer ? '<span class="badge">'+item.offer+'</span><br>' : ''}₹${item.price}</div>
              <div style="font-size:12px;color:#777">⭐ ${item.rating}</div>
            </div>
          </div>
          <div style="display:flex;align-items:center;gap:10px;margin-top:10px;">
            <div class="qty-controls">
              <button onclick="changeCardQty('${item.id}', -1)">−</button>
              <input id="qty-${item.id}" type="number" min="1" value="1" />
              <button onclick="changeCardQty('${item.id}', 1)">+</button>
            </div>
            <button class="add" onclick="addToCart('${item.id}')">Add</button>
          </div>
        </div>`;
      menuGrid.appendChild(card);
    });
  }

  window.changeCardQty = function(id, delta) {
    const el = document.getElementById('qty-' + id);
    if(!el) return;
    let v = parseInt(el.value || '1', 10);
    v = Math.max(1, v + delta);
    el.value = v;
  };

  // ---------- ADD TO CART ----------
  window.addToCart = function(id) {
    const item = MENU.find(m => m.id === id);
    if(!item) return;
    const qty = Math.max(1, parseInt(document.getElementById('qty-' + id).value || '1', 10));
    const unitPrice = priceAfterOffer(item);
    const existing = cart.find(c => c.id === id);
    if(existing) existing.qty += qty;
    else cart.push({ id:item.id, name:item.name, price:unitPrice, img:item.img, qty: qty });
    persistCart();
    refreshCartUI(true);
    toast(`${item.name} x${qty} added`);
  };

  function priceAfterOffer(item) {
    if(!item.offer) return item.price;
    const m = item.offer.match(/(\d+)%/);
    if(!m) return item.price;
    const pct = parseInt(m[1], 10);
    return Math.round(item.price * (100 - pct) / 100);
  }

  // ---------- CART UI ----------
  function persistCart(){ localStorage.setItem('cuisino_cart', JSON.stringify(cart)); }
  function refreshCartUI(showFloat){
    const count = cart.reduce((s,c)=>s + c.qty,0);
    cartCnt.innerText = count;
    if(cart.length){
      floatingCart.classList.remove('hidden');
      floatingTotal.innerText = '₹' + cart.reduce((s,c)=>s + c.price*c.qty,0);
    } else floatingCart.classList.add('hidden');
    if(showFloat){ floatingCart.classList.remove('hidden'); setTimeout(()=>floatingCart.classList.add('hidden'),1600); }
  }

  window.openCart = function(){ openCart(); };
  openCartBtn.addEventListener('click', openCart);

  function openCart(){
    renderCartList();
    cartModal.classList.remove('hidden');
  }
  window.closeCart = function(){ cartModal.classList.add('hidden'); };

  function renderCartList(){
    cartList.innerHTML = '';
    if(!cart.length){ cartList.innerHTML = '<p>Your cart is empty.</p>'; updateTotals(); return;}
    cart.forEach(ci=>{
      const div = document.createElement('div');
      div.className = 'cart-item';
      div.innerHTML = `
        <img src="${ci.img}" onerror="this.src='https://source.unsplash.com/80x80/?food'">
        <div class="ci">
          <div class="name">${ci.name}</div>
          <div class="qty">Qty:
            <button onclick="updateCartQty('${ci.id}', -1)">−</button>
            <span id="cart-qty-${ci.id}">${ci.qty}</span>
            <button onclick="updateCartQty('${ci.id}', 1)">+</button>
          </div>
          <div class="price">₹${ci.price * ci.qty}</div>
        </div>
        <div><button onclick="removeFromCart('${ci.id}')">Remove</button></div>
      `;
      cartList.appendChild(div);
    });
    updateTotals();
  }

  window.updateCartQty = function(id, delta){
    const idx = cart.findIndex(c=>c.id===id);
    if(idx===-1) return;
    cart[idx].qty = Math.max(1, cart[idx].qty + delta);
    persistCart();
    renderCartList();
    refreshCartUI();
  };

  window.removeFromCart = function(id){
    cart = cart.filter(c=>c.id!==id);
    persistCart();
    renderCartList();
    refreshCartUI();
  };

  window.cancelOrder = function(){
    if(!confirm('Cancel the entire order?')) return;
    cart = [];
    persistCart();
    renderCartList();
    refreshCartUI();
    closeCart();
  };

  function updateTotals(){
    const subtotal = cart.reduce((s,c)=>s + c.price*c.qty, 0);
    const delivery = subtotal >= 300 || subtotal === 0 ? 0 : 40;
    const grand = subtotal + delivery;
    subtotalEl.innerText = '₹' + subtotal;
    deliveryFeeEl.innerText = '₹' + delivery;
    grandTotalEl.innerText = '₹' + grand;
    etaEl.innerText = estimateEta(subtotal);
  }

  function estimateEta(subtotal){
    if(!subtotal) return '—';
    if(subtotal >= 500) return '20-30 min';
    if(subtotal >= 300) return '25-35 min';
    return '30-45 min';
  }

  // ---------- PAYMENT ----------
  window.openPayment = function(){
    if(!cart.length){ alert('Add items to cart first'); return; }
    const subtotal = cart.reduce((s,c)=>s + c.price*c.qty, 0);
    const delivery = subtotal >= 300 ? 0 : 40;
    const grand = subtotal + delivery;
    checkoutSummary.innerHTML = `<div>Items: ${cart.reduce((s,c)=>s + c.qty,0)}</div>
      <div>Subtotal: ₹${subtotal}</div><div>Delivery: ₹${delivery}</div><div><strong>Total: ₹${grand}</strong></div>`;
    cartModal.classList.add('hidden');
    paymentModal.classList.remove('hidden');
  };

  window.closePayment = function(){ paymentModal.classList.add('hidden'); };

  window.pay = function(mode){
    const subtotal = cart.reduce((s,c)=>s + c.price*c.qty, 0);
    const delivery = subtotal >= 300 ? 0 : 40;
    const grand = subtotal + delivery;
    alert(`Payment via ${mode} successful — ₹${grand}`);
    // clear cart, persist, show driver modal
    cart = [];
    persistCart();
    refreshCartUI();
    paymentModal.classList.add('hidden');
    showDriverModal();
  };

  window.payWithWallet = function(){
    const subtotal = cart.reduce((s,c)=>s + c.price*c.qty, 0);
    const delivery = subtotal >= 300 ? 0 : 40;
    const grand = subtotal + delivery;
    if(wallet < grand){ alert('Insufficient wallet balance. Add funds or use other method.'); return; }
    wallet -= grand;
    localStorage.setItem('cuisino_wallet', wallet);
    walletAmountEl.innerText = '₹' + wallet;
    alert(`Paid ₹${grand} from wallet. Order confirmed!`);
    cart = [];
    persistCart();
    refreshCartUI();
    paymentModal.classList.add('hidden');
    showDriverModal();
  };

  function showDriverModal(){
    document.getElementById('driverLocation').innerText = '2.3 km away';
    document.getElementById('driverEta').innerText = '12 mins';
    driverModal.classList.remove('hidden');
    // optionally auto hide after some time: setTimeout(()=> driverModal.classList.add('hidden'), 25000);
  }

  window.closeDriver = function(){ driverModal.classList.add('hidden'); };

  // ---------- SEARCH & SUGGESTIONS ----------
  searchInput.addEventListener('input', ()=>{
    const q = searchInput.value.trim().toLowerCase();
    if(!q){ suggestions.classList.add('hidden'); renderMenu(MENU); return; }
    const matches = MENU.filter(m => (m.name + ' ' + m.cuisine).toLowerCase().includes(q));
    if(!matches.length){ suggestions.classList.add('hidden'); renderMenu([]); return; }
    suggestions.innerHTML = matches.slice(0,6).map(m=>`<div class="sugg" onclick="applySuggestion('${m.name.replace(/'/g,"\\'")}')"><img src="${m.img}">${m.name} • ₹${m.price}</div>`).join('');
    suggestions.classList.remove('hidden');
    renderMenu(matches);
  });

  window.applySuggestion = function(name){
    searchInput.value = name;
    suggestions.classList.add('hidden');
    const filtered = MENU.filter(m => m.name.toLowerCase().includes(name.toLowerCase()));
    renderMenu(filtered);
  };

  // ---------- FILTERS ----------
  document.querySelectorAll('input[name="filter"]').forEach(el=>el.addEventListener('change', applyFilters));
  vegOnlyCheckbox.addEventListener('change', ()=> renderMenu(MENU));
  healthyCheckbox.addEventListener('change', ()=> renderMenu(MENU));

  function applyFilters(){
    const val = document.querySelector('input[name="filter"]:checked').value;
    if(val==='all') renderMenu(MENU);
    else if(val==='veg') renderMenu(MENU.filter(m=>m.veg));
    else renderMenu(MENU.filter(m=>!m.veg));
  }

  // ---------- OFFERS ----------
  window.applyOffer = function(code){
    if(code==='20OFF') renderMenu(MENU.filter(m=>m.offer && m.offer.includes('20')));
    else if(code==='COMBO') renderMenu(MENU.filter(m=>['Fast Food','Mexican'].includes(m.cuisine)));
  };

  // ---------- RESTAURANTS ----------
  function renderRestaurants(list){
    restaurantsDiv.innerHTML = '';
    list.forEach(r=>{
      const d = document.createElement('div'); d.className='restaurant';
      d.innerHTML = `<img src="${r.img}"><div><div style="font-weight:700">${r.name}</div><div style="font-size:13px;color:#666">${r.type} • ⭐ ${r.rating}</div></div>`;
      restaurantsDiv.appendChild(d);
    });
  }

  // ---------- WALLET FUNDS ----------
  window.addFunds = function(){
    const amt = parseInt(prompt('Enter amount to add to wallet (₹):','200')||'0',10);
    if(amt>0){ wallet += amt; localStorage.setItem('cuisino_wallet', wallet); walletAmountEl.innerText = '₹' + wallet; toast('₹'+amt+' added to wallet');}
  };

  // ---------- LOCATION EDIT ----------
  window.editLocation = function(){
    const newLoc = prompt('Enter your location (example: ABES EC Mohan Nagar):', locationText) || locationText;
    locationText = newLoc; localStorage.setItem('cuisino_location', locationText); locationTextEl.innerText = locationText; toast('Location set: '+locationText);
  };

  // ---------- HELPERS ----------
  function toast(msg){
    const t = document.createElement('div'); t.className='toast'; t.innerText=msg; document.body.appendChild(t);
    setTimeout(()=>t.classList.add('visible'),30); setTimeout(()=>t.classList.remove('visible'),2200); setTimeout(()=>t.remove(),2600);
  }

  // ---------- persistence on unload ----------
  window.addEventListener('beforeunload', ()=>{ localStorage.setItem('cuisino_cart', JSON.stringify(cart)); localStorage.setItem('cuisino_wallet', wallet); localStorage.setItem('cuisino_location', locationText); });

});
