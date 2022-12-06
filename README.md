# Using React libraries in Fresh application

Short answer:

You import
`https://esm.sh/{npm name with npm version}?alias=react:preact/compat,react-dom:preact/compat&deps=preact@{preact version that you use in your fresh app}`

For example:
* `@tanstack/react-query@4.19.1` while using fresh with `preact@10.11.0`
`https://esm.sh/@tanstack/react-query@4.19.1?alias=react:preact/compat,react-dom:preact/compat&deps=preact@10.11.0`
* `react-hook-form@7.40.0` while using fresh with `preact@10.11.0`
`https://esm.sh/react-hook-form@7.40.0?alias=react:preact/compat,react-dom:preact/compat&deps=preact@10.11.0`

Most likely you will run into something like this:
```
<ReactComponent>
  <PreactComponent />
</ReactComponent>
```

React has different children definition than preact - it is expected to be a type error.



# fresh project

### Usage

Start the project:

```
deno task start
```

This will watch the project directory and restart as necessary.
