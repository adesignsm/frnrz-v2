import sanityClient from "@sanity/client";

export default sanityClient({
    projectId: 'ufskghtn',
    dataset: 'production',
    apiVersion: "2023-02-14",
    useCdn: true
});