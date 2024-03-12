import Head from "next/head";
import { NavBar } from "@/components/";
import { Footer } from "@/components";
import { CommonProps } from "@/types";
import { TITLE_SITE } from "@/constant";

export const Layout: React.FC<
  CommonProps & {
    /**
     * Text to use as page <title>. It should represent what the current page is about.
     * The website name is appended to the title automatically.
     */
    title: string;
  }
> = ({ title, ...props }) => {
  const isHomepage = title === TITLE_SITE;
  const pageTitle = isHomepage ? title : `${title} - ${TITLE_SITE}`;
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta
          key="ogtitle"
          property="og:title"
          content={
            isHomepage ? "Travailler avec La Suite numérique" : pageTitle
          }
        />
      </Head>
      <NavBar />
      <main {...props}>{props.children}</main>
      <Footer />
    </>
  );
};
