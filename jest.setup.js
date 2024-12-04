import '@testing-library/jest-dom'

global.IntersectionObserver = class IntersectionObserver {
  constructor(callback) {
    this.callback = callback;
  }

  observe() {
    this.callback([{
      isIntersecting: true,
      intersectionRatio: 1,
      target: {},
      boundingClientRect: {},
      intersectionRect: {},
      rootBounds: null,
      time: Date.now()
    }]);
  }

  unobserve() {
    return null;
  }

  disconnect() {
    return null;
  }
};

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

jest.mock('next-themes', () => ({
  ThemeProvider: ({ children }) => children,
  useTheme: () => ({
    theme: 'light',
    setTheme: jest.fn(),
    systemTheme: 'light',
    themes: ['light', 'dark'],
  }),
}));

document.documentElement.setAttribute('lang', 'en');
document.body.className = 'inter';