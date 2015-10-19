#!/bin/bash
#Filename:rename.sh
#Pupose: Rename all .jpg and png files

count=1
for img in *.jpg *.png
do
  new=image-$count.${img##.*}
  mv "$img" "$new" 2>/dev/null
  if[ $? -eq 0 ];
    then
    echo "Renaming $img to $new"
    let count++
  fi
done
