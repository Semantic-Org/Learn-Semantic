  ---
layout      : 'default'
css         : 'guide'

title       : 'Expert Guide'
description : 'Using Semantic UI in a production environment'
type        : 'Getting Started'
---
<%- @partial('header') %>

<div class="main container">

  <h2 class='ui header'>
    Getting Semantic UI
  </h2>

  <p>For links to download Semantic UI, check our our <a href="/guide/download.html">download page</a>.</p>

  <h2 class='ui header'>
    Setting Up
  </h2>

  <h3 class="ui header">Dependencies</h3>
  <p>Semantic uses command-line tools to build your project while theming. After getting Semantic, you will need to install <a href="http://nodejs.org/download/" target="_blank">nodejs</a> and <a href="https://github.com/gulpjs/gulp/" target="_blank">gulp</a> to run the build process.</p>

  <p>Once you're up and running. Navigate to the semantic directory and install the npm dependencies</p>
  <div class="bash code">
    # install dependencies
    npm install
    # start install script
    gulp
  </div>

  <h3 class="ui header">Installing Semantic</h3>

  <p>The first time you run gulp you will be greeted with an interactive installer</p>
  <div class="bash code">
    # install
    gulp
  </div>

  <img class="ui image" src="https://camo.githubusercontent.com/b9662e806f832c1ed8cb4c4d0e259fbcae20c222/68747470733a2f2f646c2e64726f70626f7875736572636f6e74656e742e636f6d2f752f323635373030372f696e7374616c6c2e676966">

  <p>The installer will let you select which components to include, and specify paths for your project.<p>

  <table class="ui definition table">
    <thead>
      <th></th>
      <th>Installation Type</th>
    </thead>
    <tbody>
    <tr>
      <td>Automatic</td>
      <td>Installation will use the default paths, outputing css files to <code>dist/</code> and packaging all components together</td>
    </tr>
    <tr>
      <td>Express</td>
      <td>Will let you move your site folder and your dist folder and select from a list of components to include in your concatenated release.</td>
    </tr>
    <tr>
      <td>Custom</td>
      <td>Will prompt you for all available options</td>
    </tr>
    </tbody>
  </table>

  <p>The install process will create two files: <code>semantic.json</code> stores paths for your build  and sits on the top-level of your project, <code>theme.config</code> is a <b>LESS</b> file that exists in <b>src/</b> and allows you to centrally set the themes for each UI component.</p>

  <p>The installer will also create a special folder which contains your site-specific themes. The default location for this is <code>src/site</code>. For more information on using site themes, see the theming guide below.</p>

  <h3 class="ui header">Manual Install</h3>
  <p>If you prefer these files and folders can be moved manually instead of using the installer.</p>
  <div class="bash code">
    mv semantic.json.example semantic.json
    mv src/theme.config.example src/theme.config
    mv src/_site src/site
    vi semantic.json
  </div>

  <h3>Upgrading Semantic</h3>

  <p>You can use normal package manager functions to update your project, just be sure to re-install semantic after upgrading. Re-install will <b>extend your <code>semantic.json</code> but not overwrite it</b></p>
  <div class="bash code">
    bower update
    cd ./bower_modules/semantic-ui
    gulp install
  </div>

  <div class="ui info message">For a full list of settings for <b>semantic.json</b>, check the <a href="https://github.com/Semantic-Org/Semantic-UI/blob/1.0/tasks/defaults.js">defaults values</a> which it inherits from.</div>

  <h2 class="ui header">Using Semantic Build Tools</h2>

  <h3 class="ui header">Gulp commands</h3>
  <p>After setting up your project you have access to several commands for building your css and javascript.</p>

  <div class="bash code">
    gulp # runs default task (watch)
    gulp watch # watches files for changes
    gulp build # builds all files from source
    gulp install # re-runs install
  </div>

  <p>
    Semantic creates minified, and uncompressed files in your source for both individual components, and the components specified for your packaged version.
  </p>

  <p>Keep in mind semantic will automatically adjust URLs in CSS and add vendor-prefixes as part of the build process. This means <b>definitions and theme files do not need vendor prefixes</b>.</p>

  <div class="ui info message">
    <h4 class="ui header">Advanced Usage</h4>
    <p>In addition to the paths set in <code>semantic.json</code>, you can serve files to a second location, for example, a docs instance by using a separate config file <code>tasks/admin/docs.json</code>. Using a copy of the SUI documentation may work well internally for creating a style guide to hack on the theme designs for your project.</p>
    <div class="bash code">
      gulp serve-docs
      gulp build-docs
    </div>
  </div>

  <h3 class="ui header">Workflow</h3>

  <p>Building and watching Semantic is only necessary while adjusting your UI. This is usually the first part of building a new project, and a separate process than building-out pages in your site.</p>
  <p>During this architecting phase you can try <a href="#creating-packaged-themes">downloading different themes</a>, adjusting your <a href="#global-inheritance">site-wide settings</a> (font-family, colors, etc) and tweaking components in your site's <a href="#css-overrides">component overrides</a>.</p>
  <p>Files in the <code>examples/</code> folder of your project can be useful for testing out changes in your UI. For example, you might run <code>gulp watch</code> download a new theme to <code>src/site/themes/</code> then adjust your <code>theme.config</code> file with the name of the new theme and refresh <code>examples/kitchensink.html</code> to inspect changes in the theme.</p>
  <p>You will only need to use Semantic's build tools while refining your UI, while designing pages you can rely on the packages in <code>dist/</code> and your software stack's normal build set-up.</p>

  <p><code>gulp watch</code> will automatically recompile only the necessary definition files when you update <code>semantic.config</code> or any <code>.variables</code> or <code>.overrides</code> file.<p>

</div>