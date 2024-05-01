import Navbar from './components/navbar/Navbar.jsx'
import Card from './components/product/product.jsx'
import Footer from './components/footer/Footer.jsx'

function App() {

  return (
    <div className='flex flex-col justify-between h-screen'>
      <div className="sticky top-0 z-10">
    <Navbar/>
      </div>
    {/* Product */}
    <section id='productList' className='px-10 py-10 flex items-center justify-center'>
      <div  className='flex gap-5 flex-wrap justify-center'>
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
      imageList='https://images.unsplash.com/photo-1623998021446-45cd9b269056?q=80&w=2079&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      name='Expensive watches'
      summaryText='The "Timeless Elegance" watch is a perfect blend of aesthetic beauty and unparalleled functionality. Designed for those who appreciate classic style but still want to look modern, this watch is a manifestation of timeless elegance.'
      />
      <Card 
      imageList='https://images.unsplash.com/photo-1624378441864-6eda7eac51cb?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      name='Skena jeans'
      summaryText='Skena Performance "Skena Jeans" pants are the ultimate choice for those who prioritize performance and style in every step. Designed with the latest technology and high-quality materials, these pants provide the perfect combination of comfort, practicality and unparalleled style.'
      />
      <Card 
      imageList='https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      name='leather jacket'
      summaryText='The "Heritage Craft" leather jacket is a manifestation of timeless traditional beauty and superb modern craftsmanship. Meticulously crafted by skilled artisans, this jacket is not only an elegant style choice but also a legacy that will last forever.'
      />   
      </div>
    </section>
    {/* footer */}
    <Footer/>
    </div>
  )
}

export default App


