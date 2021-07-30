import { useState } from "react"

const useBooks = () => {
    const [books, setBooks] = useState([]);
    const [meta, setMeta] = useState(null);

    const fetchBooks = async (startIndex, queryString) => {
        const url = `https://www.googleapis.com/books/v1/volumes?q=${queryString}&startIndex=${startIndex}&maxResults=15`;
        await fetch(url).then(async res => {
            const response = await res.json();
            const {items, totalItems} = response;
            if(totalItems) {
                setMeta({totalItems, queryString, currentIndex: startIndex});
            }
            if(Array.isArray(items)){
                setBooks(items);
            }
        }).catch(err => {
            console.log(err);
        })
    }
    
    const fetchMore = async (startIndex, totalCount, queryString) => {
        if(startIndex < totalCount) {
           await fetchBooks(startIndex, queryString);
        }
    }

    return { books, ...meta , fetchBooks, fetchMore };
}

export default useBooks;