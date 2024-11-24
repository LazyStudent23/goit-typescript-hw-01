export enum UserRole {
  admin = "admin",
  editor = "editor",
  guest = "guest",
}

// interface RolesDescription {
//   [UserRole.admin]: string;
//   [UserRole.editor]: string;
//   [UserRole.guest]: string;
//   [UserRole.soldier]: string;
// }

// // Замініть наступний код на версію за допомогою Record
// const RoleDescription: RolesDescription = {
//   //   admin: "Admin User",
//   //   editor: "Editor User",
//   //   guest: "Guest User",
//   admin: "Admin",
//   editor: "Editor",
//   guest: "Guest",
//   soldier: "Soldier",
// };

// // Замініть наступний код на версію за допомогою Record
const RoleDescription: Record<UserRole, string> = {
  admin: "Admin User",
  editor: "Editor User",
  guest: "Guest User",
};
