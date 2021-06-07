export const supportLocalAuth = (localAuth: number[] | []): string[] => {
  let supportedAuth: string[] = [];
  for (let auth of localAuth) {
    if (auth === 1) {
      supportedAuth = [...supportedAuth, "FINGERPRINT"];
    }
    if (auth === 2) {
      supportedAuth = [...supportedAuth, "FACIAL_RECOGNITION"];
    }
    if (auth === 3) {
      supportedAuth = [...supportedAuth, "IRIS"];
    }
  }
  return [...new Set(supportedAuth)];
};
