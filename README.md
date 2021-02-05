# Mai Te Pora — Website

## Installation
```bash
yarn
```

## Development
```bash
cd .\packages\common
yarn link
cd .\packages\icons
yarn link
cd .\packages\themes
yarn link

cd ../..
yarn link @pagerland/common
yarn link @pagerland/icons
yarn link @pagerland/themes

yarn dev
```

## Build
```bash
yarn build
```
