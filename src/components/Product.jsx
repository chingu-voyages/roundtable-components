import productImage from '../../assets/product_placeholder.png'

const Product = () => {
  return (
    <div className='product'>
      <div className='product-image'>
        <img src={ productImage } alt="Product image" />
      </div>
      <div className='product-text'>
        Product name
      </div>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
        commodo consequat.
      </div>
      <div className='button'>
        Add to Cart
      </div>
    </div>
  )
}

export default Product