# Proyecto mini-notas -- JavaScript

## Introduccion

Este es un pequeño proyecto para practicar sobre el local Storage en JavaScript, el *HTML* y *CSS* son una plantilla web, el archivo `app.js` es el importante en este caso.

**Nota:** Se que utilizar el Local Storage no es la manera mas eficiente ni segura para almacenar datos a largo plazo, la "aplicacion de notas" es solo una excusa para poner en practica esta funcion de JavaScript.

## Variables y funcionamiento
1. **const formulario**: Selecciona una etiqueta `<form>` con el id de "formulario" en la linea 21.
2. **const listaTweets**: Selecciona una etiqueta `<div>` con el id de "lista-tweets" en la linea 29.
3. **let tweets**: Es un arreglo vacio donde se almacenaran las notas.
4. **const nota**: Selecciona una etiqueta `<textarea>` con el id de "tweet" en la linea 23.
5. **const alertMensaje**: Contiene el mensaje que se utiliza en la funcion `alertError()`.
6. **const contenido**: Selecciona una etiqueta `<div>` con el id de "contenido" en la linea 14. Es donde se mostrara el mensaje contenido en `const alertMensaje`.
7. **const notaObj**: transforma el `const nota` en un objeto, para agregar metadatos. Como un numero de identificacion.
8. **const li**: Transforma el arreglo de notas de una lista para introducirla al html, funciona dentro de `crearHTML()`.
9. **const btnEliminar**: Crea un boton para eliminar los elementos de la lista `tweets`.

## Funciones y ejecucion 
1. **eventListeners()**: Registra, inicia y gestiona todos los EventListeners.
2. **alertError()**: Crea un mensaje de error en caso de que la variable `const nota` tenga como valor un String vacio y se envie a `let tweets`.
3. **crearHTML()**: Muestra un listado de todas nuestras notas en pantalla.
4. **limpiarHTML()**: Limpia el html que muestra los elementos de `tweets` en la pantalla.
5. **sincronizarStorage()**: Guarda los elementos de `tweets` en local Storage.
6. **borrarNota()**: Borra una nota segun el id correspondiente utilizando un filtro.
