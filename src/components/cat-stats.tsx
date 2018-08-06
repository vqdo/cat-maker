import { Cat } from '@store/cat';
import CatImg from './cat-img';
import * as React from 'react';
import '@styles/cat-stats.scss';

export type Props = Cat;

class CatStats extends React.Component<Props, object> {

  get className() {
    return 'cat-stats';
  }

  get stats() {
    const { fullness } = this.props;
    return [
      ['fullness', fullness],
    ];
  }

  public render() {
    const { id, name, appearance } = this.props;

    return (
      <div className={this.className}>
        <div className='cat-img-container'>
          <CatImg {...appearance} id={id} />
        </div>
        <table className="stats-table">
          <tbody>
            <tr>
              <td colSpan={2}>
                <h1>{name}</h1>
              </td>
            </tr>
            {this.stats.map(([attr, value], i) => (
              <tr key={i}>
                <td>{attr}</td>
                <td>{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default CatStats;
