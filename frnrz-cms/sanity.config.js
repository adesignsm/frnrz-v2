import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemaTypes'
import { simplerColorInput } from 'sanity-plugin-simpler-color-input'

export default defineConfig({
  name: 'default',
  title: 'FRNRZ CMS',

  projectId: 'ufskghtn',
  dataset: 'production',

  plugins: [
    structureTool(), 
    visionTool(),
    simplerColorInput({
      enableSearch: true
    }),
  ],

  schema: {
    types: schemaTypes,
  },
})
