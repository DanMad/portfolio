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
            darkMode: '#00ffee',
            lightMode: '#01b3f7',
          }}
          src="/assets/personal-brand-large-various-comps.png"
          type="image"
        />
        <Heading isCopyable={false}>Personal Brand</Heading>
        <Heading level="2">Background</Heading>
        <Paragraph>
          This project was born from necessity. My online presence had fallen
          behind, and I needed a brand identity that captured who I am: creative
          but precise, technical but human. I wanted to strike a
          balance&mdash;something expressive enough to feel like <em>me</em>,
          but restrained enough that it wouldn&rsquo;t compete with the work I
          wanted to showcase.
        </Paragraph>
        <Paragraph>
          There was also a broader strategic need: as both a jobseeker and
          freelancer, I needed a digital foundation that could scale with my
          ambitions. That meant designing not just a visual language, but a
          system&mdash;one that could work just as well on a screen as it could
          in a PDF résumé, invoice, or proposal.
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
          The challenge was to build a personal design system that extended
          beyond the browser. While most design systems are tailored for
          flexible, digital layouts, mine also had to function within the fixed
          constraints of print. Designing responsively for A4 pages, with their
          immutable dimensions, presented a unique set of spatial and
          typographic challenges&mdash;ones I rarely face when designing purely
          for the web.
        </Paragraph>
        <Paragraph>
          My aim was to create a lightweight but versatile identity system that
          could stretch across multiple touchpoints: website, portfolio,
          documentation, and business comms. It had to reflect a high level of
          craft, without stealing the spotlight from the work it was meant to
          support. And it had to load fast and run lean&mdash;performance was
          just as much a design decision as colour or type.
        </Paragraph>
        <Paragraph>
          Crucially, I wanted to sidestep the noise of templated site builders
          and generic portfolios. This needed to be hand-built, not just to
          reflect my technical capabilities, but to show that I can design and
          develop systems that scale cleanly and feel considered from every
          angle.
        </Paragraph>
        <Media
          alt="Large compositions of Daniel Maddison’s Design System"
          background={{
            darkMode: '#222527',
            lightMode: '#e5e3dc',
          }}
          src="/assets/personal-brand-design-system-comps.png"
          type="image"
        />
        <Heading level="2">Outcome</Heading>
        <Paragraph>
          What emerged was a concise but capable design system that underpins my
          personal brand across both digital and print media. From dark mode
          toggles to typographic grids optimised for A4 layouts, the system
          supports everything from my portfolio site to client-facing documents
          like quotes and résumés—ensuring brand continuity wherever my work
          appears.
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
          The website was built from the ground up without templates or
          frameworks, giving me full control over performance, accessibility,
          and tone. It functions as both a showcase and a sandbox—housing my
          projects while evolving alongside them.
        </Paragraph>
        <Media
          alt="Small compositions of a project page that leverage Daniel Maddison’s Personal Brand and Design System"
          background="#01b3f7"
          src="/assets/personal-brand-small-project-comps-dual.png"
          type="image"
        />
        <Paragraph>
          This wasn&rsquo;t just a design exercise—it was an investment in
          professional clarity. The result is a system that&rsquo;s technically
          sound, visually distinctive, and reflective of where I&rsquo;ve been
          and where I&rsquo;m heading. As it continues to grow, I&rsquo;m
          excited to layer in more interactivity to deepen the storytelling and
          expand the reach of my work.
        </Paragraph>
        <Heading level="2">Insights</Heading>
        <Paragraph>
          Creating a personal brand is always going to be a bit
          introspective—but what surprised me was how much technical constraint
          can fuel creative clarity. Designing for both screen and static page
          formats forced me to interrogate the fundamentals: spacing, rhythm,
          legibility, tone. There&rsquo;s nowhere to hide on a blank A4 page.
        </Paragraph>
        <Paragraph>
          The process also reminded me just how easy it is to overlook your own
          needs when you're used to designing for clients or products. In some
          ways, this was about reclaiming that space—giving myself the time and
          permission to build something thoughtful, for me. And in doing so, I
          ended up with more than a portfolio. I created a system I can rely on,
          one that&rsquo;s flexible enough to evolve as my work does.
        </Paragraph>
        <Paragraph>
          Finally, this project reinforced how important it is to treat even
          personal work with the same level of rigour and respect you&rsquo;d
          give to client-facing projects. Whether it&rsquo;s a small invoice or
          a large case study, consistency matters. Presentation matters. And
          more often than not, the systems behind the scenes are what make it
          all work.
        </Paragraph>
      </Article>
    </Page>
  );
}

PersonalBrand.displayName = 'PersonalBrand';

export default PersonalBrand;
