---
layout: default
title: JavaScript API Reference for GameObject4d
---

# JavaScript API Reference for GameObject4d

This section provides detailed documentation for the JavaScript API of the `GameObject4d` class. Each method is accessible through JavaScript code executed within the Unity environment via Jint.

## Table of Contents

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

