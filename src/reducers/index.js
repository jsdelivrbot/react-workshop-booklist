import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import FilterBookReducer from './reducer_filterbooks';
import TotalBooksReducer from './reducer_totalbooks';
import CurrentPageReducer from './reducer_currentpage';
import ElementPerPageReducer from './reducer_elementperpage';

// Un estado por un sólo reducer.
const rootReducer = combineReducers({
    // El reduce encargado del estado de mi componente books
    books: BooksReducer,
    // El reduce encargado del estado de los libros activos
    filter_book: FilterBookReducer,
    total_books: TotalBooksReducer,
    current_page: CurrentPageReducer,
    elements_x_page: ElementPerPageReducer
});

export default rootReducer;
