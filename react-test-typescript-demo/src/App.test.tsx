import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";
import { getUser } from "./get-user";
import { mocked } from "ts-jest/utils";

jest.mock("./get-user");
const mockGetUser = mocked(getUser, true);

describe("When everything is OK", () => {
  beforeEach(async () => {
    render(<App />);
    await waitFor(() => expect(mockGetUser).toHaveBeenCalled());
  });
  test("should render the App component without crashing", () => {
    //screen.debug();
  });

  test("should select the children that is being passed to the CustomInput component", () => {
    screen.getAllByText("Input:");
    let error;
    try {
      screen.getAllByText("Input");
    } catch (err) {
      error = err;
    }
    expect(error).toBeDefined();
  });

  test("should select the input element by its role", () => {
    screen.getAllByRole("textbox");
    expect(screen.getAllByRole("textbox")[0]).toBeInTheDocument();
    expect(screen.getAllByRole("textbox").length).toEqual(1);
  });

  test("should select a label element by its text", () => {
    screen.getByLabelText("Input:");
    expect(screen.getByLabelText("Input:")).toBeInTheDocument();
  });

  test("should select input element by placeholder text", () => {
    screen.getAllByPlaceholderText("Search");
    expect(screen.getAllByPlaceholderText("Search")[0]).toBeInTheDocument();
  });

  test("should not find the role `whatever` in our component", () => {
    const result = screen.queryByRole("whatever");
    expect(result).toBeNull();
  });
});

describe("When the component fetches the user successfully", () => {
  beforeEach(() => {
    mockGetUser.mockClear();
  });

  test("should call getUser once", async () => {
    render(<App />);
    await waitFor(() => expect(mockGetUser).toHaveBeenCalledTimes(1));
  });

  test("should render the username passed", async () => {
    const name = "John";
    // mockGetUser.mockImplementationOnce(() =>
    //   Promise.resolve({ id: "1", name})
    // );
    mockGetUser.mockResolvedValueOnce({ id: "1", name });
    render(<App />);
    expect(screen.queryByText(/Username/)).toBeNull();
    expect(await screen.findByText(/Username/)).toBeInTheDocument();
    //screen.debug();
    expect(await screen.findByText(/name/)).toBeInTheDocument();
  });
});

describe("When the user enters some text in the input element", () => {
  test("should display the text in the screen", async () => {
    render(<App />);
    await waitFor(() => expect(mockGetUser).toHaveBeenCalled());
    expect(screen.getByText(/You typed: .../)).toBeInTheDocument();
    // fireEvent.change(screen.getByRole("textbox"), {
    //   target: { value: "David" },
    // });
    await userEvent.type(screen.getByRole("textbox"), "David ");
    expect(screen.getByText(/You typed: David/)).toBeInTheDocument();
  });
});
