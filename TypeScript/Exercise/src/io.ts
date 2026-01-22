import fs from "fs/promises";

import type { Contact } from "./types";

export async function loadContacts(path: string): Promise<Contact[]> {
  const raw = await fs.readFile(path, "utf-8");
  const parsed = JSON.parse(raw);

  if (!Array.isArray(parsed)) throw new Error("Invalid format");
  return parsed as Contact[];
}

export async function saveContacts(
  path: string,
  Contacts: Contact[],
): Promise<void> {
  const stringify = JSON.stringify(Contacts, null, 2);
  await fs.writeFile(path, stringify, "utf8");
}
