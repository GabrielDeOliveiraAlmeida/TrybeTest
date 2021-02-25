import { formatNumber } from '..'

export const formatValue = (value: number): string => {
  if (Math.abs(value) >= 1000000000000) { return `${formatNumber((value / 1000000000000).toFixed(2))} Tri` }
  if (Math.abs(value) >= 1000000000) { return `${formatNumber((value / 1000000000).toFixed(2))} Bi` }
  if (Math.abs(value) >= 1000000) { return `${formatNumber((value / 1000000).toFixed(2))} Mi` }
  if (Math.abs(value) >= 1000) { return `${((value / 1000).toFixed(2))} Mil` }
  if (Number.isInteger(value)) { return String(value) }
  if (typeof (value) === 'number') return value.toFixed(2)
  return String(value)
}
