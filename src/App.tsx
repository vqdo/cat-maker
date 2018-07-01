import * as React from 'react';
import './App.scss';
import CatStats from './components/CatStats';
import { StoreState } from '@store/index';
import { CatsAction, addCat, Cat } from '@store/cat';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

type OnAddCat = ({name: string}) => any;

export interface CatProps {
  name: string;
  hunger: number;
};

export interface CatListProps {
  cats: CatProps[];
  onAddCat: OnAddCat,
};

function mapStateToProps(state: StoreState) {
  return state;
};

function mapDispatchToProps(dispatch: Dispatch<CatsAction>) {
  return {
    onAddCat: ({name}) => dispatch(addCat(name)),
  };
};

class App extends React.Component<CatListProps, any> {
  constructor(props: CatListProps){
    super(props);
  }

  public onSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.target);
    this.props.onAddCat({name: data.get('name')});
  }

  public render() {
    const { onAddCat, cats } = this.props;
    return (
      <div className="App">
        <form onSubmit={this.onSubmit.bind(this)}>
          <input type="text" name="name" placeholder="Your cat name..." />
          <input type="submit" value="Add Cat" />
        </form>
        {cats.map((cat: CatProps, i) => (
          <CatStats key={i} {...cat} />
        ))}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
