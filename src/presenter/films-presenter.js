import FiltersView from '../view/filters-view';
import FilmsView from '../view/films-view';
import FilmsListView from '../view/films-list-view';
import FilmsListContainerView from '../view/films-list-container-view';
import FilmCardView from '../view/film-card-view';
import ButtonShowMoreView from '../view/button-show-more-view';
import FilmsTopRatedListView from '../view/films-top-rated-list-view';
import FilmsMostCommentedListView from '../view/films-most-commented-list-view.js';
import {render} from '../render';

export default class FilmsPresenter {
  filmsComponent = new FilmsView();
  filmsListComponent = new FilmsListView();
  filmsListContainerComponent = new FilmsListContainerView();
  filmsMostCommentedListContainerComponent = new FilmsListContainerView();
  filmsTopRatedListContainerComponent = new FilmsListContainerView();
  FilmsMostCommentedListView = new FilmsMostCommentedListView();
  FilmsTopRatedListView = new FilmsTopRatedListView();

  init = (filmsContainer) => {
    this.filmsContainer = filmsContainer;

    render(new FiltersView(), this.filmsContainer);
    render(this.filmsComponent, this.filmsContainer);
    render(this.filmsListComponent, this.filmsComponent.getElement());
    render(this.filmsListContainerComponent, this.filmsListComponent.getElement());

    for (let i = 0; i < 5; i++) {
      render(new FilmCardView(), this.filmsListContainerComponent.getElement());
    }

    render(new ButtonShowMoreView(), this.filmsListComponent.getElement());
    render(this.FilmsTopRatedListView, this.filmsComponent.getElement());
    render(this.FilmsMostCommentedListView, this.filmsComponent.getElement());
    render(this.filmsMostCommentedListContainerComponent, this.FilmsMostCommentedListView.getElement());
    render(this.filmsTopRatedListContainerComponent, this.FilmsTopRatedListView.getElement());

    for (let i = 0; i < 2; i++) {
      render(new FilmCardView(), this.filmsMostCommentedListContainerComponent.getElement());
      render(new FilmCardView(), this.filmsTopRatedListContainerComponent.getElement());
    }
  };
}
