echo "HELLO" | tr 'A-Z' 'a-z'
echo "Hello 123 world 456" | tr -d '0-9'  #=>Hello world

#complement of a string:
echo hello 1 char 2 next 4 | tr -d -c '0-9 \n'  #=> 1 2 4

#compression:
echo "hello      damonx   and         zoe" | tr -s ' '  #=> hello damonx and zoe

cat sum.txt
1
2
3
4

#sum:
cat sum.txt | echo $[ $(tr '\n' '+') 0 ]  #=>1+2+3+4 = 10
 
