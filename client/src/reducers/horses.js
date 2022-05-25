export default (horses = [], action) => {

    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
            return [... horses, action.payload]
        case 'DELETE':
            return horses.filter((horse)=>horse._id !== action.payload);   
        default:
            return horses
    }


}