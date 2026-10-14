import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'ai.freekeyhub.mobile',
  appName: 'FreeKey Hub',
  webDir: 'www',
  server: {
    url: 'https://freekey-hub-vl6m1s.v2.appdeploy.ai/',
    cleartext: false
  }
};

export default config;
