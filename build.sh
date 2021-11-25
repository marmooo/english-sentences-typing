cp -r graded-enja-corpus/dist/* src/data
mkdir -p docs
cp -r src/* docs
minify -r src -o docs

