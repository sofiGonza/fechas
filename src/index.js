
const fs = require('fs'); // AGREGADO: módulo para guardar archivos

// ========================================
// fechas-bitacora-3406204
// Paquete CommonJS de utilidades de fecha
// ========================================
//
// Este paquete nace del archivo src/fechas.js de bitacora-cli
// (Sesión 3: crear, enlazar y publicar un paquete).
// Se exporta con module.exports, igual que en la clase.

/**
 * Devuelve la marca de tiempo actual en milisegundos desde
 * el 1 de enero de 1970 (epoch de JavaScript).
 *
 * @returns {number}
 */
function getTimeStamp() {
  return Date.now();
}

/**
 * Convierte el valor recibido en un objeto Date válido.
 * Si el timestamp no es un número ni una fecha válida,
 * se usa la fecha y hora actuales para no romper el programa.
 *
 * @param {number|Date} timestamp
 * @returns {Date}
 */
function aFecha(timestamp) {
  if (timestamp instanceof Date && !Number.isNaN(timestamp.getTime())) {
    return timestamp;
  }

  if (typeof timestamp === 'number' && !Number.isNaN(timestamp)) {
    return new Date(timestamp);
  }

  return new Date();
}

/**
 * Fecha larga, como la vimos en clase, pero formateando
 * el timestamp que se recibe (no siempre "ahora").
 *
 * @param {string} locale  Idioma/región, por defecto 'es-ES'.
 * @param {number|Date} timestamp  Marca de tiempo, por defecto Date.now().
 * @returns {string}
 */
function getLongTime(locale = 'es-ES', timestamp = Date.now()) {
  const opciones = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    timeZoneName: 'short'
  };

  return aFecha(timestamp).toLocaleString(locale, opciones);
}

/**
 * Fecha corta, por ejemplo 22/10/2026.
 *
 * @param {string} locale  Idioma/región, por defecto 'es-ES'.
 * @param {number|Date} timestamp  Marca de tiempo, por defecto Date.now().
 * @returns {string}
 */
function getShortDate(locale = 'es-ES', timestamp = Date.now()) {
  const opciones = {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  };

  return aFecha(timestamp).toLocaleDateString(locale, opciones);
}

// AGREGADO: guardar las fechas en un archivo
function guardarFechas(fechaLarga, fechaCorta) {
  const contenido =
    `Fecha larga: ${fechaLarga}\n` +
    `Fecha corta: ${fechaCorta}\n\n`;

  fs.appendFileSync('fechas.txt', contenido, 'utf8');
}

// AGREGADO: obtener y guardar las fechas actuales
function mostrarYGuardarFechas() {
  const timestamp = getTimeStamp();

  const fechaLarga = getLongTime('es-ES', timestamp);
  const fechaCorta = getShortDate('es-ES', timestamp);

  console.log('Fecha larga:', fechaLarga);
  console.log('Fecha corta:', fechaCorta);

  guardarFechas(fechaLarga, fechaCorta);
}

module.exports = {
  getTimeStamp,
  getLongTime,
  getShortDate,
  guardarFechas,
  mostrarYGuardarFechas
};
