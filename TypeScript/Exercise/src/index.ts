import { ContactStore } from "./store";
import { loadContacts, saveContacts } from "./io";

import { Contact } from "./types";

const DATA_FILE = "contactStore.json";

const store = new ContactStore();

async function main() {
  const args = process.argv.slice(2);
  const command = args[0];

  //   add

  if (command === "add") {
    const name = args[args.indexOf("--name") + 1];
    const email = args[args.indexOf("--email") + 1];

    const contact: Contact = {
      id: Date.now().toString(),
      name,
      email,
      phones: [],
    };

    const prevContacts = await loadContacts(DATA_FILE);
    prevContacts.forEach((contact: Contact) => {
      store.add(contact);
    });

    store.add(contact);
    await saveContacts(DATA_FILE, store.list());
    console.log("Contact Successfully Saved.");
  }

  //   list

  if (command === "list") {
    const allContacts = await loadContacts(DATA_FILE);
    allContacts.forEach((contact: Contact) => {
      store.add(contact);
    });
    console.table(store.list());
  }

  //   remove

  if (command === "remove") {
    const id = args[args.indexOf("--id") + 1];

    const allContacts = await loadContacts(DATA_FILE);
    allContacts.forEach((contact: Contact) => {
      store.add(contact);
    });
    store.remove(id);
    await saveContacts(DATA_FILE, store.list());
    console.log("Removed Successfully.");
  }

  //   get with id

  if (command === "get") {
    const id = args[args.indexOf("--id") + 1];

    const allContacts = await loadContacts(DATA_FILE);
    allContacts.forEach((contact: Contact) => {
      store.add(contact);
    });

    const contact = store.get(id);
    console.log(contact);
  }
}

main();
