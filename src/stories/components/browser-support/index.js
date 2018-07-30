import React from 'react';
import {storiesOf} from '@storybook/react';
import {withKnobs, select, boolean} from '@storybook/addon-knobs/react';
import withReadme from 'storybook-readme/with-readme';
import {ThemeSelector} from "../../../addons/ThemeSwitcher";

import {BrowserSupport} from '../../../components';
import Readme from '../../../components/BrowserSupport/README.md';

const browsers = [{
	vendor: "firefox",
	version: "> 56"
}, {
	vendor: "chrome",
	version: "= 62"
}, {
	vendor: "iexplore",
	version: "> 9"
}, {
	vendor: "safari",
	version: "> 25"
}, {
	vendor: "netscape",
	version: "> 42.6"
}, {
	vendor: "opera",
	version: "< 15.6"
}, {
	vendor: "maxthon",
	version: ">= 10"
}];

const stories = storiesOf('Components', module);

stories.addDecorator(withKnobs);

stories.add('Browsers support', withReadme([Readme], () => {
	return (
  <ThemeSelector>
    <BrowserSupport
      browsers={browsers}
      showText={boolean("Show text", true)}
    />
  </ThemeSelector>
	);
}));