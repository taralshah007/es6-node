# es6-node
This project is step by step guide for some new features of es6 with nodejs.

It's better to setup webpack first so that it's easier to see all the changes on browser instantly.

Step 1: Create a new node project and initialize it by using 
npm init -y

Step 2: install webpack by using
npm install --save-dev webpack

Step 3: Create webpack.config.js

Step 4: Please create file as in project.

Step 5: Now, go to webpack.config.js file. Comment devServer property for now (I will explain that in later steps.

Step 6: Go to command prompt and run npm run build.

Step 7: Now go to your file index.html in directory structure and open index.html file in browser.

Step 8: You should see 'Hello'.

Step 9: Your webpack is ready to rock :) But this is a static page. Also, your changes are not reflected without rebuild. 
To resolve that we need webpack dev server.

Step 10: Install webpack dev server by using
npm install --save-dev webpack-dev-server

step 11: Now, go back to webpack.config.js. Please uncomment or add devServer property as following
devServer: {
        port:3001,
        contentBase: './src',
        inline: true
    }
    
Step 12: Package.json file has already an entry for start script as following "start": "webpack-dev-server".

Step 13: Run npm start

Step 14: Go to browser and type http://localhost:3001

Step 15: You should see 'Hello'.

Step 16: If you change anything in index.js, it will be reflected just after saving the file. No more rebuilds are required.

