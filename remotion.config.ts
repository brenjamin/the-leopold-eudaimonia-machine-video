// All configuration options: https://remotion.dev/docs/config
// Each option also is available as a CLI flag: https://remotion.dev/docs/cli
// ! The configuration file does only apply if you render via the CLI !

import {Config} from 'remotion';

Config.Preview.setMaxTimelineTracks(20);
Config.Rendering.setImageFormat('jpeg');
Config.Rendering.setQuality(100);
Config.Output.setCrf(17);
Config.Output.setOverwriteOutput(true);
