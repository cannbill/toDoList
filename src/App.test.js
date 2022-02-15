import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders h2 element', () => {
  render(<App />);
  const linkElement = screen.getByText(/To Do List/i);
  expect(linkElement).toBeInTheDocument();
});

describe ("submit button", () => {
  test("submit button is rendered", () => {
    render(<App />);
    const button = screen.getByText(/Add to list/i)
    expect(button).toBeInTheDocument();
  })
})

describe ("submit button", () => {
  test("submit button is rendered", () => {
    render(<App />);
    const button = screen.getByText("Add to list")
    fireEvent.click(button)
    expect(button).toBeInTheDocument();

    // const deleteButton = screen.getByText(/delete/i) this tests to see if the delete button is in the app.
    // expect (deleteButton).toBeInTheDocument()
  })

  describe ("input element", () => {
    test("input element is rendered", () => {
      render(<App />);
      const input = screen.getByRole("form")
      fireEvent.change(input, { target: { value: "exercise"}})
      expect(input.value).toBe("exercise");
    }