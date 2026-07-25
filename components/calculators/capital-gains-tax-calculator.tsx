"use client";

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ResultCard, ResultStat } from "@/components/calculators/result-card";
import { RatesDisclaimer } from "@/components/calculators/rates-disclaimer";
import { calculateCapitalGainsTax } from "@/lib/calc/capital-gains-tax";
import type { AssetType } from "@/lib/calc/capital-gains-tax";
import { formatCurrency, formatPercent } from "@/lib/format";

export function CapitalGainsTaxCalculator() {
  const [salePrice, setSalePrice] = React.useState(350000);
  const [purchasePrice, setPurchasePrice] = React.useState(250000);
  const [allowableCosts, setAllowableCosts] = React.useState(5000);
  const [assetType, setAssetType] = React.useState<AssetType>("property");
  const [higherRateTaxpayer, setHigherRateTaxpayer] = React.useState(true);

  const result = React.useMemo(
    () =>
      calculateCapitalGainsTax({
        salePrice,
        purchasePrice,
        allowableCosts,
        assetType,
        higherRateTaxpayer,
      }),
    [salePrice, purchasePrice, allowableCosts, assetType, higherRateTaxpayer]
  );

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
      <Card className="p-6 sm:p-8">
        <CardContent className="flex flex-col gap-6 p-0">
          <div className="flex flex-col gap-2">
            <Label>Asset type</Label>
            <Tabs value={assetType} onValueChange={(v) => setAssetType(v as AssetType)}>
              <TabsList className="w-full">
                <TabsTrigger value="property" className="flex-1">Property</TabsTrigger>
                <TabsTrigger value="other" className="flex-1">Shares / other</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="cgt-sale">Sale price</Label>
            <div className="relative">
              <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">£</span>
              <Input
                id="cgt-sale"
                type="number"
                min={0}
                value={salePrice}
                onChange={(e) => setSalePrice(Number(e.target.value) || 0)}
                className="h-11 pl-7 text-base"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="cgt-purchase">Purchase price</Label>
            <div className="relative">
              <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">£</span>
              <Input
                id="cgt-purchase"
                type="number"
                min={0}
                value={purchasePrice}
                onChange={(e) => setPurchasePrice(Number(e.target.value) || 0)}
                className="h-11 pl-7 text-base"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="cgt-costs">Allowable costs</Label>
            <div className="relative">
              <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">£</span>
              <Input
                id="cgt-costs"
                type="number"
                min={0}
                value={allowableCosts}
                onChange={(e) => setAllowableCosts(Number(e.target.value) || 0)}
                className="h-11 pl-7 text-base"
              />
            </div>
            <p className="text-xs text-muted-foreground">
              Costs like agent fees, solicitor fees and stamp duty when you bought.
            </p>
          </div>

          <label className="flex items-center gap-2.5 text-sm text-foreground">
            <input
              type="checkbox"
              checked={higherRateTaxpayer}
              onChange={(e) => setHigherRateTaxpayer(e.target.checked)}
              className="size-4 rounded border-input accent-primary"
            />
            I&apos;m a higher or additional rate taxpayer
          </label>

          <RatesDisclaimer>
            Figures are based on publicly published HMRC rates and are for guidance
            only. Since October 2024, property and other chargeable assets share the
            same Capital Gains Tax rates. Always confirm exact amounts on gov.uk
            before making a financial decision.
          </RatesDisclaimer>
        </CardContent>
      </Card>

      <div className="flex flex-col gap-5 lg:sticky lg:top-24 lg:self-start">
        <ResultCard
          resultKey={`${salePrice}-${purchasePrice}-${allowableCosts}-${assetType}-${higherRateTaxpayer}`}
        >
          <ResultStat label="Capital Gains Tax owed" value={formatCurrency(result.cgtOwed, 2)} emphasis />
          <div className="mt-6 grid grid-cols-2 gap-6">
            <ResultStat label="Total gain" value={formatCurrency(result.gain)} />
            <ResultStat label="Annual exempt amount used" value={formatCurrency(result.annualExemptAmountUsed)} />
            <ResultStat label="Taxable gain" value={formatCurrency(result.taxableGain)} />
            <ResultStat label="Rate applied" value={formatPercent(result.rate * 100, 0)} />
          </div>
        </ResultCard>
      </div>
    </div>
  );
}
