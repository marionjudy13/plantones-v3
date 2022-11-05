export default {
  name: 'plants',
  type: 'document',
  title: 'Plants',
  fields: [
    {
      name: 'commonName',
      type: 'string',
      title: 'Common Name',
    },
    {
  title: 'Slug',
  name: 'slug',
  type: 'slug',
  options: {
    source: 'commonName',
    maxLength: 200, // will be ignored if slugify is set
    slugify: input => input
                         .toLowerCase()
                         .replace(/\s+/g, '-')
                         .slice(0, 200)
  }
},
    {
      name: 'scientificName',
      type: 'string',
      title: 'Scientific Name',
    },
    {
      name: 'nicknames',
      type: 'string',
      title: 'Nicknames',
    },
    {
      title: 'Plant Image',
      name: 'plantImage',
      type: 'image',
      options: {
        hotspot: true // <-- Defaults to false
      },
    },
    {
      name: 'hexCode',
      type: 'string',
      title: 'Hex Code',
    },
    {
      name: 'pantone',
      type: 'string',
      title: 'Pantone',
    },
    {
      name: 'lightReq',
      type: 'string',
      title: 'Light Requirements',
      type: 'reference',
      to: [{type: 'lightReq'}]
    },
    {
      name: 'waterFreq',
      type: 'string',
      title: 'Water Frequency',
      type: 'reference',
      to: [{type: 'waterFreq'}]
    },
    {
      name: 'dirtPref',
      type: 'string',
      title: 'Dirt Preference',
      type: 'reference',
      to: [{type: 'dirtPref'}]
    },
    {
      name: 'toxicity',
      type: 'string',
      title: 'Can my cat eat it?',
      type: 'reference',
      to: [{type: 'toxicity'}]
    },
    {
      name: 'funFacts',
      title: 'Fun Facts',
      type: 'array', 
      of: [{type: 'block'}]
    },
  ],
}
