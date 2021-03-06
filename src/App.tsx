import * as React from 'react';
import './App.scss';
import CatStats from './components/cat-stats';
import CatAdoptionForm from './components/cat-adoption-form';
import { StoreState } from '@store/index';
import { CatsAction, addCat, Cat, CatAppearance, makeRandomCat } from '@store/cat';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

type OnAddCat = (name: string, cat: CatAppearance) => any;

interface CatListProps {
  cats: Cat[];
  onAddCat: OnAddCat,
};

function mapStateToProps(state: StoreState) {
  return state;
};

function mapDispatchToProps(dispatch: Dispatch<CatsAction>) {
  return {
    onAddCat: (name: string, cat: CatAppearance) => dispatch(addCat(name, cat)),
  };
};

class App extends React.Component<CatListProps, any> {
  constructor(props: CatListProps){
    super(props);
  }

  public onSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.target);
    this.props.onAddCat(data.get('name') as string, makeRandomCat());
    this.render();
  }

  public render() {
    const { onAddCat, cats } = this.props;
    return (
      <div className="app">
        <CatAdoptionForm />
        <div className="cat-crates">
          {cats.map((cat: Cat, i) => (
            <CatStats key={i} {...cat} />
          ))}
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
