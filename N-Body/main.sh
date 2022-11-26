#!/bin/bash

g++ Data/gen-plum.c -o Data/gen.out
make cpu-4th

for ((count = 4; count < 200; count*=2))
do
  Data/./gen.out $count 1
  for ((countt = 1; countt < 70; countt*=2))
  do
    mpirun -np $countt ./cpu-4th "Data/data-${count}.inp" > Valores/$(($count*1024))\_$countt.txt
  done
done

rm Data/*.inp