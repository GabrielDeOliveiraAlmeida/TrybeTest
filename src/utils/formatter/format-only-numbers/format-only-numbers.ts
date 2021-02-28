export const formatOnlyNumbers = (input: string): string => {
  return input.replace(/\D/g, '')
}
