<div align="center">

# 🔐 Bonus Quest: The Sealed Gates of Codoria

### Restore Authentication and Enter the Royal Vault

![Difficulty](https://img.shields.io/badge/Difficulty-Challenging-8B0000?style=for-the-badge)
![Time](https://img.shields.io/badge/Time-25–30%20Minutes-B8860B?style=for-the-badge)
![Formation](https://img.shields.io/badge/Formation-Same%20Mission%20Teams-4B0082?style=for-the-badge)
![Topic](https://img.shields.io/badge/Topic-Authentication-274635?style=for-the-badge)

</div>

---

## 📜 The Gatekeeper's Warning

The Royal Marketplace has been restored, but the ancient gates protecting
Codoria's Royal Vault will not open.

The **Dark Bug** has corrupted the kingdom's authentication runes. New Software
Knights cannot register, passwords are not being protected correctly, valid
knights are rejected, and the Royal Vault no longer recognizes its visitors.

Your team must repair the authentication system before the Dark Bug steals the
kingdom's secrets.

> This is a completely optional bonus quest. Begin only after completing the
> main MEN Stack mission.

---

## 🗺️ Quest Brief

| Quest detail | Information |
|---|---|
| ⏳ Time limit | 25–30 minutes |
| 👥 Formation | Use the same mission teams |
| 🔥 Difficulty | Challenging |
| 🧰 Knowledge | Express, MongoDB, Mongoose, bcrypt, sessions and EJS |
| 🐛 Corruption detected | Exactly 8 authentication bugs |
| 🎯 Objective | Register, sign in, access the vault and sign out |
| 🏆 Reward | Up to 20 Kingdom Points |

---

## 🎯 The Authentication Journey

The repaired application must support this complete journey:

1. A new knight creates an account.
2. The password and confirmation must match.
3. The password is hashed before reaching MongoDB.
4. The knight signs in with the correct password.
5. A session remembers the signed-in knight.
6. Only signed-in knights can enter `/royal-vault`.
7. Signing out destroys the session.
8. A signed-out visitor is redirected to the sign-in page.

---

## 🛡️ Routes That Must Work

| Method | Route | Expected result |
|---|---|---|
| `GET` | `/` | Display the quest home page |
| `GET` | `/auth/sign-up` | Display the registration form |
| `POST` | `/auth/sign-up` | Validate, hash and save a new user |
| `GET` | `/auth/sign-in` | Display the sign-in form |
| `POST` | `/auth/sign-in` | Verify credentials and create a session |
| `GET` | `/royal-vault` | Display the protected page to signed-in users |
| `GET` | `/auth/sign-out` | Destroy the session and return home |

---

## 🧰 Prepare for the Quest

Clone the repository and enter its folder:

```bash
git clone <repository-url>
cd bonus-auth-sealed-gates
```

Install the dependencies:

```bash
npm install
```

Create a `.env` file in the root:

```env
MONGODB_URI=your_mongodb_connection_string
SESSION_SECRET=replace_this_with_a_long_random_secret
```

Start the server:

```bash
nodemon server.js
```

If the server fails, read the terminal message—the first corruption has already
revealed itself.


## 🧭 Recommended Investigation Order

### Stage I — Awaken the Gatekeeper

Start the server and repair errors in the Express setup, imported filenames and
model export.

### Stage II — Register a Knight

Open the sign-up form. Test matching passwords, duplicate usernames and the
hashed password stored in MongoDB.

### Stage III — Present the Royal Seal

Sign in using the newly created account. Test both an incorrect password and a
correct password.

### Stage IV — Enter the Royal Vault

Confirm that a signed-in knight can enter `/royal-vault` and a signed-out
visitor cannot.

### Stage V — Destroy the Seal

Sign out, then attempt to revisit the protected page.

---

## ✅ Victory Conditions

- [ ] The server starts without crashing
- [ ] MongoDB connects successfully
- [ ] The sign-up form renders
- [ ] Duplicate usernames are rejected
- [ ] Password confirmation is checked
- [ ] The original password is hashed before it is stored
- [ ] The sign-in form renders
- [ ] Incorrect credentials are rejected
- [ ] Correct credentials create a session
- [ ] The signed-in username appears in the navbar
- [ ] `/royal-vault` is protected
- [ ] Sign-out destroys the session
- [ ] All 8 bugs are recorded and explained
- [ ] Every team member can explain at least one repair

---

## 🏆 Bonus Kingdom Points

| Achievement | Points |
|---|---:|
| Gatekeeper server starts successfully | 3 |
| Registration and password hashing work | 5 |
| Sign-in and session creation work | 5 |
| Royal Vault protection works | 3 |
| Sign-out works | 2 |
| All 8 bugs are explained | 2 |
| **Maximum reward** | **20** |

---

## 🔮 The Gatekeeper's Hints

<details>
<summary>🕯️ Server hint</summary>

Importing Express and creating an Express application are two different steps.

</details>

<details>
<summary>📚 Model hint</summary>

Check both the exact model filename and the keyword used to export the model.
Filename capitalization matters on many computers and deployment services.

</details>

<details>
<summary>📜 View hint</summary>

An EJS render path is relative to the `views` folder and should not begin with a
root slash.

</details>

<details>
<summary>🔒 Password hint</summary>

Trace which form field is passed into `hashSync()` and check the argument order
used by `compareSync()`.

</details>

<details>
<summary>🚪 Session hint</summary>

A middleware function must actively call its next function to continue to the
protected route.

</details>

<details>
<summary>🗺️ Redirect hint</summary>

After successful sign-in, send the browser to an application route—not to an
EJS filename.

</details>

---

## ⚖️ Royal Rules

- This quest contains exactly **8 bugs**.
- Fix one bug at a time and test after every repair.
- Do not rebuild the application from the beginning.
- Each opened hint costs **1 Kingdom Point**.
- Do not commit `.env` or reveal `SESSION_SECRET`.
- Never store a plain-text password in MongoDB.
- Every knight must understand the code their team submits.

---

<div align="center">

## 🗝️ Will the Gates Recognize You? 🗝️

**Repair the authentication runes. Restore the sessions. Enter the Royal Vault.**

</div>
