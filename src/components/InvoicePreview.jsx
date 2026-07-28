import { motion } from "framer-motion"
import html2pdf from 'html2pdf.js'
import { useRef } from 'react'

import { DEFAULT_TEMPLATE_ID } from '../templates/templateConfig'
import ClassicTemplate from '../templates/ClassicTemplate'
import ModernTemplate from '../templates/ModernTemplate'
import MinimalTemplate from '../templates/MinimalTemplate'
import BoldTemplate from '../templates/BoldTemplate'
import CorporateTemplate from '../templates/CorporateTemplate'

// Map each template id (from templateConfig.js) to the component that
// renders it. Add new templates here after creating them.
const TEMPLATE_COMPONENTS = {
  classic: ClassicTemplate,
  modern: ModernTemplate,
  minimal: MinimalTemplate,
  bold: BoldTemplate,
  corporate: CorporateTemplate,
}

function InvoicePreview({ business, client, items, logo, templateId }) {

  // Calculate the grand total.
  // reduce() loops through the items array and accumulates a single value (the total).
  // For each item: total so far + (price × quantity)
  const total = items.reduce((sum, item) => sum + (item.price * item.quantity), 0)

  // toLocaleString() formats a number with commas: 180000 → "180,000"
  const formatMoney = (amount) => Number(amount).toLocaleString('en-NG')

  const today = new Date().toLocaleDateString('undefine', {
    day: 'numeric', 
    month: 'short', 
    year: 'numeric',
    hour: '2-digit', 
    minute: '2-digit', 
    second: '2-digit', 
    hour12: true
  })

  const time = new Date().toLocaleDateString('en-GB', {
    
  })


  const contentRef = useRef()

  const handleDownload = () => {
    const element = contentRef.current
    const options = {
      filename: 'my-invoice.pdf',
      margin: 1,
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    }

    html2pdf().set(options).from(element).save()
  }

  // Pick the component for the selected template, falling back to the
  // default if something unexpected comes through (e.g. a bad id).
  const TemplateComponent = TEMPLATE_COMPONENTS[templateId] || TEMPLATE_COMPONENTS[DEFAULT_TEMPLATE_ID]

  return (
    <motion.div
      id="preview"
      initial={{ x: 20, y: 95, opacity: 0 }}   // Start state
      whileInView={{ x: 0, y: 0, opacity: 1 }} // End state when scrolled to
      transition={{ duration: 2.3 }}
      style={{ position: 'sticky', top: '40px' }}>
      {/* position: sticky keeps the preview visible as you scroll the form */}

      <TemplateComponent
        ref={contentRef}
        business={business}
        client={client}
        items={items}
        logo={logo}
        total={total}
        formatMoney={formatMoney}
        today={today}
      />

      {/* PRINT BUTTON */}
      <button onClick={handleDownload} className="printBtn no-print" id="print">
        Save as PDF
      </button>

    </motion.div>
  )
}

export default InvoicePreview
