import express, { Request, Response } from "express";
import { AppDataSource } from "./dbConfig";
import { Profile } from "./models/Profile";

export const app = express();

app.use(express.json()); // It adds a middleware which handles requests that contain body as json

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome");
});

//CREATE
app.post(
  "/profile",

  async (req: Request, res: Response) => {
    const { name, email } = req.body;
    const profileRepository = AppDataSource.getRepository(Profile);
    const profile = new Profile();
    profile.name = name;
    profile.email = email;
    await profileRepository.save(profile);
    res.send(profile);
  },
);

//READ
app.get("/profile/:profileId", async (req: Request, res: Response) => {
  const { profileId } = req.params;
  const profileRepository = AppDataSource.getRepository(Profile);
  const profile = await profileRepository.findOneBy({
    id: parseInt(profileId),
  });
  if (profile) {
    res.send(profile);
  } else {
    res.sendStatus(404);
  }
});

app.get("/profile", async (req: Request, res: Response) => {
  const profileRepository = AppDataSource.getRepository(Profile);
  const profiles = await profileRepository.find({});
  res.send(profiles);
});

// UPDATE
// localhost:8080/profile/100
app.put("/profile/:profileId", async (req: Request, res: Response) => {
  const { profileId } = req.params;
  const profileRepository = AppDataSource.getRepository(Profile);
  const profile = await profileRepository.findOneBy({
    id: parseInt(profileId),
  });
  if (profile) {
    //write the update code
    const { name, email } = req.body;
    profile.name = name;
    profile.email = email;
    await profileRepository.save(profile);
    res.send(profile);
  } else {
    //throw 404: NOt Found
    res.sendStatus(404);
  }
});

//DELETE
app.delete("/profile/:profileId", async (req: Request, res: Response) => {
  const { profileId } = req.params;
  const profileRepository = AppDataSource.getRepository(Profile);

  // This method only works fopr primary key
  const result = profileRepository.delete(parseInt(profileId));
  res.send(result);
});
