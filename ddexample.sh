#Generate a 100KB file:
dd if=/dev/zero bs=100k count=1 of=data.file

#split a file
split -b 10k data.file

#suffix=4digits
split -b 10k data.file -d -a 4

#PREFIX of splitted files
split -b 10k data.file -a 4 split_file

#split a file based on the number of lines
split -l 10 data.file
