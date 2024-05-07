
export const checkvalidate = (email, password, name) => {
    const isEmail = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
      email
      );
    // const isName = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(name);
    const isPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(
      password
    );
  
    if (!isEmail) return "Email is not valid";
    // if(!isNamevalid) return "Name is not valid";
    if (!isPassword) return "Password is not valid";
  
    return null;
  };
  