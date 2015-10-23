# jsFile-fb [![Build Status](https://secure.travis-ci.org/jsFile/jsFile-fb.png?branch=master)](https://travis-ci.org/jsFile/jsFile-fb)
Engine for jsFile library to work with documents in [FictionBook](https://en.wikipedia.org/wiki/FictionBook) format

## Installation
### via NPM

You can install a <code>jsFile-fb</code> package very easily using NPM. After
installing NPM on your machine, simply run:
````
$ npm install jsfile-fb
````

### with Git

You can clone the whole repository with Git:
````
$ git clone git://github.com/jsFile/jsFile-fb.git
````

### from latest version

Also you can download [the latest release](https://github.com/jsFile/jsFile-fb/tree/master/dist) of `FictionBook` engine and include built files to your project.


##Usage
````js
import JsFile from 'JsFile';
import JsFileFb from 'jsfile-fb';

const jf = new JsFile(file, options);
````
`file` - a file of [FictionBook](https://en.wikipedia.org/wiki/FictionBook) type. You may find information about options and `jsFile` in [documentation](https://github.com/jsFile/jsFile#installation)
