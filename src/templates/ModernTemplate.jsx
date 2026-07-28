import React, { forwardRef } from 'react'

const ModernTemplate = forwardRef(function ModernTemplate(
  { business, client, items, logo, total, formatMoney, today },
  ref
) {
  return (
    <div className="invoice-doc invoice-doc--modern" ref={ref}>
      {/* Full-width dark header band */}
      <div className="invoice-doc-headerbar">
        <div className="invoice-doc-brand">
          {logo && (
            <img src={logo} alt="Business logo" className="invoice-doc-logo invoice-doc-logo--onDark" />
          )}
          <div>
            <h2 className="businessName invoice-doc-onDark">{business.name || 'Your Business Name'}</h2>
            <p className="invoice-doc-muted invoice-doc-onDarkMuted">{business.email || 'your@gmail.com'}</p>
          </div>
        </div>
        <div className="invoice-doc-meta">
          <p className="invoice-doc-metaTitle invoice-doc-onDark">Invoice</p>
          <p className="invoice-doc-metaDate invoice-doc-onDarkMuted">{today}</p>
        </div>
      </div>

      <div className="invoice-doc-body">
        {business.address && (
          <p className="invoice-doc-muted" style={{ marginBottom: '20px' }}>{business.address}</p>
        )}

        {/* BILL TO */}
        <div className="invoice-doc-billTo">
          <p className="invoice-doc-label">Bill to</p>
          <p className="invoice-doc-clientName">{client.name || 'Client Name'}</p>
          <p className="invoice-doc-muted">{client.email}</p>
        </div>

        {/* LINE ITEMS TABLE */}
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

        {/* TOTAL — a solid dark block for contrast */}
        <div className="invoice-doc-totalBlock">
          <span className="invoice-doc-totalLabel invoice-doc-onDarkMuted">Total amount due</span>
          <span className="invoice-doc-totalAmount invoice-doc-onDark">₦{formatMoney(total)}</span>
        </div>

        <p className="invoice-doc-thanks">Thank you for your business!</p>
      </div>
    </div>
  )
})

export default ModernTemplate
