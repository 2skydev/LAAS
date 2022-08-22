# LAAS - LOST ARK Accessory Search

로스트아크 장신구 매물 검색기 데스크탑 앱

필요한 장신구들을 등록해두면 자동으로 경매장에서 검색 후 조건값이 만족한다면 디스코드로 알림을 전송합니다.

> 이전에 만들어둔 코드를 리팩토링한 버전입니다.
> - 이전버전 React Github: [`LAAS-frontend-deprecated`](https://github.com/2skydev/LAAS-frontend-deprecated)
> - 이전버전 Electron Github: [`LAAS-app-deprecated`](https://github.com/2skydev/LAAS-app-deprecated)

## Overview

- App framework: [`electron`](https://www.electronjs.org/)
- App build tool: [`electron-builder`](https://www.electron.build/)
- App storage: [`electron-store`](https://github.com/sindresorhus/electron-store)
- Bundle tool: [`vite`](https://vitejs.dev/)
- Frontend framework: `react` + `typescript`
- Code style: `eslint` + `prettier` + [`@trivago/prettier-plugin-sort-imports`](https://github.com/trivago/prettier-plugin-sort-imports)
- File-system based router
- CSS: [`styled-components`](https://styled-components.com/)
- State management library: [`recoil`](https://hookstate.js.org/)
- Date: [`dayjs`](https://day.js.org/)
- Form value handle: [`formik`](https://formik.org/)

## Getting Started

#### dev mode

```bash
yarn dev
```

#### vite & electron build

```bash
yarn build
```
