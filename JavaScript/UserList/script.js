let users = [
  { id: 101, name: "John", age: 22, email: "john@gmail.com" },
  { id: 102, name: "Alice", age: 32, email: "alice@yahoo.com" },
  { id: 103, name: "Bob", age: 26, email: "bob@hotmail.com" },
  { id: 104, name: "Sam", age: 17, email: "sam@gmail.com" },
];

let apiUsers = [];

let mergedUser = [];

//elements

const userContainer = document.querySelector("#userContainer");

const userListSection = document.querySelector("#userListSection");

const nameInput = document.querySelector("#nameInput");

const ageInput = document.querySelector("#ageInput");

const emailInput = document.querySelector("#emailInput");

const addUserBtn = document.querySelector("#addUserBtn");

const fetchUserBtn = document.querySelector("#fetchUserBtn");

const messageContainer = document.querySelector("#messageContainer");

const userlistTitle = document.querySelector("#userlistTitle");

//fetch user

async function fetchUser() {
  try {
    fetchUserBtn.disabled = true;
    fetchUserBtn.textContent = "Please Wait";

    const res = await fetch("https://jsonplaceholder.typicode.com/users");

    if (!res.ok) {
      throw new Error("Error While Fetching Users");
    }

    errorMessageDom("");

    fetchUserBtn.disabled = false;
    fetchUserBtn.textContent = "Refresh";

    const data = await res.json();

    apiUsers = data.map(({ name, id, email }) => {
      const randomAge = Math.floor(Math.random() * (30 - 15 + 1) + 15);
      return { name, id, email, age: randomAge };
    });

    // saveUserInLocalStorage(users);

    const usersIds =
      getUserFromLocalStorage() &&
      getUserFromLocalStorage().map(({ id }) => id);

    const updatedData = getUserFromLocalStorage()
      ? [
          ...users.filter(({ id }) => {
            return !usersIds.includes(id);
          }),
          ...getUserFromLocalStorage(),
          ...apiUsers.filter(({ id }) => !usersIds.includes(id)),
        ]
      : [...users, ...apiUsers];

    mergedUser = updatedData;
    renderUser();
    createClassObj();
    saveUserInLocalStorage(mergedUser);
  } catch (error) {
    console.log(error);
    errorMessageDom(error);
  }
}

fetchUserBtn.addEventListener("click", () => {
  fetchUser();
});

// error message

function errorMessageDom(error) {
  messageContainer.textContent = error;
}

// already saved user

if (!localStorage.getItem("users")) {
  fetchUser();
} else {
  mergedUser = getUserFromLocalStorage();
  console.log(mergedUser);
  renderUser();
}

function renderUser() {
  const emptyListMsg = document.createElement("p");

  userContainer.innerHTML = "";
  userlistTitle.innerHTML = ``;

  const spanEle = document.createElement("span");
  if (mergedUser.length === 0) {
    spanEle.textContent = `Please add at least one User`;
    spanEle.style.color = "green";
  } else {
    spanEle.textContent = `Total  (${mergedUser.length})`;
    spanEle.style.color = "green";
  }

  userlistTitle.appendChild(spanEle);

  for (let i = 0; i < mergedUser.length; i++) {
    const liELe = document.createElement("li");

    liELe.classList.add("p-3", "li-flex", "border", "rounded-md");

    if (mergedUser[i].age >= 18) {
      liELe.classList.add("li-adults");
    }

    const userInfoEle = document.createElement("p");
    userInfoEle.textContent = `${mergedUser[i].name} - Age: ${mergedUser[i].age}`;

    // email

    const emailEle = document.createElement("p");
    emailEle.textContent = mergedUser[i].email;

    const divEle = document.createElement("div");

    // button

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add(
      "bg-red-500",
      "px-2",
      "rounded-md",
      "text-slate-100",
    );
    deleteBtn.textContent = "Delete";
    deleteBtn.id = "user-deleteBtn";
    deleteBtn.dataset.id = mergedUser[i].id;

    divEle.append(userInfoEle);
    divEle.append(emailEle);
    liELe.appendChild(divEle);
    liELe.appendChild(deleteBtn);

    userContainer.appendChild(liELe);
  }

  const allDeleteBtns = document.querySelectorAll("#user-deleteBtn");

  for (let i = 0; i < allDeleteBtns.length; i++) {
    allDeleteBtns[i].addEventListener("click", (e) => {
      const userId = e.target.dataset["id"];
      deleteUser(userId);
    });
  }
}

// delete user

function deleteUser(userId) {
  updatedData = mergedUser.filter(({ id }) => id != userId);
  updateUserInLocalStorage(updatedData);
  mergedUser = getUserFromLocalStorage();
  createClassObj();
  renderUser();
}

// add user

function addUser(name, age, email) {
  updatedData = [{ id: Date.now(), name, age, email }, ...mergedUser];
  updateUserInLocalStorage(updatedData);
  mergedUser = getUserFromLocalStorage();
}

const userForm = document.querySelector("#userForm");

userForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = nameInput.value;
  const age = ageInput.value;
  const email = emailInput.value;
  addUser(name, age, email);
  nameInput.value = "";
  ageInput.value = "";
  emailInput.value = "";
  renderUser();
});

// Advanced User Manager Part 4

class User {
  constructor(id, name, email, age) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.age = age;
  }
  isAdult() {
    return this.age >= 18;
  }
  getEmailDomain() {
    const emailDomain = this.email.split("@")[1];
    return emailDomain;
  }
}

createClassObj();

function createClassObj() {
  const usersClassObj = [];

  mergedUser.forEach(({ id, name, email, age }) => {
    usersClassObj.push(new User(id, name, email, age));
  });

  const usersMap = new Map();

  usersClassObj.forEach((userObj) => {
    usersMap.set(userObj.id, userObj);
  });

  const getAllEmail = usersClassObj.map((classObj) => {
    return classObj.getEmailDomain();
  });

  const uniqueEmail = new Set(getAllEmail);

  const uniqueEmailEle = document.querySelector("#uniqueEmailEle");

  uniqueEmailEle.textContent = `Unique Email Domains: ${uniqueEmail.size}`;
  console.log(uniqueEmail.size);
}

// Persistent User Dashboard

function saveUserInLocalStorage(users) {
  const stringifyUsers = JSON.stringify(users);
  localStorage.setItem("users", stringifyUsers);
  const message = "User Saved Successfully";
  return message;
}

function getUserFromLocalStorage() {
  const data = localStorage.getItem("users");
  const parsed = dataParseToJSON(data);
  return parsed;
}

// parse error handle

function dataParseToJSON(data) {
  try {
    if (data === null) {
      throw new Error("no data to parse");
    }
    const parsedData = JSON.parse(data);

    return parsedData;
  } catch (error) {
    console.log(error.message || "unknown error while parsing");
  }
}

// updateUser in LocalStorage

function updateUserInLocalStorage(updatedData) {
  const stringify = JSON.stringify(updatedData);
  localStorage.setItem("users", stringify);
  const message = "data updated in localstorage";
  return message;
}
