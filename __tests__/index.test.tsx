import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import ProductTile from "../components/products/ProductTile";

describe("Products", () => {
    it("renders products", () => {
      render(<ProductTile  isSale={true} price="$10" productImage="" productName="ok" index={1} type="Beer" />);
      // check if all components are rendered
      expect(screen.getByTestId("heading")).toBeInTheDocument();
    });
});