import { useState } from 'react'
import './App.css'
import Tenisnike from './assets/tenisdanike.webp'
import Tenisnike2 from './assets/tenis nike.jpeg'
import Tenisnike3 from './assets/nike.webp'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <main>
      <header></header>
      <section className="produtos">

        {/*Produto 1 */}
        <a href="#" className="link-card">
          <div className="card">
          <img src={Tenisnike}alt="" className="img-prod" />
            <h2>Tenis da nike</h2>
            <p className="desc">Um lindo tenis rosa da nike</p>
            <p className="preco">R$ 699,99</p>
          <div className="avaliacao"> <span>★ ★ ★ ★ ☆</span> (472)</div>
          <div className="off">- 15%</div>
          </div>      
        </a>              

        {/*Produto 2 */}
        <a href="#" className="link-card">
          <div className="card">
          <img src={Tenisnike2}alt="" className="img-prod" />
            <h2>Tenis da nike</h2>
            <p className="desc">Um lindo tenis da nike</p>
            <p className="preco">R$ 699,99</p>
          <div className="avaliacao"> <span>★ ★ ☆ ☆ ☆</span> (172)</div>
          <div className="off">- 15%</div>
          </div>      
        </a>              

        {/*Produto 3 */}
        <a href="#" className="link-card">
          <div className="card">
          <img src={Tenisnike3}alt="" className="img-prod" />
            <h2>Tenis da nike</h2>
            <p className="desc">Um lindo tenis da nike</p>
            <p className="preco">R$ 699,99</p>
          <div className="avaliacao"> <span>★ ★ ★ ★ ★</span> (28))</div>
          <div className="off">- 15%</div>
          </div>      
        </a>                      
      </section>
      <section className="destaque"></section>
      <footer></footer>
     </main>
    </>
  )
}

export default App
