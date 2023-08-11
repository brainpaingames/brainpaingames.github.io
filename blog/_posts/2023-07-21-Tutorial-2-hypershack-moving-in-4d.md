---
title: "Tutorial 2 - Hypershack - Moving in 4d"
category: tutorial
---

This post explains how to move in 4d in Hypershack, and assumes you have launched Hypershack as explained in previous [tutorial](https://brainpaingames.github.io/site/blog/tutorials/2023/07/18/Tutorial-1-hypershack-launching.html) .

<!--more-->

First, what does it mean to move in 4d in Hypershack? In Hypershack, the 3d space you observe around you is a cross-section of a 4d hyperspace. In the observable 3d space you can move around in a space that is spanned by your forward, right and up vectors. You can also rotate around forward-right (yaw), forward-up (pitch), and right-up (roll) planes. In addition to these 3d movements, you can manipulate  the 3d cross-section in the fourth dimension. As there are no well established terms for the directions in the fourth dimension, they are called here "hither" for direction towards positive w axis and "thither" for negative w axis. So, you can move the 3d cross section hither or thither. You can also rotate your observed 3d cross-section in forward-thither, up-thither and right-thither planes. Four dimensional space allows also so called double rotations where rotation happens on two planes simultaneously. Unfortunately double rotations are not yet supported by Hypershack or Hypersprawl.  



Navigation helpers
------------------

As the navigation in a space with 4 spatial dimensions is a bit unnatural for most of us, there are some navigation aids built into Hypershack.



Crosshair
=========

There is a white crosshair indicating your forward direction. You are supposed to be sitting and looking forward when you have the crosshair in front of you in Hypershack.  The forward direction of the crosshair is also the forward direction where different rotations are bound. so if you want to pitch (rotate on forward-up-plane), you will rotate on the plane that goes throught the crosshair, regardless where you happen to be pointing your VR headset.


Compass
=======

There is a visual compass following your headset so that it is always on your field of view and rotates as your head rotates. The compass has rods pointing towards the projection of each of the four axis in the observed 3d space. The length of the rods depend on how well aligned the axis is with the observed 3d space. If the axis is perpendicular to the 3d space, the length of the rod is zero, and it grows longer as you rotate towards being more aligned with the axis.  

- x: black
- y: white
- z: blue
- w: red


Location Data
=============

In your field of view there are four numebers labeled with X,Y,Z and W. These tell you your current location in the four dimensional space.


Orientation Data
================

in your field of view there is a matrix of numbers, rows labeled Right, Up, Forward and Hither. They describe the current direction of your orientation vectors in 4d space. 


Acoustic sensory augmentation
=============================

There are sound beacons for positive x, y, z, and w axis. 

- x: guitar
- y: drums
- z: saxophone
- w: church bells

These beacons are also visible as spheres with same colors as respective compass bars. 

The closer the axis is aligned with your observed 3d space, the louder and closer the beacon is. So, as in the start, your right vector is aligned with x-axis, up-vector is aligned with y-axis, forward vector is aligned with z axis and w axis is perpendicular to your observed 3d space, you will not hear church bells at all nor see the red sphere. 



Keyboard bindings
=================

For now, keyboard is the only supported input device for moving around in 4d. Below are the current default keyboard bindings. Non-qwerty layout may make them a bit challenging, remappable bindings are somewhere on the roadmap. 

- W - move forward
- S - move backwards
- A - yaw to left (rotate on forward-right plane) 
- D - yaw to right (rotate on forward-right plane) 
- Q - roll to left (rotate on up-right plane) 
- E - roll to right (rotate on up-right plane) 
- R - pitch up (rotate on forward-up plane) 
- F - pitch down (rotate on forward-up plane) 
- I - move up
- K - move down
- J - move left
- L - move right
- U - move hither
- O - move thither
- Z - rotate in right-hither plane to positive direction
- X - rotate in right-hither plane to negative direction
- C - rotate in up-hither plane to positive direction
- V - rotate in up-hither plane to negative direction
- B - rotate in right-hither plane to positive direction
- N - rotate in right-hither plane to negative direction



Following short video demonstrates some of the movements and rotations in a simple space where there is just one red five-cell in front of you. Note that the capture is from the browser window with no VR enabled, so the Crosshair stays all the time in the center of the screen. In VR it is not necessarily so when you rotate your head. 


<iframe
  width="560"
  height="315"
  src="https://www.youtube.com/embed/jpjwmfziNG8"
  frameborder="0"
  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen
></iframe>







