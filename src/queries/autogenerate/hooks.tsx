import * as Types from './operations'

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'

export const CountryNamesDocument = gql`
  query CountryNames {
    Country {
      _id
      name
      capital
      currencies {
        code
      }
    }
  }
`

/**
 * __useCountryNamesQuery__
 *
 * To run a query within a React component, call `useCountryNamesQuery` and pass it any options that fit your needs.
 * When your component renders, `useCountryNamesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCountryNamesQuery({
 *   variables: {
 *   },
 * });
 */
export function useCountryNamesQuery(
  baseOptions?: Apollo.QueryHookOptions<
    Types.CountryNamesQuery,
    Types.CountryNamesQueryVariables
  >
) {
  return Apollo.useQuery<
    Types.CountryNamesQuery,
    Types.CountryNamesQueryVariables
  >(CountryNamesDocument, baseOptions)
}
export function useCountryNamesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    Types.CountryNamesQuery,
    Types.CountryNamesQueryVariables
  >
) {
  return Apollo.useLazyQuery<
    Types.CountryNamesQuery,
    Types.CountryNamesQueryVariables
  >(CountryNamesDocument, baseOptions)
}
export type CountryNamesQueryHookResult = ReturnType<
  typeof useCountryNamesQuery
>
export type CountryNamesLazyQueryHookResult = ReturnType<
  typeof useCountryNamesLazyQuery
>
export type CountryNamesQueryResult = Apollo.QueryResult<
  Types.CountryNamesQuery,
  Types.CountryNamesQueryVariables
>
export const TimeZonesDocument = gql`
  query TimeZones($id: String) {
    Timezone(_id: $id) {
      _id
      name
      countries {
        name
        capital
      }
    }
  }
`

/**
 * __useTimeZonesQuery__
 *
 * To run a query within a React component, call `useTimeZonesQuery` and pass it any options that fit your needs.
 * When your component renders, `useTimeZonesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTimeZonesQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useTimeZonesQuery(
  baseOptions?: Apollo.QueryHookOptions<
    Types.TimeZonesQuery,
    Types.TimeZonesQueryVariables
  >
) {
  return Apollo.useQuery<Types.TimeZonesQuery, Types.TimeZonesQueryVariables>(
    TimeZonesDocument,
    baseOptions
  )
}
export function useTimeZonesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    Types.TimeZonesQuery,
    Types.TimeZonesQueryVariables
  >
) {
  return Apollo.useLazyQuery<
    Types.TimeZonesQuery,
    Types.TimeZonesQueryVariables
  >(TimeZonesDocument, baseOptions)
}
export type TimeZonesQueryHookResult = ReturnType<typeof useTimeZonesQuery>
export type TimeZonesLazyQueryHookResult = ReturnType<
  typeof useTimeZonesLazyQuery
>
export type TimeZonesQueryResult = Apollo.QueryResult<
  Types.TimeZonesQuery,
  Types.TimeZonesQueryVariables
>
