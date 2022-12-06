import { Head } from "$fresh/runtime.ts";

type LayoutProps = {
  title: string;
};
export const Layout: preact.FunctionComponent<LayoutProps> = ({
  title,
  children
}) => {
  return (
    <>
      <Head>
        <title>Example {title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div
        class="flex flex-col items-center p-5 md:p-10 lg:p-30 w-full overflow-hidden min-h-screen"
        style="background-image:url('https://dash.deno.com/assets/background-pattern.svg')"
      >
      { children }
      </div>
    </>
  )
}
