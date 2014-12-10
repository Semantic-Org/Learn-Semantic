  ---
layout      : 'markdown'
css         : 'guide'

title       : 'Overview'
description : 'What are Definitions?'
type        : 'Definitions'
---

## Skirting the Debate

Semantic UI is based on the belief that the conceptual building block of websites is not individual HTML tags, but individual interface elements. Interface elements are components like [buttons](http://www.semantic-ui.com/elements/button.html), [dropdowns](http://www.semantic-ui.com/modules/dropdown.html), and [modals](http://www.semantic-ui.com/modules/modal.html), elements that structure and contextualize web content. Arranged together in a page they create visual flow which we think of as a website.

Most community debate around componentizing the web seems to be centered around what is the best exchange format for creating web components. This can be thought of as similar to a room full of writers arguing about "What is the best language to compose a novel?". We all know that any great novel, although written in a language that was convenient or familiar for the author, will eventually be translated to many other languages, in a way that still preserves its most important quality, its *meaning*.

Semantic views the debate on format as a paralyzing impasse to the more critical development of consensus around standards for the meaning and interrelation of user interface elements.

Questions central to Semantic UI:
<table class="ui celled table">
  <tr>
    <td>Completeness</td>
    <td>How many interface components make up the complete visual language of the web?</td>
  </tr>
  <tr>
    <td>Variability</td>
    <td>What makes up the optional (arbitrary) and the required (prescribed) parts of a web component? How do we distinguish these boundaries in code?</td>
  </tr>
  <tr>
    <td>Coupling</td>
    <td>How do interface elements define how they work in the context of other elements?</td>
  </tr>
  <tr>
    <td>Schema</td>
    <td>Are there meaningful classifications across groups of interface components? How do we draw those boundaries?</td>
  </tr>
  <tr>
    <td>Conformity</td>
    <td>How can components maintain a consistent style when created by multiple authors?</td>
  </tr>
  <tr>
    <td>Syntax</td>
    <td>What language conventions should be used to convey components meaning between developers?</td>
  </tr>
</table>

## Definition Format

Semantic UI offers the *definition format* as a solution to how to define disparate interface elements in a singular fashion. Many of the guiding principles for this system of classification comes from now well adopted principles from linguistics.

Semantics UI believes web standards are cultivated by "language speakers": developers, designers, and web users who on a day to day basis refine the language of the web through individual usage choices. In other words, everyday when designers choose to use interface elements in their websites *they* are refining the conventions of the web. In this light, any discussion of web standards shouldn't be about creating and enforcing an orthodoxy for others to follow, but instead should accurately describe and consolidate existing conventions.

This can be considered a radical departure from the current view on web standards, which looks to standards organizations like the [World Wide Web Consortium](http://www.w3.org) (W3C) not just as a group that define standards for a browser's parsing implementation of markup languages, but also as an institution that should provide conventions on usage for web developers.

### Benefits of Standard Language

UI definitions can be used by developers to create websites with a common language that remains consistent across projects. Standardizing the language of components is important for moving the web forward because it means front end developers can focus purely on describing what is different for a site, instead of redefining an element from a blank slate for each use.

Definitions are descriptions of the accepted use of elements in designs by a groups of language speakers, or in this case "web designers". How elements are placed everyday by designers into websites *in the wild* produces, in aggregate, a set of acceptable visual constraints for an element that can be codified.

Semantic UI's definitions should not be thought of as style guides—edicts on how things must be used, but instead as guidelines, an evolving document which can adjust as the consensus and expections of developers for designs change.

### Types of definitions

Semantic codifies these descriptions of common usage into a special format that we call a "definition". These definitions are placed into five categories based on a common set of features, a set of useful sub-classifications similar to the *kingdoms* of the natural world which, somewhat arbitrarily, divide up organisms based on a set of unifying attributes.

<table class="ui celled table">
  <tr>
    <td>Elements</td>
    <td>The smallest useful homogenous unit for describing page content</td>
  </tr>
  <tr>
    <td>Collections</td>
    <td>Heterogeneous group of several elements which are usually found together.</td>
  </tr>
  <tr>
    <td>Views</td>
    <td>Ways of presenting common website content like comments, activity feeds, cards</td>
  </tr>
  <tr>
    <td>Modules</td>
    <td>Elements where a behavior and design are both an essential part of its definition</td>
  </tr>
  <tr>
    <td>Behaviors</td>
    <td>Set of free-standing interactions not specifically tied to design constraints</td>
  </tr>
</table>

## Creating a Prototype

Unlike HTML which begins with no assumptions on what a tag means, Semantic definitions begins with some baseline assumptions. A "standard" element describes in css a neutral form of an element with the most common qualities.

Most designers can intuit "appropriate design" through their own experience with design, but it is critical for a program to be able to define these parameters explicitly for a computer.

You may be able to say things like in most cases "a button is clickable", "a button is slightly rounded", or "a button has padding slightly smaller than its type face". Together an approximation of these averages creates a prototype case which is codified as css properties in Semantic's default theme.

<div class="code" data-type="html" data-preview="true">
<div class="ui button">Button</div>
</div>


## Varying Standard Elements

User interface elements most often exist with differences from a standard form. Semantic uses special names for describing these modifications to an element's standard form.

### Types

Types are mutually exclusive forms of an element. Just like a pet cannot be both a "cat" and a "dog", types of ui elements, like a ``vertical`` menu or a ``tiered`` menu are *mutually exclusive*.

### Variations

Variations are modifications to an element that are not mutually exclusive. These are similar in concept to grammatical [modifiers](http://en.wikipedia.org/wiki/Grammatical_modifier) and can be strung together with other modifiers.

So for example a button may be "large or small", "colored", "show primacy on a page", "have an icon", "be animated".

### States

States are modifications to a UI element which show a change in its condition.

States can be used to indicate changes like: "is hidden", "should appear unmodifiable", "should indicate a user must wait".
