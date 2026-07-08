export function Pagination({ page = 1, pageCount = 1, onChange, className = "" }) {
  const pages = [];
  const push = (p) => pages.push(p);
  push(1);
  if (page > 3) push("…");
  for (let p = Math.max(2, page - 1); p <= Math.min(pageCount - 1, page + 1); p++) push(p);
  if (page < pageCount - 2) push("…");
  if (pageCount > 1) push(pageCount);

  return (
    <div className={`bd-pagination ${className}`.trim()}>
      <button className="bd-page-btn" disabled={page <= 1} onClick={() => onChange && onChange(page - 1)} aria-label="Previous page">‹</button>
      {pages.map((p, i) =>
        p === "…" ? (
          <span className="bd-page-ellipsis" key={`e${i}`}>···</span>
        ) : (
          <button
            key={p}
            className={`bd-page-btn ${p === page ? "bd-page-btn-active" : ""}`.trim()}
            onClick={() => onChange && onChange(p)}
          >
            {p}
          </button>
        )
      )}
      <button className="bd-page-btn" disabled={page >= pageCount} onClick={() => onChange && onChange(page + 1)} aria-label="Next page">›</button>
    </div>
  );
}
