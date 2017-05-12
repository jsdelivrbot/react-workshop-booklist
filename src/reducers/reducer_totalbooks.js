export default function (state = 0, action){
    switch (action.type) {
        case 'TOTAL_BOOKS':
            return action.payload.data;
        default:
            return state;
    }
}