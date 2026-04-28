// src/components/InvoicePreview.jsx
import { motion } from "framer-motion"

function InvoicePreview({ business, client, items, logo }) {

  // Calculate the grand total.
  // reduce() loops through the items array and accumulates a single value (the total).
  // For each item: total so far + (price × quantity)
  const total = items.reduce((sum, item) => sum + (item.price * item.quantity), 0)

  // toLocaleString() formats a number with commas: 180000 → "180,000"
  const formatMoney = (amount) => Number(amount).toLocaleString('en-NG')

  // Today's date formatted nicely
  const today = new Date().toLocaleDateString('en-GB', {
    day: 'numeric', month: 'short', year: 'numeric'
  })

  return (
    <motion.div 
      id="preview"
      initial={{ x: 95, y:95, opacity: 0,}}   // Start state
      whileInView={{ x: 0, y: 0, opacity: 1 }} // End state when scrolled to
      transition={{ duration: 2.3 }}
    
      style={{ position: 'sticky', top: '40px' }}>
      {/* position: sticky keeps the preview visible as you scroll the form */}
      <div id="invoice-preview" className="previewCard">

        {/* HEADER: logo + business name + invoice meta */}
        
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '24px'}}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '10px'}}>
        
            {/* Only render the img tag if a logo exists.
                The && operator means: "if logo is truthy, render what's after &&" */}
            {logo && (
              <img
                src={logo}
                alt="Business logo"
                style={{
                  height: '52px',
                  maxWidth: '180px',
                  objectFit: 'contain', // keeps the logo's original proportions, no stretching
                  marginBottom: '10px',
                  display: 'block',
                }}
              />
            )}
            <div style={{ textAlign: 'left' }}>
              <h2 className="businessName" >
                {business.name || 'Your Business Name'}
              </h2>
              <p style={{ fontSize: '13px', color: '#718096', marginTop: '4px' }}>{business.email||'your@gmail.com' }</p>
              <p style={{ fontSize: '13px', color: '#718096' }}>{business.address}</p>
            </div>
            
          </div>
          <div >
            <p style={{ fontSize: '20px', fontWeight: '700', color: '#2d3748' }}>Invoice</p>
            <p style={{ fontSize: '12px', color: '#a0aec0', marginTop: '4px' }}>Date: {today}</p>
          </div>
        </div>

        {/* DIVIDER */}
        <hr style={{ border: 'none', borderTop: '1px solid #e2e8f0', margin: '0 0 20px' }} />

        {/* BILL TO */}
        <div style={{ marginBottom: '24px' }}>
          <p style={{ fontSize: '11px', color: '#a0aec0', fontWeight: '600', textTransform: 'uppercase', marginBottom: '6px' }}>Bill to</p>
          <p style={{ fontWeight: '600', color: '#2d3748' }}>{client.name || 'Client Name'}</p>
          <p style={{ fontSize: '13px', color: '#718096' }}>{client.email}</p>
        </div>

        {/* LINE ITEMS TABLE */}
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
              <th className="thStyle">Description</th>
              <th className="thStyle" style={{ textAlign: 'center' }}>Quantity</th>
              <th className="thStyle" style={{ textAlign: 'right' }}>Total</th>
            </tr>
          </thead>
          <tbody>
            {/* Map through items and render a table row for each one */}
            {items.map(item => (
              <tr key={item.id} style={{ borderBottom: '1px solid #f7fafc' }}>
                <td className="tdStyle">{item.description || '—'}</td>
                <td className="tdStyle" style={{ textAlign: 'center' }}>{item.quantity}</td>
                <td className="tdStyle" style={{ textAlign: 'right' }}>
                  ₦{formatMoney(item.price * item.quantity)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* TOTAL */}
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '16px', paddingTop: '12px', borderTop: '2px solid #2d3748' }}>
          <div style={{ textAlign: 'right' }}>
            <p style={{ fontSize: '12px', color: '#a0aec0' }}>Total amount due</p>
            <p style={{ fontSize: '22px', fontWeight: '700', color: '#1a202c' }}>₦{formatMoney(total)}</p>
          </div>
        </div>

        {/* FOOTER */}
        <p style={{ textAlign: 'center', fontSize: '12px', color: '#cbd5e0', marginTop: '24px' }}>
          Thank you for your business!
        </p>
      </div>

      {/* PRINT BUTTON */}
      <button onClick={() => window.print()} className="printBtn no-print">
        Print / Save as PDF
      </button>
      
    </motion.div>
  )
}







export default InvoicePreview