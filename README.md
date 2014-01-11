cleaver-template
================

Jump start your [cleaver](https://github.com/jdan/cleaver) presentation in no time.

Reinventing `cleaver watch` functionality but also sprinkling it with [livereload](http://livereload.com/) & [static server](https://npmjs.org/package/connect) functionality via awesome grunt packages (see package.json dependency list for names).


How to run this?
================
Steps:  
1.   `npm install` to install all dependencies.  
2a.  `grunt` to output compiled index.md to index.html.  
2b.  `grunt build:%Name of you md file%` to output compiled %name%.md to output and have that.  

Both tasks will also start the static server at 8080 and open it in your browser

Cleaver doesn't run on my Windows, what to do?
==============================================

Probably the issue is with your shell. Try changing [this line](https://github.com/sudodoki/cleaver-template/blob/master/Gruntfile.js#L28) to be `return "cleaver " + filename + '.md'` and install cleaver globally via `npm install -g cleaver`.


Have any question/proposals?
============================

Don't hesitate to open issue, or just to do regular fork-feature branch-pull request thing on me.