module.exports = {
  apps: [
    {
      name: "builder-grayzone",
      script: "npm",
      args: "run prod",
      env: {
        NODE_ENV: "production",
      },
    },
  ],
};
