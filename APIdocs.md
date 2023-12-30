---
layout: default
title: JavaScript API Reference for GameObject4d
---

# JavaScript API Reference for GameObject4d

This section provides detailed documentation for the JavaScript API of the `GameObject4d` class. Each method is accessible through JavaScript code executed within the Unity environment via Jint.

## Table of Contents

- [GetIntRegistry](#getintregistry)
- [SetIntRegistry](#setintregistry)

---

### GetIntRegistry

**Description:**  
Retrieves the integer value from the specified index of the integer registry.

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
var registryValue = go4d.getIntRegistry(5);
console.log('The value in the registry at index 5 is ' + registryValue);
```

---

### SetIntRegistry

**Description:**  
Sets the integer value at the specified index of the integer registry.

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

