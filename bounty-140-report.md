# Nitrosend TypeScript SDK Evaluation Report

- **Tool & Runtime Versions**: Runtime Node.js `v24.17.0`, npm `11.13.0`, TypeScript `5.9.3`, and `@nitrosend/sdk` `v0.11.6` on Windows x64.
- **Minutes from Install to First Send**: 4 minutes total (including brand setup via `/prepare_sending` API).
- **Step that Slowed Most**: Discovering that `@nitrosend/sdk` is strictly packaged as an ES Module without a CommonJS `require` export condition, which threw `ERR_PACKAGE_PATH_NOT_EXPORTED` on initial CJS execution.
- **Defect & Exact Repro**: 
  - Issue: `@nitrosend/sdk@0.11.6` contains only `"import"` and `"types"` in `package.json` exports without a `"require"` condition.
  - Repro: Run `node -e "require('@nitrosend/sdk')"` in Node.js 18+. Output: `Error [ERR_PACKAGE_PATH_NOT_EXPORTED]: No 'exports' main defined in .../package.json`.
- **One Change We Would Make**: Provide dual-module exports (CJS and ESM) or a simple fallback in `package.json` exports so developers working in CommonJS codebases can use `require('@nitrosend/sdk')` seamlessly without configuring ESM loaders or TypeScript `NodeNext`.
