export const plantListingFields = `
  _id,
  commonName,
  slug,
  scientificName,
  nicknames,
  plantImage,
  hexCode,
  pantone,
  lightReq -> {
    lightType,
  },
  waterFreq -> {
    waterFreq,
  },
  dirtPref -> {
    dirtPref,
  },
  toxicity,
  funFacts
`;
