import React from 'react'

const Book = props => {
  //attribute, eventHandler
  //onClick, onMouseOver
  const clickHandler = () => {
    alert('helloWorld')
  }
  const complexExample = author => {
    alert(author)
  }

  return (
    <article
      className='book'
      onMouseOver={() => {
        console.log(props.title)
      }}
    >
      <img src={props.img} alt='Book' />
      <h1>{props.title}</h1>
      <h4
        style={{ color: '#617d98', fontSize: '0.75rem', marginTop: '0.25rem' }}
      >
        {props.author}
      </h4>
      <button type='button' onClick={clickHandler}>
        Click
      </button>
      <button type='button' onClick={() => complexExample(props.author)}>
        Click 2
      </button>
    </article>
  )
}

export default Book
