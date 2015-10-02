#!/bin/bash

if [ $UID -ne 0 ]; then
  echo Non root user. Please run as root.
  exit -1
else
  echo "Root user"
  echo "Welcome!"
fi
