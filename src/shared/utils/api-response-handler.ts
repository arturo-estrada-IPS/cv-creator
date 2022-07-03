export const handleHttpResponse = async (res: Response) => {
  const result = await res.json();
  if (res.status >= 200 && res.status <= 300) {
    return result;
  }
  throw new ApiError(result.message, res.status);
};

export class ApiError extends Error {
  status!: number;
  constructor(message: string, status: number) {
    super();
    this.message = message;
    this.status = status;
  }
}
