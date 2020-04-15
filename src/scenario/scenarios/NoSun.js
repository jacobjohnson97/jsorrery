
import { sun } from './bodies/sun';
import { mercury } from './bodies/mercury';
import { venus } from './bodies/venus';
import { earth } from './bodies/earth';
import { mars } from './bodies/mars';
import { jupiter } from './bodies/jupiter';
import { saturn } from './bodies/saturn';
import { uranus } from './bodies/uranus';
import { neptune } from './bodies/neptune';
import { pluto } from './bodies/pluto';
import { moon } from './bodies/moon';


export default {
	name: 'NoSun',
	title: 'If the sun lost all of its mass (Jacob)',
	commonBodies: [
		moon,
		sun,
		mercury,
		venus,
		earth,
		mars,
		jupiter,
		saturn,
		uranus,
		neptune,
		pluto,
	],
	bodies: {
		moon: {
			forceTrace: true,
			traceRelativeTo: 'universe',
		},
		sun: {
			mass: 0,
			forceTrace: true,
			traceRelativeTo: 'universe',
		},
		jupiter: {
			forceTrace: true,
			traceRelativeTo: 'universe',
		},
		mercury: {
			forceTrace: true,
			traceRelativeTo: 'universe',
		},
		venus: {
			forceTrace: true,
			traceRelativeTo: 'universe',
		},
		earth: {
			forceTrace: true,
			traceRelativeTo: 'universe',
		},
		mars: {
			forceTrace: true,
			traceRelativeTo: 'universe',
		},
		saturn: {
			forceTrace: true,
			traceRelativeTo: 'universe',
		},
		uranus: {
			forceTrace: true,
			traceRelativeTo: 'universe',
		},
		neptune: {
			forceTrace: true,
			traceRelativeTo: 'universe',
		},
		pluto: {
			forceTrace: true,
			traceRelativeTo: 'universe',
		},
	},
	secondsPerTick: { min: 3600, max: 3600 * 15, initial: 3600 * 5 },
	calculaionsPerTick: 100,
	usePhysics: true,
	useBarycenter: false,
	defaultGuiSettings: { 
		planetScale: 10,
	},
	help: "This scenario shows what would happen if, instantaneously at this moment, the sun lost all of its mass. (Jacob's scenario).",
};
