import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom'
import { act } from "react-dom/test-utils";
import routeData from "react-router"
import axios from "axios"
import Tags from "./Tags";

let container = null;

beforeEach(() => {
  // подготавливаем DOM-элемент, куда будем рендерить
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // подчищаем после завершения
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders user data", async () => {
  const fakeTag = {
    "data": [ {"name": "v1.0.0"}, {"name": "v2.0.0"}],
  }

  const axiosGetSpy = jest.spyOn(axios, 'get').mockResolvedValueOnce(
      new Promise((resolve, reject) => {
        resolve(fakeTag)
      })
  )

  const history = createMemoryHistory()

  await act(async () => {
    render(<Router history={history}>
      <Tags />
    </Router>, container);
  });

  expect(container.querySelectorAll(".summary")[0].textContent).toBe(fakeTag.data[0].name);
  
  axiosGetSpy.mockRestore();
});