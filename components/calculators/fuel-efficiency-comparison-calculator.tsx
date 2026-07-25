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
import {
  calculateFuelEfficiencyComparison,
  type VehicleFuelType,
  type VehicleInput,
} from "@/lib/calc/fuel-efficiency-comparison";
import { formatCurrency } from "@/lib/format";

const fuelTypes: { value: VehicleFuelType; label: string }[] = [
  { value: "petrol", label: "Petrol" },
  { value: "diesel", label: "Diesel" },
  { value: "hybrid", label: "Hybrid" },
];

function VehicleForm({
  label,
  vehicle,
  onChange,
}: {
  label: string;
  vehicle: VehicleInput;
  onChange: (v: VehicleInput) => void;
}) {
  return (
    <div className="flex flex-col gap-4 rounded-xl border border-border p-4">
      <h3 className="text-sm font-semibold text-foreground">{label}</h3>
      <div className="flex flex-col gap-2">
        <Label>Annual mileage</Label>
        <Input
          type="number"
          min={0}
          value={vehicle.annualMileage}
          onChange={(e) => onChange({ ...vehicle, annualMileage: Number(e.target.value) || 0 })}
          className="h-11 text-base"
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col gap-2">
          <Label>MPG</Label>
          <Input
            type="number"
            min={0}
            value={vehicle.mpg}
            onChange={(e) => onChange({ ...vehicle, mpg: Number(e.target.value) || 0 })}
            className="h-11 text-base"
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label>Fuel type</Label>
          <Select
            value={vehicle.fuelType}
            onValueChange={(v) => onChange({ ...vehicle, fuelType: v as VehicleFuelType })}
          >
            <SelectTrigger className="h-11 w-full text-base">
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
      </div>
      <div className="flex flex-col gap-2">
        <Label>Fuel price per litre</Label>
        <div className="relative">
          <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">£</span>
          <Input
            type="number"
            min={0}
            step={0.01}
            value={vehicle.pricePerLitre}
            onChange={(e) => onChange({ ...vehicle, pricePerLitre: Number(e.target.value) || 0 })}
            className="h-11 pl-7 text-base"
          />
        </div>
      </div>
    </div>
  );
}

export function FuelEfficiencyComparisonCalculator() {
  const [vehicleA, setVehicleA] = React.useState<VehicleInput>({
    annualMileage: 10000,
    mpg: 45,
    fuelType: "petrol",
    pricePerLitre: 1.45,
  });
  const [vehicleB, setVehicleB] = React.useState<VehicleInput>({
    annualMileage: 10000,
    mpg: 60,
    fuelType: "diesel",
    pricePerLitre: 1.52,
  });

  const result = React.useMemo(
    () => calculateFuelEfficiencyComparison(vehicleA, vehicleB),
    [vehicleA, vehicleB]
  );

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
      <Card className="p-6 sm:p-8">
        <CardContent className="flex flex-col gap-4 p-0">
          <VehicleForm label="Vehicle A" vehicle={vehicleA} onChange={setVehicleA} />
          <VehicleForm label="Vehicle B" vehicle={vehicleB} onChange={setVehicleB} />
        </CardContent>
      </Card>

      <div className="flex flex-col gap-5 lg:sticky lg:top-24 lg:self-start">
        <ResultCard
          resultKey={`${vehicleA.annualMileage}-${vehicleA.mpg}-${vehicleA.pricePerLitre}-${vehicleB.annualMileage}-${vehicleB.mpg}-${vehicleB.pricePerLitre}`}
        >
          <ResultStat
            label="Annual cost difference"
            value={formatCurrency(result.annualDifference, 2)}
            emphasis
          />
          <div className="mt-6 grid grid-cols-2 gap-6">
            <ResultStat label="Vehicle A annual fuel cost" value={formatCurrency(result.vehicleA.annualFuelCost, 2)} />
            <ResultStat label="Vehicle B annual fuel cost" value={formatCurrency(result.vehicleB.annualFuelCost, 2)} />
            <ResultStat label="Vehicle A cost per mile" value={formatCurrency(result.vehicleA.costPerMile, 2)} />
            <ResultStat label="Vehicle B cost per mile" value={formatCurrency(result.vehicleB.costPerMile, 2)} />
          </div>
          <p className="mt-6 text-xs leading-relaxed text-muted-foreground">
            {result.cheaperVehicle === "equal"
              ? "Both vehicles cost roughly the same to fuel each year based on these figures."
              : `Vehicle ${result.cheaperVehicle} is cheaper to fuel, saving around ${formatCurrency(result.fiveYearDifference, 0)} over 5 years at these mileage and price levels.`}
          </p>
        </ResultCard>
      </div>
    </div>
  );
}
