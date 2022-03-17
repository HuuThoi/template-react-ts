import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import { QUERY_SPACESHIP_LIST } from '../graphql-client/queries'


export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };

const defaultOptions = {}

/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
    ID: string;
    String: string;
    Boolean: boolean;
    Int: number;
    Float: number;
    /** The `Upload` scalar type represents a file upload. */
    Upload: any;
};

export type LaunchListQueryVariables = Exact<{
    [key: string]: never;
}>;

export type LaunchListQuery = {
    __typename?: 'Query',
    launches?: Maybe<Array<Maybe<{
        __typename?: 'Launch',
        flight_number?: Maybe<number>,
        mission_name?: Maybe<string>,
        launch_year?: Maybe<number>
    }>>>
};

export function useLaunchListQuery(baseOptions?: Apollo.QueryHookOptions<LaunchListQuery, LaunchListQueryVariables>) {
    const options = { ...defaultOptions, ...baseOptions }
    return Apollo.useQuery<LaunchListQuery, LaunchListQueryVariables>(QUERY_SPACESHIP_LIST, options);
}
