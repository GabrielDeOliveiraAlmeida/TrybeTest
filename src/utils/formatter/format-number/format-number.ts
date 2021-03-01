export const formatNumber = (value: string): string => {
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

export const numbersComma = (value: number): string => {
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
}
