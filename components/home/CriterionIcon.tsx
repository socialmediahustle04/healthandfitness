"use client";

import {
  ArrowCounterClockwise,
  HandTap,
  Microscope,
  Receipt,
  ShieldCheck,
  WarningDiamond,
  type Icon
} from "@phosphor-icons/react";

const icons: Record<string, Icon> = {
  evidence: Microscope,
  safety: ShieldCheck,
  cost: Receipt,
  ease: HandTap,
  refund: ArrowCounterClockwise,
  flags: WarningDiamond
};

export function CriterionIcon({ name }: { name: string }) {
  const IconComponent = icons[name] ?? Microscope;

  return (
    <span className="criterion-icon" aria-hidden="true">
      <IconComponent size={22} weight="duotone" />
    </span>
  );
}
