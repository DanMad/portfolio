import Article from 'components/article';
import Heading from 'components/heading';
import Media from 'components/media';
import Page from 'components/page';
import Paragraph from 'components/paragraph';

function OpenCollegesDesignSystem() {
  return (
    <Page title="Open Colleges’ Design System">
      <Article>
        <Media
          alt="Small and large compositions of Sign In pages that leverage Open Colleges’ Design System"
          background={{
            dark: '#1db6bf',
            light: '#1db6bf',
          }}
          src="/assets/oc-sign-in-comps.png"
          type="image"
        />
        <Heading isCopyable={false}>Open Colleges&rsquo; Design System</Heading>
        <Heading isCopyable={false} level="2">
          Background
        </Heading>
        <Paragraph>
          While working in the Product Team at Open Colleges, it became clear
          that our Learning Management System (LMS) was lacking cohesion. An
          interface audit revealed several critical issues, including divergent
          colour palettes, inconsistent typeface usage, and many different
          interpretations of common HTML elements. These inconsistencies
          weren&rsquo;t just cosmetic; they were creating a fragmented user
          experience for students and staff. They also introduced substantial
          inefficiencies in design and development workflows, as we repeatedly
          solved the same problems—redesigning solutions and rebuilding patterns
          we&rsquo;d already worked through in the past.
        </Paragraph>
        <Paragraph>
          This exposed a larger issue: the absence of a coherent approach was
          not only detracting from the user experience, but also slowing down
          delivery, contributing to delays and unnecessary rework. It became
          evident that to move forward, we needed a consistent language and a
          shared vision to inform the way we worked.
        </Paragraph>
        <Heading level="2">Objective</Heading>
        <Paragraph>
          With Salesforce launching Lightning Design System and Brad Frost
          publishing Atomic Design, we saw an opportunity to adopt a similar
          approach to resolve our challenges. Our long-term goal was to build a
          design system that would standardise our visual language, define
          reusable patterns and conventions, and ultimately, reduce cognitive
          load for users by providing a more intuitive user experience.
        </Paragraph>
        <Paragraph>
          Additionally, a design system could potentially optimise our design
          and development workflows, improving delivery times. We were aiming to
          align the efforts of design and development teams to avoid redesigning
          and rebuilding elements, components, and even some small features.
          Centralising these decisions wouldn&rsquo;t just increase efficiency,
          it would lead to improved output, enhanced quality, or a combination
          of both.
        </Paragraph>
        <Paragraph>
          With this in mind, we set out to build a design system that would
          address immediate challenges and scale with future requirements.
        </Paragraph>
        <Media
          alt="Small compositions of Quiz pages that leverage Open Colleges’ Design System"
          background={{
            dark: '#e5bb0c',
            light: '#e5bb0c',
          }}
          src="/assets/oc-quiz-comps.png"
          type="image"
        />
        <Heading level="2">Outcome</Heading>
        <Paragraph>
          The design system quickly became the single source of truth for both
          designers and developers and solved the problems that we initially set
          out to. This meant that we could prioritise higher-value tasks, such
          as refining user flows and incorporating functionality into features
          that we otherwise couldn&rsquo;t afford to do because of resourcing
          constraints.
        </Paragraph>
        <Media
          alt="A large composition of a Payment page that leverages Open Colleges’ Design System"
          background={{
            dark: '#19984c',
            light: '#19984c',
          }}
          src="/assets/oc-payment-comp.png"
          type="image"
        />
        <Paragraph>
          By abstracting the front of the front-end into reusable components,
          developers noticed a meaningful change in their workflow. One went so
          far as to say “The design system allowed him to deliver in half the
          time, and focus on high-value work instead of annoying, repetitive
          tasks.”
        </Paragraph>
        <Paragraph>
          While the design system brought about tangible improvements, securing
          stakeholder buy-in was one of our biggest challenges throughout this
          process. We had to clearly communicate its long-term ROI, demonstrate
          its alignment with strategic goals, and effectively advocate for its
          value across departments. Through persistence, clear communication,
          and collaboration, we gained the necessary support to continue pushing
          forward.
        </Paragraph>
        <Paragraph>
          I was fortunate to play a key role in establishing the design system,
          but its success was an incredible team effort. The integration into
          our workflows was made possible by the close collaboration of
          designers, developers and product owners across the team. The system
          became central to our process, enabling faster iterations, reducing
          redundancy, and tightening the feedback loop between designers and
          developers, and across the whole Product Team.
        </Paragraph>
        <Paragraph>
          Ultimately, the design system laid the groundwork for a more
          efficient, cohesive, and scalable product. It reshaped how we worked,
          improved collaboration, and elevated the user experience—setting the
          scene for future experimentation and innovation.
        </Paragraph>
      </Article>
    </Page>
  );
}

OpenCollegesDesignSystem.displayName = 'PersonalBrand';

export default OpenCollegesDesignSystem;
