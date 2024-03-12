export default {
    name: 'services',
    title: 'Services',
    type: 'document',
    fields: [
        {
            name: 'sliceTitle',
            title: 'Slice Title',
            type: 'string',
            description: 'A "Slice Title" is the title for this CMS feature.'
        },
        {
            name: 'services',
            title: 'Services',
            type: 'array',
            description: 'Add service items here.',
            of: [{
                name: 'service',
                title: 'Service Block',
                description: "Your service blocks's contain the service title as well as its sub services.",
                type: 'object',
                fields: [
                    {
                        name: 'title',
                        title: 'Service Name',
                        type: 'string',
                        description: 'The name of this service'
                    },
                    {
                        name: 'children',
                        title: 'Sub Service',
                        type: 'array',
                        of: [{
                            type: 'object',
                            fields: [
                                {
                                    name: 'title',
                                    title: 'Sub Service Title',
                                    type: 'string'
                                },
                                {
                                    name: 'children',
                                    title: 'Sub Services',
                                    description: '*NOTE* Leave empty if there are no sub sets of services.',
                                    type: 'array',
                                    of: [{
                                        type: 'string'
                                    }]
                                }
                            ]
                        }]
                    }
                ]
            }]
        },
        {
            name: 'backgroundImageToggle',
            title: 'Background Image Toggle',
            description: 'Upload and toggle the background image for the seervices page.',
            type: 'object',
            fields: [
                {
                    name: 'image',
                    title: 'Background Image',
                    type: 'image'
                },
                {
                    name: 'toggle',
                    type: 'boolean',
                    title: 'Toggle'
                }
            ]
        }
    ]
}