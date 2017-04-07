export default function (state = [], action){
    switch (action.type) {
        case 'ELEMENTS_X_PAGE':
            return action.payload.data;
        default:
            return state;
    }
}