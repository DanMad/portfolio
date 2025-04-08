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
          alt="Small and large compositions of sign in pages that leverage Open Colleges’ Design System"
          background={{
            darkMode: '#06b7bf',
            lightMode: '#059f1f',
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
          weren&rsquo;t just cosmetic&mdash;they were creating a fragmented user
          experience for students and staff. They also introduced substantial
          inefficiencies in design and development workflows, as we kept solving
          the same problems&mdash;redesigning solutions and rebuilding patterns
          we&rsquo;d already worked through.
        </Paragraph>
        <Paragraph>
          This highlighted a larger issue. The lack of a consistent approach
          wasn&rsquo;t just slowing delivery, it was introducing unnecessary
          risk, compromising the experience, and contributing to rising
          operational costs. It became clear that we needed a shared language
          and a more scalable way of working, not just to improve our workflows
          but to support the business as its requirements grew.
        </Paragraph>
        <Heading level="2">Objective</Heading>
        <Paragraph>
          At the time, Salesforce had just launched Lightning Design System and
          Brad Frost had published Atomic Design. Inspired by these frameworks,
          we saw an opportunity to introduce a design system that would resolve
          many of the challenges we were facing.
        </Paragraph>
        <Paragraph>
          Our goal was to standardise our visual language, define reusable
          patterns and conventions, and reduce cognitive load for users. But
          more broadly, we aimed to improve efficiency across the
          board—minimising rework, accelerating delivery, and enabling the team
          to focus on higher-value work. By reducing friction and creating
          alignment between design and development, we hoped to lift both the
          quality and consistency of the product, while lowering the cost of
          change.
        </Paragraph>
        <Paragraph>
          Ultimately, we weren&rsquo;t just building a design system—we were
          building the infrastructure that would help the business scale.
        </Paragraph>
        <Media
          alt="Small compositions of quiz pages that leverage Open Colleges’ Design System"
          background={{
            darkMode: '#06ad47',
            lightMode: '#098d58',
          }}
          src="/assets/oc-quiz-comps.png"
          type="image"
        />
        <Heading level="2">Outcome</Heading>
        <Paragraph>
          The design system quickly became the single source of truth for
          designers and developers, solving the problems we initially set out to
          address. It allowed us to shift focus to higher-value tasks, such as
          refining user flows and incorporating functionality we previously
          couldn&rsquo;t prioritise due to resourcing constraints.
        </Paragraph>
        <Paragraph>
          By abstracting common UI patterns into reusable components, we reduced
          complexity and freed up developer capacity. One developer remarked
          that the design system helped him deliver in half the time, allowing
          him to focus on meaningful work instead of repetitive tasks.
        </Paragraph>
        <Paragraph>
          While the benefits were clear to the team, securing stakeholder buy-in
          was a bigger hurdle. We had to position the system not just as a
          design solution, but as a strategic investment. That meant
          articulating its long-term ROI, aligning it with business priorities,
          and communicating its value in terms that resonated with leadership.
          Through persistent communication and cross-functional collaboration,
          we built the case for continued investment and support.
        </Paragraph>
        <Paragraph>
          I was fortunate to play a key role in establishing the design system,
          but its success was a genuine team effort. Integration into our
          workflows was only possible through close collaboration between
          designers, developers, and product owners. The system became an
          operational cornerstone&mdash;enabling faster iterations, reducing
          waste, and tightening feedback loops across the team.
        </Paragraph>
        <Media
          alt="A large composition of a payment page that leverages Open Colleges’ Design System"
          background={{
            darkMode: '#04b768',
            lightMode: '#069b4c',
          }}
          src="/assets/oc-payment-comp.png"
          type="image"
        />
        <Paragraph>
          In the end, the design system helped shift our delivery model from
          reactive to proactive. It created a more cohesive and scalable
          product, reduced cost-to-serve, and gave us the headroom to explore
          new ideas with less overhead.
        </Paragraph>
        <Heading level="2">Insights</Heading>
        <Paragraph>
          The biggest takeaway from this work was how deeply design impacts the
          bottom line when it's systematised. Building the system wasn’t just
          about creating consistency—it was about creating leverage. We
          delivered better outcomes with less effort and opened up new capacity
          for innovation, all while reducing operational friction.
        </Paragraph>
        <Paragraph>
          For me, it reinforced how important it is to frame design work through
          a business lens. When you can show that good design leads to faster
          delivery, lower costs, and better user engagement, it's much easier to
          bring people along for the ride.
        </Paragraph>
      </Article>
    </Page>
  );
}

OpenCollegesDesignSystem.displayName = 'PersonalBrand';

export default OpenCollegesDesignSystem;
