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
import { calculateMileageAllowance, type MileageVehicleType } from "@/lib/calc/mileage-allowance";
import { formatCurrency } from "@/lib/format";

const VEHICLE_OPTIONS: { value: MileageVehicleType; label: string }[] = [
  { value: "carVan", label: "Car or van" },
  { value: "motorcycle", label: "Motorcycle" },
  { value: "bicycle", label: "Bicycle" },
];

export function MileageAllowanceCalculator() {
  const [vehicleType, setVehicleType] = React.useState<MileageVehicleType>("carVan");
  const [businessMiles, setBusinessMiles] = React.useState(8000);
  const [employerRatePerMile, setEmployerRatePerMile] = React.useState(0.45);

  const result = React.useMemo(
    () => calculateMileageAllowance({ vehicleType, businessMiles, employerRatePerMile }),
    [vehicleType, businessMiles, employerRatePerMile]
  );

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
      <Card className="p-6 sm:p-8">
        <CardContent className="flex flex-col gap-6 p-0">
          <div className="flex flex-col gap-2">
            <Label htmlFor="ma-vehicle">Vehicle type</Label>
            <Select value={vehicleType} onValueChange={(v) => setVehicleType(v as MileageVehicleType)}>
              <SelectTrigger id="ma-vehicle" className="h-11 w-full text-base">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {VEHICLE_OPTIONS.map((v) => (
                  <SelectItem key={v.value} value={v.value}>
                    {v.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="ma-miles">Business miles this tax year</Label>
            <div className="relative">
              <Input
                id="ma-miles"
                type="number"
                min={0}
                step={100}
                value={businessMiles}
                onChange={(e) => setBusinessMiles(Number(e.target.value) || 0)}
                className="h-11 pr-16 text-base"
              />
              <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-xs text-muted-foreground">miles</span>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="ma-employer-rate">What your employer pays per mile</Label>
            <div className="relative">
              <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">£</span>
              <Input
                id="ma-employer-rate"
                type="number"
                min={0}
                step={0.01}
                value={employerRatePerMile}
                onChange={(e) => setEmployerRatePerMile(Number(e.target.value) || 0)}
                className="h-11 pl-7 text-base"
              />
            </div>
            <p className="text-xs text-muted-foreground">Enter 0 if you are self-employed or not reimbursed by an employer</p>
          </div>
        </CardContent>
      </Card>

      <div className="flex flex-col gap-5 lg:sticky lg:top-24 lg:self-start">
        <ResultCard resultKey={`${vehicleType}-${businessMiles}-${employerRatePerMile}`}>
          <ResultStat label="HMRC approved amount" value={formatCurrency(result.approvedAmount, 2)} emphasis />
          <div className="mt-6 grid grid-cols-2 gap-6">
            <ResultStat label="Paid by employer" value={formatCurrency(result.amountPaidByEmployer, 2)} />
            <ResultStat label="Shortfall you can claim relief on" value={formatCurrency(result.shortfall, 2)} />
          </div>
          <div className="mt-6">
            <ResultStat
              label="Estimated tax relief at basic rate"
              value={formatCurrency(result.estimatedTaxReliefAtBasicRate, 2)}
              positive
            />
          </div>
        </ResultCard>

        <Card className="p-6">
          <CardContent className="p-0 text-sm text-muted-foreground">
            If you are paid less than the approved amount, you can usually claim Mileage Allowance Relief on the
            shortfall via Self Assessment or a P87 form. Higher and additional rate taxpayers get more relief
            than the basic rate figure shown here. Check current rules on GOV.UK or with an accountant.
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
