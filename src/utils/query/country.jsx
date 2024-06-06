import { gql } from "@apollo/client";

export const GET_COUNTRY = gql`
  query GetCountries {
    locations {
      id
      name
      description
      photo
    }
  }
`;