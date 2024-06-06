# UoW Frontend App

This is an web application for automating the installation of multiple software packages by creating shell scripts (`.sh`) and configuration files (`.config`), that include the
packages to install at a pinned version.

![](docs/preview_automation_dashboard.gif)

> [!NOTE]
>
> This repository was created within Azure DevOps and is now being mirrored to this GitHub [repository](https://github.com/kwame-mintah/nextjs-project-installation-dashboard).
> Source of truth will always be the Azure DevOps [repository](https://dev.azure.com/k-space/uow/_git/uow-frontend-app). Please see [Terraform](https://dev.azure.com/k-space/uow/_git/uow-infrastructure-terraform)[^1]
> repository for deploying the application to Azure Web Apps. Alternatively, if running locally the [Backend service][^2] must also be running to accept API requests.

## Roadmap

More work needs to be completed for the final version of the application. Below are additional things required for a clearer vision of what is envisioned of this application.

### Implement Next-Auth.js

Implement [Next-Auth.js](https://next-auth.js.org/getting-started/example) configured to the [Azure Active Directory](https://next-auth.js.org/providers/azure-ad), so only
authenticated users are able to access the dashboard, additionally sending their access token as part of the header to the backend service.

This will involve creating various [routes](https://next-auth.js.org/configuration/initialization#route-handlers-app), e.g. login, logout etc.

## Getting Started

1. First install the node packages for this project
   ```bash
   npm install
   ```
2. Next, run the development server
   ```bash
   npm run dev
   ```
3. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
4. You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

> Note: This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Environment variables

| Environment variable            | Description                                 | Default value | Required? |
| ------------------------------- | ------------------------------------------- | ------------- | --------- |
| NEXT_PUBLIC_BACKEND_SERVICE_URL | The endpoint to the backend RESTful service | N/A           | Yes       |

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## Deploy on Azure Web App

The easiest way to deploy the Next.js app is to use the [Azure Web App](https://azure.microsoft.com/en-gb/products/app-service/web/), this project has been configured to
automatically deploy changes made to the `master` branch to an environment variable, see `/azure-pipeline/azure-pipelines.yml` the following variables are required to be set.

### Pipeline variables

| Variable                        | Description                                               | Default value                                                | Required? |
| ------------------------------- | --------------------------------------------------------- | ------------------------------------------------------------ | --------- |
| azureSubscription               | The Azure Subscription that contains the Azure Web App    | N/A                                                          | Yes       |
| NEXT_PUBLIC_BACKEND_SERVICE_URL | The endpoint to the backend RESTful service               | N/A                                                          | Yes       |
| projectPoolName                 | The azure agent pool that the job will run on             | N/A                                                          | Yes       |
| reactStartUpCommand             | The start-up command to start the next.js web application | pm2 start /home/site/wwwroot/ecosystem.config.js --no-daemon | No        |
| webAppName                      | The name of the created Azure Web App                     | N/A                                                          | Yes       |

Checkout [Deploy to App Service using Azure Pipelines](https://learn.microsoft.com/en-us/azure/app-service/deploy-azure-pipelines?tabs=yaml) for more details.

[^1]: My Azure DevOps organisation / project is private, Terraform repository is mirrored [here](https://github.com/kwame-mintah/terraform-azure-aad-web-apps) in GitHub.
[^2]: My Azure DevOps organisation / project is private, FastAPI repository is mirrored [here](https://github.com/kwame-mintah/python-fastapi-create-installation-scripts) in GitHub.
