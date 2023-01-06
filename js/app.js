"use strict";
// Variables
const formulario = document.querySelector("#formulario");
const listaTweets = document.querySelector("#lista-tweets");
let tweets = [];

// Eventos
eventListeners();
function eventListeners() {
    formulario.addEventListener("submit", agregarNota);
    document.addEventListener("DOMContentLoaded", () => {
        if (localStorage.getItem("Notas") == null) return;
        tweets = JSON.parse(localStorage.getItem("Notas"));
        crearHTML();
    });
};

// Funciones
function agregarNota(event) {
    event.preventDefault();
    const nota = document.querySelector("#tweet").value;
    if(nota === "") { // Validacion
        alertError("Debe agregar una Nota");
        return;
    };

    // Añadir al arreglo las notas
    const notaObj = {
        nota,
        id : Date.now()
    };
    tweets = [...tweets, notaObj];
    crearHTML();
    formulario.reset(); // Limpia el Textarea
};

function alertError(mensaje) {
    const alertMensaje = document.createElement("p");
    alertMensaje.textContent = mensaje;
    alertMensaje.classList.add("error");
    const contenido = document.querySelector("#contenido");
    contenido.appendChild(alertMensaje);
    setTimeout(() =>{
        alertMensaje.remove();
    }, 3000);
};

function crearHTML() {
    limpiarHTML()
    if(tweets.length > 0) {
        tweets.forEach((nota) => {
            const btnEliminar = document.createElement("a");
            btnEliminar.classList.add("borrar-tweet");
            btnEliminar.textContent = "X";
            btnEliminar.onclick = () => {
                borrarNota(nota.id);
            };
            const li = document.createElement("li");
            li.textContent = nota.nota;
            li.appendChild(btnEliminar);
            listaTweets.appendChild(li);
        });
    };
    sincronizarStorage();
};

function limpiarHTML() {
    while(listaTweets.firstChild) {
        listaTweets.removeChild(listaTweets.firstChild);
    };
};

function sincronizarStorage() {
    localStorage.setItem("Notas", JSON.stringify(tweets));
};

function borrarNota(id) {
    tweets = tweets.filter(nota => nota.id !== id);
    crearHTML();
};