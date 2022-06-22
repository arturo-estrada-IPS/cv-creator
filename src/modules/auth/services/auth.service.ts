import { HttpErrorResponse } from "../../../shared/core";
import { API_URL } from "../../../shared/utils";
import { AuthResponseModel, CreateUserModel, LoginUserModel } from "../models";

const baseUrl = `${API_URL}/auth`;
const headers = {
  "Content-Type": "application/json",
};

export async function signup(
  name: string,
  email: string,
  password: string,
  phoneNumber?: string
): Promise<any> {
  const newUser: CreateUserModel = {
    name,
    email,
    password,
    phoneNumber,
  };

  try {
    const result = await fetch(`${baseUrl}/signup`, {
      method: "POST",
      body: JSON.stringify(newUser),
      headers,
    });

    if (result) {
      return result.json();
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export function signin(email: string, password: string) {
  const payload: LoginUserModel = {
    email,
    password,
  };

  return fetch(`${baseUrl}/signin`, {
    method: "POST",
    body: JSON.stringify(payload),
    headers,
  })
    .then((res) => res.json())
    .then(loginSuccess)
    .catch((err) => {
      throw err;
    });
}

function loginSuccess(response: AuthResponseModel | HttpErrorResponse) {
  if ((response.statusCode && response.statusCode === 401) || response.code) {
    throw response;
  }

  const { accessToken, expirationTime, refreshToken } = (
    response as AuthResponseModel
  ).stsTokenManager;

  localStorage.setItem("accessToken", accessToken);
  localStorage.setItem("expirationTime", expirationTime);
  localStorage.setItem("refreshToken", refreshToken);

  return response;
}

export function userIsAuthenticated() {
  const token = localStorage.getItem("accessToken");
  return Boolean(token);
}

export function signout() {
  localStorage.clear();
}
