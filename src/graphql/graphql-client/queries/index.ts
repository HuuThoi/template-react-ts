import { gql } from '@apollo/client';

export const QUERY_SPACESHIP_LIST = gql`
  query LaunchList {
    launches {
      flight_number
      mission_name
      launch_year
    }
  }
`;