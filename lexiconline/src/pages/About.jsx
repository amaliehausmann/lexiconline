import { PageTitle } from "../components/Pagetitle/Pagetitle";
import { TitleBox } from "../components/TitleBox/TitleBox";
import { PageWrapper } from "../components/PageWrapper/PageWrapper";
import { AboutText } from "../components/AboutText/AboutText";
export function About() {
  return (
    <div>
      <PageTitle pageTitle="About"></PageTitle>
      <TitleBox title='About Lexiconline'  styling='aboutTitleBox'></TitleBox>
      <PageWrapper>
        <AboutText></AboutText>
      </PageWrapper>
    </div>
  );
}
