import { AppProps } from "next/app";
import React from "react";
import "@/styles/global.css";
// import "../components/Slider.css";

// import { wrapper } from "@/redux/store";

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default App;
