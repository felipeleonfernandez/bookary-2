import Book from './Book'

export default function BookContainer({ books, setBooks }) {

    const deleteBook = (index) => {
        const newBooks = [...books];
        newBooks.splice(index, 1);
        setBooks(newBooks);
    };

    return (
        <section>
            {(books.length === 0) ? (
                <h3>You have not saved books yet, try it!</h3>
            ) : (
                <h3>Saved books:</h3>
            )}
            
            {books.map((book, index) => (
                <Book key={index} books={books} setBooks={setBooks} bookName={book.name} authorName={book.author} deleteBook={() => deleteBook(index)}/>
            ))}
        </section>
    )
}