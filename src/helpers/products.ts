import { v4 as uuidv4 } from 'uuid';

export async function generateProductCode() {
  const code = uuidv4();
  return code;
}
