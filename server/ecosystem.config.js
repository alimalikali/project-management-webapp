module.exports = {
  apps: [
    {
      name: "project-management-webapp",
      script: "npm",
      args: "run dev",
      env: {
        NODE_ENV: "development",
      },
    },
  ],
};
