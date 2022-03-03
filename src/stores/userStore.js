import { writable } from "svelte/store";

const store = writable({ username: null, jwt: null });

export default store;
