import { formatNumber } from '..'

export const formatValue = (value: number | string): string => {
  const testValue = Number(value)
  if (!Number.isNaN(testValue)) {
    if (Math.abs(testValue) >= 1000000000000) { return `${formatNumber((testValue / 1000000000000).toFixed(2))} Tri` }
    if (Math.abs(testValue) >= 1000000000) { return `${formatNumber((testValue / 1000000000).toFixed(2))} Bi` }
    if (Math.abs(testValue) >= 1000000) { return `${formatNumber((testValue / 1000000).toFixed(2))} Mi` }
    if (Math.abs(testValue) >= 1000) { return `${((testValue / 1000).toFixed(2))} Mil` }
    if (Number.isInteger(testValue)) { return String(testValue) }
    return testValue.toFixed(2)
  }
  const date = new Date(value)
  if (!Number.isNaN(date.getTime())) { return `${date.toLocaleDateString()} ${date.toLocaleTimeString()}` }
  return String(value)
}
