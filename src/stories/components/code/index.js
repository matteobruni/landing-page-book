import React from 'react';
import {storiesOf} from '@storybook/react';
import {withKnobs, text, select, boolean} from '@storybook/addon-knobs/react';
import withReadme from 'storybook-readme/with-readme';
import {ThemeSelector} from "../../../addons/ThemeSwitcher";

import {Code} from '../../../components';
import Readme from '../../../components/Code/README.md';

const stories = storiesOf('Components', module);


stories.addDecorator(withKnobs);

const langoptions = {
  javascript: 'javascript',
  markdown: 'markdown',
  jsx: 'jsx',
  css: 'css',
  sass: 'sass'
}; 

stories.add('Code', withReadme([Readme], () => {
return (
  <ThemeSelector>
    <Code 
      code={text("Code", 'var component = {\n\tname: "react-code",\n\tauthor: "front10-devs",\n\trepo: "https://gitlab.com/front10-devs/landing-page-book"\n};')}
      languageCode={select("Language", langoptions, 'javascript')}
      readOnly={boolean("Read Only", false)}
      lineNumbers={boolean("Show line numbers", true)}
      bgColorDark={boolean("Background color dark", false)}
      showheader={boolean("Show header", true)}
      showfooter={boolean("Show footer", true)}
      updateCode={(newCode)=>{console.log(newCode)}}
    />
  </ThemeSelector>
);
}));