/* 
   Copyright (c) 2023 Promineo Tech
   Author:  Promineo Tech Academic Team
   Subject:  Object Oriented Programming (OOP) Lab
   FE Lab 05
*/

/* ----------------------------------------------------- */

/* Key Terms:
 * Class
 * Constructor
 * Object
 * Method
 * Instance
 * Instantiate
 * Parameter
 * Argument
 * Invoke or call a function
 * Superclass or Parent class
 * Subclass or Child class
 *
 * Objectives:
 * ​Utilize appropriate data types and structures.
 * Use dot notation to access object property values
 * Create an instance of a class
 * Call methods of an instantiated class
 * Understand how inheritance works in basic OOP
 * Use superclasses and subclasses
 */

class MenuItem {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

class Menu {
  constructor() {
    this.items = [];
  }

  addItem(item) {
    this.items.push(item);
  }

  deleteItem(index) {
    this.items.splice(index, 1);
  }

  viewMenu() {
    let menuList = "";
    this.items.forEach((item, index) => {
      menuList += `${index + 1}. ${item.name} - $${item.price}\n`;
    });
    return menuList;
  }
}

const menu = new Menu();

function createItem() {
  const name = prompt("Enter the name of the menu item:");
  const price = parseFloat(prompt("Enter the price of the menu item:"));
  const item = new MenuItem(name, price);
  menu.addItem(item);
}

function viewMenu() {
  alert(menu.viewMenu());
}

function deleteItem() {
  const index = parseInt(prompt("Enter the index of the item you want to delete:"));
  menu.deleteItem(index - 1);
}

function showMenuOptions() {
  const option = parseInt(prompt("Select an option:\n1. Create menu item\n2. View menu\n3. Delete menu item"));
  switch (option) {
    case 1:
      createItem();
      break;
    case 2:
      viewMenu();
      break;
    case 3:
      deleteItem();
      break;
    default:
      alert("Invalid option selected.");
      break;
  }
}

while (true) {
  showMenuOptions();
}
