import './shared/styles/reset.css'
import { Header } from './components/Header'
import { Banner } from './components/Banner'
import { SmallBanner } from './components/SmallBanner'
import { Category } from './components/Category'
import { Products } from './components/Products'
import { Footer } from './components/Footer'

export const App = () => {
  return (
    <>
    <Header />
    <Banner />
    <SmallBanner />
    <Category />
    <Products />
    <Footer />
    
    </>
  )
}
