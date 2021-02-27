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

  const [filter, setFilters] = useState<FilterData.Model>({
    filters: {
      filterByName: {
        name: ''
      },
      filterByNumericValues: [
      ]
    }
  })

  const setNameFilter = (newFilter: FilterData.ModeFilterName): void => {
    filter.filters.filterByName.name = newFilter.name
    setFilters({ ...filter })
  }

  const setNumericFilter = (newFilter: FilterData.ModelFilterNumber): void => {
    filter.filters.filterByNumericValues.push(newFilter)
    setFilters({ ...filter })
  }

  const removeFilter = (newFilter: FilterData.ModeFilterName): void => {
    const result = filter
      .filters
      .filterByNumericValues
      .filter((item: FilterData.ModelFilterNumber) =>
        item.column !== newFilter.name
      )
    filter.filters.filterByNumericValues = result
    setFilters({ ...filter })
  }

  return (
    <FilterContext.Provider
        value={{
          filter,
          setNameFilter,
          setNumericFilter,
          removeFilter
        }}
    >
      { children }
    </FilterContext.Provider>
  )
}

export default { FilterContext, FilterProvider }
