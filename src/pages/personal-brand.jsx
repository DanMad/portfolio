import Article from 'components/article';
import Heading from 'components/heading';
import Media from 'components/media';
import Page from 'components/page';
import Paragraph from 'components/paragraph';

function PersonalBrand() {
  return (
    <Page title="Personal Brand">
      <Article>
        <Media
          alt="Large compositions of Projects pages that leverage Daniel Maddison’s Personal Brand and Design System"
          background={{
            darkMode: '#04CF0D',
            lightMode: '#15a14d',
          }}
          src="/assets/personal-brand-large-various-comps.png"
          type="image"
        />
        <Heading isCopyable={false}>Personal Brand</Heading>
        <Heading level="2">Background</Heading>
        <Paragraph>
          This project emerged from a clear need. My online presence
          didn&rsquo;t reflect the standard I hold for my work, and I needed a
          brand identity that represented who I am: creative and precise,
          technically adept yet approachable. The goal was to strike a balance,
          something expressive enough to feel personal, but measured enough to
          let the work speak first.
        </Paragraph>
        <Paragraph>
          There was also a practical requirement. As both a jobseeker and
          freelancer, I needed an identity that could adapt to different
          professional contexts. That meant building a system that worked as
          well on a screen as it did across static formats like résumés,
          proposals, and invoices.
        </Paragraph>
        <Media
          alt="Small compositions of various pages that leverage Daniel Maddison’s Personal Brand and Design System"
          background={{
            darkMode: '#00ffee',
            lightMode: '#01b3f7',
          }}
          src="/assets/personal-brand-small-various-comps.png"
          type="image"
        />
        <Heading level="2">Objective</Heading>
        <Paragraph>
          The core challenge was to design a system that extended beyond the
          browser. While most systems are optimized for responsive digital
          layouts, mine also had to perform within the fixed constraints of
          print. Designing for A4 dimensions introduced a distinct set of
          spatial and typographic considerations, rarely encountered in purely
          web-based work.
        </Paragraph>
        <Paragraph>
          My aim was to create a lightweight and adaptable identity that could
          scale across multiple touchpoints: portfolio, marketing material, and
          common business communications. It needed to reflect a high level of
          craft while remaining understated. Performance was a key consideration
          from the outset, treated as a design decision equal to palette or type
          choice.
        </Paragraph>
        <Paragraph>
          I deliberately avoided templates and site builders to ensure the
          system was purpose-built and didn't feel generic. The decision to
          design and develop my portfolio wasn&rsquo;t just about showcasing
          technical ability. It was about demonstrating an end-to-end process
          rooted in clarity, scalability, and attention to detail.
        </Paragraph>
        <Heading level="2">Outcome</Heading>
        <Paragraph>
          The result is a simple, but extensible design system that supports my
          brand across digital and print mediums. From typographic grids
          optimised for A4 to components like dark mode toggles and systemised
          document templates, the identity scales cleanly across use cases,
          including my website, CV and business documentation.
        </Paragraph>
        <Media
          alt="Large compositions of various documents that leverage Daniel Maddison’s Personal Brand and Design System"
          background={{
            darkMode: '#222527',
            lightMode: '#e5e3dc',
          }}
          src="/assets/personal-brand-documents-comps.png"
          type="image"
        />
        <Paragraph>
          The website was developed from scratch, without frameworks or prebuilt
          components, providing full control over accessibility, performance,
          and brand voice. It functions not just as a showcase but as a living
          environment, designed to evolve with my work.
        </Paragraph>
        <Paragraph>
          More than a design exercise, this project was a way to establish
          professional clarity. The system is technically robust, visually
          consistent, and representative of both where I&rsquo;ve been and where
          I&rsquo;m headed. Future iterations will introduce more interactivity
          and narrative depth as my work continues to grow.
        </Paragraph>
        <Heading level="2">Insights</Heading>
        <Paragraph>
          Designing a personal brand is inherently reflective, but one
          unexpected outcome was how much creative direction was shaped by
          technical constraint. Working across both screen and static formats
          required a return to fundamentals: spacing, rhythm, legibility, and
          tone. The fixed nature of print, in particular, left little room to
          hide and demanded precision in every detail.
        </Paragraph>
        <Paragraph>
          The process also highlighted how easily personal work can fall behind
          when you're used to prioritising clients and product teams. This was
          about reclaiming that space and investing in infrastructure that
          reflects my standards. It wasn&rsquo;t just about having a better
          website. It was about creating a reliable system I could trust, one
          that evolves alongside my work.
        </Paragraph>
        <Paragraph>
          Most importantly, it reaffirmed a belief that&rsquo;s shaped my
          practice: personal work deserves the same level of rigour as
          client-facing projects. From case studies to the most minor
          touchpoints, consistency and clarity matter. The quality of the system
          behind the surface is often what defines the experience.
        </Paragraph>
      </Article>
    </Page>
  );
}

PersonalBrand.displayName = 'PersonalBrand';

export default PersonalBrand;
