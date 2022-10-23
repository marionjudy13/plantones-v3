import { plantListingFields } from "./plantListingFields";

export const plantDetails = `{
  "allPlants": *[_type == "plants" && slug.current != $plant] {
    ${plantListingFields}
  },
  "plantDetails": *[_type == "plants" && slug.current == $plant][0] {
    ${plantListingFields}
  }
}`;
