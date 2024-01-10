Hypershack
----------

Hypershack is a standalone, private space to tinker and learn with 4d objects in Virtual Reality. 

when you open Hypershack, you are provided three predefined levels of a simple game where you need to find hypergems (red fivecells) within a tesseract. Technically you can create your own 4d environments by defining the objects in json and specifying the object behaviour in javascript, [see api documentaion here.](APIdocs)   However, there are some issues with copy pasting to unity WebGL games, so unfortunately the process is a bit cumbersome, especially in Quest 2 headset, as you need to somehow make the file available in the device filesystem and open it using the small file load button in the game start screen. Here is one way that has been tested to work:

- Make your json accessible from internet (note you need to escape the javascript to be json embeddable)
- copy it to json online editor that can be used to actually download the file
- when you have the file downloaded in the Downloads folder, Run hypershack and open the file by clicking 


Finally, a small hint. If you get lost with the orientations and want to get back to normal 3d orientation wihtout hither/thither component, first rotate yourself so that the red beacon is aligned as well as possible with the crosshair (that is, the red beacon is in front of you.) After that, rotate in forward/hither plane (click right triccer and push right thumbstic forward/backward) until you see the red bar (almost) disappear in the compass. Now you are in the "normal" 3d space and you can orient yourself with normal 3d rotations to align the forward/right/up axis. Check the orientation handedness of the axis, though, you may have flipped to left haded or right handed orientation when you have rotated in 4d. 

Access latest Hypershack
------------------------

 [Hypershack 0.2](hypershack-0.2)

Changes from 0.1
================

- VR controller movement and rotation
- Double rotations
- Javascript programmable 4d objects

Hypershack archive
------------------

 [Hypershack 0.1](hypershack-0.1)

Changelog:

Rudimentary functionality.





