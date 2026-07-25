import { Info } from "lucide-react";

export function RatesDisclaimer({ children }: { children?: React.ReactNode }) {
  return (
    <div className="flex gap-3 rounded-xl border border-border bg-muted/40 p-4 text-sm text-muted-foreground">
      <Info className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
      <p>
        {children ??
          "Figures are based on publicly published HMRC, DVLA, Revenue Scotland and Welsh Revenue Authority rates and are for guidance only — always confirm exact amounts on gov.uk before making a financial decision."}
      </p>
    </div>
  );
}
