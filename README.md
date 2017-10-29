# React Native GTK (WIP)
[![CircleCI](https://circleci.com/gh/Place1/react-native-gtk/tree/master.svg?style=shield)](https://circleci.com/gh/Place1/react-native-gtk/tree/master)

React Native GTK allows developers to write ReactJS apps for desktop with native UI elements!

## Developing
You can setup the project locally to develop in 1 command!
```
npm install
```

## Check/Test
```
npm run lint
npm test
```

## Examples
There are example applications in the `examples/` directory. You can run any of these examples
with the following command:
```
./node_modules/.bin/ts-node ./examples/<file>.tsx

# e.g. running the todo app

./node_modules/.bin/ts-node ./examples/TodoApp.tsx
```

## Debug / develop the GI Bindings
This package makes use of [node-gir](https://github.com/Place1/node-gir). The node-gir package provides the
[GObject Introspection](https://wiki.gnome.org/Projects/GObjectIntrospection) bindings that this library uses
to interact with [GTK](https://developer.gnome.org/gtk3/stable/). In some cases you might want to
debug/develop these two libraries (node-gir and react-native-gtk) together. Thankfully NPM provides a nice
tool to do this called `npm link`

```
git clone https://github.com/Place1/react-native-gtk
git clone https://github.com/Place1/node-gir

cd react-native-gtk
npm link ../node-gir

# now 'react-native-gtk' will use your local copy of node-gir!
```

## Contributing
Send us a Pull Request! Here is how:
1. Fork it!
2. Create your feature branch: git checkout -b my-new-feature
3. Stage your changes: git add .
3. Commit your changes: git commit -m 'Add some feature'
4. Push to the branch: git push origin my-new-feature
5. Submit a pull request

Here are some helpful tips for code contributors:
- Open an issue before you start coding so others know what you're working on.
- Open your pull request early, even if you're not done so others can provide input/feedback!

If you have input but don't want to/can't contribute code just yet, here's some other options:
- Open issues to track bug's you've found using react-native-gtk
- Open issues to contribute your thoughts/suggestions/questions about the future of the package
  and the direction the developers are taking!
- Documentation: we haven't started our documentation efforts just yet but this will be a very
  important aspect of the project!
