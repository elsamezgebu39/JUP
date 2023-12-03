/** @format */

import http from "./httpService";
import jwtDecode from "jwt-decode";
import { API_END_POINT } from "../constants";

let apiEndpoint = API_END_POINT;

export async function login(email, password) {
	try {
		const { data: access_token } = await http.post(
			`${apiEndpoint}/auth/login`,
			{ email, password }
		);
		localStorage.setItem(token, access_token.access_token);
		return {
			response: "OK",
			status: 201,
			message: "Success",
		};
	} catch (error) {
		return {
			response: "ERROR",
			status: 400,
			message: error,
		};
	}
}
export function loginWithJwt(jwt) {
	if (typeof window !== "undefined") {
		localStorage.setItem(token, jwt);
	}
}

export function logout() {
	localStorage.removeItem(token);
}

export function getJwt() {
	if (typeof window !== "undefined") {
		localStorage.getItem(token);
	}
}

export function getUserData() {
	try {
		return jwtDecode(localStorage.getItem(token));
	} catch (ex) {
		return null;
	}
}
export default {
	login,
	logout,
	getUserData,
	loginWithJwt,
	getJwt,
};
