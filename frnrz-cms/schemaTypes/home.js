export default {
    name: 'home',
    title: 'Home',
    type: 'document',
    fields: [
        {
            name: 'slice',
            title: 'Slice Title',
            type: 'string',
            description: 'A "Slice Title" is the title for this CMS feature.'
        },
        {
            name: 'quote',
            title: 'Quote',
            type: 'text',
            description: 'The quote that will appear on the home page.'
        },
        {
            name: 'backgroundImage',
            title: 'Background Image (optional)',
            type: 'image',
            description: 'Option to apply an image that will appear behind the quote.',
        }
    ]
}