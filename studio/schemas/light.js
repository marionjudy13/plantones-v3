export default {
  name: 'lightReq',
  type: 'document',
  title: 'Light Requirements',
  fields: [
    {
      name: 'lightType',
      type: 'string',
      title: 'Type of Light',
    },
    {
      name: 'lightDescription',
      type: 'string',
      title: 'Description',
    },
    {
      title: 'Example',
      name: 'example',
      type: 'image',
      options: {
        hotspot: true // <-- Defaults to false
      },
    },
],
}
