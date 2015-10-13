# cat args.txt
argument1
argument2
argument3

cat args.txt | xargs -I {} ./command.sh -p {} -l;

#Find all .txt files and delete them;
find . -type f -name "*.txt" -print0 | xargs -0 rm -f
or:
find . -type f -name "*.txt" -print | xargs -n 1 rm -f

# count the how many lines of each java files
find source_code_dir_path -type f -name "*.java" -print0 | xargs -0 wc -l

# sub-shell
cat file.txt | ( while read arg; do cat $arg; done ) <=> cat files.txt | xargs -I {} cat {}
