import Article from 'components/article';
import Heading from 'components/heading';
import List, { ListItem } from 'components/list';
import Page from 'components/page';
import Paragraph from 'components/paragraph';

function About() {
  return (
    <Page title="About">
      <Article>
        <Heading isCopyable={false}>About</Heading>
        <Heading isCopyable={false} level="2">
          Profile
        </Heading>
        <Paragraph>
          I&rsquo;m a product designer with a focus on design systems, dedicated
          to preserving design integrity by pushing technical boundaries. I
          think in systems <em>and</em> sweat the details.
        </Paragraph>
        <Paragraph>
          With a deep understanding of both design and development, I&rsquo;m
          able to be flexible and efficient. I make informed, balanced decisions
          within the constraints of both disciplines, bridge communication
          between teams, and thrive during every stage of a project.
        </Paragraph>
        <Heading level="2">Experience</Heading>
        <Heading level="3">Front-End Developer (UI Engineer)</Heading>
        <Paragraph>Up Education | Aug 2023&ndash;Dec 2024</Paragraph>
        <List>
          <ListItem>
            Designed and developed responsive user interfaces, delivering
            seamless user experiences across devices.
          </ListItem>
          <ListItem>
            Implemented front-end frameworks and technologies, optimising
            application performance and scalability.
          </ListItem>
          <ListItem>
            Built new functionality that integrated with front-end and back-end
            APIs, improving data accuracy and synchronisation.
          </ListItem>
          <ListItem>
            Collaborated with back-end developers, aligning front-end
            development with overarching product requirements.
          </ListItem>
          <ListItem>
            Managed releases, coordinating branches and pipelines to ensure
            streamlined deployments.
          </ListItem>
        </List>
        <Heading level="3">Head of Design</Heading>
        <Paragraph>Up Education | Dec 2020&ndash;Aug 2023</Paragraph>
        <List>
          <ListItem>
            Established a team, scaling as the organisation's needs evolved and
            expanded.
          </ListItem>
          <ListItem>
            Fostered a culture of continuous learning and development, refining
            design practices across the team.
          </ListItem>
          <ListItem>
            Introduced workflows that improved team capacity and capability,
            enhancing timeframes and quality.
          </ListItem>
          <ListItem>
            Engaged cross-functional teams, strengthening communication to unify
            design execution with the organisation's objectives.
          </ListItem>
          <ListItem>
            Launched the organisation's design system, supporting multi-tenancy
            for more versatile feature delivery.
          </ListItem>
        </List>
        <Heading level="3">Design Lead</Heading>
        <Paragraph>Up Education | Jan 2020&ndash;Dec 2020</Paragraph>
        <List>
          <ListItem>
            Established a team, scaling as the organisation's needs evolved and
            expanded.
          </ListItem>
          <ListItem>
            Fostered a culture of continuous learning and development, refining
            design practices across the team.
          </ListItem>
          <ListItem>
            Introduced workflows that improved team capacity and capability,
            enhancing timeframes and quality.
          </ListItem>
          <ListItem>
            Engaged cross-functional teams, strengthening communication to unify
            design execution with the organisation's objectives.
          </ListItem>
          <ListItem>
            Launched the organisation's design system, supporting multi-tenancy
            for more versatile feature delivery.
          </ListItem>
        </List>
        <Heading level="3">Lead Designer</Heading>
        <Paragraph>Open Colleges | Apr 2018&ndash;Jan 2020</Paragraph>
        <List>
          <ListItem>
            Created user interfaces, aligning them with the organisation's brand
            identity.
          </ListItem>
          <ListItem>
            Managed relationships across product teams, ensuring deliverables
            aligned with stakeholder requirements.
          </ListItem>
          <ListItem>
            Mentored team members, offering creative direction and technical
            feedback to optimise design output.
          </ListItem>
          <ListItem>
            Represented the design team in cross-functional meetings, amplifying
            its voice during decision-making.
          </ListItem>
          <ListItem>
            Initiated the organisation&rsquo;s design system, advocating for a
            unified approach to features and user experience.
          </ListItem>
        </List>
        <Heading level="3">Digital Designer</Heading>
        <Paragraph>Open Colleges | Oct 2013&ndash;Apr 2018</Paragraph>
        <List>
          <ListItem>
            Produced numerous assets and layouts, maintaining design integrity
            while meeting tight deadlines.
          </ListItem>
          <ListItem>
            Designed and delivered user interfaces, aligning them with the
            organisation&rsquo;s brand identity.
          </ListItem>
          <ListItem>
            Assisted senior team members with execution, contributing to
            high-value features and product enhancements.
          </ListItem>
          <ListItem>
            Collaborated with developers to integrate design elements, ensuring
            seamless front-end implementation.
          </ListItem>
          <ListItem>
            Conducted quality assurance on visual elements, ensuring
            pixel-perfect accuracy across devices and platforms.
          </ListItem>
        </List>
        <Heading level="2">Education and Certifications</Heading>
        <Heading level="3">Certificate IV in Web Technologies</Heading>
        <Paragraph>Open Colleges | Oct 2019</Paragraph>
        <Heading level="3">Product Management: Elevate</Heading>
        <Paragraph>Academy Xi | Nov 2018 </Paragraph>
        <Heading level="3">React.js (Advanced)</Heading>
        <Paragraph>SuperHi | Jun 2018</Paragraph>
        <Heading level="3">User Experience Design</Heading>
        <Paragraph>General Assembly | Jun 2015</Paragraph>
        <Heading level="3">Diploma of Animation</Heading>
        <Paragraph>Yoobee School of Design | Dec 2006</Paragraph>
        <Heading level="3">Diploma of Multimedia</Heading>
        <Paragraph>Yoobee School of Design | Dec 2005</Paragraph>
        <Heading level="2">References</Heading>
        <Paragraph>References are available upon request.</Paragraph>
      </Article>
    </Page>
  );
}

About.displayName = 'About';

export default About;
