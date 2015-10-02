#/bin/bash
no=100
echo "obase=2;$no" | bc
no=1100100
echo "obase=10;ibase=2;$no" | bc
echo "sqrt(100)" | bc
echo "10^10" | bc
