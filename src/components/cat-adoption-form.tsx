import * as React from 'react';
import CatStats from './cat-stats';
import { StoreState } from '@store/index';
import { CatsAction, addCat, Cat, CatAppearance, makeRandomCat } from '@store/cat';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

type OnAddCat = (name: string, cat: CatAppearance) => any;

interface CatAdoptionFormProps {
  onAddCat: OnAddCat,
};


function mapStateToProps(state: StoreState) {
  return {};
};

function mapDispatchToProps(dispatch: Dispatch<CatsAction>) {
  return {
    onAddCat: (name: string, cat: CatAppearance) => dispatch(addCat(name, cat)),
  };
};

class CreateACatForm extends React.Component<CatAdoptionFormProps, any> {
  constructor(props: any){
    super(props);
  }

  public onSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.target);
    this.props.onAddCat(data.get('name') as string, makeRandomCat());
    this.render();
  }

  public render() {
    return (
      <div className="app">
        <form onSubmit={this.onSubmit.bind(this)} className="adopt-a-cat-form">
          <input type="text" name="name" placeholder="Your cat name..." />
          <input type="submit" value="Add Cat" />
        </form>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateACatForm);
