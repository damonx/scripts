echo "------------- Acquire lock -------------"
/bin/sleep  `shuf -i 1-60 -n 1`

host_arr=()

N=3
#Limit the number of locks
/bin/chmod 400 ./ssh-keys/id_dataplatformdev
/bin/chmod 400 ./ssh-keys/id_heisenburgdeploy
/bin/chmod 400 ./ssh-keys/id_daemonsdeploy
lockNumberDataplatformDev=`/usr/bin/ssh -o StrictHostKeyChecking=no -i ./ssh-keys/id_dataplatformdev quality@dataplatformdev 'find . -maxdepth 1 -name "*lock" | wc -l'`
lockNumberHeisenburgdeploy=`/usr/bin/ssh -o StrictHostKeyChecking=no -i ./ssh-keys/id_heisenburgdeploy quality@heisenburgdeploy 'find . -maxdepth 1 -name "*lock" | wc -l'`
lockNumberDaemonsdeploy=`/usr/bin/ssh -o StrictHostKeyChecking=no -i ./ssh-keys/id_daemonsdeploy quality@daemonsdeploy 'find . -maxdepth 1 -name "*lock" | wc -l'`

while [ $lockNumberDataplatformDev -gt 0 ] && [ $lockNumberHeisenburgdeploy -gt 0 ] && [ $lockNumberDaemonsdeploy -gt 0 ]
do
   /bin/sleep  `shuf -i 1-20 -n 1`
   lockNumberDataplatformDev=`/usr/bin/ssh -o StrictHostKeyChecking=no -i ./ssh-keys/id_dataplatformdev quality@dataplatformdev 'find . -maxdepth 1 -name "*lock" | wc -l'`
   /bin/sleep  `shuf -i 1-20 -n 1`
   lockNumberHeisenburgdeploy=`/usr/bin/ssh -o StrictHostKeyChecking=no -i ./ssh-keys/id_heisenburgdeploy quality@heisenburgdeploy 'find . -maxdepth 1 -name "*lock" | wc -l'`
   /bin/sleep  `shuf -i 1-20 -n 1`
   lockNumberDaemonsdeploy=`/usr/bin/ssh -o StrictHostKeyChecking=no -i ./ssh-keys/id_daemonsdeploy quality@daemonsdeploy 'find . -maxdepth 1 -name "*lock" | wc -l'`
done

hostname_arr=(dataplatformdev daemonsdeploy heisenburgdeploy)

for index in `/usr/bin/shuf --input-range=0-$(( ${#hostname_arr[*]} - 1 )) | head -${N}`
do
    host=${hostname_arr[$index]}
    sshkey="./ssh-keys/id_$host"
    /bin/chmod 400 $sshkey
    processNum=`/usr/bin/ssh -o StrictHostKeyChecking=no -i $sshkey quality@$host 'find . -maxdepth 1 -name "*lock" | wc -l'`
    if [ $processNum -eq 0 ]; then
      host_arr[$processNum]=$host
      break
    fi
    specificProcessNum=`/usr/bin/ssh -o StrictHostKeyChecking=no -i $sshkey quality@$host 'find . -maxdepth 1 -name "lockPlaceHolder" | wc -l'`
    index=$processNum
    if [ $specificProcessNum -gt 0 ]; then
      index=$[ index + 100 ];
    fi
    host_arr[$index]=$host
done

for hostname in "${host_arr[@]}"; do
   echo $hostname
   sed -i "s/\${basedir}\/id_rsa/.\/ssh-keys\/id_$hostname/g" default.properties
   sshkey="./ssh-keys/id_$hostname"
   /bin/chmod 400 $sshkey
   /bin/sed -i "s/heisenburgdeploy/$hostname/g" default.properties
   if [ -d ../IntegrationTest ]; then
      /bin/sed -i "s/heisenburgdeploy/$hostname/g" ../IntegrationTest/build.properties
   fi
   if [ -d ../AcceptanceTests ]; then
      /bin/sed -i "s/heisenburgdeploy/$hostname/g" ../AcceptanceTests/build.properties
   fi

   /usr/bin/ssh -o StrictHostKeyChecking=no -i $sshkey quality@$hostname 'test -e /home/quality/lockPlaceHolder >/dev/null 2>&1'

   while [ $? -eq 0 ]
       do
        /bin/sleep  `/usr/bin/expr $RANDOM / 1500`
        /usr/bin/ssh -o StrictHostKeyChecking=no -i $sshkey quality@$hostname 'test -e /home/quality/lockPlaceHolder >/dev/null 2>&1'
       done
   /usr/bin/ssh -o StrictHostKeyChecking=no -i $sshkey quality@$hostname 'touch /home/quality/lockPlaceHolder'
   echo $hostname > hostName
   echo $sshkey > sshkeyPath
   break;
done

echo "------------- Acquired the lock on $hostname -------------"
