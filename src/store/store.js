import { writable } from "svelte/store";

export let osDevice = writable("");
export let statusMessage = writable("Cargando...");