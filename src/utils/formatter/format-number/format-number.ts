export const formatNumber = (value: string): string => {
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}
