export function Footer({ columns = [], bottomLeft, bottomRight, className = "" }) {
  return (
    <footer className={`bd-footer ${className}`.trim()}>
      <div className="bd-container">
        <div className="bd-footer-grid">
          {columns.map((col) => (
            <div className="bd-footer-col" key={col.title}>
              <h4>{col.title}</h4>
              {(col.links || []).map((l) => (
                <span key={l} className="bd-footer-link">{l}</span>
              ))}
            </div>
          ))}
        </div>
        <div className="bd-footer-bottom">
          <span>{bottomLeft}</span>
          <span>{bottomRight}</span>
        </div>
      </div>
    </footer>
  );
}
