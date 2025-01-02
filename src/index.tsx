/* @refresh reload */
import "./index.css";

import { render } from "solid-js/web";
import { MetaProvider, Meta } from "@solidjs/meta";
import { Router, Route } from "@solidjs/router";

import { GlobalStateProvider } from "./GlobalStateProvider";

import { Header } from "./Header";
import { Grid } from "./Grid";
import { Login } from "./Login";
import { Filters } from "./Filters";
import { NotFound } from "./NotFound";

const root = document.getElementById("root");

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    "Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?"
  );
}

render(() => {
  return (
    <MetaProvider>
      <Meta name="description" content="Life Helper Objective Tracker" />
      <GlobalStateProvider>
        <Router root={Header}>
          <Route path="/" component={Grid} />
          <Route path="/account" component={Login} />
          <Route path="/filters" component={Filters} />
          <Route path="*" component={NotFound} />
        </Router>
      </GlobalStateProvider>
    </MetaProvider>
  );
  // @ts-ignore
}, root);
