  ---
layout      : 'markdown'
css         : 'guide'
standalone  : true

title       : 'Glossary Of Terms'
description : 'Definitions of terms used in the project'
type        : 'Getting Started'
---

## Semantic UI

### Definition Terminology

<table class="ui relaxed padded basic definition table">
  <thead>
    <th>Term</th>
    <th>Definition</th>
  </thead>
  <tbody>
    <tr>
      <td class="three wide">Component</td>
      <td>
        A component is a general term used to refer to any user interface element packaged for distribution.
      </td>
    </tr>
    <tr>
      <td>Definition</td>
      <td>
        <p>A definition is a set of css and javascript which define a component's essential qualities.</p>
        <p>Definition may contain hard coded values that are essential, and variables which contain non-essential or arbitrary parts of a definition. This separation allows developers to adjust qualities of an element without having to know the contents of the css definition.</p>
      </td>
    </tr>
    <tr>
      <td>UI</td>
      <td>
        <code>ui</code> is a special class name added to html elements that correspond with ui definitions. This is used for containing css specificity, and distinguishing parts of an element from elements themselves.
      </td>
    </tr>
    <tr>
      <td>Prototype</td>
      <td>
        <p>The basic neutral form of a component that includes only its universal qualities.</p>
        <p>Modifications like **types**, **states**, or **variations** describe changes from this neutral form</p>
      </td>
    </tr>
    <tr>
      <td>Type</td>
      <td>
        <p>Types **are mutually exclusive** forms of an element that are modifications of the element's neutral form.</p>
        <p>Types cannot be used simultaneously on the same element. For example, "cats" and "dogs" are types of animals, but a single animal cannot be both.</p>
      </td>
    </tr>
    <tr>
      <td>Variation</td>
      <td>
        A variation is a single word or a short phrase that is added to modify the base form of an element. Each variation describes a specific quality like size, or color.</p>
        <p>Variations are **not mutually exclusive**, and can be used together concurrently.</p>
      </td>
    </tr>
  </tbody>
</table>

### Types of Definitions

<table class="ui relaxed padded basic definition table">
  <thead>
    <th>Term</th>
    <th>Definition</th>
  </thead>
  <tbody>
    <tr>
      <td>Element</td>
      <td>
        UI elements are the smallest atomic unit for describing page content. They can exist alone or in groups with shared qualities.</td>
    </tr>
    <tr>
      <td>Collection</td>
      <td>
        <p>Collections are heterogeneous group of several ui elements which are usually found together. They may describe ui elements which do not necessarily have to be present.</p>
      </td>
    </tr>
    <tr>
      <td>Views</td>
      <td>
        <p>A view is a commonly used pattern for presenting types of website content. Views may describe several different types of content, or ui elements in its definition. For example a comment view may define content like "comment text", "actions", or a "reply form".</p>
      </td>
    </tr>
    <tr>
      <td>Modules</td>
      <td>
        <p>Modules are components that have behaviors as an essential part of their definition. They contain both </p>
      </td>
    </tr>
  </tbody>
</table>

## General Terms

<table class="ui relaxed padded basic definition table">
  <tr>
    <td>Namespace</td>
    <td>A name given to an element for the explicit purpose of containing the application of properties. In Semantic UI, elements are given the class name <code>ui</code> to help distinguish them from parts of elements in code, and to provide a namespace for definitions which can limit the scope of css rules.</td>
  </tr>
  <tr>
    <td>Gulp</td>
    <td>Gulp is a tool for automating command line tasks <a href="http://www.gulpjs.com" target="_blank">Gulpjs.com</a></td>
  </tr>
  <tr>
    <td>NPM</td>
    <td>NPM is a package manager used for downloading Node JS packages.</td>
  </tr>
  <tr>
    <td>Node JS</td>
    <td>Node is a event driven programming language frequently used to run command line tools for front end development. <a href="http://www.nodejs.com" target="_blank">nodejs.org</a></td>
  </tr>
</table>