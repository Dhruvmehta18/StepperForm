import "./styles.css";
import Step from "./Step";
import elById from "./elementBy";

const loginButton = elById("login-button");

const loginForm = elById("login-form");
const step1 = elById("step1");
const containerLogin = loginForm.querySelectorAll("div.login-step .container");

const stepLogin = new Step(containerLogin.length, 0);

const addLoginFieldsEvents = stepDom => {
  const fields = stepDom.getElementsByClassName("input-form");
  console.log(fields);
  fields[0].focus();
  for (let i = 0; i < fields.length; i++) {
    const field = fields[i];
    if (field.tagName.localeCompare("INPUT") === 0) {
      if (field.type.localeCompare("text") === 0) {
        field.addEventListener("keydown", ev => {
          if (ev.keyCode === 13) {
            loginNextStep();
          }
        });
      }
    }
  }
};
const removeLoginFieldsEvents = stepDom => {
  const fields = stepDom.querySelectorAll("*[data-input=true]");
  fields.forEach(field => {
    if (field.tagName === "input") {
      if (field.type === "text") {
        field.removeEventListner("keydown");
      }
    }
  });
};
const loginContainerBlock = () => {
  containerLogin[stepLogin.current].style.display = "block";
  addLoginFieldsEvents(containerLogin[stepLogin.current]);
};
const loginContainerNone = () => {
  containerLogin[stepLogin.current].style.display = "none";
  removeLoginFieldsEvents(containerLogin[stepLogin.current]);
};
const loginStart = () => {
  loginContainerBlock();
};
const loginNextStep = () => {
  loginContainerNone();
  stepLogin.next();
  loginContainerBlock();
};
const loginPrevStep = () => {
  stepLogin.prev();
  loginContainerBlock();
};
loginButton.addEventListener("click", () => {
  step1.style.display = "none";
  loginForm.style.display = "block";
  loginStart();
});

const signupButton = elById("signup-button");
const signupForm = elById("signup-form");
const containerSignup = signupForm.querySelectorAll(
  "div.signup-step .container"
);

const stepSignup = new Step(containerSignup.length, 0);

const addSignupFieldsEvents = stepDom => {
  const fields = stepDom.getElementsByClassName("input-form");
  console.log(fields);
  fields[0].focus();
  for (let i = 0; i < fields.length; i++) {
    const field = fields[i];
    if (field.tagName.localeCompare("INPUT") === 0) {
      if (field.type.localeCompare("text") === 0) {
        field.addEventListener("keydown", ev => {
          if (ev.keyCode === 13) {
            signupNextStepsignupNextStep();
            ev.preventDefault();
          }
        });
      }
    }
  }
};
const removeSignupFieldsEvents = stepDom => {
  const fields = stepDom.querySelectorAll("*[data-input=true]");
  fields.forEach(field => {
    if (field.tagName === "input") {
      if (field.type === "text") {
        field.removeEventListner("keydown");
      }
    }
  });
};
const signupContainerBlock = () => {
  containerSignup[stepSignup.current].style.display = "block";
  addSignupFieldsEvents(containerSignup[stepSignup.current]);
};
const signupContainerNone = () => {
  containerSignup[stepSignup.current].style.display = "none";
  removeSignupFieldsEvents(containerSignup[stepSignup.current]);
};
const signupStart = () => {
  signupContainerBlock();
};
const signupNextStepsignupNextStep = () => {
  signupContainerNone();
  stepLogin.next();
  signupContainerBlock();
};
const signupPrevStep = () => {
  signupContainerNone();
  stepLogin.prev();
  signupContainerBlock();
};

signupButton.addEventListener("click", () => {
  step1.style.display = "none";
  signupForm.style.display = "block";
  signupStart();
  signupStart();
});
