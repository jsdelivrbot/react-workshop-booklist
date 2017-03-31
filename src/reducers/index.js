import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import FilterBookReducer from './reducer_filterbooks';
import TotalBooksReducer from './reducer_totalbooks';

// Un estado por un sólo reducer.
const rootReducer = combineReducers({
    // El reduce encargado del estado de mi componente books
    books: BooksReducer,
    // El reduce encargado del estado de los libros activos
    filter_book: FilterBookReducer,
    total_books: TotalBooksReducer
});

export default rootReducer;
