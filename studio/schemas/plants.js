export default {
  name: "plants",
  type: "document",
  title: "Plants",
  fields: [
    {
      name: "commonName",
      type: "string",
      title: "Common Name",
    },
    {
      title: "Slug",
      name: "slug",
      type: "slug",
      options: {
        source: "commonName",
        maxLength: 200, // will be ignored if slugify is set
        slugify: (input) =>
          input.toLowerCase().replace(/\s+/g, "-").slice(0, 200),
      },
    },
    {
      name: "scientificName",
      type: "string",
      title: "Scientific Name",
    },
    {
      name: "nicknames",
      type: "string",
      title: "Nicknames",
    },
    {
      title: "Plant Image",
      name: "plantImage",
      type: "image",
      options: {
        hotspot: true, // <-- Defaults to false
      },
    },
    {
      name: "hexCode",
      type: "string",
      title: "Hex Code",
    },
    {
      name: "pantone",
      type: "string",
      title: "Pantone",
    },
    {
      name: "lightReq",
      type: "string",
      title: "Light Requirements",
      type: "reference",
      to: [{ type: "lightReq" }],
    },
    {
      name: "waterFreq",
      type: "string",
      title: "Water Frequency",
      type: "reference",
      to: [{ type: "waterFreq" }],
    },
    {
      name: "waterNumber",
      title: "Water",
      type: "number",
      description:
        "1: Once Every 2-4 Weeks, 2: Once Every 2 Weeks, 3: Once a Week, 4: Twice a Week",
      validation: (Rule) => Rule.required().max(4).min(1),
    },
    {
      name: "lightNumber",
      title: "Light",
      type: "number",
      description: "1: Shade, 2: Partial Sun, 3: Indirect Sun, 4: Direct Sun",
      validation: (Rule) => Rule.required().max(4).min(1),
    },
    {
      name: "dirtPref",
      type: "string",
      title: "Dirt Preference",
      type: "reference",
      to: [{ type: "dirtPref" }],
    },
    {
      name: "toxicity",
      type: "string",
      title: "Can my cat eat it?",
      type: "reference",
      to: [{ type: "toxicity" }],
    },
    {
      name: "funFacts",
      title: "Fun Facts",
      type: "array",
      of: [{ type: "block" }],
    },
  ],
};
