import { createClient } from 'next-sanity'

export const client = createClient({
  projectId: "lcjtzh5r",
  dataset: 'production',
  apiVersion: '2022-03-25',
  useCdn: false,
})