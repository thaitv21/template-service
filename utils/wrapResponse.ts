export default function wrapResponse(message: string, data?: any) {
  return {
    message,
    data,
  };
}
