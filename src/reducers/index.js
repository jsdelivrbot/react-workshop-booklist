import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import FilterBookReducer from './reducer_filterbooks';

// Un estado por un sólo reducer.
const rootReducer = combineReducers({
    // El reduce encargado del estado de mi componente books
    books: BooksReducer,
    // El reduce encargado del estado de los libros activos
    filter_book: FilterBookReducer
});

export default rootReducer;
