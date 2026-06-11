
import { useState } from 'react'
import { Analytics } from '@vercel/analytics/react'

import InvoiceForm from '../src/components/InvoiceForm'
import InvoicePreview from '../src/components/InvoicePreview'
import Footer from './components/Footer'
import Navbar from './components/NavBar'
import Hero from './components/Hero'

function App() {

  // useState({ ... }) creates a piece of state that holds an object. The object has two keys: name and email. 'business' is the current value. 'setBusiness' is the function to update it.
  const [business, setBusiness] = useState({
    name: '',
    email: '',
    address: '',
  })
  
  // This will store the logo as a "data URL" —a base64 string that represents the image. Think of it as the image converted into a long text string the browser can display directly.
  const [logo, setLogo] = useState(null) // null means no logo uploaded yet

  // --- CLIENT INFO STATE ---
  const [client, setClient] = useState({
    name: '',
    email: '',
  })

  // This state holds an ARRAY of objects. Each object is one row in the invoice. We start with one empty item so the user sees a row immediately.
  const [items, setItems] = useState([
    { id: 1, description: '', quantity: 1, price: 0 }
  ])

  return (
    <div>
      <Navbar />
      <Hero />
      <div className="app-layout invoicePrintlayout">
      
      {/* LEFT SIDE is the form. We pass 'business', 'setBusiness' etc. as props. The form will call these setter functions when the user types. */}
      <div className="no-print">
      <InvoiceForm
        business={business}
        setBusiness={setBusiness}
        client={client}
        setClient={setClient}
        items={items}
        setItems={setItems}
        logo={logo}    
        setLogo={setLogo}
      />
      </div>

      {/* RIGHT SIDE is the preview. It only needs to READ the data, so only pass the values, not the setters. */}
      <InvoicePreview
        business={business}
        client={client}
        items={items}
        logo={logo}
      />
    </div>
    <Footer className="no-print"/>
    <Analytics />
    </div>
    
  )
}

export default  App;