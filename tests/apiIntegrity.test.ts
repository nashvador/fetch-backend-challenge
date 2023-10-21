import supertest from "supertest";
import app from "../app";
import * as mmReciept from "./reciepts/mm.json";

const api = supertest(app);

describe("Ability to access api endpoints", () => {
  const receipt = mmReciept;
  let recieptId;
  test("Can create a reciept and recieve an id", async () => {
    const response = await api.post("/receipts/process").send(receipt);
    recieptId = response.body.id;
    expect(response.body).toBeDefined;
    expect(response.body.id).toHaveLength(36);
    expect(response.statusCode).toBe(200);
  });

  test("Verify if can get reciept points after searching id", async () => {
    const response = await api.get(`/receipts/${recieptId!}/points`);
    expect(response.body.points).toBe(109);
    expect(response.statusCode).toBe(200);
  });
});

describe("Ability to recieve errors after submitting incorrect api endpoints", () => {
  test("Verify if reciept id does not exist you cannot find reciept", async () => {
    const response = await api.get(`/receipts/0/points`);
    expect(response.body.error).toBe(
      "The reciept with id 0 has not been found."
    );
    expect(response.statusCode).toBe(404);
  });

  test("Verify if invalid reciept(missing field), you get an error message", async () => {
    const reciept = {
      total: "7.52",
      items: [
        {
          shortDescription: "G",
          price: "2.25",
        },
      ],
    };
    const response = await api.post("/receipts/process").send(reciept);

    expect(response.body.error).toBe("The receipt is invalid");
    expect(response.statusCode).toBe(400);
  });
});
