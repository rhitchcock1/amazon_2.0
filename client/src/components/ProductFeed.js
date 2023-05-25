import React from 'react'
import Product from './Product'

function ProductFeed({products}) {
  return (
    <div className='grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52 mx-auto'>
   
    
      {products.slice(0,4).map(({id, title, price, description, category, image}) => (
      <Product 
      key={id}
      title={title}
      description={description}
      category={category}
      image={image}
      price={price}

      />

      ))}
      <img 
      className='md:col-span-full m-auto'
      src="https://m.media-amazon.com/images/I/411qZ94MIiL._SX1500_.jpg"
      alt = "banner image"
      height = {"auto"}
      width={"auto"}
      />

     {products.slice(4,12).map(({id, title, price, description, category, image}) => (
      <Product 
      key={id}
      title={title}
      description={description}
      category={category}
      image={image}
      price={price}

      />
      ))}   
    </div>
  )
}

export default ProductFeed
