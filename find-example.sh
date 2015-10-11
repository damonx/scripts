#List all the files under a specific or current directory recursively:
find . -print

find /home/damonx -name "*.txt" -print
# -iname ignores case

#Match multiple critera:
find . \( -name "*.txt" -o -name "*.pdf" \) -print

#Match path(s) using wildcard
find /home/users -path "*damonx*" -print
#/home/users/list/damonx.txt
#/home/users/damonx/eg.css

#regex:
find . -regex ".*\(\.py\|\.sh)$"
find . -iregex

#Negtive:
find . ! -name "*.txt" -print

#find all files in CURRENT folder:
find . -maxdepth 1 -type f -print
find . -mindepth 2 -type f -print

#Different types
find . -type d -print  #directory
find . -type f -print
find . -type l -print #symbolic links

# c-character device; b-block device; s-socket; p-fifo;
# -atime :- latest access time; -mtime :- latest modification time; -ctime: latest modifcation time on metadata of the file
# Examples:
# Find accessed files within 7 days:
find . -type f -atime -7 -print
# Find files which were accessed excactly 7 days ago:
find . -type f -atime 7 -print
# Find files which were accessed over 7 days ago:
find . -type f -atime +7 -print

#Example -amin, -mmin, -cmin
find . -type f -amin +7 -print

# -newer:
find . -type f -newer file.txt -print

# find files based the size:
find . -type f -size +2k
find . -type f -size -2k
find . -type f -size 2k

# Other units: b-block(512 bytes), c-byte, w-2bytes, k, M-megabytes, G

# find files and delete
find . -type f -name "*.swp" -delete

# find accessibility:
find . -type f -perm 644 -print
find . -type f -name "*.php" ! -perm 644 -print

# find by user
find . -type f -user damonx -print

# (sudo) find files and execute command on those files:
sudo find . -type f  -user root -exec chown damonx {} \;


# find all the java files and concat them into another file:
find . type -f "*.java" -exec cat {} \;>all_java_files.txt

# find files which were modified over 10 days ago and copy them into OLD folder:
find . type -f -mtime +10 -name "*.txt" -exec cp {} OLD \;

# prune directories:
find . \( -name ".git" -prune \) -o \( -type f -print \)
