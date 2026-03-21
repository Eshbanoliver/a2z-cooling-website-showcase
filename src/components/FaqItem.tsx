import { useState } from 'react'
import DynamicIcon from './DynamicIcon'

interface FaqItemProps {
  question: string;
  answer: string;
}

export default function FaqItem({ question, answer }: FaqItemProps) {
  const [open, setOpen] = useState(false)

  return (
    <div className={`faq-item${open ? ' active' : ''}`}>
      <button className="faq-question" onClick={() => setOpen(!open)} aria-expanded={open}>
        <span>{question}</span>
        <span className="faq-toggle">
          <DynamicIcon name={open ? "chevron-up" : "chevron-down"} size={20} />
        </span>
      </button>
      <div className="faq-answer">
        <p>{answer}</p>
      </div>
    </div>
  )
}
