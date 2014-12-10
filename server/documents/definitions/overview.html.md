  ---
layout      : 'markdown'
css         : 'guide'

title       : 'Definition Overview'
description : 'What are Definitions'
type        : 'Definitions'
---

## Skirting the Debate

Semantic UI is based on the belief that the conceptual building block of websites is not individual HTML tags, but individual interface elements. Interface elements are components like [buttons](http://www.semantic-ui.com/elements/button.html) [dropdowns](http://www.semantic-ui.com/modules/dropdown.html), and [modals](http://www.semantic-ui.com/modules/modal.html), elements that structure and contextualize web content. Arranged together in a page they create visual flow which we think of as a website.

Most community debate around componentizing the web seems to be centered around what is the best exchange format for creating web components. This can be thought of as similar to a room full of writers arguing about "What is the best language to compose a novel?". We all know that any great novel, although written in a language that was convenient or familiar for the author, will eventually be translated to many other languages, in a way that tries best preserves its real potency, its *meaning*.

Semantic views the debate on format as a paralyzing impasse to the more crucial development of defining the boundaries of existing UI components already used to build the web.

Questions central to Semantic UI:
<table class="ui table">
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

Semantics UI believes web standards are cultivated by "language speakers": developers, designers, and web users who on a day to day basis refine the language of the web through individual usage choices. In other words, everyday when designers choose to use interface elements in their websites *they* are participating in refining the conventions of the web.

In this light, any discussion of web standards shouldn't be about creating and enforcing an orthodoxy for others to follow, but instead should only accurately describe and consolidate existing conventions. This can be considered a radical departure from the current view on web standards, which looks to the [World Wide Web Consortium]() (W3C) not just as a group that define standards for a browser's parsing implementation of markup languages, but also as an institution that should provide conventions on usage.

Semantic codifies these descriptions of common usage into a special format that we call a "definition".

# Types of definitions

Semantic's definitions are placed into five categories based on a common set of features. These subclassifications can be thought of like the *kingdoms* of the natural world which somewhat arbitrarily divide up organisms based on a set of unifying attributes.

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

# Writing The Web

UI definitions can be used by developers to create websites with a common language that remains consistent across projects. Standardizing the language of components is important for moving the web forward because it means front end developers can focus purely on describing what is different for a site, instead of redefining an element from a blank slate for each use.

Definitions are descriptions of the accepted use of elements in designs by a groups of language speakers, or in this case "web designers". How elements are placed everyday by designers into websites *in the wild* produces, in aggregate, a set of acceptable visual constraints for an element that can be codified.

Semantic UI's definitions should not be thought of as style guides—edicts on how things must be used, but instead as guidelines, an evolving document which can adjust as the consensus and expections of developers for designs change.
