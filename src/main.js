import UserRoleView from './view/user-role-view.js';
import AmountOfFilmsView from './view/amount-of-films-view';
import MainNavigationView from './view/main-navigation-view';
import {render} from './render.js';
import FilmsPresenter from './presenter/films-presenter';

const siteMainElement = document.querySelector('.main');
const siteHeaderElement = document.querySelector('.header');
const siteFooterElement = document.querySelector('.footer');
const filmsPresenter = new FilmsPresenter;
// const siteNavigationElement = siteMainElement.querySelector('')

render(new UserRoleView(), siteHeaderElement);
render(new AmountOfFilmsView(), siteFooterElement);
render(new MainNavigationView(), siteMainElement);

filmsPresenter.init(siteMainElement);

