export interface FilterData {
  filter: FilterData.Model
  setNumericFilter: (newFilter: FilterData.ModelFilterNumber) => void
  setNameFilter: (newFilter: FilterData.ModeFilterName) => void
  removeFilter: (newFilter: FilterData.ModeFilterName) => void
}

export namespace FilterData {

  export type Model = {
    filters: ModelFilter

  }

  export type ModelFilter = {
    filterByName: ModeFilterName
    filterByNumericValues: ModelFilterNumber[]
  }

  export type ModeFilterName = {
    name: string
  }

  export type ModelFilterNumber = {
    column: string
    logicalOperator: LogicalOperator
    value: string
  }

  export enum LogicalOperator { 'maior que', 'menor que', 'igual a' }
}
