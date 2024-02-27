// global.d.ts
declare global {
  interface Window {
    Telegram: {
      WebApp: any; // Replace 'any' with the actual type if available
    };
  }
}

// If you're using modules, you might need to export an empty object to ensure the file is treated as a module:
export { };

