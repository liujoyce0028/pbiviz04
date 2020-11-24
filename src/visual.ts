
"use strict";


import powerbi from "powerbi-visuals-api";
import VisualConstructorOptions = powerbi.extensibility.visual.VisualConstructorOptions;
import VisualUpdateOptions = powerbi.extensibility.visual.VisualUpdateOptions;
import IVisual = powerbi.extensibility.visual.IVisual;
import IVisualHost=powerbi.extensibility.visual.IVisualHost;

import ISelectionManager=powerbi.extensibility.ISelectionManager;
import ISelectionIdBuiler=powerbi.extensibility.ISelectionIdBuilder;



//import { VisualSettings } from "./settings";
export class Visual implements IVisual {
 
    private target: HTMLElement;
    private host: IVisualHost;
    private selectionManager:ISelectionManager;
    private selectionIdBuilder:ISelectionIdBuiler;

    constructor(options: VisualConstructorOptions) {
    debugger;
     this.host=options.host;
     this.target=options.element;
     this.selectionManager=options.host.createSelectionManager();
     this.selectionIdBuilder=options.host.createSelectionIdBuilder();

     debugger;

    }

    public update(options: VisualUpdateOptions) {
        let dataViews=options.dataViews;
        let dataView=dataViews[0];

        
        debugger;
        // categories
        const categories = dataView.categorical.categories;
        console.log(categories);

      // create label for 'Manufacturer' column
        const p = document.createElement("p") as HTMLParagraphElement;
        p.innerText = categories[0].source.displayName.toString();
        this.target.appendChild(p);
        console.log(document);

// get count of category elements
const categoriesCount = categories[0].values.length;
// iterate all categories to generate selection and create button elements to use selections
for (let categoryIndex = 0; categoryIndex < categoriesCount; categoryIndex++) {
    const categoryValue: powerbi.PrimitiveValue = categories[0].values[categoryIndex];

    const categorySelectionId = this.host.createSelectionIdBuilder()
        .withCategory(categories[0], categoryIndex) // we have only one category (only one `Manufacturer` column)
        .createSelectionId();
   // this.dataPoints.push({
    //    value: categoryValue,
    //    selection: categorySelectionId
    //});

    console.log(categorySelectionId);

    // create button element to apply selection on click
    const button = document.createElement("button") as HTMLButtonElement;
    button.value = categoryValue.toString();
    button.innerText = categoryValue.toString();
    button.addEventListener("click", () => {
        // handle click event to apply correspond selection
        this.selectionManager.select(categorySelectionId);
    });
    this.target.appendChild(button);
      
    }

  

}
}