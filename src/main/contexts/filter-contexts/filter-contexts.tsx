import { FilterData } from '@/domain/usecases/filter-data/filter-data'

import React, {
  createContext,
  ReactNode,
  useState
} from 'react'

type FilterContextProps = {
  children: ReactNode
}

export const FilterContext = createContext<FilterData>(
  {} as FilterData
)

export const FilterProvider: React.FC<FilterContextProps> = (props: FilterContextProps) => {
  const { children } = props

  const [columnsFilter, setColumnsFilter] = useState<FilterData.ModalColumnsFilter[]>([
    { disable: false, name: 'population' },
    { disable: false, name: 'orbital_period' },
    { disable: false, name: 'diameter' },
    { disable: false, name: 'rotation_period' },
    { disable: false, name: 'surface_water' }
  ])

  const [filter, setFilters] = useState<FilterData.Model>({
    filters: {
      filterByName: {
        name: ''
      },
      filterByNumericValues: [
      ],
      order: {
        column: 'name',
        sort: 'ASC'
      }
    }
  })

  const setOrderBy = (order: FilterData.ModelOrderBy): void => {
    filter.filters.order.column = order.column
    filter.filters.order.sort = order.sort
    setFilters({ ...filter })
  }

  const setColumnStatus = (newFilter: FilterData.ModelFilterNumber): void => {
    const newColumns = columnsFilter.map(elem => {
      if (newFilter.column === elem.name) elem.disable = !elem.disable
      return elem
    })
    setColumnsFilter([...newColumns])
  }

  const setNameFilter = (newFilter: FilterData.ModeFilterName): void => {
    filter.filters.filterByName.name = newFilter.name
    setFilters({ ...filter })
  }

  const setNumericFilter = (newFilter: FilterData.ModelFilterNumber): void => {
    filter.filters.filterByNumericValues.push(newFilter)
    setFilters({ ...filter })
  }

  const removeFilter = (newFilter: FilterData.ModelFilterNumber): void => {
    const result = filter
      .filters
      .filterByNumericValues
      .filter((item: FilterData.ModelFilterNumber) =>
        item.column !== newFilter.column
      )
    filter.filters.filterByNumericValues = result
    setFilters({ ...filter })
  }

  return (
    <FilterContext.Provider
        value={{
          filter,
          columnsFilter,
          setNameFilter,
          setNumericFilter,
          removeFilter,
          setColumnStatus,
          setOrderBy
        }}
    >
      { children }
    </FilterContext.Provider>
  )
}

export default { FilterContext, FilterProvider }
