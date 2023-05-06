## SRML Diagrams for Miro

### Develop

Run locally:

```shell
npm install
npm start
open http://localhost:3000
```

In [Miro Settings](https://miro.com/app/settings/), go to "Your Apps" and "Create new app"

- Give a name for the app and select a developer team, and create the app
- Under "App URL" put http://localhost:3000
- Under permissions, check "boards:read" and "boards:write"
- Optionally choose and icon for the app
- Click "Install app and get OAuth token"
- Select the Miro team to install the app to, and add & allow

Open a Miro board within the team the app was installed to.

- The Miro toolbar will show the app icon
- If not seen, click the "More Apps" button to search for it

Build & deploy the app:

```shell
npm run build
open ./dist

scp -r ./dist username@host-machine:/deploy/path/to/app
```

### References

- [Miro developer documentation](https://developers.miro.com)
- [Vite documentation](https://vitejs.dev/guide/)
