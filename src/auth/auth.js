// Mock users
export const mockUsers = {
  student: {
    loginId: "student01",
    password: "1234",
    role: "student",
  },
  teacher: {
    loginId: "teacher01",
    password: "1234",
    role: "teacher",
  },
  admin: {
    loginId: "admin01",
    password: "1234",
    role: "admin",
  },
};

export const loginUser = (loginId, password) => {
  const user = Object.values(mockUsers).find(
    (u) => u.loginId === loginId && u.password === password
  );

  if (!user) return null;

  localStorage.setItem("user", JSON.stringify(user));
  return user;
};

export const getCurrentUser = () => {
  const user = localStorage.getItem("user");
  return user ? JSON.parse(user) : null;
};

export const logout = () => {
  localStorage.removeItem("user");
};
