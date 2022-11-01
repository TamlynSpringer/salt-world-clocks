import { render } from "@testing-library/react";
import '@testing-library/jest-dom';
import Board from "./Board";


describe(Board, ()=>{
    it('Displaying correct number of cities', ()=>{
      const { getByTestId } = render(<Board />);
      const container = getByTestId("container");
      expect(container.children.length).toEqual(8)
    })
    it('Array of cities should not to be empty', ()=>{
      const { getByTestId } = render(<Board />);
      const container = getByTestId("container");
      expect(container.children.length).not.toBe(0);
    })
})

