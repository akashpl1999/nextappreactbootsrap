/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  redirects:async ()=>{
    return[
      {
        source:'/about',
        destination:'/',
        permanent:true  /// what you  wish to do 
      }
    ]
  }
}

module.exports = nextConfig
