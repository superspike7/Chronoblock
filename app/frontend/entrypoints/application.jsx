import axios from "axios";

import React from "react";
import { render } from "react-dom";
import { createInertiaApp } from "@inertiajs/inertia-react";
import { InertiaProgress } from "@inertiajs/progress";

const pages = import.meta.glob("../Pages/**/*.jsx");

const csrfToken = document.querySelector("meta[name=csrf-token]").content;
axios.defaults.headers.common["X-CSRF-Token"] = csrfToken;

InertiaProgress.init();

createInertiaApp({
  resolve: (name) => pages[`../Pages/${name}.jsx`](),
  setup({ el, App, props }) {
    render(<App {...props} />, el);
  },
});
