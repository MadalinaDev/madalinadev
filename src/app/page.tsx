import LandingPage from "@/components/common/landingPage";
import { site } from "@/lib/site";
import { siteUrl } from "@/lib/site-url";

// schema.org description of the page and the person it is about
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfilePage",
      "@id": `${siteUrl.href}#page`,
      url: siteUrl.href,
      name: site.title,
      description: site.description,
      mainEntity: { "@id": `${siteUrl.href}#person` },
    },
    {
      "@type": "Person",
      "@id": `${siteUrl.href}#person`,
      name: site.name,
      url: siteUrl.href,
      jobTitle: "Full-stack engineer",
      description: site.role,
      email: `mailto:${site.email}`,
      worksFor: { "@type": "Organization", name: site.employer },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Chișinău",
        addressCountry: "MD",
      },
      sameAs: site.profiles.map((profile) => profile.href),
      knowsAbout: [
        "Laravel",
        "PHP",
        "Next.js",
        "React",
        "TypeScript",
        "Vue.js",
        "PostgreSQL",
        "MySQL",
        "Competitive programming",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl.href}#website`,
      url: siteUrl.href,
      name: site.domain,
      author: { "@id": `${siteUrl.href}#person` },
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <LandingPage />
    </>
  );
}
