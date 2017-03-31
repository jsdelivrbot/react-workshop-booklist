//Mantener el estado de la lista
export default function (state = [], action){
    // Siempre debe devolver el estado de la aplicación
    // El estado de la acción no cambia, no puede mutarse
    switch (action.type) {
        case 'FETCH_BOOKS': // Estado recuperar libros
            //Contiene la lista de libros que acompaña al tipo de esta acción
            //Devuelve el resultado de la petición hecha a la API con axios.get
            return action.payload.data;
        default:  // Siempre un default en un switch pq el Reduce decide que hacer con cada acción
            return state;
    }
}