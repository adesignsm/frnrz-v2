export default {
    name: "sizzleReel",
    type: "document",
    title: "Sizzle Reel",
    description: "Link a sizzle reel video (youtube)",
    fields: [
        {
            name: 'slice',
            title: 'Slice Title',
            type: 'string',
            description: 'A "Slice Title" is the title for this CMS feature.'
        },
        {
            name: "link",
            type: "url",
            title: "Video Upload Link",
            description: '*Note: Currently only supports YouTube links. Speak to your dev if you would like toa dd compatibility for more platforms.',
        }
    ]
}
