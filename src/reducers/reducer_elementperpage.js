export default function (state = 10, action){
    switch (action.type) {
        case 'ELEMENTS_X_PAGE':
            return action.payload.data;
        default:
            return state;
    }
}