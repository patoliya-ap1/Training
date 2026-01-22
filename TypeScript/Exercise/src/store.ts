import type { Contact } from "./types.ts";

export class ContactStore {
  private store = new Map<string, Contact>();
  add(contact: Contact) {
    this.store.set(contact.id, contact);
  }
  get(id: string) {
    return this.store.get(id);
  }
  list(): Contact[] {
    return Array.from(this.store.values());
  }
  remove(id: string) {
    return this.store.delete(id);
  }
}
