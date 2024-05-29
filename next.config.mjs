/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns : [
            {
                protocol:'https',
                hostname: 'holywagyumeats.com',
            },
            {
                protocol:'https',
                hostname: 'scontent.fmel10-1.fna.fbcdn.net',
            },
            {
                protocol:'https',
                hostname: 'static.wixstatic.com',
            },
        ]
    }
};

export default nextConfig;
