#!/bin/bash
#Filename: clock-40sec.sh
echo -n Count:
#Store the position of the cursor
tput sc

count=0
while true;
do
  if [ $count -lt 40 ];
    then let count++;
    sleep 1;
    #Restore the position of the cursor
    tput rc
    #Purge the characters from current cursor position to the end of the line
    tput ed
    echo -n $count
  else exit 0;
  fi
done
