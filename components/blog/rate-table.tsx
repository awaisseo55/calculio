interface RateTableProps {
  caption: string;
  columns: string[];
  rows: (string | number)[][];
  highlightLastRow?: boolean;
}

export function RateTable({ caption, columns, rows, highlightLastRow = false }: RateTableProps) {
  return (
    <div className="not-prose my-6 overflow-x-auto rounded-2xl border border-border">
      <table className="w-full border-collapse text-left text-sm">
        <caption className="sr-only">{caption}</caption>
        <thead>
          <tr className="border-b border-border bg-muted/50">
            {columns.map((col) => (
              <th
                key={col}
                scope="col"
                className="px-4 py-3 font-semibold text-foreground first:pl-5 last:pr-5"
              >
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => {
            const isLast = highlightLastRow && i === rows.length - 1;
            return (
              <tr
                key={i}
                className={
                  isLast
                    ? "bg-primary/5 font-semibold text-foreground"
                    : "border-b border-border/60 text-foreground last:border-b-0"
                }
              >
                {row.map((cell, j) => (
                  <td key={j} className="px-4 py-3 tabular-nums first:pl-5 last:pr-5">
                    {cell}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
