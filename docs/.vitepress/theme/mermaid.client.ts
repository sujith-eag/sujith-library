// Theme-aware Mermaid initialization for VitePress
// Detects dark/light mode and re-initializes Mermaid styling on theme and route changes.

// NOTE: We rely on vitepress-plugin-mermaid to perform the actual rendering.
// This client only switches Mermaid theme and triggers reprocessing.

let mermaidPromise: Promise<any> | null = null;
function getMermaid() {
  if (!mermaidPromise) {
    mermaidPromise = import('mermaid').then((m: any) => m.default ?? m);
  }
  return mermaidPromise!;
}

function isDark(): boolean {
  return document.documentElement.classList.contains('dark');
}

function currentTheme(): 'dark' | 'default' {
  return isDark() ? 'dark' : 'default';
}

async function initMermaid() {
  const mermaid = await getMermaid();
  const theme = currentTheme();
  const common = {
    startOnLoad: false,
    securityLevel: 'loose',
  } as const;

  if (theme === 'dark') {
    mermaid.initialize({
      ...common,
      theme: 'dark',
      themeVariables: {
        background: getComputedStyle(document.documentElement).getPropertyValue('--mm-bg') || '#0b0f14',
        textColor: getComputedStyle(document.documentElement).getPropertyValue('--mm-text') || '#e5e7eb',
        primaryTextColor: getComputedStyle(document.documentElement).getPropertyValue('--mm-text') || '#e5e7eb',
        lineColor: getComputedStyle(document.documentElement).getPropertyValue('--mm-border') || '#6b7280',
        primaryColor: getComputedStyle(document.documentElement).getPropertyValue('--mm-primary') || '#60a5fa',
        secondaryColor: getComputedStyle(document.documentElement).getPropertyValue('--mm-secondary') || '#34d399',
        clusterBkg: getComputedStyle(document.documentElement).getPropertyValue('--mm-surface') || '#111827',
        clusterBorder: getComputedStyle(document.documentElement).getPropertyValue('--mm-border') || '#6b7280',
        edgeLabelBackground: getComputedStyle(document.documentElement).getPropertyValue('--mm-bg') || '#0b0f14',
        labelTextColor: getComputedStyle(document.documentElement).getPropertyValue('--mm-muted-text') || '#cbd5e1',
        titleColor: getComputedStyle(document.documentElement).getPropertyValue('--mm-text') || '#e5e7eb',
      },
    });
  } else {
    mermaid.initialize({
      ...common,
      theme: 'default',
      themeVariables: {
        background: getComputedStyle(document.documentElement).getPropertyValue('--mm-bg') || '#ffffff',
        textColor: getComputedStyle(document.documentElement).getPropertyValue('--mm-text') || '#1f2937',
        primaryTextColor: getComputedStyle(document.documentElement).getPropertyValue('--mm-text') || '#1f2937',
        lineColor: getComputedStyle(document.documentElement).getPropertyValue('--mm-border') || '#9ca3af',
        primaryColor: getComputedStyle(document.documentElement).getPropertyValue('--mm-primary') || '#2563eb',
        secondaryColor: getComputedStyle(document.documentElement).getPropertyValue('--mm-secondary') || '#10b981',
        clusterBkg: getComputedStyle(document.documentElement).getPropertyValue('--mm-surface') || '#f3f4f6',
        clusterBorder: getComputedStyle(document.documentElement).getPropertyValue('--mm-border') || '#9ca3af',
        edgeLabelBackground: getComputedStyle(document.documentElement).getPropertyValue('--mm-bg') || '#ffffff',
        labelTextColor: getComputedStyle(document.documentElement).getPropertyValue('--mm-muted-text') || '#374151',
        titleColor: getComputedStyle(document.documentElement).getPropertyValue('--mm-text') || '#1f2937',
      },
    });
  }
}

// Ask Mermaid to (re)process all diagrams rendered by the plugin.
async function reprocess() {
  const mermaid = await getMermaid();
  await initMermaid();
  // mermaid.init scans the document and applies styling to .mermaid elements
  mermaid.init(undefined, '.mermaid');
}

function setupAppearanceWatcher() {
  const observer = new MutationObserver((mutations) => {
    for (const m of mutations) {
      if (m.type === 'attributes' && m.attributeName === 'class') {
        // Re-initialize with new theme and re-style diagrams
        reprocess();
        break;
      }
    }
  });
  observer.observe(document.documentElement, { attributes: true });
}

function setupRouteWatcher() {
  // VitePress updates content on route changes; observe the main content container
  const appMain = document.querySelector('#app');
  if (!appMain) return;
  const mo = new MutationObserver((mutations) => {
    for (const m of mutations) {
      if (m.addedNodes && m.addedNodes.length) {
        reprocess();
        break;
      }
    }
  });
  mo.observe(appMain, { childList: true, subtree: true });
}

// Bootstrap on client
if (typeof window !== 'undefined') {
  window.addEventListener('DOMContentLoaded', () => {
    initMermaid().then(() => {
      reprocess();
      setupAppearanceWatcher();
      setupRouteWatcher();
    });
  });
}

// Optional: small CSS tweak to ensure diagrams adapt nicely in dark mode
// You can override Mermaid colors further via CSS variables if needed.