"use client";

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { ResultCard, ResultStat } from "@/components/calculators/result-card";
import {
  percentageOf,
  whatPercent,
  percentageChange,
  applyPercentage,
} from "@/lib/calc/percentage";
import { formatNumber, formatPercent } from "@/lib/format";

export function PercentageCalculator() {
  const [mode, setMode] = React.useState("of");

  const [ofPercent, setOfPercent] = React.useState(20);
  const [ofValue, setOfValue] = React.useState(150);

  const [whatX, setWhatX] = React.useState(30);
  const [whatOf, setWhatOf] = React.useState(150);

  const [changeFrom, setChangeFrom] = React.useState(80);
  const [changeTo, setChangeTo] = React.useState(100);

  const [applyValue, setApplyValue] = React.useState(150);
  const [applyPercent, setApplyPercent] = React.useState(20);
  const [applyDirection, setApplyDirection] = React.useState<"increase" | "decrease">("increase");

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
      <Card className="p-6 sm:p-8">
        <CardContent className="p-0">
          <Tabs value={mode} onValueChange={setMode}>
            <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4">
              <TabsTrigger value="of">X% of Y</TabsTrigger>
              <TabsTrigger value="what">X is % of Y</TabsTrigger>
              <TabsTrigger value="change">% change</TabsTrigger>
              <TabsTrigger value="apply">+/&minus; %</TabsTrigger>
            </TabsList>

            <TabsContent value="of" className="mt-6 flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                <Label htmlFor="of-percent">Percentage</Label>
                <Input
                  id="of-percent"
                  type="number"
                  value={ofPercent}
                  onChange={(e) => setOfPercent(Number(e.target.value) || 0)}
                  className="h-11 text-base"
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="of-value">Of value</Label>
                <Input
                  id="of-value"
                  type="number"
                  value={ofValue}
                  onChange={(e) => setOfValue(Number(e.target.value) || 0)}
                  className="h-11 text-base"
                />
              </div>
            </TabsContent>

            <TabsContent value="what" className="mt-6 flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                <Label htmlFor="what-x">Value (X)</Label>
                <Input
                  id="what-x"
                  type="number"
                  value={whatX}
                  onChange={(e) => setWhatX(Number(e.target.value) || 0)}
                  className="h-11 text-base"
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="what-of">Out of (Y)</Label>
                <Input
                  id="what-of"
                  type="number"
                  value={whatOf}
                  onChange={(e) => setWhatOf(Number(e.target.value) || 0)}
                  className="h-11 text-base"
                />
              </div>
            </TabsContent>

            <TabsContent value="change" className="mt-6 flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                <Label htmlFor="change-from">From</Label>
                <Input
                  id="change-from"
                  type="number"
                  value={changeFrom}
                  onChange={(e) => setChangeFrom(Number(e.target.value) || 0)}
                  className="h-11 text-base"
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="change-to">To</Label>
                <Input
                  id="change-to"
                  type="number"
                  value={changeTo}
                  onChange={(e) => setChangeTo(Number(e.target.value) || 0)}
                  className="h-11 text-base"
                />
              </div>
            </TabsContent>

            <TabsContent value="apply" className="mt-6 flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                <Label htmlFor="apply-value">Value</Label>
                <Input
                  id="apply-value"
                  type="number"
                  value={applyValue}
                  onChange={(e) => setApplyValue(Number(e.target.value) || 0)}
                  className="h-11 text-base"
                />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="apply-percent">Percentage</Label>
                <Tabs
                  value={applyDirection}
                  onValueChange={(v) => setApplyDirection(v as "increase" | "decrease")}
                >
                  <TabsList>
                    <TabsTrigger value="increase">Add</TabsTrigger>
                    <TabsTrigger value="decrease">Subtract</TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>
              <Input
                id="apply-percent"
                type="number"
                value={applyPercent}
                onChange={(e) => setApplyPercent(Number(e.target.value) || 0)}
                className="h-11 text-base"
              />
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      <div className="flex flex-col gap-5 lg:sticky lg:top-24 lg:self-start">
        {mode === "of" && (
          <ResultCard resultKey={`of-${ofPercent}-${ofValue}`}>
            <ResultStat
              label={`${formatNumber(ofPercent)}% of ${formatNumber(ofValue)}`}
              value={formatNumber(percentageOf(ofPercent, ofValue), 2)}
              emphasis
            />
          </ResultCard>
        )}
        {mode === "what" && (
          <ResultCard resultKey={`what-${whatX}-${whatOf}`}>
            <ResultStat
              label={`${formatNumber(whatX)} is what % of ${formatNumber(whatOf)}`}
              value={formatPercent(whatPercent(whatX, whatOf), 2)}
              emphasis
            />
          </ResultCard>
        )}
        {mode === "change" && (
          <ResultCard resultKey={`change-${changeFrom}-${changeTo}`}>
            <ResultStat
              label={
                percentageChange(changeFrom, changeTo) >= 0 ? "Percentage increase" : "Percentage decrease"
              }
              value={formatPercent(Math.abs(percentageChange(changeFrom, changeTo)), 2)}
              emphasis
              positive={percentageChange(changeFrom, changeTo) >= 0}
            />
          </ResultCard>
        )}
        {mode === "apply" && (
          <ResultCard resultKey={`apply-${applyValue}-${applyPercent}-${applyDirection}`}>
            <ResultStat
              label={`${formatNumber(applyValue)} ${applyDirection === "increase" ? "+" : "−"} ${formatNumber(applyPercent)}%`}
              value={formatNumber(applyPercentage(applyValue, applyPercent, applyDirection), 2)}
              emphasis
            />
          </ResultCard>
        )}
      </div>
    </div>
  );
}
