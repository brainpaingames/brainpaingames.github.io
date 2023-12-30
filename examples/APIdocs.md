---
layout: default
title: GameObject4d API Reference
---

# GameObject4d API Reference

This section provides detailed documentation for the `GameObject4d` class in the game API. Each method and property of the `GameObject4d` class is described with its purpose, syntax, parameters, return values, and examples.

## Table of Contents

- [GameObject4d Constructor](#gameobject4d-constructor)
- [GetIntRegistry](#getintregistry)
- [SetIntRegistry](#setintregistry)
- [GetFloatRegistry](#getfloatregistry)

---

### GameObject4d Constructor

**Description:**  
Creates a new instance of the `GameObject4d` class.

**Syntax:**
```csharp
GameObject4d myObject = new GameObject4d(string objname, bool isDyn);
```

**Parameters:**  
- `objname` (String, optional): The name of the 4D object. Default is "4d Object".
- `isDyn` (Boolean, optional): Specifies whether the object is dynamic. Default is `false`.

**Example:**
```csharp
GameObject4d my4dObject = new GameObject4d("My4DObject", true);
```

---

### GetIntRegistry

**Description:**  
Retrieves the integer value from the specified index of the integer registry.

**Syntax:**
```csharp
int value = myObject.GetIntRegistry(int i);
```

**Parameters:**  
- `i` (int): The index of the integer registry.

**Returns:**  
- `int`: The integer value at the specified index.

**Example:**
```csharp
int registryValue = myObject.GetIntRegistry(5);
```

