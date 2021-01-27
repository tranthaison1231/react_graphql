import * as Types from './schemas'

export type CountryNamesQueryVariables = Types.Exact<{ [key: string]: never }>

export type CountryNamesQuery = { __typename?: 'Query' } & {
  Country?: Types.Maybe<
    Array<
      Types.Maybe<
        { __typename?: 'Country' } & Pick<
          Types.Country,
          '_id' | 'name' | 'capital'
        > & {
            currencies?: Types.Maybe<
              Array<
                Types.Maybe<
                  { __typename?: 'Currency' } & Pick<Types.Currency, 'code'>
                >
              >
            >
          }
      >
    >
  >
}

export type TimeZonesQueryVariables = Types.Exact<{
  id?: Types.Maybe<Types.Scalars['String']>
}>

export type TimeZonesQuery = { __typename?: 'Query' } & {
  Timezone?: Types.Maybe<
    Array<
      Types.Maybe<
        { __typename?: 'Timezone' } & Pick<Types.Timezone, '_id' | 'name'> & {
            countries?: Types.Maybe<
              Array<
                Types.Maybe<
                  { __typename?: 'Country' } & Pick<
                    Types.Country,
                    'name' | 'capital'
                  >
                >
              >
            >
          }
      >
    >
  >
}
