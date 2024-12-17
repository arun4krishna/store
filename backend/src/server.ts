import express from "express";
import cors from "cors";
import { sample_foods, sample_tags } from "./data";

const app = express();
app.use(cors({
    credentials: true,
    origin: ["http://localhost:4200"]
}))

app.get("/api/foods", (req: any, res: any)=>{
    // debugger
    res.send(sample_foods)
})

app.get("/api/foods/search/:searchTerm", (req: any, res: any)=>{
    // debugger
    const searcTerm =req.params.searchTerm;
    const foods = sample_foods.filter(food => food.name.toLowerCase().includes(searcTerm.toLowerCase()))
    res.send(foods);
})

app.get("/api/foods/tags", (req: any, res: any)=> {
    res.send(sample_tags)
})

app.get("/api/foods/tag/:tagName", (req: any, res: any)=>{
    // debugger
    const tagName =req.params.tagName;
    const foods = sample_foods.filter(food => food.tags?.includes(tagName))
    res.send(foods);
})

app.get("/api/foods/:foodId", (req: any, res: any)=>{
    // debugger
    const foodId =req.params.foodId;
    const foods = sample_foods.filter(food => food.id == foodId)
    res.send(foods);
})
const port = 5000;
app.listen(port, ()=> {
    console.log("Website served on http://localhost:" + port)
})