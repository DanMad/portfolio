import Article from 'components/article';
import Heading from 'components/heading';
import Page from 'components/page';
import Paragraph from 'components/paragraph';

function EddyDesignSystem() {
  return (
    <Page title="Eddy Design System">
      <Article>
        <Heading isCopyable={false}>Eddy Design System</Heading>
        <Heading isCopyable={false} level="2">
          Background
        </Heading>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at
          velit ut purus feugiat dictum. Integer vehicula mi ac turpis
          convallis, ac dictum metus facilisis. Phasellus tempor viverra tortor,
          eu gravida elit faucibus vel. Donec ultricies, velit eu varius congue,
          lectus ante elementum risus, at mollis lorem erat a sapien. Fusce eget
          tortor non ligula tempor vulputate eu non est.
        </Paragraph>
        <Paragraph>
          Curabitur at est sed lorem pretium vehicula ut vel ante. Cras
          tristique gravida metus, et faucibus felis sollicitudin et. Ut
          aliquam, odio non sollicitudin euismod, erat ante tincidunt orci, non
          aliquam nunc elit vel mauris. Morbi tincidunt est eu est vehicula, id
          feugiat risus accumsan. Nam at pharetra ligula. Aliquam eu arcu et
          magna fermentum viverra at vel elit.
        </Paragraph>
        <Heading level="2">Objective</Heading>
        <Paragraph>
          Sed sollicitudin lorem non mi egestas, at vulputate nunc interdum.
          Aenean id viverra enim. Mauris euismod velit at turpis cursus, id
          pharetra sapien hendrerit. Vivamus id ante justo. Integer iaculis
          ligula ut erat sollicitudin, ac convallis nisl fermentum. Nam quis
          nunc et sapien euismod facilisis eget a elit. Suspendisse sit amet leo
          lorem. Nam tempus mi nec lorem suscipit, non convallis sapien
          dignissim.
        </Paragraph>
        <Paragraph>
          Integer viverra malesuada ex, in auctor lectus tempor vel. Nunc
          sollicitudin nulla eget tempus auctor. Phasellus placerat ipsum id mi
          lacinia tempus. Proin tempus sollicitudin ipsum id rutrum. Fusce
          tristique hendrerit dolor, euismod gravida arcu. Ut ut mi justo.
          Suspendisse consequat ac ipsum vel lobortis. In at felis felis. Donec
          id dui ligula.
        </Paragraph>
        <Heading level="2">Outcome</Heading>
        <Paragraph>
          Aenean aliquam, enim a aliquam pharetra, elit turpis tincidunt purus,
          ac scelerisque libero sem vel purus. Nulla ut quam vel lectus vehicula
          volutpat sit amet sed elit. Nam vulputate eros ut bibendum aliquam.
          Morbi laoreet vestibulum magna, id posuere turpis viverra eu. Vivamus
          vulputate orci vel nunc auctor maximus. Proin feugiat sem vitae leo
          faucibus, eget vehicula purus varius. In et risus odio.
        </Paragraph>
        <Paragraph>
          Aliquam tincidunt lorem vitae orci viverra, vitae feugiat dui luctus.
          In facilisis dolor et nunc varius, sit amet posuere ante facilisis.
          Nam eget vestibulum nunc. Integer scelerisque mi eu tortor vestibulum
          suscipit. Mauris in bibendum felis. Sed aliquet felis eget sapien
          tincidunt, vitae fermentum orci sodales. Nulla ornare orci ipsum, eget
          convallis metus laoreet sit amet. Donec molestie ullamcorper nunc, non
          auctor dui auctor sed.
        </Paragraph>
      </Article>
    </Page>
  );
}

if (process.env.NODE_ENV !== 'production') {
  EddyDesignSystem.displayName = 'EddyDesignSystem';
}

export default EddyDesignSystem;
