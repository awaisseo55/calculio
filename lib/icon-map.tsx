import {
  Landmark,
  Receipt,
  Car,
  HeartPulse,
  Home,
  Sparkles,
  FileText,
  Wallet,
  Percent,
  Fuel,
  Baby,
  Cake,
  type LucideIcon,
} from "lucide-react";

export const iconMap: Record<string, LucideIcon> = {
  Landmark,
  Receipt,
  Car,
  HeartPulse,
  Home,
  Sparkles,
  FileText,
  Wallet,
  Percent,
  Fuel,
  Baby,
  Cake,
};

export function getIcon(name: string): LucideIcon {
  return iconMap[name] ?? Sparkles;
}
