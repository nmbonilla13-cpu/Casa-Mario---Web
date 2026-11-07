
/* ============================================================
   CONFIGURACIÓN EDITABLE — CASA MARIO
   Aquí se definen productos, precios, inventario, pagos, envíos y contacto.
   Los valores en null aparecen como "por definir". No hay datos inventados.
   ============================================================ */
const CASA_MARIO_CONFIG={
  currency:"COP",
  hero:"pepa",            // portada: "pepa" (bolsa dentro de la pepa que se abre) o "bolsa" (bolsa con granos al lado)
  contact:{
    email:null,           // ej. "hola@casamario.co"
    whatsapp:null,        // solo números con indicativo de país, ej. "573001234567"
    instagram:null,       // solo el usuario, ej. "casamario"
    facebook:null         // solo el usuario o nombre de la página
  },
  payments:{provider:null,                    // ej. "wompi" | "mercadopago" | "payu" | "epayco"
            options:["Wompi","Mercado Pago","PayU","ePayco"]},
  shipping:{rates:null,freeFrom:null},        // tarifas por ciudad / envío gratis desde
  products:[{
    id:"cm-01", provisional:true,
    name:null,                                // ej. "Finca Las Mercedes · Lote 1"
    origin:"Finca Las Mercedes · Pitalito, Huila",
    variety:null, process:null, altitude:null, notes:null, roast:null,
    sizes:[{g:250,price:null,stock:null},{g:500,price:null,stock:null},{g:1000,price:null,stock:null}],
    grinds:["grano","molido"],
    images:["hero.webp","bolsa-3q.webp","bolsa-reverso.webp"]
  }]
};

/* ============================ i18n ============================ */
const EN={
skip:"Skip to content",n_inicio:"Home",n_hist:"Our story",n_cafes:"Our coffees",n_origen:"Origin",n_cult:"Coffee culture",n_cont:"Contact",
a_cart:"Cart",a_menu:"Menu",a_filters:"Filters",
h_eye:"Finca Las Mercedes · Pitalito, Huila",h_h1:"Memory made into coffee.",co1t:"Origin",co1:"Finca Las Mercedes, Pitalito, Huila.",co2t:"Hand painted",co2:"Botanical oil illustrations on every bag.",co3t:"Family memory",co3:"A name that honors grandfather Mario.",co4t:"To share",co4:"Coffee made for the table and the conversation.",mq1:"Memory made into coffee",mq2:"Finca Las Mercedes",mq3:"Pitalito · Huila · Colombia",mq4:"Specialty coffee",an1:"Specialty coffee from Finca Las Mercedes · Pitalito, Huila",an2:"Place your order on WhatsApp",
h_lead:"A specialty coffee born in the mountains of Huila, keeping the memory of a family, a house and everyone who always came back to the same table.",
h_b1:"Discover our coffee",h_b2:"Our story",h_alt:"CASA MARIO coffee bag",pp_hint:"Tap the bean",pp_aria:"Open the coffee bean",h_tag:"Bag: digital representation",
ph1:"Space for a real photograph",ph1b:"Landscape or coffee grove at Finca Las Mercedes. Replace with your own photograph.",
p_eye:"Coffee with origin",p_h2a:"Coffee keeps stories.",p_h2b:"We grow them.",
p_lead:"CASA MARIO is a family brand from Finca Las Mercedes in Pitalito, Huila. Every bag carries the care of the land and the memory of those who have worked it.",p_b:"Meet the origin",
i_colibri:"Hummingbird painted in oils",u_eye:"The CASA MARIO universe",u_h2:"Agapanthus, hummingbirds and coffee groves.",
u_p:"Every illustration on our packaging is painted like a traditional botanical plate in oils: visible brushwork, pigment and patience. They are the same living things that surround the house and the farm.",u_b:"Enter the universe",
pl1:"Memory",pl1p:"A name that honors grandfather Mario and the family's coffee tradition.",pl2:"Origin",pl2p:"Finca Las Mercedes, Pitalito, Huila, Colombia.",pl3:"Gathering",pl3p:"Coffee to share, remember and return to the table.",
hi_eye:"Our story",hi_h1:"A story that blooms in every cup.",hi_lead:"CASA MARIO is born from memory: the family house, the coffee groves, the bread oven and afternoons around a cup.",
hi_a_h:"Grandfather Mario",hi_a_p1:"It all begins with Mario. His name is on the brand because his memory lives on at the farm, in the gestures the family inherited and in the way visitors are welcomed.",
hi_a_p2:"[Here you can tell, in your own words, who Mario was. This space is open for the family to write their real story.]",
ph2:"Family photograph",ph2b:"Space for a real photograph of the family or of Mario.",
hi_b_h:"Finca Las Mercedes",hi_b_p1:"Among coffee trees, purple agapanthus and hummingbirds, the traditional bahareque house is the heart of the story. There, the bread oven and the cup of coffee shaped the family's gatherings.",
hi_b_p2:"[Editable space to describe the farm with real facts: how it came to the family, what is grown, who works it.]",
ph3:"Photograph of the farm",ph3b:"Space for a real photograph of the house or the coffee grove.",
hi_c_h:"Why CASA MARIO",hi_c_p1:"A house is where what matters is kept. We call the brand CASA MARIO because every cup returns to that place: the table, the voices and the land the coffee comes from.",
hi_c_p2:"Our motto says it: <em>Memory made into coffee</em>.",hi_b:"Try our coffee",i_rama:"Coffee branch painted in oils",
ca_eye:"Our coffees",ca_h1:"Specialty coffee, straight from the farm.",ca_lead:"Choose your coffee, size and grind. Technical details are completed with the real information of each lot.",
f_roast:"Roast",f_grind:"Format",ca_note:"Products, prices and inventory are provisional. They are set in the CASA_MARIO_CONFIG block at the top of the page code. Data that does not exist yet is not shown.",
or_eye:"Our origin",or_h1:"From our land to your cup.",or_lead:"Finca Las Mercedes, Pitalito, Huila, Colombia. A journey along the path of coffee, from the plant to the table.",
or_note:"The photographs and texts for each stage are replaced with real material from Las Mercedes. No coordinates, certifications or farming practices are shown unless confirmed.",
cu_eye:"Coffee culture",cu_h1:"Specialty coffee, for everyone.",cu_lead:"If you have never brewed a specialty coffee, start here. If you are already a barista, find references to fine-tune your recipe.",
un_eye:"The CASA MARIO universe",un_h1:"A botanical gallery, painted by hand.",un_lead:"Agapanthus, hummingbirds, coffee trees and cherries: the nature around the family, turned into identity.",
g1:"The label: hummingbird, agapanthus and coffee branch.",g1a:"CASA MARIO label",g2:"Agapanthus garden.",g2a:"Agapanthus garden",g3:"The hummingbird, messenger of the farm.",g3a:"Hummingbird",g4:"Coffee branch with cherries.",g4a:"Coffee branch with cherries",g5:"The purple agapanthus, symbol of the brand.",g5a:"Purple agapanthus",
ph4:"Space for real photographs",ph4b:"Farm, family and tradition.",g6:"The farm, in your own photographs.",
co_eye:"Contact",co_h1:"Let's talk coffee.",co_lead:"Orders are placed on WhatsApp. For customer care, distributors and partnerships, write to us.",
fo_name:"Name",fo_mail:"Email",fo_topic:"Subject",fo_t1:"Order or purchase",fo_t2:"Customer care",fo_t3:"Distributors and partnerships",fo_t4:"Other",fo_msg:"Message",fo_send:"Send message",
in_wa:"WhatsApp",wa_h:"Place your order on WhatsApp",wa_1:"Choose your coffee, size and grind.",wa_2:"Add it to the cart and press “Place order on WhatsApp”.",wa_3:"WhatsApp opens with your order already written. We arrange payment and shipping there.",wa_b:"Message us on WhatsApp",wa_c:"See the coffees",wa_miss:"The WhatsApp number is not set yet in app.js.",in_mail:"Email",in_soc:"Social media",in_com:"Business information",in_comp:"[Company name, tax ID and distributor details]",in_dis:"Distributors and partnerships",in_disp:"If you want to bring CASA MARIO to your café, shop or project, tell us in your message.",in_loc:"Origin",
ft_p:"Memory made into coffee. Specialty coffee from Finca Las Mercedes, Pitalito, Huila.",ft_nav:"Explore",n_hist2:"Our story",n_cafes2:"Our coffees",n_origen2:"Origin",n_cult2:"Coffee culture",n_uni2:"The universe",ft_help:"Help",n_cont2:"Contact",ft_dist:"Distributors",ft_note:"Photographs and information are provisional."
};
/* textos dinámicos */
const D={
es:{lang:"es",tbd:"Por definir",provisional:"Producto provisional",nameTbd:"[Nombre del café]",add:"Añadir al carrito",view:"Ver detalle",soldout:"Agotado",stockTbd:"Inventario por definir",
 variety:"Variedad",process:"Proceso",altitude:"Altitud",notes:"Notas de cata",roast:"Tueste",origin:"Origen",size:"Tamaño",grind:"Molienda",qty:"Cantidad",
 grano:"Grano",molido:"Molido",all:"Todos",ligero:"Ligero",medio:"Medio",oscuro:"Oscuro",
 prepT:"Recomendaciones de preparación",prep:"<b>Filtrado:</b> [ratio] · [temperatura] · [tiempo]. <b>Prensa francesa:</b> [ratio] · [tiempo]. <b>Espresso:</b> [dosis] · [tiempo]. Los valores se completan con el perfil real del café.",
 oName:"Tu nombre",oCity:"Ciudad",orderBtn:"Hacer pedido por WhatsApp",orderNote:"Se abre WhatsApp con tu pedido ya escrito. El pago y el envío los acordamos allí.",noWaT:"WhatsApp sin configurar",noWa:"Falta el número de WhatsApp de la tienda en app.js (contact.whatsapp).",msgHead:"Hola CASA MARIO, quiero hacer este pedido:",msgEnd:"Quedo atento(a) para confirmar el pago y el envío. ¡Gracias!",hello:"Hola CASA MARIO, quisiera más información sobre su café.",close:"Cerrar",cart:"Tu carrito",empty:"Tu carrito está vacío.",remove:"Quitar",subtotal:"Subtotal",priceTbd:"Precio por definir",shipping:"Envío",shipTbd:"Se acuerda por WhatsApp",
 checkout:"Ir a pagar",payT:"Pagos no configurados",payP:"Esta tienda todavía no tiene una pasarela de pago conectada, así que no se puede finalizar la compra. La arquitectura está lista para integrar:",
 added:"Añadido al carrito",unit:"g",from:"desde",
 stages:[["Cafetales","La mata","[Texto sobre los cafetales de Las Mercedes: variedades, sombra, altura. Completar con datos reales.]"],["Cerezas","El fruto","[Texto sobre la cereza de café de la finca y su punto de maduración.]"],["Recolección","La cosecha","[Texto sobre cómo y cuándo se recolecta en Las Mercedes.]"],["Procesamiento","Del fruto al grano","[Texto sobre el beneficio, fermentación y secado que usa la finca.]"],["Del territorio","Pitalito, Huila","[Texto sobre la historia del territorio: Pitalito y el sur del Huila.]"]],
 phTitle:"Espacio para fotografía real",phTxt:"Reemplazar por una fotografía propia de esta etapa.",
 cats:[
 ["Aprende sobre café","<p>El café de especialidad es el que se cultiva, procesa y tuesta con cuidado para que cada paso se note en la taza. La diferencia está en el origen, la variedad, el proceso y el tueste.</p><ul><li>Origen: dónde y a qué altura creció.</li><li>Variedad: la planta de la que viene.</li><li>Proceso: cómo se retiró el fruto y se secó el grano.</li></ul>"],
 ["Métodos de preparación","<ul><li><b>Filtrado (V60, Chemex):</b> taza limpia y aromática.</li><li><b>Prensa francesa:</b> más cuerpo y textura.</li><li><b>Espresso:</b> intenso y concentrado, base de muchas bebidas.</li></ul><p>Elige según el tiempo que tengas y la taza que prefieras.</p>"],
 ["Cómo preparar una buena taza","<ul><li>Usa café recién molido y agua filtrada.</li><li>Punto de partida: 1 parte de café por 16 de agua (por ejemplo, 15 g para 250 ml).</li><li>Agua entre 92 y 96 °C para filtrado.</li><li>Ajusta la molienda: si sabe amargo, más gruesa; si sabe ácido o débil, más fina.</li></ul>"],
 ["Cómo reconocer los perfiles sensoriales","<ul><li><b>Aroma:</b> lo que percibes antes de beber.</li><li><b>Acidez:</b> la viveza, como la de una fruta.</li><li><b>Dulzor:</b> sensación de azúcar o miel.</li><li><b>Cuerpo:</b> el peso y la textura en la boca.</li><li><b>Final:</b> lo que queda después de tragar.</li></ul>"],
 ["Conoce el proceso del café","<p>Cereza, despulpado, fermentación, lavado, secado, trilla, tueste y taza. Cada etapa cambia el sabor. El proceso real de Las Mercedes se describirá en la sección Origen.</p>"],
 ["Consejos para conservar y preparar tu café","<ul><li>Guárdalo en su bolsa bien cerrada, lejos de la luz, el calor y la humedad.</li><li>No lo guardes en la nevera.</li><li>Muele justo antes de preparar.</li><li>Consúmelo dentro de las semanas posteriores al tueste.</li></ul>"]],
 form:{sent:"Mensaje enviado. Gracias, te responderemos pronto.",fail:"No pudimos enviar el mensaje. Inténtalo de nuevo o escríbenos por WhatsApp o correo.",need2:"Escribe tu mensaje antes de abrir WhatsApp.",need:"Completa nombre, correo y mensaje.",bad:"El correo no parece válido.",note:"<b>Este formulario aún no está conectado a un servicio de envío</b>, así que tu mensaje no se envió. Copia el texto y escríbenos al correo de contacto cuando esté disponible."}},
en:{lang:"en",tbd:"To be defined",provisional:"Provisional product",nameTbd:"[Coffee name]",add:"Add to cart",view:"View details",soldout:"Sold out",stockTbd:"Inventory to be defined",
 variety:"Variety",process:"Process",altitude:"Altitude",notes:"Tasting notes",roast:"Roast",origin:"Origin",size:"Size",grind:"Grind",qty:"Quantity",
 grano:"Whole bean",molido:"Ground",all:"All",ligero:"Light",medio:"Medium",oscuro:"Dark",
 prepT:"Brewing recommendations",prep:"<b>Pour over:</b> [ratio] · [temperature] · [time]. <b>French press:</b> [ratio] · [time]. <b>Espresso:</b> [dose] · [time]. Values are completed with the real profile of the coffee.",
 oName:"Your name",oCity:"City",orderBtn:"Place order on WhatsApp",orderNote:"WhatsApp opens with your order already written. We arrange payment and shipping there.",noWaT:"WhatsApp not configured",noWa:"The store WhatsApp number is missing in app.js (contact.whatsapp).",msgHead:"Hello CASA MARIO, I would like to place this order:",msgEnd:"I look forward to confirming payment and shipping. Thank you!",hello:"Hello CASA MARIO, I would like more information about your coffee.",close:"Close",cart:"Your cart",empty:"Your cart is empty.",remove:"Remove",subtotal:"Subtotal",priceTbd:"Price to be defined",shipping:"Shipping",shipTbd:"Arranged on WhatsApp",
 checkout:"Checkout",payT:"Payments not configured",payP:"This store does not have a payment gateway connected yet, so the purchase cannot be completed. The architecture is ready to integrate:",
 added:"Added to cart",unit:"g",from:"from",
 stages:[["Coffee groves","The plant","[Text about the coffee groves at Las Mercedes: varieties, shade, altitude. Complete with real data.]"],["Cherries","The fruit","[Text about the farm's coffee cherry and its ripeness.]"],["Harvest","The picking","[Text about how and when picking happens at Las Mercedes.]"],["Processing","From fruit to bean","[Text about the milling, fermentation and drying used by the farm.]"],["The territory","Pitalito, Huila","[Text about the history of the territory: Pitalito and southern Huila.]"]],
 phTitle:"Space for a real photograph",phTxt:"Replace with your own photograph of this stage.",
 cats:[
 ["Learn about coffee","<p>Specialty coffee is grown, processed and roasted with care so every step shows in the cup. The difference lies in origin, variety, process and roast.</p><ul><li>Origin: where and at what altitude it grew.</li><li>Variety: the plant it comes from.</li><li>Process: how the fruit was removed and the bean dried.</li></ul>"],
 ["Brewing methods","<ul><li><b>Pour over (V60, Chemex):</b> clean, aromatic cup.</li><li><b>French press:</b> more body and texture.</li><li><b>Espresso:</b> intense and concentrated, the base of many drinks.</li></ul><p>Choose according to your time and the cup you prefer.</p>"],
 ["How to brew a good cup","<ul><li>Use freshly ground coffee and filtered water.</li><li>Starting point: 1 part coffee to 16 parts water (for example, 15 g for 250 ml).</li><li>Water between 92 and 96 °C for pour over.</li><li>Adjust the grind: if it tastes bitter, go coarser; if sour or weak, go finer.</li></ul>"],
 ["How to recognize flavor profiles","<ul><li><b>Aroma:</b> what you notice before drinking.</li><li><b>Acidity:</b> the brightness, like a fruit's.</li><li><b>Sweetness:</b> a sense of sugar or honey.</li><li><b>Body:</b> the weight and texture in the mouth.</li><li><b>Finish:</b> what remains after swallowing.</li></ul>"],
 ["Know the coffee process","<p>Cherry, pulping, fermentation, washing, drying, hulling, roasting and cup. Each stage changes the flavor. The real process at Las Mercedes will be described in the Origin section.</p>"],
 ["Tips to store and brew your coffee","<ul><li>Keep it in its sealed bag, away from light, heat and moisture.</li><li>Do not store it in the fridge.</li><li>Grind right before brewing.</li><li>Drink it within weeks of the roast date.</li></ul>"]],
 form:{sent:"Message sent. Thank you, we will reply soon.",fail:"We could not send the message. Please try again or write to us on WhatsApp or by email.",need2:"Write your message before opening WhatsApp.",need:"Fill in name, email and message.",bad:"The email does not look valid.",note:"<b>This form is not connected to a sending service yet</b>, so your message was not sent. Copy the text and write to the contact email once it is available."}}
};
const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
const ES={};
$$("[data-t]").forEach(e=>{ES[e.dataset.t]=e.innerHTML});
const ESA={};
$$("[data-t-attr]").forEach(e=>{const[a,k]=e.dataset.tAttr.split(":");ESA[k]=e.getAttribute(a)});
let LANG="es";const T=()=>D[LANG];
function applyLang(l){
  LANG=l;document.documentElement.lang=l;
  $$("[data-t]").forEach(e=>{const k=e.dataset.t;const v=l==="en"?EN[k]:ES[k];if(v!=null)e.innerHTML=v});
  $$("[data-t-attr]").forEach(e=>{const[a,k]=e.dataset.tAttr.split(":");const v=l==="en"?EN[k]:ESA[k];if(v!=null)e.setAttribute(a,v)});
  $("#bES").setAttribute("aria-pressed",l==="es");$("#bEN").setAttribute("aria-pressed",l==="en");
  const m=document.querySelector('meta[name="description"]');
  m.content=l==="es"?"CASA MARIO · Café de especialidad de la Finca Las Mercedes, Pitalito, Huila, Colombia. Memory made into coffee.":"CASA MARIO · Specialty coffee from Finca Las Mercedes, Pitalito, Huila, Colombia. Memory made into coffee.";
  try{localStorage.setItem("cm_lang",l)}catch(e){}
  renderAll();splitWords();
}
/* ============================ tienda ============================ */
const P=CASA_MARIO_CONFIG.products;
const money=v=>new Intl.NumberFormat(LANG==="es"?"es-CO":"en-US",{style:"currency",currency:CASA_MARIO_CONFIG.currency,maximumFractionDigits:0}).format(v);
let cart=[];try{cart=JSON.parse(localStorage.getItem("cm_cart")||"[]")}catch(e){}
const saveCart=()=>{try{localStorage.setItem("cm_cart",JSON.stringify(cart))}catch(e){}};
let fRoast="all",fGrind="all";
const pName=p=>p.name||T().nameTbd;
const pVal=v=>v?v:`<span class="ed">${T().tbd}</span>`;
const priceLine=p=>{const ps=p.sizes.map(s=>s.price).filter(v=>v!=null);return ps.length?`<small>${T().from}</small> ${money(Math.min(...ps))}`:`<small>${T().priceTbd}</small>`};
function renderFilters(){
  const t=T(),mk=(id,key,vals,cur,set)=>{const c=$(id);c.innerHTML=`<span>${EN&&LANG==="en"?EN[key]:ES[key]}</span>`;
    ["all",...vals].forEach(v=>{const b=document.createElement("button");b.className="chip";b.textContent=t[v];b.setAttribute("aria-pressed",cur===v);b.onclick=()=>{set(v);renderFilters();renderGrid()};c.appendChild(b)})};
  mk("#fRoast","f_roast",["ligero","medio","oscuro"],fRoast,v=>fRoast=v);
  mk("#fGrind","f_grind",["grano","molido"],fGrind,v=>fGrind=v);
}
function renderGrid(){
  const t=T(),list=P.filter(p=>(fRoast==="all"||!p.roast||p.roast===fRoast)&&(fGrind==="all"||p.grinds.includes(fGrind)));
  $("#grid").innerHTML=list.map(p=>`<article class="card"><button class="img" data-pid="${p.id}" aria-label="${t.view}: ${pName(p)}"><img src="${p.images[0]}" alt="" loading="lazy" width="600" height="548">${p.provisional?`<span class="badge">${t.provisional}</span>`:""}</button>
  <div class="body"><h3>${pName(p)}</h3><dl class="meta"><dt>${t.origin}</dt><dd>${p.origin}</dd><dt>${t.variety}</dt><dd>${pVal(p.variety)}</dd><dt>${t.process}</dt><dd>${pVal(p.process)}</dd><dt>${t.notes}</dt><dd>${pVal(p.notes)}</dd></dl>
  <div class="price">${priceLine(p)}</div><div class="row"><button class="btn" data-pid="${p.id}">${t.view}</button></div></div></article>`).join("");
  $$("[data-pid]").forEach(b=>b.onclick=()=>openProduct(b.dataset.pid));
}
let curP=null,curImg=0;
function openProduct(id){
  curP=P.find(p=>p.id===id);curImg=0;renderProduct();$("#modal").classList.add("on");$("#scrim").classList.add("on");document.body.style.overflow="hidden";
  setTimeout(()=>$("#sheet .x")&&$("#sheet .x").focus(),30);
}
function closeModal(){$("#modal").classList.remove("on");if(!$("#drawer").classList.contains("on"))$("#scrim").classList.remove("on");document.body.style.overflow=$("#drawer").classList.contains("on")?"hidden":""}
function stockInfo(s){return s.stock==null?T().stockTbd:(s.stock<=0?T().soldout:"")}
function renderProduct(){
  const p=curP,t=T();
  $("#sheet").innerHTML=`<button class="x" aria-label="${t.close}" id="xClose">×</button><div class="pd"><div class="g"><img class="main" id="pdMain" src="${p.images[curImg]}" alt="${pName(p)}" width="800" height="800"><div class="thumbs">${p.images.map((s,i)=>`<button data-i="${i}" aria-current="${i===curImg}" aria-label="${i+1}"><img src="${s}" alt=""></button>`).join("")}</div></div>
  <div class="i"><span class="eyebrow">${p.provisional?t.provisional:""}</span><h2 id="pdName">${pName(p)}</h2>
  <dl class="meta"><dt>${t.origin}</dt><dd>${p.origin}</dd><dt>${t.variety}</dt><dd>${pVal(p.variety)}</dd><dt>${t.process}</dt><dd>${pVal(p.process)}</dd><dt>${t.altitude}</dt><dd>${pVal(p.altitude)}</dd><dt>${t.notes}</dt><dd>${pVal(p.notes)}</dd><dt>${t.roast}</dt><dd>${p.roast?t[p.roast]:pVal(null)}</dd></dl>
  <div class="two"><label class="field">${t.size}<select id="pdSize">${p.sizes.map((s,i)=>`<option value="${i}">${s.g>=1000?s.g/1000+" kg":s.g+" g"}${s.price!=null?" · "+money(s.price):""}</option>`).join("")}</select></label>
  <label class="field">${t.grind}<select id="pdGrind">${p.grinds.map(g=>`<option value="${g}">${t[g]}</option>`).join("")}</select></label></div>
  <div class="price" id="pdPrice"></div><div class="field" id="pdStock" style="text-transform:none;letter-spacing:.02em;font-weight:500;font-size:13px"></div>
  <div class="row" style="align-items:center"><div class="qty"><button id="qm" aria-label="−">−</button><span id="pdQ">1</span><button id="qp" aria-label="+">+</button></div><button class="btn" id="pdAdd">${t.add}</button></div>
  <div class="prep"><b>${t.prepT}</b><br>${t.prep}</div></div></div>`;
  let q=1;const upd=()=>{const s=p.sizes[+$("#pdSize").value];$("#pdPrice").innerHTML=s.price!=null?money(s.price):`<small>${t.priceTbd}</small>`;$("#pdStock").textContent=stockInfo(s);$("#pdAdd").disabled=(s.stock!=null&&s.stock<=0);$("#pdQ").textContent=q};
  $("#pdSize").onchange=upd;$("#qm").onclick=()=>{q=Math.max(1,q-1);upd()};$("#qp").onclick=()=>{q=Math.min(20,q+1);upd()};upd();
  $("#xClose").onclick=closeModal;
  $$(".thumbs button").forEach(b=>b.onclick=()=>{curImg=+b.dataset.i;$("#pdMain").src=p.images[curImg];$$(".thumbs button").forEach(x=>x.setAttribute("aria-current",x===b))});
  $("#pdAdd").onclick=()=>{addToCart(p.id,+$("#pdSize").value,$("#pdGrind").value,q);closeModal();openCart()};
}
function addToCart(pid,si,grind,q){const k=[pid,si,grind].join("|"),f=cart.find(i=>i.k===k);if(f)f.q+=q;else cart.push({k,pid,si,grind,q});saveCart();renderCart()}
function renderCart(){
  const t=T();$("#cartN").textContent=cart.reduce((a,i)=>a+i.q,0);
  const rows=cart.map(i=>{const p=P.find(x=>x.id===i.pid),s=p.sizes[i.si];return `<div class="it-row"><img src="${p.images[0]}" alt=""><div><strong>${pName(p)}</strong><div style="color:var(--muted);font-size:.9rem">${s.g>=1000?s.g/1000+" kg":s.g+" g"} · ${t[i.grind]}</div><div style="margin-top:8px;display:flex;gap:14px;align-items:center;flex-wrap:wrap"><div class="qty"><button data-m="${i.k}" aria-label="−">−</button><span>${i.q}</span><button data-p="${i.k}" aria-label="+">+</button></div><button class="linkbtn" data-x="${i.k}">${t.remove}</button><span style="margin-left:auto">${s.price!=null?money(s.price*i.q):`<small style="color:var(--muted)">${t.priceTbd}</small>`}</span></div></div></div>`}).join("");
  const known=cart.every(i=>P.find(x=>x.id===i.pid).sizes[i.si].price!=null)&&cart.length;
  const sub=known?money(cart.reduce((a,i)=>a+P.find(x=>x.id===i.pid).sizes[i.si].price*i.q,0)):t.tbd;
  const pay=CASA_MARIO_CONFIG.payments;
  $("#drawer").innerHTML=`<div style="display:flex;justify-content:space-between;align-items:start"><h3>${t.cart}</h3><button class="x" style="position:static" id="cClose" aria-label="${t.close}">×</button></div>
  <div class="items">${rows||`<p style="color:var(--muted)">${t.empty}</p>`}</div>
  ${cart.length?`<div class="sum"><div class="r"><span>${t.subtotal}</span><strong>${sub}</strong></div><div class="r" style="color:var(--muted);font-size:.9rem"><span>${t.shipping}</span><span>${t.shipTbd}</span></div>
  <div class="two"><label class="field">${t.oName}<input id="oName" value="${OD.name.replace(/"/g,"&quot;")}" autocomplete="name"></label><label class="field">${t.oCity}<input id="oCity" value="${OD.city.replace(/"/g,"&quot;")}" autocomplete="address-level2"></label></div>
  <div class="pay" id="payBox" hidden><b>${t.noWaT}</b><br>${t.noWa}</div><button class="btn" id="goWa">${t.orderBtn}</button><p class="note" style="margin:0">${t.orderNote}</p></div>`:""}`;
  $("#cClose").onclick=closeCart;
  $$("[data-m]").forEach(b=>b.onclick=()=>chg(b.dataset.m,-1));$$("[data-p]").forEach(b=>b.onclick=()=>chg(b.dataset.p,1));$$("[data-x]").forEach(b=>b.onclick=()=>{cart=cart.filter(i=>i.k!==b.dataset.x);saveCart();renderCart()});
  const g=$("#goWa");if(g){$("#oName").oninput=e=>OD.name=e.target.value;$("#oCity").oninput=e=>OD.city=e.target.value;g.onclick=sendOrder}
}
let OD={name:"",city:""};
function sendOrder(){
  const t=T(),wa=CASA_MARIO_CONFIG.contact.whatsapp;if(!wa){$("#payBox").hidden=false;return}
  const lines=cart.map(i=>{const p=P.find(x=>x.id===i.pid),s=p.sizes[i.si];return `• ${i.q} × ${pName(p)} — ${s.g>=1000?s.g/1000+" kg":s.g+" g"}, ${t[i.grind]}${s.price!=null?" — "+money(s.price*i.q):""}`});
  const known=cart.every(i=>P.find(x=>x.id===i.pid).sizes[i.si].price!=null);
  let msg=t.msgHead+"\n\n"+lines.join("\n");
  if(known)msg+="\n\n"+t.subtotal+": "+money(cart.reduce((a,i)=>a+P.find(x=>x.id===i.pid).sizes[i.si].price*i.q,0));
  if(OD.name.trim())msg+="\n\n"+t.oName+": "+OD.name.trim();if(OD.city.trim())msg+="\n"+t.oCity+": "+OD.city.trim();
  msg+="\n\n"+t.msgEnd;
  window.open("https://wa.me/"+wa+"?text="+encodeURIComponent(msg),"_blank","noopener");
}
function chg(k,d){const i=cart.find(x=>x.k===k);i.q+=d;if(i.q<=0)cart=cart.filter(x=>x!==i);saveCart();renderCart()}
function openCart(){renderCart();$("#drawer").classList.add("on");$("#scrim").classList.add("on");document.body.style.overflow="hidden";setTimeout(()=>$("#cClose").focus(),30)}
function closeCart(){$("#drawer").classList.remove("on");if(!$("#modal").classList.contains("on")){$("#scrim").classList.remove("on");document.body.style.overflow=""}}
$("#openCart").onclick=openCart;$("#scrim").onclick=()=>{closeModal();closeCart()};
document.addEventListener("keydown",e=>{if(e.key==="Escape"){closeModal();closeCart()}});
/* ============================ origen / cultura ============================ */
function renderStages(){const t=T();$("#stages").innerHTML=t.stages.map((s,i)=>`<section class="stage"><div class="ph"><div><b>${t.phTitle}</b>${t.phTxt}</div></div><div class="wrap" style="width:100%;position:relative;z-index:2;display:flex"><div class="t" style="${i%2?"margin-left:auto":""}"><span class="eyebrow">${s[1]}</span><h3>${s[0]}</h3><p>${s[2]}</p></div></div></section>`).join("")}
function renderCats(){const t=T();$("#cats").innerHTML=t.cats.map((c,i)=>`<div class="cat" data-open="false"><button aria-expanded="false" aria-controls="cm${i}"><span class="k">${i+1}</span><h3>${c[0]}</h3><span class="pl" aria-hidden="true">+</span></button><div class="more" id="cm${i}" hidden>${c[1]}</div></div>`).join("");
  $$(".cat>button").forEach(b=>b.onclick=()=>{const c=b.parentElement,o=c.dataset.open!=="true";c.dataset.open=o;b.setAttribute("aria-expanded",o);$(".more",c).hidden=!o})}
/* ============================ contacto ============================ */
const CT=()=>CASA_MARIO_CONFIG.contact;
function waLink(txt){return "https://wa.me/"+CT().whatsapp+(txt?"?text="+encodeURIComponent(txt):"")}
function renderMail(){const c=CT(),t=T(),ph=`<span class="ed">${t.tbd}</span>`;
  $("#ctMail").innerHTML=c.email?`<a href="mailto:${c.email}">${c.email}</a>`:ph;
  $("#ctWa").innerHTML=c.whatsapp?`<a href="${waLink()}" target="_blank" rel="noopener">+${c.whatsapp}</a>`:ph;
  const soc=[];if(c.instagram)soc.push(`<a href="https://instagram.com/${c.instagram}" target="_blank" rel="noopener">Instagram @${c.instagram}</a>`);if(c.facebook)soc.push(`<a href="https://facebook.com/${c.facebook}" target="_blank" rel="noopener">Facebook</a>`);
  $("#ctSoc").innerHTML=soc.length?soc.join(" · "):ph;
  const big=$("#cWaBig");if(c.whatsapp){big.href=waLink(T().hello);big.target="_blank";big.rel="noopener";$("#waMiss").hidden=true}else{big.href="#contacto";big.removeAttribute("target");$("#waMiss").hidden=false}}
/* ============================ rutas ============================ */
const ROUTES=["inicio","historia","cafes","origen","cultura","universo","contacto"];
function route(){let h=(location.hash||"#inicio").slice(1);if(!ROUTES.includes(h))h="inicio";
  $$(".view").forEach(v=>v.hidden=v.id!=="v-"+h);$$("nav.main a").forEach(a=>{if(a.dataset.r===h)a.setAttribute("aria-current","page");else a.removeAttribute("aria-current")});
  $("#nav").classList.remove("open");$("#burger").setAttribute("aria-expanded","false");window.scrollTo(0,0);watch()}
window.addEventListener("hashchange",route);
$("#burger").onclick=()=>{const o=$("#nav").classList.toggle("open");$("#burger").setAttribute("aria-expanded",o)};
$("#bES").onclick=()=>applyLang("es");$("#bEN").onclick=()=>applyLang("en");
/* animaciones suaves al desplazar */
let io;function watch(){if(io)io.disconnect();io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}}),{threshold:.12});$$(".rise").forEach(e=>{e.classList.remove("in");io.observe(e)})}
let tick=false;addEventListener("scroll",()=>{if(tick)return;tick=true;requestAnimationFrame(()=>{tick=false;const y=scrollY;$$(".deco").forEach(d=>d.style.translate=`0 ${Math.min(40,y*.04)}px`)})},{passive:true});
function renderAll(){renderFilters();renderGrid();renderCart();renderStages();renderCats();renderMail();if($("#modal").classList.contains("on"))renderProduct()}

/* ===== movimiento ===== */
const RM=matchMedia("(prefers-reduced-motion: reduce)").matches;
function splitWords(){$$(".split").forEach(h=>{const t=h.textContent.trim();h.setAttribute("aria-label",t);h.innerHTML=t.split(/\s+/).map((w,i)=>`<span class="w" aria-hidden="true"><span style="--i:${i}">${w}</span></span> `).join("")})}
let ticking=false;
function onScroll(){const y=scrollY;$("#hdr").classList.toggle("sc",y>30);$$("[data-sp],.fl,.bagw,.pepa").forEach(e=>{const sp=parseFloat(getComputedStyle(e).getPropertyValue("--sp"))||0;e.style.setProperty("--py",(y*sp*-1)+"px")})}
if(!RM){
  addEventListener("scroll",()=>{if(ticking)return;ticking=true;requestAnimationFrame(()=>{ticking=false;onScroll()})},{passive:true});
  const hf=$(".hero2 .frame");
  hf.addEventListener("pointermove",e=>{const r=hf.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;$$(".fl,.bagw,.pepa",hf).forEach(el=>{el.style.setProperty("--mx",x.toFixed(3));el.style.setProperty("--my",y.toFixed(3))})});
  hf.addEventListener("pointerleave",()=>$$(".fl,.bagw,.pepa",hf).forEach(el=>{el.style.setProperty("--mx",0);el.style.setProperty("--my",0)}));
  document.addEventListener("pointermove",e=>{const c=e.target.closest&&e.target.closest(".card");if(!c)return;const r=c.getBoundingClientRect();c.style.transform=`perspective(900px) rotateY(${((e.clientX-r.left)/r.width-.5)*6}deg) rotateX(${-((e.clientY-r.top)/r.height-.5)*6}deg) translateY(-4px)`});
  document.addEventListener("pointerout",e=>{const c=e.target.closest&&e.target.closest(".card");if(c)c.style.transform=""});
}else{onScroll()}

/* ===== granos de café con física ligera ===== */
(function(){
  const st=$("#stage3"),box=$("#beans");if(!st||!box)return;
  const SPEC=[ // x%, y%, ancho px, profundidad (0 lejos..1 cerca), sprite, z (1 detrás de la bolsa, 2 delante)
    [4,12,70,.3,1,1],[12,34,104,.7,2,1],[3,58,58,.2,3,1],[15,80,120,.9,4,2],[24,6,50,.15,2,1],[24,60,76,.5,1,1],[8,92,64,.3,3,1],
    [96,10,64,.3,3,1],[86,30,116,.8,4,1],[94,56,62,.2,2,1],[84,78,126,.95,1,2],[74,8,52,.15,4,1],[75,58,70,.45,3,1],[92,92,60,.25,2,1],[30,90,56,.2,4,1],[68,92,66,.35,1,1]
  ];
  const mobile=matchMedia("(max-width:860px)").matches;
  const B=SPEC.filter((_,i)=>!mobile||i%2===0).map((sp,i)=>{
    const el=document.createElement("div");el.className="bean";el.style.setProperty("--dl2",(.15*i)+"s");
    const im=document.createElement("img");im.src="grano"+sp[4]+".webp";im.alt="";im.width=334;im.height=209;el.appendChild(im);el.style.width=(mobile?sp[2]*.7:sp[2])+"px";el.style.zIndex=sp[5]===2?5:1;
    if(sp[3]<.35)im.style.filter="blur(2px) drop-shadow(0 8px 8px rgba(20,12,6,.3))";else if(sp[3]>.85)im.style.filter="blur(1.6px) drop-shadow(0 20px 16px rgba(20,12,6,.4))";
    box.appendChild(el);
    return{el,sp,bx:0,by:0,x:0,y:0,vx:0,vy:0,r:Math.random()*360,vr:(Math.random()-.5)*(.4+sp[3]),ph:Math.random()*6.28,amp:6+sp[3]*14,rx:0}
  });
  let W=0,H=0,px=-999,py=-999,burst=0;
  function lay(){const r=st.getBoundingClientRect();W=r.width;H=r.height;B.forEach(b=>{b.bx=b.sp[0]/100*W-b.el.offsetWidth/2;b.by=b.sp[1]/100*H})}
  lay();addEventListener("resize",lay);
  st.addEventListener("pointermove",e=>{const r=st.getBoundingClientRect();px=e.clientX-r.left;py=e.clientY-r.top+r.height*.06});
  st.addEventListener("pointerleave",()=>{px=py=-999});
  $("#bagBtn").addEventListener("click",()=>{const cx=W/2,cy=H*.55;B.forEach(b=>{const dx=b.bx+b.el.offsetWidth/2-cx,dy=b.by-cy,d=Math.hypot(dx,dy)||1;const k=(14+b.sp[3]*14);b.vx+=dx/d*k;b.vy+=dy/d*k-6;b.vr+=(Math.random()-.5)*14})});
  let t=0,last=performance.now(),vis=true;
  new IntersectionObserver(es=>vis=es[0].isIntersecting).observe(st);
  function tick(now){requestAnimationFrame(tick);if(!vis)return;if(st.offsetWidth&&Math.abs(st.offsetWidth-W)>1)lay();const dt=Math.min(2,(now-last)/16.67);last=now;t+=dt*.016;const sy=scrollY;
    B.forEach(b=>{
      const cx=b.bx+b.x+b.el.offsetWidth/2,cy=b.by+b.y+b.el.offsetHeight/2,dx=cx-px,dy=cy-py,d=Math.hypot(dx,dy);
      if(d<190){const f=(190-d)/190;b.vx+=dx/(d||1)*f*2.4*dt;b.vy+=dy/(d||1)*f*2.4*dt;b.vr+=dx/(d||1)*f*.9}
      b.vx+=-b.x*.018*dt;b.vy+=-b.y*.018*dt;b.vx*=Math.pow(.93,dt);b.vy*=Math.pow(.93,dt);b.vr*=Math.pow(.97,dt);
      b.x+=b.vx*dt;b.y+=b.vy*dt;b.r+=(b.vr+(Math.sin(t*2+b.ph)*.12))*dt;
      const fy=Math.sin(t*1.3+b.ph)*b.amp,fx=Math.cos(t*.9+b.ph)*b.amp*.6,par=-sy*(.04+b.sp[3]*.16);
      b.el.style.transform=`translate3d(${(b.bx+b.x+fx).toFixed(1)}px,${(b.by+b.y+fy+par).toFixed(1)}px,0) rotate(${b.r.toFixed(1)}deg) rotateX(${(Math.sin(t+b.ph)*24).toFixed(1)}deg)`;
    })}
  if(!RM)requestAnimationFrame(tick);else B.forEach(b=>{b.el.style.transform=`translate(${b.bx}px,${b.by}px) rotate(${b.r}deg)`});
})();

/* ===== pepa: se abre y se mueve ===== */
(function(){
  const st=$("#stage3"),pe=$("#pepa"),cr=$("#crumbs");if(!st||!pe)return;
  st.dataset.hero=(CASA_MARIO_CONFIG.hero==="bolsa")?"bolsa":"pepa";
  pe.style.setProperty("--d",10);pe.style.setProperty("--sp",.03);
  function crumbs(){if(RM||!cr.animate)return;cr.innerHTML="";const W=pe.offsetWidth;
    for(let i=0;i<34;i++){const c=document.createElement("span");c.className="crumb";const sz=3+Math.random()*(i%5?5:9);c.style.width=sz+"px";c.style.height=sz*(.7+Math.random()*.5)+"px";c.style.left=(Math.random()-.5)*W*.5+"px";cr.appendChild(c);
      const a=Math.random()*Math.PI*2,d=W*(.25+Math.random()*.7),dx=Math.cos(a)*d,dy=Math.sin(a)*d*.8-W*.18;
      c.animate([{transform:"translate(0,0) rotate(0)",opacity:1},{transform:`translate(${dx}px,${dy}px) rotate(${Math.random()*540}deg)`,opacity:1,offset:.55},{transform:`translate(${dx*1.08}px,${dy+W*.55}px) rotate(${Math.random()*720}deg)`,opacity:0}],{duration:1500+Math.random()*900,easing:"cubic-bezier(.2,.7,.3,1)",fill:"forwards",delay:Math.random()*120})}}
  function setOpen(o){if(pe.dataset.open===String(o))return;pe.dataset.open=o;if(o)crumbs()}
  pe.addEventListener("click",()=>setOpen(pe.dataset.open!=="true"));
  pe.addEventListener("keydown",e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault();setOpen(pe.dataset.open!=="true")}});
  let auto=false;
  function tryAuto(){if(auto||st.dataset.hero!=="pepa")return;const r=st.getBoundingClientRect();if(r.width&&r.top<innerHeight*.9){auto=true;setTimeout(()=>setOpen(true),RM?0:1700)}}
  new IntersectionObserver(es=>{if(es[0].isIntersecting)tryAuto()},{threshold:.25}).observe(st);
  addEventListener("hashchange",()=>setTimeout(tryAuto,300));
  setTimeout(tryAuto,600);
})();

let saved=null;try{saved=localStorage.getItem("cm_lang")}catch(e){}
if(saved==="en")applyLang("en");else renderAll();
splitWords();
route();
