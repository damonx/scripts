#!/bin/bash

declare -A fruits_value
fruits_value=([apple]='100 dollars' [orange]='150 dollars')
echo "Apple costs ${fruits_value[apple]}"

#List all key set:
echo ${!fruits_value[*]}
echo ${!fruits_value[@]}
