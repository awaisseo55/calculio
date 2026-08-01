"use client";

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ResultCard, ResultStat } from "@/components/calculators/result-card";
import { RatesDisclaimer } from "@/components/calculators/rates-disclaimer";
import {
  calculateElectricCarRunningCost,
  DEFAULT_EV_VED,
} from "@/lib/calc/electric-car-running-cost";
import { formatCurrency, formatNumber } from "@/lib/format";

export function ElectricCarRunningCostCalculator() {
  const [annualMileage, setAnnualMileage] = React.useState(8000);
  const [milesPerKwh, setMilesPerKwh] = React.useState(3.5);
  const [homeElectricityPencePerKwh, setHomeElectricityPencePerKwh] = React.useState(25.7);
  const [percentChargedAtHome, setPercentChargedAtHome] = React.useState(80);
  const [publicChargingPencePerKwh, setPublicChargingPencePerKwh] = React.useState(60);
  const [annualInsurance, setAnnualInsurance] = React.useState(650);
  const [annualServicing, setAnnualServicing] = React.useState(150);
  const [annualVed, setAnnualVed] = React.useState(DEFAULT_EV_VED);
  const [petrolMpg, setPetrolMpg] = React.useState(40);
  const [petrolPricePerLitre, setPetrolPricePerLitre] = React.useState(1.5);
  const [evVsPetrolPriceDifference, setEvVsPetrolPriceDifference] = React.useState(3000);

  const result = React.useMemo(
    () =>
      calculateElectricCarRunningCost({
        annualMileage,
        milesPerKwh,
        homeElectricityPencePerKwh,
        percentChargedAtHome,
        publicChargingPencePerKwh,
        annualInsurance,
        annualServicing,
        annualVed,
        petrolMpg,
        petrolPricePerLitre,
        evVsPetrolPriceDifference,
      }),
    [
      annualMileage,
      milesPerKwh,
      homeElectricityPencePerKwh,
      percentChargedAtHome,
      publicChargingPencePerKwh,
      annualInsurance,
      annualServicing,
      annualVed,
      petrolMpg,
      petrolPricePerLitre,
      evVsPetrolPriceDifference,
    ]
  );

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
      <Card className="p-6 sm:p-8">
        <CardContent className="flex flex-col gap-6 p-0">
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <Label htmlFor="ev-mileage">Annual mileage</Label>
              <Input
                id="ev-mileage"
                type="number"
                min={0}
                step={500}
                value={annualMileage}
                onChange={(e) => setAnnualMileage(Number(e.target.value) || 0)}
                className="h-11 text-base"
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="ev-efficiency">Efficiency (miles per kWh)</Label>
              <Input
                id="ev-efficiency"
                type="number"
                min={2}
                max={5}
                step={0.1}
                value={milesPerKwh}
                onChange={(e) => setMilesPerKwh(Number(e.target.value) || 0)}
                className="h-11 text-base"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <Label htmlFor="ev-home-rate">Home electricity rate (p/kWh)</Label>
              <Input
                id="ev-home-rate"
                type="number"
                min={0}
                step={0.1}
                value={homeElectricityPencePerKwh}
                onChange={(e) => setHomeElectricityPencePerKwh(Number(e.target.value) || 0)}
                className="h-11 text-base"
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="ev-public-rate">Public charging rate (p/kWh)</Label>
              <Input
                id="ev-public-rate"
                type="number"
                min={0}
                step={0.1}
                value={publicChargingPencePerKwh}
                onChange={(e) => setPublicChargingPencePerKwh(Number(e.target.value) || 0)}
                className="h-11 text-base"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="ev-home-percent">Charged at home (%)</Label>
            <Input
              id="ev-home-percent"
              type="number"
              min={0}
              max={100}
              step={5}
              value={percentChargedAtHome}
              onChange={(e) => setPercentChargedAtHome(Number(e.target.value) || 0)}
              className="h-11 text-base"
            />
            <p className="text-xs text-muted-foreground">
              The rest is assumed to be charged at public chargepoints, which
              are usually more expensive per kWh than charging at home
              overnight.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="flex flex-col gap-2">
              <Label htmlFor="ev-insurance">Annual insurance</Label>
              <div className="relative">
                <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">£</span>
                <Input
                  id="ev-insurance"
                  type="number"
                  min={0}
                  step={10}
                  value={annualInsurance}
                  onChange={(e) => setAnnualInsurance(Number(e.target.value) || 0)}
                  className="h-11 pl-7 text-base"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="ev-servicing">Annual servicing</Label>
              <div className="relative">
                <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">£</span>
                <Input
                  id="ev-servicing"
                  type="number"
                  min={0}
                  step={10}
                  value={annualServicing}
                  onChange={(e) => setAnnualServicing(Number(e.target.value) || 0)}
                  className="h-11 pl-7 text-base"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="ev-ved">Annual VED</Label>
              <div className="relative">
                <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">£</span>
                <Input
                  id="ev-ved"
                  type="number"
                  min={0}
                  step={5}
                  value={annualVed}
                  onChange={(e) => setAnnualVed(Number(e.target.value) || 0)}
                  className="h-11 pl-7 text-base"
                />
              </div>
            </div>
          </div>
          <p className="-mt-4 text-xs text-muted-foreground">
            Since 1 April 2025, electric cars pay road tax (VED) on the same
            basis as petrol and diesel cars, so this is no longer £0 by
            default.
          </p>

          <div className="grid grid-cols-2 gap-4 border-t border-border/60 pt-6">
            <div className="flex flex-col gap-2">
              <Label htmlFor="ev-petrol-mpg">Equivalent petrol car MPG</Label>
              <Input
                id="ev-petrol-mpg"
                type="number"
                min={1}
                step={1}
                value={petrolMpg}
                onChange={(e) => setPetrolMpg(Number(e.target.value) || 0)}
                className="h-11 text-base"
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="ev-petrol-price">Petrol price (per litre)</Label>
              <div className="relative">
                <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">£</span>
                <Input
                  id="ev-petrol-price"
                  type="number"
                  min={0}
                  step={0.01}
                  value={petrolPricePerLitre}
                  onChange={(e) => setPetrolPricePerLitre(Number(e.target.value) || 0)}
                  className="h-11 pl-7 text-base"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="ev-price-diff">
              EV price premium vs petrol (optional, for payback)
            </Label>
            <div className="relative">
              <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">£</span>
              <Input
                id="ev-price-diff"
                type="number"
                min={0}
                step={100}
                value={evVsPetrolPriceDifference}
                onChange={(e) => setEvVsPetrolPriceDifference(Number(e.target.value) || 0)}
                className="h-11 pl-7 text-base"
              />
            </div>
          </div>

          <RatesDisclaimer>
            Figures use illustrative default electricity rates, insurance and
            servicing costs, since these vary by supplier, tariff, postcode
            and car model. Adjust any field to match your own quotes for a
            more accurate estimate.
          </RatesDisclaimer>
        </CardContent>
      </Card>

      <div className="flex flex-col gap-5 lg:sticky lg:top-24 lg:self-start">
        <ResultCard
          resultKey={`${annualMileage}-${milesPerKwh}-${homeElectricityPencePerKwh}-${percentChargedAtHome}-${publicChargingPencePerKwh}-${annualInsurance}-${annualServicing}-${annualVed}-${petrolMpg}-${petrolPricePerLitre}-${evVsPetrolPriceDifference}`}
        >
          <ResultStat label="Annual running cost" value={formatCurrency(result.annualRunningCostTotal, 0)} emphasis />
          <div className="mt-6 grid grid-cols-2 gap-6">
            <ResultStat label="Monthly cost" value={formatCurrency(result.monthlyRunningCostTotal, 2)} />
            <ResultStat label="Cost per mile" value={`${formatNumber(result.costPerMile * 100, 1)}p`} />
            <ResultStat label="Annual electricity cost" value={formatCurrency(result.annualElectricityCost, 0)} />
            <ResultStat
              label="Fuel savings vs petrol, per year"
              value={formatCurrency(result.annualFuelSavingsVsPetrol, 0)}
              positive={result.annualFuelSavingsVsPetrol >= 0}
            />
          </div>
          <p className="mt-6 text-xs leading-relaxed text-muted-foreground">
            An equivalent {formatNumber(petrolMpg, 0)}mpg petrol car covering
            the same {formatNumber(annualMileage, 0)} miles a year would cost
            around {formatCurrency(result.equivalentPetrolAnnualFuelCost, 0)}{" "}
            in fuel alone, at {formatCurrency(petrolPricePerLitre, 2)} a
            litre.
            {result.paybackYears !== null && (
              <>
                {" "}
                Based on your fuel savings, a {formatCurrency(evVsPetrolPriceDifference, 0)}{" "}
                price premium would pay back in around{" "}
                {formatNumber(result.paybackYears, 1)} years.
              </>
            )}
          </p>
        </ResultCard>
      </div>
    </div>
  );
}
