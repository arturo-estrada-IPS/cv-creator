import {
  apiAuthHeaders,
  API_URL,
  contentTypeJSON,
} from "../../../shared/utils";
import { handleHttpResponse } from "../../../shared/utils/api-response-handler";
import { UserModel } from "../models/user.model";

export class ProfileService {
  private baseURL = `${API_URL}/profile`;
  private headers = { ...contentTypeJSON, ...apiAuthHeaders };

  getCurrentUser(uid: string): Promise<UserModel> {
    return fetch(`${this.baseURL}/${uid}`, {
      method: "GET",
      headers: this.headers,
    })
      .then(handleHttpResponse)
      .then((parsedResponse) => ({
        uid: parsedResponse.uid,
        email: parsedResponse.email,
        displayName: parsedResponse.displayName,
        emailVerified: parsedResponse.emailVerified,
        photoURL: parsedResponse.photoURL,
        phoneNumber: parsedResponse.phoneNumber,
      }))
      .catch((error) => {
        throw error;
      });
  }

  async requestEmailVerification(uid: string) {
    try {
      const result = await fetch(`${this.baseURL}/${uid}`, {
        method: "POST",
        headers: this.headers,
      });

      if (result) {
        const response = handleHttpResponse(result);
        return Boolean(response);
      }
    } catch (error) {
      throw new Error(error as any);
    }
  }
}
