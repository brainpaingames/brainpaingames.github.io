---
layout: default
title: JSON/JavaScript API Reference for GameObject4d
---

go4d members need to be documented and tested (name, iscollider etc.)



# JSON format

The 4d game object setup is defined by a list of json objcts. Here is an example of a list of a single 4d object, the attributes are explained below:

```json
[
    {
        "objecttype":"tesseract",
        "gameobjectname":"OuterWall1",
        "colr":[0.8,0.8,1.0,0.0],
        "points4d":[  
            {"point": [-1,-1,-1,-1] },
            {"point": [11,-1,-1,-1] },
            {"point": [-1,11,-1,-1] },
            {"point": [-1,-1,11,-1] },
            {"point": [-1,-1,-1,0] }        
        ],
        "isDynamic": false,
        "js": "// comment\ngo4d.isCollider = true;\n"
    }
]
```
---

### objecttype

**Description:**  
Objecttype defines the four dimensional object shape


**Possible values:**  
- `tesseract` : Tesseract
- `fivecell` : 5-cell
- `cube4d` :  A three dimensional cube within 4 dimensions

---

### gameobjectname

**Description:**  
Game object name. 

---

### colr

**Description:**  
 A list of four floats between  0 and 1 having the values for R, G, B and alpha.

---

### points4d
list of point objects that define the  (initial) position and shape of the object in detail. The amount of points needed depends on the object type:

- `tesseract` : 5 points spanning the tesseract (or whatever is the 4 dimensional version of parallelogram to be more precise). First point is the first vertex and the remaining points are the adjacent vertices to that. 
- `fivecell` : 5 points specifying the vertices of the fivecell.
- `cube4d` :  4 points spanning the cube (or parallelogram to be more precise). first one is the first vertex and the remaining points are the adjacent vertices to that.

---

### isDynamic

**Description:**  
This defines whether the javascript of the object is run once when initialized or regularly at set periods. 


**Possible values:**  
- `true` : The javascript is executed at x.x second intervals
- `false` : The javascript is executed only once. 

---

### js

**Description:**  
The javascript to be executed for the gameobject. See later in this page for documentation of the js API. 

Note: the javascript needs to be escaped to single row to be valid json text object. Here is a small python snippet you can use to escape javascript string to a valid json object and vice versa:


```python

import sys
import json
import os

def main(file_path):
    file_ext = os.path.splitext(file_path)[1]
    
    try:
        with open(file_path, 'r', encoding='utf-8') as file:
            content = file.read()

        # Determine the action based on the file extension
        if file_ext.lower() == '.js':
            # Convert JS to JSON
            json_object = {"js": content}
            output_file = file_path.rsplit('.', 1)[0] + '.json'
            with open(output_file, 'w', encoding='utf-8') as file:
                json.dump(json_object, file, ensure_ascii=False, indent=4)

        elif file_ext.lower() == '.json':
            # Convert JSON to JS
            json_object = json.loads(content)
            output_file = file_path.rsplit('.', 1)[0] + '.js'
            with open(output_file, 'w', encoding='utf-8') as file:
                file.write(json_object["js"])

        else:
            print("Unsupported file format. Please use .js or .json files.")
            return

        print(f"File created: {output_file}")

    except IOError as e:
        print(f"Error: {e}")
    except json.JSONDecodeError as e:
        print(f"Invalid JSON format: {e}")

if __name__ == "__main__":
    if len(sys.argv) != 2:
        print("Usage: python script.py <file_path>")
    else:
        main(sys.argv[1])
```


# JavaScript API Reference for GameObject4d

This section provides detailed documentation for the JavaScript API of the `GameObject4d` class. Each method is accessible through JavaScript code executed within the Unity environment via Jint.


Registry methods

- [GetIntRegistry](#getintregistry)
- [SetIntRegistry](#setintregistry)
- [GetFloatRegistry](#getfloatregistry)
- [SetFloatRegistry](#setfloatregistry)
- [GetStringRegistry](#getstringregistry)
- [SetStringRegistry](#setstringregistry)

User Programmable Text Methods

- [getUserProgrammableText1](#getuserprogrammabletext1)
- [setUserProgrammableText1](#setuserprogrammabletext1)
- [getUserProgrammableText2](#getuserprogrammabletext2)
- [setUserProgrammableText2](#setuserprogrammabletext2)

Collision Methods

- [IsCollided](#IsCollided)
- [IsCollidedWithPlayer](#IsCollidedWithPlayer)

Position & Movement Methods

- [GetPlayerPosition3d](#GetPlayerPosition3d)
- [ConvertTo4dPoint](#ConvertTo4dPoint)
- [CalcMinMaxCoord](#CalcMinMaxCoord)
- [jsSetPosition](#jsSetPosition)
- [jsMovePosition](#jsMovePosition)
- [jsPoint4d](#jsPoint4d)
- [jsVector3](#jsVector3)

Color & Light Methods

- [SetColor](#SetColor)
- [getTime](#getTime)
- [SetLight](#SetLight)

Debug logging

- [log](#log)


---

### GetIntRegistry

**Description:**  
GetIntRegistry provides read access to a global array of integer variables within the game's environment. These variables are indexed from 0 to 63, allowing the storage and retrieval of up to 64 separate integer values. This method is particularly useful for maintaining state or sharing data between different scripts and game objects. However, due to the global nature of the registry and its accessibility across the entire game, developers should implement access with caution to prevent race conditions or data inconsistency. When using this function, consider the game's concurrency model and ensure that any critical sections are properly handled.

**Syntax:**
```javascript
var value = go4d.getIntRegistry(index);
```

**Parameters:**  
- `index` (Number): The index of the integer registry.

**Returns:**  
- `Number`: The integer value at the specified index.

**JavaScript Example:**
```javascript
// Retrieve the value from the integer registry at index 5
var intRegistryValue = go4d.getIntRegistry(5);
log('The value in the registry at index 5 is ' + intRegistryValue);
```

---

### SetIntRegistry

**Description:**  
SetIntRegistry allows for the assignment of integer values to a globally accessible integer array within the game's environment. The function targets an index between 0 and 63 and updates that index with the provided integer value. This global accessibility means that the same registry can be written by multiple objects concurrently. Therefore, when designing game logic that interacts with this registry, developers must be cautious and deliberate about when and how they update these values. Consider implementing a locking mechanism or using flags to indicate when a value is being written to, to avoid collisions and ensure data integrity.

**Syntax:**
```javascript
go4d.setIntRegistry(index, value);
```

**Parameters:**  
- `index` (Number): The index of the integer registry where the value will be set.
- `value` (Number): The value to set at the specified index of the integer registry.

**JavaScript Example:**
```javascript
// Set the integer registry at index 5 to the value 10
go4d.setIntRegistry(5, 10);
```
---

### GetFloatRegistry

**Description:**  
`GetFloatRegistry` retrieves a floating-point value from a global array that is shared across the game's environment. The array is indexed from 0 to 63 and each index holds a single `float` value, enabling the storage and retrieval of up to 64 distinct values. This function is essential for managing game states, sharing configuration settings, or tracking dynamic variables across various scripts and game components. Given that all scripts have access to this shared registry, caution is advised when reading values to avoid the complications of simultaneous read/write operations. Developers should consider synchronization techniques or design patterns that prevent concurrency issues.

**Syntax:**
```javascript
var floatValue = go4d.getFloatRegistry(index);
```

**Parameters:**  
- `index` (Number): The index from which to retrieve the floating-point value.

**Returns:**  
- `Number`: The floating-point value at the specified index.

**JavaScript Example:**
```javascript
// Retrieve a float value from the registry at index 2
var floatRegistryValue = go4d.getFloatRegistry(2);
log('Float value retrieved from index 2: ' + floatRegistryValue);
```

---

### SetFloatRegistry

**Description:**  
`SetFloatRegistry` assigns a floating-point value to a specified index within the globally accessible float array. As this array can be concurrently accessed by various objects, developers must handle updates with care to avoid overwriting values unexpectedly. When setting values in this registry, ensure to avoid conflicts and maintain consistency, particularly in multiplayer or real-time scenarios where race conditions can occur. Usage of atomic operations or a check-and-set pattern may be beneficial to prevent data corruption.

**Syntax:**
```javascript
go4d.setFloatRegistry(index, value);
```

**Parameters:**  
- `index` (Number): The index at which to set the floating-point value.
- `value` (Number): The floating-point value to be set at the specified index.

**JavaScript Example:**
```javascript
// Set a float value in the registry at index 2
go4d.setFloatRegistry(2, 3.14159);
log('Float registry at index 2 set to ' + 3.14159);
```

---

### GetStringRegistry

**Description:**  
`GetStringRegistry` provides access to a global array of string variables within the game's shared environment. This array, indexed from 0 to 63, allows for the retrieval of string values, facilitating communication between different scripts or storing text-based data such as player names, state descriptions, or configuration parameters. Due to the shared nature of the registry, developers should be cautious of concurrent modifications which could result in unpredictable behavior. It's important to design scripts with thread safety in mind and consider using synchronization mechanisms where appropriate.

**Syntax:**
```javascript
var stringValue = go4d.getStringRegistry(index);
```

**Parameters:**  
- `index` (Number): The index from which to retrieve the string value.

**Returns:**  
- `String`: The string value at the specified index.

**JavaScript Example:**
```javascript
// Retrieve a string from the registry at index 1
var stringRegistryValue = go4d.getStringRegistry(1);
log('String value retrieved from index 1: ' + stringRegistryValue);
```

---

### SetStringRegistry

**Description:**  
`SetStringRegistry` enables the assignment of string values to a specific index within a global string array. As this array is accessible by all game components at once, it is crucial to manage write operations judiciously to prevent accidental overwrites or data loss. When setting string values, especially in a multiplayer or dynamic context, consider employing strategies to ensure that writes are atomic and do not interfere with other operations.

**Syntax:**
```javascript
go4d.setStringRegistry(index, value);
```

**Parameters:**  
- `index` (Number): The index at which to set the string value.
- `value` (String): The string value to be set at the specified index.

**JavaScript Example:**
```javascript
// Set a string in the registry at index 1
go4d.setStringRegistry(1, 'PlayerOne');
log('String registry at index 1 set to "PlayerOne"');
```

---

### getUserProgrammableText1

**Description:**  
`getUserProgrammableText1` retrieves the current text from the first user-programmable text field displayed on the player's HUD in the 4D VR world. This field can be used to show dynamic information like player stats, messages, or other real-time data. Since any object within the game can read and write to this text field, developers need to carefully manage access to avoid overwriting text inadvertently. Synchronization mechanisms should be considered to ensure that updates to the text do not conflict with other concurrent game processes.

**Syntax:**
```javascript
var userText1 = go4d.getUserProgrammableText1();
```

**Returns:**  
- `String`: The text currently displayed in the user-programmable text field 1.

**JavaScript Example:**
```javascript
// Example of retrieving the content of the user-programmable text field 1
var currentText1 = go4d.getUserProgrammableText1();
log('User Programmable Text 1 says: ' + currentText1);
```

---

### setUserProgrammableText1

**Description:**  
`setUserProgrammableText1` assigns new text to the first user-programmable text field within the player's HUD. It allows for the HUD to be updated with new text content dynamically, responding to in-game events, player actions, or script outputs. As with reading from this text field, writing to it must also be handled with care due to the potential for concurrent access by multiple game objects. It is recommended to implement checks to ensure that updates do not overwrite important information that may be displayed from another part of the game.

**Syntax:**
```javascript
go4d.setUserProgrammableText1(text);
```

**Parameters:**  
- `text` (String): The new text to display in the user-programmable text field 1.

**JavaScript Example:**
```javascript
// Example of setting the content of the user-programmable text field 1
go4d.setUserProgrammableText1('New mission objective: Reach the portal.');
log('User Programmable Text 1 updated with new mission objective.');
```

---

### getUserProgrammableText2

**Description:**  
`getUserProgrammableText1` retrieves the current text from the second user-programmable text field displayed on the player's HUD in the 4D VR world. This field can be used to show dynamic information like player stats, messages, or other real-time data. Since any object within the game can read and write to this text field, developers need to carefully manage access to avoid overwriting text inadvertently. Synchronization mechanisms should be considered to ensure that updates to the text do not conflict with other concurrent game processes.

**Syntax:**
```javascript
var userText1 = go4d.getUserProgrammableText2();
```

**Returns:**  
- `String`: The text currently displayed in the user-programmable text field 2.

**JavaScript Example:**
```javascript
// Example of retrieving the content of the user-programmable text field 2
var currentText2 = go4d.getUserProgrammableText2();
log('User Programmable Text 2 says: ' + currentText2);
```

---

### setUserProgrammableText2

**Description:**  
`setUserProgrammableText2` assigns new text to the second user-programmable text field within the player's HUD. It allows for the HUD to be updated with new text content dynamically, responding to in-game events, player actions, or script outputs. As with reading from this text field, writing to it must also be handled with care due to the potential for concurrent access by multiple game objects. It is recommended to implement checks to ensure that updates do not overwrite important information that may be displayed from another part of the game.

**Syntax:**
```javascript
go4d.setUserProgrammableText2(text);
```

**Parameters:**  
- `text` (String): The new text to display in the user-programmable text field 2.

**JavaScript Example:**
```javascript
// Example of setting the content of the user-programmable text field 2
go4d.setUserProgrammableText2('New mission objective: Reach the portal.');
log('User Programmable Text 2 updated with new mission objective.');
```

---

### IsCollided

**Description:**  
`IsCollided` checks if a given `Point4d` is within a specified `dist` distance from the object. It performs a bounding box collision detection by comparing the point's coordinates against the object's defined minimum and maximum bounds in each of the four dimensions. The function returns `false` as soon as it determines the point is outside the collision bounds in any dimension, optimizing the check to avoid unnecessary calculations.

**Syntax:**
```javascript
var collision = go4d.IsCollided(point, dist);
```

**Parameters:**  
- `point` (Point4d): The 4D point to check for collision, an object with `X`, `Y`, `Z`, and `W` properties.
- `dist` (Number): The collision threshold distance.

**Returns:**  
- `Boolean`: Returns `true` if the point is within the collision bounds, otherwise `false`.

**JavaScript Example:**
```javascript
// Assuming 'go4d.CreatePoint4d' is a method exposed to JavaScript that creates a Point4d object
var point = go4d.CreatePoint4d(10, 10, 10, 10);
var isCollided = go4d.IsCollided(point, 5);
log('Collision detected: ' + isCollided);
```

---

### IsCollidedWithPlayer

**Description:**  
`IsCollidedWithPlayer` determines whether the player is colliding with the object within a certain distance. This method is useful for detecting player interactions with objects in the game world. It utilizes the `IsCollided` function by converting the player's current 3D position to a 4D point and checking for a collision within the specified `dist`.

**Syntax:**
```javascript
var playerCollision = go4d.IsCollidedWithPlayer(dist);
```

**Parameters:**  
- `dist` (Number): The distance threshold for checking collision with the player.

**Returns:**  
- `Boolean`: Returns `true` if the player is colliding with the object, otherwise `false`.

**JavaScript Example:**
```javascript
// Check if the player is colliding with the object within a distance of 1 unit
var isPlayerColliding = go4d.IsCollidedWithPlayer(1);
log('Player collision detected: ' + isPlayerColliding);
```

---

### CreatePoint4d

**Description:**  
`CreatePoint4d` creates a new `Point4d` object given four float values representing the x, y, z, and w coordinates in the 4D space. This function is essential for working with positions and dimensions in a 4D environment and allows for the instantiation of a 4D point from JavaScript code.

**Syntax:**
```javascript
var point4d = go4d.CreatePoint4d(x, y, z, w);
```

**Parameters:**  
- `x` (Number): The x-coordinate of the 4D point.
- `y` (Number): The y-coordinate of the 4D point.
- `z` (Number): The z-coordinate of the 4D point.
- `w` (Number): The w-coordinate (fourth dimension) of the 4D point.

**Returns:**  
- `Point4d`: A new `Point4d` object with the specified coordinates.

**JavaScript Example:**
```javascript
// Example of creating a Point4d object at position (1, 2, 3, 4)
var newPoint4d = go4d.CreatePoint4d(1, 2, 3, 4);
log(newPoint4d);
```

---

### GetPlayerPosition3d

**Description:**  
`GetPlayerPosition3d` retrieves the current 3D position of the player as a `Vector3` object. This method is useful for obtaining the player's location in the game world, which can then be used for various gameplay mechanics, such as positioning, collision detection, and more.

**Syntax:**
```javascript
var playerPosition3d = go4d.GetPlayerPosition3d();
```

**Returns:**  
- `Vector3`: The player's current 3D position.

**JavaScript Example:**
```javascript
// Example of retrieving the player's current 3D position
var currentPlayerPosition = go4d.GetPlayerPosition3d();
log('Player\'s 3D position: ' + currentPlayerPosition);
```

---

### ConvertTo4dPoint

**Description:**  
`ConvertTo4dPoint` converts a `Vector3` object representing a 3D position into a `Point4d` object for use in 4D space. It is a critical function for bridging the gap between 3D and 4D representations within the game. The function ensures that the necessary conversions are made so that 3D coordinates can be accurately represented and manipulated in the game's 4D environment.

**Syntax:**
```javascript
var point4d = go4d.ConvertTo4dPoint(vector3);
```

**Parameters:**  
- `vector3` (Vector3): The 3D position to convert into a 4D point.

**Returns:**  
- `Point4d`: The corresponding 4D point.

**JavaScript Example:**
```javascript
// Example of converting a Vector3 position to a Point4d
var position3d = { x: 5, y: 10, z: 15 };
var point4d = go4d.ConvertTo4dPoint(position3d);
log('Converted 4D point: ' + point4d);
```

---

### jsSetPosition

**Description:**  
`jsSetPosition` assigns a new position to an object within the 4D space. This method is specifically designed for `Fivecell4d` objects and allows for setting their position to a new point defined by the given x, y, z, and w coordinates. If the object is not a `Fivecell4d`, the method will log a message indicating that setting the position is unsupported.

**Syntax:**
```javascript
go4d.jsSetPosition(x, y, z, w);
```

**Parameters:**  
- `x` (Number): The x-coordinate of the new position.
- `y` (Number): The y-coordinate of the new position.
- `z` (Number): The z-coordinate of the new position.
- `w` (Number): The w-coordinate of the new position.

**JavaScript Example:**
```javascript
// Example of setting a new position for a Fivecell4d object
go4d.jsSetPosition(10, 20, 30, 40);
```

---

### jsMovePosition

**Description:**  
`jsMovePosition` moves an object by a vector defined by the given x, y, z, and w values. This method applies to `Fivecell4d` objects, adding the specified values to the object's current position. If the object is not a `Fivecell4d`, it logs a message indicating that the object movement is unsupported.

**Syntax:**
```javascript
go4d.jsMovePosition(x, y, z, w);
```

**Parameters:**  
- `x` (Number): The x value of the movement vector.
- `y` (Number): The y value of the movement vector.
- `z` (Number): The z value of the movement vector.
- `w` (Number): The w value of the movement vector.

**JavaScript Example:**
```javascript
// Example of moving a Fivecell4d object by a specific vector
go4d.jsMovePosition(1, 2, 3, 4);
```

---

### jsPoint4d

**Description:**  
`jsPoint4d` creates a JavaScript object that represents a point in 4D space. It takes a `Point4d` object from the game environment and converts it into a JavaScript object with x, y, z, and w properties that can be easily accessed and manipulated within JavaScript code.

**Syntax:**
```javascript
var pointObj = go4d.jsPoint4d(point4d);
```

**Parameters:**  
- `point4d` (Point4d): A `Point4d` object from the game.

**Returns:**  
- `Object`: A new JavaScript object representing the 4D point.

**JavaScript Example:**
```javascript
// Example of converting a Point4d to a JavaScript object
var point4d = go4d.CreatePoint4d(10, 20, 30, 40);
var pointObj = go4d.jsPoint4d(point4d);
console.log('4D point object: ', pointObj);
```

---

### jsVector3

**Description:**  
`jsVector3` creates a JavaScript object that represents a vector in 3D space. It converts a `Vector3` object from the Unity environment into a JavaScript object with x, y, and z properties.

**Syntax:**
```javascript
var vectorObj = go4d.jsVector3(vector3);
```

**Parameters:**  
- `vector3` (Vector3): A `Vector3` object from Unity.

**Returns:**  
- `Object`: A new JavaScript object representing the 3D vector.

**JavaScript Example:**
```javascript
// Example of converting a Vector3 to a JavaScript object
var playerPosition = go4d.GetPlayerPosition3d();
var vectorObj = go4d.jsVector3(playerPosition);
console.log('3D vector object: ', vectorObj);
```

---

### SetColor

**Description:**  
`SetColor` changes the color of the 4D object by parsing a string-based color representation (such as hex codes or CSS color names) into a Unity `Color` object. If the color string is valid, it updates the object's color list with the new RGBA values and triggers a redraw of the meshes.

**Syntax:**
```javascript
go4d.SetColor(clr);
```

**Parameters:**  
- `clr` (String): A string representing the color in CSS format.

**JavaScript Example:**
```javascript
// Example of setting an object's color to blue using a hex color code
go4d.SetColor("#0000FF");
```

---

### getTime

**Description:**  
`getTime` provides the current time since the start of the game. It retrieves the time in seconds from the moment the game started, which can be used for time-based calculations, animations, or as a game timer.

**Syntax:**
```javascript
var currentTime = go4d.getTime();
```

**Returns:**  
- `Number`: The time in seconds since the game started.

**JavaScript Example:**
```javascript
// Example of getting the current game time
var timeSinceStart = go4d.getTime();
console.log('Time since game start: ' + timeSinceStart + ' seconds');
```

---

### SetLight

**Description:**  
`SetLight` adjusts the intensity of the light emitted by the object's material in the game. It uses a string to set the color and a float for the intensity of the light. If the color string is not a valid color, it defaults to white.

**Syntax:**
```javascript
go4d.SetLight(clr, intensity);
```

**Parameters:**  
- `clr` (String): The color of the light in CSS format.
- `intensity` (Number): The intensity of the light.

**JavaScript Example:**
```javascript
// Example of setting the object's light color to red with half intensity
go4d.SetLight("#FF0000", 0.5);
```

---

### Logging Function

**Description:**  
The logging function is set up to redirect JavaScript console messages to the Unity debug log. This allows messages from JavaScript code executed through Jint to appear in browser console, aiding in debugging and development.

**Syntax:**
```javascript
log(message);
```

**Parameters:**  
- `message` (Object): The message to log. It can be a string or any object that can be stringified.

**JavaScript Example:**
```javascript
// Example of logging a message to the Unity console
log('This message will appear in browser console.');
```
