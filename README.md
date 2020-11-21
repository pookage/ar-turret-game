# AR Turret Game

## Building...

### ...for the first time

1. Ensure [Node.js](https://nodejs.org/en/) is installed globally
2. Open your terminal
3. Clone the repo with `git clone https://github.com/pookage/ar-turret-game.git`
4. Navigate to the folder and install dependencies with `npm install`

### ...for Development

1. run `npm run build-dev`
2. the site will auto-open in a new browser tab
3. any changes to `/src/` will trigger a hot-reload

### ...for Production

1. run `npm run build-prod`
2. the site will compile down and output files to `/dist/`
3. the contents of `/dist/` can then be uploaded to any static server as needed


## Branching Strategy

- The latest public stable build will always exist on `master`
- The latest stable dev build will exist on `dev`
- The latest progress on any given feature will exist on `milestone/###/issue-slug` where `###` is the no. for the issue on github.
- Bugfixes not associated with any milestone should be checked-out on a branch called `bugfix/###/issue-slug`
- Branches should always be created from the `dev` branch
- Branches should always be merged back-into `dev` via a pull-request
