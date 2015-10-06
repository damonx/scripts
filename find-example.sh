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

