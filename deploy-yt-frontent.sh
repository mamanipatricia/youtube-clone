#!/bin/bash
# build
# cd youtube-clone
status=$(git status --porcelain)
if [[ -z $status && -e .env ]];
then
yarn build
cd build/
echo pattty.com > CNAME
surge
else
echo "cambios no guardados"
git status
exit 1;
fi
