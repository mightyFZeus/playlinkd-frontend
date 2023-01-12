import { AppProps } from "next/app";
import React from "react";
import "@/styles/global.css";
import { Provider } from "react-redux";
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import { playlinkdApi } from "@/services/apis/api";
// import "../components/Slider.css";

// import { wrapper } from "@/redux/store";

function App({ Component, pageProps }: AppProps) {
  return (
    <ApiProvider api={playlinkdApi}>
      <Component {...pageProps} />

    </ApiProvider>
  )
    
}

export default App;
