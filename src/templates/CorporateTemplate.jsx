import React, { forwardRef } from 'react'

const CorporateTemplate = forwardRef(function CorporateTemplate(
  { business, client, items, logo, total, formatMoney, today },
  ref
) {
  return (
    <div className="invoice-doc invoice-doc--corporate" ref={ref}>
      <div className="invoice-doc-letterhead">
        <div className="invoice-doc-brand">
          {logo && (
            <img src={logo} alt="Business logo" className="invoice-doc-logo" />
          )}
          <div>
            <h2 className="businessName">{business.name || 'Your Business Name'}</h2>
            <p className="invoice-doc-muted">{business.email || 'your@gmail.com'}</p>
            <p className="invoice-doc-muted">{business.address}</p>
          </div>
        </div>
        <div className="invoice-doc-meta">
          <p className="invoice-doc-metaTitle">INVOICE</p>
          <p className="invoice-doc-metaDate">{today}</p>
        </div>
      </div>

      <div className="invoice-doc-letterheadRule" />

      <div className="invoice-doc-billTo">
        <p className="invoice-doc-label">Billed to</p>
        <p className="invoice-doc-clientName">{client.name || 'Client Name'}</p>
        <p className="invoice-doc-muted">{client.email}</p>
      </div>

      <table className="invoice-doc-table invoice-doc-table--striped">
        <thead>
          <tr>
            <th className="thStyle">Description</th>
            <th className="thStyle" style={{ textAlign: 'center' }}>Quantity</th>
            <th className="thStyle" style={{ textAlign: 'right' }}>Total</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, i) => (
            <tr key={item.id} className={i % 2 === 1 ? 'invoice-doc-stripedRow' : ''}>
              <td className="tdStyle">{item.description || '—'}</td>
              <td className="tdStyle" style={{ textAlign: 'center' }}>{item.quantity}</td>
              <td className="tdStyle" style={{ textAlign: 'right' }}>
                ₦{formatMoney(item.price * item.quantity)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="invoice-doc-totalRow">
        <div style={{ textAlign: 'right' }}>
          <p className="invoice-doc-totalLabel">Total amount due</p>
          <p className="invoice-doc-totalAmount">₦{formatMoney(total)}</p>
        </div>
      </div>

      <p className="invoice-doc-thanks">This invoice was issued in good faith. Thank you for your business.</p>
    </div>
  )
})

export default CorporateTemplate
