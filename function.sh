function list(){
  echo $1, $2;  #access argument1 and argument2
  echo "$@";  #List all the arguments
  echo "$*";
  return 0;
}

#export -f functionName  -> To export a function so that it can be used by other scripts
