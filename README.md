# grunt-pft

> Phantom Functional Test runner utilizing PFT (Phantom Functional Test)

## Getting Started
This plugin requires Grunt `~0.4.5` and PFT `>= 1.0.0`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-pft --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-pft');
```

## The "pft" task

### Overview
In your project's Gruntfile, add a section named `pft` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  pft: {
    your_target: {
      options: {
        // Task-specific options go here.
      },
      // Target-specific file lists and/or options go here.
    },
  },
});
```

### Options

#### options.parallel
Type: `Integer`
Default value: `1`

The number of parallel instances of PhantomJs to spawn. Each instance will get an equal portion of the test scripts allocated to it.

### Usage Examples

#### Default Options
By default this task will run in a single PhantomJs instance and not save the output to any file. Any failures in the executed test scripts will cause the task to fail.

```js
grunt.initConfig({
  pft: {
    src: ['src/tests/script1.js', 'src/tests/script2.js']
  },
});
```

#### Custom Options
In this example, the parallel options is used to run each of the passed in test scripts in its own instance of PhantomJs. Were there 4 test scripts passed as `src` parameters then each of the 2 PhantomJs instances would be allocated 2 test scripts.

```js
grunt.initConfig({
  pft: {
    options: {
      "parallel": 2, // run using two instances of PhantomJs
    },
    src: ['src/tests/script1.js', 'src/tests/script2.js'],
    dest: 'dest/output.log', // save the output to a file
  },
});
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
1.0.0 - Initial release
