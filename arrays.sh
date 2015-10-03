#!/bin/bash

#Initiates arrays

array_var=(1 2 3 4 5)

array_var1[0]="test1"
array_var1[1]="test2"
array_var1[2]="test3"

echo ${array_var1[0]}
index=5
echo ${array_var1[$index]}

#List all the elements in the array
echo ${array_var[*]}
echo ${array_var[@]}
#loop
for element in ${array[@]};do
  echo $element
done


#Print the length of the array
echo ${#array_var[*]}

#Print the index:
echo ${!array_var[*]}
