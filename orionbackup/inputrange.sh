N=3
ARRAY=( zero one two three four five )

for index in `shuf --input-range=0-$(( ${#ARRAY[*]} - 1 )) | head -${N}`
do
    echo ${ARRAY[$index]}
done
