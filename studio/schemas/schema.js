import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'
import plants from './plants'
import light from './light'

export default createSchema({
  name: 'default',

  types: schemaTypes.concat([
    plants, light
  ]),
})
