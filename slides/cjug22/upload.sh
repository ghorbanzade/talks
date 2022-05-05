rm -r ./dist/
yarn build --base /talks/cjug22/
yarn export --output dist/slides-cjug22-pejman.pdf
aws s3 rm s3://touca.io/talks/cjug22/ --recursive
aws s3 sync ./dist/ s3://touca.io/talks/cjug22/ --exclude "*" --include "*.html" --cache-control no-cache --content-type text/html
aws s3 sync ./dist/ s3://touca.io/talks/cjug22/ --exclude "*" --include "*.js" --cache-control no-cache --content-type text/javascript
aws s3 sync ./dist/ s3://touca.io/talks/cjug22/ --exclude "*" --include "*.css" --cache-control no-cache --content-type text/css
aws s3 sync ./dist/ s3://touca.io/talks/cjug22/ --exclude "*.html" --exclude "*.js" --exclude "*.css" --cache-control no-cache --no-guess-mime-type
