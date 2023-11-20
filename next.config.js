/** @type {import('next').NextConfig} */
const nextConfig = {
    //Т.к. я не знаю, какие домены будут у изображений получаемых с бэка, разрешаю все варианты:
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "**",
            },
        ],
    },
};

module.exports = nextConfig;
