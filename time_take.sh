#!/bin/bash
# Filename: time_take.sh

start=$(date +%s)
#commands
ls -lart
date

#statements, if, loop

end=$(date +%s)
difference=$(( end - start ))
echo Time taken to excute commands is $difference seconds.
