import { render, screen } from '@testing-library/react';
import BookingForm from './components/BookingForm';

// Simple test to ensure the BookingForm component renders correctly
// describe("BookingForm component", () => {
//   const availableTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
//   test("Renders Choose date label", () => {
//     render(<BookingForm availableTimes={availableTimes} />);
//     const dateLabel = screen.getByText("Choose date");
//     expect(dateLabel).toBeInTheDocument();
//   })
// });

// Write a unit test for the initializeTimes function to validate that it returns the correct expected value
describe("initializeTimes function", () => {
  test("Returns an array of times between open and close times", () => {
    const openTime = "17:00";
    const closeTime = "22:00";
    const expected = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
    const result = initializeTimes(openTime, closeTime);
    expect(result).toEqual(expected);
  })
});