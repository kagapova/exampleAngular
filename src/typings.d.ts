/* SystemJS module definition */
declare var module: NodeModule;
interface NodeModule {
  id: string;
}

declare var BancorConvertWidget: {
    showConvertPopup(action: string, baseId: string, toId: string): void;
}
