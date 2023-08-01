---
title: "Tutorial 5 - Hypersprawl - Create complex 4d shapes"
category: tutorial
---

As hinted in the previous tutorials, the object json format is actually a list of json objects. This allows you to build more complex 4 dimensional objects by entering multiple objects into the list. Iin this tutorial we build an object that consists of one large green tessearct and three smaller tesseracts inside the Green one. 


<!--more-->

The smaller tesseracts form a barbell-like shape, where two large tesseracts (black and white ) are connected with a grey thinner tesseract.

Here is the json for this object:

{% highlight json %}
[
    {
        "objecttype":"tesseract",
        "gameobjectname":"GreenTesseract",
        "colr":[0.0,1.0,0.0,0.0],
        "points4d":[  
            [0.0,0.0,0.0,0.0],
            [9.9,0.0,0.0,0.0],
            [0.0,9.9,0.0,0.0],
            [0.0,0.0,9.9,0.0],
            [0.0,0.0,0.0,9.9]
        ]
    },
    {
        "objecttype":"tesseract",
        "gameobjectname":"BlackTesseract",
        "colr":[0.0,0.0,0.0,0.0],
        "points4d":[  
            [2.0,2.0,2.0,1.0],
            [5.0,2.0,2.0,1.0],
            [2.0,5.0,2.0,1.0],
            [2.0,2.0,5.0,1.0],
            [2.0,2.0,2.0,4.0]
        ]
    },
    {
        "objecttype":"tesseract",
        "gameobjectname":"GreyTesseract",
        "colr":[0.5,0.5,0.5,0.0],
        "points4d":[  
            [3.0,3.0,3.0,3.9],
            [4.0,3.0,3.0,3.9],
            [3.0,4.0,3.0,3.9],
            [3.0,3.0,4.0,3.9],
            [3.0,3.0,3.0,6.1]
        ]
    },
    {
        "objecttype":"tesseract",
        "gameobjectname":"WhiteTesseract",
        "colr":[1.0,1.0,1.0,0.0],
        "points4d":[  
            [2.0,2.0,2.0,6.0],
            [5.0,2.0,2.0,6.0],
            [2.0,5.0,2.0,6.0],
            [2.0,2.0,5.0,6.0],
            [2.0,2.0,2.0,9.0]
        ]
    },
]
{% endhighlight %}

And in the following video we see following maneuvers:

- move inside the green tesseract to get better view.
- move hither to observe first large black, then smaller grey and finally large white tesseract. 
- move back a bit thither to get back to the grey tesseract
- rotate about 90 degrees on righ-hither axis to bring all three smaller tesseracts to view simultaneously.

<iframe
  width="560"
  height="315"
  src="https://www.youtube.com/embed/UtfPfcKP5MI"
  frameborder="0"
  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen
></iframe>

