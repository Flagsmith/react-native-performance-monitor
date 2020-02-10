import initStoryshots, { renderWithOptions } from '@storybook/addon-storyshots';
import { mount } from 'enzyme';

initStoryshots({
    framework: 'react',
    test: renderWithOptions({
        renderer: mount,
    }),
    // Ignore integrityOptions for async.storyshot because only run when asyncJest is true
    integrityOptions: { cwd: __dirname, ignore: ['**/**.async.storyshot'] },
    configPath: __dirname,
});
