
import { devcloudSection } from "../theme/data/fileStructures/devcloudSections";
import { transformToSidebar } from "../theme/utils/transformSectionsToSidebar";

export function devcloudSidebar() {
  return [
    {
      text : 'DevOps & Cloud',
      collapsed: true,
      items: transformToSidebar(devcloudSection)
    }
  ];
}
