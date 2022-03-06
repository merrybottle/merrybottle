// @flow
import React from 'react';
import ContentContainer from 'shared/components/ContentContainer';
import Briefcase from './Briefcase';

type Props = {
  handleClose: Function,
  show: boolean
};

const RecentWork = ({ handleClose, show }: Props) => (
  <ContentContainer
    handleClose={handleClose}
    icon={<Briefcase />}
    show={show}
    title="Recent Work"
  >
    <h2>Personal</h2>
    <p>
      I occasionally work on some personal projects for experimentation :) I&apos;m more of a
      codepenner than a githubber, but feel free to check out either.
    </p>
    <p>
      <strong>See</strong>: <a href="https://codepen.io/merrybottle/pens/public" target="_blank">Codepen</a> / <a href="https://github.com/merrybottle" target="_blank">Github</a>
    </p>

    <h2>@ Oneflare</h2>
    <p>
      During my 3 years @ Oneflare, I have built many front end features, both in the customer and
      business facing side of the platform. This includes the homepage, quoting flow and our React
      UI library / design system.
    </p>
    <p>
      <strong>See</strong>: <a href="http://www.oneflare.com.au" target="_blank">Oneflare</a> / <a href="http://oneflare.design" target="_blank">Design system</a>
    </p>

    <h2>@ Rice Warner</h2>
    <p>
      I joined <a href="https://www.ricewarner.com" target="_blank">Rice Warner</a> in 2012 as a front end developer and was responsible for implementing
      the user interfaces of financial calculators for Rice Warner&apos;s clients.
    </p>
    <p>
      <strong>AMP</strong>: <a href="https://portal.amp.com.au/AMPWhatsMyNumberCampaign/ui/index.html" target="_blank">What&apos;s my number campaign</a><br />
      <strong>MoneySmart</strong>: <a href="https://www.moneysmart.gov.au/tools-and-resources/calculators-and-apps/reverse-mortgage-calculator" target="_blank">Reverse mortgage calculator</a><br />
      <strong>Other clients</strong>: ANZ, Kinetic super, Mercer, Vanguard and Westpac.
    </p>
  </ContentContainer>
);

export default RecentWork;
