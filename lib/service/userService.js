/** @format */

import http from "./httpService";
import { API_END_POINT } from "../constants";
let apiUrl = API_END_POINT;

export function register(firstName, lastName, tel, email, password) {
	return http.post(apiUrl, {
		firstName,
		lastName,
		tel,
		email,
		password,
	});
}
