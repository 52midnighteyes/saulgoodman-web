import axios from "axios";
import {
  IRandomUser,
  ISimplifiedUser,
} from "../interface/random-person.interface";

export async function getRandomPeopleRepo(number: number) {
  try {
    const response = await axios.get(
      `https://randomuser.me/api/?results=${number}`
    );

    const user: IRandomUser[] = response.data.results;

    const results: ISimplifiedUser[] = user.map((user) => ({
      fullname: `${user.name.title} ${user.name.first} ${user.name.last}`,
      email: user.email,
      picture: user.picture.large,
    }));

    return results;
  } catch (err) {
    throw err;
  }
}
