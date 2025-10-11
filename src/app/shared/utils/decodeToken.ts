import * as jwt_decode from 'jwt-decode';

export function decodeToken(token: any): any {
  try {
    const decoded: any = (jwt_decode as any).jwtDecode
      ? (jwt_decode as any).jwtDecode(token)
      : (jwt_decode as any)(token);

    console.log(decoded);
    return decoded;
  } catch (error) {
    console.error('Invalid token', error);
    return null;
  }
}
