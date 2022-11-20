export const plantListingFields = `
  _id,
  commonName,
  slug,
  scientificName,
  nicknames,
  plantImage,
  hexCode,
  lightNumber, 
  waterNumber,
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
