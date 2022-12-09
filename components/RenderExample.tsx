export type RE = { result: string | null; error: string | null; };
export type RenderExampleProps = { data: string } & RE;

export const RenderExample: preact.FunctionComponent<RenderExampleProps> = ({ data, error, result }) => {
  const isError = !!error;
  const output = error ? error : result;
  return (
    <div class="w-full p-2 border-t-1">
      <div>Passing</div>
      {
        (typeof data === "string" && !data)
        ? <code class="bg-gray-300 block p-2 italic">empty string</code>
        : <code class="bg-gray-300 block p-2">{data}</code>
      }
      <div>Produces { isError ? "following error" : "output" }</div>
      <code class="bg-gray-300 block p-2">{output}</code>
    </div>
  );
}
