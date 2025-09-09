export const htmlSection = [
    {
      title: 'HTML',
      items: [
        { label: 'Boilerplate', link: '/html/1boilerplate' },
        { label: 'Texts and Lists', link: '/html/2texts_lists' },
        { label: 'Links and Images', link: '/html/3links_images' },
        { label: 'Input Types', link: '/html/4input_types' },
        { label: 'Buttons', link: '/html/5button' },
        { label: 'DOM Events', link: '/html/6domevents' }
      ]
    }
  ];
  
  export const cssSection = [
    {
      title: 'CSS',
      items: [
        {
          title: 'CSS Basics',
          items: [
            { label: 'Selectors', link: '/css/css_basics/1_selectors' },
            { label: 'Multiple Selectors', link: '/css/css_basics/2_multiple_selecors' },
            { label: 'Declaration', link: '/css/css_basics/3_declaration' },
            { label: 'Adding CSS', link: '/css/css_basics/4_adding_css' },
            { label: 'Utility Class Inheritance', link: '/css/css_basics/9_utilityclass_inheritance' }
          ]
        },
        {
          title: 'CSS Values and Units',
          items: [
            { label: 'CSS Size Units', link: '/css/css_values_units/css_size_units' },
            { label: 'CSS Color Values', link: '/css/css_values_units/css_color_values' }
          ]
        },
        {
          title: 'Box Model',
          items: [
            { label: 'Box Model', link: '/css/box_model/5_box_model' }
          ]
        },
        {
          title: 'Flex Box',
          items: [
            { label: 'Flexbox', link: '/css/flex_box/6_flexbox' },
            { label: 'Flex Flexibility', link: '/css/flex_box/7_flex_flexibility' },
            { label: 'Axes in Flexbox', link: '/css/flex_box/8_axes_in_flexbox' }
          ]
        },
        {
          title: 'CSS Grid',
          items: []
        },
      ]
    }
  ];
  
  export const webSection = [...htmlSection, ...cssSection];
  