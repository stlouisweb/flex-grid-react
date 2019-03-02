import { configure, addDecorator } from '@storybook/react';
import { withInfo, setDefaults } from '@storybook/addon-info';
import { withOptions } from '@storybook/addon-options';
import PropTypesTable from './PropTable';
import './style.css';

setDefaults({
  TableComponent: PropTypesTable, // Override the component used to render the props table
});

addDecorator(withInfo());
addDecorator(withOptions({
  /**
   * name to display in the top left corner
   * @type {String}
   */
  name: 'flex-grid-react',
  /**
   * URL for name in top left corner to link to
   * @type {String}
   */
  url: '#'}))
function loadStories() {
  require('../src/stories');
}

configure(loadStories, module);
