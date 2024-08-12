---
title: "Tutorial 3 - Hypershack - Create and upload simple 4d shapes"
category: tutorial
---
<b>Note, this post describes Hypershack version 0.1. Version 0.2 is pretty different.</b>

So far we have been looking at the single red 5-cell. This post explains how to create some other simple objects in the 4d space of Hypershack. 

<!--more-->

Before clicking start in hypershack, there is a input box for 4d object json. You can directly type and edit the objects in the input field, but that becomes tedious fast. In Hypershack there is a file upload button on the top left of the window, so you can save a json to a file on your filesystem and load the file contents to the json input field without needing to type the whole thing. (Copy paste does not seem to work in any browser we have tried so far). 

Note that the "upload" happens only to your browser, nothing gets uploaded to internet.

Note also that if you want to upload your objects to Hypersprawl, the size of a block there is 10 units to every direction, so you need to have all point coordinate values between 0 (included) and 10 (excluded). In Hypershack 0.1 there are no such limitations.   

Once the input field contains the data you want, click start to see the different objects. Feel free to tinker around with the json parameters to see how they affect the object.

Note that even if the examples in this post all contain only one object, the syntax for the json is a list of json objects. More complex objects will be built on later posts. 


3d cube in 4d
==============
Let's start with not a four-dimensional object, but a three dimensional object, a normal cube that is just located in four dimensional space. That (or more precisely, a [parallelepiped](https://en.wikipedia.org/wiki/Parallelepiped), it does not have to be a cube) can be defined using four points, first one defining a corner, an other three are the adjacent corners to the first:

{% highlight json %}
[
    {
        "objecttype":"cube4d",
        "gameobjectname":"RedCube",
        "colr":[1.0,0.0,0.0,0.0],
        "points4d":[  
            [0.0,0.0,5.0,-1.0],
            [2.5,0.0,5.0,-1.0],
            [0.0,2.5,5.0,-1.0],
            [0.0,0.0,5.0,1.5]
        ]
    }
]
{% endhighlight %}


A three dimensional cross-section of a cube in 4d can have multiple shapes, but it is (almost always) a 2 dimensional polygon. In the following video the cube above is loaded to Hypershack, and following maneuvers ale demonstrated (The audio is turned on, you may want to check your volume levels before checking the video.):

- The player is rotated 45 degrees on the right-hither plane. 
- This causes the cross-secion of the cube to be diagonal to one axis, so that when we move hither and thither we see that the cube moves from one edge to an opposite edge, being a wide rectangle in the middle and narrower at the ends.
- Then the player is rotated by 45 degrees on the up-hither plane.
- This causes the cross-section of the cube to move from a corner of the cube to the opposite corner when moving hither and thither. This is seen as the cross section appearing first as a small triangle, growing to larger polygon and quadrilateral, then reducing back to a small triangle before vanishing.  

<iframe
  width="560"
  height="315"
  src="https://www.youtube.com/embed/WZG6tWF3zhs"
  frameborder="0"
  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen
></iframe>





Tesseract
=========
The last supported object type in Hypershack 0.1 is a tesseract. If a slice of a cube is (almost always) a two dimensional polygon, a 3d slice of a tesseract is almost always a polyhedra. 

Here is an example of a green tesseract you can upload to Hypershack:

{% highlight json %}
[
    {
        "objecttype":"tesseract",
        "gameobjectname":"GreenTesseract",
        "colr":[0.0,1.0,0.0,0.0],
        "points4d":[  
            [0.0,0.0,5.0,2.0],
            [0.0,2.5,5.0,2.0],
            [2.5,0.0,5.0,2.0],
            [0.0,0.0,7.5,2.0],
            [0.0,0.0,5.0,0.5]
        ]
    }
]
{% endhighlight %}

In the following video you can see following maneuvers around and in the tesseract. 

- moving a bit to the left and up to get better view
- rotating 45 degrees on forward-right plane
- rotating 45 degrees on right-hither plane
- rotating 45 degrees on up-hither plane
- moving hither and tither
- moving to the inside of the tessearct
- rotating on the right-hither plane


<iframe
  width="560"
  height="315"
  src="https://www.youtube.com/embed/I2L0n509KCM"
  frameborder="0"
  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen
></iframe>










