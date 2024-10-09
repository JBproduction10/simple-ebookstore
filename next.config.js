/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
            'cdn.imagin.studio',
            "marketplace.canva.com",
            "d1csarkz8obe9u.cloudfront.net", 
            "edit.org",
            "designforwriters.com",
            "creativereview.imgix.net",
            "img0-placeit-net.s3-accelerate.amazonaws.com",
        ],
    },
    typescript:{
        ignoreBuildErrors: true,
    }
}

module.exports = nextConfig