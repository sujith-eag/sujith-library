// docs/.vitepress/sidebar/projectsSidebar.ts
import { projectsSection } from "../theme/data/fileStructures/projectsSections"
import { transformToSidebar } from "../theme/utils/transformSectionsToSidebar";

export const projectsSidebar = () => [
  ...transformToSidebar(projectsSection)
];