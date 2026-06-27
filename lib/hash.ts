import { scryptSync, randomBytes, timingSafeEqual } from "crypto";

export function hashPassword(password: string): string {
  const salt = randomBytes(16).toString("hex");
  const hashedPassword = scryptSync(password, salt, 64).toString("hex");
  return `${salt}:${hashedPassword}`;
}

export function verifyPassword(password: string, storedHash: string): boolean {
  try {
    const [salt, hashedPassword] = storedHash.split(":");
    if (!salt || !hashedPassword) {
      return false;
    }
    const hashedInput = scryptSync(password, salt, 64).toString("hex");
    return timingSafeEqual(
      Buffer.from(hashedPassword, "hex"),
      Buffer.from(hashedInput, "hex")
    );
  } catch {
    return false;
  }
}
