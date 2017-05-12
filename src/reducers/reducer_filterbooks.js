//Mantener el estado de la lista
export default function (state = '', action){
    switch (action.type) {
        case 'FILTER_BOOKS':
            return action.payload.data;
        default:  // Siempre un default en un switch pq el Reduce decide que hacer con cada acción
            return state;
    }
}