import { Request, Response } from "express"
import { Pet } from "../model/pet";
import { createMenuObject } from "../helpers/CreateMenuObject";
interface Banner {
   title: string;
   background: string;
}

export const home = (req: Request, res: Response) => {
   let list = Pet.getAll();
   const banner: Banner = {
      title: 'Todos os animais',
      background: 'allanimals.jpg'
   }

   res.render('pages/home', {
      banner,
      menu: createMenuObject('all'),
      list
   })
}

export const dogs = (req: Request, res: Response) => {
   let list = Pet.getFromType('dog')
   const banner: Banner = {
      title: 'Cachorros',
      background: 'banner_dog.jpg'
   }

   res.render('pages/home', {
      banner,
      menu: createMenuObject('dog'),
      list
   })
}
export const cats = (req: Request, res: Response) => {
   let list = Pet.getFromType('cat')
   const banner: Banner = {
      title: 'Gatos',
      background: 'banner_cat.jpg'
   }

   res.render('pages/home', { 
      banner, 
      menu: createMenuObject('cat'),
      list
   })
}
export const fishes = (req: Request, res: Response) => {
   let list = Pet.getFromType('fish');
   const banner: Banner = {
      title: 'Peixes',
      background: 'banner_fish.jpg'
   }

   res.render('pages/home', { 
      banner, 
      menu: createMenuObject('fish'),
      list
   })
}