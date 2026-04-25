

// This component receives props from App.jsx.
// component receives props from App.jsx. and destructures them directly in the function signature cleaner to read.
function InvoiceForm({ business, setBusiness, client, setClient, items, setItems,logo, setLogo }) {

  // HANDLERS

  // 'field' is which key to update (e.g. 'name', 'email', 'address')
  // 'value' is what being typed
  // The spread operator { ...business } copies all existing business data,
  // then [field]: value updates only the one key that changed.
  const handleBusinessChange = (field, value) => {
    setBusiness({ ...business, [field]: value })
  }

  // Same pattern for client fields
  const handleClientChange = (field, value) => {
    setClient({ ...client, [field]: value })
  }

  // --- HANDLER: when the user types in a line item field ---
  // 'id' identifies which row changed
  // 'field' is 'description', 'qty', or 'price'
  const handleItemChange = (id, field, value) => {
    // map() loops through the items array.
    // For the item whose id matches, we update just that field.
    // All other items are returned unchanged.
    const updated = items.map(item =>
      item.id === id ? { ...item, [field]: value } : item
    )
    setItems(updated)
  }

  // --- HANDLER: add a new empty row ---
  const addItem = () => {
    const newItem = {
      id: Date.now(), // Date.now() gives a unique number — good enough for IDs here
      description: '',
      quantity: 1,
      price: 0,
    }
    setItems([...items, newItem]) // spread existing items, add the new one at the end
  }

  // --- HANDLER: remove a row by id ---
  const removeItem = (id) => {
    setItems(items.filter(item => item.id !== id)) // keep everything EXCEPT this id
  }

   // --- HANDLER: when the user selects an image file ---
   const handleLogoUpload = (e) => {
     const file = e.target.files[0] // files[0] is the first (and only) file selected
   
     // Guard: if no file was selected, do nothing
     if (!file) return
   
     // FileReader is a built-in browser tool that reads files
     const reader = new FileReader()
   
     // readAsDataURL converts the image file into a base64 string
     // e.g. "data:image/png;base64,iVBORw0KGgo..."
     reader.readAsDataURL(file)
   
     // onloadend fires when the reading is complete
     // At that point, reader.result contains the full base64 string
     reader.onloadend = () => {
       setLogo(reader.result) // store it in state — React will re-render with the new logo
     }
   }

   return (
    <div>

      {/* --- BUSINESS INFO SECTION --- */}
      <div className="sectionStyle">
        <h3 className="sectionTitle">Your business</h3>

        <label className="labelStyle">Business name</label>
        <input
          className="inputStyle"
          value={business.name}
          // onChange fires every time the user types a character.
          // e.target.value is what's currently in the input box.
          onChange={e => handleBusinessChange('name', e.target.value)}
          placeholder="e.g. Ayobami Designs"
        />

        <label className="labelStyle">Email</label>
        <input
          className="inputStyle"
          value={business.email}
          onChange={e => handleBusinessChange('email', e.target.value)}
          placeholder="hello@yourbusiness.com"
        />

        <label className="labelStyle">Address</label>
        <input
          className="inputStyle"
          value={business.address}
          onChange={e => handleBusinessChange('address', e.target.value)}
          placeholder="12 Victoria Island, Lagos"
        />
      </div>

      {/* --- LOGO UPLOAD SECTION --- */}
      <div className="sectionStyle">
        <h3 className="sectionTitle">Business logo</h3>
      
        {/* This hidden file input does the actual work.
          We style a visible button and connect it to this input using a ref trick below. */}
        <input
          id="logo-upload"
          type="file"
          accept="image/*"   // only allow image files (png, jpg, svg, etc.)
          onChange={handleLogoUpload}
          style={{ display: 'none' }} // hidden — we click it via the label below
        />
      
        {/* Clicking this label triggers the hidden file input above.
            htmlFor must match the input's id. */}
        <label htmlFor="logo-upload" className="uploadBtnStyle">
          {logo ? 'Change logo' : 'Upload logo'}
        </label>
      
        {/* Preview the uploaded logo right here in the form too */}
        {logo && (
          <div style={{ marginTop: '12px', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <img
              src={logo}
              alt="Business logo"
              style={{ height: '48px', maxWidth: '160px', objectFit: 'contain', borderRadius: '4px' }}
            />
            {/* Let them remove the logo if they want */}
            <button
              onClick={() => setLogo(null)}
              style={{ background: 'none', border: 'none', color: '#e53e3e', cursor: 'pointer', fontSize: '13px' }}
            >
              Remove
            </button>
          </div>
        )}
      </div>

      {/* --- CLIENT INFO SECTION --- */}
      <div className="sectionStyle">
        <h3 className="sectionTitle">Client details</h3>

        <label className="labelStyle">Client name</label>
        <input
          className="inputStyle"
          value={client.name}
          onChange={e => handleClientChange('name', e.target.value)}
          placeholder="e.g. TechCorp Ltd"
        />

        <label className="labelStyle">Client email</label>
        <input
          className="inputStyle"
          value={client.email}
          onChange={e => handleClientChange('email', e.target.value)}
          placeholder="accounts@client.com"
        />
      </div>

      {/* --- LINE ITEMS SECTION --- */}
      <div className="sectionStyle">
        <h3 className="sectionTitle">Line items</h3>

        {/* Column headers */}
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 32px', gap: '8px', marginBottom: '6px' }}>
          <span className="colHeader">Description</span>
          <span className="colHeader">Quantity</span>
          <span className="colHeader">Price (₦)</span>
          
        </div>

        {/* items.map() renders one row for every item in the array.
            The 'key' prop is required by React when rendering lists —
            it helps React track which item is which when things change. */}
        {items.map(item => (
          <div key={item.id} style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 32px', gap: '8px', marginBottom: '8px' }}>

            <input
              className="inputStyle"
              value={item.description}
              onChange={e => handleItemChange(item.id, 'description', e.target.value)}
              placeholder="Service description"
            />

            <input
              className="inputStyle"
              type="number"
              min="1"
              value={item.quantity}
              onChange={e => handleItemChange(item.id, 'quantity', Number(e.target.value))}
            />

            <input
              className="inputStyle"
              type="number"
              min="0"
              value={item.price}
              onChange={e => handleItemChange(item.id, 'price', Number(e.target.value))}
            />

            {/* Remove button — only show if there's more than 1 item */}
            {items.length > 1 && (
              <button
                onClick={() => removeItem(item.id)}
                style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#e53e3e', fontSize: '18px' }}
              >
                ×
              </button>
            )}
          </div>
        ))}

        <button onClick={addItem} className="addBtnStyle">+ Add item</button>
      </div>

    </div>
  )
}
export default InvoiceForm
