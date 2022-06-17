export function add(...args: number[]) {
  return args.reduce((a, b) => a + b, 0);
}

// in-source test suites
if (import.meta.vitest) {
  const { it, expect, describe } = import.meta.vitest;

  describe("Utilities", () => {
    it("add", () => {
      expect(add()).toBe(0);
      expect(add(1)).toBe(1);
      expect(add(1, 2, 3)).toBe(6);
    });
  });
}

/*
import { camelCase, startCase, replace } from "lodash-es";
import { pipe } from "ramda";

    it("formats string", () => {
      expect.assertions(2);

      const mockStr = "what-A_lovely day.it.Is";
      const camelCaseStrExpected = "whatALovelyDayItIs";
      const pascalCaseStrExpected = "WhatALovelyDayItIs";

      expect(camelCase(mockStr)).toEqual(camelCaseStrExpected); // not applicable --> no need to test 3rd party API
      expect(convertToPascalCase(mockStr)).toEqual(pascalCaseStrExpected);
    });


// startCase(camelCase(str)).replace(/ /g, '');
const convertToPascalCase = pipe(camelCase, startCase, (str: string) =>
  replace(str, / /g, "")
);
*/

/*
   it("snapshot", () => {
      expect({ foo: "bar" }).toMatchSnapshot();
    });
*/

/*
https://vitest.dev/guide/mocking.html#functions

import { afterEach, describe, expect, it, vi } from 'vitest'

const getLatest = (index = messages.items.length - 1) => messages.items[index]

const messages = {
  items: [
    { message: 'Simple test message', from: 'Testman' },
    // ...
  ],
  getLatest, // can also be a `getter or setter if supported`
}

describe('reading messages', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('should get the latest message with a spy', () => {
    const spy = vi.spyOn(messages, 'getLatest')
    expect(spy.getMockName()).toEqual('getLatest')

    expect(messages.getLatest()).toEqual(
      messages.items[messages.items.length - 1],
    )

    expect(spy).toHaveBeenCalledTimes(1)

    spy.mockImplementationOnce(() => 'access-restricted')
    expect(messages.getLatest()).toEqual('access-restricted')

    expect(spy).toHaveBeenCalledTimes(2)
  })

  it('should get with a mock', () => {
    const mock = vi.fn().mockImplementation(getLatest)

    expect(mock()).toEqual(messages.items[messages.items.length - 1])
    expect(mock).toHaveBeenCalledTimes(1)

    mock.mockImplementationOnce(() => 'access-restricted')
    expect(mock()).toEqual('access-restricted')

    expect(mock).toHaveBeenCalledTimes(2)

    expect(mock()).toEqual(messages.items[messages.items.length - 1])
    expect(mock).toHaveBeenCalledTimes(3)
  })
})



const getApples = vi.fn(() => 0)

getApples()

expect(getApples).toHaveBeenCalled()
expect(getApples).toHaveReturnedWith(0)

getApples.mockReturnValueOnce(5)

const res = getApples()
expect(res).toBe(5)
expect(getApples).toHaveNthReturnedWith(2, 5)
*/
