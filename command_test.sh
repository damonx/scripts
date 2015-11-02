#!/bin/bash

CMD="command"

$CMD
if [ $? -eq 0 ];
  then
  echo "$CMD exectud successfully"
else
  echo "$CMD terminated unsuccessfully"
fi
