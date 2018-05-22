/* SystemJS module definition */
declare var module: NodeModule;
interface NodeModule {
    id: string;
}

interface BancorWidgetSettings {
    type: string;
    baseCurrencyId: string;
    pairCurrencyId: string;
    primaryColor?: string;
    hideVolume?: boolean;
    primaryColorHover?: string;
}

declare var BancorConvertWidget: {
    init(settings: BancorWidgetSettings);
    showConvertPopup(action: string, baseId: string, toId: string): void;
}
