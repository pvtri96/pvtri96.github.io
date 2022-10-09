import React from "react";
import Helmet from "react-helmet";
import Thumbnail from "assets/thumbnail/thumbnail.png";
import config from "data/config";

export const SEO = () => {
  const structuredDataOrganization = useStructuredDataOrganization();
  return (
    <Helmet>
      <meta name="description" content={config.description} />
      <meta name="image" content={Thumbnail} />

      <meta property="og:url" content={`${config.url}`} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={config.title} />
      <meta property="og:description" content={config.description} />
      <meta property="og:image" content={Thumbnail} />
      <meta property="fb:app_id" content={config.social.facebook} />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={config.title} />
      <meta name="twitter:description" content={config.description} />
      <meta name="twitter:image:src" content={Thumbnail} />
      <script type="application/ld+json">{structuredDataOrganization}</script>
      <title>{config.title}</title>
      <html lang="en" dir="ltr" />
    </Helmet>
  );
};

function useStructuredDataOrganization() {
  return `{ 
		  "@context": "http://schema.org",
		  "@type": "Organization",
		  "legalName": "${config.legalName}",
		  "url": "${config.url}",
		  "logo": "${config.logo}",
		  "foundingDate": "${config.foundingDate}",
		  "founders": [{
			  "@type": "Person",
			  "name": "${config.legalName}"
		  }],
		  "contactPoint": [{
			  "@type": "ContactPoint",
			  "email": "${config.contact.email}",
			  "telephone": "${config.contact.phone}",
			  "contactType": "customer service"
		  }],
		  "address": {
			  "@type": "PostalAddress",
			  "addressLocality": "${config.address.city}",
			  "addressRegion": "${config.address.region}",
			  "addressCountry": "${config.address.country}",
			  "postalCode": "${config.address.zipCode}"
		  },
		  "sameAs": [
			  "${config.socialLinks.linkedin}",
			  "${config.socialLinks.github}"
		  ]
		}`;
}
