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
import { calculateBodyFatPercentage, type BodyFatSex } from "@/lib/calc/body-fat-percentage";
import { formatPercent } from "@/lib/format";

export function BodyFatPercentageCalculator() {
  const [sex, setSex] = React.useState<BodyFatSex>("male");
  const [heightCm, setHeightCm] = React.useState(178);
  const [neckCm, setNeckCm] = React.useState(38);
  const [waistCm, setWaistCm] = React.useState(85);
  const [hipCm, setHipCm] = React.useState(98);

  const result = React.useMemo(
    () => calculateBodyFatPercentage({ sex, heightCm, neckCm, waistCm, hipCm }),
    [sex, heightCm, neckCm, waistCm, hipCm]
  );

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
      <Card className="p-6 sm:p-8">
        <CardContent className="flex flex-col gap-6 p-0">
          <div className="flex flex-col gap-2">
            <Label htmlFor="bf-sex">Sex</Label>
            <Select value={sex} onValueChange={(v) => setSex(v as BodyFatSex)}>
              <SelectTrigger id="bf-sex" className="h-11 w-full text-base">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="male">Male</SelectItem>
                <SelectItem value="female">Female</SelectItem>
              </SelectContent>
            </Select>
            <p className="text-xs text-muted-foreground">The Navy method formula differs slightly between sexes</p>
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="bf-height">Height</Label>
            <div className="relative">
              <Input
                id="bf-height"
                type="number"
                min={100}
                step={1}
                value={heightCm}
                onChange={(e) => setHeightCm(Number(e.target.value) || 0)}
                className="h-11 pr-9 text-base"
              />
              <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-xs text-muted-foreground">cm</span>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="bf-neck">Neck circumference</Label>
            <div className="relative">
              <Input
                id="bf-neck"
                type="number"
                min={20}
                step={0.5}
                value={neckCm}
                onChange={(e) => setNeckCm(Number(e.target.value) || 0)}
                className="h-11 pr-9 text-base"
              />
              <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-xs text-muted-foreground">cm</span>
            </div>
            <p className="text-xs text-muted-foreground">Measure just below the larynx (Adam&apos;s apple)</p>
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="bf-waist">Waist circumference</Label>
            <div className="relative">
              <Input
                id="bf-waist"
                type="number"
                min={40}
                step={0.5}
                value={waistCm}
                onChange={(e) => setWaistCm(Number(e.target.value) || 0)}
                className="h-11 pr-9 text-base"
              />
              <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-xs text-muted-foreground">cm</span>
            </div>
            <p className="text-xs text-muted-foreground">
              {sex === "male" ? "Measure at the navel" : "Measure at the narrowest point"}
            </p>
          </div>

          {sex === "female" && (
            <div className="flex flex-col gap-2">
              <Label htmlFor="bf-hip">Hip circumference</Label>
              <div className="relative">
                <Input
                  id="bf-hip"
                  type="number"
                  min={40}
                  step={0.5}
                  value={hipCm}
                  onChange={(e) => setHipCm(Number(e.target.value) || 0)}
                  className="h-11 pr-9 text-base"
                />
                <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-xs text-muted-foreground">cm</span>
              </div>
              <p className="text-xs text-muted-foreground">Measure at the widest point</p>
            </div>
          )}
        </CardContent>
      </Card>

      <div className="flex flex-col gap-5 lg:sticky lg:top-24 lg:self-start">
        <ResultCard resultKey={`${sex}-${heightCm}-${neckCm}-${waistCm}-${hipCm}`}>
          <ResultStat label="Estimated body fat" value={formatPercent(result.bodyFatPercent)} emphasis />
          <div className="mt-6">
            <ResultStat label="General category" value={result.category} />
          </div>
        </ResultCard>

        <Card className="p-6">
          <CardContent className="p-0 text-sm text-muted-foreground">
            This is an estimate using tape measurements, not a medical or clinical measurement like DEXA
            scanning. Measuring technique affects accuracy, so measure at the same time of day and in the same
            way each time if you are tracking changes.
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
