export default function SectionTitle({ badge, title, description, dark = false }) {
  return (
    <div className="section-title">
      {badge && <span className="badge">{badge}</span>}
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  )
}
