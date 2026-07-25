"use client";

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ResultCard, ResultStat } from "@/components/calculators/result-card";
import { RatesDisclaimer } from "@/components/calculators/rates-disclaimer";
import { calculateCongestionUlez } from "@/lib/calc/congestion-ulez";
import type {
  CongestionFuelType,
  EmissionsStandard,
  EntryZone,
} from "@/lib/calc/congestion-ulez";
import { formatCurrency } from "@/lib/format";

const fuelTypes: { value: CongestionFuelType; label: string }[] = [
  { value: "petrol", label: "Petrol" },
  { value: "diesel", label: "Diesel" },
  { value: "hybrid", label: "Hybrid" },
  { value: "electric", label: "Electric" },
];

const standards: { value: EmissionsStandard; label: string }[] = [
  { value: "euro6", label: "Euro 6 (most cars from 2015 onwards)" },
  { value: "euro5", label: "Euro 5" },
  { value: "euro4", label: "Euro 4" },
  { value: "euro3-or-below", label: "Euro 3 or below" },
];

const zones: { value: EntryZone; label: string }[] = [
  { value: "both", label: "Congestion Charge and ULEZ" },
  { value: "congestion-charge", label: "Congestion Charge zone only" },
  { value: "ulez", label: "ULEZ zone only" },
];

export function CongestionUlezCalculator() {
  const [fuelType, setFuelType] = React.useState<CongestionFuelType>("diesel");
  const [emissionsStandard, setEmissionsStandard] = React.useState<EmissionsStandard>("euro5");
  const [entryDaysPerWeek, setEntryDaysPerWeek] = React.useState(5);
  const [zone, setZone] = React.useState<EntryZone>("both");

  const result = React.useMemo(
    () => calculateCongestionUlez({ fuelType, emissionsStandard, entryDaysPerWeek, zone }),
    [fuelType, emissionsStandard, entryDaysPerWeek, zone]
  );

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
      <Card className="p-6 sm:p-8">
        <CardContent className="flex flex-col gap-6 p-0">
          <div className="flex flex-col gap-2">
            <Label htmlFor="cu-zone">Zone you drive into</Label>
            <Select value={zone} onValueChange={(v) => setZone(v as EntryZone)}>
              <SelectTrigger id="cu-zone" className="h-11 w-full text-base">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {zones.map((z) => (
                  <SelectItem key={z.value} value={z.value}>
                    {z.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="cu-fuel">Fuel type</Label>
            <Select value={fuelType} onValueChange={(v) => setFuelType(v as CongestionFuelType)}>
              <SelectTrigger id="cu-fuel" className="h-11 w-full text-base">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {fuelTypes.map((f) => (
                  <SelectItem key={f.value} value={f.value}>
                    {f.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {fuelType !== "electric" && (
            <div className="flex flex-col gap-2">
              <Label htmlFor="cu-standard">Euro emissions standard</Label>
              <Select
                value={emissionsStandard}
                onValueChange={(v) => setEmissionsStandard(v as EmissionsStandard)}
              >
                <SelectTrigger id="cu-standard" className="h-11 w-full text-base">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {standards.map((s) => (
                    <SelectItem key={s.value} value={s.value}>
                      {s.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <p className="text-xs text-muted-foreground">
                Check your V5C logbook or the DVLA vehicle checker if you&apos;re not
                sure of your car&apos;s emissions standard.
              </p>
            </div>
          )}

          <div className="flex flex-col gap-2">
            <Label htmlFor="cu-days">Days you drive in per week</Label>
            <Input
              id="cu-days"
              type="number"
              min={0}
              max={7}
              value={entryDaysPerWeek}
              onChange={(e) => setEntryDaysPerWeek(Number(e.target.value) || 0)}
              className="h-11 text-base"
            />
          </div>

          <RatesDisclaimer>
            Figures are based on published Transport for London daily charges and are
            for guidance only. TfL reviews these rates and exemptions regularly, so
            always confirm the current charge at tfl.gov.uk before you travel.
          </RatesDisclaimer>
        </CardContent>
      </Card>

      <div className="flex flex-col gap-5 lg:sticky lg:top-24 lg:self-start">
        <ResultCard
          resultKey={`${fuelType}-${emissionsStandard}-${entryDaysPerWeek}-${zone}`}
        >
          <ResultStat label="Estimated annual cost" value={formatCurrency(result.annualCost)} emphasis />
          <div className="mt-6 grid grid-cols-2 gap-6">
            <ResultStat label="Daily cost" value={formatCurrency(result.dailyCost, 2)} />
            <ResultStat label="Weekly cost" value={formatCurrency(result.weeklyCost, 2)} />
            <ResultStat label="Monthly cost" value={formatCurrency(result.monthlyCost, 2)} />
            <ResultStat
              label="ULEZ status"
              value={result.ulezCompliant ? "Compliant, no charge" : "Not compliant"}
              positive={result.ulezCompliant}
            />
          </div>
        </ResultCard>
      </div>
    </div>
  );
}
