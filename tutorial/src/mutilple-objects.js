import React from 'react'
import ReactDom from 'react-dom'
import './index.css'
const books = [
  {
    img:
      'https://images-na.ssl-images-amazon.com/images/I/51pHVVBfnVL._AC._SR240,240.jpg',
    title: 'Bluey: The Beach',
    author: 'A Lift-the-Flap'
  },
  {
    img:
      'https://images-na.ssl-images-amazon.com/images/I/51pHVVBfnVL._AC._SR240,240.jpg',
    title: 'Bluey2: The Beach',
    author: 'A Lift-the-Flap2'
  }
]

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
