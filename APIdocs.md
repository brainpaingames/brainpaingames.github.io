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

