import { Link } from 'react-router-dom'
import PRODUCTS from '../data.js';
const Products = () => {
    return (
        <main>
            <div className="pg-header">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-7">
                            <h1>Products</h1>
                        </div>
                        <div className="col-lg-5">
                            <nav>
                                <ol className="breadcrumb justify-content-end">
                                    <li className="breadcrumb-item">
                                        <Link to="/">Home</Link>
                                    </li>
                                    <li className="breadcrumb-item active">Products</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container content">
                <div className="row products-row">
                    {PRODUCTS.map((products) => {
                        return (
                            <div className="col-lg-4" key={products.id}>
                                <div className="card">
                                    <div className="img-wrap">
                                        <img src={products.image} alt="" />
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title">{products.name}</h5>
                                        <p className="card-text">{products.details}</p>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <span>Price: <strong className="price">{products.price}</strong></span>
                                            <Link to={`/products/${products.id}`} className="btn btn-primary btn-sm">DETAILS &#8594;</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </main>
    )
}
export default Products;
