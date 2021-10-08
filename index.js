/**
 * @format
 */

import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import Navigation from './src/routes';

AppRegistry.registerComponent(appName, () => Navigation);
