# fechas-bitacora-sofiagonzalezgallego

Utilidades de fecha para la bitácora de aprendizaje por consola del **Taller 1 — Ficha 3406211**.
Expone tres funciones: la marca de tiempo actual, una fecha larga en español y una fecha corta
(`22/10/2026`). Es un paquete **CommonJS** y formatea el *timestamp* que recibe, no solo la fecha actual.

## Instalación

```bash
npm install fechas-bitacora-sofiagonzalezgallego
```

Mientras el paquete no esté publicado, se puede usar en local con `npm link`:

```bash
# dentro de esta carpeta
npm link

# dentro del proyecto que lo consume
npm link fechas-bitacora-sofiagonzalezgallego
```

## Uso

```js
const { getTimeStamp, getLongTime, getShortDate } = require('fechas-bitacora-sofiagonzalezgallego');

const marca = getTimeStamp();
// 1789859087345

console.log(getLongTime('es-ES', marca));
// jueves, 22 de octubre de 2026, 10:15:30 GMT-5

console.log(getShortDate('es-ES', marca));
// 22/10/2026

// Sin argumentos usa la fecha y hora actuales
console.log(getLongTime());
console.log(getShortDate());
```

## API

| Función | Devuelve |
| --- | --- |
| `getTimeStamp()` | La marca de tiempo actual en milisegundos (`number`). |
| `getLongTime(locale = 'es-ES', timestamp = Date.now())` | Fecha larga con día de la semana, hora, minutos, segundos y zona horaria. |
| `getShortDate(locale = 'es-ES', timestamp = Date.now())` | Fecha corta, por ejemplo `22/10/2026`. |

Si el `timestamp` recibido no es un número ni una fecha válida, las funciones usan la fecha actual
en lugar de lanzar un error.

## Prueba local

```bash
npm run demo
```

## Antes de publicar

1. Cambia `author` en `package.json` por tu nombre y correo.
2. Verifica que el nombre siga disponible en npm; si no, usa uno único
   (`fechas-bitacora-<tu-usuario-npm>`).
3. Revisa el contenido que se subiría:

```bash
npm publish --dry-run
```

4. Publica (si el nombre lleva alcance `@usuario/`, agrega `--access public`):

```bash
npm login
npm publish
```

## Licencia

MIT
