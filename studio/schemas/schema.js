import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'
import plants from './plants'
import light from './light'
import water from './water'
import dirt from './dirt'
import toxicity from './toxicity'

export default createSchema({
  name: 'default',

  types: schemaTypes.concat([
    plants, light, water, dirt, toxicity
  ]),
})
