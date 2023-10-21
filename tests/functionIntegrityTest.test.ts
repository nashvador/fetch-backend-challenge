import { calculateRecieptPoints } from "../functions/calculateRecieptPoints";
import * as morningReciept from "./reciepts/morning-reciept.json";
import * as mmReciept from "./reciepts/mm.json";
import * as targetReciept from "./reciepts/target.json";
import * as simpleReciept from "./reciepts/simple-reciept.json";

describe("Points of reciept can be calculated correctly", () => {
  test("Morning Reciept is calculated correctly", () => {
    const reciept = morningReciept;
    const expectedPoints = 15;
    const actualPoints = calculateRecieptPoints(reciept);
    expect(actualPoints).toBe(expectedPoints);
  });

  test("MM Reciept is calculated correctly", () => {
    const reciept = mmReciept;
    const expectedPoints = 109;
    const actualPoints = calculateRecieptPoints(reciept);
    expect(actualPoints).toBe(expectedPoints);
  });

  test("Target Reciept is calculated correctly", () => {
    const reciept = targetReciept;
    const expectedPoints = 28;
    const actualPoints = calculateRecieptPoints(reciept);
    expect(actualPoints).toBe(expectedPoints);
  });

  test("Simple Reciept is calculated correctly", () => {
    const reciept = simpleReciept;
    const expectedPoints = 31;
    const actualPoints = calculateRecieptPoints(reciept);
    expect(actualPoints).toBe(expectedPoints);
  });
});

describe("calculateRecieptPoints", () => {
  test("should calculate points correctly based on alphanumeric in retailer", () => {
    const reciept = {
      retailer: "ABC123",
      purchaseDate: "2022-01-02",
      purchaseTime: "11:33",
      total: "5.67",
      items: [
        {
          shortDescription: "G",
          price: "2.25",
        },
      ],
    };
    const points = calculateRecieptPoints(reciept);
    expect(points).toBe(6);
  });

  test("should calculate points correctly if total is whole number", () => {
    const reciept = {
      retailer: "&&&&&&&&&&&&&",
      purchaseDate: "2022-01-02",
      purchaseTime: "11:33",
      total: "10.00",
      items: [
        {
          shortDescription: "G",
          price: "2.25",
        },
      ],
    };
    const points = calculateRecieptPoints(reciept);
    expect(points).toBe(75);
  });

  it("should calculate points correctly if total is multiple of 0.25 correctly", () => {
    const reciept = {
      retailer: "&&&&&&&&&&&&&",
      purchaseDate: "2022-01-02",
      purchaseTime: "11:33",
      total: "7.5",
      items: [
        {
          shortDescription: "G",
          price: "2.25",
        },
      ],
    };
    const points = calculateRecieptPoints(reciept);
    expect(points).toBe(25);
  });

  test("should calculate points correctly per two items", () => {
    const reciept = {
      retailer: "&&&&&&&&&&&&&",
      purchaseDate: "2022-01-02",
      purchaseTime: "11:33",
      total: "6.67",
      items: [
        {
          shortDescription: "G",
          price: "2.25",
        },
        {
          shortDescription: "G",
          price: "2.25",
        },
        {
          shortDescription: "G",
          price: "2.25",
        },
        {
          shortDescription: "G",
          price: "2.25",
        },
      ],
    };
    const points = calculateRecieptPoints(reciept);
    expect(points).toBe(10);
  });

  test("should calculate trimmed length points correctly", () => {
    const reciept = {
      retailer: "&&&&&&&&&&&&&",
      purchaseDate: "2022-01-02",
      purchaseTime: "11:33",
      total: "5.58",
      items: [{ shortDescription: "ABC", price: "2.00" }],
    };

    const points = calculateRecieptPoints(reciept);
    expect(points).toBe(1);
  });

  test("should calculate correctly if date is odd", () => {
    const reciept = {
      retailer: "&&&&&&&&&&&&&",
      purchaseDate: "2022-01-01",
      purchaseTime: "11:33",
      total: "7.52",
      items: [
        {
          shortDescription: "G",
          price: "2.25",
        },
      ],
    };
    const points = calculateRecieptPoints(reciept);
    expect(points).toBe(6);
  });

  test("should calculate points correctly if in between two and four", () => {
    const reciept = {
      retailer: "&&&&&&&&&&&&&",
      purchaseDate: "2022-01-02",
      purchaseTime: "14:33",
      total: "7.52",
      items: [
        {
          shortDescription: "G",
          price: "2.25",
        },
      ],
    };
    const points = calculateRecieptPoints(reciept);
    expect(points).toBe(10);
  });
});
