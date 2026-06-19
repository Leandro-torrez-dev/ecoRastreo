import L from 'leaflet';
import './style.css';
import { especiesNicaragua, type Avistamiento } from './datos';

// 1. Configurar límites geográficos para amarrar el mapa dentro de Nicaragua
const limitesNicaragua = L.latLngBounds(
  L.latLng(10.5000, -87.8000), // Sur-Oeste
  L.latLng(15.1000, -82.5000)  // Norte-Este
);

// Inicialización del mapa restringido a nivel nacional, pero ENFOCADO EN TISMA
const mapa = L.map('map', {
  maxBounds: limitesNicaragua,
  maxBoundsViscosity: 1.0, 
  minZoom: 7 
}).setView([12.083896, -86.006459], 14); // <-- Coordenadas del Municipio de Tisma y Zoom 14 para verlo de cerca

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(mapa);


// 2. Función constructora de la tarjeta HTML del Popup (Soporta Fauna, Flora y Reportes)
function crearContenidoPopup(especie: any): string {
  const seccionAlerta = especie.enPeligro 
    ? `<div class="alerta-peligro">
        ALERTA: ${especie.nombre.toUpperCase()} (EN PELIGRO). ¡Protejamos su hábitat!
       </div>`
    : '';

  // Evaluamos dinámicamente qué campos tiene el objeto para mostrarlos en orden
  let detalleDinamico = '';
  
  if ('alimentacion' in especie && especie.alimentacion) {
    detalleDinamico += `<p style="margin: 0 0 4px 0; font-size: 0.85rem; line-height: 1.3;"><strong>🍎 Alimentación:</strong> ${especie.alimentacion}</p>`;
  }
  
  if ('descripcion' in especie && especie.descripcion) {
    // Si es del formulario ciudadano dirá "Reporte", si es de los muchachos dirá "Descripción"
    const etiqueta = especie.nombreCientifico === "Registro Ciudadano" ? "📝 Reporte" : "🌿 Descripción";
    detalleDinamico += `<p style="margin: 0 0 4px 0; font-size: 0.85rem; line-height: 1.3;"><strong>${etiqueta}:</strong> ${especie.descripcion}</p>`;
  }

  return `
    <div style="max-width: 220px; font-family: sans-serif;">
      <img src="${especie.imagen}" alt="${especie.nombre}" style="width: 100%; border-radius: 6px; margin-bottom: 8px; object-fit: cover; max-height: 120px;" />
      <h3 style="margin: 0 0 4px 0; font-size: 1.1rem; color: #1e3f20;">${especie.nombre}</h3>
      <p style="margin: 0 0 6px 0; font-style: italic; color: #555; font-size: 0.85rem;">(${especie.nombreCientifico})</p>
      <p style="margin: 0 0 4px 0; font-size: 0.8rem; color: #666;">📍 ${especie.coordenadas[0].toFixed(4)}, ${especie.coordenadas[1].toFixed(4)}</p>
      <p style="margin: 0 0 8px 0; font-size: 0.8rem; color: #666;">📅 ${especie.fecha}</p>
      ${detalleDinamico}
      ${seccionAlerta}
    </div>
  `;
}

// 3. Renderizar todos los marcadores iniciales de la lista local
function cargarMarcadoresIniciales() {
  especiesNicaragua.forEach(especie => {
    L.marker(especie.coordenadas).addTo(mapa).bindPopup(crearContenidoPopup(especie));
  });
}
cargarMarcadoresIniciales();

// 4. Captura de Elementos del DOM e Interacciones
const btnNuevo = document.getElementById('btn-nuevo') as HTMLButtonElement;
const modalReporte = document.getElementById('modal-reporte') as HTMLDivElement;
const btnCerrarModal = document.getElementById('btn-cerrar-modal') as HTMLButtonElement;
const formReporte = document.getElementById('form-reporte') as HTMLFormElement;

const inputLat = document.getElementById('rep-lat') as HTMLInputElement;
const inputLng = document.getElementById('rep-lng') as HTMLInputElement;
const inputFoto = document.getElementById('rep-foto') as HTMLInputElement;
const fileNamePreview = document.getElementById('file-name-preview') as HTMLSpanElement;
const imgPreview = document.getElementById('img-preview') as HTMLImageElement;

const btnInfo = document.getElementById('btn-info') as HTMLButtonElement;
const modalInfo = document.getElementById('modal-info') as HTMLDivElement;
const btnCerrarInfo = document.getElementById('btn-cerrar-info') as HTMLButtonElement;

// Interacción del modal de información
btnInfo.addEventListener('click', () => {
  modalInfo.classList.remove('hidden');
});

btnCerrarInfo.addEventListener('click', () => {
  modalInfo.classList.add('hidden');
});

// Interactividad de la carga de imagen (Muestra el nombre y la miniatura)
inputFoto.addEventListener('change', () => {
  if (inputFoto.files && inputFoto.files[0]) {
    fileNamePreview.textContent = `Archivo: ${inputFoto.files[0].name}`;
    const urlTemporal = URL.createObjectURL(inputFoto.files[0]);
    imgPreview.src = urlTemporal;
    imgPreview.style.display = 'block';
  } else {
    fileNamePreview.textContent = "Ningún archivo seleccionado";
    imgPreview.style.display = 'none';
  }
});

// Abrir modal manualmente con el botón superior derecho
btnNuevo.addEventListener('click', () => {
  modalReporte.classList.remove('hidden');
});

// CAPTURA INTERACTIVA: El clic en el mapa extrae las coordenadas y despliega el formulario
mapa.on('click', (e) => {
  inputLat.value = e.latlng.lat.toFixed(6);
  inputLng.value = e.latlng.lng.toFixed(6);
  modalReporte.classList.remove('hidden');
});

// Cancelar/Cerrar el formulario limpiando el rastro en memoria
btnCerrarModal.addEventListener('click', () => {
  modalReporte.classList.add('hidden');
  formReporte.reset();
  imgPreview.style.display = 'none';
  fileNamePreview.textContent = "Ningún archivo seleccionado";
});

// Procesar el envío del formulario de manera asíncrona controlada
formReporte.addEventListener('submit', (e) => {
  e.preventDefault(); 

  const nombre = (document.getElementById('rep-nombre') as HTMLInputElement).value;
  const categoria = (document.getElementById('rep-categoria') as HTMLSelectElement).value as any;
  const enPeligro = (document.getElementById('rep-peligro') as HTMLInputElement).checked;
  const descripcion = (document.getElementById('rep-descripcion') as HTMLTextAreaElement).value; // Captura la descripción del reporte ciudadano
  const lat = parseFloat(inputLat.value);
  const lng = parseFloat(inputLng.value);

  let urlImagen = "https://images.unsplash.com/photo-1500485035595-cbe6f645feb1?w=500"; 
  if (inputFoto.files && inputFoto.files[0]) {
    urlImagen = URL.createObjectURL(inputFoto.files[0]);
  }

  const nuevoAvistamiento: any = {
    id: Date.now(),
    nombre,
    nombreCientifico: "Registro Ciudadano",
    categoria,
    enPeligro,
    descripcion: descripcion, // Se guarda en el campo descripción
    imagen: urlImagen,
    coordenadas: [lat, lng],
    fecha: new Date().toLocaleString('es-NI', { dateStyle: 'medium', timeStyle: 'short' })
  };

  const nuevoMarcador = L.marker(nuevoAvistamiento.coordenadas).addTo(mapa);
  nuevoMarcador.bindPopup(crearContenidoPopup(nuevoAvistamiento)).openPopup();
  
  mapa.setView(nuevoAvistamiento.coordenadas, 12);

  modalReporte.classList.add('hidden');
  formReporte.reset();
  imgPreview.style.display = 'none';
  fileNamePreview.textContent = "Ningún archivo seleccionado";
});