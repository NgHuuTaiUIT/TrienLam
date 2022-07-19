import { createContext, ReactNode, useState } from "react";

export const IframeContext = createContext({});

export const IframeProvider = ({ children }) => {
  const [contentIframe, setContentIframe] = useState({content_url:"",type:""});
  const [show, setShow] = useState(false);

  return (
    <IframeContext.Provider
      value={{
        contentIframe,
        setContentIframe,
        show,setShow
      }}>
      {children}
    </IframeContext.Provider>
  );
};
