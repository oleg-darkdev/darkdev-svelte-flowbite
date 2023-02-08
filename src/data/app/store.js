
import { writable } from 'svelte/store';

export let tournament = writable(0),
	rounds = writable(5),
	title = writable('Żółty słoń'),
	excelLink = writable(
		'https://docs.google.com/spreadsheets/d/1_mv_FaONbPfjj_i9ODX3ATRk17mT3A4aJJXASGD2lms/edit#gid=0'
	),
	roundsHistory = writable([]),
	settingshowRound = writable(0),
	raiting = writable('1400-2000'),
	roundNow = writable(0);
