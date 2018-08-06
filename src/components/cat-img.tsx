import { CatAppearance } from '@store/cat';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as CatSvg from '@assets/img/cat.svg';
import '@styles/cat-img.scss';

import * as tinycolor from 'tinycolor2';

export interface Props extends CatAppearance {
  id: string;
}

class CatImg extends React.Component<Props, object> {
  constructor(props: Props) {
    super(props);
  }

  get className() {
    return 'cat-img';
  }

  get idAttr() {
    return `cat-img-${this.props.id}`;
  }

  public getUpdatedSvg(): string {
    const { eyeIris, eyePupil, furBase, innerEar } = this.props;
    const parser = new DOMParser();
    const style = document.createElement('style');
    style.appendChild(document.createTextNode(`
      #${this.idAttr} #head > *, #${this.idAttr} #body > * { fill: ${furBase};}
      #${this.idAttr} #tail > path { stroke: ${furBase}; }
      #${this.idAttr} #inner-ear { fill: ${innerEar} }
      #${this.idAttr} #body-bg { fill: ${tinycolor(furBase).darken(10).toString()} }
      #${this.idAttr} #iris > ellipse { fill: ${eyeIris} }
    `));
    const svg = parser.parseFromString(CatSvg, "text/html").querySelector('svg');
    svg.querySelector('defs').appendChild(style);
    return svg.outerHTML;
  }

  public render() {
    return (
      <div className={this.className} id={this.idAttr}
           dangerouslySetInnerHTML={{__html: this.getUpdatedSvg()}}>
      </div>
    );
  }
}

export default CatImg;
