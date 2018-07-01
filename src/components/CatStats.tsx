import { Cat } from '@store/cat';
import * as React from 'react';

export type Props = Cat;

class CatStats extends React.Component<Props, object> {

  get className() {
    return 'cat-stats';
  }

  get stats() {
    const { hunger } = this.props;
    return [
      ['hunger', hunger],
    ];
  }

  public render() {
    const { name } = this.props;

    return (
      <div className={this.className}>
        <h1>{name}</h1>
        <table className="stats-table">
          <tbody>
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
