import { request, gql } from "graphql-request";

const graphqlAPI = process.env.GRAPHCMS_ENDPOINT;

const getTrainingGallery = async () => {
  const query = gql`
    query GetTraineeGallery {
      traineeGalleries {
        traineePhoto {
          url
        }
      }
    }
  `;

  try {
    const response = await request(graphqlAPI, query);
    return response.traineeGalleries;
  } catch (error) {
    console.error("Error fetching timer:", error);
  }
};

export default getTrainingGallery;
