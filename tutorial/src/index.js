import React from 'react'
import ReactDom from 'react-dom'
import './index.css'
import { books } from './books'
import Book from './Book'
function BookList () {
  return (
    <section className='booklist'>
      {books.map((book, index) => {
        const { img, title, author } = book
        return <Book key={index} img={img} title={title} author={author} />
      })}
    </section>
  )
}

ReactDom.render(<BookList />, document.getElementById('root'))
