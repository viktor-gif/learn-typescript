import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { listeners } from "node:process";

let a: number = 10;
let name: string = "Viktor";

let sex: "male" | "female";
sex = "male";

let isSamurai: boolean | null = true;
isSamurai = null;

////////////////////////////

let names: Array<string> = ["Viktor", "Yulia", "Olia"];
console.log(names[0].toUpperCase());
names.forEach((n) => {
  console.log(n.toUpperCase());
});

///////////////////////////////

type AddressType = {
  city?: string; //если "?", то метод необязательный
  country: string;
};

type UserType = {
  sayHello?: Function; //если "?", то метод необязательный
  // sayHello: (message: string) => void
  name: string;
  age: number;
  isSamurai: boolean;
  address: AddressType | null;
};

let user: UserType = {
  sayHello(message: string) {
    //параметры функции типизируются обязательно
    //если написать "any", то можно передать любой тип
    alert("hello!!!");
  },
  name: "Viktor",
  age: 32,
  isSamurai: true,
  address: {
    country: "Ukraine",
  },
};

////////////////////////////////

type AddressStateType = {
  city?: string | null; //если "?", то метод необязательный
  country: string | null;
};

let initialState = {
  name: null as string | null,
  age: null as number | null,
  isSamurai: null as boolean | null,
  address: [] as Array<AddressStateType>,
  counter: 0,
};

export type InitialStateType = typeof initialState;
let state: InitialStateType = {
  name: "Viktor",
  address: [
    {
      city: null,
      country: "Ukraine",
    },
  ],
  age: 32,
  counter: 5,
  isSamurai: true,
};

///////////////////////

let GET_TASKS = "APP/GET_TASKS";
type GetTasksActionType = {
  id: number;
  type: typeof GET_TASKS;
};
let action: GetTasksActionType = {
  type: GET_TASKS,
  id: 110,
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsxhhhh</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
