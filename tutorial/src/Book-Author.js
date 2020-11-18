import React from 'react'
import ReactDom from 'react-dom'
import './index.css'
function BookList () {
  return (
    <section className='booklist'>
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  )
}

const Book = () => {
  return (
    <article className='book'>
      <Image />
      <Title />
      <Author />
    </article>
  )
}

const Title = () => (
  <h1>
    Bluey: The Beach: Winner of the 2020 ABIA Book of the Year: A Lift-the-Flap
    Book
  </h1>
)

const Image = () => {
  return (
    <img
      src='https://images-na.ssl-images-amazon.com/images/I/51pHVVBfnVL._AC._SR240,240.jpg'
      alt='Book'
    />
  )
}

const Author = () => (
  <h4 style={{ color: '#617d98', fontSize: '0.75rem', marginTop: '0.25rem' }}>
    A Lift-the-Flap
  </h4>
)

ReactDom.render(<BookList />, document.getElementById('root'))
