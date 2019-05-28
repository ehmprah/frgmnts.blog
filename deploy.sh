#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd docs/.vuepress/dist

# if you are deploying to a custom domain
echo 'frgmnts.blog' > CNAME

git init
git add -A
git commit -m 'deploy'

git push -f https://github.com/ehmprah/frgmnts.blog.git master:gh-pages

cd -