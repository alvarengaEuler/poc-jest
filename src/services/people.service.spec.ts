import {swapiGetter} from "./people.service";
import axios from 'axios';

jest.mock("axios")
const mockAxios = axios as jest.Mocked<typeof axios>

// jest.mock("axios", () => ({
//   __esModule: true,
//   default: {
//     get: jest.fn().mockResolvedValue({ data: { name: "Mock Jedi" } })
//   },
// }));

// jest.spyOn(axios, 'get').mockResolvedValue({
//   data: { data: { name: "Mock Jedi" } }
// });



// beforeEach(() => {
//   jest.restoreAllMocks();  // Contrary to my expectation, this line does not cause jest.mock() to become reset
// });

// beforeEach(jest.resetAllMocks);
describe("swapiGetter", () => {
  const data = [{name: "Euler"}]
  test("should return a name", async () => {
    mockAxios.get.mockResolvedValue({data: { items: [{name: "Euler  "}]}});
    // jest.fn().mockImplementation(() => Promise.resolve({data: { items: [{name: "Euler"}]}}));

    const result = await swapiGetter(1);
    expect(result).toEqual(data);
   
  });
  test("should call once", async () => {
    mockAxios.get.mockResolvedValue({data: { items: [{name: "Euler"}]}});
    

    // jest.fn().mockImplementation(() => Promise.resolve({ data: { name: "Mock Jedi" } }));

    const result = await swapiGetter(1);
    console.log(result)
    
    expect(mockAxios.get).toHaveBeenCalledTimes(1);
  });
});

