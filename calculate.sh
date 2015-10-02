#!/bin/bash

no1=4
no2=5

let result=no1+no2
result=$[ no1 + no2 ]
echo $result
result=$[ no1 + 5 ]
echo $result
result=$(( no1 + 50 ))
echo $result
result=`expr 3 + 4`
echo $result
result=$(expr $no1 + 5)
echo "4 * 0.56" | bc
echo $result
