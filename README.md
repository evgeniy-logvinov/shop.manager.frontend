# shop.manager.frontend
Shop manager frontend

## spread babel error
```sh
{
  "presets": [
    ["env", { "modules": false }],
    "stage-2"
  ],
  "plugins": ["transform-runtime"]
}
```

## storybook
```sh
npm i -g @storybook/cli
cd my-react-app
getstorybook
```
# run storybook for UI components development with hot reload at localhost:6006
yarn storybook