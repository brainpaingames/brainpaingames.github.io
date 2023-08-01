---
title: "Tutorial 4 - Hypershack - Getting unlost with the orientation"
category: tutorial
---

At this point you have likely refreshed you browser window a few times because you are completely lost regarding how to get back to the initial orientation - or to any orientation where your orientation vectors are aligned with the xyz orw axis so you can start to think where you are. 

<!--more-->

Relatively simple way to achieve that is to first get the beacon of the axis you want to get aligned with your hither-vector as accurately in fornt of you as possible. That means you need to get the crosshair as close to the beacon as possible. Once you got that, start rotating on forward-hither plane (keys B and N) until you see from the compass that the one bar has gotten as short as it gets. So, for example, if you want to return back to the original orienation, you need to find the red beacon with your crosshair and rotate until the red bar disappears from the compass. Note that you may end up with a mirror-handed orientation if you don't check that the hither-vector is (0,0,0,1) instead of (0,0,0,-1). After that you can just do 3d rotations and you should be able to get yourself straight again. 

In the following video we use the green tesseract from previous tutorial and you see following actions:

- First random rotation on all of the planes
- A small break, after which the red beacon is aligned to the crosshair as well as possible
- Rotation on forward-hither plane so that the hither vector is close to (0,0,0,1)
- Final rotation to align right to x-axis, up to y-axis and forward to z-axis. 

Note that due to stepwise (11.25 degrees, 8 steps makes 90 degrees) rotations it typically is not possible to align the rotation vectors perfectly to the axis after complex rotations. In the future there may be an option to snap the orientation vectors to the axis.

<iframe
  width="560"
  height="315"
  src="https://www.youtube.com/embed/xqIgHH7ETNM"
  frameborder="0"
  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen
></iframe>


For reference, here is the json for the green tesseract:

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














