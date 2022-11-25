#!/bin/bash

g++ Data/gen-plum.c -o Data/gen.out
make cpu-4th

for ((count = 8; count < 10; count*=2))
do
  Data/./gen.out $count 1
  for ((countt = 1; countt < 2; countt+=1))
  do
    mpirun -np $countt ./cpu-4th "Data/data-${count}.inp"
  done
done

rm Data/*.inp