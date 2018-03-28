## HackJam: React Server Side rendering

## Benefits of Server Side rendering

- Fast
- SEO
- Social media sharing

## Introduction

To introduce you to Server Side Rendering step by step, we made 3 very simple apps that renders a counter:
- A basic app `src/counter-client/`
- A routing app in `src/routing-client/`
- A Routing and Redux app in `src/redux-client/`

Each of those directories export an `App.js` that is used in `src/index.js`.
Note that there isn't any bug in those directories. Since or focus is to server side render those 3 apps,
your job is to fix the server.

## Getting started

```Bash
git clone https://github.com/hackages/hackjam-ssr-react.git
cd hackjam-ssr-react
```

## Counter Client

In `src/index.js` verify the rendered `<App/>` component comes form `src/counter-client/App.js`.

### Running the client

You can run the client in your terminal:
```Bash
yarn install
yarn start
```

### Server side rendering the Counter Client App

### Building the client

To server side render this app, you have to build the client first:
`yarn build` will create a `build` directory with an index.html you should serve on your server.
The index.html requires javascript files which are in your `static` directory.

### Starting the server

To run the server (an Express app), simply
`yarn start:ssr` (S.S.R. stands for Server-Side-Rendering)
This will execute your express app from `src/server-bootstrap.js`
and make it available on `http://localhost:3001/` (PORT === 3001)
You should see a message displayed in the browser: `I'm rendered from the server`

### Server side rendering the App

You should first replace `I'm rendered from the server` with the Counter App content.
You should use `renderToString` function from `ReactDOMServer`: [See docs](https://reactjs.org/docs/react-dom-server.html)
to render the `App.js` from the `counter-client` directory.
You should display it in a basic html template:
```
<!DOCTYPE html>
<html>
  <body>

  </body>
</html>
```

You should now see a very basic counter... but it doesn't work.

### Server side rendering the App with the Javascript client code.

The difference with your `build/index.html` is that is contains links to your Javascript code. (among other).
Just giving static html to your client, wont let it know how your application works.
So, you need to send this javascript files too...
or more simply send back the `build/index.html` file, but with your `<App>` component rendered in it.

### Returning the index.html file

Use `fs.readFile` function to get the `build/index.html` file. [Docs](https://nodejs.org/api/fs.html#fs_fs_readfile_path_options_callback)
Don't forget to use `utf8` encoding!!

What is happening now?
Your client gets the `index.html` file and this file is requesting javascript links.
For every Javascript file it asks for, the server sends back the `build/index.html` file.
That seems totally wrong!!

### Serving static files

We should tell our express app that all requests made on the `/static` directory should resolve a static file using `express.static`.
You should now have a working client: a basic counter.
But when you disable Javascript in your browser, you don't see your rendered app...
(Or looking at the network tab, you can see the html is just the `index.html`, but not the app)

### Sending index.html with the rendered app

In the `index.html` you should insert in the `<div id="root"></div>` your App component.

With Javascript disabled, you will see the static template returning.
In the network, you can also see that the returned html contains the App.
With Javascript enabled, your browser will then load the javascript files, and take over.

### Routing client

Link your `src/index.js` to the `App` component in the next client: `src/routing-client/App.js`.

### Run the client code

You can run the client code to how what is new in this app
```
yarn start
```

Your app will render but won't work because you're not rendering a `<BrowserRouter />` in your App, you should add that in `src/index.js`

## Server Side Rendering the Routing App

You should first build your client `yarn build` and link the `App` component in `src/server.js` to the `src/routing-client/App.js` file.

This will fail as your app should be wrapped inside of a router on the server as well.

#### Static Router

On the server you cannot use a browser router, instead you must use a [static router](https://reacttraining.com/react-router/web/example/static-router)

But simply wrapping your app inside of a Static Router won't really work...

## Server side Rendering the Redux App

### Changing the index
In index.js, import the App from the `redux-client`

### Running the the client

Start the client by doing
```Bash
yarn start
```
Fix it before moving on the next step

If should crash if you navigate to Counter

This is because react-redux can't find a store in the context, you have to setup the `<Provider />` in `src/index.js`

Once your client works, run `yarn build` then move to the next step

### Server side rendering the app

in `src/server.js`, import `App` from `src/redux-client/app`

The app won't work by default. You'll need to create a store on the server and wrap your App in a `Provider` on the server aswell.

### Providing initial state to clients with JavaScript disabled

Simply passing an initial state to your redux store on the server will do the trick.

Disable javascript by opening your devtools > going into settings > disable javascript

### Providing initial state to clients with Javascript enabled

What .. The solution from above doesn't work anymore :(
That's because when the client <Rehydrates /> the store from `src/index.js` kicks in and takes over the server side created store!

In order to pass data to the client, follow [those instructions](https://redux.js.org/docs/recipes/ServerRendering.html)
