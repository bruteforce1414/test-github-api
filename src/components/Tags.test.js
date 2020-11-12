import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import routeData from "react-router"

import Tags from "./Tags";

let container = null;

const mockParams = {
  user: 'nori-io',
  repo: 'common'
}

beforeEach(() => {
  // подготавливаем DOM-элемент, куда будем рендерить
  container = document.createElement("div");
  document.body.appendChild(container);
  jest.spyOn(routeData, 'useParams').mockReturnValue(mockParams)

});

afterEach(() => {
  // подчищаем после завершения
  unmountComponentAtNode(container);
  container.remove();
  container = null;

});





it("renders user data", async () => {

 


  const fakeTag ="v1.0.0";
  global.fetch = jest.fn().mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(fakeTag)
    })
  );

  // Используем act асинхронно, чтобы передать успешно завершённые промисы
  await act(async () => {
    render(<Tags />, container);
  });

  expect(container.querySelector(".summary").textContent).toBe(fakeTag);
  

  // выключаем фиктивный fetch, чтобы убедиться, что тесты полностью изолированы
  global.fetch.mockRestore();
  global.fetch.mockClear();
  delete global.fetch;
});