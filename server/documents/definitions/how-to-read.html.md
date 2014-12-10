  ---
layout      : 'default'
css         : 'guide'

title       : 'How to Read Definitions'
description : 'Practical Use of Definitions'
type        : 'Definitions'
---

## Creating a Prototype

Unlike HTML which begins with no assumptions on what a tag means, Semantic definitions begins with some baseline assumptions. A "standard" element describes in css a neutral form of an element with the most common qualities.

```html
<div class="ui button"></div>
```

Most designers can intuit "appropriate design" through their own experience with design, but it is critical for a program to be able to define these parameters explicitly for a computer.

You may be able to say things like in most cases "a button is clickable", "a button is slightly rounded", or "a button has padding slightly smaller than its type face". Together an approximation of these averages creates a prototype case which is codified as css properties in Semantic's default theme.

## Varying the Prototype

User interface elements most often exist with differences from a standard form. Semantic uses a special nomenclature for describing these modifications to an element's standard form.

### Types

Types are mutually exclusive forms of an element. Just like a pet cannot be both a "cat" and a "dog", types of ui elements, like a ``vertical`` menu or a ``tiered`` menu are *mutually exclusive*.

### Variations

Variations are modifications to an element that are not mutually exclusive. These are similar in concept to grammatical [modifiers](http://en.wikipedia.org/wiki/Grammatical_modifier) and can be strung together with other modifiers.

So for example a button may be "large or small", "colored", "show primacy on a page", "have an icon", "be animated".


