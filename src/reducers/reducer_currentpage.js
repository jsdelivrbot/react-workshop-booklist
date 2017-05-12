export default function (state = 1, action){
    switch (action.type) {
        case 'CURRENT_PAGE':
            return action.payload.data;
        default:
            return state;
    }
}