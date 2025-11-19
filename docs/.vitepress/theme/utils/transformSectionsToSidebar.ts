export function transformToSidebar(sections: any[]): any[] {
    return sections.map(section => {
      const sidebarSection: any = {
        text: section.title,
        collapsed: true,
        items: []
      };
  
      sidebarSection.items = section.items.map(item => {
        if (item.items) {
          // Folder/subsection
          return {
            text: item.title || item.label, // Support either key
            collapsed: true,
            items: transformToSidebar([item])[0].items
          };
        } else {
          // Markdown file
          return {
            text: item.label,
            link: item.link
          };
        }
      });
  
      return sidebarSection;
    });
  }
