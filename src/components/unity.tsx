interface FormatNumberOptions {
  decimals?: number;
  prefix?: string;
  suffix?: string;
}

export function formatNumber(
  value: number,
  options: FormatNumberOptions = {},
): string {
  const { decimals = 1, prefix = "", suffix = "" } = options;

  const format = (num: number, unit: string) =>
    `${prefix}${num.toFixed(decimals)}${unit}${suffix}`;

  if (value >= 1_000_000_000) return format(value / 1_000_000_000, "B");
  if (value >= 1_000_000) return format(value / 1_000_000, "M");
  if (value >= 1_000) return format(value / 1_000, "K");

  return `${prefix}${value}${suffix}`;
}
