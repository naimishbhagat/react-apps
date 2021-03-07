import axios from "axios";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Pokemon from "./Pokemon";

jest.mock("axios");

const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("When user enters a valid pokemon name", () => {
  test("should show the pokemon abilities of that pokemon", async () => {
    const abilities = [
      {
        ability: {
          name: "Test ability 1",
          url: "https://google.com/ability1",
        },
      },
      {
        ability: {
          name: "Test ability 2",
          url: "https://google.com/ability2",
        },
      },
    ];
    mockedAxios.get.mockResolvedValueOnce({ data: { abilities } });
    render(<Pokemon />);
    await userEvent.type(screen.getByRole("textbox"), "ditto");
    await userEvent.click(screen.getByRole("button"));
    const returnedAbilities = await screen.findAllByRole("listitem");
    expect(returnedAbilities).toHaveLength(2);
  });
});

describe("When the user enters an invalid pokemon name", () => {
  test("should show an error message in the screen", async () => {
    mockedAxios.get.mockResolvedValueOnce(new Error());
    render(<Pokemon />);
    await userEvent.type(screen.getByRole("textbox"), "invalid-pokemon-name");
    await userEvent.click(screen.getByRole("button"));
    const message = await screen.findByText(/Something went wrong/);
    expect(message).toBeInTheDocument();
  });
});
