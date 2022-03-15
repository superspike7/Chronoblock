import axios from "axios";
import React from "react";
import { render } from "react-dom";
import { createInertiaApp } from "@inertiajs/inertia-react";
import { InertiaProgress } from "@inertiajs/progress";

const pages = import.meta.glob("../Pages/**/*.jsx");

InertiaProgress.init();
axios.defaults.xsrfHeaderName = "X-CSRF-Token";

createInertiaApp({
  resolve: (name) => pages[`../Pages/${name}.jsx`](),
  setup({ el, App, props }) {
    render(<App {...props} />, el);
  },
});
