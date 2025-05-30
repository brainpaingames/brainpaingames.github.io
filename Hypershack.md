Hypershack
----------

Hypershack is a standalone, private space designed for tinkering and learning with 4D objects in Virtual Reality. 

There are some elements designed to help get oriented in the 4d world:

- there are small particles falling down, i.e. moving towards negative y-axis. The speed they are falling depends on the orientation of the observed 3d space in the 4d world, the closer the 3d psace is aligned iwth y-axis, the faster the particles fall. If you rotate the 3d space to be perpendicular to y-axis, the particles do not move.
- the orientation vectors are written on the hud
- there is a "compass" dispalying the projection of x,y,z and w axis on the 3d space.
- if you click unmute, you also get sound beacons emitting sound from the direction of projected axis.

You can also select "easy mode" that lets you only make 45 degree simple rotations to help you say oriented.

when you open Hypershack 0.2, you are provided predefined levels of a simple game where you need to find hypergems (red fivecells) within a tesseract. You can create your own 4d environments and games by defining the objects in json and specifying the object behaviour in JavaScript, [see api documentaion here.](APIdocs)   

There are some issues with copy-pasting to unity WebGL games. So unfortunately the process of editing the JSON in game is a bit cumbersome and you need to upload the JSON using the Load File button at the top of the screen.

Here are links to the JSON files and non-escaped JavaScript for the fivecell object of the hypermaze games of Hypershack 0.2:

- [Javascript](examples/Level1js.js)
- [Hypermaze Level 1](examples/Hypermaze%20Level%201.json)
- [Hypermaze Level 2](examples/Hypermaze%20Level%202.json)
- [Hypermaze Level 3](examples/Hypermaze%20Level%203.json)
- [Hypermaze Level 4](examples/Hypermaze%20Level%204.json)
- [Hypermaze Level 5](examples/Hypermaze%20Level%205.json)
- [Hypermaze Level 6](examples/Hypermaze%20Level%206.json)



The game is borderline playable on standalone Quest 2. If you have trouble with the Quest browser, try wolvic.  It's recommended to run the game on a VR-capable computer's browser, the experience is much smoother there. 


Finally, a small hint. If you get lost with the orientations and want to return to normal 3d orientation wihtout the hither/thither component, first rotate yourself so that the red beacon is aligned as well as possible with the crosshair (that is, the red beacon is in front of you.) After that, rotate in the forward/hither plane (click right trigger and push right thumbstick forward/backward) until you see the red bar disappear in the compass. Now you are in the "normal" 3d space and you can orient yourself with normal 3d rotations to align the forward/right/up axis. 

Access latest Hypershack
------------------------

 [Hypershack 0.2](hypershack-0.2)

0.2 Changelog
=============

- VR controller movement and rotation
- Double rotations
- Javascript programmable 4d objects
- Six levels of basic hypermaze game

Hypershack archive
------------------

 [Hypershack 0.1](hypershack-0.1)

0.1 Changelog
=============

Rudimentary functionality.





