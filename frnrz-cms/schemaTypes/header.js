export default {
    name: 'header',
    title: 'Header Content',
    type: 'document',
    fields: [
        {
            name: 'slice',
            title: 'Slice Title',
            type: 'string',
            description: 'A "Slice Title" is the title for this CMS feature.'
        },
        {
            name: 'navigation',
            title: 'Navigation Items',
            type: 'array',
            description: 'Create, update, and delete navigation items.',
            of: [{ 
                type: 'object',
                fields: [
                    {
                        name: 'title',
                        title: 'Navigation Title',
                        type: 'string',
                        description: 'The title of this navigation item which will appear when hovering.'
                    },
                    {
                        name: 'icon',
                        title: 'Navigation Icon',
                        type: 'image',
                        description: 'The icon attached to this navigation item.'
                    }
                ]
            }]
        },
        {
            name: 'logos',
            title: "Brand Logo's",
            type: 'array',
            description: 'Upload your logos here. These will be used in an animation.',
            of: [{ type: 'image' }]
        }
    ]
}