export const plantListingFields = `
  _id,
  commonName,
  slug,
  dirtReq,
  geoOrigin,
  hexCode,
  pantone,
  lightReq -> {
    lightType,
    lightDescription,
    example
  },
  plantImage,
  scientificName,
  toxicity,
  funFacts
`;
