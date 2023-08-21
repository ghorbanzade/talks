rm -r ./dist/
npm run build -- --base /talks/cppcon21/
npm run export
mv slides-export.pdf dist/slides-cppcon21-pejman.pdf
aws --profile touca s3 rm s3://touca.io/talks/cppcon21/ --recursive
aws --profile touca s3 sync ./dist/ s3://touca.io/talks/cppcon21/ --exclude "*" --include "*.html" --cache-control no-cache --content-type text/html
aws --profile touca s3 sync ./dist/ s3://touca.io/talks/cppcon21/ --exclude "*" --include "*.js" --cache-control no-cache --content-type text/javascript
aws --profile touca s3 sync ./dist/ s3://touca.io/talks/cppcon21/ --exclude "*" --include "*.css" --cache-control no-cache --content-type text/css
aws --profile touca s3 sync ./dist/ s3://touca.io/talks/cppcon21/ --exclude "*.html" --exclude "*.js" --exclude "*.css" --cache-control no-cache --no-guess-mime-type
