<iframe src="https://ghbtns.com/github-btn.html?user=Danielduel&repo=using-react-libraries-in-fresh-app&type=star&count=true" frameborder="0" scrolling="0" width="150" height="20" title="Give this repo a ⭐"></iframe>

# Using React libraries in Fresh application

Short answer:

You import
`https://esm.sh/{npm name with npm version}?alias=react:preact/compat,react-dom:preact/compat&deps=preact@{preact version that you use in your fresh app}`

For example:
* `@tanstack/react-query@4.19.1` while using fresh with `preact@10.11.0`: `https://esm.sh/@tanstack/react-query@4.19.1?alias=react:preact/compat,react-dom:preact/compat&deps=preact@10.11.0`
* `react-hook-form@7.40.0` while using fresh with `preact@10.11.0`: `https://esm.sh/react-hook-form@7.40.0?alias=react:preact/compat,react-dom:preact/compat&deps=preact@10.11.0`

Most likely you will run into something like this:
```
<ReactComponent>
  <PreactComponent />
</ReactComponent>
```

React has different children definitions than preact - it is expected to be a type error.
(event handler types are different too)

# Using general-purpose libraries in Deno/fresh

Short answer:

You import
`https://esm.sh/{npm name with npm version}`

For example:
* `parse-json@6.0.2` will be `https://esm.sh/parse-json@6.0.2`

Deno docs:
* https://deno.land/manual/node/cdns
* https://deno.land/manual/node/npm_specifiers

# Want more?

Submit GHI/PR.


# fresh project

### Usage

Start the project:

```
deno task start
```

This will watch the project directory and restart as necessary.
