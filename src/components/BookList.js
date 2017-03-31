import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchBooks} from '../actions/index';
import {totalBooks} from '../actions/index';

class BookList extends Component {

    constructor(props) {
        super(props);
        this.total = 0;
    }

    //Método del ciclo de vida del componente al cargarlo...
    componentDidMount() {
        this.props.fetchBooks();
    }

    //Método del ciclo de vida del componente después de renderizar
    componentDidUpdate() {
        this.props.totalBooks(this.total);
    }

    render(){
        this.total = 0;

        // Lista de libros hacer map y devolver nuevos datos
        let books = this.props.books.map((book) => {
            if (book.title.indexOf(this.props.filter_book) != -1) {
                this.total++;
                return <div key={book.id}>{book.title} - {book.author} - {book.isbn}</div>
            }
        });

        return (
            <div>
                <div>Book List</div>
                <div style={{height:'400px', overflow:'auto', border:'1px solid black'}}>
                {books}
                </div>
            </div>
        )
    }
}

//Mapear estado de aplicación a propiedades del objeto
function mapStateToProps(state) {
    //Devuelvo estado de la aplicación, que contiene la lista de libros.
    //Si hay cambios en la lista el estado se entera del cambio
    return {
        books: state.books,
        filter_book: state.filter_book
    }
}

//Mapear el despachar acciones de mi aplicación a propiedades del objeto
//Vinculo a una propiedad de mi componente una acción definida
function mapDispatchToProps(dispatch){
    // fetchBooks se saca de la definición de acciones
    // Se define la propiedad fetchBooks a la acción fetchBooks
    // Si se llama igual se puede colapsar {fetchBooks: fetchBooks}
    // queda como {fetchBooks}
    return bindActionCreators({fetchBooks, totalBooks}, dispatch);
}

// Envolver componente en un container y devolver el container.
export default connect(mapStateToProps, mapDispatchToProps)(BookList);