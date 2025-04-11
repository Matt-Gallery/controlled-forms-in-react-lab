import { useState } from 'react';

// Initialize Bookshelf component
const Bookshelf = () => {
    // State for the list of books
    const [books, setBooks] = useState([
        { title: 'Fourth Wing', author: 'Rebecca Yarros' },
        { title: 'The Lion, the Witch and the Wardrobe', author: 'C.S. Lewis' },
    ]);

    // State for the new book form
    const [newBook, setNewBook] = useState({ title: '', author: '' }); // Renamed state variable

    // Event handler for input changes
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setNewBook(prevNewBook => ({
            ...prevNewBook,
            [name]: value
        }));
    };

    // Event handler for form submission
    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent default form submission
        setBooks(prevBooks => [...prevBooks, newBook]); // Add the new book to the list
        setNewBook({ title: '', author: '' }); // Reset the form fields
    };

    return (
        <div className="bookshelfDiv">
            <div className="formDiv">
                <h3>Add a Book</h3>
                {/* Form implementation */}
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="title">Title:</label>
                        <input
                            id="title"
                            name="title"
                            value={newBook.title}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="author">Author:</label>
                        <input
                            id="author"
                            name="author"
                            value={newBook.author}
                            onChange={handleInputChange}
                        />
                    </div>
                    <button type="submit">Add Book</button>
                </form>
            </div>
            <div className="bookCardsDiv">
                {/* Map through books to display them */}
                {books.map((book, index) => (
                    <div key={index} className="bookCard">
                        <h4>{book.title}</h4>
                        <p>{book.author}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

// Export the component
export default Bookshelf;
