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
import {
  calculateEnergyBill,
  estimateDefaultElectricityKwh,
  estimateDefaultGasKwh,
  estimateDefaultOilLitres,
  DEFAULT_ENERGY_RATES,
  PROPERTY_TYPE_LABELS,
  HEATING_TYPE_LABELS,
  type PropertyType,
  type HeatingType,
} from "@/lib/calc/energy-bill";
import { formatCurrency } from "@/lib/format";

const propertyOptions = Object.entries(PROPERTY_TYPE_LABELS) as [PropertyType, string][];
const heatingOptions = Object.entries(HEATING_TYPE_LABELS) as [HeatingType, string][];

export function EnergyBillCalculator() {
  const [householdSize, setHouseholdSize] = React.useState(3);
  const [propertyType, setPropertyType] = React.useState<PropertyType>("semi");
  const [heatingType, setHeatingType] = React.useState<HeatingType>("gas");

  const suggestedElectricity = estimateDefaultElectricityKwh(householdSize, heatingType, propertyType);
  const suggestedGas = estimateDefaultGasKwh(householdSize, heatingType, propertyType);
  const suggestedOil = estimateDefaultOilLitres(householdSize, heatingType, propertyType);

  const [annualElectricityKwh, setAnnualElectricityKwh] = React.useState(suggestedElectricity);
  const [annualGasKwh, setAnnualGasKwh] = React.useState(suggestedGas);
  const [annualOilLitres, setAnnualOilLitres] = React.useState(suggestedOil);

  const [electricityUnitRatePence, setElectricityUnitRatePence] = React.useState(
    DEFAULT_ENERGY_RATES.electricityUnitRatePence
  );
  const [gasUnitRatePence, setGasUnitRatePence] = React.useState(DEFAULT_ENERGY_RATES.gasUnitRatePence);
  const [oilPricePencePerLitre, setOilPricePencePerLitre] = React.useState(
    DEFAULT_ENERGY_RATES.oilPricePencePerLitre
  );

  const result = React.useMemo(
    () =>
      calculateEnergyBill({
        heatingType,
        annualElectricityKwh,
        annualGasKwh,
        annualOilLitres,
        electricityUnitRatePence,
        electricityStandingChargePencePerDay: DEFAULT_ENERGY_RATES.electricityStandingChargePencePerDay,
        gasUnitRatePence,
        gasStandingChargePencePerDay: DEFAULT_ENERGY_RATES.gasStandingChargePencePerDay,
        oilPricePencePerLitre,
      }),
    [heatingType, annualElectricityKwh, annualGasKwh, annualOilLitres, electricityUnitRatePence, gasUnitRatePence, oilPricePencePerLitre]
  );

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
      <Card className="p-6 sm:p-8">
        <CardContent className="flex flex-col gap-6 p-0">
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <Label htmlFor="eb-household">Household size</Label>
              <Input
                id="eb-household"
                type="number"
                min={1}
                max={6}
                value={householdSize}
                onChange={(e) => setHouseholdSize(Number(e.target.value) || 1)}
                className="h-11 text-base"
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="eb-property">Property type</Label>
              <Select value={propertyType} onValueChange={(v) => setPropertyType(v as PropertyType)}>
                <SelectTrigger id="eb-property" className="h-11 w-full text-base">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {propertyOptions.map(([value, label]) => (
                    <SelectItem key={value} value={value}>
                      {label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="eb-heating">Primary heating</Label>
            <Select value={heatingType} onValueChange={(v) => setHeatingType(v as HeatingType)}>
              <SelectTrigger id="eb-heating" className="h-11 w-full text-base">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {heatingOptions.map(([value, label]) => (
                  <SelectItem key={value} value={value}>
                    {label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="eb-elec-kwh">Annual electricity use (kWh)</Label>
              <button
                type="button"
                onClick={() => setAnnualElectricityKwh(suggestedElectricity)}
                className="text-xs font-medium text-primary hover:underline"
              >
                Use typical ({suggestedElectricity.toLocaleString()})
              </button>
            </div>
            <Input
              id="eb-elec-kwh"
              type="number"
              min={0}
              value={annualElectricityKwh}
              onChange={(e) => setAnnualElectricityKwh(Number(e.target.value) || 0)}
              className="h-11 text-base"
            />
          </div>

          {heatingType === "gas" && (
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="eb-gas-kwh">Annual gas use (kWh)</Label>
                <button
                  type="button"
                  onClick={() => setAnnualGasKwh(suggestedGas)}
                  className="text-xs font-medium text-primary hover:underline"
                >
                  Use typical ({suggestedGas.toLocaleString()})
                </button>
              </div>
              <Input
                id="eb-gas-kwh"
                type="number"
                min={0}
                value={annualGasKwh}
                onChange={(e) => setAnnualGasKwh(Number(e.target.value) || 0)}
                className="h-11 text-base"
              />
            </div>
          )}

          {heatingType === "oil" && (
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="eb-oil-litres">Annual heating oil use (litres)</Label>
                <button
                  type="button"
                  onClick={() => setAnnualOilLitres(suggestedOil)}
                  className="text-xs font-medium text-primary hover:underline"
                >
                  Use typical ({suggestedOil.toLocaleString()})
                </button>
              </div>
              <Input
                id="eb-oil-litres"
                type="number"
                min={0}
                value={annualOilLitres}
                onChange={(e) => setAnnualOilLitres(Number(e.target.value) || 0)}
                className="h-11 text-base"
              />
            </div>
          )}

          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <Label htmlFor="eb-elec-rate">Electricity rate (p/kWh)</Label>
              <Input
                id="eb-elec-rate"
                type="number"
                min={0}
                step={0.1}
                value={electricityUnitRatePence}
                onChange={(e) => setElectricityUnitRatePence(Number(e.target.value) || 0)}
                className="h-11 text-base"
              />
            </div>
            {heatingType === "gas" && (
              <div className="flex flex-col gap-2">
                <Label htmlFor="eb-gas-rate">Gas rate (p/kWh)</Label>
                <Input
                  id="eb-gas-rate"
                  type="number"
                  min={0}
                  step={0.1}
                  value={gasUnitRatePence}
                  onChange={(e) => setGasUnitRatePence(Number(e.target.value) || 0)}
                  className="h-11 text-base"
                />
              </div>
            )}
            {heatingType === "oil" && (
              <div className="flex flex-col gap-2">
                <Label htmlFor="eb-oil-rate">Oil price (p/litre)</Label>
                <Input
                  id="eb-oil-rate"
                  type="number"
                  min={0}
                  step={1}
                  value={oilPricePencePerLitre}
                  onChange={(e) => setOilPricePencePerLitre(Number(e.target.value) || 0)}
                  className="h-11 text-base"
                />
              </div>
            )}
          </div>

          <RatesDisclaimer>
            Default unit rates reflect the general level of the Ofgem energy
            price cap for a typical direct debit customer, which changes every
            three months. Enter your own rates from a recent bill for an
            accurate result.
          </RatesDisclaimer>
        </CardContent>
      </Card>

      <div className="flex flex-col gap-5 lg:sticky lg:top-24 lg:self-start">
        <ResultCard
          resultKey={`${householdSize}-${propertyType}-${heatingType}-${annualElectricityKwh}-${annualGasKwh}-${annualOilLitres}-${electricityUnitRatePence}-${gasUnitRatePence}-${oilPricePencePerLitre}`}
        >
          <ResultStat label="Estimated annual bill" value={formatCurrency(result.annualBill, 2)} emphasis />
          <div className="mt-6 grid grid-cols-2 gap-6">
            <ResultStat label="Monthly cost" value={formatCurrency(result.monthlyBill, 2)} />
            <ResultStat label="Electricity" value={formatCurrency(result.electricityAnnualCost, 2)} />
            {heatingType === "gas" && (
              <ResultStat label="Gas" value={formatCurrency(result.gasAnnualCost, 2)} />
            )}
            {heatingType === "oil" && (
              <ResultStat label="Heating oil" value={formatCurrency(result.oilAnnualCost, 2)} />
            )}
          </div>
          <p className="mt-6 text-xs leading-relaxed text-muted-foreground">
            A typical medium-usage dual-fuel household, using Ofgem&apos;s
            reference consumption figures at these same unit rates, pays
            around {formatCurrency(result.typicalMediumUsageBill, 0)} a year,
            so your estimate is {result.aboveTypicalUsage ? "above" : "below"} that reference point.
          </p>
        </ResultCard>
      </div>
    </div>
  );
}
