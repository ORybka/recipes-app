/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement } from './element';

let Component, Target;

function renderApp(componentFunction = null, targetElement = null) {
  if (componentFunction) Component = componentFunction;
  if (targetElement) Target = targetElement;
  Target.innerHTML = '';
  Target.appendChild(<Component />);
}

export default renderApp;
