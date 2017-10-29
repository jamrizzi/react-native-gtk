import { Gtk } from 'node-gir';
import { default as GtkElement, GtkProps } from './GtkElement';
import * as signals from './util/signals';

export interface ButtonProps extends GtkProps {
  label?: string;
  onClick?(): void;
}

export default class Button extends GtkElement<Gtk.Button, ButtonProps> {

  node = new Gtk.Button();

  constructor(props: ButtonProps) {
    super(props);
    signals.connect(this.node, 'size-allocate', this.onSizeAllocate); // TODO: disconnect
  }

  private onSizeAllocate = () => {
    const { width, height } = this.props.style!;
    if (width === undefined) {
      this.layout.setWidth(this.node.getAllocatedWidth());
    }
    if (height === undefined) {
      this.layout.setHeight(this.node.getAllocatedHeight());
    }
  }

  setProp(prop: string, value: any) {
    switch (prop) {
      case 'label':
        this.node.setLabel(value);
        break;

      case 'onClick':
        signals.connect(this.node, 'clicked', value);
        break;
    }
  }
}
