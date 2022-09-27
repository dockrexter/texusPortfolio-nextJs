import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: '658pmwv6',
  dataset: 'production',
  apiVersion: '2022-02-01',
  useCdn: true,
  token: 'skGuqvoXtKv0sB51vWbU3nxUaIErHHmeghlAALeGuJPmA4eW4vU9WJReU32RSWnVTjLupXIAeDKG0lqDDjhBreBcH3NWeM1Jfpk8y1cOCbBdx3AAOeI5leVfRVtKO3trbJPgV86OggcPLT4xXD4InKlbkCL7QlESG9nxD8vnq6ANNr9N2iYk',
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
