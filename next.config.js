/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    reposGithubAPI: "https://api.github.com/users/kasvrol/repos",
    profileGithubAPI: "https://api.github.com/users/kasvrol"
  }
}

module.exports = nextConfig
