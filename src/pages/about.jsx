import Article from 'components/article';
import Heading from 'components/heading';
import Page from 'components/Page';

function About() {
  return (
    <Page title="About">
      <Article>
        <Heading isCopyable={false}>About</Heading>
        <Heading isCopyable={false} level="2">
          Profile
        </Heading>
        <p className="p">
          I&rsquo;m a designer that codes, specialising in user interface and
          design systems, with a keen interest in pushing technical limits to
          preserve design integrity.
        </p>
        <p className="p">
          I have a deep understanding of design and development that enables me
          to be flexible and efficient. I make informed, balanced decisions
          within the constraints of both disciplines, bridge communication
          between teams, and thrive during delivery across several stages of a
          project.
        </p>
        <Heading level="2">Experience</Heading>
        <Heading level="3">Front-End Developer (UI Engineer)</Heading>
        <p className="p">Up Education | Aug 2023&ndash;Dec 2024</p>
        <ul className="ul">
          <li className="li">
            Designed and developed responsive user interfaces, delivering
            seamless user experiences across devices.
          </li>
          <li className="li">
            Implemented front-end frameworks and technologies, optimising
            application performance and scalability.
          </li>
          <li className="li">
            Built new functionality that integrated with front-end and back-end
            APIs, improving data accuracy and synchronisation.
          </li>
          <li className="li">
            Collaborated with back-end developers, aligning front-end
            development with overarching product requirements.
          </li>
          <li className="li">
            Managed releases, coordinating branches and pipelines to ensure
            streamlined deployments.
          </li>
        </ul>
        <Heading level="3">Head of Design</Heading>
        <p className="p">Up Education | Dec 2020&ndash;Aug 2023</p>
        <ul className="ul">
          <li className="li">
            Established a team, scaling as the organisation's needs evolved and
            expanded.
          </li>
          <li className="li">
            Fostered a culture of continuous learning and development, refining
            design practices across the team.
          </li>
          <li className="li">
            Introduced workflows that improved team capacity and capability,
            enhancing timeframes and quality.
          </li>
          <li className="li">
            Engaged cross-functional teams, strengthening communication to unify
            design execution with the organisation's objectives.
          </li>
          <li className="li">
            Launched the organisation's design system, supporting multi-tenancy
            for more versatile feature delivery.
          </li>
        </ul>
        <Heading level="3">Design Lead</Heading>
        <p className="p">Up Education | Jan 2020&ndash;Dec 2020</p>
        <ul className="ul">
          <li className="li">
            Established a team, scaling as the organisation's needs evolved and
            expanded.
          </li>
          <li className="li">
            Fostered a culture of continuous learning and development, refining
            design practices across the team.
          </li>
          <li className="li">
            Introduced workflows that improved team capacity and capability,
            enhancing timeframes and quality.
          </li>
          <li className="li">
            Engaged cross-functional teams, strengthening communication to unify
            design execution with the organisation's objectives.
          </li>
          <li className="li">
            Launched the organisation's design system, supporting multi-tenancy
            for more versatile feature delivery.
          </li>
        </ul>
        <Heading level="3">Lead Designer</Heading>
        <p className="p">Open Colleges | Apr 2018&ndash;Jan 2020</p>
        <ul className="ul">
          <li className="li">
            Created user interfaces, aligning them with the organisation's brand
            identity.
          </li>
          <li className="li">
            Managed relationships across product teams, ensuring deliverables
            aligned with stakeholder requirements.
          </li>
          <li className="li">
            Mentored team members, offering creative direction and technical
            feedback to optimise design output.
          </li>
          <li className="li">
            Represented the design team in cross-functional meetings, amplifying
            its voice during decision-making.
          </li>
          <li className="li">
            Initiated the organisation&rsquo;s design system, advocating for a
            unified approach to features and user experience.
          </li>
        </ul>
        <Heading level="3">Digital Designer</Heading>
        <p className="p">Open Colleges | Oct 2013&ndash;Apr 2018</p>
        <ul className="ul">
          <li className="li">
            Produced numerous assets and layouts, maintaining design integrity
            while meeting tight deadlines.
          </li>
          <li className="li">
            Designed and delivered user interfaces, aligning them with the
            organisation&rsquo;s brand identity.
          </li>
          <li className="li">
            Assisted senior team members with execution, contributing to
            high-value features and product enhancements.
          </li>
          <li className="li">
            Collaborated with developers to integrate design elements, ensuring
            seamless front-end implementation.
          </li>
          <li className="li">
            Conducted quality assurance on visual elements, ensuring
            pixel-perfect accuracy across devices and platforms.
          </li>
        </ul>
        <Heading level="2">Education and Certifications</Heading>
        <Heading level="3">Certificate IV in Web Technologies</Heading>
        <p className="p">Open Colleges | Oct 2019</p>
        <Heading level="3">Product Management: Elevate</Heading>
        <p className="p">Academy Xi | Nov 2018</p>
        <Heading level="3">React.js (Advanced)</Heading>
        <p className="p">SuperHi | Jun 2018</p>
        <Heading level="3">User Experience Design</Heading>
        <p className="p">General Assembly | Jun 2015</p>
        <Heading level="3">Diploma of Animation</Heading>
        <p className="p">Yoobee School of Design | Dec 2006</p>
        <Heading level="3">Diploma of Multimedia</Heading>
        <p className="p">Yoobee School of Design | Dec 2005</p>
        <Heading level="2">References</Heading>
        <p className="p">References are available upon request.</p>
      </Article>
    </Page>
  );
}

About.displayName = 'About';

export default About;
