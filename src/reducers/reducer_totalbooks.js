export default function (state = [], action){
    switch (action.type) {
        case 'TOTAL_BOOKS':
            return action.payload.data;
        default:
            return state;
    }
}