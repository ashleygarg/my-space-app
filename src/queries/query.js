import { gql } from "@apollo/client";

export const launchesPast = gql`
query launchesPast($limit: Int!){
    launchesPast(limit: $limit) {
      mission_name
      id
      launch_date_local
      launch_site {
        site_name_long
      }
      links {
        article_link
        video_link
      }
      rocket {
        rocket_name
        rocket_type
      fairings {
        reused
      }
      }
      ships {
        name
        type
        id
        active
        home_port
        image
      }
    }
  }
`;

