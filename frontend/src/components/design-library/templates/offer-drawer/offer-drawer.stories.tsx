import React from 'react';

import OfferDrawer from './offer-drawer';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Design Library/Templates/Offer Drawer',
  component: OfferDrawer,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  //argTypes: {
  //  tags: { control: '' },
  //},
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <OfferDrawer {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  title: 'Offer Drawer',
  introTitle: 'Introduction Title',
  introMessage: 'Introduction Message',
  introImage: 'https://via.placeholder.com/48x48',
  open: true,
  onClose: () => {},
  issue: {
    completed: true,
    data: {
      title: 'Sample Issue',
      description: 'This is a sample issue description.',
      status: 'open',
      updated_at: '2021-01-01',
      metadata: {
        issue: {
          user: {
            login: 'user',
            html_url: 'http://example.com',
          },
        },
      },      
    }
  }
};
