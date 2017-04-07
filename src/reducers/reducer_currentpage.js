export default function (state = [], action){
    switch (action.type) {
        case 'CURRENT_PAGE':
            return action.payload.data;
        default:
            return state;
    }
}