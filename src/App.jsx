import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const products = [
    { id: 1, img: 'https://www.kfcpakistan.com/images/43a9fb50-ffaa-11ed-8180-812e571998fe-krunch_variant_0-2023-05-31115706.png', title: 'Krunch Burger', desc: 'Krunch fillet, spicy mayo, lettuce, sandwiched between a sesame seed bun', price: 270 },
    { id: 2, img: 'https://www.kfcpakistan.com/images/33685b40-0461-11ee-911c-497570899609-Mighty_variant_0-2023-06-06115641.png', title: 'Mighty Zinger', desc: 'Our signature Zinger but Bigger! Double Zinger fillet with a combination of spicy and plain mayo, lettuce and cheese- sandwiched between a sesame seed bun', price: 700 },
    { id: 3, img: 'https://www.kfcpakistan.com/images/43a9fb50-ffaa-11ed-8180-812e571998fe-HotWings_variant_0-2023-05-31115706.png', title: 'Hot Wings Bucket', desc: '10 Pcs of our Signature Hot & Crispy Wings', price: 610 },
    { id: 4, img: 'https://www.kfcpakistan.com/images/43a9fb50-ffaa-11ed-8180-812e571998fe-crunch-with-fries-and-drink-2023-05-31115706.png', desc: '1 Krunch burger + 1 Regular fries + 1 Regular drink', price: 520 },
    { id: 5, img: 'https://www.kfcpakistan.com/images/43a95f10-ffaa-11ed-b673-4121381f04c6-CrispyDuoBox-2023-05-31115706.png', title: 'Crispy Duo Box', desc: 'Turn up the fun with 5 pcs Hot & Crispy Chicken + 1 Large fries + 2 Regular drinks', price: 1250 }
  ];

  const addToCart = (product) => {
    const updatedCartItems = [...cartItems, product];
    const updatedTotalPrice = updatedCartItems.reduce((acc, item) => acc + item.price, 0);
    setCartItems(updatedCartItems);
    setTotalPrice(updatedTotalPrice);
  };
  const resetCart = () => {
    setCartItems([]);
    setTotalPrice(0);
  };





  const initialMarks = [90, 81, 40, 65, 34, 72, 85, 43, 49, 73];
  const [marks, setMarks] = useState(initialMarks);

  const handleIncrement = (index) => {
    const updatedMarks = [...marks];
    updatedMarks[index]++;
    setMarks(updatedMarks);
  };

  const handleDecrement = (index) => {
    const updatedMarks = [...marks];
    if (updatedMarks[index] > 0) {
      updatedMarks[index]--;
      setMarks(updatedMarks);
    }
  };

  const passedCount = marks.filter((mark) => mark >= 50).length;
  const failedCount = marks.length - passedCount;

  return (
    <>
      <nav class="navbar navbar-expand-lg bg-body-tertiary bg-dark" data-bs-theme="dark">
        <div class="container-fluid">
          <a class="navbar-brand h1" href="#">KFC</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <div class="btn-group" role="group" aria-label="Basic mixed styles example">
                  <button type="button" class="btn btn-warning"><i className="fas fa-shopping-cart"></i> {cartItems.length}</button>
                  <button type="button" class="btn btn-success">Rs. {totalPrice}</button>
                </div>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#" onClick={resetCart}><i className="fas fa-sync"></i></a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    
      
      <div className='container-fluid'>
        <div className='row'>
          {products.map((product) => (
            <div align='center' className='col-sm-2 card m-2 text-bg-dark' key={product.id}>
              <img src={product.img} className='card-img-top' style={{width: '20rem'}} />
              <div className='card-body p-2'>
                <h3 className='card-title'>{product.title}</h3><hr />
                <p className='card-text'>{product.desc}</p><br />
                <p className='h3'>{product.price} Rs.</p>
                <button className='btn btn-danger' onClick={() => addToCart(product)}>Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <br />
      <div className="container">
        <h1>Marks List: Passed {passedCount} and Failed {failedCount}</h1><br />
        {marks.map((mark, index) => (
          <div key={index} className={`alert ${mark < 0 ? 'alert-danger' : 'alert-primary'}`}>
            <button className="btn btn-primary mx-2 h2" onClick={() => handleIncrement(index)}>+</button>
            <span className={mark < 50 ? 'text-danger' : 'text-success'}>{mark}</span>&nbsp;
            <button className="btn btn-primary h2" onClick={() => handleDecrement(index)}>-</button>
            <span className="ml-2">{mark < 50 ? 'Failed' : 'Passed'}</span>
          </div>
        ))}
      </div>


    </>
  )
}

export default App
