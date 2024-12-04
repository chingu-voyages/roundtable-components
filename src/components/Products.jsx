import Product from '../components/Product.jsx'

const Products = () => {
  return (
    <div>
      <div className="banner">
        <div className='border'>
          <div>
            Products
          </div>
        </div>
      </div>

      <div className='product-list'>
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  )
}

export default Products