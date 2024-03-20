export default {
    name: 'about',
    title: 'About',
    type: 'document',
    fields: [
        {
            name: 'sliceTitle',
            title: 'Slice Title',
            type: 'string',
            description: 'A "Slice Title" is the title for this CMS feature.'
        },
        {
            name: 'aboutContent',
            title: 'About Paragraph',
            type: 'object',
            description: 'Add and update the about description in this section. Select a colour to highlight the first word.',
            fields: [
                {
                    name: 'title',
                    title: 'Title',
                    type: 'string',
                    description: 'The title of this paragraph.'
                },
                {
                    name: 'description',
                    title: 'Description',
                    type: 'text',
                    description: 'Enter your description for the "About Us" paragraph. NOTE* The first word of this paragraph will be highlighted with a colour of your choice.'
                },
                {
                    name: 'highlightColor',
                    title: 'Colour Selection',
                    type: 'simplerColor',
                    description: 'Select a colour for the first word of this description',
                }
            ]
        },
        {
            name: 'creativeVisionProcessContent',
            title: 'Creative Vision & Process Paragraph',
            type: 'object',
            description: 'Add and update the creative vision & process description in this section. Select a colour to highlight the first word.',
            fields: [
                {
                    name: 'title',
                    title: 'Title',
                    type: 'string',
                    description: 'The title of this paragraph.'
                },
                {
                    name: 'description',
                    title: 'Description',
                    type: 'text',
                    description: 'Enter your description for the "Creative Vision & Process" paragraph. NOTE* The first word of this paragraph will be highlighted with a colour of your choice.'
                },
                {
                    name: 'highlightColor',
                    title: 'Colour Selection',
                    type: 'simplerColor',
                    description: 'Select a colour for the first word of this description',
                }
            ]
        },
        {
            name: 'clientsContent',
            title: 'Clients Content',
            type: 'object',
            description: 'Add a title for this section as well as past & current client logos in this section',
            fields: [
                {
                    name: 'title',
                    title: 'Title',
                    type: 'string'
                },
                {
                    name: 'clients',
                    title: 'Clients',
                    type: 'array',
                    of: [{
                        name: 'logo',
                        title: 'Logo',
                        type: 'image'
                    }]
                }
            ]
        }
    ]
}