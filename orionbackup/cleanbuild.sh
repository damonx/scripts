#!/bin/bash
echo "Cleanning the ivy cache"
rm -rf ~/.ivy2/*
CURRENTDIR=`pwd`;
directories=(health-common-esp adapter-allergy-esp adapter-encounter-esp adapter-genericproblem-esp adapter-procedure-esp adapter-results-esp immunization-esp health-esp-dev )

for dir in "${directories[@]}"
do
  echo "------------------------ Building in $dir ------------------------";
  cd $dir;
  git pull;
  ant -f build-bootstrap.xml && python top-level.py -Divy.publish.resolver=local clean build publish;
  echo "------------------------ Building in $dir is done ------------------------";
  cd $CURRENTDIR;
done

echo "DONE!! :---------)"
