import jwt from "jsonwebtoken";

export async function verifyUserToken(token: string) {
  try {
    const user = jwt.verify(token, process.env.JWT_SECRET!);

    if (!user) {
      return null;
    } else {
      return user;
    }
  } catch (error: any) {
    return null;
  }
}
