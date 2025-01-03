<template>
  <div class="stageRestyling">
    <NavBar />
    <HomeSection />
    <AboutSection />
    <ServiceSection />
    <ContactSection />
    <PortfolioSection />
    <FooterSection />
  </div>
</template>

<script>
import NavBar from '~/components/NavBar.vue'
import HomeSection from '@/components/sections/HomeSection'
import AboutSection from '@/components/sections/AboutSection'
import ServiceSection from '@/components/sections/ServiceSection'
import ContactSection from '@/components/sections/ContactSection'
import PortfolioSection from '@/components/sections/PortfolioSection'
import FooterSection from '@/components/FooterSection.vue'

export default {
  name: 'IndexPage',
  components: {
    NavBar,
    HomeSection,
    AboutSection,
    ServiceSection,
    ContactSection,
    PortfolioSection,
    FooterSection,
  },
  head() {
    return {
      title: "Stage Restyling | Window Tinting, Vinyl Wraps, Paint Protection Film, Ceramic Coating in Edmonton",
      meta: [
        {
          name: "description",
          content: "Stage Restyling offers professional window tinting, paint protection film (3M/Xpel), vinyl wraps, and ceramic coating services in Edmonton, Canada. Contact us today for quality car care.",
        },
        {
          property: "og:title",
          content: "Stage Restyling | Professional Car Customization in Edmonton",
        },
        {
          property: "og:description",
          content: "Get high-quality car customization with Stage Restyling in Edmonton. We specialize in window tinting, vinyl wraps, paint protection films, and ceramic coating.",
        },
        {
          property: "og:image",
          content: "/_nuxt/assets/images/logo.png",
        },
        {
          property: "og:url",
          content: "https://stagerestyling.ca/",
        },
        {
          property: "og:type",
          content: "website",
        },
      ],
      link: [
        {
          rel: "canonical",
          href: "https://stagerestyling.ca/",
        },
      ],
    };
  }
}
</script>

<style>
.stageRestyling {
  background: #F7F7F7;
}
</style>
