interface ChartTimePeriod  {
  label: string;
  isDefault: boolean;
}

export const chartTimePeriods: ChartTimePeriod[] = [
  {
    label: '1d',
    isDefault: false,
  },
  {
    label: '1w',
    isDefault: true,
  },
  {
    label: '1m',
    isDefault: false,
  },
  {
    label: '3m',
    isDefault: false,
  },
  {
    label: '1y',
    isDefault: false,
  },
  {
    label: '5y',
    isDefault: false,
  }
];
