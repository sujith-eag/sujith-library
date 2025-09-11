export const linuxCommandDocs = [
  {
    title: "Linux Command Docs",
    items: [
      {
        title: "File and Directory Operations",
        items: [
          { label: "List Files (ls)", link: "/linux/command-docs/ls-list" },
          { label: "Change Directory (cd)", link: "/linux/command-docs/cd-change-directory" },
          { label: "Make Directory (mkdir)", link: "/linux/command-docs/mkdir" },
          { label: "Print Working Directory (pwd)", link: "/linux/command-docs/pwd" },
          { label: "Touch", link: "/linux/command-docs/touch" },
          { label: "Move (mv)", link: "/linux/command-docs/mv-move" },
          { label: "Remove (rm)", link: "/linux/command-docs/rm-remove" },
          { label: "Copy (cp)", link: "/linux/command-docs/cp-copy" }
        ]
      },
      {
        title: "File Content Operations",
        items: [
          { label: "Concatenate (cat)", link: "/linux/command-docs/cat-concatenate" },
          { label: "Head and Tail", link: "/linux/command-docs/head-tail" },
          { label: "Word Count (wc)", link: "/linux/command-docs/wc-word-count" },
          { label: "Cut with Delimiter", link: "/linux/command-docs/cut-with-delimiter" },
          { label: "Sort", link: "/linux/command-docs/sort" },
          { label: "Uniq", link: "/linux/command-docs/uniq" },
          { label: "Grep", link: "/linux/command-docs/grep" }
        ]
      },
      {
        title: "Shell and Output",
        items: [
          { label: "Echo", link: "/linux/command-docs/echo" },
          { label: "Bash Commands", link: "/linux/command-docs/bash-commands" }
        ]
      }
    ]
  }
];

export const linuxOs = [{
  title: 'Linux OS',
  items: [
    { label: 'System Resources', link: '/linux/linux_os/03_system_resources' },
    { label: 'Process Management', link: '/linux/linux_os/02_process_management' },
    { label: 'Linux Kernel', link: '/linux/linux_os/01_linux_kernel' }
  ]
}];

export const bashBasics = [{
  title: 'Bash Basics',
  items: [
    { label: 'Bash Features', link: '/linux/bash/01_bash_basics/bash-2_bash_features' },
    { label: 'Environment and Subshell', link: '/linux/bash/01_bash_basics/bash-6_environment_subshell' },
    { label: 'Help Pages', link: '/linux/bash/01_bash_basics/bash-3_help_pages' },
    { label: 'Bash Basics', link: '/linux/bash/01_bash_basics/bash-1_basics' },
    { label: 'Variable Aliases', link: '/linux/bash/01_bash_basics/bash-4_variable_aliases' }
  ]
}];

export const bashRegex = [{
  title: 'Bash Regex',
  items: [
    { label: 'Regex Syntax', link: '/linux/bash/06_regex/bash-13_regex' },
    { label: 'Regex Expanded', link: '/linux/bash/06_regex/bash-13.1_regex_expanded' },
    { label: 'Regex Matching', link: '/linux/bash/06_regex/bash-13.2_regex_matching' }
  ]
}];

export const shellScripting = [{
  title: 'Shell Scripting',
  items: [
    { label: 'Shell Scripting Basics', link: '/linux/bash/07_shell_scripting/bash-18_shell_script' },
    { label: 'Looping in Bash', link: '/linux/bash/07_shell_scripting/bash-18.2_loop' },
    { label: 'Conditionals in Bash', link: '/linux/bash/07_shell_scripting/bash-18.1_conditionals' }
  ]
}];

export const bashFileCommands = [{
  title: 'Bash File Commands',
  items: [
    { label: 'Basic File Commands', link: '/linux/bash/02_basic_commands/bash-8_basic_file_commands' },
    { label: 'File Movement Commands', link: '/linux/bash/02_basic_commands/bash-9_file_movement_commands' },
    { label: 'Listing Files', link: '/linux/bash/02_basic_commands/bash-5_listing_files' },
    { label: 'Storage Terminology', link: '/linux/bash/02_basic_commands/bash-7_storage_terminology' },
    { label: 'BC and Date Commands', link: '/linux/bash/02_basic_commands/bash-8.1_bc_date' }
  ]
}];

export const fileSearchEdit = [{
  title: 'File Search & Edit',
  items: [
    { label: 'Hard and Soft Links', link: '/linux/bash/04_file_search_edit/bash-12_hard_soft_links' },
    { label: 'File Search', link: '/linux/bash/04_file_search_edit/bash-14_file_search' },
    { label: 'File Viewing and Editing', link: '/linux/bash/04_file_search_edit/bash-10_file_viewing_editing' },
    { label: 'Sed Command', link: '/linux/bash/04_file_search_edit/bash-17_sed' },
    { label: 'Grep Command', link: '/linux/bash/04_file_search_edit/bash-16_grep' },
    { label: 'File Permissions', link: '/linux/bash/04_file_search_edit/bash-11_file_permissions' }
  ]
}];

export const neovim = [{
  title: 'Neovim',
  items: [
    { label: 'Neovim Basics', link: '/linux/bash/03_neovim/bash-15_neo_vim' }
  ]
}];

export const quickguide = [{
  title: 'Quick Guide',
  items: [
    { label: 'Core Utils: Part 1', link: '/linux/bash/quick_guide/core1' },
    { label: 'Core Utils: Part 2', link: '/linux/bash/quick_guide/core2' },
    { label: 'Advanced Utilities', link: '/linux/bash/quick_guide/core3' },
  ]
}];

export const linuxSection = [
  ...bashBasics,
  ...quickguide,
  ...bashFileCommands,
  ...fileSearchEdit,
  ...neovim,
  ...bashRegex,
  ...shellScripting,
  ...linuxOs,
  ...linuxCommandDocs,
];
  