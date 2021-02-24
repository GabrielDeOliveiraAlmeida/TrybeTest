export interface LoadData {
  loadData: (params: LoadData.Params) => Promise<LoadData.Model[]>
}

export namespace LoadData {

  export type Params = {
    page?: number
  }

  export type Model = {
    name: string
    rotation_period: number
    orbital_period: number
    diameter: number
    climate: string
    gravity: string
    terrain: string
    surface_water: number
    population: number
    residents: string[]
  }
}
