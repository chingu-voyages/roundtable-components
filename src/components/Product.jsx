import PropTypes from 'prop-types'
import productImage from '../../assets/product_placeholder.png'

const Product = ({ productInfo }) => {
  return (
    <div className='product'>
      <div className='product-image'>
        <img src={ productImage } alt="Product image" />
      </div>
      <div className='product-text'>
        <b><em>{ productInfo.name }</em></b>
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

// Validate the incoming props object
Product.propTypes = {
  productInfo: PropTypes.shape({
    name: PropTypes.string
  })
}

export default Product