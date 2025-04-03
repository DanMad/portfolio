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
            dark: '#00ffee',
            light: '#01b3f7',
          }}
          src="/assets/personal-brand-large-various-comps.png"
          type="image"
        />
        <Heading isCopyable={false}>Personal Brand</Heading>
        <Heading level="2">Background</Heading>
        <Paragraph>
          I needed a strong identity to represent myself online—one that
          implicitly communicated how I blend creativity with precision. My goal
          was clear: to establish an identity that would align with my personal
          and professional values, showcasing my commitment to detail, the
          quality of my work, and the technical expertise I bring to every
          project. I wanted my online presence to be more than just a display of
          my work; it had to reflect my evolution as a designer and developer,
          making a lasting impression on clients, employers, and peers alike.
        </Paragraph>
        <Media
          alt="Small compositionss of various pages that leverage Daniel Maddison’s Personal Brand and Design System"
          background={{
            dark: '#00ffee',
            light: '#01b3f7',
          }}
          src="/assets/personal-brand-small-various-comps.png"
          type="image"
        />
        <Paragraph>
          While the design side wasn&rsquo;t technically challenging, there was
          a delicate balance to strike between creating a strong identity and
          ensuring the design decisions didn&rsquo;t overshadow the work I was
          showcasing. My portfolio needed to shine on its own, without being
          overpowered by its design system. On the development side, performance
          was key. I wanted to ensure that the site was optimized, with minimal
          resource usage, and that it wasn&rsquo;t putting unnecessary strain on
          the client, especially with graphical computations and data requests.
        </Paragraph>
        <Heading level="2">Objective</Heading>
        <Paragraph>
          The key aspect I wanted to communicate through my personal brand was
          my unwavering commitment to detail and quality. In a world where the
          line between product and design is often blurred, I felt that
          uniqueness and quality sometimes take a back seat. My goal was to
          avoid this. If my work could be easily replicated, then I could easily
          be replaced. I wanted my personal brand to reflect my dedication to
          creating bespoke, high-quality designs that stand out. This
          wasn&rsquo;t just about design—it was about positioning myself as a
          designer who sees the big picture and who can balance creativity with
          technical expertise.
        </Paragraph>
        <Paragraph>
          I targeted a broad audience, from potential clients to employers and
          fellow designers. Building a stronger online presence was critical,
          and I needed my brand to resonate across all these touchpoints. In
          terms of presentation, my portfolio had to reflect a design philosophy
          that highlighted my technical side as well. I didn&rsquo;t want a
          generic website builder—I wanted a custom-built platform to show off
          my development skills. Every design decision needed to align with my
          core values, and I made sure that everything from the tone of voice to
          the visual style reinforced that commitment.
        </Paragraph>
        <Media
          alt="Large compositions of Daniel Maddison’s Design System"
          background={{
            dark: '#222527',
            light: '#e5e3dc',
          }}
          src="/assets/personal-brand-design-system-comps.png"
          type="image"
        />
        <Heading level="2">Outcome</Heading>
        <Paragraph>
          The outcome was a simple yet powerful design system I could apply
          consistently across my portfolio and beyond. The core of this system
          was built with versatility in mind, not just for digital displays but
          also for print—resumes, quotes, and invoices. This continuity was
          crucial for me as a freelance designer, ensuring a cohesive user
          experience across different media.
        </Paragraph>
        <Media
          alt="Large compositions of various documents that leverage Daniel Maddison’s Personal Brand and Design System"
          background={{
            dark: '#222527',
            light: '#e5e3dc',
          }}
          src="/assets/personal-brand-documents-comps.png"
          type="image"
        />
        <Paragraph>
          I developed my portfolio website entirely from scratch, without
          relying on website builders. The site itself is a reflection of my
          technical capabilities, demonstrating my commitment to creating
          user-centered, functional, and visually engaging designs. It&rsquo;s a
          custom-built platform that houses all my projects, including this one.
        </Paragraph>
        <Media
          alt="Small compositions of a project page that leverage Daniel Maddison’s Personal Brand and Design System"
          background="#01b3f7"
          hasDarkMode={false}
          src="/assets/personal-brand-small-project-comps-dual.png"
          type="image"
        />
        <Paragraph>
          My personal brand now reflects my range of skills, from design to
          front-end development, but also my dedication to quality, precision,
          and thinking at scale. It&rsquo;s a statement of who I am as a
          designer and a developer, and where I&rsquo;m headed. While the site
          is still fresh and the impact is yet to be fully realised, it&rsquo;s
          the foundation of my professional identity moving forward. I&rsquo;m
          excited about how it will evolve with more interactivity in the future
          to tell stories even more effectively.
        </Paragraph>
      </Article>
    </Page>
  );
}

PersonalBrand.displayName = 'PersonalBrand';

export default PersonalBrand;
