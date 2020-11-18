import React from 'react'
import ReactDom from 'react-dom'
import './index.css'
const firstBook = {
  img:
    'https://images-na.ssl-images-amazon.com/images/I/51pHVVBfnVL._AC._SR240,240.jpg',
  title: 'Bluey: The Beach',
  author: 'A Lift-the-Flap'
}
function BookList () {
  return (
    <section className='booklist'>
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      />
    </section>
  )
}

const Book = props => {
  return (
    <article className='book'>
      <img src={props.img} alt='Book' />
      <h1>{props.title}</h1>
      <h4
        style={{ color: '#617d98', fontSize: '0.75rem', marginTop: '0.25rem' }}
      >
        {props.author}
      </h4>
    </article>
  )
}

ReactDom.render(<BookList />, document.getElementById('root'))
