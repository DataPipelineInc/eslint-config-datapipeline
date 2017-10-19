#!/bin/bash

# testing new rules updated from upstream(airbnb) for our project

GIT_REPO_NAME="$1"

if [[ $GIT_REPO_NAME == "" ]]; then
  echo "You need to pass an github repo name argument"
  exit 1
fi

TEMP_DIR="__temp__"

mkdir -p $TEMP_DIR

cd $TEMP_DIR

if [[ ! -d "$GIT_REPO_NAME" ]]; then
  git clone "git@github.com:DataPipelineInc/$GIT_REPO_NAME.git"
fi

cd $GIT_REPO_NAME
git pull

npm install
npm install --save-dev ../../

npm run lint
