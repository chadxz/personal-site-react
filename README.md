personal-site-react
===================

rewrite of personal site using react + webpack. This is the 4th rewrite... the progression so far has been:

 - [jQuery only](https://github.com/chadxz/chadmcelligott.com)
 - [Backbone.js and AMD](https://github.com/chadxz/personal-site-rewrite/tree/master)
 - [Backbone.js and Webpack](https://github.com/chadxz/personal-site-rewrite/tree/webpack)
 - this project. React and Webpack

In the future, I plan to add some websockets functionality to dynamically display new entries without reloading the page.

### to run

```sh
npm install
npm start
```

### to deploy to github pages
This isn't really the best process, but it works and I can't be bothered to look into making it better right now.

```sh
rm -rf app-dist
git clone https://github.com/chadxz/chadxz.github.io.git app-dist
npm run build
cd app-dist
git add -A
git commit -m "new stuff"
git push
```
