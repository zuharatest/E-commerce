// @ts-check
import { defineConfig, devices, firefox, webkit } from '@playwright/test';
import { trace } from 'console';



/**
 * @see https://playwright.dev/docs/test-configuration
 */
const Config= ({
  testDir: './tests',
  timeout: 60*1000,
  
  expect:{
    timeout: 60*1000,

  },

  reporter : 'html',
  use: {
    
      browserName : 'chromium',
      headless : false,
      screenshot : 'on',
      trace : 'retain-on-failure'//on or off
  },

  
});
module.exports = Config





























