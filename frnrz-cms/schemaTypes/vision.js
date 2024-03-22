export default {
    name: 'vision',
    title: 'Vision',
    type: 'document',
    fields: [
        {
            name: 'sliceTitle',
            title: 'Slice Title',
            type: 'string',
            description: 'A "Slice Title" is the title for this CMS feature.'
        },
        {
            name: 'visionContent',
            title: 'Vision Content',
            type: 'object',
            description: 'Edit the title and secription for the Vision page.',
            fields: [
                {
                    name: 'title',
                    title: 'Title',
                    type: 'string'
                },
                {
                    name: 'description',
                    title: 'Description',
                    type: 'array',
                    of: [{
                        type: 'block'
                    }]
                }
            ]
        }
    ]
}