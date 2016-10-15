# JavaScript-Tutorial-Demos
Reference code for demonstrating JavaScript, Node, and Functional JavaScript.

This repository grows organically as I add code to try out new features of JavaScript.

Even though web pages and web servers are the usual domains of JavaScript, I 
will be concentrating on the language basics here, and so these are all
command-line utilities. The preferred way to run a sample code is using node,
ala ```node sample.js```. Some codes require babel, ala ```babel sample.js | node```.

Occasionally, one needs to install dependencies using ```npm install --save coolstuff```. 

If you need help installing Node on MacOS, see [Brew](http://brew.sh).
If you're using another OS, you're on your own. :smiley:

Ready for the codes? OK, here we go! :bowtie:

**Promise.js:** Demonstrates Promise by asynchronously fetching Google geodata
   We start by kicking off an http request which will return a JSON object come
heck or high water. That object is parsed and the Promise object is resolved
or rejected depending on the results. 
        
**medalOTM.js:** Demonstrates a functional pipeline with map/reduce. It requires ES2015 to run, and so you might want to check out [my blog post]( http://mikejfromva.com/2016/08/07/functional-javascript) on it.

**heaps.js:** Heap's algorithm. Check out [my blog post](http://mikejfromva.com/2016/10/11/heaps-algorithm/ ) on it.

