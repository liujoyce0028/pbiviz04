import { Visual } from "../../src/visual";
import powerbiVisualsApi from "powerbi-visuals-api"
import IVisualPlugin = powerbiVisualsApi.visuals.plugins.IVisualPlugin
import VisualConstructorOptions = powerbiVisualsApi.extensibility.visual.VisualConstructorOptions
var powerbiKey: any = "powerbi";
var powerbi: any = window[powerbiKey];

var pbiviz04A3F5EA5ED1FC4542BA66C4BC4A3540D7_DEBUG: IVisualPlugin = {
    name: 'pbiviz04A3F5EA5ED1FC4542BA66C4BC4A3540D7_DEBUG',
    displayName: 'pbiviz04',
    class: 'Visual',
    apiVersion: '2.6.0',
    create: (options: VisualConstructorOptions) => {
        if (Visual) {
            return new Visual(options);
        }

        throw 'Visual instance not found';
    },
    custom: true
};

if (typeof powerbi !== "undefined") {
    powerbi.visuals = powerbi.visuals || {};
    powerbi.visuals.plugins = powerbi.visuals.plugins || {};
    powerbi.visuals.plugins["pbiviz04A3F5EA5ED1FC4542BA66C4BC4A3540D7_DEBUG"] = pbiviz04A3F5EA5ED1FC4542BA66C4BC4A3540D7_DEBUG;
}

export default pbiviz04A3F5EA5ED1FC4542BA66C4BC4A3540D7_DEBUG;