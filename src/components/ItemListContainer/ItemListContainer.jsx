import React from 'react'

const ItemListContainer = ({welcome, gratitude}) => {

  return (

    <>
    <h2 className='text-center tracking-wide my-4'>{welcome}</h2>
    <hr />
    <h2 className='text-center tracking-wide my-4'>{gratitude}</h2>
    
    </>
  )
}

export default ItemListContainer