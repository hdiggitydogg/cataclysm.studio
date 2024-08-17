### Steps for local development:
1. Pull latest code from Github: `git fetch && git pull origin master`
2. Install latest packages: `npm install`
3. Run vite server to view the project locally: `npm run dev`
4. Make code changes as required - they should automatically update in the browser

### Once ready to deploy:
5. Build the production site: `npm run build`
6. Add latest changes to git: `git add .`
7. Push changes to github: `git push origin master`
8. Github actions will deploy latest version to Github Pages: should take ~60s for the prod site to be updated
