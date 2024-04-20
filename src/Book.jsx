import './Book.css'

export default function({ bookName, authorName, deleteBook }) {
    
    return(
        <article className='book'>
            <header>
                <span className='book-info'><strong>{bookName}</strong> - {authorName}</span>
                <button className='book-delete' onClick={deleteBook}>X</button>
            </header>
        </article>
    )
}