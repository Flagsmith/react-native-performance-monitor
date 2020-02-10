
import { configure } from '@storybook/react'
import {configure as configureEnzyme} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configureEnzyme({ adapter: new Adapter() });

function loadStories () {
  require('../stories/index')
}

configure(loadStories, module)
