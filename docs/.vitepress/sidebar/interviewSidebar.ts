
import { interviewSection } from "../theme/data/fileStructures/interviewSections";
import { transformToSidebar } from "../theme/utils/transformSectionsToSidebar";

export function interviewSidebar() {
  return [
    {
      text : 'LeetCode',
      collapsed: true,
      items: transformToSidebar(interviewSection)
    }
  ];
}
