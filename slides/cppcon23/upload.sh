rm -r ./dist/
npm run build -- --base /talks/cppcon23/
npm run export
aws --profile touca s3 rm s3://touca.io/talks/cppcon23/ --recursive
aws --profile touca s3 sync ./dist/ s3://touca.io/talks/cppcon23/ --exclude "*" --include "*.html" --cache-control no-cache --content-type text/html
aws --profile touca s3 sync ./dist/ s3://touca.io/talks/cppcon23/ --exclude "*" --include "*.js" --cache-control no-cache --content-type text/javascript
aws --profile touca s3 sync ./dist/ s3://touca.io/talks/cppcon23/ --exclude "*" --include "*.css" --cache-control no-cache --content-type text/css
aws --profile touca s3 sync ./dist/ s3://touca.io/talks/cppcon23/ --exclude "*.html" --exclude "*.js" --exclude "*.css" --cache-control no-cache --no-guess-mime-type
aws --profile touca s3 cp ./images/cppcon-title-page.png s3://touca.io/talks/cppcon23/images/cppcon-title-page.png
