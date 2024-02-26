export default {
    name: "video_reel",
    type: "document",
    title: "Video Reel",
    description: "Upload with caution, file size that is greater than 200mb may affect load times.",
    fields: [
        {
            name: "video_upload",
            type: "file",
            title: "Video Reel Upload",
            options: {
                accept: "video/mp4"
            }
        }
    ]
}
