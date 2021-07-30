import React from "react";
const Book = ({ title, authors, imageLinks, saleability, price, linkToBuy, number }) => {
    return (
        <div style={{display: 'flex', flexDirection: 'column', border: '1px solid grey', margin: 12, padding: 8}} >
            {imageLinks && <img src={imageLinks?.thumbnail} alt={title} style={{height: 100, width: 100, objectFit: 'contain'}} ></img>}
            <h3>{`${number}. ${title}`}</h3>
            <div style={{display: 'flex'}}>
                <p>{`Authors: `} </p>
                <div style={{display: 'flex', flexDirection: 'column'}}>
                    {
                        authors?.map((author, index) => (
                            <p key={author+index}>{`${index+1}. ${author}`}</p>
                        ))
                    }
                </div>
            </div>
            {
                saleability ?
                <div style={{display: 'flex', flexDirection: 'column'}}>
                    <p>{`Price: ${price}`}</p>
                    {linkToBuy && <a href={linkToBuy} target="_blank" rel="noreferrer">Buy</a>}
                </div> :
                <p>Not for sale</p>
            }
        </div>
    )
};

export default Book;