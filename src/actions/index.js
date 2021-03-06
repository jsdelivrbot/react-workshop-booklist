//¿Qué es una acción?
//
// Un objeto JSON que tiene propiedad type (string) con un dato
// Nuevo libro --> Acción new_book con el dato concreto en payload.
// Datos necesarios para realizar la acción solicitada
import axios from 'axios';
const API_URI = 'http://127.0.0.1:3000/api/0.1/';

export const FETCH_BOOKS = 'FETCH_BOOKS';
export const FILTER_BOOKS = 'FILTER_BOOKS';
export const TOTAL_BOOKS = 'TOTAL_BOOKS';
export const CURRENT_PAGE = 'CURRENT_PAGE';
export const ELEMENTS_X_PAGE = 'ELEMENTS_X_PAGE';

// Encapsular en un método para generar la acción desde cualquier punto del programa
// y es reutilizable
export function fetchBooks() {
    // Solicitud de libros a través de una API
    // axios.get() devuelve un promise.
    let books = axios.get(`${API_URI}books`);
    return {
        type: FETCH_BOOKS,
        payload: books
    }
}

export function filterBooks(filter) {
    return {
        type: FILTER_BOOKS,
        payload: {
            data: filter
        }
    }
}

export function totalBooks(books) {
    return {
        type: TOTAL_BOOKS,
        payload: {
            data: books
        }
    }
}

export function currentPage(numPage) {
    return {
        type: CURRENT_PAGE,
        payload: {
            data: numPage
        }
    }
}

export function elementsXPage(numElements) {
    return {
        type: ELEMENTS_X_PAGE,
        payload: {
            data: numElements
        }
    }
}