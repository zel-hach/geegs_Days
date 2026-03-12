import express from 'express';
import { getMenu,addMenuItem, getMenuItem,updateMenuItem,deleteMenuItem } from '../controllers/menuController.js';
const routerMenu = express.Router();


routerMenu.get('/menu',getMenu);
routerMenu.get('/menu/:name',getMenuItem);
routerMenu.post('/menu',addMenuItem);
routerMenu.put('/menu/:id',updateMenuItem);
routerMenu.delete('/menu/:id',deleteMenuItem);

export default routerMenu;