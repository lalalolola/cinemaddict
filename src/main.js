import UserRoleView from './view/user-role-view.js';
import AmountOfFilmsView from './view/amount-of-films-view';
import MainNavigationView from './view/main-navigation-view';

import {render} from './render.js';

import FilmsPresenter from './presenter/films-presenter';

const bodyElement = document.querySelector('body');
const siteMainElement = bodyElement.querySelector('.main');
const siteHeaderElement = bodyElement.querySelector('.header');
const siteFooterElement = bodyElement.querySelector('.footer');

const filmsPresenter = new FilmsPresenter;

render(new UserRoleView(), siteHeaderElement);
render(new MainNavigationView(), siteMainElement);
render(new AmountOfFilmsView(), siteFooterElement);

filmsPresenter.init(siteMainElement);

