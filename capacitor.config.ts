import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.flight.app',
  appName: 'flight booking',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;
