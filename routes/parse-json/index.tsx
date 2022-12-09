import parseJson from "esmsh/parse-json";
import { Layout } from "@/Layout.tsx";
import { RE, RenderExample } from "@/RenderExample.tsx";

const exampleArray = [
  `invalid json`,
  `{ noquotes: 1 }`,
  `{ "quotes": "but without closing brace"`,
  `undefined`,
  `[]`,
  ``,
  `{ "actually": "correct one" }`
];

const showResult = (json: string): RE => {
  try {
    return { result: JSON.stringify(parseJson(json, "exampleArray item", "asd")), error: null };
  } catch (error) {
    return { result: null, error: error.message };
  }
}

export default () => {
  return (
    <Layout
      title="react-hook-form"
    >
      {
        exampleArray.map((data) => {
          return (
            <RenderExample data={data} {...showResult(data)} />
          );
        })
      }
    </Layout>
  );
};
