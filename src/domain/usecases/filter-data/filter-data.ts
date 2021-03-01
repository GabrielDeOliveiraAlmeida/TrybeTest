export interface FilterData {
  filter: FilterData.Model
  columnsFilter: FilterData.ModalColumnsFilter[]
  setNumericFilter: (newFilter: FilterData.ModelFilterNumber) => void
  setNameFilter: (newFilter: FilterData.ModeFilterName) => void
  removeFilter: (newFilter: FilterData.ModelFilterNumber) => void
  setColumnStatus: (newFilter: FilterData.ModelFilterNumber) => void
  setOrderBy: (newFilter: FilterData.ModelOrderBy) => void
}

export namespace FilterData {

  export type Model = {
    filters: ModelFilter

  }

  export type ModelFilter = {
    filterByName: ModeFilterName
    filterByNumericValues: ModelFilterNumber[]
    order: ModelOrderBy
  }

  export type ModelOrderBy = {
    column: string
    sort: ModelOrderBySort
  }

  export type ModelOrderBySort = 'ASC' | 'DESC'

  export type ModeFilterName = {
    name: string
  }

  export type ModelFilterNumber = {
    column: string
    logicalOperator: LogicalOperator
    value: string
  }

  export type ModalColumnsFilter = {
    name: string
    disable: boolean
  }

  export enum LogicalOperator { 'maior que', 'menor que', 'igual a' }
}
