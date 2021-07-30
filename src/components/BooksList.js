import React from 'react';
import Book from './Book';

const BooksList = ({books, currentIndex, totalItems, queryString, fetchMore}) => {
    return(
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}} >
            <h3>{`Total results: ${totalItems}`}</h3>
            {
                books?.map((book, index) => (
                    <Book
                        key={book.id}
                        title={book?.volumeInfo?.title}
                        authors={book?.volumeInfo?.authors}
                        imageLinks={book?.volumeInfo?.imageLinks}
                        saleability={book?.saleInfo?.saleability === "FOR_SALE"}
                        price={`${book?.saleInfo?.listPrice?.amount} ${book?.saleInfo?.listPrice?.currencyCode}`}
                        linkToBuy={book?.saleInfo?.buyLink}
                        number={currentIndex+index+1}
                    />
                ))
            }
            {
                books?.length > 0 &&
                <div style={{display: 'flex', justifyItems: 'flex-end'}} >
                    {currentIndex >= 15 &&
                        <button style={{marginLeft: 'auto', marginRight: '12px'}} onClick={()=>fetchMore(currentIndex-15, totalItems, queryString)} >Prev</button>
                    }
                   { totalItems > currentIndex &&
                    <button style={{marginLeft: '12px', marginRight: 'auto'}} onClick={()=>fetchMore(currentIndex+15, totalItems, queryString)} >Next</button>
                    }
                </div>
            }
        </div>
    )
};
export default BooksList;