import { useState } from 'react'

import InvoiceForm from '../src/components/InvoiceForm'
import InvoicePreview from '../src/components/InvoicePreview'
import TemplateCarousel from './components/TemplateCarousel'
import Footer from './components/Footer'
import Navbar from './components/NavBar'
import Hero from './components/Hero'
import { DEFAULT_TEMPLATE_ID } from './templates/templateConfig'

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

  // --- TEMPLATE SELECTION STATE ---
  // Holds the id of whichever template card the user picked in the carousel
  // (e.g. 'classic', 'modern'). InvoicePreview uses this to decide which
  // template component to render.
  const [templateId, setTemplateId] = useState(DEFAULT_TEMPLATE_ID)

  return (
    <div>
      <Navbar />
      <Hero />

      {/* Template picker — sits between the hero and the form/preview area */}
      <TemplateCarousel selectedId={templateId} onSelect={setTemplateId} />

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
        templateId={templateId}
      />
    </div>
    <Footer className="no-print"/>
    </div>
    
  )
}

export default  App;