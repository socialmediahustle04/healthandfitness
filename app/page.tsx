import { HomePage } from "@/components/home/HomePage";
import { HomepageJsonLd } from "@/components/seo/HomepageJsonLd";

export default function Page() {
  return (
    <>
      <HomepageJsonLd />
      <HomePage />
    </>
  );
}
