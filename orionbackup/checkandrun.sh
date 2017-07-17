#!/bin/bash
result=`curl -X GET --user gearbox-dashboard:24R84esedjm6uTQs -s http://bamboo/rest/api/latest/result/CCM-AT | xmllint --format - | grep "state=" | head -n 1 | awk '{print $3}' | awk -F'=' '{print $2}'`
strippedResult=`echo $result | tr -d '"'`
if [ "$strippedResult" == "Failed" ]
then
    curl -X POST --user gearbox-dashboard:24R84esedjm6uTQs http://bamboo/rest/api/latest/queue/CCM-AT
else
    echo "success"
fi
