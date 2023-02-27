import Footer from './Footer'
import Header from './Header'
import "./Layout.scss"

const Layout = ({children}) => {
  return (
   <>
   <div className='wrapper'>
    <Header />
    <div className='content-pages'>
      <div className='container'>{children}</div>
    </div>
    <Footer />
   </div>
   </>
  )
}

export default Layout