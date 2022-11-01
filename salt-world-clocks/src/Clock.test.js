import { render } from "@testing-library/react";
import '@testing-library/jest-dom';
import Clock from "./Clock";


describe(Clock, () => {
    it('clock displays correct time', () => {
      const mockTime = new Date();
      const hour = mockTime.getHours();
      const min = mockTime.getMinutes();
      const sec = mockTime.getSeconds();
      const time = `${hour}:${min}:${sec}`;
      const {getByTestId} = render(<Clock key='0' timeZone='Europe/Stockholm' />);
      const displayTime = getByTestId("time");
      expect(displayTime).toContainHTML(`<h3 data-testid="time">${time}</h3>`)
    })
})
