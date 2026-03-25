interface PageHeaderProps {
  title: string;
  subtitle?: string;
  image?: string;
  fullWidth?: boolean;
}

export default function PageHeader({ title, subtitle, image, fullWidth }: PageHeaderProps) {
  const headerClass = `page-header ${image ? (fullWidth ? 'page-header-full' : 'page-header-premium') : ''}`;
  
  return (
    <div 
      className={headerClass}
      style={fullWidth && image ? { backgroundImage: `url(${image})` } : {}}
    >
      {fullWidth && image && <div className="page-header-overlay"></div>}
      <div className="container">
        <div className="page-header-content">
          <div className="page-header-text">
            <h1>{title}</h1>
            {subtitle && <p className="subtitle">{subtitle}</p>}
          </div>
          {!fullWidth && image && (
            <div className="page-header-image">
              <div className="image-wrapper glass-card">
                <img src={image} alt={title} />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
