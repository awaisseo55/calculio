"use client";

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ResultCard, ResultStat } from "@/components/calculators/result-card";
import { calculateSolarPanelSavings } from "@/lib/calc/solar-panel-savings";
import { formatCurrency, formatNumber } from "@/lib/format";
import {
  SOLAR_TYPICAL_GENERATION_PER_KWP_ANNUAL_KWH,
  SOLAR_TYPICAL_SELF_CONSUMPTION_PERCENT,
  SOLAR_TYPICAL_EXPORT_RATE_PENCE,
  ENERGY_ELECTRICITY_UNIT_RATE_PENCE,
} from "@/lib/calc/uk-rates";

export function SolarPanelSavingsCalculator() {
  const [systemSizeKwp, setSystemSizeKwp] = React.useState(4);
  const [systemCost, setSystemCost] = React.useState(7000);
  const [generationPerKwpAnnual, setGenerationPerKwpAnnual] = React.useState(
    SOLAR_TYPICAL_GENERATION_PER_KWP_ANNUAL_KWH
  );
  const [selfConsumptionPercent, setSelfConsumptionPercent] = React.useState(
    SOLAR_TYPICAL_SELF_CONSUMPTION_PERCENT
  );
  const [electricityUnitRatePence, setElectricityUnitRatePence] = React.useState(
    ENERGY_ELECTRICITY_UNIT_RATE_PENCE
  );
  const [exportRatePence, setExportRatePence] = React.useState(SOLAR_TYPICAL_EXPORT_RATE_PENCE);

  const result = React.useMemo(
    () =>
      calculateSolarPanelSavings({
        systemSizeKwp,
        generationPerKwpAnnual,
        selfConsumptionPercent,
        electricityUnitRatePence,
        exportRatePence,
        systemCost,
      }),
    [systemSizeKwp, generationPerKwpAnnual, selfConsumptionPercent, electricityUnitRatePence, exportRatePence, systemCost]
  );

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
      <Card className="p-6 sm:p-8">
        <CardContent className="flex flex-col gap-6 p-0">
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <Label htmlFor="solar-size">System size</Label>
              <div className="relative">
                <Input
                  id="solar-size"
                  type="number"
                  min={0}
                  step={0.5}
                  value={systemSizeKwp}
                  onChange={(e) => setSystemSizeKwp(Number(e.target.value) || 0)}
                  className="h-11 pr-14 text-base"
                />
                <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-xs text-muted-foreground">kWp</span>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="solar-cost">System cost</Label>
              <div className="relative">
                <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">£</span>
                <Input
                  id="solar-cost"
                  type="number"
                  min={0}
                  step={100}
                  value={systemCost}
                  onChange={(e) => setSystemCost(Number(e.target.value) || 0)}
                  className="h-11 pl-7 text-base"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="solar-gen">Annual generation per kWp</Label>
            <div className="relative">
              <Input
                id="solar-gen"
                type="number"
                min={0}
                step={10}
                value={generationPerKwpAnnual}
                onChange={(e) => setGenerationPerKwpAnnual(Number(e.target.value) || 0)}
                className="h-11 pr-16 text-base"
              />
              <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-xs text-muted-foreground">kWh/kWp</span>
            </div>
            <p className="text-xs text-muted-foreground">Varies by location, orientation and shading</p>
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="solar-self">Self-consumption</Label>
            <div className="relative">
              <Input
                id="solar-self"
                type="number"
                min={0}
                max={100}
                step={5}
                value={selfConsumptionPercent}
                onChange={(e) => setSelfConsumptionPercent(Number(e.target.value) || 0)}
                className="h-11 pr-7 text-base"
              />
              <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">%</span>
            </div>
            <p className="text-xs text-muted-foreground">
              Share of generated electricity you use yourself rather than export; higher with a battery
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <Label htmlFor="solar-unit">Electricity unit rate</Label>
              <div className="relative">
                <Input
                  id="solar-unit"
                  type="number"
                  min={0}
                  step={0.1}
                  value={electricityUnitRatePence}
                  onChange={(e) => setElectricityUnitRatePence(Number(e.target.value) || 0)}
                  className="h-11 pr-10 text-base"
                />
                <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-xs text-muted-foreground">p/kWh</span>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="solar-export">Export (SEG) rate</Label>
              <div className="relative">
                <Input
                  id="solar-export"
                  type="number"
                  min={0}
                  step={0.5}
                  value={exportRatePence}
                  onChange={(e) => setExportRatePence(Number(e.target.value) || 0)}
                  className="h-11 pr-10 text-base"
                />
                <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-xs text-muted-foreground">p/kWh</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="flex flex-col gap-5 lg:sticky lg:top-24 lg:self-start">
        <ResultCard
          resultKey={`${systemSizeKwp}-${systemCost}-${generationPerKwpAnnual}-${selfConsumptionPercent}-${electricityUnitRatePence}-${exportRatePence}`}
        >
          <ResultStat
            label="Estimated payback period"
            value={result.paybackYears !== null ? `${formatNumber(result.paybackYears, 1)} years` : "N/A"}
            emphasis
          />
          <div className="mt-6 grid grid-cols-2 gap-6">
            <ResultStat label="Annual bill savings" value={formatCurrency(result.annualBillSavings)} positive />
            <ResultStat label="Annual export income" value={formatCurrency(result.annualExportIncome)} positive />
            <ResultStat label="Total annual benefit" value={formatCurrency(result.totalAnnualBenefit)} />
            <ResultStat label="Annual generation" value={`${formatNumber(result.annualGenerationKwh)} kWh`} />
          </div>
        </ResultCard>

        <Card className="p-6">
          <CardContent className="p-0 text-sm text-muted-foreground">
            Over 25 years, a typical panel lifespan, this system could
            deliver around{" "}
            <span className="font-mono font-medium text-foreground">
              {formatCurrency(result.twentyFiveYearBenefit)}
            </span>{" "}
            in combined bill savings and export income, assuming generation,
            prices and rates stay level. Real electricity prices, export
            tariffs and panel output all change over time, so treat this as
            an illustrative long-run estimate, not a guarantee.
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
