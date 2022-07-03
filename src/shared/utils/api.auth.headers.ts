export const contentTypeJSON = {
  "Content-Type": "application/json",
};

export const apiAuthHeaders = {
  Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
};
