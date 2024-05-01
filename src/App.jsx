import Navbar from './components/navbar/Navbar.jsx'
import Card from './components/product/product.jsx'
import Footer from './components/footer/Footer.jsx'

function App() {

  return (
    <div>
      <div className="sticky top-0 z-10">
    <Navbar/>
      </div>
    {/* Product */}
    <section id='productList' className='flex gap-5 justify-center flex-wrap px-10 mt-40'>
      <Card 
      imageList='https://images.unsplash.com/photo-1596455607563-ad6193f76b17?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      name='Baseball cap'
      summaryText='Display your sporty style with radiating confidence with the Ultimate FlexFit Baseball Cap.'
      />
      <Card 
      imageList='https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      name='Run DMC My Adidas'
      summaryText=' The perfect blend of retro and contemporary style, combining the spirit of classic hip-hop with a modern feel. With an awesome design, this t-shirt is a fashion statement that stands out with iconic elements from the legendary group Run DMC and the iconic brand Adidas.'
      />
      <Card 
      imageList='https://images.unsplash.com/photo-1596455607563-ad6193f76b17?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      name='Baseball cap'
      summaryText='Display your sporty style with radiating confidence with the Ultimate FlexFit Baseball Cap.'
      />
      <Card 
      imageList='https://images.unsplash.com/photo-1596455607563-ad6193f76b17?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      name='Baseball cap'
      summaryText='Display your sporty style with radiating confidence with the Ultimate FlexFit Baseball Cap.'
      />
      <Card 
      imageList='https://images.unsplash.com/photo-1596455607563-ad6193f76b17?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      name='Baseball cap'
      summaryText='Display your sporty style with radiating confidence with the Ultimate FlexFit Baseball Cap.'
      />   
    </section>
    {/* footer */}
    <Footer/>
    </div>
  )
}

export default App


