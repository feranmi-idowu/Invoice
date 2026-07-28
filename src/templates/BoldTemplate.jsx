// src/templates/BoldTemplate.jsx
import React, { forwardRef } from 'react'

const BoldTemplate = forwardRef(function BoldTemplate(
  { business, client, items, logo, total, formatMoney, today },
  ref
) {
  return (
    <div className="invoice-doc invoice-doc--bold" ref={ref}>
      <div className="invoice-doc-headerbar">
        <div className="invoice-doc-brand">
          {logo && (
            <img src={logo} alt="Business logo" className="invoice-doc-logo" />
          )}
          <div>
            <h2 className="businessName">{business.name || 'Your Business Name'}</h2>
            <p className="invoice-doc-muted">{business.email || 'your@gmail.com'}</p>
          </div>
        </div>
        <p className="invoice-doc-bigStamp">INVOICE</p>
      </div>

      <div className="invoice-doc-body">
        <div className="invoice-doc-metaRow">
          {business.address && <p className="invoice-doc-muted">{business.address}</p>}
          <p className="invoice-doc-metaDate">{today}</p>
        </div>

        <div className="invoice-doc-billTo">
          <p className="invoice-doc-label">Bill to</p>
          <p className="invoice-doc-clientName">{client.name || 'Client Name'}</p>
          <p className="invoice-doc-muted">{client.email}</p>
        </div>

        <table className="invoice-doc-table">
          <thead>
            <tr>
              <th className="thStyle">Description</th>
              <th className="thStyle" style={{ textAlign: 'center' }}>Quantity</th>
              <th className="thStyle" style={{ textAlign: 'right' }}>Total</th>
            </tr>
          </thead>
          <tbody>
            {items.map(item => (
              <tr key={item.id}>
                <td className="tdStyle">{item.description || '—'}</td>
                <td className="tdStyle" style={{ textAlign: 'center' }}>{item.quantity}</td>
                <td className="tdStyle" style={{ textAlign: 'right' }}>
                  ₦{formatMoney(item.price * item.quantity)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="invoice-doc-totalBlock invoice-doc-totalBlock--bold">
          <span className="invoice-doc-totalLabel">Total amount due</span>
          <span className="invoice-doc-totalAmount">₦{formatMoney(total)}</span>
        </div>

        <p className="invoice-doc-thanks">Thank you for your business!</p>
      </div>
    </div>
  )
})

export default BoldTemplate
