angular-distributable-module-seed
=======

Super simple angular project seed to create distributable modules.

##Usage


#####1. Clone the git repo or download the code.
```
git clone https://www.github.com/cabargues/angular-distributable-module-seed
```

#####2. Install the dependencies.
```
npm install
```
Don't worry about bower dependencies. Their installation is specified in npm's `postinstall` script.
If you want to install additional dependencies use `bower install` or `npm install --save-dev`.

#####3. Create your unit tests.
Place all your Jasmine unit tests under `/test` so Karma can find and run them.

#####4. Code, code, code. 
Replace module name, description and others in source code, `package.json` and bower.json` and start coding your module.

#####4. Test your code.
Karma configuration is defined in karma.conf.js and can be customized as required. Once ready just run:
```
npm test
```
or 
```
karma start
```
Keep in mind that `singleRun` is set to `true` to avoid problems with Travis CI.

#####5. Build.
You can customize your build process by modifying `gulpfile.js` and `build.conf.js`. When ready you can manually trigger the build process by executing: 

```
npm run-script build
```
or 
```
gulp build
```

The project also includes a `.travis.yml to easily connect your repo with Travis CI and automate your builds which is cool, free and saves your time.

#####6. Share your module
You can share your work in many different ways but maybe the better one is using bower and/or npm.
If you want to publish your module to either bower or npm you can follow this great guide about how to do it properly:
https://www.viget.com/articles/publishing-packages-to-npm-and-bower