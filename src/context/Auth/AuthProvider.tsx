import { useEffect, useState, type FC, type PropsWithChildren } from "react";
import { AuthContext } from "./AuthContext";


const AuthProvider:FC<PropsWithChildren>=({children})=>{

    const [username , Setusername]=useState<string | null>(localStorage.getItem("username"))
    const [token , Settoken]=useState<string | null>(localStorage.getItem("token"))


    const login=(username:string , token:string)=>{
        Setusername(username);
        Settoken(token);
    }
    const logout=()=>{
        localStorage.removeItem("username")
        localStorage.removeItem("token")
    }

    const isAuthenticated=!!token;

    return(
        <AuthContext.Provider value={{username , token , login , isAuthenticated , logout}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;