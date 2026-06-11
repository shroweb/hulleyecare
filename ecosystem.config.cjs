module.exports = {
  apps: [
    {
      name: "vision-plus",
      script: ".output/server/index.mjs",
      cwd: __dirname,
      watch: false,
      instances: 1,
      autorestart: true,
      env: {
        NODE_ENV: "production",
        PORT: 3000,
      },
    },
  ],
};
