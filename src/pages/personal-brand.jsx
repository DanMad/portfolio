import Article from 'components/article';
import Heading from 'components/heading';
import Page from 'components/Page';

function PersonalBrand() {
  return (
    <Page title="Personal Brand">
      <Article>
        <Heading isCopyable={false}>Personal Brand</Heading>
        <Heading level="2">Background</Heading>
        <Heading level="2">Objective</Heading>
        <Heading level="2">Outcome</Heading>
      </Article>
    </Page>
  );
}

PersonalBrand.displayName = 'PersonalBrand';

export default PersonalBrand;
